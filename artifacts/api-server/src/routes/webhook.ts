import type { Request, Response } from "express";
import { eq } from "drizzle-orm";
import { db, users, payments } from "@workspace/db";
import { verifyWebhookSignature } from "../lib/razorpay";

/**
 * Razorpay webhook. Registered with a raw body parser so the HMAC signature
 * can be verified. Marks the payment paid and unlocks the user on
 * `payment.captured` / `order.paid`.
 */
export async function razorpayWebhookHandler(
  req: Request,
  res: Response,
): Promise<void> {
  const signature = req.headers["x-razorpay-signature"];
  const rawBody: Buffer | string = req.body;

  if (typeof signature !== "string" || !verifyWebhookSignature(rawBody, signature)) {
    res.status(400).json({ error: "Invalid webhook signature" });
    return;
  }

  let event: any;
  try {
    event = JSON.parse(rawBody.toString());
  } catch {
    res.status(400).json({ error: "Invalid payload" });
    return;
  }

  try {
    const entity =
      event?.payload?.payment?.entity ?? event?.payload?.order?.entity;
    const orderId: string | undefined = entity?.order_id ?? entity?.id;
    const paymentId: string | undefined = entity?.id;

    if (
      (event?.event === "payment.captured" || event?.event === "order.paid") &&
      orderId
    ) {
      const [payment] = await db
        .select()
        .from(payments)
        .where(eq(payments.razorpayOrderId, orderId));

      if (payment && payment.status !== "paid") {
        await db.transaction(async (tx) => {
          await tx
            .update(payments)
            .set({
              status: "paid",
              razorpayPaymentId: paymentId ?? payment.razorpayPaymentId,
            })
            .where(eq(payments.razorpayOrderId, orderId));
          await tx
            .update(users)
            .set({ hasPaid: true, paidAt: new Date() })
            .where(eq(users.id, payment.userId));
        });
      }
    }
  } catch (err) {
    req.log.error({ err }, "Error processing Razorpay webhook");
  }

  // Always ack a validly-signed webhook so Razorpay stops retrying.
  res.json({ received: true });
}
