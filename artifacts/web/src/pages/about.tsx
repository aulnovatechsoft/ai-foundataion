import { Link } from "wouter";
import { motion } from "framer-motion";
import { Target, Compass, Layers, HeartHandshake, ArrowRight } from "lucide-react";
import { MarketingLayout } from "@/components/marketing/MarketingLayout";

const VALUES = [
  {
    icon: <Target className="w-6 h-6 text-[hsl(var(--accent))]" />,
    title: "Outcomes over hours",
    desc: "We measure success by the skills you can actually apply at work — not by how many videos you watched.",
  },
  {
    icon: <Compass className="w-6 h-6 text-[hsl(var(--accent-2))]" />,
    title: "Guided, not gatekept",
    desc: "A clear 28-day path with an AI mentor beside you at every step, so you're never stuck wondering what's next.",
  },
  {
    icon: <Layers className="w-6 h-6 text-[hsl(var(--accent))]" />,
    title: "Real practice, real work",
    desc: "Every day pairs a concept with a hands-on challenge using the same tools professionals rely on.",
  },
  {
    icon: <HeartHandshake className="w-6 h-6 text-[hsl(var(--accent-2))]" />,
    title: "Built for busy people",
    desc: "Designed to fit into a real schedule — focused daily sessions that compound into lasting capability.",
  },
];

export default function AboutPage() {
  return (
    <MarketingLayout>
      <section className="relative pt-28 pb-20 px-6 md:px-12 max-w-4xl mx-auto text-center overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[hsl(var(--accent))/0.08] blur-[120px] rounded-full pointer-events-none -z-10" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[hsl(var(--accent))/0.1] text-[hsl(var(--accent))] font-bold text-sm tracking-wider uppercase mb-6">
            Our Mission
          </div>
          <h1 className="text-4xl md:text-6xl font-bold font-heading text-[hsl(var(--text))] tracking-tight mb-6 leading-[1.1]">
            Helping people become AI-fluent, one day at a time.
          </h1>
          <p className="text-xl text-[hsl(var(--text-muted))] leading-relaxed">
            AI is reshaping every profession faster than most training can keep up. Upskil OS exists to close that
            gap — turning the overwhelming world of AI into a structured, practical, and genuinely achievable
            28-day journey.
          </p>
        </motion.div>
      </section>

      <section className="px-6 md:px-12 max-w-4xl mx-auto pb-20">
        <div className="os-card p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl font-bold font-heading text-[hsl(var(--text))] mb-4 tracking-tight">
            Why we built this
          </h2>
          <div className="space-y-4 text-lg text-[hsl(var(--text-muted))] leading-relaxed">
            <p>
              Most people don't need another 40-hour course they'll never finish. They need a clear path, a little
              accountability, and the confidence that comes from actually doing the work.
            </p>
            <p>
              So we built an operating system for learning AI: a focused daily briefing, a hands-on challenge, and a
              personal AI mentor that adapts to where you are. No fluff, no endless theory — just steady, compounding
              progress you can feel.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 max-w-7xl mx-auto pb-24">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-[hsl(var(--text))] mb-4 tracking-tight">
            What we stand for
          </h2>
          <p className="text-lg text-[hsl(var(--text-muted))]">The principles that shape every part of the experience.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {VALUES.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="os-card p-8 flex gap-5"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[hsl(var(--bg))] border border-[hsl(var(--border))] flex items-center justify-center">
                {value.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold font-heading text-[hsl(var(--text))] mb-2">{value.title}</h3>
                <p className="text-[hsl(var(--text-muted))] leading-relaxed">{value.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-12 max-w-4xl mx-auto pb-28">
        <div className="os-card p-10 md:p-16 text-center bg-gradient-to-br from-[hsl(var(--accent))/0.08] to-[hsl(var(--accent-2))/0.08]">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-[hsl(var(--text))] mb-4 tracking-tight">
            Ready to future-proof your career?
          </h2>
          <p className="text-lg text-[hsl(var(--text-muted))] mb-8 max-w-xl mx-auto">
            Join the 28-day challenge and build real, applicable AI skills — starting today.
          </p>
          <Link
            href="/quiz"
            className="inline-flex items-center gap-2 bg-[hsl(var(--accent))] hover:bg-[hsl(var(--accent))/0.9] text-white px-8 py-4 rounded-full font-bold text-lg transition-all hover:-translate-y-0.5"
          >
            Start Your Challenge <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </MarketingLayout>
  );
}
