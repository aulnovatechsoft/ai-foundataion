import { Shell } from "@/components/layout/Shell";
import { Redirect } from "wouter";
import { Show } from "@clerk/react";
import { 
  useGetLeaderboard,
  getGetLeaderboardQueryKey
} from "@workspace/api-client-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Trophy, Flame, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { Skeleton } from "@/components/ui/skeleton";
import { Link } from "wouter";

export default function LeaderboardPage() {
  return (
    <>
      <Show when="signed-in">
        <Shell>
          <LeaderboardContent />
        </Shell>
      </Show>
      <Show when="signed-out">
        <Redirect to="/sign-in" />
      </Show>
    </>
  );
}

function LeaderboardContent() {
  const { data, isLoading } = useGetLeaderboard({ query: { queryKey: getGetLeaderboardQueryKey() } });

  if (isLoading) {
    return (
      <div className="max-w-3xl mx-auto space-y-4">
        <Skeleton className="h-32 w-full bg-[hsl(var(--surface-2))]" />
        {Array.from({ length: 5 }).map((_, i) => (
          <Skeleton key={i} className="h-20 w-full bg-[hsl(var(--surface-2))]" />
        ))}
      </div>
    );
  }

  const entries = data?.entries || [];
  const me = data?.me;

  return (
    <div className="max-w-3xl mx-auto animate-slide-up pb-24 text-[hsl(var(--text))]">
      <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-4xl font-heading font-bold mb-2 flex items-center gap-3">
            <Trophy className="w-8 h-8 text-[hsl(var(--accent))]" />
            Leaderboard
          </h1>
          <p className="text-[hsl(var(--text-muted))] text-lg">
            This week's top performers. XP resets every Monday.
          </p>
        </div>
      </div>

      {entries.length === 0 ? (
        <div className="space-y-3">
          <div className="os-card p-12 text-center flex flex-col items-center">
            <TrendingUp className="w-16 h-16 text-[hsl(var(--text-muted))] mb-4 opacity-50" />
            <h3 className="text-xl font-heading font-semibold mb-2">It's quiet here...</h3>
            <p className="text-[hsl(var(--text-muted))] max-w-md mx-auto">
              The leaderboard just reset or no one has earned XP yet this week. Complete your daily flow to claim the #1 spot!
            </p>
          </div>
          {me && (
            <LeaderboardRow entry={me} rank={me.rank} index={0} isFloatingMe />
          )}
        </div>
      ) : (
        <div className="space-y-3">
          {entries.map((entry, index) => (
            <LeaderboardRow key={entry.userId} entry={entry} rank={entry.rank} index={index} />
          ))}

          {/* If I'm not in the top list and I am participating */}
          {me && !entries.some((e) => e.userId === me.userId) && (
            <>
              <div className="flex justify-center py-2">
                <div className="w-1 h-1 rounded-full bg-[hsl(var(--border))] mb-1" />
                <div className="w-1 h-1 rounded-full bg-[hsl(var(--border))] mb-1" />
                <div className="w-1 h-1 rounded-full bg-[hsl(var(--border))]" />
              </div>
              <LeaderboardRow entry={me} rank={me.rank} index={entries.length} isFloatingMe />
            </>
          )}
        </div>
      )}
    </div>
  );
}

function LeaderboardRow({ entry, rank, index, isFloatingMe = false }: { entry: any, rank: number, index: number, isFloatingMe?: boolean }) {
  const isTop3 = rank <= 3;
  
  const rankColors = {
    1: "text-yellow-500 bg-yellow-500/10 border-yellow-500/30",
    2: "text-slate-300 bg-slate-300/10 border-slate-300/30",
    3: "text-amber-600 bg-amber-600/10 border-amber-600/30"
  };

  const getRankStyle = (r: number) => {
    return rankColors[r as keyof typeof rankColors] || "text-[hsl(var(--text-muted))] bg-[hsl(var(--surface))] border-[hsl(var(--border))]";
  };

  const rowContent = (
        <div className={`os-card flex items-center p-4 transition-all duration-300 ${entry.isMe ? 'border-[hsl(var(--accent))] shadow-[0_0_15px_hsl(var(--accent)/0.15)] bg-[hsl(var(--surface-2))]' : 'hover:bg-[hsl(var(--surface-2))]'}`}>
          <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold mr-4 border ${getRankStyle(rank)}`}>
            {rank}
          </div>
          
          <Avatar className={`w-12 h-12 border-2 ${entry.isMe ? 'border-[hsl(var(--accent))]' : 'border-transparent group-hover:border-[hsl(var(--border))]'} transition-colors mr-4`}>
            <AvatarImage src={entry.avatarUrl || undefined} />
            <AvatarFallback>{entry.displayName?.substring(0, 2).toUpperCase() || "AN"}</AvatarFallback>
          </Avatar>

          <div className="flex-1">
            <h3 className="font-semibold text-[hsl(var(--text))] text-lg flex items-center gap-2">
              {entry.displayName || "Anonymous Learner"}
              {entry.isMe && <span className="text-[10px] uppercase tracking-wider bg-[hsl(var(--accent))] text-white px-2 py-0.5 rounded-full font-bold">You</span>}
            </h3>
            <div className="flex items-center gap-3 text-sm text-[hsl(var(--text-muted))]">
              <span>Lvl {entry.level}</span>
              {entry.streakCount > 0 && (
                <span className="flex items-center gap-1 text-orange-500/80">
                  <Flame className="w-3 h-3" /> {entry.streakCount}
                </span>
              )}
            </div>
          </div>

          <div className="text-right">
            <div className="text-xl font-bold font-heading text-[hsl(var(--accent-2))]">
              {entry.weeklyXp} <span className="text-sm text-[hsl(var(--text-muted))] font-sans font-medium">XP</span>
            </div>
          </div>
        </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: Math.min(index * 0.05, 0.5) }}
    >
      {entry.isPublicProfile ? (
        <Link href={`/profile/${entry.userId}`} className="block relative group">
          {rowContent}
        </Link>
      ) : (
        <div className="block relative group">{rowContent}</div>
      )}
    </motion.div>
  );
}
