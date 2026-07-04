import { Link } from "wouter";
import { Award, ShieldCheck, ArrowRight, Flame, Check, Sparkles } from "lucide-react";

function CertificateMock() {
  return (
    <div className="relative w-full aspect-[1.414/1] [transform:perspective(1200px)_rotateY(-9deg)_rotateX(5deg)] group-hover:[transform:perspective(1200px)_rotateY(0deg)_rotateX(0deg)] transition-transform duration-700 ease-out motion-reduce:transition-none motion-reduce:[transform:none]">
      {/* glow */}
      <div className="absolute -inset-4 bg-gradient-to-br from-[hsl(var(--accent))]/30 to-[hsl(var(--accent-2))]/30 blur-2xl rounded-3xl opacity-60 group-hover:opacity-90 transition-opacity duration-700" />

      <div className="relative h-full overflow-hidden bg-[hsl(var(--surface))] border-[6px] border-[hsl(var(--surface-2))] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] rounded-xl flex flex-col justify-between p-5 sm:p-7">
        <div className="absolute inset-0 opacity-40" style={{ backgroundImage: "radial-gradient(hsl(var(--border)) 1px, transparent 1px)", backgroundSize: "18px 18px" }} />
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[hsl(var(--accent))] to-[hsl(var(--accent-2))]" />

        {/* top */}
        <div className="relative z-10 flex justify-between items-start">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded bg-gradient-to-br from-[hsl(var(--accent-2))] to-[hsl(var(--accent))] flex items-center justify-center">
              <Award className="w-4 h-4 text-white" />
            </div>
            <span className="font-heading font-semibold text-base tracking-tight text-[hsl(var(--text))]">Upskil OS</span>
          </div>
          <div className="text-right">
            <div className="text-[8px] text-[hsl(var(--text-muted))] uppercase tracking-widest font-semibold">Credential ID</div>
            <div className="font-mono text-[10px] text-[hsl(var(--text))]">UP-2026-89B4C</div>
          </div>
        </div>

        {/* middle */}
        <div className="relative z-10 text-center space-y-1.5">
          <div className="text-[8px] sm:text-[9px] text-[hsl(var(--text-muted))] uppercase tracking-[0.2em] font-semibold">This certifies that</div>
          <h3 className="font-heading text-xl sm:text-2xl font-medium tracking-tight text-[hsl(var(--text))]">Alex Rivera</h3>
          <div className="text-[8px] sm:text-[9px] text-[hsl(var(--text-muted))] uppercase tracking-[0.2em] font-semibold">has mastered</div>
          <h4 className="text-sm sm:text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[hsl(var(--accent))] to-[hsl(var(--accent-2))] inline-block">
            The 28-Day AI Challenge
          </h4>
        </div>

        {/* bottom */}
        <div className="relative z-10 flex justify-between items-end border-t border-[hsl(var(--border))] pt-3">
          <div>
            <div className="text-[8px] text-[hsl(var(--text-muted))] uppercase tracking-widest font-semibold mb-0.5">Issued</div>
            <div className="text-[10px] font-medium text-[hsl(var(--text))]">July 2026</div>
          </div>
          <div className="flex items-center gap-1 bg-gradient-to-r from-[hsl(var(--accent))] to-[hsl(var(--accent-2))] px-2 py-0.5 rounded-full text-white text-[8px] font-semibold">
            <ShieldCheck className="w-2.5 h-2.5" /> Verified
          </div>
          <div className="text-right">
            <div className="w-14 h-px bg-[hsl(var(--surface-2))] mb-1 ml-auto" />
            <div className="text-[8px] text-[hsl(var(--text-muted))] uppercase tracking-widest font-semibold">Signature</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CalendarMock() {
  const completed = 18;
  const today = 19;
  const total = 28;
  const days = Array.from({ length: total }, (_, i) => i + 1);

  return (
    <div className="relative w-full aspect-[1.414/1] [transform:perspective(1200px)_rotateY(9deg)_rotateX(5deg)] group-hover:[transform:perspective(1200px)_rotateY(0deg)_rotateX(0deg)] transition-transform duration-700 ease-out motion-reduce:transition-none motion-reduce:[transform:none]">
      <div className="absolute -inset-4 bg-gradient-to-bl from-[hsl(var(--accent-2))]/30 to-[hsl(var(--accent))]/30 blur-2xl rounded-3xl opacity-60 group-hover:opacity-90 transition-opacity duration-700" />

      <div className="relative h-full overflow-hidden bg-[hsl(var(--surface))] border-[6px] border-[hsl(var(--surface-2))] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] rounded-xl flex flex-col p-5 sm:p-7">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[hsl(var(--accent-2))] to-[hsl(var(--accent))]" />

        {/* header */}
        <div className="relative z-10 flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded bg-gradient-to-br from-[hsl(var(--accent-2))] to-[hsl(var(--accent))] flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <span className="font-heading font-semibold text-sm tracking-tight text-[hsl(var(--text))]">Your 28 Days</span>
          </div>
          <div className="flex items-center gap-1 text-[hsl(var(--text))] bg-[hsl(var(--surface-2))] px-2 py-1 rounded-full">
            <Flame className="w-3.5 h-3.5 text-orange-500 fill-orange-500" />
            <span className="text-[10px] font-bold">18 day streak</span>
          </div>
        </div>

        {/* grid */}
        <div className="relative z-10 grid grid-cols-7 gap-1 sm:gap-1.5 flex-1 content-center">
          {days.map((d) => {
            const isDone = d <= completed;
            const isToday = d === today;
            return (
              <div
                key={d}
                className={`aspect-square rounded-md flex items-center justify-center text-[8px] sm:text-[10px] font-bold transition-colors ${
                  isDone
                    ? "bg-gradient-to-br from-[hsl(var(--accent))] to-[hsl(var(--accent-2))] text-white shadow-sm"
                    : isToday
                    ? "bg-[hsl(var(--bg))] text-[hsl(var(--text))] ring-2 ring-[hsl(var(--accent))] ring-offset-1 ring-offset-[hsl(var(--surface))] animate-pulse motion-reduce:animate-none"
                    : "bg-[hsl(var(--surface-2))] text-[hsl(var(--text-muted))]"
                }`}
              >
                {isDone ? <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3" strokeWidth={3} /> : d}
              </div>
            );
          })}
        </div>

        {/* footer progress */}
        <div className="relative z-10 mt-3">
          <div className="flex justify-between text-[9px] font-semibold mb-1">
            <span className="text-[hsl(var(--text-muted))] uppercase tracking-wider">Progress</span>
            <span className="text-[hsl(var(--text))]">{completed} / {total} days</span>
          </div>
          <div className="w-full h-1.5 bg-[hsl(var(--surface-2))] rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-[hsl(var(--accent))] to-[hsl(var(--accent-2))] rounded-full" style={{ width: `${(completed / total) * 100}%` }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProofShowcase() {
  return (
    <section className="py-32 bg-[hsl(var(--bg))] border-y border-[hsl(var(--border))]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-6xl font-bold font-heading text-[hsl(var(--text))] mb-6 tracking-tight">
            Finish with proof, not just knowledge.
          </h2>
          <p className="text-xl text-[hsl(var(--text-muted))]">
            Build a daily streak, complete real hands-on tasks, and walk away with a verified credential you can show any employer.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* Certificate card */}
          <Link
            href="/quiz"
            className="group relative flex flex-col gap-8 p-8 md:p-10 rounded-3xl bg-[hsl(var(--surface))] border border-[hsl(var(--border))] hover:border-[hsl(var(--accent))] transition-colors overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--accent))] focus-visible:ring-offset-2 focus-visible:ring-offset-[hsl(var(--bg))]"
          >
            <div className="px-2">
              <CertificateMock />
            </div>
            <div className="flex items-center justify-between gap-4">
              <div>
                <h3 className="font-heading text-2xl md:text-3xl font-bold text-[hsl(var(--text))] mb-2 tracking-tight">
                  Get your AI certificate
                </h3>
                <p className="text-[hsl(var(--text-muted))] leading-relaxed">
                  Explore your personalized learning plan and become a verified master of AI.
                </p>
              </div>
              <div className="w-12 h-12 shrink-0 rounded-full bg-[hsl(var(--surface-2))] flex items-center justify-center text-[hsl(var(--text))] group-hover:bg-gradient-to-br group-hover:from-[hsl(var(--accent))] group-hover:to-[hsl(var(--accent-2))] group-hover:text-white transition-all group-hover:translate-x-1">
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>
          </Link>

          {/* Calendar card */}
          <Link
            href="/quiz"
            className="group relative flex flex-col gap-8 p-8 md:p-10 rounded-3xl bg-[hsl(var(--surface))] border border-[hsl(var(--border))] hover:border-[hsl(var(--accent))] transition-colors overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--accent))] focus-visible:ring-offset-2 focus-visible:ring-offset-[hsl(var(--bg))]"
          >
            <div className="px-2">
              <CalendarMock />
            </div>
            <div className="flex items-center justify-between gap-4">
              <div>
                <h3 className="font-heading text-2xl md:text-3xl font-bold text-[hsl(var(--text))] mb-2 tracking-tight">
                  Join the 28-Day Challenge
                </h3>
                <p className="text-[hsl(var(--text-muted))] leading-relaxed">
                  Gain confidence with AI tools through 30 focused minutes a day, tailored to your goals.
                </p>
              </div>
              <div className="w-12 h-12 shrink-0 rounded-full bg-[hsl(var(--surface-2))] flex items-center justify-center text-[hsl(var(--text))] group-hover:bg-gradient-to-br group-hover:from-[hsl(var(--accent))] group-hover:to-[hsl(var(--accent-2))] group-hover:text-white transition-all group-hover:translate-x-1">
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
