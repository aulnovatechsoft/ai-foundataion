import { Shell } from "@/components/layout/Shell";
import { Redirect } from "wouter";
import { Show, useClerk } from "@clerk/react";
import { useTheme } from "@/providers/ThemeProvider";
import { Button } from "@/components/ui/button";
import { useGetMe, useUpdateMe, getGetMeQueryKey, getGetLeaderboardQueryKey, MeUpdateDailyMinutes } from "@workspace/api-client-react";
import { useQueryClient } from "@tanstack/react-query";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { normalizePace, PACE_SUMMARY } from "@/lib/pace";

export default function SettingsPage() {
  return (
    <>
      <Show when="signed-in">
        <Shell>
          <SettingsContent />
        </Shell>
      </Show>
      <Show when="signed-out">
        <Redirect to="/sign-in" />
      </Show>
    </>
  );
}

function SettingsContent() {
  const { theme, setTheme } = useTheme();
  const clerk = useClerk();
  const basePath = import.meta.env.BASE_URL.replace(/\/$/, "");
  const { data: me, isLoading } = useGetMe();
  const updateMe = useUpdateMe();
  const queryClient = useQueryClient();

  const handleToggle = (field: "isPublicProfile" | "anonymousMode" | "hideFromLeaderboard", value: boolean) => {
    updateMe.mutate({ data: { [field]: value } }, {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: getGetMeQueryKey() });
        queryClient.invalidateQueries({ queryKey: getGetLeaderboardQueryKey() });
      }
    });
  };

  const handlePace = (minutes: (typeof MeUpdateDailyMinutes)[keyof typeof MeUpdateDailyMinutes]) => {
    updateMe.mutate({ data: { dailyMinutes: minutes } }, {
      onSuccess: () => queryClient.invalidateQueries({ queryKey: getGetMeQueryKey() }),
    });
  };

  return (
    <div className="max-w-2xl mx-auto animate-slide-up text-[hsl(var(--text))]">
      <h1 className="text-3xl font-heading mb-8">Settings</h1>
      
      <div className="os-card p-6 mb-8">
        <h2 className="text-xl font-heading mb-4">Appearance</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {(['midnight', 'daylight', 'aurora'] as const).map(t => (
            <button
              key={t}
              onClick={() => setTheme(t)}
              className={`p-4 rounded-xl border text-center capitalize font-medium transition-all ${
                theme === t 
                  ? 'border-[hsl(var(--accent))] bg-[hsl(var(--accent))/0.1] text-[hsl(var(--accent))]' 
                  : 'border-[hsl(var(--border))] hover:border-[hsl(var(--text-muted))] text-[hsl(var(--text-muted))]'
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {!isLoading && me && (
        <div className="os-card p-6 mb-8">
          <h2 className="text-xl font-heading mb-2">Daily Pace</h2>
          <p className="text-sm text-[hsl(var(--text-muted))] mb-5">{PACE_SUMMARY[normalizePace(me.dailyMinutes)]}</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {([
              { value: MeUpdateDailyMinutes.NUMBER_10, label: "~10 min", sub: "Core" },
              { value: MeUpdateDailyMinutes.NUMBER_20, label: "~20 min", sub: "Standard" },
              { value: MeUpdateDailyMinutes.NUMBER_40, label: "~40 min", sub: "Deep" },
            ] as const).map(opt => {
              const active = normalizePace(me.dailyMinutes) === opt.value;
              return (
                <button
                  key={opt.value}
                  onClick={() => handlePace(opt.value)}
                  disabled={updateMe.isPending}
                  className={`p-4 rounded-xl border text-center font-medium transition-all disabled:opacity-60 ${
                    active
                      ? 'border-[hsl(var(--accent))] bg-[hsl(var(--accent))/0.1] text-[hsl(var(--accent))]'
                      : 'border-[hsl(var(--border))] hover:border-[hsl(var(--text-muted))] text-[hsl(var(--text-muted))]'
                  }`}
                >
                  <div className="text-base font-semibold">{opt.label}</div>
                  <div className="text-xs mt-0.5 uppercase tracking-wider">{opt.sub}</div>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {!isLoading && me && (
        <div className="os-card p-6 mb-8">
          <h2 className="text-xl font-heading mb-6">Privacy & Community</h2>
          <div className="space-y-6">
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-1">
                <Label htmlFor="public-profile" className="text-base font-semibold">Public Profile</Label>
                <p className="text-sm text-[hsl(var(--text-muted))]">Allow others to view your profile, achievements, and level. (Requires Anonymous Mode to be off)</p>
              </div>
              <Switch 
                id="public-profile"
                checked={me.isPublicProfile}
                disabled={me.anonymousMode || updateMe.isPending}
                onCheckedChange={(v) => handleToggle("isPublicProfile", v)}
              />
            </div>
            
            <div className="w-full h-px bg-[hsl(var(--border))]" />

            <div className="flex items-start justify-between gap-4">
              <div className="space-y-1">
                <Label htmlFor="anonymous-mode" className="text-base font-semibold">Anonymous Mode</Label>
                <p className="text-sm text-[hsl(var(--text-muted))]">Mask your name and avatar as "Anonymous Learner" across the community.</p>
              </div>
              <Switch 
                id="anonymous-mode"
                checked={me.anonymousMode}
                disabled={updateMe.isPending}
                onCheckedChange={(v) => handleToggle("anonymousMode", v)}
              />
            </div>

            <div className="w-full h-px bg-[hsl(var(--border))]" />

            <div className="flex items-start justify-between gap-4">
              <div className="space-y-1">
                <Label htmlFor="hide-leaderboard" className="text-base font-semibold">Hide from Leaderboard</Label>
                <p className="text-sm text-[hsl(var(--text-muted))]">Remove yourself completely from the weekly leaderboard.</p>
              </div>
              <Switch 
                id="hide-leaderboard"
                checked={me.hideFromLeaderboard}
                disabled={updateMe.isPending}
                onCheckedChange={(v) => handleToggle("hideFromLeaderboard", v)}
              />
            </div>
          </div>
        </div>
      )}

      <div className="os-card p-6 mb-24">
        <h2 className="text-xl font-heading mb-4">Account</h2>
        <Button 
          variant="destructive" 
          onClick={() => clerk.signOut({ redirectUrl: basePath || "/" })}
        >
          Sign Out
        </Button>
      </div>
    </div>
  );
}
