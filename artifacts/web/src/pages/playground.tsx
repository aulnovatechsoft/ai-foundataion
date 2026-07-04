import { Shell } from "@/components/layout/Shell";
import { Redirect } from "wouter";
import { Show } from "@clerk/react";
import { useState } from "react";
import { useRunPlayground } from "@workspace/api-client-react";
import { 
  TerminalSquare, 
  MessageSquare, 
  Image as ImageIcon, 
  Send, 
  Settings,
  Copy,
  Bot,
  Loader2
} from "lucide-react";

export default function PlaygroundPage() {
  return (
    <>
      <Show when="signed-in">
        <Shell>
          <PlaygroundContent />
        </Shell>
      </Show>
      <Show when="signed-out">
        <Redirect to="/sign-in" />
      </Show>
    </>
  );
}

const MODELS = [
  { id: 'claude', name: 'Claude 4.5 Sonnet', type: 'chat' },
  { id: 'gpt4o', name: 'GPT-5', type: 'chat' },
  { id: 'gemini', name: 'Gemini 3 Pro', type: 'chat' },
  { id: 'dalle', name: 'DALL-E 3', type: 'image' },
];

function PlaygroundContent() {
  const [activeModel, setActiveModel] = useState(MODELS[0].id);
  const [mode, setMode] = useState<'chat' | 'image'>('chat');
  const [prompt, setPrompt] = useState("");
  const [system, setSystem] = useState("You are a helpful AI assistant.");
  
  const [history, setHistory] = useState<Array<{role: string, content: string}>>([
    { role: 'user', content: 'I need to summarize a long customer interview transcript...' },
    { role: 'assistant', content: '{\n  "onboarding_pain_points": [\n    {\n      "issue": "Account activation delayed"\n    }\n  ]\n}' }
  ]);

  const runPlayground = useRunPlayground();

  const handleSend = () => {
    if (!prompt.trim() || runPlayground.isPending) return;

    const userPrompt = prompt;
    setHistory(prev => [...prev, { role: 'user', content: userPrompt }]);
    setPrompt("");

    runPlayground.mutate(
      { data: { prompt: userPrompt, system: system } },
      {
        onSuccess: (data) => {
          setHistory(prev => [...prev, { role: 'assistant', content: data.output }]);
        },
        onError: () => {
          setHistory(prev => [...prev, { role: 'assistant', content: "An error occurred." }]);
        }
      }
    );
  };

  return (
    <div className="flex h-[calc(100vh-140px)] gap-6 animate-slide-up text-[hsl(var(--text))]">
      {/* LEFT: main playground area */}
      <div className="flex-1 os-card flex flex-col overflow-hidden">
        
        {/* Model & Mode Selector */}
        <div className="px-6 py-4 border-b border-[hsl(var(--border))] flex items-center justify-between flex-shrink-0 bg-[hsl(var(--surface))]">
          <div className="flex items-center gap-2 bg-[hsl(var(--surface-2))] p-1 rounded-lg border border-[hsl(var(--border))]">
            <button 
              onClick={() => { setMode('chat'); setActiveModel(MODELS[0].id); }}
              className={`flex items-center gap-2 px-4 py-1.5 rounded-md text-xs font-medium transition-colors ${mode === 'chat' ? 'bg-[hsl(var(--surface))] border border-[hsl(var(--border))] text-[hsl(var(--text))] shadow-sm' : 'text-[hsl(var(--text-muted))] hover:text-[hsl(var(--text))]'}`}
            >
              <MessageSquare className="w-3.5 h-3.5" /> Chat
            </button>
            <button 
              onClick={() => { setMode('image'); setActiveModel('dalle'); }}
              className={`flex items-center gap-2 px-4 py-1.5 rounded-md text-xs font-medium transition-colors ${mode === 'image' ? 'bg-[hsl(var(--surface))] border border-[hsl(var(--border))] text-[hsl(var(--text))] shadow-sm' : 'text-[hsl(var(--text-muted))] hover:text-[hsl(var(--text))]'}`}
            >
              <ImageIcon className="w-3.5 h-3.5" /> Image
            </button>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            {MODELS.filter(m => mode === 'image' ? m.type === 'image' : m.type !== 'image').map(model => (
              <button
                key={model.id}
                onClick={() => setActiveModel(model.id)}
                className={`flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-medium whitespace-nowrap transition-colors
                  ${activeModel === model.id 
                    ? 'border-[hsl(var(--accent))] bg-[hsl(var(--surface-2))] text-[hsl(var(--text))] shadow-sm' 
                    : 'border-transparent text-[hsl(var(--text-muted))] hover:bg-[hsl(var(--surface-2))] hover:text-[hsl(var(--text))]'
                  }`}
              >
                <div className={`w-2 h-2 rounded-full ${activeModel === model.id ? 'bg-[hsl(var(--accent))]' : 'bg-[hsl(var(--border))]'}`} />
                {model.name}
              </button>
            ))}
          </div>
        </div>

        {/* Conversation Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 os-scrollbar bg-[hsl(var(--bg))]">
          {history.map((msg, i) => (
            <div key={i} className="flex gap-4 max-w-4xl mx-auto">
              {msg.role === 'user' ? (
                <div className="w-8 h-8 rounded-full bg-[hsl(var(--surface-2))] border border-[hsl(var(--border))] flex-shrink-0 flex items-center justify-center mt-1">
                  <span className="text-xs font-bold">U</span>
                </div>
              ) : (
                <div className="w-8 h-8 rounded-full bg-[hsl(var(--surface-2))] border border-[hsl(var(--border))] flex-shrink-0 flex items-center justify-center mt-1 text-[hsl(var(--accent))]">
                  <Bot className="w-5 h-5" />
                </div>
              )}
              <div className="flex-1 space-y-2">
                <div className="font-medium text-[hsl(var(--text))] flex items-center gap-2">
                  {msg.role === 'user' ? 'You' : 'Assistant'}
                </div>
                <div className="text-[hsl(var(--text))] leading-relaxed whitespace-pre-wrap text-[15px]">
                  {msg.role === 'assistant' && msg.content.startsWith('{') ? (
                    <div className="bg-[hsl(var(--surface-2))] border border-[hsl(var(--border))] rounded-lg overflow-hidden font-mono text-xs mt-2">
                      <div className="bg-[hsl(var(--surface))] border-b border-[hsl(var(--border))] px-4 py-2 flex items-center justify-between text-[hsl(var(--text-muted))]">
                        <span>json</span>
                        <button className="flex items-center gap-1 hover:text-[hsl(var(--text))] transition-colors"><Copy className="w-3 h-3" /> Copy</button>
                      </div>
                      <div className="p-4 overflow-x-auto text-[hsl(var(--text))]">
                        <pre>{msg.content}</pre>
                      </div>
                    </div>
                  ) : (
                    msg.content
                  )}
                </div>
              </div>
            </div>
          ))}
          {runPlayground.isPending && (
             <div className="flex gap-4 max-w-4xl mx-auto">
                <div className="w-8 h-8 rounded-full bg-[hsl(var(--surface-2))] border border-[hsl(var(--border))] flex-shrink-0 flex items-center justify-center mt-1 text-[hsl(var(--accent))]">
                  <Loader2 className="w-4 h-4 animate-spin" />
                </div>
             </div>
          )}
        </div>

        {/* Input Area */}
        <div className="p-6 pt-2 bg-[hsl(var(--surface))] border-t border-[hsl(var(--border))] flex-shrink-0">
          <div className="max-w-4xl mx-auto">
            <div className="bg-[hsl(var(--surface-2))] border border-[hsl(var(--border))] rounded-xl shadow-sm focus-within:border-[hsl(var(--accent))] focus-within:ring-1 focus-within:ring-[hsl(var(--accent))] transition-all">
              <textarea 
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSend(); } }}
                placeholder="Type a message or insert a template..." 
                className="w-full bg-transparent border-none resize-none min-h-[80px] p-4 text-sm text-[hsl(var(--text))] focus:outline-none placeholder:text-[hsl(var(--text-muted))]/70 os-scrollbar"
              />
              <div className="px-4 py-3 flex items-center justify-between border-t border-[hsl(var(--border))]/50">
                <div className="flex items-center gap-3">
                  <div className="text-[11px] text-[hsl(var(--text-muted))] flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                    Model ready
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button className="text-[hsl(var(--text-muted))] hover:text-[hsl(var(--text))] p-2 rounded-lg transition-colors">
                    <Settings className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={handleSend}
                    disabled={runPlayground.isPending || !prompt.trim()}
                    className="bg-[hsl(var(--accent))] hover:bg-[hsl(var(--accent))/0.9] text-white disabled:opacity-50 flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                  >
                    <Send className="w-4 h-4" />
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* RIGHT SIDE PANEL - SETTINGS */}
      <aside className="w-80 os-card flex flex-col flex-shrink-0 hidden lg:flex">
        <div className="h-14 border-b border-[hsl(var(--border))] flex items-center px-5 font-semibold text-sm">
          <Settings className="w-4 h-4 mr-2 text-[hsl(var(--accent))]" />
          System Settings
        </div>
        
        <div className="flex-1 overflow-y-auto p-4 space-y-6 os-scrollbar">
          <div>
            <label className="text-xs font-semibold text-[hsl(var(--text-muted))] uppercase tracking-wider px-1 block mb-2">System Prompt</label>
            <textarea 
              value={system}
              onChange={e => setSystem(e.target.value)}
              className="w-full h-32 bg-[hsl(var(--bg))] border border-[hsl(var(--border))] rounded-lg p-3 text-sm focus:outline-none focus:border-[hsl(var(--accent))] transition-colors"
            />
          </div>

          <div>
            <h3 className="text-xs font-semibold text-[hsl(var(--text-muted))] mb-3 uppercase tracking-wider px-1">Parameters</h3>
            <div className="space-y-4 px-1">
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-[hsl(var(--text-muted))]">Temperature</span>
                  <span className="text-[hsl(var(--text))]">0.7</span>
                </div>
                <div className="h-1.5 w-full bg-[hsl(var(--bg))] rounded-full overflow-hidden border border-[hsl(var(--border))]">
                   <div className="h-full bg-[hsl(var(--accent))] w-[70%]"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-[hsl(var(--text-muted))]">Max Tokens</span>
                  <span className="text-[hsl(var(--text))]">2048</span>
                </div>
                <div className="h-1.5 w-full bg-[hsl(var(--bg))] rounded-full overflow-hidden border border-[hsl(var(--border))]">
                   <div className="h-full bg-[hsl(var(--accent))] w-[50%]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}
