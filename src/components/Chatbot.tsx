import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const spiritualQuotes = [
  "🙏 \"The one who sees inaction in action, and action in inaction, is wise among men.\" — Bhagavad Gita",
  "🕉️ \"You have the right to work, but never to the fruit of work.\" — Bhagavad Gita 2.47",
  "✨ \"When meditation is mastered, the mind is unwavering like the flame of a lamp in a windless place.\" — Bhagavad Gita",
  "🪷 \"The soul is neither born, and nor does it die.\" — Bhagavad Gita 2.20",
  "🔱 \"Set thy heart upon thy work, but never on its reward.\" — Bhagavad Gita",
  "🌺 \"Whatever happened, happened for the good. Whatever is happening, is happening for the good.\" — Bhagavad Gita",
];

const quickReplies = [
  "Book a Puja",
  "Know about services",
  "Talk to Pandit Ji",
  "Get a spiritual quote",
];

type Message = {
  id: number;
  text: string;
  sender: "bot" | "user";
  timestamp: Date;
};

const getAutoReply = (input: string): string => {
  const lower = input.toLowerCase();

  if (lower.includes("book") || lower.includes("puja") || lower.includes("pooja")) {
    return "🙏 Namaste! We'd love to help you book a puja. Please fill our booking form in the Contact section below, or call us directly at **88973 19822**. We respond within 2 hours!\n\n🕉️ Har Har Mahadev!";
  }
  if (lower.includes("service") || lower.includes("what do you") || lower.includes("offer")) {
    return "🙏 We offer a wide range of Vedic services:\n\n• **Navagraha Pooja** — Planetary peace\n• **Sarpa Dosha Shanti** — Dosha remedies\n• **Kundali Reading** — Horoscope analysis\n• **Marriage Pujas** — Vedic weddings\n• **Santan Pujas** — Child blessings\n• **Graha Dosha Remedies** — Planetary fixes\n• **All Traditional Pujas** — Griha Pravesh & more\n\nWould you like to book any of these?";
  }
  if (lower.includes("talk") || lower.includes("pandit") || lower.includes("call") || lower.includes("phone")) {
    return "📞 You can reach Pandit Yerroju Srinivasa Charyulu Garu directly:\n\n**88973 19822**\n\nOr send us a WhatsApp message. We respond within 2 hours! 🙏";
  }
  if (lower.includes("quote") || lower.includes("spiritual") || lower.includes("mantra") || lower.includes("inspire")) {
    const quote = spiritualQuotes[Math.floor(Math.random() * spiritualQuotes.length)];
    return `Here's a divine message for you:\n\n${quote}\n\n🙏 May this bring peace to your soul.`;
  }
  if (lower.includes("price") || lower.includes("cost") || lower.includes("charge") || lower.includes("fee")) {
    return "🙏 Our puja fees vary based on the type and complexity of the ritual. Please call us at **88973 19822** for a detailed discussion. We offer services at very reasonable rates with complete devotion.\n\n🕉️ Seva is our priority!";
  }
  if (lower.includes("hello") || lower.includes("hi") || lower.includes("namaste") || lower.includes("hey")) {
    return "🙏 Namaste! Welcome to **Priest Seva**.\n\nI'm here to help you with:\n• Booking a Puja\n• Knowing about our services\n• Connecting with Pandit Ji\n• Sharing spiritual wisdom\n\nHow can I assist you today?";
  }
  if (lower.includes("thank") || lower.includes("thanks") || lower.includes("dhanyavad")) {
    return "🙏 Dhanyavad! It's our pleasure to serve you.\n\n\"Service to others is the rent you pay for your room here on Earth.\" — Muhammad Ali\n\n🕉️ Har Har Mahadev! Feel free to reach out anytime.";
  }

  return "🙏 Thank you for reaching out! For the best assistance:\n\n• **Book a Puja** — Fill our contact form below\n• **Call us** — 88973 19822\n• **WhatsApp** — Quick response guaranteed\n\nOr ask me about our services, pricing, or request a spiritual quote! 🕉️";
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 0,
      text: "🙏 Namaste! Welcome to **Priest Seva**.\n\nI'm your spiritual guide here. How can I help you today?\n\n🕉️ *\"The mind is everything. What you think you become.\"* — Buddha",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  const sendMessage = (text: string) => {
    if (!text.trim()) return;

    const userMsg: Message = {
      id: Date.now(),
      text: text.trim(),
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const reply = getAutoReply(text);
      const botMsg: Message = {
        id: Date.now() + 1,
        text: reply,
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 800 + Math.random() * 700);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  const formatMessage = (text: string) => {
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/\n/g, '<br/>');
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
          "w-[calc(100vw-2rem)] sm:w-[380px]",
          isOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-4 pointer-events-none"
        )}
      >
        <div className="flex flex-col rounded-2xl border border-border bg-background shadow-2xl overflow-hidden h-[480px] sm:h-[520px]">
          {/* Header */}
          <div className="bg-primary px-4 py-3 sm:px-5 sm:py-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary/20 text-lg">
              🕉️
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-heading text-sm font-bold text-primary-foreground">Priest Seva</h3>
              <p className="text-xs text-primary-foreground/60 flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-secondary inline-block" />
                Online — Ready to help
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
                  msg.sender === "user" ? "justify-end" : "justify-start"
                )}
              >
                <div
                  className={cn(
                    "max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed shadow-sm",
                    msg.sender === "user"
                      ? "bg-secondary text-secondary-foreground rounded-br-md"
                      : "bg-card text-card-foreground border border-border rounded-bl-md"
                  )}
                  dangerouslySetInnerHTML={{ __html: formatMessage(msg.text) }}
                />
              </div>
            ))}

            {isTyping && (
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
                  className="text-xs font-medium px-3 py-1.5 rounded-full border border-secondary/30 text-secondary bg-secondary/5 hover:bg-secondary/10 transition-colors whitespace-nowrap"
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
              placeholder="Type your message..."
              className="flex-1 h-10 rounded-xl border-border text-sm"
              disabled={isTyping}
            />
            <Button
              type="submit"
              size="icon"
              disabled={!input.trim() || isTyping}
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
