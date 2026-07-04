import { Shell } from "@/components/layout/Shell";
import { Redirect, Link } from "wouter";
import { Show } from "@clerk/react";
import { useListCurriculumDays, useListProgress } from "@workspace/api-client-react";
import { CheckCircle2, Lock, Map as MapIcon, ArrowRight } from "lucide-react";

export default function PathPage() {
  return (
    <>
      <Show when="signed-in">
        <Shell>
          <PathContent />
        </Shell>
      </Show>
      <Show when="signed-out">
        <Redirect to="/sign-in" />
      </Show>
    </>
  );
}

function PathContent() {
  const { data: days } = useListCurriculumDays();
  const { data: progresses } = useListProgress();

  const getDayStatus = (dayNum: number) => {
    const p = progresses?.find(p => p.day === dayNum);
    if (!p) return 'locked';
    if (p.lessonCompleted && p.taskCompleted && p.quizCompleted && p.reflectionCompleted) return 'completed';
    return 'active';
  };

  return (
    <div className="max-w-5xl mx-auto animate-slide-up pb-24 text-[hsl(var(--text))]">
      <div className="mb-10">
        <h1 className="text-4xl font-heading font-bold mb-3 flex items-center gap-3">
          <MapIcon className="w-8 h-8 text-[hsl(var(--accent))]" />
          Your Path
        </h1>
        <p className="text-[hsl(var(--text-muted))] text-lg">The complete 28-day curriculum.</p>
      </div>

      <div className="space-y-4 relative">
        <div className="absolute left-[39px] top-8 bottom-8 w-0.5 bg-[hsl(var(--border))] z-0"></div>
        
        {days?.map((day) => {
          const status = getDayStatus(day.day);
          
          return (
            <div key={day.day} className={`os-card p-4 relative z-10 flex gap-6 items-center transition-all ${status === 'locked' ? 'opacity-50 grayscale' : 'hover:border-[hsl(var(--accent))] cursor-pointer group'}`}>
              <div className={`w-12 h-12 rounded-full flex shrink-0 items-center justify-center border-2 bg-[hsl(var(--surface))] ${
                status === 'completed' ? 'border-[hsl(var(--accent-2))] text-[hsl(var(--accent-2))]' : 
                status === 'active' ? 'border-[hsl(var(--accent))] text-[hsl(var(--accent))] shadow-[0_0_15px_hsl(var(--accent)/0.3)]' : 
                'border-[hsl(var(--border))] text-[hsl(var(--text-muted))]'
              }`}>
                {status === 'completed' ? <CheckCircle2 className="w-6 h-6" /> : 
                 status === 'locked' ? <Lock className="w-5 h-5" /> : 
                 <span className="font-bold">{day.day}</span>}
              </div>

              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] uppercase tracking-widest font-bold text-[hsl(var(--text-muted))]">{day.theme}</span>
                  <span className="w-1 h-1 rounded-full bg-[hsl(var(--border))]"></span>
                  <span className="text-[10px] uppercase tracking-widest font-bold text-[hsl(var(--accent))]">{day.xpReward} XP</span>
                </div>
                <h3 className="text-lg font-semibold font-heading text-[hsl(var(--text))]">{day.title}</h3>
              </div>

              {status !== 'locked' && (
                <Link href={`/day/${day.day}`}>
                  <button className="opacity-0 group-hover:opacity-100 p-3 rounded-full bg-[hsl(var(--surface-2))] text-[hsl(var(--text))] hover:bg-[hsl(var(--accent))] hover:text-white transition-all mr-2">
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </Link>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
