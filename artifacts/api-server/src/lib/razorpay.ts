import crypto from "crypto";
import Razorpay from "razorpay";

export const PROGRAM_PRICE_PAISE = 149900; // ₹1,499 one-time to unlock Days 2-28
export const PROGRAM_CURRENCY = "INR";

const keyId = process.env.RAZORPAY_KEY_ID;
const keySecret = process.env.RAZORPAY_KEY_SECRET;

export function isRazorpayConfigured(): boolean {
  return Boolean(keyId && keySecret);
}

export function getRazorpayKeyId(): string | undefined {
  return keyId;
}

let client: Razorpay | null = null;
export function getRazorpayClient(): Razorpay {
  if (!keyId || !keySecret) {
    throw new Error("Razorpay is not configured");
  }
  if (!client) {
    client = new Razorpay({ key_id: keyId, key_secret: keySecret });
  }
  return client;
}

/** Verify the checkout callback signature (HMAC of `${orderId}|${paymentId}`). */
export function verifyPaymentSignature(
  orderId: string,
  paymentId: string,
  signature: string,
): boolean {
  if (!keySecret) return false;
  const expected = crypto
    .createHmac("sha256", keySecret)
    .update(`${orderId}|${paymentId}`)
    .digest("hex");
  try {
    return crypto.timingSafeEqual(
      Buffer.from(expected),
      Buffer.from(signature),
    );
  } catch {
    return false;
  }
}

/** Verify a webhook payload signature against RAZORPAY_WEBHOOK_SECRET. */
export function verifyWebhookSignature(
  rawBody: Buffer | string,
  signature: string,
): boolean {
  const secret = process.env.RAZORPAY_WEBHOOK_SECRET;
  if (!secret) return false;
  const expected = crypto
    .createHmac("sha256", secret)
    .update(rawBody)
    .digest("hex");
  try {
    return crypto.timingSafeEqual(
      Buffer.from(expected),
      Buffer.from(signature),
    );
  } catch {
    return false;
  }
}
