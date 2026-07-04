import { Shell } from "@/components/layout/Shell";
import { Redirect } from "wouter";
import { Show } from "@clerk/react";
import { useListPrompts } from "@workspace/api-client-react";
import { BookOpen, Plus, MoreVertical, Copy, TerminalSquare, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PromptsPage() {
  return (
    <>
      <Show when="signed-in">
        <Shell>
          <PromptsContent />
        </Shell>
      </Show>
      <Show when="signed-out">
        <Redirect to="/sign-in" />
      </Show>
    </>
  );
}

function PromptsContent() {
  const { data: prompts, isLoading } = useListPrompts();

  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-slide-up pb-24 text-[hsl(var(--text))]">
      <div className="flex items-end justify-between">
        <div>
          <h1 className="text-4xl font-heading font-bold mb-3 flex items-center gap-3">
            <BookOpen className="w-8 h-8 text-[hsl(var(--accent))]" />
            Prompt Library
          </h1>
          <p className="text-[hsl(var(--text-muted))] text-lg">Your curated collection of reusable prompts.</p>
        </div>
        <Button className="bg-[hsl(var(--accent))] hover:bg-[hsl(var(--accent))/0.9] text-white">
          <Plus className="w-4 h-4 mr-2" /> Save Prompt
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {isLoading ? (
           <div className="text-[hsl(var(--text-muted))]">Loading...</div>
        ) : prompts && prompts.length > 0 ? (
          prompts.map(prompt => (
            <div key={prompt.id} className="os-card p-5 flex flex-col group cursor-pointer hover:border-[hsl(var(--accent))]">
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded bg-[hsl(var(--surface-2))] border border-[hsl(var(--border))] flex items-center justify-center text-[hsl(var(--accent))]">
                    <TerminalSquare className="w-4 h-4" />
                  </div>
                  <h3 className="font-semibold text-lg line-clamp-1">{prompt.title}</h3>
                </div>
                <button className="text-[hsl(var(--text-muted))] hover:text-[hsl(var(--text))]">
                  <MoreVertical className="w-4 h-4" />
                </button>
              </div>
              
              {prompt.category && (
                <div className="mb-3">
                  <span className="px-2 py-0.5 rounded text-[10px] uppercase tracking-wider font-bold bg-[hsl(var(--surface-2))] border border-[hsl(var(--border))] text-[hsl(var(--text-muted))]">
                    {prompt.category}
                  </span>
                </div>
              )}

              <div className="bg-[hsl(var(--bg))] border border-[hsl(var(--border))] rounded-lg p-3 text-sm text-[hsl(var(--text-muted))] flex-1 mb-4 overflow-hidden relative">
                <div className="line-clamp-3 font-mono text-xs">{prompt.body}</div>
                <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-[hsl(var(--bg))] to-transparent"></div>
              </div>

              <div className="flex items-center justify-between mt-auto pt-3 border-t border-[hsl(var(--border))]">
                <span className="text-xs text-[hsl(var(--text-muted))]">Updated {new Date(prompt.updatedAt).toLocaleDateString()}</span>
                <Button variant="ghost" size="sm" className="h-8 text-xs text-[hsl(var(--accent))] hover:text-[hsl(var(--accent))] hover:bg-[hsl(var(--accent))/0.1]">
                  <Copy className="w-3.5 h-3.5 mr-1.5" /> Copy
                </Button>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full os-card p-12 flex flex-col items-center justify-center text-center">
             <div className="w-16 h-16 rounded-2xl bg-[hsl(var(--surface-2))] border border-[hsl(var(--border))] flex items-center justify-center mb-4">
               <MessageSquare className="w-8 h-8 text-[hsl(var(--text-muted))]" />
             </div>
             <h3 className="text-xl font-heading font-semibold mb-2">Library empty</h3>
             <p className="text-[hsl(var(--text-muted))] max-w-md mb-6">Save your best prompts here to use them later in the Playground or Mentor chat.</p>
             <Button variant="outline" className="border-[hsl(var(--border))] text-[hsl(var(--text))]">
                <Plus className="w-4 h-4 mr-2" /> Add Prompt
             </Button>
          </div>
        )}
      </div>
    </div>
  );
}
