import { Shell } from "@/components/layout/Shell";
import { Redirect, useRoute, Link } from "wouter";
import { Show } from "@clerk/react";
import { 
  useGetPublicProfile,
  getGetPublicProfileQueryKey
} from "@workspace/api-client-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Trophy, Flame, Calendar, Award, Star, ArrowLeft } from "lucide-react";
import { format } from "date-fns";
import * as LucideIcons from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { motion } from "framer-motion";

export default function ProfilePage() {
  const [match, params] = useRoute("/profile/:id");
  const idStr = params?.id;
  const id = idStr ? parseInt(idStr) : null;

  return (
    <>
      <Show when="signed-in">
        <Shell>
          {id ? <ProfileContent id={id} /> : <div className="text-[hsl(var(--text))]">Invalid Profile</div>}
        </Shell>
      </Show>
      <Show when="signed-out">
        <Redirect to="/sign-in" />
      </Show>
    </>
  );
}

function ProfileContent({ id }: { id: number }) {
  const { data: profile, isLoading, error } = useGetPublicProfile(id, { query: { enabled: !!id, queryKey: getGetPublicProfileQueryKey(id), retry: false } });

  if (isLoading) {
    return (
      <div className="max-w-4xl mx-auto space-y-6">
        <Skeleton className="h-64 w-full bg-[hsl(var(--surface-2))]" />
        <Skeleton className="h-32 w-full bg-[hsl(var(--surface-2))]" />
      </div>
    );
  }

  if (error || !profile) {
    return (
      <div className="max-w-2xl mx-auto text-center py-24">
        <div className="w-20 h-20 bg-[hsl(var(--surface-2))] border border-[hsl(var(--border))] rounded-full flex items-center justify-center mx-auto mb-6">
          <Star className="w-10 h-10 text-[hsl(var(--text-muted))]" />
        </div>
        <h2 className="text-2xl font-heading font-bold mb-2">Profile Unavailable</h2>
        <p className="text-[hsl(var(--text-muted))] mb-8">This profile is private or doesn't exist.</p>
        <Link href="/community" className="text-[hsl(var(--accent))] hover:underline flex items-center justify-center gap-2">
          <ArrowLeft className="w-4 h-4" /> Back to Community
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto animate-slide-up pb-24 text-[hsl(var(--text))]">
      <Link href="/community" className="inline-flex items-center gap-2 text-sm text-[hsl(var(--text-muted))] hover:text-[hsl(var(--text))] mb-6 transition-colors">
        <ArrowLeft className="w-4 h-4" /> Back
      </Link>

      <div className="os-card overflow-hidden mb-8">
        <div className="h-32 bg-gradient-to-r from-[hsl(var(--accent))] to-[hsl(var(--accent-2))] opacity-80" />
        <div className="px-8 pb-8 relative">
          <div className="flex flex-col md:flex-row gap-6 items-center md:items-end -mt-16 md:-mt-12 mb-6 text-center md:text-left">
            <Avatar className="w-32 h-32 border-4 border-[hsl(var(--surface))] shadow-xl bg-[hsl(var(--surface-2))]">
              <AvatarImage src={profile.avatarUrl || undefined} />
              <AvatarFallback className="text-3xl">{profile.displayName?.substring(0, 2).toUpperCase() || "AN"}</AvatarFallback>
            </Avatar>
            <div className="flex-1 pb-2">
              <h1 className="text-3xl font-heading font-bold">{profile.displayName || "Anonymous Learner"}</h1>
              <p className="text-[hsl(var(--text-muted))] mt-1 flex items-center justify-center md:justify-start gap-2">
                <Calendar className="w-4 h-4" />
                Joined {format(new Date(profile.joinedAt), 'MMMM yyyy')}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <StatBox icon={<Trophy className="text-yellow-500" />} label="Level" value={profile.level} />
            <StatBox icon={<Star className="text-[hsl(var(--accent))]" />} label="Total XP" value={profile.xp} />
            <StatBox icon={<Flame className="text-orange-500" />} label="Streak" value={profile.streakCount} />
            <StatBox icon={<Award className="text-[hsl(var(--accent-2))]" />} label="Completed Days" value={profile.completedDays} />
          </div>
        </div>
      </div>

      <div className="os-card p-8">
        <div className="flex items-center gap-3 mb-6">
          <Award className="w-6 h-6 text-[hsl(var(--accent))]" />
          <h2 className="text-2xl font-heading font-bold">Badges & Achievements</h2>
        </div>

        {profile.badges.length === 0 ? (
          <div className="text-center py-12 bg-[hsl(var(--surface-2))] rounded-xl border border-[hsl(var(--border))]">
            <p className="text-[hsl(var(--text-muted))]">No achievements unlocked yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {profile.badges.map((badge, index) => {
              const IconComponent = (LucideIcons as any)[
                badge.icon.charAt(0).toUpperCase() + badge.icon.slice(1).replace(/-([a-z])/g, (g) => g[1].toUpperCase())
              ] || LucideIcons.Trophy;

              return (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  key={badge.code} 
                  className="bg-[hsl(var(--surface-2))] border border-[hsl(var(--border))] rounded-2xl p-4 flex flex-col items-center text-center group hover:border-[hsl(var(--accent))] transition-colors"
                  title={badge.description}
                >
                  <div className="w-12 h-12 rounded-full bg-[hsl(var(--accent))/0.1] text-[hsl(var(--accent))] flex items-center justify-center mb-3">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-sm mb-1 line-clamp-2 leading-tight">{badge.title}</h3>
                  {badge.unlockedAt && (
                    <p className="text-[10px] text-[hsl(var(--text-muted))]">{format(new Date(badge.unlockedAt), 'MMM d, yyyy')}</p>
                  )}
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

function StatBox({ icon, label, value }: { icon: React.ReactNode, label: string, value: string | number }) {
  return (
    <div className="bg-[hsl(var(--surface-2))] border border-[hsl(var(--border))] rounded-xl p-4 flex items-center gap-4">
      <div className="w-10 h-10 rounded-full bg-[hsl(var(--surface))] flex items-center justify-center border border-[hsl(var(--border))]">
        <div className="w-5 h-5 [&>svg]:w-full [&>svg]:h-full">{icon}</div>
      </div>
      <div>
        <div className="text-2xl font-bold font-heading leading-none mb-1">{value}</div>
        <div className="text-xs text-[hsl(var(--text-muted))] uppercase font-bold tracking-wider">{label}</div>
      </div>
    </div>
  );
}
