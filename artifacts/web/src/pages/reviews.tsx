import { Link } from "wouter";
import { motion } from "framer-motion";
import { Star, ArrowRight, Quote } from "lucide-react";
import { MarketingLayout } from "@/components/marketing/MarketingLayout";

const REVIEWS = [
  {
    quote:
      "I finally understand how to use AI in my actual job. The daily challenges made it stick in a way no course ever did.",
    name: "Priya M.",
    role: "Product Marketing Manager",
    rating: 5,
  },
  {
    quote:
      "The AI mentor is the difference-maker. Whenever I got stuck, it explained things in a way that just clicked.",
    name: "Daniel R.",
    role: "Operations Lead",
    rating: 5,
  },
  {
    quote:
      "Twenty-eight days felt achievable, and by the end I'd automated three tasks I used to dread every week.",
    name: "Sofia L.",
    role: "Freelance Designer",
    rating: 5,
  },
  {
    quote:
      "As someone switching careers, this gave me the structure and confidence I desperately needed. Worth every minute.",
    name: "Marcus T.",
    role: "Career Changer",
    rating: 5,
  },
  {
    quote:
      "Practical, no fluff, and genuinely fun. The streaks kept me coming back even on busy days.",
    name: "Aisha K.",
    role: "Startup Founder",
    rating: 5,
  },
  {
    quote:
      "My team went through it together. We now share prompts and workflows we built during the challenge every week.",
    name: "James O.",
    role: "Engineering Manager",
    rating: 5,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5 text-[hsl(var(--accent))]">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-current" />
      ))}
    </div>
  );
}

export default function ReviewsPage() {
  return (
    <MarketingLayout>
      <section className="relative pt-28 pb-16 px-6 md:px-12 max-w-4xl mx-auto text-center overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[hsl(var(--accent-2))/0.08] blur-[120px] rounded-full pointer-events-none -z-10" />
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[hsl(var(--accent-2))/0.1] text-[hsl(var(--accent-2))] font-bold text-sm tracking-wider uppercase mb-6">
            Reviews
          </div>
          <h1 className="text-4xl md:text-6xl font-bold font-heading text-[hsl(var(--text))] tracking-tight mb-6 leading-[1.1]">
            Loved by ambitious professionals.
          </h1>
          <div className="flex items-center justify-center gap-3 mb-4">
            <Stars count={5} />
            <span className="text-lg font-bold text-[hsl(var(--text))]">4.9 / 5</span>
          </div>
          <p className="text-lg text-[hsl(var(--text-muted))]">
            Real stories from people who turned 28 days into lasting AI skills.
          </p>
        </motion.div>
      </section>

      <section className="px-6 md:px-12 max-w-7xl mx-auto pb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.08 }}
              className="os-card p-8 flex flex-col"
            >
              <Quote className="w-8 h-8 text-[hsl(var(--accent))/0.4] mb-4" />
              <p className="text-[hsl(var(--text))] leading-relaxed mb-6 flex-1">"{review.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-[hsl(var(--surface-2))] flex items-center justify-center font-bold font-heading text-[hsl(var(--text))]">
                  {review.name.charAt(0)}
                </div>
                <div className="flex-1">
                  <div className="font-bold text-[hsl(var(--text))]">{review.name}</div>
                  <div className="text-sm text-[hsl(var(--text-muted))]">{review.role}</div>
                </div>
                <Stars count={review.rating} />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-12 max-w-4xl mx-auto pb-28">
        <div className="os-card p-10 md:p-16 text-center bg-gradient-to-br from-[hsl(var(--accent))/0.08] to-[hsl(var(--accent-2))/0.08]">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-[hsl(var(--text))] mb-4 tracking-tight">
            Write your own success story.
          </h2>
          <p className="text-lg text-[hsl(var(--text-muted))] mb-8 max-w-xl mx-auto">
            Start the 28-day challenge and see what you can build in a month.
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
