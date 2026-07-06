import { Router } from "express";
import { eq } from "drizzle-orm";
import { db, users, payments } from "@workspace/db";
import {
  CreatePaymentOrderResponse,
  VerifyPaymentBody,
  VerifyPaymentResponse,
} from "@workspace/api-zod";
import { requireAuth } from "../middlewares/requireAuth";
import { serializeMe, userHasAccess } from "../lib/entitlement";
import {
  PROGRAM_PRICE_PAISE,
  PROGRAM_CURRENCY,
  isRazorpayConfigured,
  getRazorpayClient,
  getRazorpayKeyId,
  verifyPaymentSignature,
} from "../lib/razorpay";

export const paymentsRouter = Router();

/**
 * Allowlist for the post-checkout redirect target. Prevents this
 * unauthenticated shim from being abused as an open redirector: we only
 * accept the mobile app's own return URIs.
 *  - `mobile:`  → the app's custom scheme (production/dev builds)
 *  - `exp:`     → Expo Go development client
 *  - `https:`   → Expo web preview, restricted to Replit-hosted domains
 */
function isAllowedRedirect(raw: string): boolean {
  let url: URL;
  try {
    url = new URL(raw);
  } catch {
    return false;
  }
  if (url.protocol === "mobile:" || url.protocol === "exp:") return true;
  if (url.protocol === "https:") {
    const host = url.hostname.toLowerCase();
    return (
      host === "replit.dev" ||
      host.endsWith(".replit.dev") ||
      host === "repl.co" ||
      host.endsWith(".repl.co")
    );
  }
  return false;
}

/**
 * Presentational hosted-checkout shim for the mobile app. The Expo client
 * opens this page in an in-app browser (expo-web-browser), it loads Razorpay's
 * checkout.js for the given order, and on completion redirects back to the
 * app's return URL with the razorpay_* params. No payment logic lives here —
 * the payment is still verified server-side via POST /payments/verify.
 */
paymentsRouter.get("/payments/checkout", (req, res) => {
  const orderId = String(req.query.orderId ?? "");
  const keyId = String(req.query.keyId ?? "");
  const amount = String(req.query.amount ?? "");
  const currency = String(req.query.currency ?? "INR");
  const redirect = String(req.query.redirect ?? "");
  const prefillEmail = String(req.query.email ?? "");

  if (!orderId || !keyId || !amount || !isAllowedRedirect(redirect)) {
    res.status(400).send("Invalid checkout request");
    return;
  }

  const opts = JSON.stringify({
    key: keyId,
    amount: Number(amount),
    currency,
    order_id: orderId,
    name: "Upskil OS",
    description: "Unlock the full 28-day program",
    prefill: prefillEmail ? { email: prefillEmail } : {},
    theme: { color: "#7c5cff" },
  });
  const redirectJson = JSON.stringify(redirect);

  res.type("html").send(`<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Upskil OS — Checkout</title>
    <style>
      html,body{height:100%;margin:0;background:#0f1114;color:#e5e7eb;
        font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;}
      .wrap{height:100%;display:flex;align-items:center;justify-content:center;
        flex-direction:column;gap:14px;text-align:center;padding:24px;}
      .spinner{width:36px;height:36px;border-radius:50%;border:3px solid #2a2d33;
        border-top-color:#7c5cff;animation:spin 1s linear infinite;}
      @keyframes spin{to{transform:rotate(360deg);}}
      button{margin-top:8px;padding:12px 20px;border-radius:12px;border:none;
        background:#7c5cff;color:#fff;font-size:15px;font-weight:600;}
    </style>
  </head>
  <body>
    <div class="wrap">
      <div class="spinner"></div>
      <div>Opening secure checkout…</div>
    </div>
    <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
    <script>
      var REDIRECT = ${redirectJson};
      function go(params) {
        var sep = REDIRECT.indexOf('?') === -1 ? '?' : '&';
        window.location.replace(REDIRECT + sep + params);
      }
      var opts = ${opts};
      opts.handler = function (r) {
        go('razorpay_payment_id=' + encodeURIComponent(r.razorpay_payment_id) +
           '&razorpay_order_id=' + encodeURIComponent(r.razorpay_order_id) +
           '&razorpay_signature=' + encodeURIComponent(r.razorpay_signature));
      };
      opts.modal = { ondismiss: function () { go('status=cancelled'); } };
      try {
        var rzp = new Razorpay(opts);
        rzp.on('payment.failed', function () { go('status=failed'); });
        rzp.open();
      } catch (e) {
        document.querySelector('.wrap').innerHTML =
          '<div>Could not start checkout.</div>' +
          '<button onclick="go(\\'status=failed\\')">Go back</button>';
      }
    </script>
  </body>
</html>`);
});

paymentsRouter.post("/payments/order", requireAuth, async (req, res) => {
  if (!isRazorpayConfigured()) {
    res.status(503).json({ error: "Payments are not configured yet." });
    return;
  }

  const [user] = await db.select().from(users).where(eq(users.id, req.userId!));
  if (userHasAccess(user)) {
    res.status(400).json({ error: "You already have full access." });
    return;
  }

  try {
    const order = await getRazorpayClient().orders.create({
      amount: PROGRAM_PRICE_PAISE,
      currency: PROGRAM_CURRENCY,
      receipt: `unlock_${req.userId}_${Date.now()}`,
      notes: { userId: String(req.userId) },
    });

    await db
      .insert(payments)
      .values({
        userId: req.userId!,
        razorpayOrderId: order.id,
        amount: PROGRAM_PRICE_PAISE,
        currency: PROGRAM_CURRENCY,
        status: "created",
      })
      .onConflictDoNothing({ target: payments.razorpayOrderId });

    res.json(
      CreatePaymentOrderResponse.parse({
        orderId: order.id,
        amount: PROGRAM_PRICE_PAISE,
        currency: PROGRAM_CURRENCY,
        razorpayKeyId: getRazorpayKeyId()!,
      }),
    );
  } catch (err) {
    req.log.error({ err }, "Failed to create Razorpay order");
    res.status(503).json({ error: "Could not create payment order." });
  }
});

/**
 * Dev/testing-only shortcut: grant the authenticated user full access without
 * going through Razorpay. Disabled in production so it can never be used to
 * bypass real payment. Used by the paywall when Razorpay isn't configured so
 * the funnel can still be tested end-to-end (quiz → account → dashboard).
 */
paymentsRouter.post("/payments/dev-unlock", requireAuth, async (req, res) => {
  if (process.env.NODE_ENV === "production") {
    res.status(404).json({ error: "Not found" });
    return;
  }
  const [updated] = await db
    .update(users)
    .set({ hasPaid: true, paidAt: new Date() })
    .where(eq(users.id, req.userId!))
    .returning();
  res.json(serializeMe(updated));
});

paymentsRouter.post("/payments/verify", requireAuth, async (req, res) => {
  const body = VerifyPaymentBody.safeParse(req.body);
  if (!body.success) {
    res.status(400).json({ error: "Invalid payment payload" });
    return;
  }
  const { razorpayOrderId, razorpayPaymentId, razorpaySignature } = body.data;

  const valid = verifyPaymentSignature(
    razorpayOrderId,
    razorpayPaymentId,
    razorpaySignature,
  );
  if (!valid) {
    res.status(400).json({ error: "Payment verification failed" });
    return;
  }

  // Ensure this order belongs to the authenticated user.
  const [payment] = await db
    .select()
    .from(payments)
    .where(eq(payments.razorpayOrderId, razorpayOrderId));
  if (!payment || payment.userId !== req.userId!) {
    res.status(400).json({ error: "Unknown order" });
    return;
  }

  const user = await db.transaction(async (tx) => {
    await tx
      .update(payments)
      .set({ status: "paid", razorpayPaymentId })
      .where(eq(payments.razorpayOrderId, razorpayOrderId));
    const [updated] = await tx
      .update(users)
      .set({ hasPaid: true, paidAt: new Date() })
      .where(eq(users.id, req.userId!))
      .returning();
    return updated;
  });

  res.json(VerifyPaymentResponse.parse(serializeMe(user)));
});
