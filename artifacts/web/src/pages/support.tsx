import { useState } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MessageSquare, BookOpen, ChevronDown, ArrowRight } from "lucide-react";
import { MarketingLayout } from "@/components/marketing/MarketingLayout";

const CHANNELS = [
  {
    icon: <Mail className="w-6 h-6 text-[hsl(var(--accent))]" />,
    title: "Email us",
    desc: "Get a thoughtful reply from our team, usually within one business day.",
    action: "support@upskil-os.com",
    href: "mailto:support@upskil-os.com",
  },
  {
    icon: <MessageSquare className="w-6 h-6 text-[hsl(var(--accent-2))]" />,
    title: "Ask Nova",
    desc: "Your AI mentor is available inside the app to help the moment you get stuck.",
    action: "Open the mentor",
    href: "/mentor",
  },
  {
    icon: <BookOpen className="w-6 h-6 text-[hsl(var(--accent))]" />,
    title: "Getting started",
    desc: "New here? Take the quick quiz to build your personalized 28-day program.",
    action: "Start the quiz",
    href: "/quiz",
  },
];

const FAQS = [
  {
    q: "How does the 28-day challenge work?",
    a: "Each day you get a focused briefing, a hands-on challenge, and support from your AI mentor. The program adapts to your goals and schedule, building real, applicable skills over four weeks.",
  },
  {
    q: "Do I need any prior AI experience?",
    a: "Not at all. The onboarding quiz tailors the program to your starting point — whether you're completely new or already experimenting with AI tools.",
  },
  {
    q: "How much time do I need each day?",
    a: "Most people spend around 20–30 focused minutes per day. It's designed to fit into a busy schedule while still compounding into meaningful progress.",
  },
  {
    q: "What if I fall behind?",
    a: "The program is flexible. You can pick up where you left off at any time — your progress, streaks, and personalized path are always saved.",
  },
  {
    q: "Is there a money-back guarantee?",
    a: "Yes. We offer a 14-day money-back guarantee, and you can cancel anytime. If it's not right for you, you're covered.",
  },
  {
    q: "Do I get a certificate?",
    a: "Yes. Complete the challenge and you'll earn a shareable certificate recognizing your applied AI skills.",
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="os-card overflow-hidden">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 p-6 text-left"
        aria-expanded={open}
      >
        <span className="font-bold text-[hsl(var(--text))] text-lg">{q}</span>
        <ChevronDown
          className={`w-5 h-5 text-[hsl(var(--text-muted))] flex-shrink-0 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <p className="px-6 pb-6 text-[hsl(var(--text-muted))] leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function SupportPage() {
  return (
    <MarketingLayout>
      <section className="relative pt-28 pb-16 px-6 md:px-12 max-w-4xl mx-auto text-center overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[hsl(var(--accent))/0.08] blur-[120px] rounded-full pointer-events-none -z-10" />
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[hsl(var(--accent))/0.1] text-[hsl(var(--accent))] font-bold text-sm tracking-wider uppercase mb-6">
            Support
          </div>
          <h1 className="text-4xl md:text-6xl font-bold font-heading text-[hsl(var(--text))] tracking-tight mb-6 leading-[1.1]">
            How can we help?
          </h1>
          <p className="text-xl text-[hsl(var(--text-muted))] leading-relaxed">
            Find quick answers below, or reach out — we're here to keep you moving forward.
          </p>
        </motion.div>
      </section>

      <section className="px-6 md:px-12 max-w-7xl mx-auto pb-16">
        <div className="grid md:grid-cols-3 gap-6">
          {CHANNELS.map((channel, i) => {
            const isExternal = channel.href.startsWith("mailto:");
            const inner = (
              <>
                <div className="w-12 h-12 rounded-xl bg-[hsl(var(--bg))] border border-[hsl(var(--border))] flex items-center justify-center mb-5">
                  {channel.icon}
                </div>
                <h3 className="text-xl font-bold font-heading text-[hsl(var(--text))] mb-2">{channel.title}</h3>
                <p className="text-[hsl(var(--text-muted))] leading-relaxed mb-4 flex-1">{channel.desc}</p>
                <span className="inline-flex items-center gap-1.5 text-[hsl(var(--accent))] font-bold">
                  {channel.action} <ArrowRight className="w-4 h-4" />
                </span>
              </>
            );
            return (
              <motion.div
                key={channel.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                {isExternal ? (
                  <a href={channel.href} className="os-card p-8 flex flex-col h-full hover:-translate-y-1 transition-transform">
                    {inner}
                  </a>
                ) : (
                  <Link href={channel.href} className="os-card p-8 flex flex-col h-full hover:-translate-y-1 transition-transform">
                    {inner}
                  </Link>
                )}
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="px-6 md:px-12 max-w-3xl mx-auto pb-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-[hsl(var(--text))] mb-4 tracking-tight">
            Frequently asked questions
          </h2>
          <p className="text-lg text-[hsl(var(--text-muted))]">Everything you need to know before you begin.</p>
        </div>
        <div className="space-y-4">
          {FAQS.map((faq) => (
            <FaqItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>
      </section>

      <section className="px-6 md:px-12 max-w-4xl mx-auto pb-28">
        <div className="os-card p-10 md:p-16 text-center bg-gradient-to-br from-[hsl(var(--accent))/0.08] to-[hsl(var(--accent-2))/0.08]">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-[hsl(var(--text))] mb-4 tracking-tight">
            Still have questions?
          </h2>
          <p className="text-lg text-[hsl(var(--text-muted))] mb-8 max-w-xl mx-auto">
            Our team is happy to help you get started on the right foot.
          </p>
          <a
            href="mailto:support@upskil-os.com"
            className="inline-flex items-center gap-2 bg-[hsl(var(--accent))] hover:bg-[hsl(var(--accent))/0.9] text-white px-8 py-4 rounded-full font-bold text-lg transition-all hover:-translate-y-0.5"
          >
            Contact Support <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </MarketingLayout>
  );
}
