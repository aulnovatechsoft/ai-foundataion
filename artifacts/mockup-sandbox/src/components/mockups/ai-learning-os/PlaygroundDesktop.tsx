import React, { useState } from 'react';
import { 
  Sparkles, Flame, Zap, Bell, Search, Settings, LayoutDashboard, 
  BookOpen, BrainCircuit, FolderGit2, Library, PlaySquare, 
  GraduationCap, Send, Image as ImageIcon, MessageSquare, 
  ChevronDown, Copy, ThumbsUp, ThumbsDown, Check, Save,
  MoreVertical, Bot, User, Code, FileText
} from 'lucide-react';
import './playground-desktop.css';

type Theme = 'Midnight' | 'Daylight' | 'Aurora';

const THEMES = [
  { id: 'Midnight', label: 'Midnight', color: '#161821' },
  { id: 'Daylight', label: 'Daylight', color: '#f5f7fc' },
  { id: 'Aurora', label: 'Aurora', color: '#181421' }
] as const;

const MODELS = [
  { id: 'claude', name: 'Claude 4.5 Sonnet', provider: 'Anthropic' },
  { id: 'gpt4o', name: 'GPT-5', provider: 'OpenAI' },
  { id: 'gemini', name: 'Gemini 3 Pro', provider: 'Google' },
  { id: 'dalle', name: 'DALL-E 3', provider: 'OpenAI', type: 'image' },
  { id: 'perplexity', name: 'Perplexity', provider: 'Perplexity' },
];

export function PlaygroundDesktop() {
  const [theme, setTheme] = useState<Theme>('Midnight');
  const [activeModel, setActiveModel] = useState(MODELS[0].id);
  const [mode, setMode] = useState<'chat' | 'image'>('chat');
  const [prompt, setPrompt] = useState('');
  
  return (
    <div className="playground-wrapper w-full h-screen overflow-hidden text-sm" data-theme={theme}>
      
      {/* LEFT SIDEBAR */}
      <aside className="w-64 bg-surface border-r border-default flex flex-col flex-shrink-0 z-10 relative">
        <div className="h-16 flex items-center px-6 border-b border-default">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg accent-gradient flex items-center justify-center text-white shadow-lg shadow-purple-500/20">
              <Sparkles className="w-4 h-4" />
            </div>
            <span className="font-['Clash_Display'] font-semibold text-lg tracking-tight">Upskil OS</span>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto py-6 px-4 custom-scrollbar">
          <div className="mb-8">
            <div className="text-xs font-semibold text-muted mb-3 px-3 uppercase tracking-wider">28-Day Engine</div>
            <div className="space-y-1">
              <NavItem icon={<LayoutDashboard size={18} />} label="Dashboard" />
              <NavItem icon={<BookOpen size={18} />} label="Curriculum" />
            </div>
          </div>

          <div className="mb-8">
            <div className="text-xs font-semibold text-muted mb-3 px-3 uppercase tracking-wider">Modules</div>
            <div className="space-y-1">
              <NavItem icon={<BrainCircuit size={18} />} label="AI Mentor" />
              <NavItem icon={<FolderGit2 size={18} />} label="Projects" />
              <NavItem icon={<Library size={18} />} label="Prompt Library" />
              <NavItem icon={<PlaySquare size={18} />} label="Playground" active />
              <NavItem icon={<GraduationCap size={18} />} label="Career Coach" />
            </div>
          </div>
        </div>

        <div className="p-4 border-t border-default">
          <NavItem icon={<Settings size={18} />} label="Settings" />
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 flex flex-col min-w-0 bg-bg relative">
        
        {/* TOP BAR */}
        <header className="h-16 bg-surface border-b border-default flex items-center justify-between px-6 flex-shrink-0 z-10">
          <div className="flex items-center gap-4 flex-1">
            <div className="relative w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
              <input 
                type="text" 
                placeholder="Search resources, lessons..." 
                className="w-full bg-surface-2 border border-default rounded-full py-1.5 pl-9 pr-4 text-sm text-default focus:outline-none focus:border-accent transition-colors"
              />
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            {/* Stats */}
            <div className="flex items-center gap-2 bg-surface-2 rounded-full p-1 pr-3 border border-default">
              <div className="w-6 h-6 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500">
                <Flame className="w-3.5 h-3.5 fill-current" />
              </div>
              <span className="font-medium text-xs">12 Day Streak</span>
            </div>
            
            <div className="flex items-center gap-2 bg-surface-2 rounded-full p-1 pr-3 border border-default">
              <div className="w-6 h-6 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500">
                <Zap className="w-3.5 h-3.5 fill-current" />
              </div>
              <span className="font-medium text-xs">4,850 XP</span>
            </div>

            <div className="w-px h-6 bg-border mx-2"></div>

            {/* Theme Switcher */}
            <div className="flex items-center gap-1.5 bg-surface-2 p-1 rounded-full border border-default">
              {THEMES.map(t => (
                <button
                  key={t.id}
                  onClick={() => setTheme(t.id)}
                  className={`w-5 h-5 rounded-full flex items-center justify-center transition-all ${theme === t.id ? 'ring-2 ring-accent ring-offset-2 ring-offset-[hsl(var(--surface-2))]' : 'opacity-70 hover:opacity-100'}`}
                  style={{ backgroundColor: t.color }}
                  title={`Switch to ${t.label} theme`}
                >
                  {theme === t.id && <div className="w-1.5 h-1.5 rounded-full bg-white/80 mix-blend-difference" />}
                </button>
              ))}
            </div>

            <div className="w-px h-6 bg-border mx-2"></div>

            <button className="relative p-2 text-muted hover:text-default transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-accent rounded-full border-2 border-surface"></span>
            </button>
            
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-accent to-accent-2 p-[2px] cursor-pointer">
              <div className="w-full h-full rounded-full border-2 border-surface overflow-hidden bg-surface-2">
                <img src={`https://api.dicebear.com/7.x/notionists/svg?seed=Alex&backgroundColor=transparent`} alt="Alex" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </header>

        {/* WORKSPACE */}
        <div className="flex-1 flex overflow-hidden">
          
          {/* PLAYGROUND CENTER */}
          <div className="flex-1 flex flex-col min-w-0 border-r border-default">
            
            {/* Challenge Banner */}
            <div className="bg-accent/10 border-b border-accent/20 px-6 py-2.5 flex items-center justify-between flex-shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded flex items-center justify-center bg-accent/20 text-accent">
                  <Flame className="w-3.5 h-3.5" />
                </div>
                <span className="text-accent font-medium text-xs">Practice for Day 12 — Chaining prompts for complex outputs</span>
              </div>
              <button className="text-xs text-accent hover:text-accent-2 font-medium px-3 py-1 rounded-full hover:bg-accent/10 transition-colors">
                View Lesson
              </button>
            </div>

            {/* Model & Mode Selector */}
            <div className="px-6 py-4 border-b border-default flex items-center justify-between flex-shrink-0">
              <div className="flex items-center gap-2 bg-surface-2 p-1 rounded-lg border border-default">
                <button 
                  onClick={() => setMode('chat')}
                  className={`flex items-center gap-2 px-4 py-1.5 rounded-md text-xs font-medium transition-colors ${mode === 'chat' ? 'bg-surface border border-default text-default shadow-sm' : 'text-muted hover:text-default'}`}
                >
                  <MessageSquare className="w-3.5 h-3.5" /> Chat
                </button>
                <button 
                  onClick={() => setMode('image')}
                  className={`flex items-center gap-2 px-4 py-1.5 rounded-md text-xs font-medium transition-colors ${mode === 'image' ? 'bg-surface border border-default text-default shadow-sm' : 'text-muted hover:text-default'}`}
                >
                  <ImageIcon className="w-3.5 h-3.5" /> Image
                </button>
              </div>

              <div className="flex items-center gap-2 overflow-x-auto custom-scrollbar pb-1">
                {MODELS.filter(m => mode === 'image' ? m.type === 'image' : m.type !== 'image').map(model => (
                  <button
                    key={model.id}
                    onClick={() => setActiveModel(model.id)}
                    className={`model-tab flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-medium whitespace-nowrap
                      ${activeModel === model.id 
                        ? 'active shadow-sm' 
                        : 'border-transparent text-muted hover:bg-surface-2 hover:text-default'
                      }`}
                  >
                    <div className={`w-2 h-2 rounded-full ${activeModel === model.id ? 'bg-accent' : 'bg-border'}`} />
                    {model.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Conversation Area */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar">
              
              {/* User Message */}
              <div className="flex gap-4 max-w-4xl mx-auto message-bubble">
                <div className="w-8 h-8 rounded-full bg-surface-2 border border-default flex-shrink-0 overflow-hidden mt-1">
                   <img src={`https://api.dicebear.com/7.x/notionists/svg?seed=Alex&backgroundColor=transparent`} alt="User" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 space-y-2">
                  <div className="font-medium text-default">Alex</div>
                  <div className="text-default leading-relaxed whitespace-pre-wrap text-[15px]">
                    I need to summarize a long customer interview transcript, but I want to extract specific insights in a structured format. 
                    
First, read the text and pull out all pain points related to onboarding. 
Then, categorize those pain points by severity (High, Medium, Low).
Finally, format the output as a JSON object containing an array of these categorized pain points.
                  </div>
                </div>
              </div>

              {/* AI Response */}
              <div className="flex gap-4 max-w-4xl mx-auto message-bubble" style={{ animationDelay: '0.1s' }}>
                <div className="w-8 h-8 rounded-full bg-surface-2 border border-default flex-shrink-0 flex items-center justify-center mt-1 text-accent">
                   <Bot className="w-5 h-5" />
                </div>
                <div className="flex-1 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="font-medium text-default flex items-center gap-2">
                      Claude 4.5 Sonnet <span className="text-[10px] bg-surface-2 border border-default px-2 py-0.5 rounded text-muted">Anthropic</span>
                    </div>
                    <div className="flex items-center gap-1 text-muted">
                      <button className="p-1.5 hover:bg-surface-2 rounded hover:text-default transition-colors"><Copy className="w-3.5 h-3.5" /></button>
                      <button className="p-1.5 hover:bg-surface-2 rounded hover:text-default transition-colors"><Save className="w-3.5 h-3.5" /></button>
                      <button className="p-1.5 hover:bg-surface-2 rounded hover:text-default transition-colors"><ThumbsUp className="w-3.5 h-3.5" /></button>
                      <button className="p-1.5 hover:bg-surface-2 rounded hover:text-default transition-colors"><ThumbsDown className="w-3.5 h-3.5" /></button>
                    </div>
                  </div>
                  
                  <div className="text-default leading-relaxed text-[15px] space-y-4">
                    <p>I understand you want to chain a few tasks: extracting onboarding pain points, categorizing them by severity, and outputting them strictly as JSON. Here is the structured output based on the transcript provided:</p>
                    
                    <div className="bg-surface-2 border border-default rounded-lg overflow-hidden font-mono text-xs">
                      <div className="bg-surface border-b border-default px-4 py-2 flex items-center justify-between text-muted">
                        <span>json</span>
                        <button className="flex items-center gap-1 hover:text-default transition-colors"><Copy className="w-3 h-3" /> Copy code</button>
                      </div>
                      <div className="p-4 overflow-x-auto text-default">
<pre>{`{
  "onboarding_pain_points": [
    {
      "issue": "Account activation email took 45 minutes to arrive",
      "category": "High",
      "context": "User abandoned flow and had to restart next day"
    },
    {
      "issue": "Tooltips in the dashboard are blocking critical buttons",
      "category": "Medium",
      "context": "Frustrating but user found a workaround by zooming out"
    },
    {
      "issue": "Password requirements not visible until after submission",
      "category": "Low",
      "context": "Caused one failed submission attempt"
    }
  ]
}`}</pre>
                      </div>
                    </div>
                    
                    <p className="text-sm text-muted">Notice how chaining the extraction and the formatting instructions into a single clear prompt produces a reliable JSON structure. This makes it much easier to pipe this output directly into another tool or database.</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Input Area */}
            <div className="p-6 pt-2 bg-surface bg-opacity-50 backdrop-blur-sm border-t border-default flex-shrink-0">
              <div className="max-w-4xl mx-auto">
                <div className="bg-surface-2 border border-default rounded-xl shadow-sm focus-within:border-accent focus-within:ring-1 focus-within:ring-accent transition-all">
                  <textarea 
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="Type a message or insert a template..." 
                    className="w-full bg-transparent border-none resize-none min-h-[80px] p-4 text-sm text-default focus:outline-none placeholder:text-muted/70 custom-scrollbar"
                  />
                  <div className="px-4 py-3 flex items-center justify-between border-t border-default/50">
                    <div className="flex items-center gap-3">
                      <div className="text-[11px] text-muted flex items-center gap-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                        Model ready
                      </div>
                      <span className="text-border">|</span>
                      <div className="text-[11px] text-muted font-mono">
                        ~125 tokens
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="text-muted hover:text-default p-2 rounded-lg transition-colors">
                        <Settings className="w-4 h-4" />
                      </button>
                      <button className="btn-primary flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium">
                        <Send className="w-4 h-4" />
                        Send
                      </button>
                    </div>
                  </div>
                </div>
                <div className="mt-3 text-center text-[10px] text-muted">
                  AI models can make mistakes. Consider verifying important information.
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT SIDE PANEL - PROMPT LIBRARY */}
          <aside className="w-80 bg-surface flex flex-col flex-shrink-0">
            <div className="h-14 border-b border-default flex items-center px-5 font-semibold text-sm">
              <Library className="w-4 h-4 mr-2 text-accent" />
              Prompt Templates
            </div>
            
            <div className="flex-1 overflow-y-auto p-4 space-y-6 custom-scrollbar">
              
              <div>
                <h3 className="text-xs font-semibold text-muted mb-3 uppercase tracking-wider px-1">Challenge Presets</h3>
                <div className="space-y-2">
                  <TemplateCard 
                    title="Few-Shot JSON Extractor" 
                    desc="Extracts structured data using examples." 
                    icon={<Code className="w-4 h-4 text-blue-400" />}
                  />
                  <TemplateCard 
                    title="Chain of Thought Analyst" 
                    desc="Forces the model to explain reasoning step-by-step." 
                    icon={<BrainCircuit className="w-4 h-4 text-purple-400" />}
                  />
                </div>
              </div>

              <div>
                <h3 className="text-xs font-semibold text-muted mb-3 uppercase tracking-wider px-1">Your Saved</h3>
                <div className="space-y-2">
                  <TemplateCard 
                    title="Tone-Matching Email Drafter" 
                    desc="Drafts emails matching a specific brand voice." 
                    icon={<FileText className="w-4 h-4 text-orange-400" />}
                  />
                  <TemplateCard 
                    title="Code Review Assistant" 
                    desc="Reviews React code for performance issues." 
                    icon={<Code className="w-4 h-4 text-emerald-400" />}
                  />
                </div>
              </div>

              <button className="w-full py-2.5 border border-dashed border-border rounded-lg text-sm text-muted hover:text-default hover:border-accent hover:bg-surface-2 transition-all flex items-center justify-center gap-2">
                <Search className="w-4 h-4" /> Browse Library
              </button>
            </div>
          </aside>

        </div>
      </main>
    </div>
  );
}

function NavItem({ icon, label, active = false }: { icon: React.ReactNode, label: string, active?: boolean }) {
  return (
    <a href="#" className={`sidebar-link flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium ${active ? 'active' : 'text-muted'}`}>
      {icon}
      {label}
    </a>
  );
}

function TemplateCard({ title, desc, icon }: { title: string, desc: string, icon: React.ReactNode }) {
  return (
    <div className="group p-3 rounded-lg border border-default bg-surface-2 hover:border-accent cursor-pointer transition-all hover:shadow-md">
      <div className="flex items-start justify-between mb-1">
        <div className="flex items-center gap-2 font-medium text-sm text-default">
          {icon}
          {title}
        </div>
        <button className="opacity-0 group-hover:opacity-100 p-1 text-muted hover:text-accent transition-colors">
          <Copy className="w-3.5 h-3.5" />
        </button>
      </div>
      <p className="text-xs text-muted leading-snug pr-4">{desc}</p>
    </div>
  );
}