import { useEffect, useState } from "react";
import { motion, useMotionValue, animate } from "framer-motion";
import { Sparkles } from "lucide-react";

/**
 * Celebrated AI-grade reveal: an animated circular dial that counts the score
 * up from zero and sweeps the ring to the final value. Used for the task
 * (score/100) and quiz (score/total) grade reveals on the DayPage.
 */
export function GradeReveal({
  score,
  total,
  passed,
  label = "AI Score",
  size = 92,
}: {
  score: number;
  total: number;
  passed: boolean;
  label?: string;
  size?: number;
}) {
  const pct = total > 0 ? Math.max(0, Math.min(1, score / total)) : 0;
  const stroke = 7;
  const r = (size - stroke) / 2;
  const circ = 2 * Math.PI * r;

  const color = passed ? "hsl(var(--accent-2))" : "#f59e0b";
  const [display, setDisplay] = useState(0);
  const mv = useMotionValue(0);

  useEffect(() => {
    const controls = animate(mv, score, {
      duration: 1.1,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [score, mv]);

  return (
    <div className="flex flex-col items-center" style={{ width: size }}>
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="-rotate-90">
          <circle
            cx={size / 2}
            cy={size / 2}
            r={r}
            fill="none"
            stroke="hsl(var(--border))"
            strokeWidth={stroke}
          />
          <motion.circle
            cx={size / 2}
            cy={size / 2}
            r={r}
            fill="none"
            stroke={color}
            strokeWidth={stroke}
            strokeLinecap="round"
            strokeDasharray={circ}
            initial={{ strokeDashoffset: circ }}
            animate={{ strokeDashoffset: circ * (1 - pct) }}
            transition={{ duration: 1.1, ease: "easeOut" }}
            style={{ filter: `drop-shadow(0 0 6px ${color})` }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span
            className="text-2xl font-black font-heading leading-none"
            style={{ color }}
          >
            {display}
          </span>
          <span className="text-[10px] font-semibold text-[hsl(var(--text-muted))]">
            / {total}
          </span>
        </div>
      </div>
      <div className="mt-2 flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-[hsl(var(--text-muted))]">
        <Sparkles className="w-3 h-3" style={{ color }} />
        {label}
      </div>
    </div>
  );
}
