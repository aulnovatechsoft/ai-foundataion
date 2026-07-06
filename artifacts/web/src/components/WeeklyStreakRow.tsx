import { Flame } from "lucide-react";
import { motion } from "framer-motion";
import type { Me } from "@workspace/api-client-react";

const DOW = ["M", "T", "W", "T", "F", "S", "S"];

/**
 * Weekly Mon–Sun activity row. Reads `me.weeklyActivity` (7 entries, Monday
 * first) — the truthful per-calendar-day activity log from the backend. Active
 * days show a filled flame; today is highlighted.
 */
export function WeeklyStreakRow({
  me,
  className = "",
}: {
  me: Me | undefined;
  className?: string;
}) {
  const week = me?.weeklyActivity;
  if (!week || week.length === 0) return null;

  const today = new Date().toISOString().slice(0, 10);

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {week.map((d, i) => {
        const isToday = d.date === today;
        return (
          <div key={d.date} className="flex flex-col items-center gap-1.5">
            <span
              className={`text-[10px] font-bold uppercase ${
                isToday
                  ? "text-[hsl(var(--accent))]"
                  : "text-[hsl(var(--text-muted))]"
              }`}
            >
              {DOW[i]}
            </span>
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: i * 0.04, type: "spring", stiffness: 320, damping: 20 }}
              className={`w-8 h-8 rounded-full flex items-center justify-center border transition-colors ${
                d.active
                  ? "bg-orange-500/15 border-orange-500/50"
                  : "bg-[hsl(var(--surface-2))] border-[hsl(var(--border))]"
              } ${isToday ? "ring-2 ring-[hsl(var(--accent))] ring-offset-2 ring-offset-[hsl(var(--surface))]" : ""}`}
              title={`${d.date}${d.active ? " · active" : ""}`}
            >
              <Flame
                className={`w-4 h-4 ${
                  d.active
                    ? "text-orange-500 fill-orange-500/40"
                    : "text-[hsl(var(--text-muted))] opacity-40"
                }`}
              />
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}
