import { Shell } from "@/components/layout/Shell";
import { Redirect } from "wouter";
import { Show } from "@clerk/react";
import { 
  useGetMe, 
  useGetCurriculumDay, 
  useGetDayProgress, 
  useListAchievements,
  getGetCurriculumDayQueryKey, 
  getGetDayProgressQueryKey,
  getListAchievementsQueryKey
} from "@workspace/api-client-react";
import { Sparkles, Trophy, Flame, Zap, CheckCircle2, Lock, ArrowRight, MessageSquare, TerminalSquare, ShieldAlert } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Skeleton } from "@/components/ui/skeleton";
import * as LucideIcons from "lucide-react";
import { motion } from "framer-motion";

export default function DashboardPage() {
  return (
    <>
      <Show when="signed-in">
        <Shell>
          <DashboardContent />
        </Shell>
      </Show>
      <Show when="signed-out">
        <Redirect to="/sign-in" />
      </Show>
    </>
  );
}

function DashboardContent() {
  const { data: me, isLoading: meLoading } = useGetMe();
  const currentDay = me?.currentDay || 1;
  const dayLocked = !!me && !me.hasAccess && currentDay > me.accessibleThroughDay;
  const { data: dayDetail, isLoading: dayLoading } = useGetCurriculumDay(currentDay, { query: { enabled: !!me && !dayLocked, queryKey: getGetCurriculumDayQueryKey(currentDay), retry: false } });
  const { data: progress, isLoading: progressLoading } = useGetDayProgress(currentDay, { query: { enabled: !!me && !dayLocked, queryKey: getGetDayProgressQueryKey(currentDay), retry: false } });
  const { data: achievements, isLoading: achievementsLoading } = useListAchievements({ query: { queryKey: getListAchievementsQueryKey() } });
  
  if (meLoading || dayLoading || progressLoading || achievementsLoading) {
    return <div className="space-y-8"><Skeleton className="h-32 w-full bg-[hsl(var(--surface-2))]" /><Skeleton className="h-96 w-full bg-[hsl(var(--surface-2))]" /></div>;
  }

  if (dayLocked) {
    return <Redirect to="/upgrade" />;
  }

  const isLessonComplete = progress?.lessonCompleted;
  const isTaskComplete = progress?.taskCompleted;
  const isQuizComplete = progress?.quizCompleted;
  const isReflectionComplete = progress?.reflectionCompleted;

  const completedSteps = [isLessonComplete, isTaskComplete, isQuizComplete, isReflectionComplete].filter(Boolean).length;
  const progressPercent = (completedSteps / 4) * 100;
  const strokeDashoffset = 113 - (113 * progressPercent / 100);

  return (
    <div className="space-y-8 animate-slide-up">
      {/* HERO WELCOME */}
      <div className="flex items-end justify-between flex-wrap gap-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2.5 py-1 rounded-full bg-[hsl(var(--accent-2))/0.1] text-[hsl(var(--accent-2))] text-xs font-bold uppercase tracking-widest">Day {currentDay} of 28</span>
            <span className="text-[hsl(var(--text-muted))] text-sm font-medium">• {dayDetail?.theme || "Loading theme"}</span>
          </div>
          <h1 className="text-4xl text-[hsl(var(--text))] font-heading mb-2">Good morning, {me?.displayName?.split(' ')[0] || 'Learner'}.</h1>
          <p className="text-[hsl(var(--text-muted))] text-lg">You're {Math.round((currentDay / 28) * 100)}% through the challenge. Ready for today's flow?</p>
        </div>
        <div className="flex items-center gap-4 bg-[hsl(var(--surface))] border border-[hsl(var(--border))] rounded-2xl p-4 shadow-sm">
          <div className="flex items-center gap-3 pr-4 border-r border-[hsl(var(--border))]">
            <div className="text-right">
              <p className="text-sm font-bold text-[hsl(var(--text))]">Level {me?.level || 1}</p>
              <p className="text-xs text-[hsl(var(--text-muted))]">{me?.xp ? 500 - (me.xp % 500) : 500} XP to Next</p>
            </div>
            <div className="w-12 h-12 rounded-full border-4 border-[hsl(var(--surface-2))] flex items-center justify-center relative">
              <svg className="w-full h-full absolute top-0 left-0 -rotate-90">
                <circle cx="20" cy="20" r="18" fill="none" stroke="hsl(var(--accent))" strokeWidth="4" strokeDasharray="113" strokeDashoffset={113 - (113 * ((me?.xp || 0) % 500) / 500)} className="drop-shadow-[0_0_4px_hsl(var(--accent))]" />
              </svg>
              <Trophy className="w-5 h-5 text-[hsl(var(--accent))]" />
            </div>
          </div>
          <div className="flex flex-col items-center pl-2">
            <div className="flex items-center gap-1.5 mb-1">
              <Flame className={`w-5 h-5 ${me?.streakCount && me.streakCount > 0 ? 'text-orange-500 fill-orange-500/20' : 'text-[hsl(var(--text-muted))]'}`} />
              <span className={`text-lg font-bold font-heading ${me?.streakCount && me.streakCount > 0 ? 'text-[hsl(var(--text))]' : 'text-[hsl(var(--text-muted))]'}`}>{me?.streakCount || 0}</span>
            </div>
            {me?.streakFreezes !== undefined && (
              <div className="flex items-center gap-1 text-[10px] uppercase font-bold text-[hsl(var(--accent-2))]">
                <ShieldAlert className="w-3 h-3" />
                <span>{me.streakFreezes} Freezes</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* MAIN DASHBOARD GRID */}
      <div className="grid grid-cols-12 gap-6">
        
        {/* LEFT COLUMN: DAILY FLOW */}
        <div className="col-span-12 lg:col-span-7 flex flex-col gap-6">
          <div className="os-glass p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[hsl(var(--accent))] opacity-10 blur-[100px] rounded-full pointer-events-none"></div>
            
            <div className="flex items-center justify-between mb-8 relative z-10">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full border-4 border-[hsl(var(--surface-2))] flex items-center justify-center relative bg-[hsl(var(--surface))] shrink-0">
                  <svg className="w-full h-full absolute top-0 left-0 -rotate-90">
                    <circle cx="24" cy="24" r="22" fill="none" stroke="hsl(var(--accent-2))" strokeWidth="4" strokeDasharray="138" strokeDashoffset={138 - (138 * progressPercent / 100)} className="drop-shadow-[0_0_4px_hsl(var(--accent-2))] transition-all duration-1000 ease-out" />
                  </svg>
                  <span className="text-sm font-bold text-[hsl(var(--text))]">{completedSteps}/4</span>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-[hsl(var(--text))] font-heading">Today's Action Plan</h2>
                  <p className="text-[hsl(var(--text-muted))] mt-1 text-sm">{dayDetail?.title || "Loading title"}</p>
                </div>
              </div>
              <Link href={`/day/${currentDay}`}>
                <Button className="bg-[hsl(var(--accent))] hover:bg-[hsl(var(--accent))/0.9] text-white rounded-full px-6">
                  {completedSteps === 4 ? "Review Day" : "Continue Flow"}
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-4 relative z-10">
              <div className="absolute left-[23px] top-8 bottom-8 w-0.5 bg-[hsl(var(--border))] z-0"></div>

              {/* Task 1: Lesson */}
              <div className={`flex gap-5 p-4 rounded-xl border transition-all ${isLessonComplete ? 'border-[hsl(var(--border))] bg-[hsl(var(--surface))] opacity-70' : 'border-[hsl(var(--accent))] bg-[hsl(var(--surface-2))] shadow-[0_0_30px_hsl(var(--accent)/0.1)] relative overflow-hidden'}`}>
                {!isLessonComplete && <div className="absolute left-0 top-0 w-1 h-full bg-[hsl(var(--accent))] shadow-[0_0_10px_hsl(var(--accent))]"></div>}
                <div className={`mt-1 flex-shrink-0 relative z-10 ${isLessonComplete ? 'bg-[hsl(var(--surface))]' : 'bg-[hsl(var(--surface-2))]'}`}>
                  {isLessonComplete ? (
                    <CheckCircle2 className="w-12 h-12 text-[hsl(var(--accent-2))] fill-[hsl(var(--accent-2))/0.2]" />
                  ) : (
                    <div className="w-12 h-12 rounded-full border-2 border-[hsl(var(--accent))] flex items-center justify-center bg-[hsl(var(--accent))/0.1]">
                      <div className="w-3 h-3 rounded-full bg-[hsl(var(--accent))] animate-pulse"></div>
                    </div>
                  )}
                </div>
                <div className="flex-1 pt-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className={`text-xs font-bold uppercase tracking-wider ${isLessonComplete ? 'text-[hsl(var(--text-muted))]' : 'text-[hsl(var(--accent))]'}`}>Lesson</span>
                    <span className={`text-xs font-semibold ${isLessonComplete ? 'text-[hsl(var(--text-muted))]' : 'text-[hsl(var(--accent))]'}`}>+{dayDetail?.xpReward ? Math.floor(dayDetail.xpReward * 0.2) : 50} XP</span>
                  </div>
                  <h3 className={`text-lg font-medium text-[hsl(var(--text))] mb-1 ${isLessonComplete ? 'line-through text-[hsl(var(--text-muted))]' : ''}`}>{dayDetail?.lessonTitle}</h3>
                  {!isLessonComplete && (
                    <Link href={`/day/${currentDay}`}><Button className="mt-2 bg-[hsl(var(--accent))] hover:bg-[hsl(var(--accent))/0.9] text-white" size="sm">Start Lesson</Button></Link>
                  )}
                </div>
              </div>

              {/* Task 2: Task */}
              <div className={`flex gap-5 p-4 rounded-xl border transition-all ${isTaskComplete ? 'border-[hsl(var(--border))] bg-[hsl(var(--surface))] opacity-70' : isLessonComplete ? 'border-[hsl(var(--accent))] bg-[hsl(var(--surface-2))] shadow-[0_0_30px_hsl(var(--accent)/0.1)] relative overflow-hidden' : 'border-transparent'}`}>
                {isLessonComplete && !isTaskComplete && <div className="absolute left-0 top-0 w-1 h-full bg-[hsl(var(--accent))] shadow-[0_0_10px_hsl(var(--accent))]"></div>}
                <div className="mt-1 flex-shrink-0 relative z-10 bg-[hsl(var(--bg))]">
                  {isTaskComplete ? (
                     <CheckCircle2 className="w-12 h-12 text-[hsl(var(--accent-2))] fill-[hsl(var(--accent-2))/0.2]" />
                  ) : !isLessonComplete ? (
                    <div className="w-12 h-12 rounded-full bg-[hsl(var(--surface))] border border-[hsl(var(--border))] flex items-center justify-center">
                      <Lock className="w-5 h-5 text-[hsl(var(--text-muted))]" />
                    </div>
                  ) : (
                    <div className="w-12 h-12 rounded-full border-2 border-[hsl(var(--accent))] flex items-center justify-center bg-[hsl(var(--accent))/0.1]">
                      <div className="w-3 h-3 rounded-full bg-[hsl(var(--accent))] animate-pulse"></div>
                    </div>
                  )}
                </div>
                <div className="flex-1 pt-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className={`text-xs font-bold uppercase tracking-wider ${isLessonComplete && !isTaskComplete ? 'text-[hsl(var(--accent))]' : 'text-[hsl(var(--text-muted))]'}`}>Task</span>
                    <span className={`text-xs font-semibold ${isLessonComplete && !isTaskComplete ? 'text-[hsl(var(--accent))]' : 'text-[hsl(var(--text-muted))]'}`}>+{dayDetail?.xpReward ? Math.floor(dayDetail.xpReward * 0.4) : 100} XP</span>
                  </div>
                  <h3 className={`text-lg font-medium ${!isLessonComplete ? 'text-[hsl(var(--text-muted))]' : 'text-[hsl(var(--text))]'} ${isTaskComplete ? 'line-through text-[hsl(var(--text-muted))]' : ''}`}>{dayDetail?.taskTitle}</h3>
                  {isLessonComplete && !isTaskComplete && (
                     <Link href={`/day/${currentDay}`}><Button className="mt-2 bg-[hsl(var(--accent))] hover:bg-[hsl(var(--accent))/0.9] text-white" size="sm">Start Task</Button></Link>
                  )}
                </div>
              </div>

              {/* Task 3: Quiz */}
              <div className={`flex gap-5 p-4 rounded-xl border transition-all ${isQuizComplete ? 'border-[hsl(var(--border))] bg-[hsl(var(--surface))] opacity-70' : isTaskComplete ? 'border-[hsl(var(--accent))] bg-[hsl(var(--surface-2))] shadow-[0_0_30px_hsl(var(--accent)/0.1)] relative overflow-hidden' : 'border-transparent'}`}>
                {isTaskComplete && !isQuizComplete && <div className="absolute left-0 top-0 w-1 h-full bg-[hsl(var(--accent))] shadow-[0_0_10px_hsl(var(--accent))]"></div>}
                <div className="mt-1 flex-shrink-0 relative z-10 bg-[hsl(var(--bg))]">
                  {isQuizComplete ? (
                     <CheckCircle2 className="w-12 h-12 text-[hsl(var(--accent-2))] fill-[hsl(var(--accent-2))/0.2]" />
                  ) : !isTaskComplete ? (
                    <div className="w-12 h-12 rounded-full bg-[hsl(var(--surface))] border border-[hsl(var(--border))] flex items-center justify-center">
                      <Lock className="w-5 h-5 text-[hsl(var(--text-muted))]" />
                    </div>
                  ) : (
                    <div className="w-12 h-12 rounded-full border-2 border-[hsl(var(--accent))] flex items-center justify-center bg-[hsl(var(--accent))/0.1]">
                      <div className="w-3 h-3 rounded-full bg-[hsl(var(--accent))] animate-pulse"></div>
                    </div>
                  )}
                </div>
                <div className="flex-1 pt-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className={`text-xs font-bold uppercase tracking-wider ${isTaskComplete && !isQuizComplete ? 'text-[hsl(var(--accent))]' : 'text-[hsl(var(--text-muted))]'}`}>Quiz</span>
                    <span className={`text-xs font-semibold ${isTaskComplete && !isQuizComplete ? 'text-[hsl(var(--accent))]' : 'text-[hsl(var(--text-muted))]'}`}>+{dayDetail?.xpReward ? Math.floor(dayDetail.xpReward * 0.2) : 50} XP</span>
                  </div>
                  <h3 className={`text-lg font-medium ${!isTaskComplete ? 'text-[hsl(var(--text-muted))]' : 'text-[hsl(var(--text))]'} ${isQuizComplete ? 'line-through text-[hsl(var(--text-muted))]' : ''}`}>Knowledge Check</h3>
                  {isTaskComplete && !isQuizComplete && (
                     <Link href={`/day/${currentDay}`}><Button className="mt-2 bg-[hsl(var(--accent))] hover:bg-[hsl(var(--accent))/0.9] text-white" size="sm">Start Quiz</Button></Link>
                  )}
                </div>
              </div>

              {/* Task 4: Reflection */}
              <div className={`flex gap-5 p-4 rounded-xl border transition-all ${isReflectionComplete ? 'border-[hsl(var(--border))] bg-[hsl(var(--surface))] opacity-70' : isQuizComplete ? 'border-[hsl(var(--accent))] bg-[hsl(var(--surface-2))] shadow-[0_0_30px_hsl(var(--accent)/0.1)] relative overflow-hidden' : 'border-transparent'}`}>
                {isQuizComplete && !isReflectionComplete && <div className="absolute left-0 top-0 w-1 h-full bg-[hsl(var(--accent))] shadow-[0_0_10px_hsl(var(--accent))]"></div>}
                <div className="mt-1 flex-shrink-0 relative z-10 bg-[hsl(var(--bg))]">
                  {isReflectionComplete ? (
                     <CheckCircle2 className="w-12 h-12 text-[hsl(var(--accent-2))] fill-[hsl(var(--accent-2))/0.2]" />
                  ) : !isQuizComplete ? (
                    <div className="w-12 h-12 rounded-full bg-[hsl(var(--surface))] border border-[hsl(var(--border))] flex items-center justify-center">
                      <Lock className="w-5 h-5 text-[hsl(var(--text-muted))]" />
                    </div>
                  ) : (
                    <div className="w-12 h-12 rounded-full border-2 border-[hsl(var(--accent))] flex items-center justify-center bg-[hsl(var(--accent))/0.1]">
                      <div className="w-3 h-3 rounded-full bg-[hsl(var(--accent))] animate-pulse"></div>
                    </div>
                  )}
                </div>
                <div className="flex-1 pt-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className={`text-xs font-bold uppercase tracking-wider ${isQuizComplete && !isReflectionComplete ? 'text-[hsl(var(--accent))]' : 'text-[hsl(var(--text-muted))]'}`}>Reflection</span>
                    <span className={`text-xs font-semibold ${isQuizComplete && !isReflectionComplete ? 'text-[hsl(var(--accent))]' : 'text-[hsl(var(--text-muted))]'}`}>+{dayDetail?.xpReward ? Math.floor(dayDetail.xpReward * 0.2) : 50} XP</span>
                  </div>
                  <h3 className={`text-lg font-medium ${!isQuizComplete ? 'text-[hsl(var(--text-muted))]' : 'text-[hsl(var(--text))]'} ${isReflectionComplete ? 'line-through text-[hsl(var(--text-muted))]' : ''}`}>Daily Reflection</h3>
                  {isQuizComplete && !isReflectionComplete && (
                     <Link href={`/day/${currentDay}`}><Button className="mt-2 bg-[hsl(var(--accent))] hover:bg-[hsl(var(--accent))/0.9] text-white" size="sm">Start Reflection</Button></Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: MODULES */}
        <div className="col-span-12 lg:col-span-5 flex flex-col gap-6">
          
          {/* Achievements Showcase */}
          {achievements && achievements.length > 0 && (
            <div className="os-card p-5">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-[hsl(var(--text))]">
                  <Trophy className="w-4 h-4 text-[hsl(var(--accent))]" />
                  <span className="text-sm font-bold uppercase tracking-wider">Achievements</span>
                </div>
                <span className="text-xs text-[hsl(var(--text-muted))]">{achievements.filter(a => a.unlockedAt).length} / {achievements.length}</span>
              </div>
              <div className="grid grid-cols-4 gap-3">
                {achievements.slice(0, 8).map(ach => {
                  const Icon = (LucideIcons as any)[
                    ach.icon.charAt(0).toUpperCase() + ach.icon.slice(1).replace(/-([a-z])/g, (g) => g[1].toUpperCase())
                  ] || LucideIcons.Trophy;
                  const isUnlocked = !!ach.unlockedAt;

                  return (
                    <div 
                      key={ach.code} 
                      title={ach.title}
                      className={`aspect-square rounded-xl flex items-center justify-center border transition-all ${
                        isUnlocked 
                        ? 'bg-[hsl(var(--accent-2))/0.1] border-[hsl(var(--accent-2))/0.3] text-[hsl(var(--accent-2))] shadow-[0_0_15px_hsl(var(--accent-2)/0.2)]' 
                        : 'bg-[hsl(var(--surface-2))] border-[hsl(var(--border))] text-[hsl(var(--text-muted))] opacity-50'
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* AI Mentor Chat Snippet */}
          <div className="os-card p-0 flex flex-col overflow-hidden border-[hsl(var(--accent-2))/0.3] hover:border-[hsl(var(--accent-2))/0.6] transition-colors">
            <div className="p-4 border-b border-[hsl(var(--border))] flex items-center justify-between bg-[hsl(var(--surface-2))]">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[hsl(var(--accent-2))] to-[hsl(var(--accent))] flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-[#fff]" />
                </div>
                <div>
                  <p className="text-sm font-bold text-[hsl(var(--text))]">Coach Nova</p>
                  <p className="text-[10px] text-[hsl(var(--accent-2))] font-medium uppercase tracking-wider">Online</p>
                </div>
              </div>
              <Link href="/mentor">
                <Button variant="ghost" size="icon" className="h-8 w-8 text-[hsl(var(--text-muted))] hover:text-[hsl(var(--text))]">
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
            <div className="p-5 flex flex-col gap-4 bg-[hsl(var(--surface))] h-[160px] justify-center items-center text-center">
               <MessageSquare className="w-10 h-10 text-[hsl(var(--text-muted))] mb-2 opacity-50" />
               <p className="text-sm text-[hsl(var(--text-muted))] max-w-[200px]">Have a question about today's lesson? Coach Nova is here to help.</p>
            </div>
            <div className="p-3 border-t border-[hsl(var(--border))] bg-[hsl(var(--bg))]">
              <Link href="/mentor" className="block">
                <div className="relative hover:opacity-90 transition-opacity">
                  <div className="w-full bg-[hsl(var(--surface))] border border-[hsl(var(--border))] text-sm rounded-full pl-4 pr-10 py-2.5 text-[hsl(var(--text-muted))]">
                    Ask Nova a question...
                  </div>
                  <button className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 bg-[hsl(var(--accent-2))] hover:bg-[hsl(var(--accent-2))/0.9] text-white rounded-full flex items-center justify-center transition-colors">
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </Link>
            </div>
          </div>

          {/* Playground Multi-model */}
          <div className="os-card p-5 transition-colors hover:border-[hsl(var(--border))]">
            <div className="flex items-center gap-2 mb-3 text-[hsl(var(--text-muted))]">
              <TerminalSquare className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider">Playground</span>
            </div>
            <div className="bg-[hsl(var(--bg))] rounded-xl border border-[hsl(var(--border))] p-4">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-sm font-medium text-[hsl(var(--text))]">Quick Experiment</h4>
                <div className="flex -space-x-1">
                  <div className="w-6 h-6 rounded-full bg-[hsl(var(--surface))] border border-[hsl(var(--border))] flex items-center justify-center text-[9px] text-[hsl(var(--text))] font-medium z-30">GPT</div>
                </div>
              </div>
              <Link href="/playground">
                <Button className="w-full bg-[hsl(var(--surface-2))] hover:bg-[hsl(var(--border))] text-[hsl(var(--text))] border border-[hsl(var(--border))] shadow-none justify-between h-9 text-xs">
                  Open Workspace <ArrowRight className="w-3 h-3" />
                </Button>
              </Link>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
