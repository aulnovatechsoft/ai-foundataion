import React, { useState } from 'react';
import { 
  LayoutDashboard, MessageSquare, FolderKanban, BookOpen, 
  TerminalSquare, Briefcase, Settings, Bell, Search, Flame, 
  Zap, CheckCircle2, Lock, ChevronRight, Sparkles, ArrowRight, 
  MoreVertical, Activity, Calendar, Trophy, PlayCircle,
  Headphones, Award, BookMarked, Map
} from 'lucide-react';
import './final-web-app.css';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

type ThemeName = 'midnight' | 'daylight' | 'aurora';

export function FinalWebApp() {
  const [activeTheme, setActiveTheme] = useState<ThemeName>('midnight');

  return (
    <div className={`os-final-dashboard theme-${activeTheme} flex overflow-hidden w-full h-full`}>
      {/* SIDEBAR */}
      <aside className="w-[280px] border-r border-[hsl(var(--border))] flex flex-col shrink-0 bg-[hsl(var(--surface))]">
        <div className="h-[72px] flex items-center px-6 border-b border-[hsl(var(--border))]">
          <div className="flex items-center gap-3 text-[hsl(var(--text))]">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[hsl(var(--accent-2))] to-[hsl(var(--accent))] flex items-center justify-center shadow-[0_0_15px_hsl(var(--accent)/0.3)]">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-xl tracking-tight os-final-heading">Upskil OS</span>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto py-6 px-4 flex flex-col gap-1 os-final-scrollbar">
          <div className="px-3 mb-2 text-[11px] font-bold uppercase tracking-widest text-[hsl(var(--text-muted))]">28-Day Engine</div>
          <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm bg-[hsl(var(--accent))/0.1] text-[hsl(var(--accent))] font-medium">
            <LayoutDashboard className="w-4 h-4" />
            <span>Dashboard</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-[hsl(var(--text-muted))] hover:bg-[hsl(var(--surface-2))] hover:text-[hsl(var(--text))] transition-colors">
            <Map className="w-4 h-4" />
            <span>Your Path</span>
          </a>

          <div className="px-3 mt-8 mb-2 text-[11px] font-bold uppercase tracking-widest text-[hsl(var(--text-muted))]">Modules</div>
          <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-[hsl(var(--text-muted))] hover:bg-[hsl(var(--surface-2))] hover:text-[hsl(var(--text))] transition-colors">
            <MessageSquare className="w-4 h-4" />
            <span>AI Mentor</span>
            <div className="ml-auto w-2 h-2 rounded-full bg-[hsl(var(--accent-2))] shadow-[0_0_8px_hsl(var(--accent-2))]"></div>
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-[hsl(var(--text-muted))] hover:bg-[hsl(var(--surface-2))] hover:text-[hsl(var(--text))] transition-colors">
            <FolderKanban className="w-4 h-4" />
            <span>Projects</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-[hsl(var(--text-muted))] hover:bg-[hsl(var(--surface-2))] hover:text-[hsl(var(--text))] transition-colors">
            <BookMarked className="w-4 h-4" />
            <span>Prompt Library</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-[hsl(var(--text-muted))] hover:bg-[hsl(var(--surface-2))] hover:text-[hsl(var(--text))] transition-colors">
            <TerminalSquare className="w-4 h-4" />
            <span>Playground</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-[hsl(var(--text-muted))] hover:bg-[hsl(var(--surface-2))] hover:text-[hsl(var(--text))] transition-colors">
            <Briefcase className="w-4 h-4" />
            <span>Career Coach</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-[hsl(var(--text-muted))] hover:bg-[hsl(var(--surface-2))] hover:text-[hsl(var(--text))] transition-colors">
            <Award className="w-4 h-4" />
            <span>Certificates</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-[hsl(var(--text-muted))] hover:bg-[hsl(var(--surface-2))] hover:text-[hsl(var(--text))] transition-colors">
            <Headphones className="w-4 h-4" />
            <span>Audio</span>
          </a>
        </div>

        <div className="p-4 border-t border-[hsl(var(--border))] mt-auto">
          <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-[hsl(var(--text-muted))] hover:bg-[hsl(var(--surface-2))] hover:text-[hsl(var(--text))] transition-colors">
            <Settings className="w-4 h-4" />
            <span>Settings</span>
          </a>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 flex flex-col h-full overflow-hidden bg-[hsl(var(--bg))]">
        
        {/* TOPBAR */}
        <header className="h-[72px] border-b border-[hsl(var(--border))] flex items-center justify-between px-8 shrink-0 bg-[hsl(var(--surface))/0.8] backdrop-blur-xl sticky top-0 z-50">
          <div className="flex items-center gap-6">
            <div className="relative group">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[hsl(var(--text-muted))] group-focus-within:text-[hsl(var(--accent))] transition-colors" />
              <input 
                type="text" 
                placeholder="Search resources, prompts, or ask AI..." 
                className="bg-[hsl(var(--surface-2))] border border-[hsl(var(--border))] text-sm rounded-full pl-10 pr-4 py-2 w-80 text-[hsl(var(--text))] placeholder-[hsl(var(--text-muted))] focus:border-[hsl(var(--accent))] focus:ring-1 focus:ring-[hsl(var(--accent))] outline-none transition-all"
              />
            </div>
          </div>
          
          <div className="flex items-center gap-5">
            {/* THEME SWITCHER */}
            <div className="flex items-center gap-1 bg-[hsl(var(--surface-2))] p-1 rounded-full border border-[hsl(var(--border))]">
              {(['midnight', 'daylight', 'aurora'] as ThemeName[]).map(theme => (
                <button
                  key={theme}
                  onClick={() => setActiveTheme(theme)}
                  className={`px-3 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wide transition-all ${
                    activeTheme === theme 
                      ? 'bg-[hsl(var(--surface))] text-[hsl(var(--text))] shadow-sm border border-[hsl(var(--border))]' 
                      : 'text-[hsl(var(--text-muted))] hover:text-[hsl(var(--text))] border border-transparent'
                  }`}
                >
                  {theme}
                </button>
              ))}
            </div>
            
            <div className="h-6 w-px bg-[hsl(var(--border))] mx-1"></div>

            <div className="flex items-center gap-2 bg-[hsl(var(--surface-2))] px-4 py-2 rounded-full border border-[hsl(var(--border))] shadow-sm">
              <Flame className="w-4 h-4 text-orange-500 fill-orange-500" />
              <span className="text-sm font-bold text-[hsl(var(--text))]">12 Day Streak</span>
            </div>
            <div className="flex items-center gap-2 bg-[hsl(var(--surface-2))] px-4 py-2 rounded-full border border-[hsl(var(--border))] shadow-sm">
              <Zap className="w-4 h-4 text-[hsl(var(--accent-2))] fill-[hsl(var(--accent-2))]" />
              <span className="text-sm font-bold text-[hsl(var(--text))]">4,850 XP</span>
            </div>
            
            <div className="h-6 w-px bg-[hsl(var(--border))] mx-1"></div>
            
            <button className="relative text-[hsl(var(--text-muted))] hover:text-[hsl(var(--text))] transition-colors p-2 hover:bg-[hsl(var(--surface-2))] rounded-full">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-[hsl(var(--accent))] rounded-full border-2 border-[hsl(var(--surface))]"></span>
            </button>
            
            <Avatar className="w-9 h-9 border-2 border-[hsl(var(--border))] cursor-pointer hover:border-[hsl(var(--accent))] transition-colors">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>AL</AvatarFallback>
            </Avatar>
          </div>
        </header>

        {/* SCROLLABLE AREA */}
        <div className="flex-1 overflow-y-auto p-8 custom-scrollbar os-final-scrollbar">
          <div className="max-w-[1200px] mx-auto space-y-8 pb-24">
            
            {/* HERO WELCOME */}
            <div className="flex items-end justify-between animate-final-slide-up">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2.5 py-1 rounded-full bg-[hsl(var(--accent-2))/0.1] text-[hsl(var(--accent-2))] text-xs font-bold uppercase tracking-widest">Day 12 of 28</span>
                  <span className="text-[hsl(var(--text-muted))] text-sm font-medium">• Advanced Patterns</span>
                </div>
                <h1 className="text-4xl text-[hsl(var(--text))] os-final-heading mb-2">Good morning, Alex.</h1>
                <p className="text-[hsl(var(--text-muted))] text-lg">You're 42% through the challenge. Ready for today's flow?</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <p className="text-sm font-bold text-[hsl(var(--text))]">Level 4: Architect</p>
                  <p className="text-xs text-[hsl(var(--text-muted))]">150 XP to Level 5</p>
                </div>
                <div className="w-12 h-12 rounded-full border-4 border-[hsl(var(--surface-2))] flex items-center justify-center relative">
                  <svg className="w-full h-full absolute top-0 left-0 -rotate-90">
                    <circle cx="20" cy="20" r="18" fill="none" stroke="hsl(var(--accent))" strokeWidth="4" strokeDasharray="113" strokeDashoffset="45" className="drop-shadow-[0_0_4px_hsl(var(--accent))]" />
                  </svg>
                  <Trophy className="w-5 h-5 text-[hsl(var(--accent))]" />
                </div>
              </div>
            </div>

            {/* MAIN DASHBOARD GRID */}
            <div className="grid grid-cols-12 gap-6">
              
              {/* LEFT COLUMN: DAILY FLOW (7 cols) */}
              <div className="col-span-12 lg:col-span-7 flex flex-col gap-6">
                <div className="os-final-glass p-8 animate-final-slide-up delay-100 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[hsl(var(--accent))] opacity-10 blur-[100px] rounded-full pointer-events-none"></div>
                  
                  <div className="flex items-center justify-between mb-8 relative z-10">
                    <div>
                      <h2 className="text-2xl font-semibold text-[hsl(var(--text))] os-final-heading">Today's Action Plan</h2>
                      <p className="text-[hsl(var(--text-muted))] mt-1 text-sm">Chaining Prompts for Complex Outputs</p>
                    </div>
                    <Button className="bg-[hsl(var(--accent))] hover:bg-[hsl(var(--accent))/0.9] text-white rounded-full px-6">
                      Continue Flow
                    </Button>
                  </div>

                  <div className="grid grid-cols-1 gap-4 relative z-10">
                    {/* Vertical Line Connector */}
                    <div className="absolute left-[23px] top-8 bottom-8 w-0.5 bg-[hsl(var(--border))] z-0"></div>

                    {/* Task 1: Lesson (Completed) */}
                    <div className="flex gap-5 p-4 rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--surface))] opacity-70">
                      <div className="mt-1 flex-shrink-0 relative z-10 bg-[hsl(var(--surface))]">
                        <CheckCircle2 className="w-12 h-12 text-[hsl(var(--accent-2))] fill-[hsl(var(--accent-2))/0.2]" />
                      </div>
                      <div className="flex-1 pt-1">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs font-bold uppercase tracking-wider text-[hsl(var(--text-muted))]">Lesson • 5 min</span>
                          <span className="text-xs font-semibold text-[hsl(var(--text-muted))]">+50 XP</span>
                        </div>
                        <h3 className="text-lg font-medium text-[hsl(var(--text))] mb-1 line-through">The Chaining Concept</h3>
                        <p className="text-sm text-[hsl(var(--text-muted))]">Break complex tasks into dependent prompts.</p>
                      </div>
                    </div>

                    {/* Task 2: Practical Task (Active) */}
                    <div className="flex gap-5 p-5 rounded-xl border border-[hsl(var(--accent))] bg-[hsl(var(--surface-2))] shadow-[0_0_30px_hsl(var(--accent)/0.1)] relative overflow-hidden">
                      <div className="absolute left-0 top-0 w-1 h-full bg-[hsl(var(--accent))] shadow-[0_0_10px_hsl(var(--accent))]"></div>
                      <div className="mt-1 flex-shrink-0 relative z-10 bg-[hsl(var(--surface-2))]">
                        <div className="w-12 h-12 rounded-full border-2 border-[hsl(var(--accent))] flex items-center justify-center bg-[hsl(var(--accent))/0.1]">
                          <div className="w-3 h-3 rounded-full bg-[hsl(var(--accent))] animate-pulse"></div>
                        </div>
                      </div>
                      <div className="flex-1 pt-1">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs font-bold uppercase tracking-wider text-[hsl(var(--accent))]">Task • 15 min</span>
                          <span className="text-xs font-semibold text-[hsl(var(--accent))]">+150 XP</span>
                        </div>
                        <h3 className="text-xl font-medium text-[hsl(var(--text))] mb-2">Build a multi-step summarizer</h3>
                        <p className="text-sm text-[hsl(var(--text-muted))] mb-4">Create a 3-step prompt chain that extracts key facts, organizes them, and drafts an executive summary.</p>
                        <div className="flex items-center gap-3">
                          <Button className="bg-[hsl(var(--accent))] hover:bg-[hsl(var(--accent))/0.9] text-white">
                            <PlayCircle className="w-4 h-4 mr-2" /> Start Task
                          </Button>
                        </div>
                      </div>
                    </div>

                    {/* Task 3: Quiz (Locked) */}
                    <div className="flex gap-5 p-4 rounded-xl border border-transparent">
                      <div className="mt-1 flex-shrink-0 relative z-10 bg-[hsl(var(--bg))]">
                        <div className="w-12 h-12 rounded-full bg-[hsl(var(--surface))] border border-[hsl(var(--border))] flex items-center justify-center">
                          <Lock className="w-5 h-5 text-[hsl(var(--text-muted))]" />
                        </div>
                      </div>
                      <div className="flex-1 pt-2">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs font-bold uppercase tracking-wider text-[hsl(var(--text-muted))]">Quiz • 3 min</span>
                        </div>
                        <h3 className="text-lg font-medium text-[hsl(var(--text-muted))]">Knowledge Check</h3>
                      </div>
                    </div>
                    
                    {/* Task 4: Reflection (Locked) */}
                    <div className="flex gap-5 p-4 rounded-xl border border-transparent">
                      <div className="mt-1 flex-shrink-0 relative z-10 bg-[hsl(var(--bg))]">
                        <div className="w-12 h-12 rounded-full bg-[hsl(var(--surface))] border border-[hsl(var(--border))] flex items-center justify-center">
                          <Lock className="w-5 h-5 text-[hsl(var(--text-muted))]" />
                        </div>
                      </div>
                      <div className="flex-1 pt-2">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs font-bold uppercase tracking-wider text-[hsl(var(--text-muted))]">Reflection • 2 min</span>
                        </div>
                        <h3 className="text-lg font-medium text-[hsl(var(--text-muted))]">Daily Reflection</h3>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Adaptive Path Card */}
                <div className="os-final-card p-6 flex flex-col group animate-final-slide-up delay-200 relative overflow-hidden">
                   <div className="absolute right-0 top-0 w-32 h-32 bg-[hsl(var(--accent-2))/0.1] rounded-full blur-2xl"></div>
                   <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Map className="w-5 h-5 text-[hsl(var(--accent-2))]" />
                      <h3 className="text-lg font-semibold text-[hsl(var(--text))]">Your Adaptive Path</h3>
                    </div>
                    <Button variant="ghost" size="sm" className="text-[hsl(var(--accent-2))] hover:text-[hsl(var(--accent-2))] hover:bg-[hsl(var(--accent-2))/0.1]">
                      View Full
                    </Button>
                  </div>
                  <p className="text-sm text-[hsl(var(--text-muted))] mb-4 max-w-md">Based on your performance in the Week 1 logic tasks, we've adjusted your upcoming curriculum to focus more on structured output generation.</p>
                  <div className="bg-[hsl(var(--bg))] rounded-lg border border-[hsl(var(--border))] p-4 flex items-center gap-4">
                    <div className="w-10 h-10 rounded bg-[hsl(var(--surface-2))] flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-[hsl(var(--accent-2))]" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-[hsl(var(--text))]">Added: Advanced JSON Parsing</p>
                      <p className="text-xs text-[hsl(var(--text-muted))]">Slotted for Day 14 • Replaces basic extraction</p>
                    </div>
                  </div>
                </div>

              </div>

              {/* RIGHT COLUMN: MODULES (5 cols) */}
              <div className="col-span-12 lg:col-span-5 flex flex-col gap-6">
                
                {/* AI Mentor Chat Snippet */}
                <div className="os-final-card p-0 flex flex-col animate-final-slide-up delay-100 overflow-hidden border-[hsl(var(--accent-2))/0.3] hover:border-[hsl(var(--accent-2))/0.6]">
                  <div className="p-4 border-b border-[hsl(var(--border))] flex items-center justify-between bg-[hsl(var(--surface-2))]">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[hsl(var(--accent-2))] to-[hsl(var(--accent))] flex items-center justify-center">
                        <Sparkles className="w-4 h-4 text-[#fff]" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-[hsl(var(--text))]">Coach Nova</p>
                        <p className="text-[10px] text-[hsl(var(--accent-2))] font-medium uppercase tracking-wider">Online</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-[hsl(var(--text-muted))] hover:text-[hsl(var(--text))]">
                      <MoreVertical className="w-4 h-4" />
                    </Button>
                  </div>
                  <div className="p-5 flex flex-col gap-4 bg-[hsl(var(--surface))]">
                    <div className="flex gap-3">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[hsl(var(--accent-2))] to-[hsl(var(--accent))] flex items-center justify-center shrink-0 mt-1">
                        <Sparkles className="w-3 h-3 text-[#fff]" />
                      </div>
                      <div className="bg-[hsl(var(--surface-2))] border border-[hsl(var(--border))] rounded-2xl rounded-tl-sm p-3 text-sm text-[hsl(var(--text))]">
                        Ready for Day 12? I noticed you struggled with context windows yesterday. Want a quick refresher before we start chaining?
                      </div>
                    </div>
                    <div className="flex gap-3 flex-row-reverse">
                      <Avatar className="w-6 h-6 border border-[hsl(var(--border))] shrink-0 mt-1">
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>AL</AvatarFallback>
                      </Avatar>
                      <div className="bg-[hsl(var(--accent))] text-white rounded-2xl rounded-tr-sm p-3 text-sm shadow-sm">
                        Yes, please. How does it differ from system instructions?
                      </div>
                    </div>
                  </div>
                  <div className="p-3 border-t border-[hsl(var(--border))] bg-[hsl(var(--bg))]">
                    <div className="relative">
                      <input 
                        type="text" 
                        placeholder="Reply to Nova..." 
                        className="w-full bg-[hsl(var(--surface))] border border-[hsl(var(--border))] text-sm rounded-full pl-4 pr-10 py-2.5 text-[hsl(var(--text))] placeholder-[hsl(var(--text-muted))] focus:border-[hsl(var(--accent-2))] outline-none"
                      />
                      <button className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 bg-[hsl(var(--accent-2))] hover:bg-[hsl(var(--accent-2))/0.9] text-white rounded-full flex items-center justify-center transition-colors">
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Playground Multi-model */}
                <div className="os-final-card p-5 animate-final-slide-up delay-200">
                  <div className="flex items-center gap-2 mb-3 text-[hsl(var(--text-muted))]">
                    <TerminalSquare className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase tracking-wider">Playground</span>
                  </div>
                  <div className="bg-[hsl(var(--bg))] rounded-xl border border-[hsl(var(--border))] p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-sm font-medium text-[hsl(var(--text))]">System Prompt Benchmarking</h4>
                      <div className="flex -space-x-1">
                        <div className="w-6 h-6 rounded-full bg-[hsl(var(--surface))] border border-[hsl(var(--border))] flex items-center justify-center text-[9px] text-[hsl(var(--text))] font-medium z-30">G5</div>
                        <div className="w-6 h-6 rounded-full bg-[hsl(var(--surface))] border border-[hsl(var(--border))] flex items-center justify-center text-[9px] text-[hsl(var(--text))] font-medium z-20">C3</div>
                        <div className="w-6 h-6 rounded-full bg-[hsl(var(--surface))] border border-[hsl(var(--border))] flex items-center justify-center text-[9px] text-[hsl(var(--text))] font-medium z-10">P</div>
                      </div>
                    </div>
                    <Button className="w-full bg-[hsl(var(--surface-2))] hover:bg-[hsl(var(--border))] text-[hsl(var(--text))] border border-[hsl(var(--border))] shadow-none justify-between h-9 text-xs">
                      Open Workspace <ArrowRight className="w-3 h-3" />
                    </Button>
                  </div>
                </div>

                {/* Career Coach & Certificates Row */}
                <div className="grid grid-cols-2 gap-4 animate-final-slide-up delay-300">
                  {/* Career Coach */}
                  <div className="os-final-card p-5 bg-gradient-to-br from-[hsl(var(--surface))] to-[hsl(var(--surface-2))] relative overflow-hidden group">
                    <div className="absolute -bottom-4 -right-4 text-[hsl(var(--border))] opacity-50 group-hover:opacity-100 transition-opacity">
                      <Briefcase className="w-20 h-20" />
                    </div>
                    <div className="relative z-10">
                      <h4 className="text-sm font-semibold text-[hsl(var(--text))] mb-1">Career Coach</h4>
                      <p className="text-xs text-[hsl(var(--text-muted))] mb-4">Target: Sr Product Mgr</p>
                      <div className="mt-4">
                        <p className="text-[10px] font-bold text-[hsl(var(--accent))] uppercase mb-1">Next Step</p>
                        <p className="text-xs font-medium text-[hsl(var(--text))]">Add AI Strategy to Resume</p>
                      </div>
                    </div>
                  </div>

                  {/* Certificates */}
                  <div className="os-final-card p-5 bg-gradient-to-br from-[hsl(var(--surface))] to-[hsl(var(--surface-2))] relative overflow-hidden group">
                    <div className="absolute -bottom-4 -right-4 text-[hsl(var(--border))] opacity-50 group-hover:opacity-100 transition-opacity">
                      <Award className="w-20 h-20" />
                    </div>
                    <div className="relative z-10">
                      <h4 className="text-sm font-semibold text-[hsl(var(--text))] mb-1">Certificates</h4>
                      <p className="text-xs text-[hsl(var(--text-muted))] mb-4">1 Earned, 1 In Progress</p>
                      <Button size="sm" variant="outline" className="w-full text-xs h-7 bg-[hsl(var(--surface))] border-[hsl(var(--border))] text-[hsl(var(--text))]">
                        View & Share
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Projects & Prompt Library */}
                <div className="grid grid-cols-2 gap-4 animate-final-slide-up delay-300">
                   <div className="os-final-card p-4 hover:border-[hsl(var(--accent))/0.5] cursor-pointer">
                    <div className="flex items-center gap-2 mb-2">
                      <FolderKanban className="w-4 h-4 text-[hsl(var(--accent))]" />
                      <span className="text-xs font-semibold text-[hsl(var(--text))]">Projects</span>
                    </div>
                    <p className="text-xs text-[hsl(var(--text-muted))] truncate">Q3 Marketing Strategy Bot</p>
                  </div>
                  
                  <div className="os-final-card p-4 hover:border-[hsl(var(--accent-2))/0.5] cursor-pointer">
                    <div className="flex items-center gap-2 mb-2">
                      <BookMarked className="w-4 h-4 text-[hsl(var(--accent-2))]" />
                      <span className="text-xs font-semibold text-[hsl(var(--text))]">Library</span>
                    </div>
                    <p className="text-xs text-[hsl(var(--text-muted))] truncate">14 Saved Prompts</p>
                  </div>
                </div>

                {/* Audio Player Mini */}
                <div className="os-final-card p-4 animate-final-slide-up delay-300 border-[hsl(var(--border))] flex items-center gap-4 bg-[hsl(var(--surface-2))]">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-tr from-[hsl(var(--accent))] to-[hsl(var(--accent-2))] flex items-center justify-center shrink-0 shadow-sm relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/20"></div>
                    <Headphones className="w-5 h-5 text-white relative z-10" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-bold text-[hsl(var(--accent-2))] uppercase tracking-widest mb-0.5">Resume</p>
                    <h4 className="text-sm font-semibold text-[hsl(var(--text))] truncate">Chaining Concepts Audio</h4>
                  </div>
                  <Button size="icon" className="w-10 h-10 rounded-full bg-[hsl(var(--accent))] hover:bg-[hsl(var(--accent))/0.9] text-white shrink-0">
                    <PlayCircle className="w-5 h-5" />
                  </Button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
