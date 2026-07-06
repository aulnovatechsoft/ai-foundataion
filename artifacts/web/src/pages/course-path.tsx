import { Redirect, useRoute, Link } from "wouter";
import { Show } from "@clerk/react";
import { 
  useGetCourse, 
  useGetMe,
  getGetCourseQueryKey
} from "@workspace/api-client-react";
import { Shell } from "@/components/layout/Shell";
import { ArrowRight, CheckCircle2, Play, Lock, BookOpen } from "lucide-react";

export default function CoursePathPage() {
  const [match, params] = useRoute("/course/:slug");
  const slug = params?.slug;

  return (
    <>
      <Show when="signed-in">
        <Shell>
          {slug ? <CoursePathContent slug={slug} /> : <div>Course not found</div>}
        </Shell>
      </Show>
      <Show when="signed-out">
        <Redirect to="/sign-in" />
      </Show>
    </>
  );
}

function CoursePathContent({ slug }: { slug: string }) {
  const { data: me } = useGetMe();
  const { data: course, isLoading } = useGetCourse(slug, { query: { enabled: !!slug, queryKey: getGetCourseQueryKey(slug) } });

  if (me && !me.certOnboardingDone) return <Redirect to="/welcome" />;
  if (isLoading || !course) return <div className="p-12 text-center text-[hsl(var(--text-muted))]">Loading path...</div>;

  const flatLessons = course.units.flatMap(u => u.lessons);
  const firstIncomplete = flatLessons.find(l => !l.completed);
  const percentComplete = Math.round((course.completedCount / course.lessonCount) * 100) || 0;

  return (
    <div className="max-w-4xl mx-auto animate-slide-up pb-24 text-[hsl(var(--text))]">
      <div className="mb-10 os-card p-6 md:p-8" style={{ borderTop: `4px solid ${course.accent}` }}>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-24 h-24 rounded-2xl flex items-center justify-center text-4xl shrink-0 shadow-lg" style={{ backgroundColor: course.color }}>
            {course.icon}
          </div>
          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl font-heading font-bold mb-2">{course.title}</h1>
            <p className="text-[hsl(var(--text-muted))] mb-4 text-lg">{course.description}</p>
            <div className="flex items-center gap-4 text-sm font-medium">
              <span className="px-3 py-1 bg-[hsl(var(--surface-2))] rounded-full">{course.lessonCount} lessons</span>
              <span className="text-[hsl(var(--accent))]">{percentComplete}% complete</span>
            </div>
            <div className="mt-4 h-2 rounded-full bg-[hsl(var(--surface-2))] overflow-hidden">
              <div className="h-full rounded-full transition-all" style={{ width: `${percentComplete}%`, backgroundColor: course.accent }} />
            </div>
          </div>
          <div className="flex items-center justify-center md:justify-end shrink-0">
            <Link href={`/course/${slug}/learn`} className="w-full md:w-auto">
              <button className="w-full px-8 py-3 rounded-full text-white font-bold shadow-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2" style={{ backgroundColor: course.accent }}>
                {percentComplete === 0 ? "Start Course" : "Continue"} <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="space-y-8">
        {course.units.map(unit => (
          <div key={unit.id} className="relative">
            <h2 className="text-xl font-heading font-bold mb-4 flex items-center gap-2">
              <span className="text-[hsl(var(--text-muted))] text-sm uppercase tracking-widest">Unit {unit.sortOrder}</span>
              <span className="w-1 h-1 rounded-full bg-[hsl(var(--border))]"></span>
              {unit.title}
            </h2>
            <div className="space-y-3">
              {unit.lessons.map(lesson => {
                const isCompleted = lesson.completed;
                const isNext = firstIncomplete?.id === lesson.id;
                
                return (
                  <Link key={lesson.id} href={`/course/${slug}/learn`} className={`block os-card p-4 transition-all hover:-translate-y-0.5 hover:shadow-md ${isCompleted ? 'opacity-70 bg-[hsl(var(--surface-2))]' : isNext ? 'border-[hsl(var(--accent))] shadow-[0_0_15px_hsl(var(--accent)/0.1)]' : ''}`}>
                    <div className="flex items-center gap-4">
                      {lesson.imageUrl ? (
                        <div className="w-16 h-12 rounded-xl overflow-hidden shrink-0 bg-[hsl(var(--surface-2))] border border-[hsl(var(--border))]">
                          <img
                            src={lesson.imageUrl}
                            alt=""
                            loading="lazy"
                            onError={(e) => { e.currentTarget.parentElement!.style.display = "none"; }}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ) : null}
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${isCompleted ? 'bg-emerald-500/10 text-emerald-500' : isNext ? 'bg-[hsl(var(--accent))] text-white' : 'bg-[hsl(var(--surface-2))] border border-[hsl(var(--border))] text-[hsl(var(--text-muted))]'}`}>
                        {isCompleted ? <CheckCircle2 className="w-5 h-5" /> : isNext ? <Play className="w-5 h-5 ml-0.5" /> : <BookOpen className="w-4 h-4" />}
                      </div>
                      <div className="flex-1">
                        <h3 className={`font-semibold ${isCompleted ? 'text-[hsl(var(--text-muted))]' : 'text-[hsl(var(--text))]'}`}>{lesson.title}</h3>
                        <p className="text-xs text-[hsl(var(--text-muted))] line-clamp-1">{lesson.summary}</p>
                      </div>
                      <div className="text-xs font-medium text-[hsl(var(--text-muted))] whitespace-nowrap">
                        {lesson.estimatedMinutes} min
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
