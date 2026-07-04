import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  MessageSquare, 
  FolderKanban, 
  BookOpen, 
  TerminalSquare, 
  Briefcase, 
  Settings,
  Bell,
  Search,
  Flame,
  Zap,
  CheckCircle2,
  Lock,
  ChevronRight,
  Sparkles,
  ArrowRight,
  MoreVertical,
  Activity,
  Calendar,
  Trophy,
  PlayCircle
} from 'lucide-react';
import './_group.css';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const THEMES = {
  Midnight: {
    '--bg': '230 15% 7%', '--surface': '230 15% 10%', '--surface-2': '230 15% 14%',
    '--text': '0 0% 98%', '--text-muted': '230 15% 60%', '--border': '230 15% 18%',
    '--accent': '255 85% 65%', '--accent-2': '185 100% 45%'
  },
  Daylight: {
    '--bg': '220 30% 97%', '--surface': '0 0% 100%', '--surface-2': '220 25% 94%',
    '--text': '230 28% 12%', '--text-muted': '230 12% 42%', '--border': '230 16% 87%',
    '--accent': '255 80% 60%', '--accent-2': '190 95% 36%'
  },
  Aurora: {
    '--bg': '250 25% 8%', '--surface': '250 22% 12%', '--surface-2': '250 20% 16%',
    '--text': '30 30% 97%', '--text-muted': '258 12% 64%', '--border': '260 20% 20%',
    '--accent': '12 90% 62%', '--accent-2': '32 96% 60%'
  }
};

type ThemeName = keyof typeof THEMES;

export function DashboardDesktop() {
  const [activeTheme, setActiveTheme] = useState<ThemeName>('Midnight');

  return (
    <div 
      className="os-dashboard flex overflow-hidden"
      style={THEMES[activeTheme] as React.CSSProperties}
    >
      
      {/* SIDEBAR */}
      <aside className="w-64 border-r flex flex-col shrink-0 bg-[hsl(var(--surface))]">
        <div className="h-16 flex items-center px-6 border-b">
          <div className="flex items-center gap-2 text-[hsl(var(--text))]">
            <div className="w-8 h-8 rounded bg-gradient-to-br from-[hsl(var(--accent-2))] to-[hsl(var(--accent))] flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-[#fff]" />
            </div>
            <span className="font-bold text-lg tracking-tight os-heading">Upskil OS</span>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto py-6 px-3 flex flex-col gap-1">
          <div className="px-3 mb-2 text-xs font-semibold uppercase tracking-wider text-[hsl(var(--text-muted))]">28-Day Engine</div>
          <a href="#" className="os-sidebar-link flex items-center gap-3 px-3 py-2 rounded-md text-sm text-[hsl(var(--text-muted))] border-l-2 border-transparent" data-active="true">
            <LayoutDashboard className="w-4 h-4" />
            <span className="font-medium">Dashboard</span>
          </a>
          <a href="#" className="os-sidebar-link flex items-center gap-3 px-3 py-2 rounded-md text-sm text-[hsl(var(--text-muted))] border-l-2 border-transparent">
            <Calendar className="w-4 h-4" />
            <span className="font-medium">Curriculum</span>
          </a>

          <div className="px-3 mt-8 mb-2 text-xs font-semibold uppercase tracking-wider text-[hsl(var(--text-muted))]">Modules</div>
          <a href="#" className="os-sidebar-link flex items-center gap-3 px-3 py-2 rounded-md text-sm text-[hsl(var(--text-muted))] border-l-2 border-transparent">
            <MessageSquare className="w-4 h-4" />
            <span className="font-medium">AI Mentor</span>
            <div className="ml-auto w-2 h-2 rounded-full bg-[hsl(var(--accent-2))]"></div>
          </a>
          <a href="#" className="os-sidebar-link flex items-center gap-3 px-3 py-2 rounded-md text-sm text-[hsl(var(--text-muted))] border-l-2 border-transparent">
            <FolderKanban className="w-4 h-4" />
            <span className="font-medium">Projects</span>
          </a>
          <a href="#" className="os-sidebar-link flex items-center gap-3 px-3 py-2 rounded-md text-sm text-[hsl(var(--text-muted))] border-l-2 border-transparent">
            <BookOpen className="w-4 h-4" />
            <span className="font-medium">Prompt Library</span>
          </a>
          <a href="#" className="os-sidebar-link flex items-center gap-3 px-3 py-2 rounded-md text-sm text-[hsl(var(--text-muted))] border-l-2 border-transparent">
            <TerminalSquare className="w-4 h-4" />
            <span className="font-medium">Playground</span>
          </a>
          <a href="#" className="os-sidebar-link flex items-center gap-3 px-3 py-2 rounded-md text-sm text-[hsl(var(--text-muted))] border-l-2 border-transparent">
            <Briefcase className="w-4 h-4" />
            <span className="font-medium">Career Coach</span>
          </a>
        </div>

        <div className="p-4 border-t mt-auto">
          <a href="#" className="os-sidebar-link flex items-center gap-3 px-3 py-2 rounded-md text-sm text-[hsl(var(--text-muted))] border-l-2 border-transparent">
            <Settings className="w-4 h-4" />
            <span className="font-medium">Settings</span>
          </a>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        
        {/* TOPBAR */}
        <header className="h-16 border-b flex items-center justify-between px-8 shrink-0 bg-[hsl(var(--bg))/0.8] backdrop-blur-md sticky top-0 z-10">
          <div className="flex items-center gap-6">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[hsl(var(--text-muted))]" />
              <input 
                type="text" 
                placeholder="Search resources, prompts, or ask AI..." 
                className="bg-[hsl(var(--surface-2))] border-none text-sm rounded-full pl-10 pr-4 py-2 w-80 text-[hsl(var(--text))] placeholder-[hsl(var(--text-muted))] focus:ring-1 focus:ring-[hsl(var(--accent))] outline-none transition-all"
              />
            </div>
          </div>
          
          <div className="flex items-center gap-5">
            {/* THEME SWITCHER */}
            <div className="flex items-center gap-1 bg-[hsl(var(--surface-2))] p-1 rounded-full border border-[hsl(var(--border))]">
              {(Object.keys(THEMES) as ThemeName[]).map(theme => (
                <button
                  key={theme}
                  onClick={() => setActiveTheme(theme)}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                    activeTheme === theme 
                      ? 'bg-[hsl(var(--surface))] text-[hsl(var(--text))] shadow-sm' 
                      : 'text-[hsl(var(--text-muted))] hover:text-[hsl(var(--text))] hover:bg-[hsl(var(--surface))/0.5]'
                  }`}
                >
                  {theme}
                </button>
              ))}
            </div>
            
            <div className="h-6 w-px bg-[hsl(var(--border))] mx-1"></div>

            <div className="flex items-center gap-2 bg-[hsl(var(--surface-2))] px-3 py-1.5 rounded-full border border-[hsl(var(--border))]">
              <Flame className="w-4 h-4 text-orange-500 fill-orange-500" />
              <span className="text-sm font-bold text-[hsl(var(--text))]">12 Day Streak</span>
            </div>
            <div className="flex items-center gap-2 bg-[hsl(var(--surface-2))] px-3 py-1.5 rounded-full border border-[hsl(var(--border))]">
              <Zap className="w-4 h-4 text-[hsl(var(--accent-2))] fill-[hsl(var(--accent-2))]" />
              <span className="text-sm font-bold text-[hsl(var(--text))]">4,850 XP</span>
            </div>
            
            <div className="h-6 w-px bg-[hsl(var(--border))] mx-1"></div>
            
            <button className="relative text-[hsl(var(--text-muted))] hover:text-[hsl(var(--text))] transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[hsl(var(--accent))] rounded-full border-2 border-[hsl(var(--bg))]"></span>
            </button>
            
            <Avatar className="w-8 h-8 border border-[hsl(var(--border))] cursor-pointer">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>AL</AvatarFallback>
            </Avatar>
          </div>
        </header>

        {/* SCROLLABLE AREA */}
        <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
          <div className="max-w-5xl mx-auto space-y-8 pb-20">
            
            {/* HERO WELCOME */}
            <div className="flex items-end justify-between animate-slide-in-up">
              <div>
                <p className="text-[hsl(var(--accent-2))] font-semibold text-sm tracking-widest uppercase mb-1">Week 2 • Advanced Patterns</p>
                <h1 className="text-4xl text-[hsl(var(--text))] os-heading mb-2">Good morning, Alex.</h1>
                <p className="text-[hsl(var(--text-muted))] text-lg">You're 42% through the challenge. Let's conquer Day 12.</p>
              </div>
              <div className="flex items-center gap-3">
                <Button variant="outline" className="border-[hsl(var(--border))] bg-[hsl(var(--surface))] text-[hsl(var(--text))] hover:bg-[hsl(var(--surface-2))] hover:text-[hsl(var(--text))]">
                  View Timeline
                </Button>
              </div>
            </div>

            {/* DAILY ACTION ENGINE */}
            <div className="os-glass-panel p-8 animate-slide-in-up delay-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[hsl(var(--accent))] opacity-5 blur-[100px] rounded-full pointer-events-none"></div>
              
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-2xl font-semibold text-[hsl(var(--text))] os-heading">Today's Action Plan</h2>
                  <p className="text-[hsl(var(--text-muted))] mt-1">Chaining Prompts for Complex Outputs</p>
                </div>
                <div className="flex gap-1.5 items-center">
                  <span className="text-xs font-medium text-[hsl(var(--text-muted))] mr-2">Week 2 Progress</span>
                  {[1, 2, 3, 4, 5, 6, 7].map((day) => (
                    <div 
                      key={day} 
                      className={`w-8 h-2 rounded-full ${day < 5 ? 'bg-[hsl(var(--accent))]' : day === 5 ? 'bg-[hsl(var(--accent-2))] os-glow-effect' : 'bg-[hsl(var(--border))]'}`}
                      title={`Day ${day + 7}`}
                    />
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-12 gap-8 relative">
                {/* Vertical Line Connector */}
                <div className="absolute left-[19px] top-6 bottom-10 w-0.5 bg-[hsl(var(--border))] z-0"></div>

                <div className="col-span-8 flex flex-col gap-4 relative z-10">
                  
                  {/* Task 1: Lesson (Completed) */}
                  <div className="os-task-row flex gap-4 p-4 rounded-xl border border-transparent" data-status="completed">
                    <div className="mt-1 flex-shrink-0">
                      <CheckCircle2 className="w-10 h-10 text-[hsl(var(--accent-2))] fill-[hsl(var(--accent-2))/0.2]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold uppercase tracking-wider text-[hsl(var(--accent-2))]">Step 1</span>
                          <span className="text-xs text-[hsl(var(--text-muted))]">• 5 min</span>
                        </div>
                        <span className="text-xs font-semibold text-[hsl(var(--text-muted))]">+50 XP</span>
                      </div>
                      <h3 className="text-lg font-medium text-[hsl(var(--text))] mb-1 line-through opacity-70">Micro-Lesson: The Chaining Concept</h3>
                      <p className="text-sm text-[hsl(var(--text-muted))] mb-3">Learn how to break complex tasks into a sequence of dependent prompts.</p>
                      <Button size="sm" variant="outline" className="h-8 text-xs bg-transparent border-[hsl(var(--border))] text-[hsl(var(--text-muted))] hover:text-[hsl(var(--text))] hover:bg-[hsl(var(--surface-2))]">Review Lesson</Button>
                    </div>
                  </div>

                  {/* Task 2: Practical Task (Active) */}
                  <div className="os-task-row flex gap-4 p-5 rounded-xl bg-[hsl(var(--surface-2))] shadow-lg os-glow-effect relative overflow-hidden" data-status="active">
                    <div className="absolute top-0 left-0 w-1 h-full bg-[hsl(var(--accent))]"></div>
                    <div className="mt-1 flex-shrink-0">
                      <div className="w-10 h-10 rounded-full border-2 border-[hsl(var(--accent))] flex items-center justify-center bg-[hsl(var(--accent))/0.1]">
                        <div className="w-3 h-3 rounded-full bg-[hsl(var(--accent))] animate-pulse"></div>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold uppercase tracking-wider text-[hsl(var(--accent))]">Step 2</span>
                          <span className="text-xs text-[hsl(var(--text-muted))]">• 15 min</span>
                        </div>
                        <span className="text-xs font-semibold text-[hsl(var(--accent))]">+150 XP</span>
                      </div>
                      <h3 className="text-xl font-medium text-[hsl(var(--text))] mb-2">Build a multi-step summarizer</h3>
                      <p className="text-sm text-[hsl(var(--text-muted))] mb-4">Create a 3-step prompt chain that extracts key facts, organizes them, and drafts an executive summary.</p>
                      <div className="flex items-center gap-3">
                        <button className="os-button-primary px-5 py-2.5 rounded-lg text-sm font-semibold flex items-center gap-2">
                          <PlayCircle className="w-4 h-4" />
                          Start Practical Task
                        </button>
                        <span className="text-xs text-[hsl(var(--text-muted))]">Requires Playground</span>
                      </div>
                    </div>
                  </div>

                  {/* Task 3: Quiz (Locked) */}
                  <div className="os-task-row flex gap-4 p-4 rounded-xl border border-transparent" data-status="locked">
                    <div className="mt-1 flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-[hsl(var(--surface))] border border-[hsl(var(--border))] flex items-center justify-center">
                        <Lock className="w-4 h-4 text-[hsl(var(--text-muted))]" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold uppercase tracking-wider text-[hsl(var(--text-muted))]">Step 3</span>
                          <span className="text-xs text-[hsl(var(--text-muted))]">• 3 min</span>
                        </div>
                        <span className="text-xs font-semibold text-[hsl(var(--text-muted))]">+30 XP</span>
                      </div>
                      <h3 className="text-lg font-medium text-[hsl(var(--text))] mb-1">Knowledge Check</h3>
                      <p className="text-sm text-[hsl(var(--text-muted))]">Complete the practical task to unlock today's quiz.</p>
                    </div>
                  </div>
                  
                  {/* Task 4: Reflection (Locked) */}
                  <div className="os-task-row flex gap-4 p-4 rounded-xl border border-transparent" data-status="locked">
                    <div className="mt-1 flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-[hsl(var(--surface))] border border-[hsl(var(--border))] flex items-center justify-center">
                        <Lock className="w-4 h-4 text-[hsl(var(--text-muted))]" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold uppercase tracking-wider text-[hsl(var(--text-muted))]">Step 4</span>
                          <span className="text-xs text-[hsl(var(--text-muted))]">• 2 min</span>
                        </div>
                        <span className="text-xs font-semibold text-[hsl(var(--text-muted))]">+20 XP</span>
                      </div>
                      <h3 className="text-lg font-medium text-[hsl(var(--text))] mb-1">Daily Reflection</h3>
                      <p className="text-sm text-[hsl(var(--text-muted))]">Log your learnings for the AI Mentor to track your progress.</p>
                    </div>
                  </div>

                </div>

                {/* Right Side Stats / Mentor */}
                <div className="col-span-4 flex flex-col gap-6">
                  {/* Motivation Card */}
                  <div className="os-card p-6 flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-[hsl(var(--accent))/0.1] flex items-center justify-center mb-4">
                      <Trophy className="w-8 h-8 text-[hsl(var(--accent))]" />
                    </div>
                    <h4 className="text-lg font-semibold text-[hsl(var(--text))] mb-2">Milestone Approaching</h4>
                    <p className="text-sm text-[hsl(var(--text-muted))] mb-4">You're 3 days away from unlocking the <strong className="text-[hsl(var(--text))]">Mastering Tone</strong> certificate. Keep pushing!</p>
                    <div className="w-full bg-[hsl(var(--bg))] h-2 rounded-full overflow-hidden border border-[hsl(var(--border))]">
                      <div className="os-progress-bar h-full w-[70%]"></div>
                    </div>
                  </div>

                  {/* AI Mentor Nudge */}
                  <div className="os-card p-5 border-[hsl(var(--accent-2))/0.3] relative overflow-hidden group hover:border-[hsl(var(--accent-2))/0.6]">
                    <div className="absolute -right-4 -top-4 w-24 h-24 bg-[hsl(var(--accent-2))/0.1] rounded-full blur-xl group-hover:bg-[hsl(var(--accent-2))/0.2] transition-colors"></div>
                    <div className="flex items-start gap-3 relative z-10">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[hsl(var(--accent-2))] to-[hsl(var(--accent))] flex items-center justify-center shrink-0">
                        <Sparkles className="w-4 h-4 text-[#fff]" />
                      </div>
                      <div>
                        <p className="text-sm text-[hsl(var(--text))] font-medium mb-1">Coach Nova</p>
                        <p className="text-xs text-[hsl(var(--text-muted))] leading-relaxed mb-3">I noticed you struggled a bit with context windows yesterday. Should we review that before today's task?</p>
                        <Button size="sm" className="h-7 text-xs bg-[hsl(var(--accent-2))/0.1] text-[hsl(var(--accent-2))] hover:bg-[hsl(var(--accent-2))/0.2] border-none px-3">
                          Chat with Nova
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* SECONDARY DASHBOARD CARDS */}
            <div className="grid grid-cols-3 gap-6 animate-slide-in-up delay-200">
              
              {/* Active Project */}
              <div className="os-card p-6 flex flex-col cursor-pointer group">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 text-[hsl(var(--text-muted))]">
                    <FolderKanban className="w-4 h-4" />
                    <span className="text-xs font-semibold uppercase tracking-wider">Active Project</span>
                  </div>
                  <MoreVertical className="w-4 h-4 text-[hsl(var(--text-muted))]" />
                </div>
                <h3 className="text-lg font-medium text-[hsl(var(--text))] mb-2 group-hover:text-[hsl(var(--accent))] transition-colors">Q3 Marketing Strategy Bot</h3>
                <p className="text-sm text-[hsl(var(--text-muted))] mb-4 flex-1">Building an internal tool to draft campaign briefs based on product specs.</p>
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex -space-x-2">
                    <div className="w-6 h-6 rounded-full bg-[hsl(var(--bg))] border border-[hsl(var(--border))] flex items-center justify-center text-[10px] text-[hsl(var(--text-muted))]">GPT-4</div>
                    <div className="w-6 h-6 rounded-full bg-[hsl(var(--bg))] border border-[hsl(var(--border))] flex items-center justify-center text-[10px] text-[hsl(var(--text-muted))]">Claude</div>
                  </div>
                  <span className="text-xs font-medium text-[hsl(var(--accent-2))] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Open Workspace <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>

              {/* Saved Prompts */}
              <div className="os-card p-6 flex flex-col cursor-pointer group">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 text-[hsl(var(--text-muted))]">
                    <BookOpen className="w-4 h-4" />
                    <span className="text-xs font-semibold uppercase tracking-wider">Prompt Library</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-[hsl(var(--text-muted))]" />
                </div>
                <div className="space-y-3 flex-1">
                  <div className="p-3 rounded-lg bg-[hsl(var(--bg))] border border-[hsl(var(--border))] group-hover:border-[hsl(var(--border))/0.8]">
                    <p className="text-sm text-[hsl(var(--text))] font-medium truncate">Few-Shot JSON Extractor</p>
                    <p className="text-xs text-[hsl(var(--text-muted))] mt-1">Used 12 times</p>
                  </div>
                  <div className="p-3 rounded-lg bg-[hsl(var(--bg))] border border-[hsl(var(--border))] group-hover:border-[hsl(var(--border))/0.8]">
                    <p className="text-sm text-[hsl(var(--text))] font-medium truncate">Tone-Matching Email Drafter</p>
                    <p className="text-xs text-[hsl(var(--text-muted))] mt-1">Used 8 times</p>
                  </div>
                </div>
              </div>

              {/* Career Coach Goal */}
              <div className="os-card p-6 flex flex-col cursor-pointer group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[hsl(var(--accent))/0.05] rounded-full blur-2xl pointer-events-none"></div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 text-[hsl(var(--text-muted))]">
                    <Briefcase className="w-4 h-4" />
                    <span className="text-xs font-semibold uppercase tracking-wider">Career Goal</span>
                  </div>
                  <Activity className="w-4 h-4 text-[hsl(var(--accent))]" />
                </div>
                <h3 className="text-lg font-medium text-[hsl(var(--text))] mb-2">Senior Product Manager</h3>
                <p className="text-sm text-[hsl(var(--text-muted))] mb-4">Target: Land promotion by Q4. Focused on integrating AI into product workflows.</p>
                
                <div className="mt-auto bg-[hsl(var(--bg))] rounded-lg p-3 border border-[hsl(var(--border))]">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs text-[hsl(var(--text-muted))]">Skill alignment</span>
                    <span className="text-xs font-bold text-[hsl(var(--text))]">68%</span>
                  </div>
                  <div className="w-full bg-[hsl(var(--surface-2))] h-1.5 rounded-full overflow-hidden border border-[hsl(var(--border))]">
                    <div className="bg-[hsl(var(--accent))] h-full w-[68%]"></div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </main>

      {/* FLOATING CHAT WIDGET */}
      <button className="fixed bottom-8 right-8 w-14 h-14 rounded-full bg-gradient-to-br from-[hsl(var(--accent-2))] to-[hsl(var(--accent))] shadow-lg flex items-center justify-center hover:scale-105 transition-transform os-glow-effect z-50 group">
        <MessageSquare className="w-6 h-6 text-[#fff]" />
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-[hsl(var(--bg))] animate-pulse"></span>
        
        {/* Tooltip */}
        <div className="absolute right-16 top-1/2 -translate-y-1/2 bg-[hsl(var(--surface-2))] text-[hsl(var(--text))] text-sm font-medium px-4 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-[hsl(var(--border))] shadow-xl">
          Ask Nova
          <div className="absolute right-[-5px] top-1/2 -translate-y-1/2 border-l-[6px] border-l-[hsl(var(--surface-2))] border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent"></div>
        </div>
      </button>

    </div>
  );
}
