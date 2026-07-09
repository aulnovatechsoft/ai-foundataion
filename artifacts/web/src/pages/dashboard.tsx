import { Shell } from "@/components/layout/Shell";
import { Redirect } from "wouter";
import { Show } from "@clerk/react";
import { 
  useGetMe, 
  useListCourses,
  getListCoursesQueryKey
} from "@workspace/api-client-react";
import { Sparkles, Trophy, Flame, Zap, ArrowRight, Play, CheckCircle2, MessageSquare, TerminalSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Skeleton } from "@/components/ui/skeleton";
import { WeeklyStreakRow } from "@/components/WeeklyStreakRow";

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
  const { data: courses, isLoading: coursesLoading } = useListCourses({ query: { queryKey: getListCoursesQueryKey() } });

  if (meLoading || coursesLoading) {
    return <div className="space-y-8"><Skeleton className="h-32 w-full bg-[hsl(var(--surface-2))]" /><Skeleton className="h-96 w-full bg-[hsl(var(--surface-2))]" /></div>;
  }

  if (me && !me.certOnboardingDone) {
    return <Redirect to="/welcome" />;
  }

  const activeCourse = courses?.find(c => c.slug === me?.activeCourseSlug) || courses?.[0];

  return (
    <div className="space-y-8 animate-slide-up pb-24 text-[hsl(var(--text))]">
      {/* HERO WELCOME */}
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
        <div>
          <h1 className="text-4xl text-[hsl(var(--text))] font-heading mb-2 font-bold">Ready to learn, {me?.displayName?.split(' ')[0] || 'Learner'}?</h1>
          <p className="text-[hsl(var(--text-muted))] text-lg">Pick up where you left off or start a new tool.</p>
          {me?.weeklyActivity && me.weeklyActivity.length > 0 && (
            <WeeklyStreakRow me={me} className="mt-5" />
          )}
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
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="col-span-1 lg:col-span-8 flex flex-col gap-8">
          
          {/* ACTIVE COURSE HERO */}
          {activeCourse && (
            <div className="os-glass p-1 border-2" style={{ borderColor: activeCourse.accent }}>
              <div className="bg-[hsl(var(--surface))] rounded-xl overflow-hidden relative">
                <div className="absolute top-0 right-0 w-64 h-64 opacity-20 blur-[100px] pointer-events-none" style={{ backgroundColor: activeCourse.accent }}></div>
                <div className="p-8 relative z-10 flex flex-col md:flex-row gap-8 items-center">
                  <div className="w-32 h-32 rounded-2xl flex items-center justify-center text-6xl shrink-0 shadow-lg" style={{ backgroundColor: activeCourse.color }}>
                    {activeCourse.icon}
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                      <span className="text-xs font-bold uppercase tracking-widest" style={{ color: activeCourse.accent }}>Current Course</span>
                    </div>
                    <h2 className="text-3xl font-bold font-heading mb-2">{activeCourse.title}</h2>
                    <p className="text-[hsl(var(--text-muted))] mb-6">{activeCourse.tagline}</p>
                    <div className="flex flex-col sm:flex-row items-center gap-4">
                      <Link href={`/course/${activeCourse.slug}`}>
                        <Button className="h-12 px-8 text-base text-white rounded-full font-bold shadow-lg hover:opacity-90" style={{ backgroundColor: activeCourse.accent }}>
                          <Play className="w-5 h-5 mr-2 fill-current" /> Continue Learning
                        </Button>
                      </Link>
                      <div className="flex flex-col">
                        <span className="text-sm font-semibold">{activeCourse.completedCount} / {activeCourse.lessonCount} lessons</span>
                        <div className="w-32 h-2 mt-1 rounded-full bg-[hsl(var(--surface-2))] overflow-hidden">
                          <div className="h-full rounded-full transition-all" style={{ width: `${(activeCourse.completedCount / activeCourse.lessonCount) * 100}%`, backgroundColor: activeCourse.accent }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold font-heading">AI Tool Mastery</h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {courses?.filter(c => c.id !== activeCourse?.id).map(course => {
              const isCompleted = course.completedCount === course.lessonCount && course.lessonCount > 0;
              const percent = Math.round((course.completedCount / course.lessonCount) * 100) || 0;
              return (
                <Link key={course.id} href={`/course/${course.slug}`}>
                  <div className="os-card p-5 h-full flex flex-col hover:-translate-y-1 transition-transform group cursor-pointer border border-[hsl(var(--border))] hover:border-[hsl(var(--accent))/0.5]">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl shrink-0" style={{ backgroundColor: course.color }}>
                        {course.icon}
                      </div>
                      <div className="flex-1 pt-1">
                        <h4 className="font-bold text-lg leading-tight group-hover:text-[hsl(var(--accent))] transition-colors">{course.title}</h4>
                        <p className="text-xs text-[hsl(var(--text-muted))] mt-1 line-clamp-2">{course.tagline}</p>
                      </div>
                    </div>
                    <div className="mt-auto pt-4 border-t border-[hsl(var(--border))]">
                      <div className="flex items-center justify-between text-xs mb-2">
                        <span className="font-medium text-[hsl(var(--text-muted))]">{course.lessonCount} lessons</span>
                        {isCompleted ? (
                          <span className="font-bold text-emerald-500 flex items-center gap-1"><CheckCircle2 className="w-3 h-3" /> Mastered</span>
                        ) : (
                          <span className="font-bold" style={{ color: course.accent }}>{percent}% complete</span>
                        )}
                      </div>
                      <div className="h-1.5 rounded-full bg-[hsl(var(--surface-2))] overflow-hidden">
                        <div className="h-full rounded-full transition-all" style={{ width: `${percent}%`, backgroundColor: isCompleted ? '#10b981' : course.accent }}></div>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

        </div>

        <div className="col-span-1 lg:col-span-4 flex flex-col gap-6">
          <div className="os-card p-6 border-[hsl(var(--border))] bg-gradient-to-br from-[hsl(var(--surface))] to-[hsl(var(--surface-2))]">
            <h3 className="font-bold font-heading text-lg mb-2 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[hsl(var(--accent))]" /> 
              Legacy Program
            </h3>
            <p className="text-sm text-[hsl(var(--text-muted))] mb-4">The original 28-day challenge is still available.</p>
            <Link href="/path">
              <Button variant="outline" className="w-full justify-between group">
                View 28-Day Path <ArrowRight className="w-4 h-4 text-[hsl(var(--text-muted))] group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
