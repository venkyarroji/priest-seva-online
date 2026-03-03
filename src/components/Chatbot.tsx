import { useState, useRef, useEffect, useCallback } from "react";
import { MessageCircle, X, Send, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import ReactMarkdown from "react-markdown";

const CHAT_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/spiritual-chat`;

const quickReplies = [
  "🙏 Book Appointment",
  "🕉️ Know Services",
  "📞 Talk to Pandit Ji",
  "✨ Spiritual Guidance",
  "🪷 Kundali Reading",
];

type Message = {
  id: number;
  role: "user" | "assistant";
  content: string;
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 0,
      role: "assistant",
      content:
        "🙏 **Namaste!** I am Sri Yerroju Srinivasa Charyulu, a Vedic scholar with over 30 years of experience.\n\nI can guide you on:\n- **Kundali Reading** & Horoscope Analysis\n- **Navagraha Pooja** & Planetary Remedies\n- **Sarpa Dosha Shanti** & Dosha Remedies\n- **Marriage & Santan Pujas**\n\nShare your **Date of Birth** or ask me anything about Vedic rituals. 🕉️",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  const streamChat = useCallback(
    async (allMessages: Message[]) => {
      const resp = await fetch(CHAT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
        },
        body: JSON.stringify({
          messages: allMessages.map((m) => ({ role: m.role, content: m.content })),
        }),
      });

      if (!resp.ok || !resp.body) {
        const errData = await resp.json().catch(() => ({}));
        throw new Error(errData.error || "Failed to connect");
      }

      const reader = resp.body.getReader();
      const decoder = new TextDecoder();
      let textBuffer = "";
      let assistantSoFar = "";
      let streamDone = false;

      while (!streamDone) {
        const { done, value } = await reader.read();
        if (done) break;
        textBuffer += decoder.decode(value, { stream: true });

        let newlineIndex: number;
        while ((newlineIndex = textBuffer.indexOf("\n")) !== -1) {
          let line = textBuffer.slice(0, newlineIndex);
          textBuffer = textBuffer.slice(newlineIndex + 1);

          if (line.endsWith("\r")) line = line.slice(0, -1);
          if (line.startsWith(":") || line.trim() === "") continue;
          if (!line.startsWith("data: ")) continue;

          const jsonStr = line.slice(6).trim();
          if (jsonStr === "[DONE]") {
            streamDone = true;
            break;
          }

          try {
            const parsed = JSON.parse(jsonStr);
            const content = parsed.choices?.[0]?.delta?.content as string | undefined;
            if (content) {
              assistantSoFar += content;
              setMessages((prev) => {
                const last = prev[prev.length - 1];
                if (last?.role === "assistant" && last.id === -1) {
                  return prev.map((m, i) =>
                    i === prev.length - 1 ? { ...m, content: assistantSoFar } : m
                  );
                }
                return [...prev, { id: -1, role: "assistant", content: assistantSoFar }];
              });
            }
          } catch {
            textBuffer = line + "\n" + textBuffer;
            break;
          }
        }
      }

      // Flush remaining buffer
      if (textBuffer.trim()) {
        for (let raw of textBuffer.split("\n")) {
          if (!raw) continue;
          if (raw.endsWith("\r")) raw = raw.slice(0, -1);
          if (!raw.startsWith("data: ")) continue;
          const jsonStr = raw.slice(6).trim();
          if (jsonStr === "[DONE]") continue;
          try {
            const parsed = JSON.parse(jsonStr);
            const content = parsed.choices?.[0]?.delta?.content as string | undefined;
            if (content) {
              assistantSoFar += content;
              setMessages((prev) =>
                prev.map((m, i) =>
                  i === prev.length - 1 ? { ...m, content: assistantSoFar } : m
                )
              );
            }
          } catch {
            /* ignore */
          }
        }
      }

      // Finalize: give the assistant message a real id
      setMessages((prev) =>
        prev.map((m) => (m.id === -1 ? { ...m, id: Date.now() } : m))
      );
    },
    []
  );

  const sendMessage = async (text: string) => {
    if (!text.trim() || isLoading) return;

    const userMsg: Message = { id: Date.now(), role: "user", content: text.trim() };
    const updated = [...messages, userMsg];
    setMessages(updated);
    setInput("");
    setIsLoading(true);

    try {
      await streamChat(updated);
    } catch (e) {
      console.error("Chat error:", e);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          role: "assistant",
          content:
            "🙏 I apologize, I'm having trouble connecting right now. Please try again, or call us directly at **8897319822**.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  return (
    <>
      {/* Chat toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close chat" : "Open chat"}
        className={cn(
          "fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[60] flex h-14 w-14 items-center justify-center rounded-full shadow-xl transition-all duration-300",
          isOpen
            ? "bg-primary text-primary-foreground rotate-0"
            : "bg-secondary text-secondary-foreground hover:scale-110 animate-pulse hover:animate-none"
        )}
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>

      {/* Chat window */}
      <div
        className={cn(
          "fixed z-[59] transition-all duration-300 ease-in-out",
          "bottom-20 right-4 sm:bottom-24 sm:right-6",
          "w-[calc(100vw-2rem)] sm:w-[400px]",
          isOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-4 pointer-events-none"
        )}
      >
        <div className="flex flex-col rounded-2xl border border-border bg-background shadow-2xl overflow-hidden h-[500px] sm:h-[560px]">
          {/* Header */}
          <div className="bg-primary px-4 py-3 sm:px-5 sm:py-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary/20 text-lg">
              🕉️
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-heading text-sm font-bold text-primary-foreground">
                Sri Yerroju Srinivasa Charyulu
              </h3>
              <p className="text-xs text-primary-foreground/60 flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-secondary inline-block animate-pulse" />
                Vedic Scholar • 30+ Years Experience
              </p>
            </div>
            <Sparkles className="h-4 w-4 text-secondary" />
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-3 py-3 sm:px-4 sm:py-4 space-y-3 bg-muted/30">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={cn(
                  "flex",
                  msg.role === "user" ? "justify-end" : "justify-start"
                )}
              >
                <div
                  className={cn(
                    "max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed shadow-sm",
                    msg.role === "user"
                      ? "bg-secondary text-secondary-foreground rounded-br-md"
                      : "bg-card text-card-foreground border border-border rounded-bl-md"
                  )}
                >
                  <div className="prose prose-sm dark:prose-invert max-w-none [&_p]:my-1 [&_ul]:my-1 [&_li]:my-0.5 [&_strong]:text-inherit">
                    <ReactMarkdown>{msg.content}</ReactMarkdown>
                  </div>
                </div>
              </div>
            ))}

            {isLoading && messages[messages.length - 1]?.role !== "assistant" && (
              <div className="flex justify-start">
                <div className="bg-card border border-border rounded-2xl rounded-bl-md px-4 py-3 shadow-sm">
                  <div className="flex gap-1">
                    <span className="h-2 w-2 rounded-full bg-muted-foreground/40 animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="h-2 w-2 rounded-full bg-muted-foreground/40 animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="h-2 w-2 rounded-full bg-muted-foreground/40 animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick replies */}
          <div className="px-3 py-2 border-t border-border bg-background/80 overflow-x-auto">
            <div className="flex gap-2 min-w-max">
              {quickReplies.map((qr) => (
                <button
                  key={qr}
                  onClick={() => sendMessage(qr)}
                  disabled={isLoading}
                  className="text-xs font-medium px-3 py-1.5 rounded-full border border-secondary/30 text-secondary bg-secondary/5 hover:bg-secondary/10 transition-colors whitespace-nowrap disabled:opacity-50"
                >
                  {qr}
                </button>
              ))}
            </div>
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="px-3 py-2.5 sm:px-4 sm:py-3 border-t border-border bg-background flex gap-2">
            <Input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about pujas, kundali, remedies..."
              className="flex-1 h-10 rounded-xl border-border text-sm"
              disabled={isLoading}
            />
            <Button
              type="submit"
              size="icon"
              disabled={!input.trim() || isLoading}
              className="h-10 w-10 rounded-xl bg-secondary text-secondary-foreground hover:bg-secondary/90 flex-shrink-0"
            >
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Chatbot;
