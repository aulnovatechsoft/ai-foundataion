import { useState, useEffect } from "react";
import { Check, ChevronRight, Play, Flame, Zap, Trophy, Brain, Target, MessageSquare, Briefcase, FileText } from "lucide-react";
import "./ai-learning-os.css";

const THEMES = [
  { id: 'midnight', label: 'Midnight', color: 'bg-[#12131A]' },
  { id: 'daylight', label: 'Daylight', color: 'bg-[#FAFBFC]' },
  { id: 'aurora', label: 'Aurora', color: 'bg-[#100F14]' }
];

export function ChallengeMobile() {
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState("home");
  const [theme, setTheme] = useState("midnight");

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div data-theme={theme} className="os-mobile-container bg-[hsl(var(--bg))] text-[hsl(var(--text))] font-['Outfit'] h-[844px] w-[390px] mx-auto overflow-hidden relative shadow-2xl rounded-[40px] border-[8px] border-[hsl(var(--border))] flex flex-col transition-colors duration-300">
      {/* Status Bar Mock */}
      <div className="h-12 w-full flex justify-between items-center px-6 text-xs font-semibold tracking-wider text-[hsl(var(--text-muted))]">
        <span>9:41</span>
        <div className="flex gap-2 items-center">
          <div className="w-4 h-4 rounded-full bg-[hsl(var(--text-muted))]/20" />
          <div className="w-4 h-4 rounded-full bg-[hsl(var(--text-muted))]/20" />
          <div className="w-6 h-3 rounded-sm bg-[hsl(var(--text-muted))]" />
        </div>
      </div>

      {/* Top Header */}
      <header className="px-6 py-2 flex flex-col gap-4 z-10">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-[hsl(var(--accent))] to-[hsl(var(--accent-2))] p-[2px]">
              <div className="h-full w-full rounded-full bg-[hsl(var(--bg))] flex items-center justify-center">
                <span className="font-bold text-sm text-[hsl(var(--accent))]">AK</span>
              </div>
            </div>
          </div>
          
          <div className="flex gap-2">
            <div className="flex items-center gap-1.5 bg-[hsl(var(--surface-2))] px-3 py-1.5 rounded-full border border-[hsl(var(--border))]">
              <Flame className="w-4 h-4 text-[hsl(var(--accent))] fill-[hsl(var(--accent))]" />
              <span className="font-bold text-sm">12</span>
            </div>
            <div className="flex items-center gap-1.5 bg-[hsl(var(--surface-2))] px-3 py-1.5 rounded-full border border-[hsl(var(--border))]">
              <Zap className="w-4 h-4 text-[hsl(var(--accent-2))] fill-[hsl(var(--accent-2))]" />
              <span className="font-bold text-sm">2,450</span>
            </div>
          </div>
        </div>

        {/* Theme Selector */}
        <div className="flex gap-2 p-1 bg-[hsl(var(--surface))] border border-[hsl(var(--border))] rounded-full w-max mx-auto shadow-sm">
          {THEMES.map((t) => (
            <button
              key={t.id}
              onClick={() => setTheme(t.id)}
              className={`px-3 py-1 text-xs font-bold rounded-full transition-all flex items-center gap-1.5 ${
                theme === t.id 
                  ? 'bg-[hsl(var(--surface-2))] text-[hsl(var(--text))] shadow-sm' 
                  : 'text-[hsl(var(--text-muted))] hover:text-[hsl(var(--text))] hover:bg-[hsl(var(--surface-2))]/50'
              }`}
            >
              <div className={`w-2.5 h-2.5 rounded-full border border-[hsl(var(--border))] ${t.color}`} />
              {t.label}
            </button>
          ))}
        </div>
      </header>

      {/* Main Content Scrollable */}
      <div className="flex-1 overflow-y-auto pb-24 px-6 hide-scrollbar z-10">
        
        {/* Progress Section */}
        <div className="mt-4 mb-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <div className="flex justify-between items-end mb-2">
            <div>
              <p className="text-[hsl(var(--text-muted))] text-sm font-medium uppercase tracking-widest mb-1">Week 2 of 4</p>
              <h1 className="text-4xl font-black text-[hsl(var(--text))] tracking-tight">Day 12</h1>
            </div>
            <div className="text-right">
              <p className="text-[hsl(var(--text-muted))] text-xs font-medium mb-1">42% Complete</p>
            </div>
          </div>
          
          {/* Custom Progress Bar */}
          <div className="h-2 w-full bg-[hsl(var(--surface-2))] rounded-full overflow-hidden mt-4">
            <div className="h-full bg-gradient-to-r from-[hsl(var(--accent))] to-[hsl(var(--accent-2))] w-[42%] rounded-full relative">
              <div className="absolute top-0 right-0 bottom-0 w-4 bg-white/20 blur-[2px]" />
            </div>
          </div>
          
          <div className="flex justify-between mt-3 text-xs text-[hsl(var(--text-muted))] font-medium">
            <span>Day 1</span>
            <span className="text-[hsl(var(--accent))]">Goal: Day 28</span>
          </div>
        </div>

        {/* Today's Mission Card */}
        <div className="relative rounded-3xl p-[1px] bg-gradient-to-b from-[hsl(var(--border))] to-[hsl(var(--bg))] mb-8 shadow-xl animate-fade-in-up overflow-hidden" style={{ animationDelay: '0.2s' }}>
          <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--accent))]/10 to-transparent rounded-3xl" />
          <div className="relative bg-[hsl(var(--surface))] rounded-[23px] p-6 h-full flex flex-col justify-between overflow-hidden">
            {/* Background glow */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-[hsl(var(--accent))]/20 blur-3xl rounded-full" />
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[hsl(var(--accent))]/10 border border-[hsl(var(--accent))]/20 text-[hsl(var(--accent))] text-xs font-bold uppercase tracking-wider mb-4">
                <Target className="w-3.5 h-3.5" />
                Today's Focus
              </div>
              <h2 className="text-2xl font-bold text-[hsl(var(--text))] leading-tight mb-2">Chaining prompts for complex outputs</h2>
              <p className="text-[hsl(var(--text-muted))] text-sm leading-relaxed mb-6">
                Learn how to break down massive tasks into smaller, sequential AI requests for 10x better results.
              </p>
            </div>

            <button className="relative z-10 w-full py-4 rounded-xl bg-[hsl(var(--text))] text-[hsl(var(--bg))] font-bold text-lg flex items-center justify-center gap-2 transition-transform active:scale-95 shadow-lg shadow-[hsl(var(--text))]/10">
              <Play className="w-5 h-5 fill-current" />
              Start Lesson
            </button>
          </div>
        </div>

        {/* Task List */}
        <div className="space-y-3 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <h3 className="text-sm font-bold text-[hsl(var(--text-muted))] uppercase tracking-widest mb-4">Daily Actions</h3>
          
          {/* Action 1: Completed */}
          <div className="group relative flex items-center p-4 rounded-2xl bg-[hsl(var(--surface))] border border-[hsl(var(--accent))]/30 transition-all hover:bg-[hsl(var(--surface-2))]">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-[hsl(var(--accent))] rounded-r-md" />
            <div className="w-10 h-10 rounded-full bg-[hsl(var(--accent))]/10 flex items-center justify-center mr-4 text-[hsl(var(--accent))]">
              <Play className="w-4 h-4 ml-0.5 fill-[hsl(var(--accent))]" />
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-[hsl(var(--text))] text-base">Micro-Lesson</h4>
              <p className="text-xs text-[hsl(var(--text-muted))]">5 mins • Video & Text</p>
            </div>
            <div className="text-right">
              <span className="text-[hsl(var(--accent))] font-bold text-sm">+50 XP</span>
            </div>
          </div>

          {/* Action 2: Locked/Next */}
          <div className="group relative flex items-center p-4 rounded-2xl bg-[hsl(var(--surface))] border border-[hsl(var(--border))] opacity-75">
            <div className="w-10 h-10 rounded-full bg-[hsl(var(--surface-2))] flex items-center justify-center mr-4 text-[hsl(var(--text-muted))]">
              <Briefcase className="w-4 h-4" />
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-[hsl(var(--text-muted))] text-base">Practical Task</h4>
              <p className="text-xs text-[hsl(var(--text-muted))] opacity-80">15 mins • Workspace</p>
            </div>
            <div className="text-right">
              <span className="text-[hsl(var(--text-muted))] opacity-80 font-bold text-sm">+150 XP</span>
            </div>
          </div>

          {/* Action 3: Locked */}
          <div className="group relative flex items-center p-4 rounded-2xl bg-[hsl(var(--surface))] border border-[hsl(var(--border))] opacity-75">
            <div className="w-10 h-10 rounded-full bg-[hsl(var(--surface-2))] flex items-center justify-center mr-4 text-[hsl(var(--text-muted))]">
              <Brain className="w-4 h-4" />
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-[hsl(var(--text-muted))] text-base">Knowledge Check</h4>
              <p className="text-xs text-[hsl(var(--text-muted))] opacity-80">3 mins • Quiz</p>
            </div>
            <div className="text-right">
              <span className="text-[hsl(var(--text-muted))] opacity-80 font-bold text-sm">+30 XP</span>
            </div>
          </div>
          
          {/* Action 4: Locked */}
          <div className="group relative flex items-center p-4 rounded-2xl bg-[hsl(var(--surface))] border border-[hsl(var(--border))] opacity-75">
            <div className="w-10 h-10 rounded-full bg-[hsl(var(--surface-2))] flex items-center justify-center mr-4 text-[hsl(var(--text-muted))]">
              <FileText className="w-4 h-4" />
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-[hsl(var(--text-muted))] text-base">Reflection</h4>
              <p className="text-xs text-[hsl(var(--text-muted))] opacity-80">2 mins • Journal</p>
            </div>
            <div className="text-right">
              <span className="text-[hsl(var(--text-muted))] opacity-80 font-bold text-sm">+20 XP</span>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Navigation */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-[hsl(var(--bg))]/90 backdrop-blur-xl border-t border-[hsl(var(--border))] px-6 pb-6 pt-3 flex justify-between items-center z-20">
        <NavButton icon={<Target />} label="Challenge" active={activeTab === "home"} onClick={() => setActiveTab("home")} />
        <NavButton icon={<MessageSquare />} label="Mentor" active={activeTab === "mentor"} onClick={() => setActiveTab("mentor")} />
        <NavButton icon={<Briefcase />} label="Projects" active={activeTab === "projects"} onClick={() => setActiveTab("projects")} />
        <NavButton icon={<Trophy />} label="Coach" active={activeTab === "coach"} onClick={() => setActiveTab("coach")} />
      </div>
      
      {/* Background ambient light */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/3 bg-[hsl(var(--accent))]/5 blur-[100px] pointer-events-none z-0" />
    </div>
  );
}

function NavButton({ icon, label, active, onClick }: { icon: React.ReactNode, label: string, active: boolean, onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className={`flex flex-col items-center justify-center gap-1.5 w-16 transition-colors ${active ? 'text-[hsl(var(--text))]' : 'text-[hsl(var(--text-muted))] hover:text-[hsl(var(--text))]'}`}
    >
      <div className={`relative p-1.5 rounded-xl transition-all duration-300 ${active ? 'bg-[hsl(var(--surface-2))] text-[hsl(var(--accent))]' : 'bg-transparent'}`}>
        {icon}
        {active && (
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[hsl(var(--accent))]" />
        )}
      </div>
      <span className="text-[10px] font-bold tracking-wide">{label}</span>
    </button>
  );
}
