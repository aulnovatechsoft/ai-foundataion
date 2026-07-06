import { Shell } from "@/components/layout/Shell";
import { Redirect, Link } from "wouter";
import { Show } from "@clerk/react";
import {
  useListCurriculumDays,
  useListProgress,
  useGetMe,
} from "@workspace/api-client-react";
import type {
  CurriculumDaySummary,
  DayProgress,
  Me,
} from "@workspace/api-client-react";
import {
  Check,
  Lock,
  Map as MapIcon,
  ArrowRight,
  Flame,
  Trophy,
  Star,
  Sunrise,
  Play,
  Loader2,
  AlertTriangle,
  Sparkles,
} from "lucide-react";
import { LEVELS, stepsDone, type LevelMeta } from "@/lib/levels";
import { WeeklyStreakRow } from "@/components/WeeklyStreakRow";

type NodeStatus = "locked" | "available" | "in-progress" | "completed";

export default function PathPage() {
  return (
    <>
      <Show when="signed-in">
        <Shell>
          <PathContent />
        </Shell>
      </Show>
      <Show when="signed-out">
        <Redirect to="/sign-in" />
      </Show>
    </>
  );
}

function PathContent() {
  const daysQuery = useListCurriculumDays();
  const progressQuery = useListProgress();
  const { data: me } = useGetMe();

  const days = daysQuery.data;
  const progresses = progressQuery.data;

  if (daysQuery.isLoading || progressQuery.isLoading) {
    return (
      <div className="flex flex-col items-center justify-center py-32 text-[hsl(var(--text-muted))]">
        <Loader2 className="w-8 h-8 animate-spin mb-4 text-[hsl(var(--accent))]" />
        <p className="text-sm">Loading your path…</p>
      </div>
    );
  }

  if (daysQuery.isError || progressQuery.isError || !days) {
    return (
      <div className="flex flex-col items-center justify-center py-32 text-center">
        <AlertTriangle className="w-10 h-10 mb-4 text-[hsl(var(--accent))]" />
        <h2 className="text-xl font-heading font-semibold text-[hsl(var(--text))] mb-2">
          Couldn't load your path
        </h2>
        <p className="text-[hsl(var(--text-muted))] mb-6 max-w-sm">
          Something went wrong fetching your progress. Please try again.
        </p>
        <button
          onClick={() => {
            daysQuery.refetch();
            progressQuery.refetch();
          }}
          className="px-5 py-2.5 rounded-full bg-[hsl(var(--accent))] text-white font-semibold text-sm hover:opacity-90 transition-opacity"
        >
          Retry
        </button>
      </div>
    );
  }

  if (days.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-32 text-center text-[hsl(var(--text-muted))]">
        <MapIcon className="w-10 h-10 mb-4 text-[hsl(var(--accent))]" />
        <p>No curriculum days available yet.</p>
      </div>
    );
  }

  const progressByDay = new Map<number, DayProgress>();
  (progresses ?? []).forEach((p) => progressByDay.set(p.day, p));

  const sorted = [...days].sort((a, b) => a.day - b.day);
  const total = sorted.length;
  const completedCount = sorted.filter(
    (d) => stepsDone(progressByDay.get(d.day)) === 4,
  ).length;
  const overallPct = Math.round((completedCount / total) * 100);

  const currentDay = me?.currentDay ?? 1;
  const currentAccessible = isAccessible(me, currentDay);

  return (
    <div className="max-w-4xl mx-auto animate-slide-up pb-24 text-[hsl(var(--text))]">
      {/* HEADER */}
      <div className="mb-10 os-card p-6 md:p-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-heading font-bold mb-2 flex items-center gap-3">
              <MapIcon className="w-7 h-7 text-[hsl(var(--accent))]" />
              Your Path
            </h1>
            <p className="text-[hsl(var(--text-muted))]">
              Day {Math.min(currentDay, total)} of {total} · {overallPct}% complete
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 bg-[hsl(var(--surface-2))] px-4 py-2 rounded-full border border-[hsl(var(--border))]">
              <Flame className="w-4 h-4 text-orange-500 fill-orange-500" />
              <span className="text-sm font-bold">{me?.streakCount ?? 0} day streak</span>
            </div>
            <Link
              href={currentAccessible ? `/day/${currentDay}` : "/upgrade"}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[hsl(var(--accent-2))] to-[hsl(var(--accent))] text-white font-semibold text-sm shadow-[0_0_20px_hsl(var(--accent)/0.35)] hover:opacity-90 transition-opacity whitespace-nowrap"
            >
              {completedCount === 0 ? "Start" : "Continue"} Day {currentDay}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
        {/* overall progress bar */}
        <div className="mt-6 h-2.5 rounded-full bg-[hsl(var(--surface-2))] overflow-hidden">
          <div
            className="h-full rounded-full bg-gradient-to-r from-[hsl(var(--accent-2))] to-[hsl(var(--accent))] transition-all duration-700"
            style={{ width: `${overallPct}%` }}
          />
        </div>
        {/* weekly Mon–Sun activity row */}
        {me?.weeklyActivity && me.weeklyActivity.length > 0 && (
          <div className="mt-6 pt-6 border-t border-[hsl(var(--border))] flex items-center justify-between gap-4 flex-wrap">
            <span className="text-xs font-bold uppercase tracking-widest text-[hsl(var(--text-muted))]">
              This week
            </span>
            <WeeklyStreakRow me={me} />
          </div>
        )}
      </div>

      {/* LEVEL SECTIONS */}
      {LEVELS.map((meta) => {
        const levelDays = sorted.filter((d) => d.level === meta.level);
        if (levelDays.length === 0) return null;

        const levelCompleted = levelDays.filter(
          (d) => stepsDone(progressByDay.get(d.day)) === 4,
        ).length;
        const levelPct = Math.round((levelCompleted / levelDays.length) * 100);

        return (
          <section key={meta.level} className="mb-4">
            {/* LEVEL DIVIDER */}
            <div
              className="rounded-2xl p-5 mb-2 border"
              style={{
                borderColor: `${meta.accent}55`,
                background: `linear-gradient(135deg, ${meta.accent}22, ${meta.accent2}11)`,
              }}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center text-white font-bold text-sm shrink-0"
                    style={{
                      background: `linear-gradient(135deg, ${meta.accent}, ${meta.accent2})`,
                    }}
                  >
                    {meta.level}
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-widest font-bold text-[hsl(var(--text-muted))]">
                      Level {meta.level}
                    </div>
                    <h2 className="text-lg font-heading font-bold leading-tight">
                      {meta.name}
                    </h2>
                  </div>
                </div>
                <span className="text-sm font-bold" style={{ color: meta.accent }}>
                  {levelCompleted}/{levelDays.length} · {levelPct}%
                </span>
              </div>
              <div className="h-2 rounded-full bg-[hsl(var(--surface-2))] overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-700"
                  style={{
                    width: `${levelPct}%`,
                    background: `linear-gradient(90deg, ${meta.accent}, ${meta.accent2})`,
                  }}
                />
              </div>
            </div>

            {/* SERPENTINE NODES */}
            <div className="relative">
              {levelDays.map((day, i) => (
                <PathNode
                  key={day.day}
                  day={day}
                  meta={meta}
                  side={i % 2 === 0 ? "left" : "right"}
                  status={statusFor(day, progressByDay.get(day.day), me)}
                  done={stepsDone(progressByDay.get(day.day))}
                  me={me}
                />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}

function isAccessible(me: Me | undefined, day: number): boolean {
  if (!me) return day === 1;
  if (me.hasAccess) return true;
  return day <= (me.accessibleThroughDay ?? 0);
}

function statusFor(
  day: CurriculumDaySummary,
  p: DayProgress | undefined,
  me: Me | undefined,
): NodeStatus {
  const done = stepsDone(p);
  const accessible = isAccessible(me, day.day);
  const currentDay = me?.currentDay ?? 1;

  if (!accessible || day.day > currentDay) return "locked";
  if (done === 4) return "completed";
  if (done > 0) return "in-progress";
  return "available";
}

function PathNode({
  day,
  meta,
  side,
  status,
  done,
  me,
}: {
  day: CurriculumDaySummary;
  meta: LevelMeta;
  side: "left" | "right";
  status: NodeStatus;
  done: number;
  me: Me | undefined;
}) {
  const accessible = isAccessible(me, day.day);
  const paywalled = !accessible;
  const href = status === "locked"
    ? paywalled
      ? "/upgrade"
      : undefined
    : `/day/${day.day}`;

  const card = (
    <NodeCard day={day} meta={meta} status={status} done={done} />
  );

  return (
    <div className="relative grid grid-cols-[1fr_auto_1fr] items-center gap-3 md:gap-6 py-5">
      {/* left column */}
      <div className="flex justify-end min-w-0">
        {side === "left" && (
          <NodeCardLink href={href} status={status} paywalled={paywalled}>
            {card}
          </NodeCardLink>
        )}
      </div>

      {/* center medallion + spine */}
      <div className="relative flex items-center justify-center">
        <div
          className="absolute left-1/2 -translate-x-1/2 -top-5 -bottom-5 w-[3px] rounded-full"
          style={{
            background:
              status === "completed"
                ? `linear-gradient(${meta.accent}, ${meta.accent2})`
                : "hsl(var(--border))",
          }}
        />
        <Medallion day={day} meta={meta} status={status} done={done} href={href} paywalled={paywalled} />
      </div>

      {/* right column */}
      <div className="flex justify-start min-w-0">
        {side === "right" && (
          <NodeCardLink href={href} status={status} paywalled={paywalled}>
            {card}
          </NodeCardLink>
        )}
      </div>
    </div>
  );
}

function NodeCardLink({
  href,
  status,
  paywalled,
  children,
}: {
  href?: string;
  status: NodeStatus;
  paywalled: boolean;
  children: React.ReactNode;
}) {
  if (!href) {
    return (
      <div
        className="w-full max-w-xs cursor-not-allowed"
        aria-disabled="true"
        title={
          status === "locked" && !paywalled
            ? "Complete earlier days to unlock"
            : undefined
        }
      >
        {children}
      </div>
    );
  }
  return (
    <Link href={href} className="w-full max-w-xs group block">
      {children}
    </Link>
  );
}

function NodeCard({
  day,
  meta,
  status,
  done,
}: {
  day: CurriculumDaySummary;
  meta: LevelMeta;
  status: NodeStatus;
  done: number;
}) {
  const locked = status === "locked";
  return (
    <div
      className={`os-card p-4 transition-all ${
        locked
          ? "opacity-50"
          : "group-hover:-translate-y-0.5 group-hover:shadow-lg"
      }`}
      style={
        !locked
          ? ({ "--tw-ring-color": meta.accent } as React.CSSProperties)
          : undefined
      }
    >
      <div className="flex items-center gap-2 mb-1.5">
        <span
          className="text-[10px] uppercase tracking-widest font-bold"
          style={{ color: meta.accent }}
        >
          Day {day.day}
        </span>
        <span className="w-1 h-1 rounded-full bg-[hsl(var(--border))]" />
        <span className="text-[10px] uppercase tracking-widest font-bold text-[hsl(var(--text-muted))]">
          {day.xpReward} XP
        </span>
      </div>
      <h3 className="text-base font-heading font-semibold leading-snug text-[hsl(var(--text))]">
        {day.title}
      </h3>
      <div className="mt-2 flex items-center gap-2">
        <StatusPill status={status} done={done} accent={meta.accent} />
        {!locked && (
          <ArrowRight className="w-4 h-4 text-[hsl(var(--text-muted))] opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all ml-auto" />
        )}
      </div>
    </div>
  );
}

function StatusPill({
  status,
  done,
  accent,
}: {
  status: NodeStatus;
  done: number;
  accent: string;
}) {
  if (status === "completed") {
    return (
      <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-500">
        <Check className="w-3.5 h-3.5" /> Completed
      </span>
    );
  }
  if (status === "in-progress") {
    return (
      <span
        className="inline-flex items-center gap-1 text-[11px] font-bold"
        style={{ color: accent }}
      >
        In progress · {done}/4
      </span>
    );
  }
  if (status === "available") {
    return (
      <span
        className="inline-flex items-center gap-1 text-[11px] font-bold"
        style={{ color: accent }}
      >
        <Play className="w-3 h-3 fill-current" /> Start
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[hsl(var(--text-muted))]">
      <Lock className="w-3 h-3" /> Locked
    </span>
  );
}

function Medallion({
  day,
  meta,
  status,
  done,
  href,
  paywalled,
}: {
  day: CurriculumDaySummary;
  meta: LevelMeta;
  status: NodeStatus;
  done: number;
  href?: string;
  paywalled: boolean;
}) {
  const size = 76;
  const locked = status === "locked";
  const isGraduation = day.nodeType === "graduation";
  const ringColor = isGraduation ? "#fbbf24" : meta.accent;

  const inner = (
    <div
      className="relative"
      style={{ width: size, height: size }}
      aria-label={`Day ${day.day}: ${day.title} — ${status}`}
    >
      {/* pulse for available */}
      {status === "available" && (
        <span
          className="absolute inset-0 rounded-2xl animate-ping opacity-40"
          style={{ background: ringColor }}
        />
      )}

      {/* progress ring for in-progress */}
      {status === "in-progress" && (
        <svg
          className="absolute -inset-1.5 -rotate-90"
          width={size + 12}
          height={size + 12}
          viewBox={`0 0 ${size + 12} ${size + 12}`}
        >
          <circle
            cx={(size + 12) / 2}
            cy={(size + 12) / 2}
            r={(size + 12) / 2 - 3}
            fill="none"
            stroke="hsl(var(--border))"
            strokeWidth={3}
          />
          <circle
            cx={(size + 12) / 2}
            cy={(size + 12) / 2}
            r={(size + 12) / 2 - 3}
            fill="none"
            stroke={ringColor}
            strokeWidth={3}
            strokeLinecap="round"
            strokeDasharray={2 * Math.PI * ((size + 12) / 2 - 3)}
            strokeDashoffset={
              2 * Math.PI * ((size + 12) / 2 - 3) * (1 - done / 4)
            }
          />
        </svg>
      )}

      {/* medallion tile */}
      <div
        className={`relative w-full h-full rounded-2xl overflow-hidden border-2 flex items-center justify-center ${
          locked ? "grayscale" : ""
        }`}
        style={{
          borderColor: status === "completed" || !locked ? ringColor : "hsl(var(--border))",
          boxShadow:
            status === "available"
              ? `0 0 18px ${ringColor}66`
              : status === "completed"
                ? `0 0 12px ${ringColor}44`
                : "none",
          background: `linear-gradient(135deg, ${meta.accent}, ${meta.accent2})`,
          opacity: locked ? 0.55 : 1,
        }}
      >
        {day.imageUrl ? (
          <img
            src={day.imageUrl}
            alt=""
            className="w-full h-full object-cover"
            loading="lazy"
          />
        ) : (
          <span className="text-white font-heading font-bold text-2xl">
            {day.day}
          </span>
        )}
      </div>

      {/* status badge */}
      <div
        className="absolute -bottom-1.5 -right-1.5 w-7 h-7 rounded-full flex items-center justify-center border-2 border-[hsl(var(--surface))] shadow"
        style={{
          background:
            status === "completed"
              ? "#10b981"
              : status === "locked"
                ? "hsl(var(--surface-2))"
                : ringColor,
        }}
      >
        <NodeBadgeIcon status={status} nodeType={day.nodeType} />
      </div>
    </div>
  );

  if (locked && !paywalled) {
    return (
      <div
        className="cursor-not-allowed"
        title="Complete earlier days to unlock"
      >
        {inner}
      </div>
    );
  }
  if (href) {
    return (
      <Link href={href} className="block hover:scale-105 transition-transform">
        {inner}
      </Link>
    );
  }
  return inner;
}

function NodeBadgeIcon({
  status,
  nodeType,
}: {
  status: NodeStatus;
  nodeType: CurriculumDaySummary["nodeType"];
}) {
  const cls = "w-3.5 h-3.5 text-white";
  if (status === "completed") return <Check className={cls} />;
  if (status === "locked")
    return <Lock className="w-3 h-3 text-[hsl(var(--text-muted))]" />;
  if (nodeType === "graduation") return <Trophy className={cls} />;
  if (nodeType === "review") return <Star className={`${cls} fill-white`} />;
  if (nodeType === "start") return <Sunrise className={cls} />;
  if (status === "in-progress") return <Sparkles className={cls} />;
  return <Play className={`${cls} fill-white`} />;
}
