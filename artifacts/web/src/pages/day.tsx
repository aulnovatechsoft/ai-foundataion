import { Shell } from "@/components/layout/Shell";
import { Redirect, useRoute, Link } from "wouter";
import { Show } from "@clerk/react";
import { 
  useGetCurriculumDay, 
  useGetDayProgress, 
  useCompleteLesson, 
  useCompleteTask, 
  useSubmitQuiz, 
  useSubmitReflection,
  useCreatePost,
  useSubmitPractice,
  useGenerateDayAudio,
  useGetMe,
  getListAchievementsQueryKey,
  getGetMeQueryKey,
  getListProgressQueryKey,
  getGetDayProgressQueryKey,
  getGetCurriculumDayQueryKey,
  getListFeedQueryKey,
  type TaskEvalResult,
  type PracticeResult,
  type ProgressUpdate,
  type QuizResult
} from "@workspace/api-client-react";
import { useQueryClient } from "@tanstack/react-query";
import { 
  CheckCircle2, Lock, BookOpen, PenTool, HelpCircle, 
  MessageSquare, XCircle, Share2, Headphones, Zap,
  ChevronUp, ChevronDown, Play, Pause, SkipBack, SkipForward,
  Sparkles, TrendingUp, AlertCircle, Loader2, Dumbbell, RotateCcw, ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useRef, useEffect } from "react";
import { useCelebration } from "@/providers/CelebrationProvider";
import { GradeReveal } from "@/components/GradeReveal";
import { motion, AnimatePresence } from "framer-motion";
import { normalizePace, isRequired, requiredSections, PACE_LABEL, PACE_SUMMARY, shuffle, type PaceSection } from "@/lib/pace";
import { playCorrect, playWrong } from "@/lib/chatSounds";
import { fieldLens, experienceNote, firstWinFocus, FIRST_WEEK_THROUGH_DAY } from "@/lib/personalization";

const TOTAL_DAYS = 28;

export default function DayPage() {
  const [match, params] = useRoute("/day/:day");
  const dayStr = params?.day;
  const day = dayStr ? parseInt(dayStr) : null;

  return (
    <>
      <Show when="signed-in">
        <Shell>
          {day ? <DayContent key={day} day={day} /> : <div className="text-[hsl(var(--text))]">Invalid Day</div>}
        </Shell>
      </Show>
      <Show when="signed-out">
        <Redirect to="/sign-in" />
      </Show>
    </>
  );
}

type AnyProgressResult = TaskEvalResult | PracticeResult | ProgressUpdate | QuizResult;

function DayContent({ day }: { day: number }) {
  const queryClient = useQueryClient();
  const { data: detail, isLoading: loadingDetail, error: detailError } = useGetCurriculumDay(day, { query: { retry: false, queryKey: getGetCurriculumDayQueryKey(day) } });
  const { data: progress, isLoading: loadingProgress } = useGetDayProgress(day, { query: { retry: false, queryKey: getGetDayProgressQueryKey(day) } });
  const { data: me } = useGetMe({ query: { queryKey: getGetMeQueryKey() } });
  
  const completeLesson = useCompleteLesson();
  const completeTask = useCompleteTask();
  const submitQuiz = useSubmitQuiz();
  const submitReflection = useSubmitReflection();
  const submitPractice = useSubmitPractice();
  const generateAudio = useGenerateDayAudio();
  const createPost = useCreatePost();
  const { triggerXpBurst, triggerLevelUp, triggerDayComplete, triggerAchievementUnlock } = useCelebration();

  const [quizAnswers, setQuizAnswers] = useState<Record<number, number>>({});
  const [reflectionText, setReflectionText] = useState(progress?.reflectionText || "");
  const [taskText, setTaskText] = useState("");
  const [practiceText, setPracticeText] = useState("");
  const [localCorrectIndexes, setLocalCorrectIndexes] = useState<number[] | null>(null);
  const [quizPassed, setQuizPassed] = useState(false);
  const [optionOrder, setOptionOrder] = useState<Record<number, number[]>>({});
  const [sharedToCommunity, setSharedToCommunity] = useState(false);
  const [taskResult, setTaskResult] = useState<TaskEvalResult | null>(null);
  const [practiceResult, setPracticeResult] = useState<PracticeResult | null>(null);
  const [audioUrl, setAudioUrl] = useState<string | null>(detail?.audioUrl ?? null);
  const [audioDuration, setAudioDuration] = useState<number>(0);
  const [audioPlaying, setAudioPlaying] = useState(false);
  const [audioPosition, setAudioPosition] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const audioTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (detail?.audioUrl) setAudioUrl(detail.audioUrl);
  }, [detail?.audioUrl]);

  useEffect(() => {
    if (!detail) return;
    setOptionOrder(() => {
      const next: Record<number, number[]> = {};
      detail.quiz.forEach((q) => {
        next[q.id] = shuffle(q.options.map((_, i) => i));
      });
      return next;
    });
  }, [detail?.day]);

  useEffect(() => {
    if (audioPlaying) {
      audioTimerRef.current = setInterval(() => {
        if (audioRef.current) {
          setAudioPosition(audioRef.current.currentTime);
          if (audioRef.current.ended) {
            setAudioPlaying(false);
          }
        }
      }, 500);
    } else {
      if (audioTimerRef.current) clearInterval(audioTimerRef.current);
    }
    return () => { if (audioTimerRef.current) clearInterval(audioTimerRef.current); };
  }, [audioPlaying]);

  if (loadingDetail || loadingProgress) return <div className="text-[hsl(var(--text-muted))] py-12 text-center">Loading...</div>;

  const isLocked = (detailError as { status?: number } | null)?.status === 402;
  if (isLocked) {
    return (
      <div className="max-w-lg mx-auto text-center py-16 animate-slide-up">
        <div className="w-16 h-16 rounded-2xl bg-[hsl(var(--accent))/0.1] flex items-center justify-center mx-auto mb-6">
          <Lock className="w-8 h-8 text-[hsl(var(--accent))]" />
        </div>
        <h1 className="text-3xl font-heading font-bold text-[hsl(var(--text))] mb-3">Day {day} is locked</h1>
        <p className="text-[hsl(var(--text-muted))] text-lg mb-8">
          Unlock the full 28-day program to start your personalized journey.
        </p>
        <Link href="/upgrade">
          <Button className="h-12 px-8 text-lg bg-[hsl(var(--accent))] hover:bg-[hsl(var(--accent))/0.9] text-white rounded-full">
            <Sparkles className="w-5 h-5 mr-2" /> Unlock Full Access
          </Button>
        </Link>
      </div>
    );
  }

  if (!detail) return <div className="text-[hsl(var(--text-muted))]">Day not found</div>;

  const isLessonComplete = progress?.lessonCompleted;
  const isPracticeComplete = progress?.practiceCompleted;
  const isTaskComplete = progress?.taskCompleted;
  const isQuizComplete = progress?.quizCompleted || quizPassed;
  const isReflectionComplete = progress?.reflectionCompleted;

  const pace = normalizePace(me?.dailyMinutes);
  const taskRequired = isRequired(pace, "taskCompleted");
  const reflectionRequired = isRequired(pace, "reflectionCompleted");
  const quizUnlocked = !!isLessonComplete && (taskRequired ? !!isTaskComplete : true);
  const lens = fieldLens(me?.field);
  const expNote = experienceNote(me?.experienceLevel);
  const weekFocus = firstWinFocus(me?.onboardingAnswers);
  const showWeekFocus = !!weekFocus && day <= FIRST_WEEK_THROUGH_DAY;

  // Mirror the server's pace rules to know when every REQUIRED section is done.
  const sectionDone: Record<PaceSection, boolean> = {
    lessonCompleted: !!isLessonComplete,
    taskCompleted: !!isTaskComplete,
    quizCompleted: !!isQuizComplete,
    reflectionCompleted: !!isReflectionComplete,
  };
  const isDayComplete = [...requiredSections(pace)].every((s) => sectionDone[s]);
  // For the completed-day banner, point the learner at their real active day
  // (advances to day+1 right after finishing; stays accurate when reviewing an
  // older completed day). `null` means they're already on/at the latest day.
  const resumeDay = me?.currentDay && me.currentDay > day ? me.currentDay : null;

  const handleCelebrations = (data: AnyProgressResult, event?: React.MouseEvent) => {
    if (data.xpAwarded && data.xpAwarded > 0) triggerXpBurst(data.xpAwarded, event);
    if (data.unlockedAchievements?.length) data.unlockedAchievements.forEach(triggerAchievementUnlock);
    if (data.leveledUp) triggerLevelUp(data.user.level);
    if (data.dayCompleted) {
      const completedDay = data.progress.day;
      triggerDayComplete(
        completedDay,
        data.xpAwarded || 0,
        data.streakExtended,
        completedDay < TOTAL_DAYS ? completedDay + 1 : null,
      );
    }
  };

  const handleInvalidate = () => {
    queryClient.invalidateQueries({ queryKey: getGetMeQueryKey() });
    queryClient.invalidateQueries({ queryKey: getListProgressQueryKey() });
    queryClient.invalidateQueries({ queryKey: getGetDayProgressQueryKey(day) });
    queryClient.invalidateQueries({ queryKey: getListAchievementsQueryKey() });
  };

  const onCompleteLesson = (e: React.MouseEvent) => {
    completeLesson.mutate({ day }, { 
      onSuccess: (data) => { handleCelebrations(data, e); handleInvalidate(); }
    });
  };

  const onCompleteTask = (e: React.MouseEvent) => {
    if (!taskText.trim()) return;
    completeTask.mutate({ day, data: { text: taskText } }, { 
      onSuccess: (data) => { 
        setTaskResult(data);
        handleCelebrations(data, e); 
        handleInvalidate(); 
      }
    });
  };

  const onSubmitPractice = (e: React.MouseEvent) => {
    if (!practiceText.trim()) return;
    submitPractice.mutate({ day, data: { text: practiceText } }, {
      onSuccess: (data) => {
        setPracticeResult(data);
        handleCelebrations(data, e);
        handleInvalidate();
      }
    });
  };

  const onSubmitQuiz = (e: React.MouseEvent) => {
    const answersArray = detail.quiz.map(q => quizAnswers[q.id] ?? 0);
    submitQuiz.mutate({ day, data: { answers: answersArray } }, { 
      onSuccess: (data) => {
        if (data.passed) playCorrect(); else playWrong();
        setLocalCorrectIndexes(data.correctIndexes);
        setQuizPassed(data.passed);
        handleCelebrations(data, e);
        handleInvalidate();
      }
    });
  };

  const onRetryQuiz = () => {
    if (localCorrectIndexes) {
      setQuizAnswers(prev => {
        const next: Record<number, number> = {};
        detail.quiz.forEach((q, idx) => {
          if (prev[q.id] === localCorrectIndexes[idx]) next[q.id] = prev[q.id];
        });
        return next;
      });
    }
    setLocalCorrectIndexes(null);
    setQuizPassed(false);
    setOptionOrder(() => {
      const next: Record<number, number[]> = {};
      detail.quiz.forEach((q) => {
        next[q.id] = shuffle(q.options.map((_, i) => i));
      });
      return next;
    });
  };

  const onSubmitReflection = (e: React.MouseEvent) => {
    submitReflection.mutate({ day, data: { text: reflectionText } }, { 
      onSuccess: (data) => { handleCelebrations(data, e); handleInvalidate(); }
    });
  };

  const onShareReflection = () => {
    createPost.mutate({ data: { content: reflectionText, day, kind: "reflection" } }, {
      onSuccess: () => {
        setSharedToCommunity(true);
        queryClient.invalidateQueries({ queryKey: getListFeedQueryKey() });
      }
    });
  };

  const onGenerateAudio = () => {
    generateAudio.mutate({ day }, {
      onSuccess: (data) => {
        setAudioUrl(data.audioUrl);
        if (data.durationSec) setAudioDuration(data.durationSec);
      }
    });
  };

  const toggleAudio = () => {
    if (!audioRef.current) return;
    if (audioPlaying) {
      audioRef.current.pause();
      setAudioPlaying(false);
    } else {
      audioRef.current.play();
      setAudioPlaying(true);
    }
  };

  const seekAudio = (delta: number) => {
    if (!audioRef.current) return;
    audioRef.current.currentTime = Math.max(0, audioRef.current.currentTime + delta);
    setAudioPosition(audioRef.current.currentTime);
  };

  const fmtTime = (sec: number) => {
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return `${m}:${s.toString().padStart(2, "0")}`;
  };

  const totalAudioDuration = audioRef.current?.duration ?? audioDuration ?? 0;
  const audioPct = totalAudioDuration > 0 ? Math.min(1, audioPosition / totalAudioDuration) : 0;

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-slide-up pb-24 text-[hsl(var(--text))]">
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-3">
          <span className="px-3 py-1 rounded-full bg-[hsl(var(--accent-2))/0.1] text-[hsl(var(--accent-2))] text-xs font-bold uppercase tracking-widest">Day {day}</span>
          <span className="text-[hsl(var(--text-muted))] text-sm font-medium">• {detail.theme}</span>
        </div>
        <h1 className="text-4xl font-heading font-bold mb-4">{detail.title}</h1>
        <div className="flex items-center gap-4 text-sm text-[hsl(var(--text-muted))]">
          <span>~{detail.estimatedMinutes} mins total</span>
          <span>•</span>
          <span className="text-[hsl(var(--accent))] font-semibold">{detail.xpReward} XP available</span>
        </div>
      </div>

      {isDayComplete && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="os-card p-5 md:p-6 border-[hsl(var(--accent-2))/0.4] bg-[hsl(var(--accent-2))/0.08] flex flex-col sm:flex-row sm:items-center gap-4"
        >
          <div className="w-12 h-12 rounded-full bg-[hsl(var(--accent-2))/0.15] flex items-center justify-center shrink-0">
            <CheckCircle2 className="w-6 h-6 text-[hsl(var(--accent-2))]" />
          </div>
          <div className="flex-1">
            <h2 className="text-lg font-heading font-bold">Day {day} complete</h2>
            <p className="text-sm text-[hsl(var(--text-muted))]">
              {resumeDay
                ? `Nice work — Day ${resumeDay} is unlocked and ready on your dashboard.`
                : "You're all caught up. Review your journey on the dashboard."}
            </p>
          </div>
          <Link href="/dashboard">
            <Button className="bg-[hsl(var(--accent-2))] hover:bg-[hsl(var(--accent-2))/0.9] text-white rounded-full px-6 whitespace-nowrap">
              {resumeDay ? `Continue to Day ${resumeDay}` : "Back to Dashboard"}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </motion.div>
      )}

      {/* PACE + PERSONALIZATION */}
      {(lens || expNote || me) && (
        <div className="space-y-3 -mt-4">
          {showWeekFocus && weekFocus && (
            <div className="flex items-start gap-3 p-4 rounded-xl border border-[hsl(var(--accent-2))/0.3] bg-[hsl(var(--accent-2))/0.08]">
              <Sparkles className="w-4 h-4 text-[hsl(var(--accent-2))] mt-0.5 flex-shrink-0" />
              <p className="text-sm text-[hsl(var(--text-muted))]">
                <span className="font-semibold text-[hsl(var(--accent-2))]">Your first-week focus — {weekFocus.helpLabel}: </span>
                {weekFocus.resultLabel ? (
                  <>Today's mission is an early win toward your first-week goal: <span className="font-medium text-[hsl(var(--text))]">{weekFocus.resultLabel}</span>.</>
                ) : (
                  <>Today's mission is an early win toward the focus you picked first.</>
                )}
              </p>
            </div>
          )}
          {me && (
            <div className="flex items-start gap-3 p-4 rounded-xl border border-[hsl(var(--accent))/0.25] bg-[hsl(var(--accent))/0.06]">
              <Zap className="w-4 h-4 text-[hsl(var(--accent))] mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm font-semibold text-[hsl(var(--accent))]">{PACE_LABEL[pace]}</p>
                <p className="text-sm text-[hsl(var(--text-muted))]">{PACE_SUMMARY[pace]}</p>
              </div>
            </div>
          )}
          {lens && (
            <div className="flex items-start gap-3 p-4 rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--surface-2))]">
              <Sparkles className="w-4 h-4 text-[hsl(var(--accent-2))] mt-0.5 flex-shrink-0" />
              <p className="text-sm text-[hsl(var(--text-muted))]">
                <span className="font-semibold text-[hsl(var(--text))]">Your focus — {lens.label}: </span>
                {lens.lens}
              </p>
            </div>
          )}
          {expNote && (
            <div className="flex items-start gap-3 p-4 rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--surface-2))]">
              <BookOpen className="w-4 h-4 text-[hsl(var(--text-muted))] mt-0.5 flex-shrink-0" />
              <p className="text-sm text-[hsl(var(--text-muted))]">{expNote.text}</p>
            </div>
          )}
        </div>
      )}

      {/* AUDIO DEEP DIVE */}
      <section className="os-card overflow-hidden">
        <div className="p-5 border-b border-[hsl(var(--border))] flex items-center justify-between bg-[hsl(var(--surface-2))]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[hsl(var(--accent))] to-[hsl(var(--accent-2))] flex items-center justify-center">
              <Headphones className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-lg font-heading font-semibold">Audio Deep Dive</h2>
              <p className="text-xs text-[hsl(var(--text-muted))]">AI-generated narration of today's lesson</p>
            </div>
          </div>
        </div>
        <div className="p-6">
          {!audioUrl ? (
            <div className="flex flex-col items-center gap-4 py-4">
              <p className="text-sm text-[hsl(var(--text-muted))] text-center">
                Generate a personalised audio version of today's lesson to listen while you work.
              </p>
              <Button 
                onClick={onGenerateAudio} 
                disabled={generateAudio.isPending}
                className="bg-gradient-to-r from-[hsl(var(--accent))] to-[hsl(var(--accent-2))] text-white"
              >
                {generateAudio.isPending ? (
                  <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Generating audio...</>
                ) : (
                  <><Sparkles className="w-4 h-4 mr-2" /> Generate Audio Deep Dive</>
                )}
              </Button>
              {generateAudio.isError && (
                <p className="text-sm text-[hsl(var(--destructive))] text-center">
                  Audio isn't available right now. Please try again in a moment.
                </p>
              )}
            </div>
          ) : (
            <div className="space-y-4">
              <audio 
                ref={audioRef}
                src={audioUrl}
                onLoadedMetadata={() => {
                  if (audioRef.current) setAudioDuration(audioRef.current.duration);
                }}
                onEnded={() => setAudioPlaying(false)}
                className="hidden"
              />
              <div className="flex items-center gap-2 text-sm text-[hsl(var(--text-muted))]">
                <Headphones className="w-4 h-4 text-[hsl(var(--accent))]" />
                <span>{detail.lessonTitle}</span>
              </div>
              {/* Progress bar */}
              <div className="space-y-1">
                <div 
                  className="h-2 rounded-full bg-[hsl(var(--surface-2))] overflow-hidden cursor-pointer"
                  onClick={(e) => {
                    if (!audioRef.current) return;
                    const rect = e.currentTarget.getBoundingClientRect();
                    const pct = (e.clientX - rect.left) / rect.width;
                    audioRef.current.currentTime = pct * audioRef.current.duration;
                    setAudioPosition(audioRef.current.currentTime);
                  }}
                >
                  <div 
                    className="h-full rounded-full bg-gradient-to-r from-[hsl(var(--accent))] to-[hsl(var(--accent-2))] transition-all"
                    style={{ width: `${audioPct * 100}%` }}
                  />
                </div>
                <div className="flex justify-between text-xs text-[hsl(var(--text-muted))]">
                  <span>{fmtTime(audioPosition)}</span>
                  <span>{fmtTime(totalAudioDuration)}</span>
                </div>
              </div>
              {/* Controls */}
              <div className="flex items-center justify-center gap-6">
                <button onClick={() => seekAudio(-15)} className="text-[hsl(var(--text-muted))] hover:text-[hsl(var(--text))] transition-colors p-2">
                  <SkipBack className="w-5 h-5" />
                </button>
                <button
                  onClick={toggleAudio}
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-[hsl(var(--accent))] to-[hsl(var(--accent-2))] flex items-center justify-center shadow-lg shadow-[hsl(var(--accent))/0.3] hover:opacity-90 transition-opacity"
                >
                  {audioPlaying ? <Pause className="w-5 h-5 text-white" /> : <Play className="w-5 h-5 text-white ml-0.5" />}
                </button>
                <button onClick={() => seekAudio(15)} className="text-[hsl(var(--text-muted))] hover:text-[hsl(var(--text))] transition-colors p-2">
                  <SkipForward className="w-5 h-5" />
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* LESSON */}
      <section className={`os-card overflow-hidden ${isLessonComplete ? 'opacity-80' : ''}`}>
        <div className={`p-6 border-b border-[hsl(var(--border))] flex items-center justify-between transition-colors ${isLessonComplete ? 'bg-[hsl(var(--surface-2))]' : 'bg-[hsl(var(--accent))/0.1] border-b-[hsl(var(--accent))/0.2]'}`}>
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${isLessonComplete ? 'bg-[hsl(var(--surface))]' : 'bg-[hsl(var(--accent))] text-white shadow-lg shadow-[hsl(var(--accent))/0.3]'}`}>
              {isLessonComplete ? <CheckCircle2 className="w-5 h-5 text-[hsl(var(--accent-2))]" /> : <BookOpen className="w-5 h-5" />}
            </div>
            <h2 className="text-xl font-heading font-semibold">Lesson: {detail.lessonTitle}</h2>
          </div>
        </div>
        <div className="p-6 md:p-8">
          <div className="lesson-content">
            <div dangerouslySetInnerHTML={{ __html: detail.lessonContent }} />
          </div>
          {!isLessonComplete && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-8 flex justify-end">
              <Button onClick={onCompleteLesson} disabled={completeLesson.isPending} className="bg-[hsl(var(--accent))] hover:bg-[hsl(var(--accent))/0.9] text-white transition-all active:scale-95">
                Mark Lesson Complete
              </Button>
            </motion.div>
          )}
        </div>
      </section>

      {/* PRACTICE EXERCISE */}
      {detail.practicePrompt && (
        <section className={`os-card overflow-hidden transition-all ${!isLessonComplete ? 'opacity-50 pointer-events-none' : ''}`}>
          <div className={`p-6 border-b border-[hsl(var(--border))] flex items-center justify-between transition-colors ${isPracticeComplete ? 'bg-[hsl(var(--surface-2))]' : 'bg-purple-500/10 border-b-purple-500/20'}`}>
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${!isLessonComplete ? 'bg-[hsl(var(--surface))]' : isPracticeComplete ? 'bg-[hsl(var(--surface))]' : 'bg-purple-500 text-white shadow-lg shadow-purple-500/30'}`}>
                {!isLessonComplete ? <Lock className="w-5 h-5 text-[hsl(var(--text-muted))]" /> : isPracticeComplete ? <CheckCircle2 className="w-5 h-5 text-[hsl(var(--accent-2))]" /> : <Dumbbell className="w-5 h-5" />}
              </div>
              <div>
                <h2 className="text-xl font-heading font-semibold">Practice Exercise</h2>
                <p className="text-xs text-[hsl(var(--text-muted))]">Bonus XP · AI-graded</p>
              </div>
            </div>
          </div>
          <div className="p-6 md:p-8">
            <p className="mb-5 text-[hsl(var(--text-muted))] leading-relaxed">{detail.practicePrompt}</p>
            
            {!isPracticeComplete && !practiceResult && (
              <>
                <textarea
                  value={practiceText}
                  onChange={e => setPracticeText(e.target.value)}
                  className="w-full bg-[hsl(var(--bg))] border border-[hsl(var(--border))] rounded-xl p-4 text-[hsl(var(--text))] min-h-[120px] focus:outline-none focus:border-purple-500/60 transition-colors"
                  placeholder="Write your practice response here..."
                />
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-4 flex justify-end">
                  <Button 
                    onClick={onSubmitPractice} 
                    disabled={submitPractice.isPending || !practiceText.trim()} 
                    className="bg-purple-500 hover:bg-purple-600 text-white transition-all active:scale-95"
                  >
                    {submitPractice.isPending ? <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Grading...</> : <><Sparkles className="w-4 h-4 mr-2" /> Submit for AI Feedback</>}
                  </Button>
                </motion.div>
              </>
            )}

            {practiceResult && (
              <AnimatePresence>
                <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
                  <div className={`p-4 rounded-xl border ${practiceResult.passed ? 'bg-green-500/10 border-green-500/30' : 'bg-amber-500/10 border-amber-500/30'} flex items-start gap-3`}>
                    {practiceResult.passed ? <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" /> : <AlertCircle className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />}
                    <div>
                      <p className="font-semibold text-sm mb-1">{practiceResult.passed ? "Great effort!" : "Keep practising!"}</p>
                      <p className="text-sm text-[hsl(var(--text-muted))] leading-relaxed">{practiceResult.feedback}</p>
                    </div>
                  </div>
                  {practiceResult.xpAwarded > 0 && (
                    <div className="flex items-center gap-2 text-sm text-[hsl(var(--accent))]">
                      <Zap className="w-4 h-4" />
                      <span>+{practiceResult.xpAwarded} XP earned</span>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            )}

            {isPracticeComplete && !practiceResult && (
              <div className="flex items-center gap-2 text-sm text-[hsl(var(--accent-2))] p-3 rounded-lg bg-[hsl(var(--accent-2))/0.1]">
                <CheckCircle2 className="w-4 h-4" />
                <span>Practice exercise completed</span>
              </div>
            )}
          </div>
        </section>
      )}

      {/* TASK */}
      <section className={`os-card overflow-hidden transition-all ${!isLessonComplete ? 'opacity-50 pointer-events-none' : isTaskComplete ? 'opacity-80' : ''}`}>
        <div className={`p-6 border-b border-[hsl(var(--border))] flex items-center justify-between transition-colors ${isTaskComplete ? 'bg-[hsl(var(--surface-2))]' : 'bg-[hsl(var(--accent-2))/0.1] border-b-[hsl(var(--accent-2))/0.2]'}`}>
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${!isLessonComplete ? 'bg-[hsl(var(--surface))]' : isTaskComplete ? 'bg-[hsl(var(--surface))]' : 'bg-[hsl(var(--accent-2))] text-white shadow-lg shadow-[hsl(var(--accent-2))/0.3]'}`}>
              {!isLessonComplete ? <Lock className="w-5 h-5 text-[hsl(var(--text-muted))]" /> : isTaskComplete ? <CheckCircle2 className="w-5 h-5 text-[hsl(var(--accent-2))]" /> : <PenTool className="w-5 h-5" />}
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h2 className="text-xl font-heading font-semibold">Practical Task: {detail.taskTitle}</h2>
                {!taskRequired && (
                  <span className="px-2 py-0.5 rounded-full bg-[hsl(var(--surface))] border border-[hsl(var(--border))] text-[10px] font-bold uppercase tracking-wider text-[hsl(var(--text-muted))]">Optional at your pace</span>
                )}
              </div>
              <p className="text-xs text-[hsl(var(--text-muted))]">AI Mentor will review your work</p>
            </div>
          </div>
        </div>
        <div className="p-6 md:p-8">
          <div className="lesson-content mb-6">
            <div dangerouslySetInnerHTML={{ __html: detail.taskDescription }} />
          </div>

          {isLessonComplete && !isTaskComplete && !taskResult && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
              <label className="block text-sm font-medium text-[hsl(var(--text-muted))] mb-2">
                Describe what you built or did, paste output, or share your findings:
              </label>
              <textarea
                value={taskText}
                onChange={e => setTaskText(e.target.value)}
                className="w-full bg-[hsl(var(--bg))] border border-[hsl(var(--border))] rounded-xl p-4 text-[hsl(var(--text))] min-h-[160px] focus:outline-none focus:border-[hsl(var(--accent-2))/0.6] transition-colors"
                placeholder="Describe what you created, paste your code, or share what you learned while completing this task..."
              />
              <div className="flex justify-end">
                <Button 
                  onClick={onCompleteTask} 
                  disabled={completeTask.isPending || !taskText.trim()} 
                  className="bg-[hsl(var(--accent-2))] hover:bg-[hsl(var(--accent-2))/0.9] text-white transition-all active:scale-95"
                >
                  {completeTask.isPending ? <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Getting feedback...</> : <><Sparkles className="w-4 h-4 mr-2" /> Submit for AI Feedback</>}
                </Button>
              </div>
            </motion.div>
          )}

          {taskResult && (
            <AnimatePresence>
              <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
                <div className={`p-4 rounded-xl border ${taskResult.passed ? 'bg-green-500/10 border-green-500/30' : 'bg-amber-500/10 border-amber-500/30'}`}>
                  <div className="flex items-center gap-5 mb-4">
                    <GradeReveal score={taskResult.score} total={100} passed={taskResult.passed} label="AI Score" />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        {taskResult.passed ? <CheckCircle2 className="w-5 h-5 text-green-400" /> : <AlertCircle className="w-5 h-5 text-amber-400" />}
                        <span className="font-semibold">{taskResult.passed ? "Great work!" : "Good effort!"}</span>
                      </div>
                      <p className="text-sm text-[hsl(var(--text-muted))] leading-relaxed">{taskResult.feedback.summary}</p>
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {taskResult.feedback.strengths.length > 0 && (
                      <div className="space-y-2">
                        <p className="text-xs font-semibold uppercase tracking-wider text-green-400">Strengths</p>
                        {taskResult.feedback.strengths.map((s, i) => (
                          <div key={i} className="flex items-start gap-2 text-sm">
                            <CheckCircle2 className="w-3.5 h-3.5 text-green-400 mt-0.5 flex-shrink-0" />
                            <span className="text-[hsl(var(--text-muted))]">{s}</span>
                          </div>
                        ))}
                      </div>
                    )}
                    {taskResult.feedback.improvements.length > 0 && (
                      <div className="space-y-2">
                        <p className="text-xs font-semibold uppercase tracking-wider text-amber-400">To improve</p>
                        {taskResult.feedback.improvements.map((imp, i) => (
                          <div key={i} className="flex items-start gap-2 text-sm">
                            <TrendingUp className="w-3.5 h-3.5 text-amber-400 mt-0.5 flex-shrink-0" />
                            <span className="text-[hsl(var(--text-muted))]">{imp}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                {taskResult.xpAwarded > 0 && (
                  <div className="flex items-center gap-2 text-sm text-[hsl(var(--accent))]">
                    <Zap className="w-4 h-4" />
                    <span>+{taskResult.xpAwarded} XP earned</span>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          )}

          {isTaskComplete && !taskResult && (
            <div className="flex items-center gap-2 text-sm text-[hsl(var(--accent-2))] p-3 rounded-lg bg-[hsl(var(--accent-2))/0.1]">
              <CheckCircle2 className="w-4 h-4" />
              <span>Task completed</span>
            </div>
          )}
        </div>
      </section>

      {/* QUIZ */}
      <section className={`os-card overflow-hidden transition-all ${!quizUnlocked ? 'opacity-50 pointer-events-none' : isQuizComplete ? 'opacity-80' : ''}`}>
        <div className="p-6 border-b border-[hsl(var(--border))] flex items-center justify-between bg-[hsl(var(--surface-2))]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[hsl(var(--surface))] flex items-center justify-center border border-[hsl(var(--border))]">
              {!quizUnlocked ? <Lock className="w-5 h-5 text-[hsl(var(--text-muted))]" /> : isQuizComplete ? <CheckCircle2 className="w-5 h-5 text-[hsl(var(--accent-2))]" /> : <HelpCircle className="w-5 h-5 text-[hsl(var(--text))]" />}
            </div>
            <h2 className="text-xl font-heading font-semibold">Knowledge Check</h2>
          </div>
        </div>
        <div className="p-6 md:p-8 space-y-6">
          {detail.quiz.map((q, idx) => {
            const hasSubmitted = localCorrectIndexes !== null || isQuizComplete;
            const order = optionOrder[q.id] ?? q.options.map((_, i) => i);
            return (
              <div key={q.id} className="bg-[hsl(var(--surface-2))] p-4 rounded-xl border border-[hsl(var(--border))]">
                <p className="font-medium mb-4">{idx + 1}. {q.question}</p>
                <div className="space-y-2">
                  {order.map((originalIdx) => {
                    const opt = q.options[originalIdx];
                    const isSelected = quizAnswers[q.id] === originalIdx;
                    const showCorrect = hasSubmitted && localCorrectIndexes && localCorrectIndexes[idx] === originalIdx;
                    const showWrong = hasSubmitted && localCorrectIndexes && isSelected && !showCorrect;
                    let bgClass = "bg-[hsl(var(--bg))]";
                    let borderClass = "border-[hsl(var(--border))]";
                    let icon = null;
                    if (showCorrect) { bgClass = "bg-[hsl(var(--accent-2))/0.1]"; borderClass = "border-[hsl(var(--accent-2))]"; icon = <CheckCircle2 className="w-4 h-4 text-[hsl(var(--accent-2))]" />; }
                    else if (showWrong) { bgClass = "bg-[hsl(var(--destructive))/0.1]"; borderClass = "border-[hsl(var(--destructive))]"; icon = <XCircle className="w-4 h-4 text-[hsl(var(--destructive))]" />; }
                    else if (isSelected && !hasSubmitted) { borderClass = "border-[hsl(var(--accent))]"; }
                    return (
                      <label key={originalIdx} className={`flex items-center justify-between p-3 rounded-lg border ${bgClass} ${borderClass} ${hasSubmitted ? 'cursor-default' : 'cursor-pointer hover:border-[hsl(var(--accent))]'} transition-colors`}>
                        <div className="flex items-center gap-3">
                          <input type="radio" name={`quiz-${q.id}`} disabled={hasSubmitted || isQuizComplete} checked={isSelected} onChange={() => setQuizAnswers(prev => ({ ...prev, [q.id]: originalIdx }))} className="accent-[hsl(var(--accent))]" />
                          <span className={`text-sm ${showCorrect ? 'text-[hsl(var(--accent-2))] font-medium' : showWrong ? 'text-[hsl(var(--destructive))] font-medium' : ''}`}>{opt}</span>
                        </div>
                        {icon}
                      </label>
                    );
                  })}
                </div>
                {hasSubmitted && q.explanation && (
                  <div className="mt-3 flex items-start gap-2 p-3 rounded-lg bg-[hsl(var(--accent))/0.08] border border-[hsl(var(--accent))/0.2]">
                    <Sparkles className="w-4 h-4 text-[hsl(var(--accent))] mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-[hsl(var(--text-muted))] leading-relaxed"><span className="font-semibold text-[hsl(var(--text))]">Why: </span>{q.explanation}</p>
                  </div>
                )}
              </div>
            );
          })}
          {quizUnlocked && !isQuizComplete && localCorrectIndexes === null && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-end">
              <Button onClick={onSubmitQuiz} disabled={submitQuiz.isPending || Object.keys(quizAnswers).length < detail.quiz.length} className="bg-[hsl(var(--accent))] hover:bg-[hsl(var(--accent))/0.9] text-white transition-all active:scale-95">
                Submit Answers
              </Button>
            </motion.div>
          )}
          {quizUnlocked && !isQuizComplete && localCorrectIndexes !== null && submitQuiz.data?.passed === false && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-4 rounded-xl bg-[hsl(var(--destructive))/0.1] border border-[hsl(var(--destructive))/0.3] flex flex-col sm:flex-row items-center justify-between gap-3">
              <div>
                <p className="font-semibold text-[hsl(var(--destructive))]">
                  Not quite — {submitQuiz.data?.score ?? 0} / {detail.quiz.length} correct
                </p>
                <p className="text-sm text-[hsl(var(--text-muted))]">
                  Review the answers highlighted in red, then try again to unlock the reflection.
                </p>
              </div>
              <Button onClick={onRetryQuiz} className="bg-[hsl(var(--accent))] hover:bg-[hsl(var(--accent))/0.9] text-white whitespace-nowrap transition-all active:scale-95">
                <RotateCcw className="w-4 h-4 mr-2" /> Try Again
              </Button>
            </motion.div>
          )}
          {isQuizComplete && (progress?.quizScore ?? submitQuiz.data?.score) != null && (
            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="p-4 rounded-xl bg-[hsl(var(--accent-2))/0.1] border border-[hsl(var(--accent-2))/0.3] flex items-center gap-5">
              <GradeReveal
                score={progress?.quizScore ?? submitQuiz.data?.score ?? 0}
                total={detail.quiz.length}
                passed
                label="Quiz Score"
              />
              <div className="flex-1">
                <p className="font-semibold text-[hsl(var(--accent-2))] mb-1">Knowledge check passed</p>
                <p className="text-sm text-[hsl(var(--text-muted))]">You answered {progress?.quizScore ?? submitQuiz.data?.score} of {detail.quiz.length} correctly. Reflection is unlocked.</p>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* REFLECTION */}
      <section className={`os-card overflow-hidden transition-all ${!isQuizComplete ? 'opacity-50 pointer-events-none' : isReflectionComplete ? 'opacity-80' : ''}`}>
        <div className="p-6 border-b border-[hsl(var(--border))] flex items-center justify-between bg-[hsl(var(--surface-2))]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[hsl(var(--surface))] flex items-center justify-center border border-[hsl(var(--border))]">
              {!isQuizComplete ? <Lock className="w-5 h-5 text-[hsl(var(--text-muted))]" /> : isReflectionComplete ? <CheckCircle2 className="w-5 h-5 text-[hsl(var(--accent-2))]" /> : <MessageSquare className="w-5 h-5 text-[hsl(var(--text))]" />}
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              <h2 className="text-xl font-heading font-semibold">Daily Reflection</h2>
              {!reflectionRequired && (
                <span className="px-2 py-0.5 rounded-full bg-[hsl(var(--surface))] border border-[hsl(var(--border))] text-[10px] font-bold uppercase tracking-wider text-[hsl(var(--text-muted))]">Optional at your pace</span>
              )}
            </div>
          </div>
        </div>
        <div className="p-6 md:p-8">
          <p className="mb-4 text-[hsl(var(--text-muted))]">{detail.reflectionPrompt}</p>
          <textarea
            value={reflectionText}
            onChange={e => setReflectionText(e.target.value)}
            disabled={isReflectionComplete}
            className="w-full bg-[hsl(var(--bg))] border border-[hsl(var(--border))] rounded-xl p-4 text-[hsl(var(--text))] min-h-[150px] focus:outline-none focus:border-[hsl(var(--accent))] transition-colors"
            placeholder="Write your reflection here..."
          />
          {isQuizComplete && !isReflectionComplete && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-4 flex justify-end">
              <Button onClick={onSubmitReflection} disabled={submitReflection.isPending || !reflectionText.trim()} className="bg-[hsl(var(--accent))] hover:bg-[hsl(var(--accent))/0.9] text-white transition-all active:scale-95">
                Save Reflection
              </Button>
            </motion.div>
          )}
          {isReflectionComplete && !sharedToCommunity && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="mt-4 p-4 rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--surface-2))] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex-1">
                <h4 className="font-semibold">Share to Community?</h4>
                <p className="text-sm text-[hsl(var(--text-muted))]">Your reflections are private by default. Share to the feed to connect with others.</p>
              </div>
              <Button onClick={onShareReflection} disabled={createPost.isPending} className="bg-[hsl(var(--accent-2))] hover:bg-[hsl(var(--accent-2))/0.9] text-white whitespace-nowrap">
                <Share2 className="w-4 h-4 mr-2" /> Share to Feed
              </Button>
            </motion.div>
          )}
          {isReflectionComplete && sharedToCommunity && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-4 flex items-center justify-center p-3 rounded-lg text-sm text-[hsl(var(--accent-2))] bg-[hsl(var(--accent-2))/0.1] border border-[hsl(var(--accent-2))/0.2]">
              <CheckCircle2 className="w-4 h-4 mr-2" /> Shared to community feed
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
