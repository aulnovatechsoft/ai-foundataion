import React, { useState } from 'react';
import { 
  CheckCircle2, 
  ChevronRight, 
  Circle, 
  Clock, 
  Compass, 
  Flame, 
  Home, 
  MessageSquare, 
  Mic, 
  Pause, 
  Play, 
  Search, 
  Share2, 
  Sparkles, 
  Trophy, 
  User, 
  Zap,
  FolderDot,
  GraduationCap,
  PlaySquare,
  Bookmark,
  Briefcase
} from 'lucide-react';
import './final-mobile.css';

export function FinalMobileApp() {
  const [theme, setTheme] = useState<'midnight' | 'daylight' | 'aurora'>('midnight');
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-zinc-950 p-4 font-sans text-white">
      {/* Phone Frame */}
      <div 
        className="relative w-[390px] h-[844px] bg-black rounded-[48px] p-2 shadow-2xl shadow-black/50 ring-1 ring-white/10 overflow-hidden"
        style={{ boxShadow: '0 0 0 1px rgba(255,255,255,0.1), 0 25px 50px -12px rgba(0,0,0,0.5)' }}
      >
        <div 
          className="final-mobile-container relative w-full h-full rounded-[40px] overflow-hidden flex flex-col"
          data-theme={theme}
        >
          {/* Status Bar */}
          <div className="absolute top-0 w-full h-12 flex items-center justify-between px-8 z-50 pointer-events-none">
            <span className="text-[15px] font-medium tracking-tight mt-1" style={{ color: 'hsl(var(--text))' }}>9:41</span>
            <div className="flex items-center gap-1.5 mt-1">
              <div className="w-4 h-3 rounded-[2px] border" style={{ borderColor: 'hsl(var(--text))' }}></div>
              <div className="w-3.5 h-3.5 rounded-full border" style={{ borderColor: 'hsl(var(--text))' }}></div>
              <div className="w-5 h-2.5 rounded-[3px] border" style={{ borderColor: 'hsl(var(--text))' }}></div>
            </div>
          </div>

          {/* Dynamic Island Notch */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[120px] h-[32px] bg-black rounded-full z-50 pointer-events-none"></div>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto fm-scrollbar pt-14 pb-24">
            
            {/* Header */}
            <div className="px-5 py-2 flex items-center justify-between fm-animate-fade-in-up" style={{ animationDelay: '0ms' }}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden border border-white/10">
                  <img src="https://ui-avatars.com/api/?name=Alex&background=random" alt="Alex" className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="text-xs font-medium" style={{ color: 'hsl(var(--text-muted))' }}>Good morning,</div>
                  <div className="text-base font-semibold font-clash" style={{ color: 'hsl(var(--text))' }}>Alex</div>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-black/20 backdrop-blur-md rounded-full p-1 border border-white/5">
                {(['midnight', 'daylight', 'aurora'] as const).map(t => (
                  <button
                    key={t}
                    onClick={() => setTheme(t)}
                    className={`w-6 h-6 rounded-full border-2 transition-all ${theme === t ? 'border-white scale-110' : 'border-transparent opacity-50 hover:opacity-100'}`}
                    style={{ 
                      background: t === 'midnight' ? '#0f172a' : t === 'daylight' ? '#f8fafc' : '#1e1b4b',
                    }}
                    title={t}
                  />
                ))}
              </div>
            </div>

            {/* Stats Row */}
            <div className="px-5 mt-4 flex items-center gap-3 fm-animate-fade-in-up" style={{ animationDelay: '50ms' }}>
              <div className="flex-1 fm-glass rounded-2xl p-3 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full flex items-center justify-center bg-orange-500/20 text-orange-500">
                  <Flame size={16} className="fill-current" />
                </div>
                <div>
                  <div className="text-sm font-bold font-clash" style={{ color: 'hsl(var(--text))' }}>12 Days</div>
                  <div className="text-[10px] uppercase tracking-wider font-semibold" style={{ color: 'hsl(var(--text-muted))' }}>Streak</div>
                </div>
              </div>
              <div className="flex-1 fm-glass rounded-2xl p-3 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full flex items-center justify-center bg-blue-500/20 text-blue-500">
                  <Zap size={16} className="fill-current" />
                </div>
                <div>
                  <div className="text-sm font-bold font-clash" style={{ color: 'hsl(var(--text))' }}>4,850</div>
                  <div className="text-[10px] uppercase tracking-wider font-semibold" style={{ color: 'hsl(var(--text-muted))' }}>Total XP</div>
                </div>
              </div>
            </div>

            {/* Challenge Engine Hero */}
            <div className="px-5 mt-6 fm-animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              <div className="relative rounded-3xl overflow-hidden p-5" style={{ background: 'linear-gradient(145deg, hsla(var(--surface-2), 1), hsla(var(--surface), 1))', border: '1px solid hsla(var(--border), 0.5)' }}>
                {/* Background glow */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-500/30 blur-3xl rounded-full"></div>
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-purple-500/20 blur-3xl rounded-full"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="px-3 py-1 rounded-full text-xs font-semibold" style={{ backgroundColor: 'hsla(var(--accent), 0.15)', color: 'hsl(var(--accent))' }}>
                      DAY 12 OF 28
                    </div>
                    <div className="text-sm font-medium" style={{ color: 'hsl(var(--text-muted))' }}>
                      42% Complete
                    </div>
                  </div>
                  
                  <h2 className="text-2xl font-bold font-clash mb-1" style={{ color: 'hsl(var(--text))' }}>Advanced Prompt Chains</h2>
                  <p className="text-sm mb-6 leading-relaxed" style={{ color: 'hsl(var(--text-muted))' }}>Master multi-step reasoning by chaining LLM outputs together.</p>
                  
                  {/* Flow Sequence */}
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full flex items-center justify-center bg-green-500/20 text-green-500">
                        <CheckCircle2 size={14} className="fill-current text-green-500" />
                      </div>
                      <div className="text-sm font-medium" style={{ color: 'hsl(var(--text))' }}>Lesson: Chain Logic</div>
                    </div>
                    <div className="flex items-start gap-3 relative">
                      <div className="absolute left-3 top-[-14px] w-[2px] h-[14px] bg-green-500/30"></div>
                      <div className="w-6 h-6 rounded-full flex items-center justify-center border-2" style={{ borderColor: 'hsl(var(--accent))', color: 'hsl(var(--accent))' }}>
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'hsl(var(--accent))' }}></div>
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium" style={{ color: 'hsl(var(--text))' }}>Task: Build a Research Agent</div>
                        <div className="text-xs mt-1" style={{ color: 'hsl(var(--text-muted))' }}>In progress • 15 mins</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 relative">
                      <div className="absolute left-3 top-[-26px] w-[2px] h-[26px]" style={{ backgroundColor: 'hsla(var(--border), 1)' }}></div>
                      <div className="w-6 h-6 rounded-full flex items-center justify-center border-2" style={{ borderColor: 'hsla(var(--border), 1)', color: 'hsla(var(--border), 1)' }}>
                        <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'hsla(var(--border), 1)' }}></div>
                      </div>
                      <div className="text-sm font-medium opacity-50" style={{ color: 'hsl(var(--text))' }}>Quiz & Reflection</div>
                    </div>
                  </div>
                  
                  <button className="w-full py-3.5 rounded-xl font-semibold flex items-center justify-center gap-2 fm-glow transition-transform active:scale-95 text-white" style={{ background: 'linear-gradient(to right, hsl(var(--accent)), hsl(var(--accent-2)))' }}>
                    Continue Task <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            </div>

            {/* Audio Mini Player */}
            <div className="px-5 mt-4 fm-animate-fade-in-up" style={{ animationDelay: '150ms' }}>
              <div className="fm-glass rounded-2xl p-4 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg relative overflow-hidden">
                  <Mic size={20} className="text-white" />
                  <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-black/20 backdrop-blur-sm flex items-end justify-center pb-0.5">
                    <div className="flex gap-0.5 items-end h-2">
                      <div className="w-0.5 h-full bg-white/70 animate-pulse"></div>
                      <div className="w-0.5 h-1/2 bg-white/70 animate-pulse" style={{ animationDelay: '100ms' }}></div>
                      <div className="w-0.5 h-3/4 bg-white/70 animate-pulse" style={{ animationDelay: '200ms' }}></div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[10px] uppercase tracking-wider font-bold mb-1" style={{ color: 'hsl(var(--accent))' }}>Daily Audio</div>
                  <h4 className="text-sm font-semibold truncate" style={{ color: 'hsl(var(--text))' }}>The Architecture of Agents</h4>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex-1 h-1 rounded-full bg-white/10">
                      <div className="h-full rounded-full bg-indigo-400 w-1/3"></div>
                    </div>
                    <span className="text-[10px]" style={{ color: 'hsl(var(--text-muted))' }}>4:20 / 12:45</span>
                  </div>
                </div>
                <button 
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 transition-colors" style={{ color: 'hsl(var(--text))' }}>
                  {isPlaying ? <Pause size={18} className="fill-current" /> : <Play size={18} className="fill-current ml-1" />}
                </button>
              </div>
            </div>

            {/* Adaptive Path */}
            <div className="px-5 mt-6 fm-animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <h3 className="text-lg font-bold font-clash mb-3 flex items-center gap-2" style={{ color: 'hsl(var(--text))' }}>
                <Compass size={18} style={{ color: 'hsl(var(--accent))' }} /> Your Path
              </h3>
              <div className="flex gap-3 overflow-x-auto fm-scrollbar pb-2">
                <div className="min-w-[140px] p-4 rounded-2xl fm-glass border" style={{ borderColor: 'hsla(var(--accent), 0.3)' }}>
                  <div className="w-8 h-8 rounded-full mb-3 flex items-center justify-center" style={{ backgroundColor: 'hsla(var(--accent), 0.1)', color: 'hsl(var(--accent))' }}>
                    <Sparkles size={16} />
                  </div>
                  <h4 className="text-sm font-bold mb-1" style={{ color: 'hsl(var(--text))' }}>AI Automations</h4>
                  <p className="text-[10px] leading-tight" style={{ color: 'hsl(var(--text-muted))' }}>Tailored to your goal: saving 10h/week.</p>
                </div>
                <div className="min-w-[140px] p-4 rounded-2xl fm-glass opacity-70">
                  <div className="w-8 h-8 rounded-full mb-3 flex items-center justify-center bg-white/5">
                    <FolderDot size={16} />
                  </div>
                  <h4 className="text-sm font-bold mb-1" style={{ color: 'hsl(var(--text))' }}>Data Analysis</h4>
                  <p className="text-[10px] leading-tight" style={{ color: 'hsl(var(--text-muted))' }}>Unlocks at Level 5.</p>
                </div>
              </div>
            </div>

            {/* AI Mentor Nova */}
            <div className="px-5 mt-6 fm-animate-fade-in-up" style={{ animationDelay: '250ms' }}>
              <h3 className="text-lg font-bold font-clash mb-3 flex items-center gap-2" style={{ color: 'hsl(var(--text))' }}>
                <MessageSquare size={18} style={{ color: 'hsl(var(--accent))' }} /> Coach Nova
              </h3>
              <div className="fm-glass rounded-2xl p-4">
                <div className="flex gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-500 to-blue-500 flex items-center justify-center flex-shrink-0">
                    <Sparkles size={14} className="text-white" />
                  </div>
                  <div className="bg-white/5 rounded-2xl rounded-tl-none p-3 text-sm leading-relaxed border border-white/5" style={{ color: 'hsl(var(--text))' }}>
                    I noticed you struggled a bit with the prompt structure in yesterday's task. Want me to review your latest draft?
                  </div>
                </div>
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Ask Nova anything..." 
                    className="w-full bg-black/20 border border-white/10 rounded-full py-3 px-4 text-sm outline-none focus:border-blue-500 transition-colors"
                    style={{ color: 'hsl(var(--text))' }}
                  />
                  <button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: 'hsl(var(--accent))', color: '#fff' }}>
                    <Search size={14} />
                  </button>
                </div>
              </div>
            </div>

            {/* Playground & Projects Grid */}
            <div className="px-5 mt-6 grid grid-cols-2 gap-3 fm-animate-fade-in-up" style={{ animationDelay: '300ms' }}>
              <div className="fm-glass p-4 rounded-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-16 h-16 bg-blue-500/20 blur-2xl rounded-full group-hover:bg-blue-500/40 transition-colors"></div>
                <PlaySquare size={20} className="mb-3" style={{ color: 'hsl(var(--accent))' }} />
                <h4 className="text-sm font-bold font-clash mb-1" style={{ color: 'hsl(var(--text))' }}>Playground</h4>
                <p className="text-[10px]" style={{ color: 'hsl(var(--text-muted))' }}>GPT-5, Claude, Gemini, DALL-E, Perplexity</p>
              </div>
              <div className="fm-glass p-4 rounded-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-16 h-16 bg-purple-500/20 blur-2xl rounded-full group-hover:bg-purple-500/40 transition-colors"></div>
                <Briefcase size={20} className="mb-3" style={{ color: 'hsl(var(--accent-2))' }} />
                <h4 className="text-sm font-bold font-clash mb-1" style={{ color: 'hsl(var(--text))' }}>Projects (2)</h4>
                <p className="text-[10px]" style={{ color: 'hsl(var(--text-muted))' }}>In progress</p>
              </div>
            </div>

            {/* Prompts & Career */}
            <div className="px-5 mt-3 grid grid-cols-2 gap-3 fm-animate-fade-in-up" style={{ animationDelay: '350ms' }}>
              <div className="fm-glass p-4 rounded-2xl">
                <Bookmark size={20} className="mb-3 text-emerald-400" />
                <h4 className="text-sm font-bold font-clash mb-1" style={{ color: 'hsl(var(--text))' }}>Prompts</h4>
                <p className="text-[10px]" style={{ color: 'hsl(var(--text-muted))' }}>14 Saved</p>
              </div>
              <div className="fm-glass p-4 rounded-2xl">
                <User size={20} className="mb-3 text-orange-400" />
                <h4 className="text-sm font-bold font-clash mb-1" style={{ color: 'hsl(var(--text))' }}>Career</h4>
                <p className="text-[10px]" style={{ color: 'hsl(var(--text-muted))' }}>Role Readiness: 65%</p>
              </div>
            </div>

            {/* Certificates */}
            <div className="px-5 mt-6 mb-8 fm-animate-fade-in-up" style={{ animationDelay: '400ms' }}>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-bold font-clash flex items-center gap-2" style={{ color: 'hsl(var(--text))' }}>
                  <GraduationCap size={18} style={{ color: 'hsl(var(--accent))' }} /> Certificates
                </h3>
                <span className="text-xs font-semibold" style={{ color: 'hsl(var(--accent))' }}>View All</span>
              </div>
              <div className="fm-glass rounded-2xl p-4 flex items-center gap-4">
                <div className="w-16 h-12 rounded-lg bg-black/40 border border-white/10 flex flex-col items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-transparent"></div>
                  <Trophy size={14} className="text-yellow-500 mb-0.5 relative z-10" />
                  <span className="text-[8px] font-bold text-white relative z-10">AI BASICS</span>
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-bold" style={{ color: 'hsl(var(--text))' }}>AI Fundamentals</h4>
                  <p className="text-[10px] mt-0.5" style={{ color: 'hsl(var(--text-muted))' }}>Earned on Oct 12, 2023</p>
                </div>
                <button className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
                  <Share2 size={14} style={{ color: 'hsl(var(--text))' }} />
                </button>
              </div>
            </div>

          </div>

          {/* Bottom Navigation */}
          <div className="absolute bottom-0 w-full px-6 py-4 bg-black/80 backdrop-blur-xl border-t z-40 pb-8" style={{ borderColor: 'hsla(var(--border), 0.5)' }}>
            <div className="flex items-center justify-between">
              <button className="flex flex-col items-center gap-1.5 opacity-100">
                <Home size={22} style={{ color: 'hsl(var(--accent))' }} />
                <span className="text-[10px] font-semibold" style={{ color: 'hsl(var(--text))' }}>Home</span>
              </button>
              <button className="flex flex-col items-center gap-1.5 opacity-50 hover:opacity-100 transition-opacity">
                <Compass size={22} style={{ color: 'hsl(var(--text))' }} />
                <span className="text-[10px] font-medium" style={{ color: 'hsl(var(--text))' }}>Learn</span>
              </button>
              <button className="relative flex flex-col items-center gap-1.5 opacity-50 hover:opacity-100 transition-opacity">
                <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-red-500"></div>
                <MessageSquare size={22} style={{ color: 'hsl(var(--text))' }} />
                <span className="text-[10px] font-medium" style={{ color: 'hsl(var(--text))' }}>Mentor</span>
              </button>
              <button className="flex flex-col items-center gap-1.5 opacity-50 hover:opacity-100 transition-opacity">
                <User size={22} style={{ color: 'hsl(var(--text))' }} />
                <span className="text-[10px] font-medium" style={{ color: 'hsl(var(--text))' }}>Profile</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
