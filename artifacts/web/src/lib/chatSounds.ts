let ctx: AudioContext | null = null;
let ambientNodes: { gain: GainNode; oscs: OscillatorNode[]; lfo: OscillatorNode } | null = null;

const STORAGE_KEY = "chat-sound-muted";

export function isMuted(): boolean {
  try {
    return localStorage.getItem(STORAGE_KEY) === "1";
  } catch {
    return false;
  }
}

export function setMuted(muted: boolean) {
  try {
    localStorage.setItem(STORAGE_KEY, muted ? "1" : "0");
  } catch {
    /* ignore */
  }
  if (muted) stopAmbient();
}

function getCtx(): AudioContext | null {
  if (typeof window === "undefined") return null;
  const AC = window.AudioContext || (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
  if (!AC) return null;
  if (!ctx) ctx = new AC();
  if (ctx.state === "suspended") void ctx.resume();
  return ctx;
}

function tone(
  freq: number,
  start: number,
  duration: number,
  volume: number,
  type: OscillatorType = "sine",
) {
  const c = getCtx();
  if (!c) return;
  const osc = c.createOscillator();
  const gain = c.createGain();
  osc.type = type;
  osc.frequency.value = freq;
  const t0 = c.currentTime + start;
  gain.gain.setValueAtTime(0, t0);
  gain.gain.linearRampToValueAtTime(volume, t0 + 0.015);
  gain.gain.exponentialRampToValueAtTime(0.0001, t0 + duration);
  osc.connect(gain).connect(c.destination);
  osc.start(t0);
  osc.stop(t0 + duration + 0.05);
}

/** Soft click when tapping a chip or word. */
export function playTap() {
  if (isMuted()) return;
  tone(880, 0, 0.06, 0.08, "triangle");
}

/** Rising happy chime for a correct answer (Duolingo-style). */
export function playCorrect() {
  if (isMuted()) return;
  tone(523.25, 0, 0.15, 0.14);
  tone(659.25, 0.09, 0.15, 0.14);
  tone(783.99, 0.18, 0.22, 0.16);
}

/** Gentle low "try again" buzz — never harsh. */
export function playWrong() {
  if (isMuted()) return;
  tone(233.08, 0, 0.18, 0.1, "triangle");
  tone(207.65, 0.14, 0.24, 0.09, "triangle");
}

/** New bot message pop. */
export function playMessage() {
  if (isMuted()) return;
  tone(587.33, 0, 0.08, 0.06, "sine");
}

/** Session-complete fanfare. */
export function playComplete() {
  if (isMuted()) return;
  tone(523.25, 0, 0.16, 0.14);
  tone(659.25, 0.12, 0.16, 0.14);
  tone(783.99, 0.24, 0.16, 0.15);
  tone(1046.5, 0.36, 0.4, 0.17);
}

/** Gentle ambient pad, very low volume, loops until stopped. */
export function startAmbient() {
  if (isMuted()) return;
  const c = getCtx();
  if (!c || ambientNodes) return;
  const gain = c.createGain();
  gain.gain.value = 0;
  gain.gain.linearRampToValueAtTime(0.018, c.currentTime + 2.5);
  const freqs = [130.81, 196.0, 261.63]; // C3, G3, C4 — calm open fifth
  const oscs = freqs.map(f => {
    const o = c.createOscillator();
    o.type = "sine";
    o.frequency.value = f;
    o.connect(gain);
    o.start();
    return o;
  });
  // Slow shimmer so the pad breathes
  const lfo = c.createOscillator();
  const lfoGain = c.createGain();
  lfo.frequency.value = 0.08;
  lfoGain.gain.value = 0.008;
  lfo.connect(lfoGain).connect(gain.gain);
  lfo.start();
  gain.connect(c.destination);
  ambientNodes = { gain, oscs, lfo };
}

export function stopAmbient() {
  if (!ambientNodes || !ctx) return;
  const { gain, oscs, lfo } = ambientNodes;
  ambientNodes = null;
  const t = ctx.currentTime;
  gain.gain.cancelScheduledValues(t);
  gain.gain.setValueAtTime(gain.gain.value, t);
  gain.gain.linearRampToValueAtTime(0, t + 0.8);
  setTimeout(() => {
    oscs.forEach(o => { try { o.stop(); } catch { /* already stopped */ } });
    try { lfo.stop(); } catch { /* already stopped */ }
  }, 900);
}
