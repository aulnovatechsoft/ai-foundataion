import { useState, useEffect, useRef } from "react";
import { Redirect, useLocation, Link } from "wouter";
import { Show } from "@clerk/react";
import { useQueryClient } from "@tanstack/react-query";
import { motion } from "framer-motion";
import {
  Sparkles, CheckCircle2, ArrowLeft, Loader2, Lock, Infinity as InfinityIcon,
  Trophy, MessageSquare, Headphones, ShieldCheck, Star, Clock,
} from "lucide-react";
import {
  useGetMe,
  useCreatePaymentOrder,
  useVerifyPayment,
  getGetMeQueryKey,
} from "@workspace/api-client-react";
import type { PaymentOrder } from "@workspace/api-client-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { TESTIMONIALS, ONBOARDING_STORAGE_KEY, ASPIRATION_PHRASE } from "@/lib/quiz";
import { toast } from "sonner";

const RAZORPAY_SCRIPT = "https://checkout.razorpay.com/v1/checkout.js";

// Pull the aspiration the user selected in the quiz (persisted before /upgrade)
// so the paywall can reinforce their exact "why". Falls back to null gracefully.
function readAspirationPhrase(): string | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(ONBOARDING_STORAGE_KEY);
    if (!raw) return null;
    const answers = JSON.parse(raw)?.answers as Record<string, string> | undefined;
    const aspiration = answers?.aspiration;
    return aspiration ? ASPIRATION_PHRASE[aspiration] ?? null : null;
  } catch {
    return null;
  }
}

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
  { icon: <InfinityIcon className="w-5 h-5" />, text: "Unlock all 28 days of missions", value: "₹2,999 value" },
  { icon: <MessageSquare className="w-5 h-5" />, text: "Unlimited AI mentor feedback", value: "₹1,499 value" },
  { icon: <Headphones className="w-5 h-5" />, text: "AI audio deep-dives for every lesson", value: "₹999 value" },
  { icon: <Trophy className="w-5 h-5" />, text: "XP, streaks, achievements & certificate", value: "₹999 value" },
];

// Duration-based subscription plans. `note` explains the billing cadence.
// The middle plan is highlighted as the default / most popular choice.
const PLANS = [
  { id: "1-week", name: "1-Week Plan", price: "₹499", note: "billed weekly" },
  { id: "4-week", name: "4-Week Plan", price: "₹1,499", note: "billed every 4 weeks", popular: true },
  { id: "12-week", name: "12-Week Plan", price: "₹2,999", note: "billed every 12 weeks" },
] as const;

const DEFAULT_PLAN_ID = "4-week";
const SELECTED_PLAN_KEY = "upskil.selectedPlan";

const FAQS = [
  {
    q: "How does billing work?",
    a: "You're billed for the plan you pick — weekly, every 4 weeks, or every 12 weeks. You can cancel anytime from your profile before the next cycle and keep access until the current period ends.",
  },
  {
    q: "What if it's not for me?",
    a: "You're covered by our 14-day money-back guarantee. If you don't feel it's worth it, email support within 14 days of purchase for a full refund — no questions asked.",
  },
  {
    q: "How much time do I need each day?",
    a: "Most learners spend 10–30 minutes a day. Every mission is designed to fit into a busy schedule while still moving the needle.",
  },
  {
    q: "Do I need any prior AI experience?",
    a: "No. The program adapts to your starting point — whether you've never touched AI or you're already using it daily, missions are calibrated to your level.",
  },
  {
    q: "Will I get a certificate?",
    a: "Yes — you'll earn a verifiable certificate of completion once you finish all 28 days, which you can share on LinkedIn or with employers.",
  },
];

export default function UpgradePage() {
  return (
    <div className="theme-daylight">
      <Show when="signed-in">
        <AuthedUpgrade />
      </Show>
      <Show when="signed-out">
        <AnonUpgrade />
      </Show>
    </div>
  );
}

function AnonUpgrade() {
  const [, setLocation] = useLocation();
  return (
    <PaywallShell
      eyebrow="Your program is ready"
      priceLabel="₹1,499"
      originalPriceLabel="₹6,499"
      ctaLabel={
        <>
          <Sparkles className="w-5 h-5 mr-2" /> Create My Account & Unlock
        </>
      }
      onCta={() => setLocation("/sign-up")}
      processing={false}
    />
  );
}

function AuthedUpgrade() {
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
      onError: async (err: any) => {
        const status = err?.status;
        // Payments aren't configured (Razorpay keys missing). For testing, fall
        // back to the dev-only unlock endpoint so the funnel still lands on the
        // dashboard. The endpoint is disabled in production, so this is a no-op
        // there and we surface the normal error instead.
        if (status === 503) {
          try {
            const resp = await fetch("/api/payments/dev-unlock", {
              method: "POST",
              credentials: "include",
            });
            if (resp.ok) {
              queryClient.invalidateQueries({ queryKey: getGetMeQueryKey() });
              toast.success("Testing mode: full access unlocked.");
              setLocation("/dashboard");
              return;
            }
          } catch {
            // fall through to the generic error below
          }
        }
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

  // For returning/authenticated users we have their aspiration server-side, so
  // the paywall stays personalized even if localStorage was never written
  // (new device, cleared storage, or a direct visit to /upgrade).
  const serverAspirationPhrase = me?.aspiration ? ASPIRATION_PHRASE[me.aspiration] ?? null : null;

  return (
    <PaywallShell
      eyebrow="One step from full access"
      programTitle={me?.programTitle}
      serverAspirationPhrase={serverAspirationPhrase}
      priceLabel={priceLabel}
      originalPriceLabel="₹6,499"
      ctaLabel={
        processing ? (
          <><Loader2 className="w-5 h-5 mr-2 animate-spin" /> Processing…</>
        ) : (
          <><Sparkles className="w-5 h-5 mr-2" /> Unlock Full Access</>
        )
      }
      onCta={handleUpgrade}
      processing={processing}
      backHref="/dashboard"
    />
  );
}

function Stars() {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
      ))}
    </div>
  );
}

function PaywallShell({
  eyebrow,
  programTitle,
  serverAspirationPhrase,
  priceLabel,
  originalPriceLabel,
  ctaLabel,
  onCta,
  processing,
  backHref,
}: {
  eyebrow: string;
  programTitle?: string | null;
  serverAspirationPhrase?: string | null;
  priceLabel: string;
  originalPriceLabel: string;
  ctaLabel: React.ReactNode;
  onCta: () => void;
  processing: boolean;
  backHref?: string;
}) {
  // Always land at the top of the paywall (the price card) regardless of how
  // far the user had scrolled on the previous funnel screen.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // Selected subscription plan (defaults to the "most popular" 4-week plan).
  // Restored from localStorage so the choice survives the account-creation /
  // checkout hop, then re-persisted whenever it changes.
  const [selectedPlanId, setSelectedPlanId] = useState<string>(() => {
    try {
      const saved = window.localStorage.getItem(SELECTED_PLAN_KEY);
      if (saved && PLANS.some((p) => p.id === saved)) return saved;
    } catch {
      /* ignore storage errors */
    }
    return DEFAULT_PLAN_ID;
  });
  useEffect(() => {
    try {
      window.localStorage.setItem(SELECTED_PLAN_KEY, selectedPlanId);
    } catch {
      /* ignore storage errors */
    }
  }, [selectedPlanId]);
  const selectedPlan = PLANS.find((p) => p.id === selectedPlanId) ?? PLANS[1];
  // Keyboard support for the plan radio-group: arrow keys move the selection
  // and shift focus to the newly-selected card (roving tabindex).
  const planRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const handlePlanKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const keys = ["ArrowRight", "ArrowDown", "ArrowLeft", "ArrowUp"];
    if (!keys.includes(e.key)) return;
    e.preventDefault();
    const ids: string[] = PLANS.map((p) => p.id);
    const dir = e.key === "ArrowRight" || e.key === "ArrowDown" ? 1 : -1;
    const idx = ids.indexOf(selectedPlanId);
    const nextId = ids[(idx + dir + ids.length) % ids.length];
    setSelectedPlanId(nextId);
    planRefs.current[nextId]?.focus();
  };
  // Prefer the freshly-persisted quiz answer in localStorage (the common
  // quiz → paywall path), then fall back to the server-derived aspiration for
  // returning/authenticated visitors whose localStorage is empty.
  const [localAspirationPhrase] = useState(readAspirationPhrase);
  const aspirationPhrase = localAspirationPhrase ?? serverAspirationPhrase ?? null;
  const headline = aspirationPhrase
    ? `Unlock your program and ${aspirationPhrase}`
    : "Unlock your full 28-day program";
  const subheadline = aspirationPhrase
    ? `Your path to ${aspirationPhrase} — pick the plan that fits you. Cancel anytime.`
    : programTitle
      ? `Continue "${programTitle}" — pick the plan that fits you. Cancel anytime.`
      : "Pick the plan that fits you. Full access to every mission, mentor and tool. Cancel anytime.";
  return (
    <div className="min-h-screen bg-[hsl(var(--bg))] font-sans pb-20">
      <header className="h-16 border-b border-[hsl(var(--border))] flex items-center px-6 max-w-3xl mx-auto">
        {backHref ? (
          <Link
            href={backHref}
            className="flex items-center gap-2 text-[hsl(var(--text-muted))] hover:text-[hsl(var(--text))] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to dashboard
          </Link>
        ) : null}
      </header>

      <main className="max-w-3xl mx-auto px-6 pt-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[hsl(var(--accent))/0.1] text-[hsl(var(--accent))] font-bold text-sm tracking-wider uppercase mb-6">
            <Lock className="w-4 h-4" /> {eyebrow}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-[hsl(var(--text))] tracking-tight mb-4">
            {headline}
          </h1>
          <p className="text-lg text-[hsl(var(--text-muted))] max-w-xl mx-auto">
            {subheadline}
          </p>
        </motion.div>

        {/* PLAN SELECTOR */}
        <div className="max-w-xl mx-auto mb-6">
          <p className="text-center text-lg font-bold font-heading text-[hsl(var(--text))] mb-4">Choose the best plan for you</p>
          <div role="radiogroup" aria-label="Choose a plan" onKeyDown={handlePlanKeyDown} className="grid grid-cols-3 gap-3">
            {PLANS.map((plan) => {
              const active = plan.id === selectedPlanId;
              return (
                <button
                  key={plan.id}
                  type="button"
                  role="radio"
                  aria-checked={active}
                  aria-label={`${plan.name} — ${plan.price}, ${plan.note}`}
                  tabIndex={active ? 0 : -1}
                  ref={(el) => { planRefs.current[plan.id] = el; }}
                  onClick={() => setSelectedPlanId(plan.id)}
                  className={`relative text-center rounded-2xl border-2 px-3 pt-7 pb-4 transition-all ${
                    active
                      ? "border-[hsl(var(--accent))] bg-[hsl(var(--accent))/0.06] shadow-sm"
                      : "border-[hsl(var(--border))] bg-[hsl(var(--card))] hover:border-[hsl(var(--accent))/0.4]"
                  }`}
                >
                  {"popular" in plan && plan.popular && (
                    <span className="absolute top-0 left-0 right-0 bg-[hsl(var(--accent))] text-white text-[10px] font-bold uppercase tracking-wider py-1 rounded-t-xl">
                      Most popular
                    </span>
                  )}
                  <span className="absolute top-2 right-2 w-4 h-4 rounded-full border-2 flex items-center justify-center border-[hsl(var(--accent))]">
                    {active && <span className="w-2 h-2 rounded-full bg-[hsl(var(--accent))]" />}
                  </span>
                  <span className="block text-sm font-bold text-[hsl(var(--text))] mb-1">{plan.name}</span>
                  <span className="block text-xl font-bold font-heading text-[hsl(var(--text))]">{plan.price}</span>
                  <span className="block text-[11px] text-[hsl(var(--text-muted))] mt-1">{plan.note}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* VALUE STACK + PRICE CARD */}
        <div className="os-card p-8 max-w-xl mx-auto relative overflow-hidden">
          <ul className="space-y-4 mb-6">
            {PERKS.map((perk) => (
              <li key={perk.text} className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-[hsl(var(--accent))/0.1] flex items-center justify-center text-[hsl(var(--accent))] flex-shrink-0">
                  {perk.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-[hsl(var(--text))] font-medium block">{perk.text}</span>
                </div>
                <span className="text-xs text-[hsl(var(--text-muted))] line-through shrink-0">{perk.value}</span>
              </li>
            ))}
          </ul>

          <div className="border-t border-[hsl(var(--border))] pt-6 mb-6 text-center">
            <div className="text-sm text-[hsl(var(--text-muted))] mb-1">{selectedPlan.name}</div>
            <div className="flex items-end justify-center gap-2">
              <span className="text-5xl font-bold font-heading text-[hsl(var(--text))]">{selectedPlan.price}</span>
              <span className="text-[hsl(var(--text-muted))] mb-2 line-through">{originalPriceLabel}</span>
            </div>
            <span className="text-xs uppercase tracking-wider font-bold text-[hsl(var(--accent-2))]">{selectedPlan.note} · cancel anytime</span>
          </div>

          <Button
            onClick={onCta}
            disabled={processing}
            className="w-full h-14 text-lg bg-[hsl(var(--accent))] hover:bg-[hsl(var(--accent))/0.9] text-white rounded-full"
          >
            {ctaLabel}
          </Button>

          <div className="flex items-center justify-center gap-2 mt-5 text-sm text-[hsl(var(--text-muted))]">
            <ShieldCheck className="w-4 h-4 text-[hsl(var(--accent-2))]" />
            Secure checkout · 14-day money-back guarantee
          </div>
        </div>

        {/* GUARANTEE */}
        <div className="max-w-xl mx-auto mt-8 os-card p-6 flex items-center gap-4 bg-[hsl(var(--accent-2))/0.06] border-[hsl(var(--accent-2))/0.2]">
          <ShieldCheck className="w-10 h-10 text-[hsl(var(--accent-2))] shrink-0" />
          <div>
            <p className="font-bold text-[hsl(var(--text))]">14-day money-back guarantee</p>
            <p className="text-sm text-[hsl(var(--text-muted))]">
              Try the full program risk-free. Not satisfied? Get a full refund, no questions asked.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center gap-6 mt-10 text-[hsl(var(--text-muted))] flex-wrap">
          <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[hsl(var(--accent-2))]" /> 40,000+ learners</div>
          <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[hsl(var(--accent-2))]" /> AI-graded feedback</div>
          <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[hsl(var(--accent-2))]" /> Certificate</div>
          <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-[hsl(var(--accent-2))]" /> ~20 min/day</div>
        </div>

        {/* TESTIMONIALS */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold font-heading text-[hsl(var(--text))] text-center mb-8">
            Loved by 40,000+ professionals
          </h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="os-card p-5 flex flex-col gap-3">
                <Stars />
                <p className="text-sm text-[hsl(var(--text))] leading-relaxed flex-1">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <img src={t.avatar} alt={t.name} className="w-9 h-9 rounded-full object-cover" />
                  <div>
                    <p className="font-bold text-sm text-[hsl(var(--text))]">{t.name}</p>
                    <p className="text-xs text-[hsl(var(--text-muted))]">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-16 max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold font-heading text-[hsl(var(--text))] text-center mb-6">
            Frequently asked questions
          </h2>
          <Accordion type="single" collapsible className="os-card px-6">
            {FAQS.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border-[hsl(var(--border))]">
                <AccordionTrigger className="text-[hsl(var(--text))] font-semibold hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-[hsl(var(--text-muted))]">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* FINAL CTA */}
        <div className="mt-14 text-center">
          <Button
            onClick={onCta}
            disabled={processing}
            className="h-14 px-10 text-lg bg-[hsl(var(--accent))] hover:bg-[hsl(var(--accent))/0.9] text-white rounded-full"
          >
            {ctaLabel}
          </Button>
        </div>
      </main>
    </div>
  );
}
