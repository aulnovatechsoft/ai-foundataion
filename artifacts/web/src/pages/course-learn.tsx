import { useState, useEffect, useMemo, useRef } from "react";
import { Redirect, useRoute } from "wouter";
import { Show } from "@clerk/react";
import {
  useGetCourse,
  useCompleteCourseLesson,
  useMarkLessonTried,
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
import {
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  ArrowRight,
  Star,
  BookOpen,
  Headphones,
  Gauge,
  Copy,
  Check,
  ExternalLink,
  Rocket,
} from "lucide-react";
import { useCelebration } from "@/providers/CelebrationProvider";
import { CardNarration, QuizNarration, parseCardBlocks } from "@/components/CardNarration";
import { ChatSession } from "@/components/ChatSession";
import { useGenerateCardAudio } from "@workspace/api-client-react";
import { playTap, playCorrect, playWrong, playComplete } from "@/lib/chatSounds";

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

const DIFFICULTIES = ["Beginner", "Elementary", "Intermediate", "Advanced", "Expert"];

function difficultyForUnit(unitIdx: number, unitCount: number): string {
  if (unitCount <= 1) return "Beginner";
  const band = Math.round((unitIdx / (unitCount - 1)) * (DIFFICULTIES.length - 1));
  return DIFFICULTIES[Math.min(band, DIFFICULTIES.length - 1)];
}

function CourseLearnFeed({ slug }: { slug: string }) {
  const queryClient = useQueryClient();
  const { data: me } = useGetMe();
  const { data: course, isLoading } = useGetCourse(slug, { query: { enabled: !!slug, queryKey: getGetCourseQueryKey(slug) } });
  const { triggerXpBurst } = useCelebration();

  // Flatten lessons but keep unit metadata for the header
  const flatLessons = useMemo(() => {
    if (!course) return [];
    const unitCount = course.units.length;
    return course.units.flatMap((u: any, uIdx: number) =>
      u.lessons.map((l: any) => ({
        ...l,
        unitTitle: u.title as string,
        difficulty: difficultyForUnit(uIdx, unitCount),
      })),
    );
  }, [course]);

  const [expandedIds, setExpandedIds] = useState<Set<number>>(new Set());

  useEffect(() => {
    if (flatLessons.length > 0 && expandedIds.size === 0) {
      // Deep link: /course/:slug/learn?lesson=ID opens that lesson directly
      const params = new URLSearchParams(window.location.search);
      const requestedId = Number(params.get("lesson"));
      const requested = flatLessons.find(l => l.id === requestedId);
      const firstIncomplete = flatLessons.find(l => !l.completed);
      // Any lesson can be opened directly — fall back only when no valid lesson is requested
      const target = requested ?? firstIncomplete ?? flatLessons[flatLessons.length - 1];
      setExpandedIds(new Set([target.id]));
      if (requested && target.id === requested.id) {
        setTimeout(() => {
          document.getElementById(`lesson-${target.id}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 300);
      }
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
          lessonNumber={idx + 1}
          lessonTotal={flatLessons.length}
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
        />
      ))}
    </div>
  );
}

// ---------- Card model: split step HTML into one-idea-per-card chunks ----------

type LessonCard =
  | { kind: "content"; html: string }
  | { kind: "quiz"; stepIdx: number }
  | { kind: "chat"; stepIdx: number }
  | { kind: "tryit" };

const CARD_EMOJIS = ["🧠", "✨", "💡", "🚀", "🎯", "🔍", "⚡", "📌"];

/**
 * Splits a step's HTML into small cards. A heading starts a new card; content
 * accumulates until the next heading or until the card already holds ~2 blocks
 * of body text. Lists/quotes/code stay attached to the text before them.
 */
function splitHtmlIntoCards(html: string): string[] {
  if (typeof DOMParser === "undefined") return [html];
  const doc = new DOMParser().parseFromString(`<div>${html}</div>`, "text/html");
  const root = doc.body.firstElementChild;
  if (!root) return [html];

  const cards: string[] = [];
  let current: string[] = [];
  let bodyBlocks = 0;

  const flush = () => {
    if (current.length > 0) {
      cards.push(current.join(""));
      current = [];
      bodyBlocks = 0;
    }
  };

  Array.from(root.childNodes).forEach((node) => {
    // Preserve meaningful bare text nodes as paragraphs
    if (node.nodeType === Node.TEXT_NODE) {
      const text = node.textContent?.trim();
      if (text) {
        if (bodyBlocks >= 2) flush();
        current.push(`<p>${text}</p>`);
        bodyBlocks += 1;
      }
      return;
    }
    if (node.nodeType !== Node.ELEMENT_NODE) return;
    const el = node as Element;
    const tag = el.tagName.toLowerCase();
    const isHeading = /^h[1-6]$/.test(tag);
    const isAttachment = ["ul", "ol", "pre", "blockquote", "table", "figure"].includes(tag);

    if (isHeading) {
      flush();
      current.push(el.outerHTML);
      return;
    }
    if (isAttachment) {
      // Keep with preceding text; counts as a full body block
      current.push(el.outerHTML);
      bodyBlocks += 1;
      if (bodyBlocks >= 2) flush();
      return;
    }
    // Paragraph or other block
    if (bodyBlocks >= 2) flush();
    current.push(el.outerHTML);
    bodyBlocks += 1;
  });
  flush();

  return cards.length > 0 ? cards : [html];
}

function buildCards(lesson: CourseLessonDetail): LessonCard[] {
  const cards: LessonCard[] = [];
  lesson.steps.forEach((step, stepIdx) => {
    splitHtmlIntoCards(step.html).forEach(chunk => {
      cards.push({ kind: "content", html: chunk });
    });
    if (step.question) cards.push({ kind: "quiz", stepIdx });
    if (step.chat && step.chat.length > 0) cards.push({ kind: "chat", stepIdx });
  });
  // Defensive fallback so we never render "Card 1 of 0"
  if (cards.length === 0) cards.push({ kind: "content", html: "<p>This lesson has no content yet.</p>" });
  // Closing real-world action step: try the lesson's prompt in the actual tool
  if (lesson.tryIt) cards.push({ kind: "tryit" });
  return cards;
}

function countWords(lesson: CourseLessonDetail): number {
  const text = lesson.steps.map(s => s.html).join(" ").replace(/<[^>]*>/g, " ");
  return text.split(/\s+/).filter(Boolean).length;
}

// ---------- Lesson section ----------

function LessonSection({
  lesson,
  lessonNumber,
  lessonTotal,
  course,
  isExpanded,
  isCompleted,
  onActivate,
  onComplete,
}: {
  lesson: CourseLessonDetail & { unitTitle?: string; difficulty?: string },
  lessonNumber: number,
  lessonTotal: number,
  course: any,
  isExpanded: boolean,
  isCompleted: boolean,
  onActivate: () => void,
  onComplete: (xpAwarded: number) => void,
}) {
  const completeMutation = useCompleteCourseLesson();
  const [imageFailed, setImageFailed] = useState(false);

  // Listen / Read mode + Auto Continue (persisted preferences)
  // ?mode=read|listen (from the course path Read/Listen choice) overrides the saved preference
  const [mode, setMode] = useState<"listen" | "read">(() => {
    const urlMode = new URLSearchParams(window.location.search).get("mode");
    if (urlMode === "read" || urlMode === "listen") {
      localStorage.setItem("lesson-mode", urlMode);
      return urlMode;
    }
    return localStorage.getItem("lesson-mode") === "read" ? "read" : "listen";
  });
  const [autoContinue, setAutoContinue] = useState(
    () => localStorage.getItem("lesson-auto-continue") === "on",
  );
  const selectMode = (m: "listen" | "read") => {
    setMode(m);
    localStorage.setItem("lesson-mode", m);
  };
  const toggleAutoContinue = () => {
    setAutoContinue(v => {
      localStorage.setItem("lesson-auto-continue", v ? "off" : "on");
      return !v;
    });
  };

  // Per-card narration completion
  const [narrationDone, setNarrationDone] = useState<Record<number, boolean>>({});
  // Per-card interactive chat completion
  const [chatDone, setChatDone] = useState<Record<number, boolean>>({});

  const cards = useMemo(() => buildCards(lesson), [lesson]);
  const words = useMemo(() => countWords(lesson), [lesson]);
  const readMins = Math.max(1, Math.ceil(words / 200));
  const listenMins = Math.max(1, Math.round((lesson.audioDurationSec ?? (words / 150) * 60) / 60));

  // Card navigation state
  const [cardIdx, setCardIdx] = useState(0);
  const [maxUnlocked, setMaxUnlocked] = useState(isCompleted ? cards.length - 1 : 0);
  const [direction, setDirection] = useState(1);

  // Quiz state keyed by step index
  const [stepAnswers, setStepAnswers] = useState<Record<number, number>>({});
  const [stepStatus, setStepStatus] = useState<Record<number, 'idle' | 'correct' | 'incorrect'>>({});

  useEffect(() => {
    if (isCompleted) {
      setMaxUnlocked(cards.length - 1);
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
  }, [isCompleted, lesson.steps, cards.length]);

  const card = cards[cardIdx];
  const isLastCard = cardIdx === cards.length - 1;
  const currentQuizBlocked =
    card?.kind === "quiz" && stepStatus[card.stepIdx] !== "correct" && !isCompleted;
  const currentChatBlocked =
    card?.kind === "chat" && !chatDone[cardIdx] && !isCompleted;

  // A content card is "done" when its narration finished (or was skipped),
  // in read mode, or when the lesson is already completed.
  const currentCardDone =
    card?.kind !== "content" ||
    mode === "read" ||
    isCompleted ||
    !!narrationDone[cardIdx];
  const listeningBlocked = !currentCardDone && card?.kind === "content";

  const goTo = (idx: number) => {
    if (idx < 0 || idx >= cards.length) return;
    if (idx > maxUnlocked) return;
    setDirection(idx > cardIdx ? 1 : -1);
    setCardIdx(idx);
  };

  const completeLesson = () => {
    if (isCompleted) return;
    completeMutation.mutate({ lessonId: lesson.id }, {
      onSuccess: (res) => {
        playComplete();
        onComplete(res.xpAwarded);
      },
    });
  };

  const advance = () => {
    if (currentQuizBlocked || currentChatBlocked || listeningBlocked) return;
    if (isLastCard) {
      completeLesson();
      return;
    }
    const next = cardIdx + 1;
    setMaxUnlocked(m => Math.max(m, next));
    setDirection(1);
    setCardIdx(next);
  };

  // Prefetch next content card's narration so playback starts instantly
  const prefetchAudio = useGenerateCardAudio();
  const prefetchedRef = useRef<Set<number>>(new Set());
  useEffect(() => {
    if (mode !== "listen" || isCompleted) return;
    const next = cards.findIndex(
      (c, i) => i > cardIdx && c.kind === "content",
    );
    if (next === -1 || prefetchedRef.current.has(next)) return;
    const nextCard = cards[next];
    if (nextCard.kind !== "content") return;
    const { sentences } = parseCardBlocks(nextCard.html);
    if (sentences.length === 0) return;
    prefetchedRef.current.add(next);
    prefetchAudio.mutate(
      { lessonId: lesson.id, data: { sentences } },
      { onError: () => prefetchedRef.current.delete(next) },
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode, cardIdx, cards, isCompleted, lesson.id]);

  // Auto Continue: after narration completes, wait 2s then advance
  useEffect(() => {
    if (!autoContinue || mode !== "listen" || isCompleted) return;
    if (card?.kind !== "content" || !narrationDone[cardIdx]) return;
    if (isLastCard) return;
    const t = setTimeout(() => {
      setMaxUnlocked(m => Math.max(m, cardIdx + 1));
      setDirection(1);
      setCardIdx(i => (i === cardIdx ? cardIdx + 1 : i));
    }, 2000);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoContinue, mode, narrationDone, cardIdx, isLastCard, isCompleted]);

  const handleOptionSelect = (stepIdx: number, optIdx: number) => {
    if (stepStatus[stepIdx] === 'correct') return;
    playTap();
    setStepAnswers(prev => ({ ...prev, [stepIdx]: optIdx }));
    setStepStatus(prev => ({ ...prev, [stepIdx]: 'idle' }));
  };

  const handleCheckAnswer = (stepIdx: number) => {
    const q = lesson.steps[stepIdx].question;
    if (!q) return;
    if (stepAnswers[stepIdx] === q.correctIndex) {
      playCorrect();
      setStepStatus(prev => ({ ...prev, [stepIdx]: 'correct' }));
      setMaxUnlocked(m => Math.max(m, Math.min(cardIdx + 1, cards.length - 1)));
      // Duolingo-style pacing: auto-advance shortly after a correct answer
      if (cardIdx < cards.length - 1) {
        setTimeout(() => {
          setDirection(1);
          setCardIdx(i => (i === cardIdx ? cardIdx + 1 : i));
        }, 1200);
      }
    } else {
      playWrong();
      setStepStatus(prev => ({ ...prev, [stepIdx]: 'incorrect' }));
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

  const lessonPct = Math.round((lessonNumber / lessonTotal) * 100);
  const cardPct = cards.length > 1 ? Math.round(((cardIdx + 1) / cards.length) * 100) : 100;
  const emoji = CARD_EMOJIS[cardIdx % CARD_EMOJIS.length];

  return (
    <div id={`lesson-${lesson.id}`} className="mb-12 animate-slide-up relative scroll-mt-20">
      {/* ---------- Header ---------- */}
      <div className="mb-6">
        {/* Progress indicator at the very top */}
        <div className="mb-4">
          <div className="flex items-center justify-between text-xs font-semibold text-[hsl(var(--text-muted))] mb-1.5">
            <span>Lesson {lessonNumber} of {lessonTotal}</span>
            <span>{lessonPct}%</span>
          </div>
          <div className="h-2 rounded-full bg-[hsl(var(--surface-2))] overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{ backgroundColor: course.accent }}
              initial={{ width: 0 }}
              animate={{ width: `${lessonPct}%` }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
          </div>
        </div>

        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-bold uppercase tracking-widest" style={{ color: course.accent }}>
            {lesson.unitTitle || course.title}
          </span>
        </div>
        <h1 className="text-3xl font-heading font-bold text-[hsl(var(--text))] mb-3">{lesson.title}</h1>

        {/* Meta badges */}
        <div className="flex flex-wrap items-center gap-2 mb-5">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[hsl(var(--surface-2))] border border-[hsl(var(--border))] text-xs font-medium text-[hsl(var(--text))]">
            <BookOpen className="w-3.5 h-3.5 text-[hsl(var(--text-muted))]" /> {readMins} min read
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[hsl(var(--surface-2))] border border-[hsl(var(--border))] text-xs font-medium text-[hsl(var(--text))]">
            <Headphones className="w-3.5 h-3.5 text-[hsl(var(--text-muted))]" /> {listenMins} min listen
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
            <Gauge className="w-3.5 h-3.5" /> {lesson.difficulty || "Beginner"}
          </span>
        </div>

        {/* Hero illustration */}
        {lesson.imageUrl && !imageFailed && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-5 rounded-2xl overflow-hidden border border-[hsl(var(--border))] bg-[hsl(var(--surface-2))]"
          >
            <img
              src={lesson.imageUrl}
              alt={lesson.title}
              loading="lazy"
              onError={() => setImageFailed(true)}
              className="w-full max-h-72 object-contain"
            />
          </motion.div>
        )}

        {/* Listen / Read mode + Auto Continue */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="inline-flex rounded-full border border-[hsl(var(--border))] bg-[hsl(var(--surface-2))] p-1">
            <button
              onClick={() => selectMode("listen")}
              aria-pressed={mode === "listen"}
              className={`inline-flex items-center gap-1.5 px-4 h-8 rounded-full text-xs font-bold transition-colors ${
                mode === "listen"
                  ? "bg-[hsl(var(--accent))] text-white shadow-sm"
                  : "text-[hsl(var(--text-muted))] hover:text-[hsl(var(--text))]"
              }`}
            >
              <Headphones className="w-3.5 h-3.5" /> Listen
            </button>
            <button
              onClick={() => selectMode("read")}
              aria-pressed={mode === "read"}
              className={`inline-flex items-center gap-1.5 px-4 h-8 rounded-full text-xs font-bold transition-colors ${
                mode === "read"
                  ? "bg-[hsl(var(--accent))] text-white shadow-sm"
                  : "text-[hsl(var(--text-muted))] hover:text-[hsl(var(--text))]"
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" /> Read
            </button>
          </div>

          {mode === "listen" && (
            <button
              onClick={toggleAutoContinue}
              aria-pressed={autoContinue}
              className="inline-flex items-center gap-2 text-xs font-semibold text-[hsl(var(--text-muted))] hover:text-[hsl(var(--text))] transition-colors"
            >
              <span
                className={`relative inline-flex w-9 h-5 rounded-full transition-colors ${
                  autoContinue ? "bg-[hsl(var(--accent))]" : "bg-[hsl(var(--border))]"
                }`}
              >
                <span
                  className={`absolute top-0.5 w-4 h-4 rounded-full bg-white shadow transition-all ${
                    autoContinue ? "left-[18px]" : "left-0.5"
                  }`}
                />
              </span>
              Auto Continue
            </button>
          )}
        </div>
      </div>

      {/* ---------- Card deck ---------- */}
      <div className="relative">
        {/* Card progress */}
        <div className="flex items-center justify-between text-xs font-semibold text-[hsl(var(--text-muted))] mb-2">
          <span>Card {cardIdx + 1} of {cards.length}</span>
          <span>{cardPct}%</span>
        </div>
        <div className="h-1.5 rounded-full bg-[hsl(var(--surface-2))] overflow-hidden mb-4">
          <motion.div
            className="h-full rounded-full bg-[hsl(var(--accent))]"
            animate={{ width: `${cardPct}%` }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          />
        </div>

        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait" custom={direction} initial={false}>
            <motion.div
              key={cardIdx}
              custom={direction}
              initial={{ opacity: 0, x: direction > 0 ? 80 : -80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction > 0 ? -80 : 80 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(_, info) => {
                if (info.offset.x < -80) advance();
                else if (info.offset.x > 80) goTo(cardIdx - 1);
              }}
              className="cursor-grab active:cursor-grabbing"
            >
              {card?.kind === "content" ? (
                <div className="os-card p-6 sm:p-8 min-h-[220px] rounded-2xl">
                  <div className="text-3xl mb-4" aria-hidden="true">{emoji}</div>
                  <CardNarration
                    key={`${lesson.id}-${cardIdx}-${mode}`}
                    lessonId={lesson.id}
                    html={card.html}
                    mode={mode}
                    isDone={isCompleted || !!narrationDone[cardIdx]}
                    onNarrationComplete={() =>
                      setNarrationDone(prev =>
                        prev[cardIdx] ? prev : { ...prev, [cardIdx]: true },
                      )
                    }
                  />
                </div>
              ) : card?.kind === "tryit" && lesson.tryIt ? (
                <TryItCard
                  key={`tryit-${lesson.id}`}
                  lessonId={lesson.id}
                  tryIt={lesson.tryIt}
                  tried={lesson.tried}
                  accent={course?.accent}
                  courseSlug={course?.slug}
                />
              ) : card?.kind === "chat" ? (
                <ChatSession
                  key={`chat-${lesson.id}-${card.stepIdx}`}
                  lessonId={lesson.id}
                  stepIdx={card.stepIdx}
                  turns={lesson.steps[card.stepIdx].chat ?? []}
                  accent={course?.accent}
                  alreadyDone={isCompleted || !!chatDone[cardIdx]}
                  onFinished={() => setChatDone(prev => ({ ...prev, [cardIdx]: true }))}
                />
              ) : card?.kind === "quiz" ? (
                <QuizCard
                  step={lesson.steps[card.stepIdx]}
                  stepIdx={card.stepIdx}
                  selected={stepAnswers[card.stepIdx]}
                  status={stepStatus[card.stepIdx] ?? 'idle'}
                  onSelect={handleOptionSelect}
                  onCheck={handleCheckAnswer}
                  lessonId={lesson.id}
                  mode={mode}
                />
              ) : null}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-5">
          <Button
            variant="outline"
            onClick={() => goTo(cardIdx - 1)}
            disabled={cardIdx === 0}
            className="rounded-full"
          >
            <ChevronLeft className="w-4 h-4 mr-1" /> Back
          </Button>

          {isLastCard && isCompleted ? (
            <span className="text-sm font-semibold text-emerald-500 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" /> Completed
            </span>
          ) : listeningBlocked ? (
            <Button
              disabled
              className="rounded-full px-6 bg-[hsl(var(--surface-2))] text-[hsl(var(--text-muted))] border border-[hsl(var(--border))]"
            >
              <span className="flex items-center gap-2">
                <span className="flex gap-1" aria-hidden="true">
                  {[0, 1, 2].map(i => (
                    <motion.span
                      key={i}
                      className="w-1 h-1 rounded-full bg-current"
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2 }}
                    />
                  ))}
                </span>
                Listening...
              </span>
            </Button>
          ) : (
            <motion.div
              key={`continue-${cardIdx}-${currentCardDone}`}
              initial={currentCardDone && mode === "listen" ? { scale: 0.9 } : false}
              animate={
                currentCardDone && mode === "listen" && !isCompleted
                  ? { scale: [0.9, 1.06, 1] }
                  : { scale: 1 }
              }
              transition={{ duration: 0.45, ease: "easeOut" }}
            >
              <Button
                onClick={advance}
                disabled={currentQuizBlocked || currentChatBlocked || completeMutation.isPending}
                className="rounded-full px-6 bg-[hsl(var(--accent))] hover:bg-[hsl(var(--accent))/0.9] text-white"
              >
                {completeMutation.isPending ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                    Saving...
                  </span>
                ) : isLastCard ? (
                  <>Finish Lesson <Star className="w-4 h-4 ml-2" /></>
                ) : (
                  <>Continue <ArrowRight className="w-4 h-4 ml-2" /></>
                )}
              </Button>
            </motion.div>
          )}
        </div>
      </div>

      {isCompleted && isLastCard && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-8 p-6 rounded-2xl bg-[hsl(var(--accent))/0.1] border border-[hsl(var(--accent))/0.3] text-center">
          <div className="w-16 h-16 rounded-full bg-[hsl(var(--accent))] text-white flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-bold font-heading text-[hsl(var(--text))] mb-2">Lesson Complete!</h2>
          <p className="text-[hsl(var(--text-muted))]">You earned {lesson.xpReward} XP. Keep the momentum going.</p>
        </motion.div>
      )}
    </div>
  );
}

// ---------- Try it for real card ----------

function TryItCard({
  lessonId,
  tryIt,
  tried,
  accent,
  courseSlug,
}: {
  lessonId: number;
  tryIt: NonNullable<CourseLessonDetail["tryIt"]>;
  tried: boolean;
  accent?: string;
  courseSlug?: string;
}) {
  const queryClient = useQueryClient();
  const markTried = useMarkLessonTried();
  const [copied, setCopied] = useState(false);
  const [localTried, setLocalTried] = useState(false);
  const isTried = tried || localTried;

  const copyPrompt = async () => {
    playTap();
    try {
      await navigator.clipboard.writeText(tryIt.prompt);
    } catch {
      // Fallback for older browsers / non-secure contexts
      const ta = document.createElement("textarea");
      ta.value = tryIt.prompt;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleTried = () => {
    if (isTried || markTried.isPending) return;
    markTried.mutate(
      { lessonId },
      {
        onSuccess: () => {
          playCorrect();
          setLocalTried(true);
          if (courseSlug) {
            queryClient.invalidateQueries({ queryKey: getGetCourseQueryKey(courseSlug) });
          }
        },
      },
    );
  };

  return (
    <div className="os-card p-6 sm:p-8 rounded-2xl border-[hsl(var(--accent))/0.3] bg-[hsl(var(--accent))/0.03]">
      <div className="flex items-center gap-3 mb-4">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-white shrink-0"
          style={{ backgroundColor: accent || "hsl(var(--accent))" }}
        >
          <Rocket className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-lg font-bold font-heading text-[hsl(var(--text))]">Try it for real</h3>
          <p className="text-xs text-[hsl(var(--text-muted))]">
            Practice beats theory — run this in {tryIt.tool} right now.
          </p>
        </div>
      </div>

      <div className="relative mb-3 rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--surface-2))] p-4">
        <p className="text-sm text-[hsl(var(--text))] whitespace-pre-wrap pr-2 font-mono leading-relaxed">
          {tryIt.prompt}
        </p>
      </div>

      {tryIt.note && (
        <p className="text-xs text-[hsl(var(--text-muted))] mb-4">💡 {tryIt.note}</p>
      )}

      <div className="flex flex-wrap items-center gap-2">
        <Button
          variant="outline"
          onClick={copyPrompt}
          className="rounded-full"
          aria-live="polite"
        >
          {copied ? (
            <><Check className="w-4 h-4 mr-1.5 text-emerald-500" /> Copied!</>
          ) : (
            <><Copy className="w-4 h-4 mr-1.5" /> Copy prompt</>
          )}
        </Button>
        <Button
          variant="outline"
          asChild
          className="rounded-full"
        >
          <a href={tryIt.url} target="_blank" rel="noopener noreferrer" onClick={() => playTap()}>
            <ExternalLink className="w-4 h-4 mr-1.5" /> Open {tryIt.tool}
          </a>
        </Button>
        {isTried ? (
          <span className="inline-flex items-center gap-1.5 px-4 h-9 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-sm font-semibold text-emerald-600 dark:text-emerald-400">
            <CheckCircle2 className="w-4 h-4" /> You tried it!
          </span>
        ) : (
          <Button
            onClick={handleTried}
            disabled={markTried.isPending}
            className="rounded-full bg-[hsl(var(--accent))] hover:bg-[hsl(var(--accent))/0.9] text-white"
          >
            {markTried.isPending ? (
              <span className="flex items-center gap-2">
                <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                Saving...
              </span>
            ) : (
              <><CheckCircle2 className="w-4 h-4 mr-1.5" /> I tried it</>
            )}
          </Button>
        )}
      </div>
    </div>
  );
}

// ---------- Quiz card ----------

function QuizCard({
  step,
  stepIdx,
  selected,
  status,
  onSelect,
  onCheck,
  lessonId,
  mode,
}: {
  step: CourseLessonDetail["steps"][number];
  stepIdx: number;
  selected: number | undefined;
  status: 'idle' | 'correct' | 'incorrect';
  onSelect: (stepIdx: number, optIdx: number) => void;
  onCheck: (stepIdx: number) => void;
  lessonId: number;
  mode: "listen" | "read";
}) {
  const q = step.question!;
  return (
    <div className="os-card p-6 sm:p-8 rounded-2xl border-[hsl(var(--accent))/0.3] bg-[hsl(var(--accent))/0.02]">
      <div className="text-3xl mb-4" aria-hidden="true">🎯</div>
      <h3 className="text-lg font-semibold text-[hsl(var(--text))] mb-4">
        {q.text}
        <QuizNarration lessonId={lessonId} text={q.text} mode={mode} />
      </h3>
      <div className="space-y-3 mb-6">
        {q.options.map((opt, oIdx) => {
          const isSelected = selected === oIdx;
          const isCorrectAnswer = oIdx === q.correctIndex;

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
              onClick={() => onSelect(stepIdx, oIdx)}
              disabled={status === 'correct'}
              className={btnClass}
            >
              {opt}
            </button>
          );
        })}
      </div>

      {status === 'incorrect' && (
        <div className="mb-4 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 text-sm">
          <p className="font-semibold mb-1">Not quite.</p>
          <p>{q.explanation}</p>
        </div>
      )}

      {status === 'correct' && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-4 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-sm"
        >
          <p className="font-semibold mb-1 flex items-center gap-2"><Star className="w-4 h-4" /> Correct!</p>
          <p>{q.explanation}</p>
        </motion.div>
      )}

      {status !== 'correct' && (
        <Button
          onClick={() => onCheck(stepIdx)}
          disabled={selected === undefined}
          className="w-full h-12 bg-[hsl(var(--accent))] hover:bg-[hsl(var(--accent))/0.9] text-white"
        >
          Check Answer
        </Button>
      )}
    </div>
  );
}
