import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Sparkles, Lightbulb, Volume2, VolumeX, Check, Delete } from "lucide-react";
import { useGetChatFeedback, type CourseLessonDetail } from "@workspace/api-client-react";
import {
  playTap,
  playCorrect,
  playWrong,
  playMessage,
  playComplete,
  startAmbient,
  stopAmbient,
  isMuted,
  setMuted,
} from "../lib/chatSounds";

type ChatTurn = NonNullable<CourseLessonDetail["steps"][number]["chat"]>[number];

type Bubble =
  | { from: "bot"; text: string; turnIdx: number }
  | { from: "user"; text: string; turnIdx: number }
  | { from: "feedback"; text: string; good: boolean; turnIdx: number }
  | { from: "video"; url: string; caption?: string; turnIdx: number };

function shuffle<T>(arr: T[], seed: number): T[] {
  const out = [...arr];
  let s = seed + arr.length * 7 + 13;
  for (let i = out.length - 1; i > 0; i--) {
    s = (s * 9301 + 49297) % 233280;
    const j = s % (i + 1);
    [out[i], out[j]] = [out[j], out[i]];
  }
  // Guard: never present the already-correct order for arrange-style lists
  if (out.length > 2 && out.every((v, i) => v === arr[i])) {
    [out[0], out[1]] = [out[1], out[0]];
  }
  return out;
}

export function ChatSession({
  lessonId,
  stepIdx,
  turns,
  accent,
  alreadyDone,
  onFinished,
}: {
  lessonId: number;
  stepIdx: number;
  turns: ChatTurn[];
  accent?: string;
  alreadyDone: boolean;
  onFinished: () => void;
}) {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);
  const [activeTurn, setActiveTurn] = useState(-1);
  const [typing, setTyping] = useState(false);
  const [input, setInput] = useState("");
  const [awaitingAnswer, setAwaitingAnswer] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [finished, setFinished] = useState(alreadyDone);
  const [wrongCount, setWrongCount] = useState(0);
  const [answerRevealed, setAnswerRevealed] = useState(false);
  const [muted, setMutedState] = useState(isMuted());
  // arrange state
  const [picked, setPicked] = useState<number[]>([]);
  // multi-gap fill-blank state
  const [gapPicks, setGapPicks] = useState<number[]>([]);
  // simulated video generation state
  const [generating, setGenerating] = useState(false);
  // match state
  const [leftSel, setLeftSel] = useState<number | null>(null);
  const [matched, setMatched] = useState<number[]>([]);
  const [shakeRight, setShakeRight] = useState<number | null>(null);
  const feedbackMutation = useGetChatFeedback();
  const scrollRef = useRef<HTMLDivElement>(null);
  const startedRef = useRef(false);
  const finishedRef = useRef(alreadyDone);

  const accentColor = accent || "hsl(var(--accent))";

  const staticBubbles = useMemo<Bubble[]>(() => {
    if (!alreadyDone) return [];
    const out: Bubble[] = [];
    turns.forEach((t, i) => {
      out.push({ from: "bot", text: t.bot, turnIdx: i });
      if (t.ask) {
        out.push({ from: "bot", text: t.ask, turnIdx: i });
        if (t.feedback) out.push({ from: "feedback", text: t.feedback, good: true, turnIdx: i });
      }
      if (t.video?.url) {
        out.push({ from: "video", url: t.video.url, caption: t.video.caption ?? undefined, turnIdx: i });
      }
    });
    return out;
  }, [alreadyDone, turns]);

  // Ambient background sound while the session is live
  useEffect(() => {
    if (alreadyDone || finished) return;
    if (!muted) startAmbient();
    return () => stopAmbient();
  }, [alreadyDone, finished, muted]);

  const toggleMute = () => {
    const next = !muted;
    setMuted(next);
    setMutedState(next);
    if (!next && !finished && !alreadyDone) startAmbient();
  };

  const markFinished = () => {
    if (finishedRef.current) return;
    finishedRef.current = true;
    setFinished(true);
    stopAmbient();
    playComplete();
    onFinished();
  };

  const revealTurn = (idx: number) => {
    if (idx >= turns.length) {
      markFinished();
      return;
    }
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      const t = turns[idx];
      playMessage();
      setBubbles(prev => [...prev, { from: "bot", text: t.bot, turnIdx: idx }]);
      setActiveTurn(idx);
      setShowHint(false);
      setWrongCount(0);
      setAnswerRevealed(false);
      setPicked([]);
      setGapPicks([]);
      setLeftSel(null);
      setMatched([]);
      if (t.ask) {
        setTimeout(() => {
          playMessage();
          setBubbles(prev => [...prev, { from: "bot", text: t.ask!, turnIdx: idx }]);
          setAwaitingAnswer(true);
        }, 500);
      } else if (t.video?.url) {
        setTimeout(() => playGeneration(t, idx), 500);
      } else {
        setTimeout(() => revealTurn(idx + 1), 700);
      }
    }, 700);
  };

  useEffect(() => {
    if (alreadyDone || startedRef.current) return;
    startedRef.current = true;
    revealTurn(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [alreadyDone]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [bubbles, typing]);

  const advance = () => {
    setAwaitingAnswer(false);
    setTimeout(() => revealTurn(activeTurn + 1), 600);
  };

  // Simulated "generating your clip…" animation, then the video reveal
  const playGeneration = (t: ChatTurn, turnIdx: number) => {
    if (!t.video?.url) {
      setTimeout(() => revealTurn(turnIdx + 1), 600);
      return;
    }
    const video = t.video;
    setGenerating(true);
    setTimeout(() => {
      setGenerating(false);
      playMessage();
      setBubbles(prev => [
        ...prev,
        { from: "video", url: video.url, caption: video.caption ?? undefined, turnIdx },
      ]);
      setTimeout(() => revealTurn(turnIdx + 1), 1400);
    }, 2600);
  };

  const succeed = (userText: string, t: ChatTurn) => {
    playCorrect();
    setBubbles(prev => [...prev, { from: "user", text: userText, turnIdx: activeTurn }]);
    if (t.feedback) {
      setBubbles(prev => [...prev, { from: "feedback", text: t.feedback!, good: true, turnIdx: activeTurn }]);
    }
    if (t.video?.url) {
      setAwaitingAnswer(false);
      setTimeout(() => playGeneration(t, activeTurn), 600);
    } else {
      advance();
    }
  };

  const fail = (userText: string | null, t: ChatTurn) => {
    playWrong();
    setWrongCount(c => c + 1);
    setShowHint(true);
    if (userText) {
      setBubbles(prev => [...prev, { from: "user", text: userText, turnIdx: activeTurn }]);
    }
    setBubbles(prev => [
      ...prev,
      {
        from: "feedback",
        text: t.hint ? `Not quite — here's a hint: ${t.hint}` : "Not quite — give it another try!",
        good: false,
        turnIdx: activeTurn,
      },
    ]);
  };

  const handleChoice = (optIdx: number) => {
    const t = turns[activeTurn];
    if (!t?.options) return;
    playTap();
    const isCorrect = t.correctIndex == null || optIdx === t.correctIndex;
    if (isCorrect) succeed(t.options[optIdx], t);
    else fail(t.options[optIdx], t);
  };

  const handleFillBlank = (optIdx: number) => {
    const t = turns[activeTurn];
    if (!t?.options || !t.template) return;
    playTap();
    const filled = t.template.replace(/_{2,}/, t.options[optIdx]);
    const isCorrect = t.correctIndex == null || optIdx === t.correctIndex;
    if (isCorrect) succeed(filled, t);
    else fail(filled, t);
  };

  const fillGaps = (template: string, values: string[]) => {
    let i = 0;
    return template.replace(/_{2,}/g, () => values[i++] ?? "___");
  };

  const handleGapCheck = () => {
    const t = turns[activeTurn];
    if (!t?.options || !t.template || !t.gapAnswers) return;
    const chosen = gapPicks.map(i => t.options![i]);
    const filled = fillGaps(t.template, chosen);
    const correct =
      chosen.length === t.gapAnswers.length &&
      chosen.every((c, i) => c === t.gapAnswers![i]);
    if (correct) {
      succeed(filled, t);
    } else {
      fail(filled, t);
      setGapPicks([]);
    }
  };

  const handleArrangeCheck = () => {
    const t = turns[activeTurn];
    if (!t?.words) return;
    const attempt = picked.map(i => t.words![i]).join(" ");
    if (attempt === t.words.join(" ")) {
      succeed(attempt, t);
    } else {
      fail(attempt, t);
      setPicked([]);
    }
  };

  const shuffledWords = useMemo(() => {
    const t = turns[activeTurn];
    if (!t?.words) return [];
    return shuffle(t.words.map((_, i) => i), activeTurn * 31 + stepIdx);
  }, [turns, activeTurn, stepIdx]);

  const shuffledRights = useMemo(() => {
    const t = turns[activeTurn];
    if (!t?.pairs) return [];
    return shuffle(t.pairs.map((_, i) => i), activeTurn * 17 + stepIdx + 5);
  }, [turns, activeTurn, stepIdx]);

  const handleMatchRight = (rightIdx: number) => {
    const t = turns[activeTurn];
    if (!t?.pairs || leftSel == null) return;
    if (rightIdx === leftSel) {
      playCorrect();
      const nextMatched = [...matched, rightIdx];
      setMatched(nextMatched);
      setLeftSel(null);
      if (nextMatched.length === t.pairs.length) {
        setTimeout(() => {
          succeed("Matched them all! ✅", t);
        }, 350);
      }
    } else {
      playWrong();
      setWrongCount(c => c + 1);
      setShowHint(true);
      setShakeRight(rightIdx);
      setTimeout(() => setShakeRight(null), 450);
    }
  };

  const handleShowAnswer = () => {
    const t = turns[activeTurn];
    if (!t || answerRevealed) return;
    setAnswerRevealed(true);
    playMessage();
    const type: string = t.inputType ?? ((t.options?.length ?? 0) > 0 ? "choice" : "text");
    let answerText = "";
    let isMatch = false;
    if (type === "arrange" && t.words) {
      answerText = t.words.join(" ");
    } else if (type === "fill-blank" && t.template && t.gapAnswers?.length) {
      answerText = fillGaps(t.template, t.gapAnswers);
    } else if (type === "fill-blank" && t.template && t.options && t.correctIndex != null) {
      answerText = t.template.replace(/_{2,}/, t.options[t.correctIndex]);
    } else if (type === "match" && t.pairs) {
      isMatch = true;
      setMatched(t.pairs.map((_, i) => i));
      setLeftSel(null);
      answerText = t.pairs.map(p => `${p.left} → ${p.right}`).join("\n");
    } else if (t.options && t.correctIndex != null) {
      answerText = t.options[t.correctIndex];
    }
    const body = answerText
      ? `No worries — here's the answer:\n${answerText}`
      : "No worries — take another look at the hint above, then keep going!";
    setBubbles(prev => [
      ...prev,
      {
        from: "feedback",
        text: `${body}${t.feedback ? `\n\n${t.feedback}` : ""}`,
        good: true,
        turnIdx: activeTurn,
      },
    ]);
    // For match, keep the board visible briefly so learners see the pairs lock green
    if (isMatch) {
      setTimeout(() => {
        setAwaitingAnswer(false);
        if (t.video?.url) playGeneration(t, activeTurn);
        else setTimeout(() => revealTurn(activeTurn + 1), 400);
      }, 1600);
    } else {
      setAwaitingAnswer(false);
      if (t.video?.url) setTimeout(() => playGeneration(t, activeTurn), 900);
      else setTimeout(() => revealTurn(activeTurn + 1), 900);
    }
  };

  const handleSend = () => {
    const answer = input.trim();
    if (!answer || feedbackMutation.isPending) return;
    const t = turns[activeTurn];
    playTap();
    setBubbles(prev => [...prev, { from: "user", text: answer, turnIdx: activeTurn }]);
    setInput("");
    setTyping(true);
    feedbackMutation.mutate(
      { lessonId, data: { stepIdx, turnIdx: activeTurn, answer } },
      {
        onSuccess: (res) => {
          setTyping(false);
          if (res.good) playCorrect(); else playMessage();
          setBubbles(prev => [...prev, { from: "feedback", text: res.feedback, good: res.good, turnIdx: activeTurn }]);
          advance();
        },
        onError: () => {
          setTyping(false);
          playMessage();
          const fallback =
            t?.feedback ??
            "Thanks for giving it a go! Compare your answer with what we just covered and keep going.";
          setBubbles(prev => [...prev, { from: "feedback", text: fallback, good: true, turnIdx: activeTurn }]);
          advance();
        },
      },
    );
  };

  const shown = alreadyDone ? staticBubbles : bubbles;
  const currentTurn = turns[activeTurn];
  const live = !alreadyDone && awaitingAnswer && !!currentTurn?.ask;
  const kind: string = currentTurn?.inputType
    ?? ((currentTurn?.options?.length ?? 0) > 0 ? "choice" : "text");
  const showChoices = live && kind === "choice" && (currentTurn?.options?.length ?? 0) > 0;
  const showBinary = live && kind === "binary" && (currentTurn?.options?.length ?? 0) > 0;
  const isMultiGap = (currentTurn?.gapAnswers?.length ?? 0) > 0;
  const showFillBlank = live && kind === "fill-blank" && !!currentTurn?.template && (currentTurn?.options?.length ?? 0) > 0 && !isMultiGap;
  const showMultiGap = live && kind === "fill-blank" && !!currentTurn?.template && (currentTurn?.options?.length ?? 0) > 0 && isMultiGap;
  const gapCount = useMemo(
    () => (currentTurn?.template?.match(/_{2,}/g) ?? []).length,
    [currentTurn?.template],
  );
  const shuffledGapOptions = useMemo(() => {
    const t = turns[activeTurn];
    if (!t?.options || !(t.gapAnswers?.length)) return [];
    return shuffle(t.options.map((_, i) => i), activeTurn * 23 + stepIdx + 3);
  }, [turns, activeTurn, stepIdx]);
  const showArrange = live && kind === "arrange" && (currentTurn?.words?.length ?? 0) > 0;
  const showMatch = live && kind === "match" && (currentTurn?.pairs?.length ?? 0) > 0;
  const showTextInput = live && !showChoices && !showBinary && !showFillBlank && !showMultiGap && !showArrange && !showMatch;

  const hintBlock = currentTurn?.hint && live && !showTextInput && (
    <div className="px-4 pb-1">
      {showHint ? (
        <p className="text-xs text-[hsl(var(--text-muted))] flex items-start gap-1.5">
          <Lightbulb className="w-3.5 h-3.5 shrink-0 mt-0.5 text-amber-500" /> {currentTurn.hint}
        </p>
      ) : (
        <button
          onClick={() => setShowHint(true)}
          className="text-xs font-medium text-[hsl(var(--text-muted))] hover:text-[hsl(var(--accent))] flex items-center gap-1"
        >
          <Lightbulb className="w-3.5 h-3.5" /> Need a hint?
        </button>
      )}
    </div>
  );

  const showAnswerBlock = live && !showTextInput && wrongCount >= 2 && (
    <div className="px-4 pb-1">
      <button
        onClick={handleShowAnswer}
        className="text-xs font-semibold px-3 py-1.5 rounded-full border border-amber-500/40 bg-amber-500/10 text-amber-600 hover:bg-amber-500/20 transition-colors flex items-center gap-1.5"
      >
        <Lightbulb className="w-3.5 h-3.5" /> Stuck? Show me the answer
      </button>
    </div>
  );

  return (
    <div className="os-card rounded-2xl overflow-hidden flex flex-col" style={{ minHeight: 380 }}>
      <div className="flex items-center gap-3 px-5 py-3 border-b border-[hsl(var(--border))] bg-[hsl(var(--surface-2))]">
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center text-white shrink-0"
          style={{ backgroundColor: accentColor }}
        >
          <Sparkles className="w-4 h-4" />
        </div>
        <div className="flex-1">
          <p className="font-semibold text-sm leading-tight">Nova · Practice Chat</p>
          <p className="text-xs text-[hsl(var(--text-muted))] leading-tight">
            {finished ? "Session complete 🎉" : "Answer to keep the conversation going"}
          </p>
        </div>
        <button
          onClick={toggleMute}
          className="w-8 h-8 rounded-lg flex items-center justify-center text-[hsl(var(--text-muted))] hover:text-[hsl(var(--text))] hover:bg-[hsl(var(--surface))] transition-colors"
          aria-label={muted ? "Unmute sounds" : "Mute sounds"}
          title={muted ? "Unmute sounds" : "Mute sounds"}
        >
          {muted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
        </button>
      </div>

      <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3" style={{ maxHeight: 420 }}>
        <AnimatePresence initial={false}>
          {shown.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className={`flex ${b.from === "user" ? "justify-end" : "justify-start"}`}
            >
              {b.from === "video" ? (
                <div className="max-w-[85%] rounded-2xl rounded-bl-md overflow-hidden border border-[hsl(var(--border))] bg-[hsl(var(--surface-2))]">
                  <video
                    src={b.url}
                    controls
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full block"
                    style={{ maxHeight: 260 }}
                  />
                  {b.caption && (
                    <p className="text-xs text-[hsl(var(--text-muted))] px-3 py-2">{b.caption}</p>
                  )}
                </div>
              ) : (
              <div
                className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap ${
                  b.from === "user"
                    ? "text-white rounded-br-md"
                    : b.from === "feedback"
                      ? b.good
                        ? "bg-emerald-500/10 border border-emerald-500/30 rounded-bl-md"
                        : "bg-amber-500/10 border border-amber-500/30 rounded-bl-md"
                      : "bg-[hsl(var(--surface-2))] border border-[hsl(var(--border))] rounded-bl-md"
                }`}
                style={b.from === "user" ? { backgroundColor: accentColor } : undefined}
              >
                {b.text}
              </div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>

        {generating && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-start"
          >
            <div className="px-4 py-3 rounded-2xl rounded-bl-md bg-[hsl(var(--surface-2))] border border-[hsl(var(--border))] flex items-center gap-2.5">
              <motion.span
                animate={{ rotate: 360 }}
                transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
                className="inline-flex"
              >
                <Sparkles className="w-4 h-4" style={{ color: accentColor }} />
              </motion.span>
              <span className="text-sm text-[hsl(var(--text-muted))]">Generating your clip…</span>
              <span className="flex gap-1">
                {[0, 1, 2].map(i => (
                  <motion.span
                    key={i}
                    className="w-1 h-1 rounded-full bg-[hsl(var(--text-muted))]"
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 1, repeat: Infinity, delay: i * 0.18 }}
                  />
                ))}
              </span>
            </div>
          </motion.div>
        )}

        {typing && (
          <div className="flex justify-start">
            <div className="px-4 py-3 rounded-2xl rounded-bl-md bg-[hsl(var(--surface-2))] border border-[hsl(var(--border))] flex gap-1.5">
              {[0, 1, 2].map(i => (
                <motion.span
                  key={i}
                  className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--text-muted))]"
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 1, repeat: Infinity, delay: i * 0.18 }}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {hintBlock}
      {showAnswerBlock}

      {showChoices && (
        <div className="px-4 pb-4 pt-1 flex flex-wrap gap-2">
          {currentTurn!.options!.map((opt, i) => (
            <button
              key={`${activeTurn}-${i}`}
              onClick={() => handleChoice(i)}
              className="px-4 py-2 rounded-full text-sm font-medium border border-[hsl(var(--border))] bg-[hsl(var(--surface-2))] hover:border-[hsl(var(--accent))] hover:text-[hsl(var(--accent))] transition-colors text-left"
            >
              {opt}
            </button>
          ))}
        </div>
      )}

      {showBinary && (
        <div className="px-4 pb-4 pt-1">
          <div
            className="rounded-xl p-4 mb-3 text-sm font-medium text-white text-center"
            style={{ backgroundColor: accentColor }}
          >
            <div className="bg-white text-[hsl(var(--text))] rounded-lg border-2 border-dashed border-white/60 px-4 py-3">
              {currentTurn!.ask}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {currentTurn!.options!.map((opt, i) => (
              <button
                key={`${activeTurn}-bin-${i}`}
                onClick={() => handleChoice(i)}
                className="py-3 rounded-xl text-sm font-semibold border-2 border-[hsl(var(--border))] bg-[hsl(var(--surface))] hover:border-[hsl(var(--accent))] hover:text-[hsl(var(--accent))] transition-colors"
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      )}

      {showFillBlank && (
        <div className="px-4 pb-4 pt-1">
          <p className="text-sm mb-3 px-4 py-3 rounded-xl bg-[hsl(var(--surface-2))] border border-[hsl(var(--border))]">
            {currentTurn!.template!.split(/_{2,}/).map((part, i, arr) => (
              <span key={i}>
                {part}
                {i < arr.length - 1 && (
                  <span
                    className="inline-block min-w-[70px] mx-1 border-b-2 align-middle"
                    style={{ borderColor: accentColor }}
                  >
                    &nbsp;
                  </span>
                )}
              </span>
            ))}
          </p>
          <div className="flex flex-wrap gap-2">
            {currentTurn!.options!.map((opt, i) => (
              <button
                key={`${activeTurn}-fb-${i}`}
                onClick={() => handleFillBlank(i)}
                className="px-4 py-2 rounded-xl text-sm font-semibold border-2 border-[hsl(var(--border))] bg-[hsl(var(--surface))] shadow-sm hover:border-[hsl(var(--accent))] hover:text-[hsl(var(--accent))] transition-colors"
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      )}

      {showMultiGap && (
        <div className="px-4 pb-4 pt-1">
          <p className="text-sm mb-3 px-4 py-3 rounded-xl bg-[hsl(var(--surface-2))] border border-[hsl(var(--border))]">
            {currentTurn!.template!.split(/_{2,}/).map((part, i, arr) => (
              <span key={i}>
                {part}
                {i < arr.length - 1 &&
                  (gapPicks[i] != null ? (
                    <button
                      onClick={() => {
                        playTap();
                        setGapPicks(prev => prev.filter((_, p) => p !== i));
                      }}
                      className="inline-block mx-1 px-2.5 py-0.5 rounded-lg text-sm font-semibold text-white align-middle"
                      style={{ backgroundColor: accentColor }}
                    >
                      {currentTurn!.options![gapPicks[i]]}
                    </button>
                  ) : (
                    <span
                      className="inline-block min-w-[80px] mx-1 px-2 py-0.5 rounded-lg border-2 border-dashed align-middle text-xs text-[hsl(var(--text-muted))] text-center"
                      style={{ borderColor: accentColor }}
                    >
                      {i === gapPicks.length ? "tap a chip" : "\u00A0"}
                    </span>
                  ))}
              </span>
            ))}
          </p>
          <div className="flex flex-wrap gap-2 mb-3">
            {shuffledGapOptions.map(oi => (
              <button
                key={`${activeTurn}-gap-${oi}`}
                disabled={gapPicks.includes(oi) || gapPicks.length >= gapCount}
                onClick={() => { playTap(); setGapPicks(prev => [...prev, oi]); }}
                className="px-4 py-2 rounded-xl text-sm font-semibold border-2 border-[hsl(var(--border))] bg-[hsl(var(--surface))] shadow-sm disabled:opacity-30 hover:border-[hsl(var(--accent))] hover:text-[hsl(var(--accent))] transition-colors"
              >
                {currentTurn!.options![oi]}
              </button>
            ))}
          </div>
          <div className="flex gap-2">
            <button
              onClick={handleGapCheck}
              disabled={gapPicks.length !== gapCount}
              className="flex-1 py-2.5 rounded-xl text-sm font-semibold text-white disabled:opacity-40 flex items-center justify-center gap-1.5 transition-opacity"
              style={{ backgroundColor: accentColor }}
            >
              <Check className="w-4 h-4" /> Check
            </button>
            {gapPicks.length > 0 && (
              <button
                onClick={() => { playTap(); setGapPicks(prev => prev.slice(0, -1)); }}
                className="w-11 rounded-xl border-2 border-[hsl(var(--border))] flex items-center justify-center text-[hsl(var(--text-muted))] hover:text-[hsl(var(--text))]"
                aria-label="Remove last chip"
              >
                <Delete className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      )}

      {showArrange && (
        <div className="px-4 pb-4 pt-1">
          <div className="min-h-[52px] mb-3 px-3 py-2.5 rounded-xl bg-[hsl(var(--surface-2))] border border-dashed border-[hsl(var(--border))] flex flex-wrap gap-2 items-center">
            {picked.length === 0 && (
              <span className="text-xs text-[hsl(var(--text-muted))]">Tap the words in order…</span>
            )}
            {picked.map((wi, pos) => (
              <button
                key={`picked-${pos}`}
                onClick={() => {
                  playTap();
                  setPicked(prev => prev.filter((_, p) => p !== pos));
                }}
                className="px-3 py-1.5 rounded-lg text-sm font-medium text-white"
                style={{ backgroundColor: accentColor }}
              >
                {currentTurn!.words![wi]}
              </button>
            ))}
            {picked.length > 0 && (
              <button
                onClick={() => { playTap(); setPicked(prev => prev.slice(0, -1)); }}
                className="ml-auto w-8 h-8 rounded-lg flex items-center justify-center text-[hsl(var(--text-muted))] hover:text-[hsl(var(--text))]"
                aria-label="Remove last word"
              >
                <Delete className="w-4 h-4" />
              </button>
            )}
          </div>
          <div className="flex flex-wrap gap-2 mb-3">
            {shuffledWords.map(wi => (
              <button
                key={`w-${wi}`}
                disabled={picked.includes(wi)}
                onClick={() => { playTap(); setPicked(prev => [...prev, wi]); }}
                className="px-3 py-1.5 rounded-lg text-sm font-medium border-2 border-[hsl(var(--border))] bg-[hsl(var(--surface))] shadow-sm disabled:opacity-30 hover:border-[hsl(var(--accent))] transition-colors"
              >
                {currentTurn!.words![wi]}
              </button>
            ))}
          </div>
          <button
            onClick={handleArrangeCheck}
            disabled={picked.length !== (currentTurn?.words?.length ?? 0)}
            className="w-full py-2.5 rounded-xl text-sm font-semibold text-white disabled:opacity-40 flex items-center justify-center gap-1.5 transition-opacity"
            style={{ backgroundColor: accentColor }}
          >
            <Check className="w-4 h-4" /> Check
          </button>
        </div>
      )}

      {showMatch && (
        <div className="px-4 pb-4 pt-1">
          <div className="grid grid-cols-2 gap-2">
            <div className="space-y-2">
              {currentTurn!.pairs!.map((p, i) => (
                <button
                  key={`l-${i}`}
                  disabled={matched.includes(i)}
                  onClick={() => { playTap(); setLeftSel(i); }}
                  className={`w-full px-3 py-2.5 rounded-xl text-sm font-medium border-2 text-left transition-colors ${
                    matched.includes(i)
                      ? "border-emerald-500/50 bg-emerald-500/10 opacity-60"
                      : leftSel === i
                        ? "text-white"
                        : "border-[hsl(var(--border))] bg-[hsl(var(--surface))] hover:border-[hsl(var(--accent))]"
                  }`}
                  style={leftSel === i && !matched.includes(i) ? { backgroundColor: accentColor, borderColor: accentColor } : undefined}
                >
                  {p.left}
                </button>
              ))}
            </div>
            <div className="space-y-2">
              {shuffledRights.map(ri => (
                <motion.button
                  key={`r-${ri}`}
                  animate={shakeRight === ri ? { x: [0, -6, 6, -4, 4, 0] } : {}}
                  transition={{ duration: 0.4 }}
                  disabled={matched.includes(ri)}
                  onClick={() => handleMatchRight(ri)}
                  className={`w-full px-3 py-2.5 rounded-xl text-sm font-medium border-2 text-left transition-colors ${
                    matched.includes(ri)
                      ? "border-emerald-500/50 bg-emerald-500/10 opacity-60"
                      : "border-[hsl(var(--border))] bg-[hsl(var(--surface))] hover:border-[hsl(var(--accent))]"
                  }`}
                >
                  {currentTurn!.pairs![ri].right}
                </motion.button>
              ))}
            </div>
          </div>
          <p className="text-xs text-[hsl(var(--text-muted))] mt-2">
            Tap an item on the left, then its match on the right.
          </p>
        </div>
      )}

      {showTextInput && (
        <div className="px-4 pb-4 pt-1">
          {currentTurn?.hint && (
            <div className="mb-2">
              {showHint ? (
                <p className="text-xs text-[hsl(var(--text-muted))] flex items-start gap-1.5">
                  <Lightbulb className="w-3.5 h-3.5 shrink-0 mt-0.5 text-amber-500" /> {currentTurn.hint}
                </p>
              ) : (
                <button
                  onClick={() => setShowHint(true)}
                  className="text-xs font-medium text-[hsl(var(--text-muted))] hover:text-[hsl(var(--accent))] flex items-center gap-1"
                >
                  <Lightbulb className="w-3.5 h-3.5" /> Need a hint?
                </button>
              )}
            </div>
          )}
          <div className="flex gap-2">
            <textarea
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSend();
                }
              }}
              placeholder="Type your answer..."
              rows={2}
              className="flex-1 resize-none rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--surface))] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent))]"
              disabled={feedbackMutation.isPending}
            />
            <button
              onClick={handleSend}
              disabled={!input.trim() || feedbackMutation.isPending}
              className="self-end w-10 h-10 rounded-xl flex items-center justify-center text-white disabled:opacity-40 transition-opacity"
              style={{ backgroundColor: accentColor }}
              aria-label="Send answer"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {finished && !alreadyDone && (
        <div className="px-4 pb-4">
          <p className="text-sm font-semibold text-emerald-500 flex items-center gap-1.5">
            <Sparkles className="w-4 h-4" /> Great session! Hit Continue to keep going.
          </p>
        </div>
      )}
    </div>
  );
}
