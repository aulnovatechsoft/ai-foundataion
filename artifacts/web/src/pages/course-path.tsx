import { Redirect, useRoute, Link, useLocation } from "wouter";
import { Show } from "@clerk/react";
import {
  useGetCourse,
  useGetMe,
  getGetCourseQueryKey
} from "@workspace/api-client-react";
import { Shell } from "@/components/layout/Shell";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check, Play, BookOpen, Trophy, FileText, Volume2 } from "lucide-react";
import { useState } from "react";

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

// Horizontal offsets for the winding path (Duolingo-style zigzag)
const OFFSETS = [0, 60, 90, 60, 0, -60, -90, -60];

function CoursePathContent({ slug }: { slug: string }) {
  const [, navigate] = useLocation();
  const [openLessonId, setOpenLessonId] = useState<number | null>(null);
  const { data: me } = useGetMe();
  const { data: course, isLoading } = useGetCourse(slug, { query: { enabled: !!slug, queryKey: getGetCourseQueryKey(slug) } });

  if (me && !me.certOnboardingDone) return <Redirect to="/welcome" />;
  if (isLoading || !course) return <div className="p-12 text-center text-[hsl(var(--text-muted))]">Loading path...</div>;

  const flatLessons = course.units.flatMap(u => u.lessons);
  const firstIncomplete = flatLessons.find(l => !l.completed);
  const percentComplete = Math.round((course.completedCount / course.lessonCount) * 100) || 0;

  let globalIdx = -1;

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

      {openLessonId !== null && (
        <div className="fixed inset-0 z-20" onClick={() => setOpenLessonId(null)} aria-hidden="true" />
      )}

      <div className="space-y-4">
        {course.units.map(unit => (
          <div key={unit.id} className="relative">
            <div className="flex items-center gap-4 my-8">
              <div className="flex-1 h-px bg-[hsl(var(--border))]" />
              <h2 className="text-sm font-heading font-bold uppercase tracking-widest text-[hsl(var(--text-muted))]">
                Unit {unit.sortOrder + 1} · {unit.title}
              </h2>
              <div className="flex-1 h-px bg-[hsl(var(--border))]" />
            </div>

            <div className="flex flex-col items-center gap-0 relative">
              {unit.lessons.map((lesson, i) => {
                globalIdx += 1;
                const isCompleted = lesson.completed;
                const isCurrent = firstIncomplete?.id === lesson.id;
                const isUpcoming = !isCompleted && !isCurrent;
                const isLast = lesson.title.toLowerCase().includes("challenge") ||
                  lesson.title.toLowerCase().includes("workflow") ||
                  lesson.title.toLowerCase().includes("bring a creative");
                const offset = OFFSETS[globalIdx % OFFSETS.length];

                const nodeColor = isCompleted
                  ? "bg-emerald-500 border-emerald-600 text-white shadow-[0_4px_0_0_rgb(5_150_105)]"
                  : isCurrent
                    ? "bg-blue-500 border-blue-600 text-white shadow-[0_4px_0_0_rgb(37_99_235)]"
                    : "bg-[hsl(var(--surface-2))] border-[hsl(var(--border))] text-[hsl(var(--text-muted))]";

                const node = (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.6 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ type: "spring", stiffness: 260, damping: 18, delay: (i % 5) * 0.05 }}
                    className="flex flex-col items-center relative"
                    style={{ x: offset }}
                  >
                    {isCurrent && (
                      <motion.div
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute -top-9 px-3 py-1 rounded-lg bg-[hsl(var(--surface))] border border-blue-500 text-blue-500 text-xs font-bold shadow-sm z-10"
                      >
                        Start
                        <span className="absolute left-1/2 -translate-x-1/2 -bottom-1 w-2 h-2 rotate-45 bg-[hsl(var(--surface))] border-r border-b border-blue-500" />
                      </motion.div>
                    )}
                    <div className="relative">
                      {isCurrent && (
                        <span className="absolute inset-0 rounded-2xl bg-blue-500/40 animate-ping" style={{ animationDuration: "2s" }} />
                      )}
                      <div
                        className={`relative w-16 h-16 rounded-2xl border-2 flex items-center justify-center transition-transform ${nodeColor} hover:scale-105 active:translate-y-0.5 active:shadow-none cursor-pointer`}
                      >
                        {isCompleted ? (
                          <Check className="w-7 h-7" strokeWidth={3} />
                        ) : isCurrent ? (
                          <Play className="w-7 h-7 ml-0.5 fill-current" />
                        ) : isLast ? (
                          <Trophy className="w-6 h-6" />
                        ) : (
                          <BookOpen className="w-6 h-6" />
                        )}
                      </div>
                    </div>
                    <span className={`mt-2 text-xs font-semibold text-center max-w-[140px] leading-tight ${isUpcoming ? "text-[hsl(var(--text-muted))]" : "text-[hsl(var(--text))]"}`}>
                      {lesson.title}
                    </span>
                  </motion.div>
                );

                return (
                  <div key={lesson.id} className="relative flex flex-col items-center">
                    {i > 0 && (
                      <div
                        className={`w-1 h-8 rounded-full my-1 ${isCompleted || isCurrent ? "bg-emerald-400" : "bg-[hsl(var(--border))]"}`}
                        style={{ transform: `translateX(${(offset + OFFSETS[(globalIdx - 1) % OFFSETS.length]) / 2}px)` }}
                      />
                    )}
                    <button
                      onClick={() => setOpenLessonId(openLessonId === lesson.id ? null : lesson.id)}
                      className="bg-transparent border-none p-0"
                      aria-label={isCompleted ? `Review ${lesson.title}` : `Start ${lesson.title}`}
                      aria-expanded={openLessonId === lesson.id}
                    >
                      {node}
                    </button>
                    <AnimatePresence>
                      {openLessonId === lesson.id && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.95 }}
                          transition={{ duration: 0.15 }}
                          className="absolute z-30 top-full mt-2 w-72 rounded-2xl bg-[hsl(var(--surface))] border border-[hsl(var(--border))] shadow-xl p-4 text-left"
                          style={{ transform: `translateX(${offset}px)` }}
                        >
                          <p className="font-heading font-bold text-base mb-1">{lesson.title}</p>
                          {lesson.summary && (
                            <p className="text-sm text-[hsl(var(--text-muted))] mb-3 leading-snug">{lesson.summary}</p>
                          )}
                          <div className="flex gap-2">
                            <button
                              onClick={() => navigate(`/course/${slug}/learn?lesson=${lesson.id}&mode=read`)}
                              className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-full text-sm font-semibold border border-[hsl(var(--border))] bg-[hsl(var(--surface-2))] hover:opacity-80 transition-opacity"
                            >
                              <FileText className="w-4 h-4" /> Read
                            </button>
                            <button
                              onClick={() => navigate(`/course/${slug}/learn?lesson=${lesson.id}&mode=listen`)}
                              className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-full text-sm font-semibold text-white hover:opacity-90 transition-opacity"
                              style={{ backgroundColor: course.accent }}
                            >
                              <Volume2 className="w-4 h-4" /> Listen
                            </button>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
