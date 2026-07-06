import { useState, useRef, useEffect, useMemo } from "react";
import { Redirect, useRoute, Link } from "wouter";
import { Show } from "@clerk/react";
import { 
  useGetCourse, 
  useCompleteCourseLesson, 
  useGenerateLessonAudio,
  useGetMe,
  getGetCourseQueryKey,
  getListCoursesQueryKey,
  getGetMeQueryKey,
  type CourseLessonDetail
} from "@workspace/api-client-react";
import { useQueryClient } from "@tanstack/react-query";
import { Shell } from "@/components/layout/Shell";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ChevronRight, Play, Pause, Headphones, Loader2, ArrowRight, BookOpen, Star } from "lucide-react";
import { useCelebration } from "@/providers/CelebrationProvider";

export default function CourseLearnPage() {
  const [match, params] = useRoute("/course/:slug/learn");
  const slug = params?.slug;

  return (
    <>
      <Show when="signed-in">
        <Shell>
          {slug ? <CourseLearnFeed slug={slug} /> : <div>Course not found</div>}
        </Shell>
      </Show>
      <Show when="signed-out">
        <Redirect to="/sign-in" />
      </Show>
    </>
  );
}

function CourseLearnFeed({ slug }: { slug: string }) {
  const queryClient = useQueryClient();
  const { data: me } = useGetMe();
  const { data: course, isLoading } = useGetCourse(slug, { query: { enabled: !!slug, queryKey: getGetCourseQueryKey(slug) } });
  const generateAudio = useGenerateLessonAudio();
  const { triggerXpBurst } = useCelebration();

  const flatLessons = useMemo(() => {
    if (!course) return [];
    return course.units.flatMap(u => u.lessons);
  }, [course]);

  // Lessons that are fully rendered in the feed. Lessons completed in a
  // previous visit start collapsed (skimmable rows); anything the learner
  // works through this session stays expanded so the whole history remains
  // scrollable on the same page.
  const [expandedIds, setExpandedIds] = useState<Set<number>>(new Set());

  useEffect(() => {
    if (flatLessons.length > 0 && expandedIds.size === 0) {
      const firstIncomplete = flatLessons.find(l => !l.completed);
      const initial = firstIncomplete ? firstIncomplete.id : flatLessons[flatLessons.length - 1].id;
      setExpandedIds(new Set([initial]));
    }
  }, [flatLessons, expandedIds]);

  if (me && !me.certOnboardingDone) return <Redirect to="/welcome" />;
  if (isLoading || !course) return <div className="p-12 text-center text-[hsl(var(--text-muted))]">Loading...</div>;

  return (
    <div className="max-w-3xl mx-auto py-8 px-4 sm:px-6">
      {flatLessons.map((lesson, idx) => (
        <LessonSection 
          key={lesson.id} 
          lesson={lesson} 
          course={course}
          isExpanded={expandedIds.has(lesson.id)}
          isCompleted={lesson.completed}
          onActivate={() => setExpandedIds(prev => new Set(prev).add(lesson.id))}
          onComplete={(xpAwarded) => {
            if (xpAwarded > 0) triggerXpBurst(xpAwarded);
            queryClient.invalidateQueries({ queryKey: getGetCourseQueryKey(slug) });
            queryClient.invalidateQueries({ queryKey: getListCoursesQueryKey() });
            queryClient.invalidateQueries({ queryKey: getGetMeQueryKey() });
            const nextLesson = flatLessons[idx + 1];
            if (nextLesson) {
              setExpandedIds(prev => {
                const next = new Set(prev);
                next.add(lesson.id);
                next.add(nextLesson.id);
                return next;
              });
            }
          }}
          generateAudio={generateAudio}
        />
      ))}
    </div>
  );
}

function LessonSection({ 
  lesson, 
  course, 
  isExpanded, 
  isCompleted, 
  onActivate, 
  onComplete,
  generateAudio 
}: { 
  lesson: CourseLessonDetail, 
  course: any, 
  isExpanded: boolean, 
  isCompleted: boolean, 
  onActivate: () => void,
  onComplete: (xpAwarded: number) => void,
  generateAudio: any
}) {
  const completeMutation = useCompleteCourseLesson();
  
  const [imageFailed, setImageFailed] = useState(false);

  // Audio state
  const [audioUrl, setAudioUrl] = useState<string | null>(lesson.audioUrl || null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Steps state
  const [currentStepIdx, setCurrentStepIdx] = useState(isCompleted ? lesson.steps.length - 1 : 0);
  const [stepAnswers, setStepAnswers] = useState<Record<number, number>>({});
  const [stepStatus, setStepStatus] = useState<Record<number, 'idle'|'correct'|'incorrect'>>({});

  useEffect(() => {
    if (isCompleted) {
      setCurrentStepIdx(lesson.steps.length - 1);
      const allCorrect: any = {};
      const allStatus: any = {};
      lesson.steps.forEach((s, i) => {
        if (s.question) {
          allCorrect[i] = s.question.correctIndex;
          allStatus[i] = 'correct';
        }
      });
      setStepAnswers(allCorrect);
      setStepStatus(allStatus);
    }
  }, [isCompleted, lesson.steps]);

  const handleAudioToggle = () => {
    if (!audioUrl) {
      generateAudio.mutate({ lessonId: lesson.id }, {
        onSuccess: (res: any) => {
          setAudioUrl(res.audioUrl);
          setTimeout(() => { if (audioRef.current) audioRef.current.play(); setIsPlaying(true); }, 100);
        }
      });
      return;
    }
    if (audioRef.current) {
      if (isPlaying) audioRef.current.pause();
      else audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  const handleOptionSelect = (stepIdx: number, optIdx: number) => {
    if (stepStatus[stepIdx] === 'correct') return;
    setStepAnswers(prev => ({ ...prev, [stepIdx]: optIdx }));
  };

  const handleCheckAnswer = (stepIdx: number) => {
    const q = lesson.steps[stepIdx].question;
    if (!q) return;
    
    if (stepAnswers[stepIdx] === q.correctIndex) {
      setStepStatus(prev => ({ ...prev, [stepIdx]: 'correct' }));
      // Advance to next step
      if (stepIdx < lesson.steps.length - 1) {
        setTimeout(() => {
          setCurrentStepIdx(stepIdx + 1);
          window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
        }, 800);
      } else if (!isCompleted) {
        // Complete lesson
        completeMutation.mutate({ lessonId: lesson.id }, {
          onSuccess: (res) => {
            onComplete(res.xpAwarded);
          }
        });
      }
    } else {
      setStepStatus(prev => ({ ...prev, [stepIdx]: 'incorrect' }));
    }
  };

  const handleContinueNextStep = (stepIdx: number) => {
    if (stepIdx < lesson.steps.length - 1) {
      setCurrentStepIdx(stepIdx + 1);
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    } else if (!isCompleted) {
      completeMutation.mutate({ lessonId: lesson.id }, {
        onSuccess: (res) => {
          onComplete(res.xpAwarded);
        }
      });
    }
  };

  if (!isExpanded && isCompleted) {
    return (
      <div 
        onClick={onActivate}
        className="mb-4 p-4 rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--surface-2))] flex items-center justify-between cursor-pointer hover:border-[hsl(var(--accent))/0.5] transition-colors"
      >
        <div className="flex items-center gap-4">
          <CheckCircle2 className="w-6 h-6 text-emerald-500" />
          <h3 className="font-semibold text-[hsl(var(--text-muted))]">{lesson.title}</h3>
        </div>
        <ChevronRight className="w-5 h-5 text-[hsl(var(--text-muted))]" />
      </div>
    );
  }

  if (!isExpanded) return null;

  return (
    <div className="mb-12 animate-slide-up relative">
      <div className="mb-8 pb-4 border-b border-[hsl(var(--border))]">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-bold uppercase tracking-widest" style={{ color: course.accent }}>{course.title}</span>
          <span className="text-[hsl(var(--text-muted))] text-xs">• Lesson</span>
        </div>
        <h1 className="text-3xl font-heading font-bold text-[hsl(var(--text))] mb-4">{lesson.title}</h1>

        {lesson.imageUrl && !imageFailed && (
          <div className="mb-6 rounded-2xl overflow-hidden border border-[hsl(var(--border))] bg-[hsl(var(--surface-2))]">
            <img
              src={lesson.imageUrl}
              alt={lesson.title}
              loading="lazy"
              onError={() => setImageFailed(true)}
              className="w-full max-h-72 object-contain"
            />
          </div>
        )}

        <div className="flex items-center justify-between bg-[hsl(var(--surface-2))] p-3 rounded-xl border border-[hsl(var(--border))]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[hsl(var(--surface))] border border-[hsl(var(--border))] flex items-center justify-center">
              <Headphones className="w-5 h-5 text-[hsl(var(--text-muted))]" />
            </div>
            <span className="text-sm font-medium text-[hsl(var(--text))]">Audio Narration</span>
          </div>
          <Button 
            variant="outline" 
            size="sm" 
            className="rounded-full"
            onClick={handleAudioToggle}
            disabled={generateAudio.isPending && generateAudio.variables?.lessonId === lesson.id}
          >
            {generateAudio.isPending && generateAudio.variables?.lessonId === lesson.id ? (
              <Loader2 className="w-4 h-4 animate-spin mr-2" />
            ) : isPlaying ? (
              <Pause className="w-4 h-4 mr-2" />
            ) : (
              <Play className="w-4 h-4 mr-2" />
            )}
            {isPlaying ? "Pause" : "Listen"}
          </Button>
          {audioUrl && <audio ref={audioRef} src={audioUrl} onEnded={() => setIsPlaying(false)} className="hidden" />}
        </div>
      </div>

      <div className="space-y-12">
        {lesson.steps.map((step, idx) => {
          if (idx > currentStepIdx) return null;
          
          return (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }}
              className="relative"
            >
              {idx > 0 && <div className="absolute -top-12 left-6 w-0.5 h-12 bg-[hsl(var(--border))]"></div>}
              
              <div className="mb-6 lesson-content">
                <div dangerouslySetInnerHTML={{ __html: step.html }} />
              </div>

              {step.question ? (
                <div className="os-card p-6 border-[hsl(var(--accent))/0.3] bg-[hsl(var(--accent))/0.02]">
                  <h3 className="text-lg font-semibold text-[hsl(var(--text))] mb-4">{step.question.text}</h3>
                  <div className="space-y-3 mb-6">
                    {step.question.options.map((opt, oIdx) => {
                      const isSelected = stepAnswers[idx] === oIdx;
                      const isCorrectAnswer = oIdx === step.question!.correctIndex;
                      const status = stepStatus[idx];
                      
                      let btnClass = "w-full text-left p-4 rounded-xl border transition-all ";
                      if (status === 'correct') {
                        if (isCorrectAnswer) btnClass += "border-emerald-500 bg-emerald-500/10 text-emerald-500";
                        else btnClass += "border-[hsl(var(--border))] opacity-50";
                      } else if (status === 'incorrect' && isSelected) {
                        btnClass += "border-red-500 bg-red-500/10 text-red-500";
                      } else if (isSelected) {
                        btnClass += "border-[hsl(var(--accent))] bg-[hsl(var(--accent))/0.1]";
                      } else {
                        btnClass += "border-[hsl(var(--border))] bg-[hsl(var(--surface))] hover:border-[hsl(var(--accent))/0.5]";
                      }

                      return (
                        <button 
                          key={oIdx}
                          onClick={() => handleOptionSelect(idx, oIdx)}
                          disabled={status === 'correct'}
                          className={btnClass}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>
                  
                  {stepStatus[idx] === 'incorrect' && (
                    <div className="mb-4 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 text-sm">
                      <p className="font-semibold mb-1">Not quite.</p>
                      <p>{step.question.explanation}</p>
                    </div>
                  )}

                  {stepStatus[idx] === 'correct' && (
                    <div className="mb-4 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-sm">
                      <p className="font-semibold mb-1 flex items-center gap-2"><Star className="w-4 h-4" /> Correct!</p>
                      <p>{step.question.explanation}</p>
                    </div>
                  )}

                  {stepStatus[idx] !== 'correct' && (
                    <Button 
                      onClick={() => handleCheckAnswer(idx)}
                      disabled={stepAnswers[idx] === undefined}
                      className="w-full h-12 bg-[hsl(var(--accent))] hover:bg-[hsl(var(--accent))/0.9] text-white"
                    >
                      Check Answer
                    </Button>
                  )}
                </div>
              ) : (
                <div className="flex justify-end mt-4">
                  {idx === currentStepIdx && (
                    <Button 
                      onClick={() => handleContinueNextStep(idx)}
                      className="bg-[hsl(var(--surface-2))] hover:bg-[hsl(var(--surface-2))/0.8] text-[hsl(var(--text))] border border-[hsl(var(--border))]"
                    >
                      Continue <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  )}
                </div>
              )}
            </motion.div>
          );
        })}
      </div>

      {isCompleted && currentStepIdx === lesson.steps.length - 1 && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-12 p-6 rounded-2xl bg-[hsl(var(--accent))/0.1] border border-[hsl(var(--accent))/0.3] text-center">
          <div className="w-16 h-16 rounded-full bg-[hsl(var(--accent))] text-white flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-bold font-heading text-[hsl(var(--text))] mb-2">Lesson Complete!</h2>
          <p className="text-[hsl(var(--text-muted))] mb-6">You earned {lesson.xpReward} XP. Keep the momentum going.</p>
        </motion.div>
      )}
    </div>
  );
}
