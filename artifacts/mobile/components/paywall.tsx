import AsyncStorage from "@react-native-async-storage/async-storage";
import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useState } from "react";
import { Image, Pressable, ScrollView, View } from "react-native";

import {
  AppText,
  GlassCard,
  GradientButton,
  Icon,
  IconButton,
  type IconName,
} from "@/components/ui";
import { useColors } from "@/hooks/useColors";
import { hapticSelect } from "@/lib/haptics";
import { TESTIMONIALS } from "@/lib/quiz";

/**
 * Mobile port of the web paywall (artifacts/web/src/pages/upgrade.tsx
 * PaywallShell): plan selector, value stack, price card, guarantee,
 * testimonials and FAQ. Prices on the plan cards are display-only — the
 * backend charges its single configured order amount.
 */

const PERKS: { icon: IconName; text: string; value: string }[] = [
  { icon: "infinity", text: "Unlock all 28 days of missions", value: "₹2,999 value" },
  { icon: "message", text: "Unlimited AI mentor feedback", value: "₹1,499 value" },
  { icon: "headphones", text: "AI audio deep-dives for every lesson", value: "₹999 value" },
  { icon: "trophy", text: "XP, streaks, achievements & certificate", value: "₹999 value" },
];

const PLANS = [
  { id: "1-week", name: "1-Week Plan", price: "₹499", note: "billed weekly", popular: false },
  { id: "4-week", name: "4-Week Plan", price: "₹1,499", note: "billed every 4 weeks", popular: true },
  { id: "12-week", name: "12-Week Plan", price: "₹2,999", note: "billed every 12 weeks", popular: false },
];

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

function Stars() {
  return (
    <View style={{ flexDirection: "row", gap: 2 }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Icon key={i} name="star" size={14} color="#fbbf24" />
      ))}
    </View>
  );
}

function PlanCard({
  plan,
  active,
  onPress,
}: {
  plan: (typeof PLANS)[number];
  active: boolean;
  onPress: () => void;
}) {
  const c = useColors();
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="radio"
      accessibilityState={{ selected: active }}
      style={({ pressed }) => ({
        flex: 1,
        borderRadius: 16,
        borderWidth: 2,
        borderColor: active ? c.accent : c.border,
        backgroundColor: active ? c.a("accent", 0.06) : c.surface,
        overflow: "hidden",
        transform: [{ scale: pressed ? 0.98 : 1 }],
      })}
    >
      {plan.popular ? (
        <View style={{ backgroundColor: c.accent, paddingVertical: 3, alignItems: "center" }}>
          <AppText variant="caption" color="#fff" uppercase style={{ fontSize: 9, fontWeight: "700" }}>
            Most popular
          </AppText>
        </View>
      ) : (
        <View style={{ height: 19 }} />
      )}
      <View style={{ padding: 10, paddingTop: 8, alignItems: "center", gap: 2 }}>
        <View
          style={{
            alignSelf: "flex-end",
            width: 16,
            height: 16,
            borderRadius: 8,
            borderWidth: 2,
            borderColor: c.accent,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {active ? (
            <View style={{ width: 7, height: 7, borderRadius: 4, backgroundColor: c.accent }} />
          ) : null}
        </View>
        <AppText variant="caption" style={{ fontWeight: "700", textAlign: "center" }}>
          {plan.name}
        </AppText>
        <AppText variant="heading">{plan.price}</AppText>
        <AppText variant="caption" muted style={{ fontSize: 10, textAlign: "center" }}>
          {plan.note}
        </AppText>
      </View>
    </Pressable>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const c = useColors();
  const [open, setOpen] = useState(false);
  return (
    <View style={{ borderBottomWidth: 1, borderBottomColor: c.border }}>
      <Pressable
        onPress={() => setOpen((o) => !o)}
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingVertical: 14,
          gap: 10,
        }}
      >
        <AppText variant="bodySemibold" style={{ flex: 1 }}>
          {q}
        </AppText>
        <View style={{ transform: [{ rotate: open ? "180deg" : "0deg" }] }}>
          <Icon name="chevron-down" size={18} color={c.textMuted} />
        </View>
      </Pressable>
      {open ? (
        <AppText variant="caption" muted style={{ paddingBottom: 14, lineHeight: 19 }}>
          {a}
        </AppText>
      ) : null}
    </View>
  );
}

export function PaywallShell({
  eyebrow,
  programTitle,
  aspirationPhrase,
  priceLabel,
  ctaLabel,
  onCta,
  processing,
  error,
  onBack,
  footer,
}: {
  eyebrow: string;
  programTitle?: string | null;
  aspirationPhrase?: string | null;
  /** Overrides the selected plan's display price on the price card (e.g. the real order amount). */
  priceLabel?: string | null;
  ctaLabel: string;
  onCta: () => void;
  processing: boolean;
  error?: string | null;
  onBack?: () => void;
  footer?: React.ReactNode;
}) {
  const c = useColors();

  // Selected plan, restored so the choice survives the sign-up / checkout hop.
  const [selectedPlanId, setSelectedPlanId] = useState<string>(DEFAULT_PLAN_ID);
  useEffect(() => {
    AsyncStorage.getItem(SELECTED_PLAN_KEY)
      .then((saved) => {
        if (saved && PLANS.some((p) => p.id === saved)) setSelectedPlanId(saved);
      })
      .catch(() => {});
  }, []);
  const selectPlan = (id: string) => {
    hapticSelect();
    setSelectedPlanId(id);
    AsyncStorage.setItem(SELECTED_PLAN_KEY, id).catch(() => {});
  };
  const selectedPlan = PLANS.find((p) => p.id === selectedPlanId) ?? PLANS[1];

  const headline = aspirationPhrase
    ? `Unlock your program and ${aspirationPhrase}`
    : "Unlock your full 28-day program";
  const subheadline = aspirationPhrase
    ? `Your path to ${aspirationPhrase} — pick the plan that fits you. Cancel anytime.`
    : programTitle
      ? `Continue "${programTitle}" — pick the plan that fits you. Cancel anytime.`
      : "Pick the plan that fits you. Full access to every mission, mentor and tool. Cancel anytime.";

  return (
    <View style={{ flex: 1 }}>
      <View style={{ paddingHorizontal: 20, paddingTop: 4, flexDirection: "row", alignItems: "center", gap: 12 }}>
        {onBack ? <IconButton name="chevron-left" onPress={onBack} size={38} /> : <View style={{ width: 38 }} />}
        <LinearGradient
          colors={[c.accent2, c.accent]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={{ width: 32, height: 32, borderRadius: 10, alignItems: "center", justifyContent: "center" }}
        >
          <Icon name="sparkles" size={16} color="#fff" />
        </LinearGradient>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ padding: 20, paddingBottom: 40, gap: 20 }}
      >
        {/* HERO */}
        <View style={{ alignItems: "center", gap: 12 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 6,
              paddingHorizontal: 14,
              paddingVertical: 7,
              borderRadius: 999,
              backgroundColor: c.a("accent", 0.1),
            }}
          >
            <Icon name="lock" size={13} color={c.accent} />
            <AppText variant="caption" uppercase color={c.accent} style={{ fontWeight: "700" }}>
              {eyebrow}
            </AppText>
          </View>
          <AppText variant="display" style={{ textAlign: "center" }}>
            {headline}
          </AppText>
          <AppText variant="body" muted style={{ textAlign: "center", lineHeight: 22, maxWidth: 340 }}>
            {subheadline}
          </AppText>
        </View>

        {/* PLAN SELECTOR */}
        <View style={{ gap: 12 }}>
          <AppText variant="heading" style={{ textAlign: "center" }}>
            Choose the best plan for you
          </AppText>
          <View style={{ flexDirection: "row", gap: 10 }} accessibilityRole="radiogroup">
            {PLANS.map((plan) => (
              <PlanCard
                key={plan.id}
                plan={plan}
                active={plan.id === selectedPlanId}
                onPress={() => selectPlan(plan.id)}
              />
            ))}
          </View>
        </View>

        {/* VALUE STACK + PRICE CARD */}
        <GlassCard style={{ gap: 16 }}>
          <View style={{ gap: 14 }}>
            {PERKS.map((perk) => (
              <View key={perk.text} style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
                <View
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 12,
                    backgroundColor: c.a("accent", 0.1),
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Icon name={perk.icon} size={18} color={c.accent} />
                </View>
                <AppText variant="bodyMedium" style={{ flex: 1 }}>
                  {perk.text}
                </AppText>
                <AppText variant="caption" muted style={{ textDecorationLine: "line-through" }}>
                  {perk.value}
                </AppText>
              </View>
            ))}
          </View>

          <View style={{ borderTopWidth: 1, borderTopColor: c.border, paddingTop: 16, alignItems: "center", gap: 4 }}>
            <AppText variant="caption" muted>
              {selectedPlan.name}
            </AppText>
            <View style={{ flexDirection: "row", alignItems: "flex-end", gap: 8 }}>
              <AppText variant="display">{priceLabel ?? selectedPlan.price}</AppText>
              <AppText variant="body" muted style={{ textDecorationLine: "line-through", marginBottom: 4 }}>
                ₹6,499
              </AppText>
            </View>
            <AppText variant="caption" uppercase color={c.accent2} style={{ fontWeight: "700" }}>
              {selectedPlan.note} · cancel anytime
            </AppText>
          </View>

          {error ? (
            <AppText variant="caption" color="#ef4444" style={{ textAlign: "center" }}>
              {error}
            </AppText>
          ) : null}

          <GradientButton label={ctaLabel} icon="sparkles" loading={processing} onPress={onCta} />

          <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 6 }}>
            <Icon name="shield" size={14} color={c.accent2} />
            <AppText variant="caption" muted>
              Secure checkout · 14-day money-back guarantee
            </AppText>
          </View>
        </GlassCard>

        {/* GUARANTEE */}
        <GlassCard style={{ borderColor: c.a("accent2", 0.25), backgroundColor: c.a("accent2", 0.06) }}>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 14 }}>
            <Icon name="shield" size={34} color={c.accent2} />
            <View style={{ flex: 1, gap: 2 }}>
              <AppText variant="bodySemibold">14-day money-back guarantee</AppText>
              <AppText variant="caption" muted style={{ lineHeight: 18 }}>
                Try the full program risk-free. Not satisfied? Get a full refund, no questions asked.
              </AppText>
            </View>
          </View>
        </GlassCard>

        {/* TRUST ROW */}
        <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "center", gap: 14 }}>
          {["40,000+ learners", "AI-graded feedback", "Certificate", "~20 min/day"].map((label, i) => (
            <View key={label} style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
              <Icon name={i === 3 ? "clock" : "check-circle"} size={13} color={c.accent2} />
              <AppText variant="caption" muted>
                {label}
              </AppText>
            </View>
          ))}
        </View>

        {/* TESTIMONIALS */}
        <View style={{ gap: 12, marginTop: 8 }}>
          <AppText variant="title" style={{ textAlign: "center" }}>
            Loved by 40,000+ professionals
          </AppText>
          {TESTIMONIALS.map((t) => (
            <GlassCard key={t.name} style={{ gap: 8 }}>
              <Stars />
              <AppText variant="caption" style={{ lineHeight: 19 }}>
                “{t.quote}”
              </AppText>
              <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                <Image source={t.avatar} style={{ width: 36, height: 36, borderRadius: 18 }} resizeMode="cover" />
                <View>
                  <AppText variant="bodySemibold" style={{ fontSize: 13 }}>
                    {t.name}
                  </AppText>
                  <AppText variant="caption" muted>
                    {t.role}
                  </AppText>
                </View>
              </View>
            </GlassCard>
          ))}
        </View>

        {/* FAQ */}
        <View style={{ gap: 12, marginTop: 8 }}>
          <AppText variant="title" style={{ textAlign: "center" }}>
            Frequently asked questions
          </AppText>
          <GlassCard style={{ paddingVertical: 4 }}>
            {FAQS.map((faq) => (
              <FaqItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </GlassCard>
        </View>

        {/* FINAL CTA */}
        <GradientButton label={ctaLabel} icon="sparkles" loading={processing} onPress={onCta} style={{ marginTop: 8 }} />

        {footer}
      </ScrollView>
    </View>
  );
}
