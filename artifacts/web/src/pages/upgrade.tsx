import { useState } from "react";
import { Redirect, useLocation, Link } from "wouter";
import { Show } from "@clerk/react";
import { useQueryClient } from "@tanstack/react-query";
import { motion } from "framer-motion";
import {
  Sparkles, CheckCircle2, ArrowLeft, Loader2, Lock, Infinity as InfinityIcon,
  Trophy, MessageSquare, Headphones, ShieldCheck,
} from "lucide-react";
import {
  useGetMe,
  useCreatePaymentOrder,
  useVerifyPayment,
  getGetMeQueryKey,
} from "@workspace/api-client-react";
import type { PaymentOrder } from "@workspace/api-client-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const RAZORPAY_SCRIPT = "https://checkout.razorpay.com/v1/checkout.js";

function loadRazorpay(): Promise<boolean> {
  return new Promise((resolve) => {
    if (typeof window === "undefined") return resolve(false);
    if ((window as any).Razorpay) return resolve(true);
    const existing = document.querySelector(`script[src="${RAZORPAY_SCRIPT}"]`);
    if (existing) {
      existing.addEventListener("load", () => resolve(true));
      existing.addEventListener("error", () => resolve(false));
      return;
    }
    const script = document.createElement("script");
    script.src = RAZORPAY_SCRIPT;
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
}

const PERKS = [
  { icon: <InfinityIcon className="w-5 h-5" />, text: "Unlock all 28 days of missions" },
  { icon: <MessageSquare className="w-5 h-5" />, text: "Unlimited AI mentor feedback" },
  { icon: <Headphones className="w-5 h-5" />, text: "AI audio deep-dives for every lesson" },
  { icon: <Trophy className="w-5 h-5" />, text: "XP, streaks, achievements & certificate" },
];

export default function UpgradePage() {
  return (
    <div className="theme-daylight">
      <Show when="signed-in">
        <UpgradeContent />
      </Show>
      <Show when="signed-out">
        <Redirect to="/sign-in" />
      </Show>
    </div>
  );
}

function UpgradeContent() {
  const [, setLocation] = useLocation();
  const queryClient = useQueryClient();
  const { data: me, isLoading } = useGetMe();
  const createOrder = useCreatePaymentOrder();
  const verifyPayment = useVerifyPayment();
  const [processing, setProcessing] = useState(false);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[hsl(var(--bg))] flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-[hsl(var(--accent))]" />
      </div>
    );
  }

  if (me?.hasAccess) {
    return <Redirect to="/dashboard" />;
  }

  const formatPrice = (order: PaymentOrder) =>
    new Intl.NumberFormat("en-IN", { style: "currency", currency: order.currency, maximumFractionDigits: 0 }).format(
      order.amount / 100,
    );

  const handleUpgrade = async () => {
    setProcessing(true);
    const loaded = await loadRazorpay();
    if (!loaded) {
      toast.error("Could not load the payment window. Please try again.");
      setProcessing(false);
      return;
    }

    createOrder.mutate(undefined, {
      onSuccess: (order) => {
        const options = {
          key: order.razorpayKeyId,
          amount: order.amount,
          currency: order.currency,
          name: "Upskil OS",
          description: "28-Day AI Mastery Program — full access",
          order_id: order.orderId,
          prefill: {
            email: me?.email ?? undefined,
            name: me?.displayName ?? undefined,
          },
          theme: { color: "#6366f1" },
          handler: (response: {
            razorpay_order_id: string;
            razorpay_payment_id: string;
            razorpay_signature: string;
          }) => {
            verifyPayment.mutate(
              {
                data: {
                  razorpayOrderId: response.razorpay_order_id,
                  razorpayPaymentId: response.razorpay_payment_id,
                  razorpaySignature: response.razorpay_signature,
                },
              },
              {
                onSuccess: () => {
                  queryClient.invalidateQueries({ queryKey: getGetMeQueryKey() });
                  toast.success("Payment successful — full access unlocked!");
                  setLocation("/dashboard");
                },
                onError: () => {
                  toast.error("We couldn't verify your payment. If you were charged, contact support.");
                  setProcessing(false);
                },
              },
            );
          },
          modal: {
            ondismiss: () => setProcessing(false),
          },
        };
        const rzp = new (window as any).Razorpay(options);
        rzp.on("payment.failed", () => {
          toast.error("Payment failed. Please try again.");
          setProcessing(false);
        });
        rzp.open();
      },
      onError: (err: any) => {
        const status = err?.status;
        toast.error(
          status === 503
            ? "Payments aren't configured yet. Please try again later."
            : "Couldn't start checkout. Please try again.",
        );
        setProcessing(false);
      },
    });
  };

  const priceLabel = createOrder.data ? formatPrice(createOrder.data) : "₹1,499";

  return (
    <div className="min-h-screen bg-[hsl(var(--bg))] font-sans">
      <header className="h-16 border-b border-[hsl(var(--border))] flex items-center px-6 max-w-3xl mx-auto">
        <Link href="/dashboard" className="flex items-center gap-2 text-[hsl(var(--text-muted))] hover:text-[hsl(var(--text))] transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to dashboard
        </Link>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[hsl(var(--accent))/0.1] text-[hsl(var(--accent))] font-bold text-sm tracking-wider uppercase mb-6">
            <Lock className="w-4 h-4" /> You finished Day 1
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-[hsl(var(--text))] tracking-tight mb-4">
            Unlock your full 28-day program
          </h1>
          <p className="text-lg text-[hsl(var(--text-muted))] max-w-xl mx-auto">
            {me?.programTitle
              ? `Continue "${me.programTitle}" with lifetime access to every mission.`
              : "One payment. Lifetime access to every mission, mentor and tool."}
          </p>
        </motion.div>

        <div className="os-card p-8 max-w-xl mx-auto">
          <div className="flex items-end justify-center gap-2 mb-8">
            <span className="text-5xl font-bold font-heading text-[hsl(var(--text))]">{priceLabel}</span>
            <span className="text-[hsl(var(--text-muted))] mb-2">one-time · lifetime access</span>
          </div>

          <ul className="space-y-4 mb-8">
            {PERKS.map((perk) => (
              <li key={perk.text} className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-[hsl(var(--accent))/0.1] flex items-center justify-center text-[hsl(var(--accent))] flex-shrink-0">
                  {perk.icon}
                </div>
                <span className="text-[hsl(var(--text))] font-medium">{perk.text}</span>
              </li>
            ))}
          </ul>

          <Button
            onClick={handleUpgrade}
            disabled={processing}
            className="w-full h-14 text-lg bg-[hsl(var(--accent))] hover:bg-[hsl(var(--accent))/0.9] text-white rounded-full"
          >
            {processing ? (
              <><Loader2 className="w-5 h-5 mr-2 animate-spin" /> Processing…</>
            ) : (
              <><Sparkles className="w-5 h-5 mr-2" /> Unlock Full Access</>
            )}
          </Button>

          <div className="flex items-center justify-center gap-2 mt-5 text-sm text-[hsl(var(--text-muted))]">
            <ShieldCheck className="w-4 h-4 text-[hsl(var(--accent-2))]" />
            Secure payment via Razorpay
          </div>
        </div>

        <div className="flex items-center justify-center gap-6 mt-10 text-[hsl(var(--text-muted))]">
          <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[hsl(var(--accent-2))]" /> 40,000+ learners</div>
          <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[hsl(var(--accent-2))]" /> AI-graded feedback</div>
          <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[hsl(var(--accent-2))]" /> Certificate</div>
        </div>
      </main>
    </div>
  );
}
