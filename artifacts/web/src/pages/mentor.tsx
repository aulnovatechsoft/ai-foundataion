import { Shell } from "@/components/layout/Shell";
import { Redirect } from "wouter";
import { Show } from "@clerk/react";
import { useState, useRef, useEffect } from "react";
import { 
  useListOpenaiConversations, 
  useGetOpenaiConversation, 
  useListOpenaiMessages,
  useCreateOpenaiConversation,
  useDeleteOpenaiConversation,
  getListOpenaiMessagesQueryKey,
  getListOpenaiConversationsQueryKey
} from "@workspace/api-client-react";
import { useQueryClient } from "@tanstack/react-query";
import { Bot, Send, Plus, Trash2, MessageSquare, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function MentorPage() {
  return (
    <>
      <Show when="signed-in">
        <Shell>
          <MentorContent />
        </Shell>
      </Show>
      <Show when="signed-out">
        <Redirect to="/sign-in" />
      </Show>
    </>
  );
}

function MentorContent() {
  const queryClient = useQueryClient();
  const [activeConversationId, setActiveConversationId] = useState<number | null>(null);
  const [input, setInput] = useState("");
  const [isStreaming, setIsStreaming] = useState(false);
  const [streamedText, setStreamedText] = useState("");
  const [pendingUserMessage, setPendingUserMessage] = useState<string | null>(null);
  const [streamError, setStreamError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const { data: conversations, isLoading: loadingConvos } = useListOpenaiConversations();
  const { data: messages, isLoading: loadingMessages } = useListOpenaiMessages(activeConversationId!, { 
    query: { enabled: !!activeConversationId, queryKey: getListOpenaiMessagesQueryKey(activeConversationId!) } 
  });
  
  const createConversation = useCreateOpenaiConversation();
  const deleteConversation = useDeleteOpenaiConversation();

  // Auto-scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, streamedText, pendingUserMessage, streamError]);

  // Create initial conversation if none exists
  useEffect(() => {
    if (conversations && conversations.length > 0 && !activeConversationId) {
      setActiveConversationId(conversations[0].id);
    } else if (conversations?.length === 0 && !loadingConvos && !createConversation.isPending && !activeConversationId) {
      handleNewConversation();
    }
  }, [conversations, activeConversationId]);

  const handleNewConversation = () => {
    createConversation.mutate(
      { data: { title: "New Conversation" } },
      {
        onSuccess: (newConvo) => {
          setActiveConversationId(newConvo.id);
          queryClient.invalidateQueries({ queryKey: getListOpenaiConversationsQueryKey() });
        }
      }
    );
  };

  const handleDeleteConversation = (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    deleteConversation.mutate(
      { id },
      {
        onSuccess: () => {
          if (activeConversationId === id) setActiveConversationId(null);
          queryClient.invalidateQueries({ queryKey: getListOpenaiConversationsQueryKey() });
        }
      }
    );
  };

  const sendMessage = async () => {
    if (!input.trim() || !activeConversationId || isStreaming) return;

    const userMessageText = input;
    setInput("");
    setIsStreaming(true);
    setStreamedText("");
    setStreamError(null);
    // Optimistically show the user's message immediately; reconciled by refetch on completion.
    setPendingUserMessage(userMessageText);

    try {
      const response = await fetch(`/api/openai/conversations/${activeConversationId}/messages`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content: userMessageText })
      });

      if (!response.ok || !response.body) {
        throw new Error(`Request failed (${response.status})`);
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder("utf-8");
      let buffer = "";
      let streamErrorMessage: string | null = null;

      const processLine = (rawLine: string) => {
        const line = rawLine.replace(/\r$/, "");
        if (!line.startsWith("data:")) return;
        const payload = line.slice(5).trimStart();
        if (payload === "") return;
        try {
          const data = JSON.parse(payload);
          if (data.content) setStreamedText(prev => prev + data.content);
          if (data.error) streamErrorMessage = String(data.error);
        } catch {
          // Ignore non-JSON keep-alive lines.
        }
      };

      let done = false;
      while (!done) {
        const { value, done: readerDone } = await reader.read();
        done = readerDone;
        // Stream decode preserves multi-byte characters across chunk boundaries.
        buffer += decoder.decode(value ?? new Uint8Array(), { stream: !done });
        let newlineIndex: number;
        while ((newlineIndex = buffer.indexOf("\n")) !== -1) {
          const line = buffer.slice(0, newlineIndex);
          buffer = buffer.slice(newlineIndex + 1);
          processLine(line);
        }
      }
      // Flush any trailing buffered line.
      if (buffer.trim() !== "") processLine(buffer);

      if (streamErrorMessage) setStreamError(streamErrorMessage);
    } catch (e) {
      setStreamError(e instanceof Error ? e.message : "Something went wrong. Please try again.");
    } finally {
      setIsStreaming(false);
      setStreamedText("");
      setPendingUserMessage(null);
      queryClient.invalidateQueries({ queryKey: getListOpenaiMessagesQueryKey(activeConversationId) });
      queryClient.invalidateQueries({ queryKey: getListOpenaiConversationsQueryKey() });
    }
  };

  return (
    <div className="flex h-[calc(100vh-140px)] gap-6 animate-slide-up">
      {/* Sidebar for conversations */}
      <div className="w-64 os-card flex flex-col overflow-hidden shrink-0 hidden md:flex">
        <div className="p-4 border-b border-[hsl(var(--border))] flex items-center justify-between">
          <h2 className="font-heading font-semibold text-[hsl(var(--text))]">Chats</h2>
          <Button variant="ghost" size="icon" onClick={handleNewConversation} disabled={createConversation.isPending}>
            <Plus className="w-4 h-4" />
          </Button>
        </div>
        <div className="flex-1 overflow-y-auto p-2 space-y-1">
          {loadingConvos ? (
            <div className="flex justify-center p-4"><Loader2 className="w-5 h-5 animate-spin text-[hsl(var(--text-muted))]" /></div>
          ) : conversations?.map(c => (
            <div 
              key={c.id} 
              onClick={() => setActiveConversationId(c.id)}
              className={`p-3 rounded-lg flex items-center justify-between cursor-pointer group transition-colors ${
                activeConversationId === c.id ? 'bg-[hsl(var(--surface-2))] border border-[hsl(var(--border))]' : 'hover:bg-[hsl(var(--surface-2))/50] border border-transparent'
              }`}
            >
              <div className="flex items-center gap-2 truncate text-[hsl(var(--text))] text-sm">
                <MessageSquare className="w-4 h-4 shrink-0 text-[hsl(var(--text-muted))]" />
                <span className="truncate">{c.title || "New Chat"}</span>
              </div>
              <button 
                onClick={(e) => handleDeleteConversation(c.id, e)}
                className="opacity-0 group-hover:opacity-100 text-[hsl(var(--text-muted))] hover:text-red-500"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Main chat area */}
      <div className="flex-1 os-card flex flex-col overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[hsl(var(--accent-2))] opacity-5 blur-[100px] rounded-full pointer-events-none"></div>
        
        <div className="h-16 border-b border-[hsl(var(--border))] flex items-center px-6 shrink-0 z-10 bg-[hsl(var(--surface))/80] backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[hsl(var(--accent-2))] to-[hsl(var(--accent))] flex items-center justify-center">
              <Bot className="w-4 h-4 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-[hsl(var(--text))]">Coach Nova</h3>
              <p className="text-[10px] text-[hsl(var(--accent-2))] font-medium uppercase tracking-wider">Online</p>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6 z-10">
          {!activeConversationId || loadingMessages ? (
            <div className="flex items-center justify-center h-full text-[hsl(var(--text-muted))]">
              <Loader2 className="w-6 h-6 animate-spin" />
            </div>
          ) : (
            <>
              {messages?.map(m => (
                <div key={m.id} className={`flex gap-4 max-w-3xl ${m.role === 'user' ? 'ml-auto flex-row-reverse' : ''}`}>
                  <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center ${m.role === 'user' ? 'bg-[hsl(var(--surface-2))] border border-[hsl(var(--border))]' : 'bg-gradient-to-br from-[hsl(var(--accent-2))] to-[hsl(var(--accent))]'}`}>
                    {m.role === 'user' ? <div className="text-xs font-bold">U</div> : <Bot className="w-4 h-4 text-white" />}
                  </div>
                  <div className={`p-4 rounded-2xl text-sm ${m.role === 'user' ? 'bg-[hsl(var(--accent))] text-white rounded-tr-sm' : 'bg-[hsl(var(--surface-2))] border border-[hsl(var(--border))] text-[hsl(var(--text))] rounded-tl-sm'}`}>
                    <div className="whitespace-pre-wrap leading-relaxed">{m.content}</div>
                  </div>
                </div>
              ))}
              
              {pendingUserMessage && (
                <div className="flex gap-4 max-w-3xl ml-auto flex-row-reverse">
                  <div className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center bg-[hsl(var(--surface-2))] border border-[hsl(var(--border))]">
                    <div className="text-xs font-bold">U</div>
                  </div>
                  <div className="p-4 rounded-2xl text-sm bg-[hsl(var(--accent))] text-white rounded-tr-sm">
                    <div className="whitespace-pre-wrap leading-relaxed">{pendingUserMessage}</div>
                  </div>
                </div>
              )}

              {isStreaming && (
                <div className="flex gap-4 max-w-3xl">
                  <div className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center bg-gradient-to-br from-[hsl(var(--accent-2))] to-[hsl(var(--accent))]">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <div className="p-4 rounded-2xl text-sm bg-[hsl(var(--surface-2))] border border-[hsl(var(--border))] text-[hsl(var(--text))] rounded-tl-sm">
                    <div className="whitespace-pre-wrap leading-relaxed">{streamedText}<span className="inline-block w-1.5 h-4 ml-1 bg-[hsl(var(--accent-2))] animate-pulse"></span></div>
                  </div>
                </div>
              )}

              {streamError && (
                <div className="flex gap-4 max-w-3xl">
                  <div className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center bg-red-500/15 border border-red-500/30">
                    <Bot className="w-4 h-4 text-red-500" />
                  </div>
                  <div className="p-4 rounded-2xl text-sm bg-red-500/10 border border-red-500/30 text-red-500 rounded-tl-sm">
                    <div className="leading-relaxed">{streamError}</div>
                  </div>
                </div>
              )}
            </>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="p-4 border-t border-[hsl(var(--border))] bg-[hsl(var(--surface))] z-10">
          <div className="relative max-w-4xl mx-auto">
            <input 
              type="text" 
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && sendMessage()}
              disabled={isStreaming || !activeConversationId}
              placeholder="Ask Nova anything..." 
              className="w-full bg-[hsl(var(--surface-2))] border border-[hsl(var(--border))] text-sm rounded-full pl-4 pr-12 py-3 text-[hsl(var(--text))] placeholder-[hsl(var(--text-muted))] focus:border-[hsl(var(--accent-2))] outline-none disabled:opacity-50"
            />
            <button 
              onClick={sendMessage}
              disabled={isStreaming || !activeConversationId || !input.trim()}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-[hsl(var(--accent-2))] hover:bg-[hsl(var(--accent-2))/0.9] disabled:bg-[hsl(var(--surface-2))] disabled:text-[hsl(var(--text-muted))] text-white rounded-full flex items-center justify-center transition-colors"
            >
              <Send className="w-4 h-4 ml-0.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
