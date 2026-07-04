import React, { useState } from 'react';
import { 
  Play, Pause, SkipForward, SkipBack, 
  Download, ListMusic, Plus,
  Trophy, Home, Compass, User, 
  MoreHorizontal, ChevronDown, Repeat, Shuffle,
  FastForward, Volume2, Headphones
} from 'lucide-react';
import './audio.css';

const THIRTY_BARS = Array.from({ length: 30 });

export function AudioMobile() {
  const [theme, setTheme] = useState('midnight');
  const [isPlaying, setIsPlaying] = useState(true);
  const [playbackSpeed, setPlaybackSpeed] = useState('1.0x');

  return (
    <div 
      className="flex items-center justify-center min-h-screen bg-neutral-900 p-8 font-['Plus_Jakarta_Sans']"
      style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #2a2a35 0%, #111 100%)' }}
    >
      <div 
        data-theme={theme}
        className="relative w-[390px] h-[844px] rounded-[40px] border-[8px] border-black bg-[hsl(var(--bg))] text-[hsl(var(--text))] overflow-hidden shadow-2xl flex flex-col"
      >
        {/* Mock Status Bar */}
        <div className="flex justify-between items-center px-6 pt-4 pb-2 text-xs font-semibold z-10 relative">
          <span>9:41</span>
          <div className="flex gap-2 items-center">
            <div className="w-4 h-4 rounded-full border border-current" />
            <div className="w-4 h-4 rounded-full border border-current" />
            <div className="w-5 h-2.5 rounded-sm border border-current" />
          </div>
        </div>

        {/* Header & Theme Switcher */}
        <div className="flex items-center justify-between px-6 py-4 z-10 relative">
          <button className="p-2 rounded-full bg-[hsl(var(--surface))] border border-[hsl(var(--border))] text-[hsl(var(--text-muted))] hover:text-[hsl(var(--text))] transition-colors">
            <ChevronDown className="w-5 h-5" />
          </button>
          
          <div className="flex gap-1 bg-[hsl(var(--surface))] p-1 rounded-full border border-[hsl(var(--border))]">
            <button 
              onClick={() => setTheme('midnight')}
              className={`w-6 h-6 rounded-full border-2 ${theme === 'midnight' ? 'border-white' : 'border-transparent'}`}
              style={{ background: '#121215' }}
              title="Midnight"
            />
            <button 
              onClick={() => setTheme('daylight')}
              className={`w-6 h-6 rounded-full border-2 ${theme === 'daylight' ? 'border-black' : 'border-transparent'}`}
              style={{ background: '#f5f7fa' }}
              title="Daylight"
            />
            <button 
              onClick={() => setTheme('aurora')}
              className={`w-6 h-6 rounded-full border-2 ${theme === 'aurora' ? 'border-white' : 'border-transparent'}`}
              style={{ background: '#14111a' }}
              title="Aurora"
            />
          </div>

          <button className="p-2 rounded-full bg-[hsl(var(--surface))] border border-[hsl(var(--border))] text-[hsl(var(--text-muted))] hover:text-[hsl(var(--text))] transition-colors">
            <MoreHorizontal className="w-5 h-5" />
          </button>
        </div>

        {/* Main Content Scrollable Area */}
        <div className="flex-1 overflow-y-auto pb-24 scrollbar-none z-10 relative">
          
          {/* Cover Art Area */}
          <div className="px-6 py-4 flex flex-col items-center">
            <div className="w-64 h-64 rounded-3xl audio-gradient-cover shadow-2xl shadow-[hsl(var(--accent))]/20 relative overflow-hidden group flex items-center justify-center border border-white/10">
              {/* Abstract decorative elements */}
              <div className="absolute inset-0 bg-black/10 mix-blend-overlay"></div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-black/20 rounded-full blur-2xl transform -translate-x-1/2 translate-y-1/2"></div>
              
              <Headphones className="w-16 h-16 text-white/80" />
            </div>

            <div className="mt-8 text-center w-full">
              <span className="text-[hsl(var(--accent))] text-xs font-bold uppercase tracking-wider mb-2 block">
                Week 2 • Advanced Patterns
              </span>
              <h1 className="text-2xl font-['Clash_Display'] font-semibold leading-tight mb-2">
                Chaining prompts for complex outputs
              </h1>
              <p className="text-[hsl(var(--text-muted))] text-sm">
                Day 12 • 4,850 XP
              </p>
            </div>
          </div>

          {/* Scrubber & Waveform */}
          <div className="px-6 mt-4">
            <div className="flex items-center justify-between h-16 gap-1 mb-2 opacity-80">
              {THIRTY_BARS.map((_, i) => (
                <div 
                  key={i} 
                  className={`w-1 rounded-full audio-waveform-bar ${i < 12 ? 'bg-[hsl(var(--accent))]' : 'bg-[hsl(var(--surface-2))]'} ${isPlaying ? 'animate-audio-waveform' : ''}`}
                  style={{ height: isPlaying ? '4px' : `${Math.max(4, Math.sin(i * 0.5) * 16 + 8)}px` }}
                />
              ))}
            </div>
            <div className="flex justify-between text-xs text-[hsl(var(--text-muted))] font-medium">
              <span>3:12</span>
              <span>8:40</span>
            </div>
          </div>

          {/* Main Controls */}
          <div className="flex items-center justify-center gap-6 px-6 mt-6">
            <button 
              onClick={() => setPlaybackSpeed(s => s === '1.0x' ? '1.25x' : s === '1.25x' ? '1.5x' : '1.0x')}
              className="w-12 h-12 flex items-center justify-center text-sm font-semibold text-[hsl(var(--text-muted))] hover:text-[hsl(var(--text))] transition-colors"
            >
              {playbackSpeed}
            </button>
            
            <button className="p-3 text-[hsl(var(--text))] hover:text-[hsl(var(--accent))] transition-colors">
              <SkipBack className="w-8 h-8 fill-current" />
            </button>
            
            <button 
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-br from-[hsl(var(--accent))] to-[hsl(var(--accent-2))] text-white shadow-lg shadow-[hsl(var(--accent))]/25 transform transition active:scale-95"
            >
              {isPlaying ? <Pause className="w-8 h-8 fill-current" /> : <Play className="w-8 h-8 fill-current ml-1" />}
            </button>
            
            <button className="p-3 text-[hsl(var(--text))] hover:text-[hsl(var(--accent))] transition-colors">
              <SkipForward className="w-8 h-8 fill-current" />
            </button>

            <button className="w-12 h-12 flex items-center justify-center text-[hsl(var(--text-muted))] hover:text-[hsl(var(--text))] transition-colors">
              <ListMusic className="w-5 h-5" />
            </button>
          </div>

          {/* Secondary Controls */}
          <div className="flex items-center justify-center gap-8 px-6 mt-8 pb-6 border-b border-[hsl(var(--border))]">
            <button className="flex flex-col items-center gap-1.5 text-[hsl(var(--text-muted))] hover:text-[hsl(var(--text))] transition-colors group">
              <div className="w-10 h-10 rounded-full bg-[hsl(var(--surface))] flex items-center justify-center group-hover:bg-[hsl(var(--surface-2))] transition-colors">
                <Download className="w-4 h-4" />
              </div>
              <span className="text-[10px] font-medium">Download</span>
            </button>
            
            <button className="flex flex-col items-center gap-1.5 text-[hsl(var(--text-muted))] hover:text-[hsl(var(--text))] transition-colors group">
              <div className="w-10 h-10 rounded-full bg-[hsl(var(--surface))] flex items-center justify-center group-hover:bg-[hsl(var(--surface-2))] transition-colors">
                <Plus className="w-4 h-4" />
              </div>
              <span className="text-[10px] font-medium">Add to queue</span>
            </button>

            <button className="flex flex-col items-center gap-1.5 text-[hsl(var(--text-muted))] hover:text-[hsl(var(--text))] transition-colors group">
              <div className="w-10 h-10 rounded-full bg-[hsl(var(--surface))] flex items-center justify-center group-hover:bg-[hsl(var(--surface-2))] transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>
              </div>
              <span className="text-[10px] font-medium">Transcript</span>
            </button>
          </div>

          {/* Up Next */}
          <div className="px-6 py-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-['Clash_Display'] font-semibold text-lg">Up Next</h3>
            </div>
            
            <div className="flex flex-col gap-3">
              {[
                { day: 13, title: "Building your first AI agent", duration: "11:20" },
                { day: 14, title: "Memory and context windows", duration: "9:45" },
                { day: 15, title: "Week 2 Review & Capstone", duration: "14:15" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 p-3 rounded-xl hover:bg-[hsl(var(--surface))] transition-colors cursor-pointer border border-transparent hover:border-[hsl(var(--border))]">
                  <div className="w-12 h-12 rounded-lg bg-[hsl(var(--surface-2))] flex items-center justify-center font-bold text-xs text-[hsl(var(--text-muted))]">
                    D{item.day}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-sm truncate">{item.title}</h4>
                    <p className="text-xs text-[hsl(var(--text-muted))] mt-1">Daily Lesson</p>
                  </div>
                  <div className="text-xs font-medium text-[hsl(var(--text-muted))]">
                    {item.duration}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Navigation */}
        <div className="h-20 bg-[hsl(var(--surface))] border-t border-[hsl(var(--border))] flex items-center justify-around px-2 z-20">
          <button className="flex flex-col items-center gap-1 p-2 text-[hsl(var(--text-muted))] hover:text-[hsl(var(--text))]">
            <Trophy className="w-6 h-6" />
            <span className="text-[10px] font-medium">Challenge</span>
          </button>
          <button className="flex flex-col items-center gap-1 p-2 text-[hsl(var(--text-muted))] hover:text-[hsl(var(--text))]">
            <Compass className="w-6 h-6" />
            <span className="text-[10px] font-medium">Mentor</span>
          </button>
          <button className="flex flex-col items-center gap-1 p-2 text-[hsl(var(--text-muted))] hover:text-[hsl(var(--text))]">
            <Home className="w-6 h-6" />
            <span className="text-[10px] font-medium">Projects</span>
          </button>
          <button className="flex flex-col items-center gap-1 p-2 text-[hsl(var(--accent))]">
            <Headphones className="w-6 h-6" />
            <span className="text-[10px] font-medium">Audio</span>
          </button>
        </div>
      </div>
    </div>
  );
}
