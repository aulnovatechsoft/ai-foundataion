import { useState, useRef, useEffect, useMemo, useCallback } from "react";
import { useGenerateCardAudio } from "@workspace/api-client-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  Pause,
  RotateCcw,
  RotateCw,
  Loader2,
  Check,
  SkipForward,
} from "lucide-react";

const SPEEDS = [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2];

// ---------- Sentence + block extraction ----------

export type SentenceRef = { text: string; gIdx: number };

export type CardBlock =
  | { type: "rich"; html: string }
  | { type: "text"; tag: string; sentences: SentenceRef[] }
  | { type: "list"; tag: "ul" | "ol"; items: SentenceRef[][] };

const SENTENCE_RE = /[^.!?]+[.!?]+["')\]]*\s*|[^.!?]+$/g;

function splitSentences(text: string): string[] {
  const clean = text.replace(/\s+/g, " ").trim();
  if (!clean) return [];
  return (clean.match(SENTENCE_RE) ?? [clean])
    .map((s) => s.trim())
    .filter(Boolean);
}

export function parseCardBlocks(html: string): {
  blocks: CardBlock[];
  sentences: string[];
} {
  const blocks: CardBlock[] = [];
  const sentences: string[] = [];
  if (typeof DOMParser === "undefined") {
    return { blocks: [{ type: "rich", html }], sentences };
  }
  const doc = new DOMParser().parseFromString(`<div>${html}</div>`, "text/html");
  const root = doc.body.firstElementChild;
  if (!root) return { blocks: [{ type: "rich", html }], sentences };

  const pushText = (tag: string, text: string) => {
    const parts = splitSentences(text);
    if (parts.length === 0) return;
    const refs = parts.map((t) => {
      const gIdx = sentences.length;
      sentences.push(t);
      return { text: t, gIdx };
    });
    blocks.push({ type: "text", tag, sentences: refs });
  };

  Array.from(root.childNodes).forEach((node) => {
    if (node.nodeType === Node.TEXT_NODE) {
      const text = node.textContent ?? "";
      if (text.trim()) pushText("p", text);
      return;
    }
    if (node.nodeType !== Node.ELEMENT_NODE) return;
    const el = node as Element;
    const tag = el.tagName.toLowerCase();

    if (["pre", "table", "figure", "img"].includes(tag)) {
      blocks.push({ type: "rich", html: el.outerHTML });
      return;
    }
    if (tag === "ul" || tag === "ol") {
      const items: SentenceRef[][] = [];
      Array.from(el.querySelectorAll(":scope > li")).forEach((li) => {
        const parts = splitSentences(li.textContent ?? "");
        if (parts.length === 0) return;
        items.push(
          parts.map((t) => {
            const gIdx = sentences.length;
            sentences.push(t);
            return { text: t, gIdx };
          }),
        );
      });
      if (items.length > 0) blocks.push({ type: "list", tag, items });
      return;
    }
    pushText(/^h[1-6]$/.test(tag) ? tag : tag === "blockquote" ? "blockquote" : "p", el.textContent ?? "");
  });

  return { blocks, sentences };
}

// ---------- Synced card narration ----------

type Timing = { id: number; text: string; startTime: number; endTime: number };

function formatTime(sec: number) {
  if (!isFinite(sec) || sec < 0) return "0:00";
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export function CardNarration({
  lessonId,
  html,
  mode,
  isDone,
  onNarrationComplete,
}: {
  lessonId: number;
  html: string;
  mode: "listen" | "read";
  isDone: boolean;
  onNarrationComplete: () => void;
}) {
  const { blocks, sentences } = useMemo(() => parseCardBlocks(html), [html]);
  const generate = useGenerateCardAudio();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const sentenceRefs = useRef<Map<number, HTMLElement>>(new Map());
  const playedRef = useRef(0);
  const lastTimeRef = useRef(0);
  const completedRef = useRef(isDone);

  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [timings, setTimings] = useState<Timing[]>([]);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isBuffering, setIsBuffering] = useState(false);
  const [finished, setFinished] = useState(isDone);
  const [failed, setFailed] = useState(false);
  const [speedMenuOpen, setSpeedMenuOpen] = useState(false);
  const [speed, setSpeed] = useState(() => {
    const saved = Number(localStorage.getItem("lesson-audio-speed"));
    return SPEEDS.includes(saved) ? saved : 1;
  });
  const speedMenuRef = useRef<HTMLDivElement | null>(null);

  const hasNarration = sentences.length > 0;

  const markComplete = useCallback(() => {
    if (completedRef.current) return;
    completedRef.current = true;
    onNarrationComplete();
  }, [onNarrationComplete]);

  // Cards with nothing to narrate are complete immediately
  useEffect(() => {
    if (!hasNarration) markComplete();
  }, [hasNarration, markComplete]);

  // Fetch + autoplay in listen mode
  const requestedRef = useRef(false);
  const fetchAudio = useCallback(() => {
    if (requestedRef.current || !hasNarration) return;
    requestedRef.current = true;
    setFailed(false);
    generate.mutate(
      { lessonId, data: { sentences } },
      {
        onSuccess: (res) => {
          setTimings(res.sentences);
          setDuration(res.durationSec);
          setAudioUrl(res.audioUrl);
        },
        onError: () => {
          requestedRef.current = false;
          setFailed(true);
          // Never trap the learner behind a failed narration
          markComplete();
        },
      },
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasNarration, lessonId, sentences, markComplete]);

  useEffect(() => {
    if (mode === "listen" && hasNarration && !isDone) fetchAudio();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode]);

  // Stop audio on unmount (card change)
  useEffect(() => {
    return () => {
      audioRef.current?.pause();
    };
  }, []);

  // Close speed menu on outside click / Escape
  useEffect(() => {
    if (!speedMenuOpen) return;
    const onPointerDown = (e: PointerEvent) => {
      if (speedMenuRef.current && !speedMenuRef.current.contains(e.target as Node)) {
        setSpeedMenuOpen(false);
      }
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSpeedMenuOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [speedMenuOpen]);

  // Active sentence from current time
  const activeIdx = useMemo(() => {
    if (timings.length === 0) return -1;
    if (finished && !isPlaying && currentTime === 0) return -1;
    for (let i = timings.length - 1; i >= 0; i--) {
      if (currentTime >= timings[i].startTime) return i;
    }
    return -1;
  }, [currentTime, timings, finished, isPlaying]);

  // Auto-scroll the active sentence into view
  useEffect(() => {
    if (activeIdx < 0 || !isPlaying) return;
    const el = sentenceRefs.current.get(activeIdx);
    el?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, [activeIdx, isPlaying]);

  const handleTimeUpdate = () => {
    const audio = audioRef.current;
    if (!audio) return;
    const t = audio.currentTime;
    const delta = t - lastTimeRef.current;
    // Only count genuine playback (not seeks) toward the 90% completion rule
    if (delta > 0 && delta < 2) playedRef.current += delta;
    lastTimeRef.current = t;
    setCurrentTime(t);
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setIsBuffering(false);
    setFinished(true);
    // Anti-cheat: seeking to the end doesn't count unless >=90% was genuinely played
    const audio = audioRef.current;
    const dur = (audio && audio.duration) || duration;
    if (dur > 0 && playedRef.current < dur * 0.9) {
      // Reset for a genuine replay
      if (audio) audio.currentTime = 0;
      lastTimeRef.current = 0;
      setFinished(false);
      return;
    }
    markComplete();
  };

  const togglePlay = () => {
    if (!audioUrl) {
      fetchAudio();
      return;
    }
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) audio.pause();
    else {
      if (finished && audio.currentTime >= (audio.duration || duration) - 0.2) {
        audio.currentTime = 0;
        lastTimeRef.current = 0;
      }
      audio.play().catch(() => {});
    }
  };

  const skip = (delta: number) => {
    const audio = audioRef.current;
    if (!audio) return;
    const target = Math.min(Math.max(0, audio.currentTime + delta), audio.duration || duration);
    lastTimeRef.current = target;
    audio.currentTime = target;
    setCurrentTime(target);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    const t = Number(e.target.value);
    lastTimeRef.current = t;
    setCurrentTime(t);
    if (audio) audio.currentTime = t;
  };

  const selectSpeed = (s: number) => {
    setSpeed(s);
    setSpeedMenuOpen(false);
    localStorage.setItem("lesson-audio-speed", String(s));
    if (audioRef.current) audioRef.current.playbackRate = s;
  };

  const remaining = Math.max(0, duration - currentTime);
  const progressPct = duration > 0 ? (currentTime / duration) * 100 : 0;
  const isLoadingAudio = generate.isPending;

  const renderSentence = (ref: SentenceRef, key: string) => {
    const state =
      activeIdx === ref.gIdx
        ? "sentence-active"
        : activeIdx > ref.gIdx
          ? "sentence-past"
          : "";
    return (
      <span
        key={key}
        ref={(el) => {
          if (el) sentenceRefs.current.set(ref.gIdx, el);
          else sentenceRefs.current.delete(ref.gIdx);
        }}
        className={`sentence ${state}`}
      >
        {ref.text}{" "}
      </span>
    );
  };

  const renderBlock = (block: CardBlock, i: number) => {
    if (block.type === "rich") {
      return <div key={i} dangerouslySetInnerHTML={{ __html: block.html }} />;
    }
    if (block.type === "list") {
      const List = block.tag as "ul" | "ol";
      return (
        <List key={i}>
          {block.items.map((item, li) => (
            <li key={li}>{item.map((s, si) => renderSentence(s, `${i}-${li}-${si}`))}</li>
          ))}
        </List>
      );
    }
    const Tag = (/^h[1-6]$|^blockquote$/.test(block.tag) ? block.tag : "p") as any;
    return (
      <Tag key={i}>
        {block.sentences.map((s, si) => renderSentence(s, `${i}-${si}`))}
      </Tag>
    );
  };

  return (
    <div>
      {/* Transcript with sentence highlighting */}
      <div className="lesson-content prose-sm max-w-none mb-5">
        {blocks.map(renderBlock)}
      </div>

      {/* Inline narration bar */}
      {hasNarration && (mode === "listen" || audioUrl || isLoadingAudio) && (
        <div className="rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--surface-2))] p-3">
          <div className="flex items-center gap-2">
            <button
              onClick={() => skip(-10)}
              disabled={!audioUrl}
              aria-label="Rewind 10 seconds"
              className="w-9 h-9 rounded-full flex items-center justify-center text-[hsl(var(--text))] hover:bg-[hsl(var(--surface))] active:scale-90 transition-all relative disabled:opacity-30"
            >
              <RotateCcw className="w-5 h-5" />
              <span className="absolute text-[7px] font-bold mt-0.5">10</span>
            </button>

            <motion.button
              whileTap={{ scale: 0.92 }}
              onClick={togglePlay}
              disabled={isLoadingAudio}
              aria-label={isPlaying ? "Pause narration" : "Play narration"}
              className="relative w-11 h-11 rounded-full bg-[hsl(var(--accent))] text-white shadow-md shadow-[hsl(var(--accent))/0.3] flex items-center justify-center hover:brightness-110 transition-all disabled:opacity-70 shrink-0"
            >
              {isLoadingAudio || isBuffering ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : isPlaying ? (
                <Pause className="w-5 h-5 fill-current" />
              ) : finished ? (
                <RotateCcw className="w-5 h-5" />
              ) : (
                <Play className="w-5 h-5 ml-0.5 fill-current" />
              )}
            </motion.button>

            <button
              onClick={() => skip(10)}
              disabled={!audioUrl}
              aria-label="Forward 10 seconds"
              className="w-9 h-9 rounded-full flex items-center justify-center text-[hsl(var(--text))] hover:bg-[hsl(var(--surface))] active:scale-90 transition-all relative disabled:opacity-30"
            >
              <RotateCw className="w-5 h-5" />
              <span className="absolute text-[7px] font-bold mt-0.5">10</span>
            </button>

            {/* Seek */}
            <div className="flex-1 min-w-0 mx-1">
              <input
                type="range"
                min={0}
                max={duration || 0}
                step={0.1}
                value={currentTime}
                onChange={handleSeek}
                disabled={!audioUrl}
                aria-label="Narration progress"
                className="audio-seek w-full h-1.5 rounded-full appearance-none cursor-pointer disabled:opacity-40"
                style={{
                  background: `linear-gradient(to right, hsl(var(--accent)) ${progressPct}%, hsl(var(--border)) ${progressPct}%)`,
                }}
              />
            </div>

            {/* Remaining / finished */}
            <div className="text-[11px] font-semibold tabular-nums text-[hsl(var(--text-muted))] w-14 text-right shrink-0">
              <AnimatePresence mode="wait" initial={false}>
                {finished && !isPlaying ? (
                  <motion.span
                    key="done"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="inline-flex items-center gap-1 text-emerald-500"
                  >
                    <Check className="w-3.5 h-3.5" /> Done
                  </motion.span>
                ) : (
                  <motion.span key="time" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    {isLoadingAudio ? "..." : `-${formatTime(remaining)}`}
                  </motion.span>
                )}
              </AnimatePresence>
            </div>

            {/* Speed */}
            <div className="relative shrink-0" ref={speedMenuRef}>
              <button
                onClick={() => setSpeedMenuOpen((o) => !o)}
                disabled={!audioUrl}
                aria-label="Playback speed"
                aria-haspopup="menu"
                aria-expanded={speedMenuOpen}
                className="px-2 h-8 rounded-full text-[11px] font-bold border border-[hsl(var(--border))] bg-[hsl(var(--surface))] text-[hsl(var(--text))] hover:border-[hsl(var(--accent))] hover:text-[hsl(var(--accent))] transition-colors min-w-[42px] disabled:opacity-40"
              >
                {speed}x
              </button>
              <AnimatePresence>
                {speedMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -6, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -6, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 bottom-10 z-20 w-24 rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--surface))] shadow-xl p-1"
                  >
                    {SPEEDS.map((s) => (
                      <button
                        key={s}
                        onClick={() => selectSpeed(s)}
                        className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-[11px] font-semibold transition-colors ${
                          s === speed
                            ? "bg-[hsl(var(--accent))/0.12] text-[hsl(var(--accent))]"
                            : "text-[hsl(var(--text))] hover:bg-[hsl(var(--surface-2))]"
                        }`}
                      >
                        {s}x {s === speed && <Check className="w-3 h-3" />}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Skip narration */}
          {mode === "listen" && !finished && !completedRef.current && (
            <div className="mt-1.5 flex justify-end">
              <button
                onClick={() => {
                  audioRef.current?.pause();
                  setFinished(true);
                  markComplete();
                }}
                className="inline-flex items-center gap-1 text-[11px] font-semibold text-[hsl(var(--text-muted))] hover:text-[hsl(var(--text))] transition-colors"
              >
                <SkipForward className="w-3 h-3" /> Skip narration
              </button>
            </div>
          )}

          {failed && (
            <p className="mt-2 text-[11px] text-amber-500">
              Narration unavailable right now — you can keep learning and try again later.
            </p>
          )}
        </div>
      )}

      {audioUrl && (
        <audio
          ref={audioRef}
          src={audioUrl}
          preload="auto"
          autoPlay={mode === "listen" && !isDone}
          onPlay={() => setIsPlaying(true)}
          onPause={() => {
            setIsPlaying(false);
            setIsBuffering(false);
          }}
          onWaiting={() => setIsBuffering(true)}
          onPlaying={() => setIsBuffering(false)}
          onCanPlay={() => setIsBuffering(false)}
          onLoadedMetadata={() => {
            const audio = audioRef.current;
            if (!audio) return;
            if (audio.duration && isFinite(audio.duration)) setDuration(audio.duration);
            audio.playbackRate = speed;
          }}
          onTimeUpdate={handleTimeUpdate}
          onEnded={handleEnded}
          className="hidden"
        />
      )}
    </div>
  );
}

// ---------- Quiz question narration (question only, options not read) ----------

export function QuizNarration({
  lessonId,
  text,
  mode,
}: {
  lessonId: number;
  text: string;
  mode: "listen" | "read";
}) {
  const generate = useGenerateCardAudio();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const requestedRef = useRef(false);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [failed, setFailed] = useState(false);

  const question = text.replace(/\s+/g, " ").trim();

  const fetchAudio = useCallback(() => {
    if (requestedRef.current || !question) return;
    requestedRef.current = true;
    generate.mutate(
      { lessonId, data: { sentences: [question] } },
      {
        onSuccess: (res) => setAudioUrl(res.audioUrl),
        onError: () => {
          requestedRef.current = false;
          setFailed(true);
        },
      },
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lessonId, question]);

  useEffect(() => {
    if (mode === "listen") fetchAudio();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode]);

  useEffect(() => {
    return () => audioRef.current?.pause();
  }, []);

  if (mode !== "listen" || !question || failed) return null;

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) {
      fetchAudio();
      return;
    }
    if (audio.paused) {
      audio.currentTime = 0;
      void audio.play();
    } else {
      audio.pause();
    }
  };

  return (
    <span className="inline-flex align-middle ml-2">
      <button
        onClick={toggle}
        aria-label={isPlaying ? "Stop reading question" : "Read question aloud"}
        className="inline-flex items-center justify-center w-7 h-7 rounded-full border border-[hsl(var(--border))] bg-[hsl(var(--surface-2))] text-[hsl(var(--text-muted))] hover:text-[hsl(var(--accent))] hover:border-[hsl(var(--accent))/0.5] transition-colors"
      >
        {generate.isPending ? (
          <Loader2 className="w-3.5 h-3.5 animate-spin" />
        ) : isPlaying ? (
          <Pause className="w-3.5 h-3.5" />
        ) : (
          <Play className="w-3.5 h-3.5 ml-0.5" />
        )}
      </button>
      {audioUrl && (
        <audio
          ref={audioRef}
          src={audioUrl}
          preload="auto"
          autoPlay
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onEnded={() => setIsPlaying(false)}
          className="hidden"
        />
      )}
    </span>
  );
}
