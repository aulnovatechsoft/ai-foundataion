import React from "react";
import { 
  LayoutDashboard, MessageSquare, FolderKanban, BookOpen, 
  TerminalSquare, Briefcase, Settings, Bell, Search, Flame, 
  Zap, CheckCircle2, Lock, ChevronRight, Sparkles, ArrowRight, 
  MoreVertical, Activity, Calendar, Trophy, PlayCircle,
  Headphones, Award, BookMarked, Map, Menu, Users
} from "lucide-react";
import { Link, useLocation } from "wouter";
import { useTheme } from "@/providers/ThemeProvider";
import { useGetMe } from "@workspace/api-client-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/react";

function NavItem({ icon, label, href, active, isComingSoon = false }: { icon: React.ReactNode, label: string, href: string, active?: boolean, isComingSoon?: boolean }) {
  if (isComingSoon) {
    return (
      <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-[hsl(var(--text-muted))] opacity-60 cursor-not-allowed">
        {icon}
        <span>{label}</span>
        <div className="ml-auto px-1.5 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider bg-[hsl(var(--surface-2))] border border-[hsl(var(--border))]">Soon</div>
      </div>
    );
  }

  return (
    <Link href={href} className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
      active 
        ? "bg-[hsl(var(--accent))/0.1] text-[hsl(var(--accent))] font-medium" 
        : "text-[hsl(var(--text-muted))] hover:bg-[hsl(var(--surface-2))] hover:text-[hsl(var(--text))]"
    }`}>
      {icon}
      <span>{label}</span>
    </Link>
  );
}

export function Shell({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const { theme, setTheme } = useTheme();
  const { data: me } = useGetMe();
  const { user } = useUser();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const activeTheme = theme;

  return (
    <div className={`os-final-dashboard flex overflow-hidden w-full h-full min-h-screen bg-[hsl(var(--bg))]`}>
      {/* SIDEBAR */}
      <aside className={`w-[280px] border-r border-[hsl(var(--border))] flex flex-col shrink-0 bg-[hsl(var(--surface))] ${mobileMenuOpen ? 'absolute z-50 h-full left-0' : 'hidden md:flex'}`}>
        <div className="h-[72px] flex items-center px-6 border-b border-[hsl(var(--border))] justify-between">
          <Link href="/dashboard" className="flex items-center gap-3 text-[hsl(var(--text))]">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[hsl(var(--accent-2))] to-[hsl(var(--accent))] flex items-center justify-center shadow-[0_0_15px_hsl(var(--accent)/0.3)]">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-xl tracking-tight font-heading">Upskil OS</span>
          </Link>
          {mobileMenuOpen && (
            <button onClick={() => setMobileMenuOpen(false)} className="md:hidden text-[hsl(var(--text-muted))]">
              <MoreVertical className="w-5 h-5" />
            </button>
          )}
        </div>

        <div className="flex-1 overflow-y-auto py-6 px-4 flex flex-col gap-1 os-scrollbar">
          <div className="px-3 mb-2 text-[11px] font-bold uppercase tracking-widest text-[hsl(var(--text-muted))]">28-Day Engine</div>
          <NavItem href="/dashboard" icon={<LayoutDashboard className="w-4 h-4" />} label="Dashboard" active={location === "/dashboard"} />
          <NavItem href="/path" icon={<Map className="w-4 h-4" />} label="Your Path" active={location.startsWith("/path") || location.startsWith("/day")} />

          <div className="px-3 mt-8 mb-2 text-[11px] font-bold uppercase tracking-widest text-[hsl(var(--text-muted))]">Community</div>
          <NavItem href="/leaderboard" icon={<Trophy className="w-4 h-4" />} label="Leaderboard" active={location.startsWith("/leaderboard")} />
          <NavItem href="/community" icon={<Users className="w-4 h-4" />} label="Community Feed" active={location.startsWith("/community")} />

          <div className="px-3 mt-8 mb-2 text-[11px] font-bold uppercase tracking-widest text-[hsl(var(--text-muted))]">Modules</div>
          <NavItem href="/mentor" icon={<MessageSquare className="w-4 h-4" />} label="AI Mentor" active={location.startsWith("/mentor")} />
          <NavItem href="/projects" icon={<FolderKanban className="w-4 h-4" />} label="Projects" active={location.startsWith("/projects")} />
          <NavItem href="/prompts" icon={<BookMarked className="w-4 h-4" />} label="Prompt Library" active={location.startsWith("/prompts")} />
          <NavItem href="/playground" icon={<TerminalSquare className="w-4 h-4" />} label="Playground" active={location.startsWith("/playground")} />
          <NavItem href="#" icon={<Briefcase className="w-4 h-4" />} label="Career Coach" isComingSoon />
          <NavItem href="/certificates" icon={<Award className="w-4 h-4" />} label="Certificates" active={location.startsWith("/certificates")} />
          <NavItem href="#" icon={<Headphones className="w-4 h-4" />} label="Audio" isComingSoon />
        </div>

        <div className="p-4 border-t border-[hsl(var(--border))] mt-auto">
          <NavItem href="/settings" icon={<Settings className="w-4 h-4" />} label="Settings" active={location === "/settings"} />
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 flex flex-col h-full overflow-hidden bg-[hsl(var(--bg))]">
        {/* TOPBAR */}
        <header className="h-[72px] border-b border-[hsl(var(--border))] flex items-center justify-between px-4 md:px-8 shrink-0 bg-[hsl(var(--surface))/0.8] backdrop-blur-xl sticky top-0 z-40">
          <div className="flex items-center gap-4">
            <button className="md:hidden text-[hsl(var(--text))]" onClick={() => setMobileMenuOpen(true)}>
              <Menu className="w-6 h-6" />
            </button>
            <div className="relative group hidden md:block">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[hsl(var(--text-muted))] group-focus-within:text-[hsl(var(--accent))] transition-colors" />
              <input 
                type="text" 
                placeholder="Search resources, prompts, or ask AI..." 
                className="bg-[hsl(var(--surface-2))] border border-[hsl(var(--border))] text-sm rounded-full pl-10 pr-4 py-2 w-80 text-[hsl(var(--text))] placeholder-[hsl(var(--text-muted))] focus:border-[hsl(var(--accent))] focus:ring-1 focus:ring-[hsl(var(--accent))] outline-none transition-all"
              />
            </div>
          </div>
          
          <div className="flex items-center gap-3 md:gap-5">
            {/* THEME SWITCHER */}
            <div className="hidden md:flex items-center gap-1 bg-[hsl(var(--surface-2))] p-1 rounded-full border border-[hsl(var(--border))]">
              {(['midnight', 'daylight', 'aurora'] as const).map(t => (
                <button
                  key={t}
                  onClick={() => setTheme(t)}
                  className={`px-3 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wide transition-all ${
                    activeTheme === t 
                      ? 'bg-[hsl(var(--surface))] text-[hsl(var(--text))] shadow-sm border border-[hsl(var(--border))]' 
                      : 'text-[hsl(var(--text-muted))] hover:text-[hsl(var(--text))] border border-transparent'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
            
            <div className="hidden md:block h-6 w-px bg-[hsl(var(--border))] mx-1"></div>

            <div className="flex items-center gap-2 bg-[hsl(var(--surface-2))] px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-[hsl(var(--border))] shadow-sm">
              <Flame className="w-4 h-4 text-orange-500 fill-orange-500" />
              <span className="text-xs md:text-sm font-bold text-[hsl(var(--text))]">{me?.streakCount ?? 0} Day</span>
            </div>
            <div className="flex items-center gap-2 bg-[hsl(var(--surface-2))] px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-[hsl(var(--border))] shadow-sm">
              <Zap className="w-4 h-4 text-[hsl(var(--accent-2))] fill-[hsl(var(--accent-2))]" />
              <span className="text-xs md:text-sm font-bold text-[hsl(var(--text))]">{me?.xp ?? 0} XP</span>
            </div>
            
            <div className="hidden md:block h-6 w-px bg-[hsl(var(--border))] mx-1"></div>
            
            <Link href="/settings" className="block">
              <Avatar className="w-8 h-8 md:w-9 md:h-9 border-2 border-[hsl(var(--border))] cursor-pointer hover:border-[hsl(var(--accent))] transition-colors">
                <AvatarImage src={me?.avatarUrl || user?.imageUrl} />
                <AvatarFallback>{me?.displayName?.substring(0,2).toUpperCase() || 'U'}</AvatarFallback>
              </Avatar>
            </Link>
          </div>
        </header>

        {/* SCROLLABLE AREA */}
        <div className="flex-1 overflow-y-auto p-4 md:p-8 os-scrollbar">
          <div className="max-w-[1200px] mx-auto pb-24">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}
