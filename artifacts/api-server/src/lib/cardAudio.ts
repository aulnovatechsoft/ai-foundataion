import fs from "fs/promises";
import path from "path";
import crypto from "crypto";
import { spawn } from "child_process";
import { tmpdir } from "os";
import { parse as parseHtml } from "node-html-parser";
import { textToSpeech } from "@workspace/integrations-openai-ai-server/audio";
import { openai } from "@workspace/integrations-openai-ai-server";

export const CARD_TTS_STYLE =
  "You are an experienced online course instructor narrating a lesson. Voice: warm, friendly, professional, calm, confident, and conversational, with a neutral accent, clear pronunciation, natural breathing, and natural pauses. Expressive but never overly dramatic — avoid any robotic monotone. Slow down slightly when introducing new concepts, and add gentle emphasis to important terms, definitions, examples, and questions. Pronounce technical terms correctly and naturally (ChatGPT, OpenAI, API, JSON, JavaScript, Python, LLM, Large Language Model) — never spell out letters unnaturally. Speak like a real teacher guiding a student.";

// Bump to invalidate previously cached card audio when the voice/pipeline changes.
export const CARD_AUDIO_VERSION = "v4";

export async function concatMp3Buffers(
  parts: Buffer[],
  opts?: { normalize?: boolean },
): Promise<Buffer> {
  const id = crypto.randomBytes(8).toString("hex");
  const dir = tmpdir();
  const inputPaths: string[] = [];
  const listPath = path.join(dir, `tts-${id}-list.txt`);
  const outPath = path.join(dir, `tts-${id}-out.mp3`);
  try {
    for (let i = 0; i < parts.length; i++) {
      const p = path.join(dir, `tts-${id}-${i}.mp3`);
      await fs.writeFile(p, parts[i]);
      inputPaths.push(p);
    }
    await fs.writeFile(
      listPath,
      inputPaths.map((p) => `file '${p}'`).join("\n"),
    );
    await new Promise<void>((resolve, reject) => {
      const args = ["-f", "concat", "-safe", "0", "-i", listPath];
      if (opts?.normalize) {
        // Normalize loudness, resample to 48kHz, gentle fade-in to avoid clicks
        args.push("-af", "loudnorm=I=-16:TP=-1.5:LRA=11,afade=t=in:st=0:d=0.05");
        args.push("-ar", "48000");
        args.push("-acodec", "libmp3lame", "-b:a", "128k");
      } else {
        args.push("-acodec", "libmp3lame", "-b:a", "96k");
      }
      args.push("-y", outPath);
      const ff = spawn("ffmpeg", args);
      let stderr = "";
      ff.stderr.on("data", (d) => (stderr += d.toString()));
      ff.on("error", reject);
      ff.on("close", (code) =>
        code === 0
          ? resolve()
          : reject(new Error(`ffmpeg concat failed (${code}): ${stderr.slice(-500)}`)),
      );
    });
    return await fs.readFile(outPath);
  } finally {
    await Promise.allSettled(
      [...inputPaths, listPath, outPath].map((p) => fs.unlink(p)),
    );
  }
}

export async function probeAudioDuration(buffer: Buffer): Promise<number | null> {
  const p = path.join(tmpdir(), `tts-probe-${crypto.randomBytes(8).toString("hex")}.mp3`);
  try {
    await fs.writeFile(p, buffer);
    const out = await new Promise<string>((resolve, reject) => {
      const fp = spawn("ffprobe", [
        "-v", "error",
        "-show_entries", "format=duration",
        "-of", "csv=p=0",
        p,
      ]);
      let stdout = "";
      fp.stdout.on("data", (d) => (stdout += d.toString()));
      fp.on("error", reject);
      fp.on("close", (code) =>
        code === 0 ? resolve(stdout) : reject(new Error(`ffprobe failed (${code})`)),
      );
    });
    const sec = parseFloat(out.trim());
    return Number.isFinite(sec) && sec > 0 ? sec : null;
  } catch {
    return null;
  } finally {
    await fs.unlink(p).catch(() => {});
  }
}

// Group sentences into chunks small enough for a single TTS call while
// keeping continuous, natural prosody within each chunk.
function splitLongText(text: string, maxChars: number): string[] {
  if (text.length <= maxChars) return [text];
  const pieces: string[] = [];
  let current = "";
  for (const word of text.split(/\s+/)) {
    // Hard-split giant tokens with no whitespace
    if (word.length > maxChars) {
      if (current) {
        pieces.push(current);
        current = "";
      }
      for (let i = 0; i < word.length; i += maxChars) {
        pieces.push(word.slice(i, i + maxChars));
      }
      continue;
    }
    if (current && current.length + word.length + 1 > maxChars) {
      pieces.push(current);
      current = word;
    } else {
      current = current ? `${current} ${word}` : word;
    }
  }
  if (current) pieces.push(current);
  return pieces;
}

function chunkSentences(sentences: string[], maxChars = 2500): string[][] {
  const chunks: string[][] = [];
  let current: string[] = [];
  let len = 0;
  for (const sentence of sentences) {
    for (const s of splitLongText(sentence, maxChars)) {
      if (current.length > 0 && len + s.length + 1 > maxChars) {
        chunks.push(current);
        current = [];
        len = 0;
      }
      current.push(s);
      len += s.length + 1;
    }
  }
  if (current.length > 0) chunks.push(current);
  return chunks;
}

type WhisperWord = { word: string; start: number; end: number };

// Transcribe the stitched audio with word-level timestamps so sentence
// boundaries can be aligned against the actual narration.
async function transcribeWordTimings(buffer: Buffer): Promise<WhisperWord[]> {
  const file = new File([new Uint8Array(buffer)], "narration.mp3", {
    type: "audio/mpeg",
  });
  const resp: any = await openai.audio.transcriptions.create({
    file,
    model: "whisper-1",
    response_format: "verbose_json",
    timestamp_granularities: ["word"],
  });
  const words: WhisperWord[] = Array.isArray(resp.words)
    ? resp.words.filter(
        (w: any) =>
          typeof w.start === "number" &&
          typeof w.end === "number" &&
          w.end >= w.start,
      )
    : [];
  return words;
}

// Map source sentences onto transcribed word timings by cumulative word count.
function alignSentences(
  sentences: string[],
  words: WhisperWord[],
  totalDuration: number,
): { id: number; text: string; startTime: number; endTime: number }[] {
  const counts = sentences.map(
    (s) => s.split(/\s+/).filter(Boolean).length || 1,
  );
  const totalCount = counts.reduce((a, b) => a + b, 0);

  if (words.length >= Math.max(3, totalCount * 0.5)) {
    let consumed = 0;
    let prevEnd = 0;
    return sentences.map((text, i) => {
      consumed += counts[i];
      const endIdx = Math.min(
        words.length - 1,
        Math.round((consumed / totalCount) * words.length) - 1,
      );
      const startTime = Math.round(prevEnd * 100) / 100;
      const endTime =
        i === sentences.length - 1
          ? Math.round(totalDuration * 100) / 100
          : Math.round(words[Math.max(endIdx, 0)].end * 100) / 100;
      prevEnd = Math.max(endTime, startTime);
      return { id: i, text, startTime, endTime: Math.max(endTime, startTime) };
    });
  }

  // Fallback: proportional by character length across the real duration
  const totalChars = sentences.reduce((a, s) => a + s.length, 0) || 1;
  let cursor = 0;
  return sentences.map((text, i) => {
    const startTime = Math.round(cursor * 100) / 100;
    cursor += (text.length / totalChars) * totalDuration;
    const endTime =
      i === sentences.length - 1
        ? Math.round(totalDuration * 100) / 100
        : Math.round(cursor * 100) / 100;
    return { id: i, text, startTime, endTime };
  });
}

// ---------- Server-side sentence extraction ----------
// Mirrors the frontend's parseCardBlocks/splitSentences in CardNarration.tsx
// so pre-generated audio hashes match what the client will request.

const SENTENCE_RE = /[^.!?]+[.!?]+["')\]]*\s*|[^.!?]+$/g;

function splitSentences(text: string): string[] {
  const clean = text.replace(/\s+/g, " ").trim();
  if (!clean) return [];
  return (clean.match(SENTENCE_RE) ?? [clean])
    .map((s) => s.trim())
    .filter(Boolean);
}

export function extractCardSentences(html: string): string[] {
  const sentences: string[] = [];
  const root = parseHtml(`<div>${html}</div>`).firstChild;
  if (!root || !("childNodes" in root)) return sentences;

  for (const node of (root as any).childNodes as any[]) {
    // TextNode
    if (node.nodeType === 3) {
      const text: string = node.text ?? "";
      if (text.trim()) sentences.push(...splitSentences(text));
      continue;
    }
    if (node.nodeType !== 1) continue;
    const tag = String(node.rawTagName ?? "").toLowerCase();
    if (["pre", "table", "figure", "img"].includes(tag)) continue;
    if (tag === "ul" || tag === "ol") {
      for (const li of node.childNodes as any[]) {
        if (li.nodeType !== 1) continue;
        if (String(li.rawTagName ?? "").toLowerCase() !== "li") continue;
        sentences.push(...splitSentences(li.text ?? ""));
      }
      continue;
    }
    sentences.push(...splitSentences(node.text ?? ""));
  }
  return sentences;
}

// ---------- Generation with on-disk cache ----------

export type CardAudioPayload = {
  audioUrl: string;
  durationSec: number;
  sentences: { id: number; text: string; startTime: number; endTime: number }[];
};

const inFlight = new Map<string, Promise<CardAudioPayload>>();

/**
 * Generate (or return cached) continuous narration for a card. `rawSentences`
 * are normalized exactly as the client-facing route does, so cache hashes are
 * identical whether triggered by the client or by server-side warming.
 */
export async function ensureCardAudio(
  lessonId: number,
  rawSentences: string[],
): Promise<CardAudioPayload> {
  const sentences = rawSentences
    .map((s) => s.replace(/\s+/g, " ").trim())
    .filter(Boolean);
  if (sentences.length === 0) throw new Error("No narratable text");

  const hash = crypto
    .createHash("sha256")
    .update(CARD_AUDIO_VERSION + JSON.stringify(sentences))
    .digest("hex")
    .slice(0, 24);

  const audioDir = path.join(process.cwd(), "audio");
  await fs.mkdir(audioDir, { recursive: true });
  const mp3Name = `card-${lessonId}-${hash}.mp3`;
  const metaPath = path.join(audioDir, `card-${lessonId}-${hash}.json`);
  const mp3Path = path.join(audioDir, mp3Name);

  // Cached?
  try {
    const meta = JSON.parse(await fs.readFile(metaPath, "utf-8"));
    await fs.access(mp3Path);
    return meta as CardAudioPayload;
  } catch {
    // Not cached — generate below
  }

  // Fallback: the hash covers only the narration content (not the lesson id),
  // so audio generated under a previous lesson id (e.g. after a re-seed
  // changed ids) is still valid. Reuse any cached file with the same hash.
  try {
    const matches = (await fs.readdir(audioDir)).filter(
      (f) => f.endsWith(`-${hash}.json`) && f.startsWith("card-"),
    );
    for (const match of matches) {
      try {
        const meta = JSON.parse(
          await fs.readFile(path.join(audioDir, match), "utf-8"),
        ) as CardAudioPayload;
        if (!meta?.audioUrl || !Array.isArray(meta.sentences)) continue;
        const matchMp3 = match.replace(/\.json$/, ".mp3");
        await fs.access(path.join(audioDir, matchMp3));
        // Re-link under the current lesson id so future lookups hit directly.
        await fs.copyFile(path.join(audioDir, matchMp3), mp3Path);
        const payload: CardAudioPayload = {
          ...meta,
          audioUrl: `/api/audio/${mp3Name}`,
        };
        await fs.writeFile(metaPath, JSON.stringify(payload));
        return payload;
      } catch {
        // Corrupt/incomplete candidate — try the next one
      }
    }
  } catch {
    // Fallback lookup failed — generate below
  }

  const key = `${lessonId}:${hash}`;
  const existing = inFlight.get(key);
  if (existing) return existing;

  const job = (async (): Promise<CardAudioPayload> => {
    // Continuous narration: generate whole card in as few TTS passes as
    // possible so prosody flows naturally, instead of stitching per-sentence
    // clips.
    const chunks = chunkSentences(sentences);
    const parts = await Promise.all(
      chunks.map((chunk) =>
        textToSpeech(chunk.join(" "), "echo", "mp3", CARD_TTS_STYLE),
      ),
    );
    // Normalize loudness + 48kHz even for a single part
    const buffer = await concatMp3Buffers(parts, { normalize: true });

    const finalDuration = await probeAudioDuration(buffer);
    if (finalDuration == null) throw new Error("Audio generation failed");

    // Align sentence boundaries to the actual narration via word timestamps
    let words: WhisperWord[] = [];
    try {
      words = await transcribeWordTimings(buffer);
    } catch (err) {
      console.error(
        "Card audio transcription failed; using proportional timings",
        err,
      );
    }
    const timedSentences = alignSentences(sentences, words, finalDuration);

    await fs.writeFile(mp3Path, buffer);
    const payload: CardAudioPayload = {
      audioUrl: `/api/audio/${mp3Name}`,
      durationSec: Math.round(finalDuration * 100) / 100,
      sentences: timedSentences,
    };
    await fs.writeFile(metaPath, JSON.stringify(payload));
    return payload;
  })().finally(() => inFlight.delete(key));

  inFlight.set(key, job);
  return job;
}

// ---------- Background warming ----------

type LessonForWarm = {
  id: number;
  steps: unknown;
};

/**
 * Server-side port of the frontend's `splitHtmlIntoCards` (course-learn.tsx).
 * A heading starts a new card; content accumulates until the next heading or
 * until the card already holds ~2 body blocks. Lists/quotes/code stay attached
 * to the text before them. Must stay in lockstep with the frontend so warming
 * produces the exact same cache hashes the player requests.
 */
export function splitHtmlIntoCards(html: string): string[] {
  const root = parseHtml(`<div>${html}</div>`).firstChild;
  if (!root || !("childNodes" in root)) return [html];

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

  for (const node of (root as any).childNodes as any[]) {
    if (node.nodeType === 3) {
      const text = String(node.text ?? "").trim();
      if (text) {
        if (bodyBlocks >= 2) flush();
        current.push(`<p>${text}</p>`);
        bodyBlocks += 1;
      }
      continue;
    }
    if (node.nodeType !== 1) continue;
    const tag = String(node.rawTagName ?? "").toLowerCase();
    const isHeading = /^h[1-6]$/.test(tag);
    const isAttachment = [
      "ul",
      "ol",
      "pre",
      "blockquote",
      "table",
      "figure",
    ].includes(tag);

    if (isHeading) {
      flush();
      current.push(node.toString());
      continue;
    }
    if (isAttachment) {
      current.push(node.toString());
      bodyBlocks += 1;
      if (bodyBlocks >= 2) flush();
      continue;
    }
    if (bodyBlocks >= 2) flush();
    current.push(node.toString());
    bodyBlocks += 1;
  }
  flush();

  return cards.length > 0 ? cards : [html];
}

function cardSentenceSets(lesson: LessonForWarm): string[][] {
  const sets: string[][] = [];
  const steps = Array.isArray(lesson.steps) ? (lesson.steps as any[]) : [];
  for (const step of steps) {
    if (typeof step?.html === "string") {
      for (const chunk of splitHtmlIntoCards(step.html)) {
        const s = extractCardSentences(chunk);
        if (s.length > 0) sets.push(s);
      }
    }
    // Quiz question narration sends the whole question as a single sentence
    const qText = step?.question?.text;
    if (typeof qText === "string" && qText.trim()) {
      sets.push([qText]);
    }
  }
  return sets;
}

const warmedLessons = new Set<number>();
let warmQueue: Promise<void> = Promise.resolve();

/**
 * Fire-and-forget: pre-generate narration for every card of the given
 * lessons. Serialized through a single queue so background warming never
 * saturates the OpenAI API or CPU while users interact with the app.
 */
export function warmLessonsInBackground(lessons: LessonForWarm[]): void {
  const fresh = lessons.filter((l) => !warmedLessons.has(l.id));
  if (fresh.length === 0) return;
  for (const l of fresh) warmedLessons.add(l.id);

  warmQueue = warmQueue.then(async () => {
    for (const lesson of fresh) {
      let failed = false;
      for (const sentences of cardSentenceSets(lesson)) {
        try {
          await ensureCardAudio(lesson.id, sentences);
        } catch (err) {
          failed = true;
          console.error(`Warm card audio failed (lesson ${lesson.id})`, err);
        }
      }
      // Allow a retry on the next course fetch if anything failed
      if (failed) warmedLessons.delete(lesson.id);
    }
  });
}
