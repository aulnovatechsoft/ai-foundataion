import { Redirect, Link } from "wouter";
import { Show } from "@clerk/react";
import { MarketingHeader } from "@/components/marketing/MarketingLayout";
import { ProofShowcase } from "@/components/marketing/ProofShowcase";
import { 
  Sparkles, 
  ArrowRight, 
  BrainCircuit, 
  Shield, 
  Clock, 
  Award, 
  Code, 
  Star
} from "lucide-react";
import { useEffect, useRef } from "react";
import techAdvancedPrompting from "@/assets/tech-stack/advanced-prompting.png";
import techLargeLanguageModels from "@/assets/tech-stack/large-language-models.png";
import techAiAutomation from "@/assets/tech-stack/ai-automation.png";
import techDataAnalysis from "@/assets/tech-stack/data-analysis.png";
import techImageGeneration from "@/assets/tech-stack/image-generation.png";
import techAiAgents from "@/assets/tech-stack/ai-agents.png";
import techStrategicImplementation from "@/assets/tech-stack/strategic-implementation.png";
import techCustomGpts from "@/assets/tech-stack/custom-gpts.png";

function FadeIn({ children, className = "", delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slide-up");
            entry.target.classList.remove("opacity-0");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`opacity-0 ${className}`} style={{ animationDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

export default function LandingPage() {
  return (
    <>
      <Show when="signed-in">
        <Redirect to="/dashboard" />
      </Show>
      <Show when="signed-out">
        <div className="min-h-[100dvh] bg-[hsl(var(--bg))] flex flex-col font-sans overflow-x-hidden selection:bg-[hsl(var(--accent))] selection:text-white">
          <MarketingHeader />

          <main className="flex-1">
            {/* HERO SECTION */}
            <section className="relative pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto flex flex-col items-center text-center overflow-hidden">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[hsl(var(--accent))/0.1] blur-[120px] rounded-full pointer-events-none -z-10"></div>
              <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/4 w-[600px] h-[600px] bg-[hsl(var(--accent-2))/0.1] blur-[100px] rounded-full pointer-events-none -z-10"></div>
              
              <FadeIn>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[hsl(var(--border))] bg-[hsl(var(--surface))/0.5] backdrop-blur-sm text-[hsl(var(--text))] font-bold text-sm tracking-wider uppercase mb-10 shadow-sm">
                  <div className="w-2 h-2 rounded-full bg-[hsl(var(--accent))] animate-pulse"></div>
                  The 28-Day AI Challenge
                </div>
              </FadeIn>
              
              <FadeIn delay={100}>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading text-[hsl(var(--text))] tracking-tight mb-8 leading-[1.1] max-w-4xl mx-auto">
                  Master AI. <br className="hidden md:block" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--accent))] to-[hsl(var(--accent-2))]">
                    Future-Proof Your Career.
                  </span>
                </h1>
              </FadeIn>
              
              <FadeIn delay={200}>
                <p className="text-xl md:text-2xl text-[hsl(var(--text-muted))] mb-12 max-w-3xl mx-auto leading-relaxed">
                  A premium, 28-day operating system designed for ambitious professionals. Don't just read about AI—build real skills, complete hands-on tasks, and become the most valuable person in your industry.
                </p>
              </FadeIn>
              
              <FadeIn delay={300} className="w-full flex flex-col items-center">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                  <Link href="/quiz" className="w-full sm:w-auto bg-[hsl(var(--accent))] hover:bg-[hsl(var(--accent))/0.9] text-white px-10 py-5 rounded-full font-bold text-lg transition-all hover:shadow-[0_0_30px_hsl(var(--accent)/0.4)] hover:-translate-y-1 flex items-center justify-center gap-3">
                    Start Your 28-Day Challenge <ArrowRight className="w-5 h-5" />
                  </Link>
                  <a
                    href="#how-it-works"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="w-full sm:w-auto cursor-pointer bg-[hsl(var(--surface))] border border-[hsl(var(--border))] hover:border-[hsl(var(--text-muted))] text-[hsl(var(--text))] px-10 py-5 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-3"
                  >
                    See How It Works
                  </a>
                </div>
                <p className="mt-6 text-sm text-[hsl(var(--text-muted))] flex items-center gap-2">
                  <Shield className="w-4 h-4" /> 14-day money-back guarantee. Cancel anytime.
                </p>
              </FadeIn>
            </section>

            {/* PROOF SHOWCASE — certificate + 28-day calendar */}
            <ProofShowcase />

            {/* URGENCY & STATS SECTION */}
            <section className="py-24 bg-[hsl(var(--surface))] border-y border-[hsl(var(--border))] relative">
              <div className="max-w-7xl mx-auto px-6 md:px-12">
                <FadeIn>
                  <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold font-heading text-[hsl(var(--text))] mb-6 tracking-tight">
                      The rules of work have changed.
                    </h2>
                    <p className="text-xl text-[hsl(var(--text-muted))]">
                      AI won't replace professionals. Professionals using AI will replace those who don't. The window to gain a massive competitive advantage is closing.
                    </p>
                  </div>
                </FadeIn>

                <div className="grid md:grid-cols-3 gap-8">
                  <FadeIn delay={100} className="os-card p-10 bg-[hsl(var(--bg))] border border-[hsl(var(--border))]">
                    <div className="text-5xl font-bold font-heading text-[hsl(var(--accent))] mb-4">47%</div>
                    <h3 className="text-xl font-bold text-[hsl(var(--text))] mb-2">Automated Tasks</h3>
                    <p className="text-[hsl(var(--text-muted))]">Of routine knowledge work will be automated by AI within the next 3 years across all major industries.</p>
                  </FadeIn>
                  
                  <FadeIn delay={200} className="os-card p-10 bg-[hsl(var(--bg))] border border-[hsl(var(--border))]">
                    <div className="text-5xl font-bold font-heading text-[hsl(var(--accent-2))] mb-4">3.5x</div>
                    <h3 className="text-xl font-bold text-[hsl(var(--text))] mb-2">Productivity Multiplier</h3>
                    <p className="text-[hsl(var(--text-muted))]">The average output increase seen by professionals who effectively integrate AI into their daily workflows.</p>
                  </FadeIn>
                  
                  <FadeIn delay={300} className="os-card p-10 bg-[hsl(var(--bg))] border border-[hsl(var(--border))]">
                    <div className="text-5xl font-bold font-heading text-[hsl(var(--text))] mb-4">#1</div>
                    <h3 className="text-xl font-bold text-[hsl(var(--text))] mb-2">Hiring Requirement</h3>
                    <p className="text-[hsl(var(--text-muted))]">"Applied AI Skills" is now the fastest-growing prerequisite for senior and executive roles globally.</p>
                  </FadeIn>
                </div>
              </div>
            </section>

            {/* HOW IT WORKS SECTION */}
            <section id="how-it-works" className="scroll-mt-24 py-32 px-6 md:px-12 max-w-7xl mx-auto">
              <FadeIn>
                <div className="text-center max-w-3xl mx-auto mb-20">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[hsl(var(--accent))/0.1] text-[hsl(var(--accent))] font-bold text-sm tracking-wider uppercase mb-6">
                    The Methodology
                  </div>
                  <h2 className="text-4xl md:text-6xl font-bold font-heading text-[hsl(var(--text))] mb-6 tracking-tight">
                    How you'll master AI in 28 days.
                  </h2>
                  <p className="text-xl text-[hsl(var(--text-muted))]">
                    No passive watching. No academic theory. Just 30 minutes of high-impact, practical application every single day.
                  </p>
                </div>
              </FadeIn>

              <div className="space-y-8">
                {[
                  {
                    step: "01",
                    title: "The Daily Briefing",
                    desc: "Start your day with a concise, high-signal lesson on a specific AI concept. We cut the noise and teach you exactly what matters.",
                    icon: <Clock className="w-8 h-8 text-[hsl(var(--accent))]" />,
                    color: "var(--accent)"
                  },
                  {
                    step: "02",
                    title: "Hands-on Challenges",
                    desc: "Jump into the AI Playground and complete a real-world task. Draft a strategy, analyze data, or build an automation. Learn by doing.",
                    icon: <Code className="w-8 h-8 text-[hsl(var(--accent-2))]" />,
                    color: "var(--accent-2)"
                  },
                  {
                    step: "03",
                    title: "1-on-1 AI Mentorship",
                    desc: "Stuck? Your personal AI mentor, Nova, is available 24/7 to review your prompts, debug your logic, and push your thinking further.",
                    icon: <BrainCircuit className="w-8 h-8 text-purple-500" />,
                    color: "270 60% 50%"
                  },
                  {
                    step: "04",
                    title: "Prove Your Competence",
                    desc: "Earn XP, build streaks, and unlock a verified certificate upon completion. Show employers you have the skills to lead the AI transition.",
                    icon: <Award className="w-8 h-8 text-emerald-500" />,
                    color: "150 60% 50%"
                  }
                ].map((item, i) => (
                  <FadeIn key={i} delay={i * 100}>
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 p-8 md:p-10 rounded-3xl bg-[hsl(var(--surface))] border border-[hsl(var(--border))] hover:border-[hsl(var(--text-muted))] transition-colors group">
                      <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-[hsl(var(--bg))] border border-[hsl(var(--border))] flex items-center justify-center text-3xl font-bold font-heading text-[hsl(var(--text-muted))] group-hover:text-[hsl(var(--text))] transition-colors">
                        {item.step}
                      </div>
                      <div className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center bg-[hsl(var(--bg))] border border-[hsl(var(--border))] shadow-sm">
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold font-heading text-[hsl(var(--text))] mb-3">{item.title}</h3>
                        <p className="text-lg text-[hsl(var(--text-muted))] leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </section>

            {/* CURRICULUM / TOOLS GRID */}
            <section className="py-32 bg-[hsl(var(--surface))] border-y border-[hsl(var(--border))]">
              <div className="max-w-7xl mx-auto px-6 md:px-12">
                <FadeIn>
                  <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-4xl md:text-6xl font-bold font-heading text-[hsl(var(--text))] mb-6 tracking-tight">
                      A comprehensive tech stack.
                    </h2>
                    <p className="text-xl text-[hsl(var(--text-muted))]">
                      You won't just learn "ChatGPT". You'll master the entire ecosystem of tools necessary to automate workflows and scale your output.
                    </p>
                  </div>
                </FadeIn>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                  {[
                    { name: "Advanced Prompting", image: techAdvancedPrompting },
                    { name: "Large Language Models", image: techLargeLanguageModels },
                    { name: "AI Automation", image: techAiAutomation },
                    { name: "Data Analysis", image: techDataAnalysis },
                    { name: "Image Generation", image: techImageGeneration },
                    { name: "AI Agents", image: techAiAgents },
                    { name: "Strategic Implementation", image: techStrategicImplementation },
                    { name: "Custom GPTs", image: techCustomGpts }
                  ].map((tool, i) => (
                    <FadeIn key={i} delay={i * 50} className="p-8 rounded-2xl bg-[hsl(var(--bg))] border border-[hsl(var(--border))] hover:border-[hsl(var(--accent))] transition-colors flex flex-col items-center text-center gap-4 group">
                      <div className="w-24 h-24 flex items-center justify-center">
                        <img
                          src={tool.image}
                          alt={tool.name}
                          loading="lazy"
                          width={256}
                          height={256}
                          className="w-full h-full object-contain drop-shadow-[0_8px_24px_rgba(139,92,246,0.25)] group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <span className="font-bold text-[hsl(var(--text))]">{tool.name}</span>
                    </FadeIn>
                  ))}
                </div>
              </div>
            </section>

            {/* METRICS & PROOF */}
            <section className="py-24 border-b border-[hsl(var(--border))]">
              <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="grid md:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-[hsl(var(--border))]">
                  {[
                    { label: "Active Professionals", value: "15,000+" },
                    { label: "Tasks Completed", value: "1.2M" },
                    { label: "Completion Rate", value: "94%" },
                    { label: "Avg. Salary Increase", value: "$18k+" }
                  ].map((metric, i) => (
                    <FadeIn key={i} delay={i * 100} className="pt-8 md:pt-0 md:px-8 first:pt-0 first:md:px-0 text-center flex flex-col items-center justify-center">
                      <div className="text-4xl md:text-5xl font-bold font-heading text-[hsl(var(--text))] mb-2 tracking-tight">{metric.value}</div>
                      <div className="text-[hsl(var(--text-muted))] font-medium uppercase tracking-wider text-sm">{metric.label}</div>
                    </FadeIn>
                  ))}
                </div>
              </div>
            </section>

            {/* TESTIMONIALS */}
            <section className="py-32 bg-[hsl(var(--bg))]">
              <div className="max-w-7xl mx-auto px-6 md:px-12">
                <FadeIn>
                  <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-4xl md:text-6xl font-bold font-heading text-[hsl(var(--text))] mb-6 tracking-tight">
                      Don't just take our word for it.
                    </h2>
                    <p className="text-xl text-[hsl(var(--text-muted))]">
                      Join thousands of ambitious professionals who have already future-proofed their careers.
                    </p>
                  </div>
                </FadeIn>

                <div className="grid md:grid-cols-3 gap-8">
                  {[
                    {
                      name: "Sarah M.",
                      role: "Marketing Director",
                      quote: "I was worried AI was going to make my role obsolete. This 28-day program completely flipped my perspective. I now manage a team of AI agents and my output has quadrupled."
                    },
                    {
                      name: "David K.",
                      role: "Product Manager",
                      quote: "The AI mentor, Nova, is incredible. It feels like having a senior engineer reviewing my prompts and logic. It's the most practical, hands-on learning experience I've ever had."
                    },
                    {
                      name: "Elena R.",
                      role: "Operations Lead",
                      quote: "Best investment I've made in my career. I used the skills from Week 3 to automate our entire onboarding flow, saving the company 40 hours a week. I got promoted a month later."
                    }
                  ].map((testimonial, i) => (
                    <FadeIn key={i} delay={i * 150} className="p-8 rounded-3xl bg-[hsl(var(--surface))] border border-[hsl(var(--border))] flex flex-col justify-between">
                      <div>
                        <div className="flex gap-1 text-[hsl(var(--accent))] mb-6">
                          <Star className="w-5 h-5 fill-current" />
                          <Star className="w-5 h-5 fill-current" />
                          <Star className="w-5 h-5 fill-current" />
                          <Star className="w-5 h-5 fill-current" />
                          <Star className="w-5 h-5 fill-current" />
                        </div>
                        <p className="text-lg text-[hsl(var(--text))] leading-relaxed mb-8">"{testimonial.quote}"</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-[hsl(var(--surface-2))] flex items-center justify-center font-bold text-[hsl(var(--text))]">
                          {testimonial.name.charAt(0)}
                        </div>
                        <div>
                          <div className="font-bold text-[hsl(var(--text))]">{testimonial.name}</div>
                          <div className="text-sm text-[hsl(var(--text-muted))]">{testimonial.role}</div>
                        </div>
                      </div>
                    </FadeIn>
                  ))}
                </div>
              </div>
            </section>

            {/* CLOSING CTA */}
            <section className="py-32 px-6 md:px-12">
              <FadeIn className="max-w-5xl mx-auto rounded-[3rem] bg-gradient-to-br from-[hsl(var(--surface))] to-[hsl(var(--bg))] border border-[hsl(var(--border))] p-12 md:p-20 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[hsl(var(--accent))]/10 blur-[100px] rounded-full pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[hsl(var(--accent-2))]/10 blur-[100px] rounded-full pointer-events-none"></div>
                
                <div className="relative z-10">
                  <h2 className="text-4xl md:text-7xl font-bold font-heading text-[hsl(var(--text))] mb-8 tracking-tight max-w-3xl mx-auto leading-tight">
                    Ready to become the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--accent))] to-[hsl(var(--accent-2))]">AI expert</span> in the room?
                  </h2>
                  <p className="text-xl text-[hsl(var(--text-muted))] mb-12 max-w-2xl mx-auto">
                    Join the next cohort. 28 days of intense, practical learning. Guaranteed results or your money back.
                  </p>
                  
                  <Link href="/quiz" className="inline-flex items-center justify-center gap-3 bg-[hsl(var(--text))] hover:opacity-90 text-[hsl(var(--bg))] px-12 py-6 rounded-full font-bold text-xl transition-all hover:scale-105 active:scale-95 shadow-2xl">
                    Begin the Challenge <ArrowRight className="w-6 h-6" />
                  </Link>
                  <p className="mt-8 text-sm text-[hsl(var(--text-muted))] font-medium">
                    Spots are limited. Secure your place today.
                  </p>
                </div>
              </FadeIn>
            </section>
          </main>

          <footer className="py-12 border-t border-[hsl(var(--border))] bg-[hsl(var(--surface))] text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[hsl(var(--accent-2))] to-[hsl(var(--accent))] flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-xl tracking-tight font-heading text-[hsl(var(--text))]">Upskil OS</span>
            </div>
            <p className="text-[hsl(var(--text-muted))] text-sm">
              © {new Date().getFullYear()} Upskil OS. All rights reserved.
            </p>
          </footer>
        </div>
      </Show>
    </>
  );
}
