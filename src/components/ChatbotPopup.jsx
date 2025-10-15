import { useEffect, useRef, useState } from "react";
import { Bot, Send } from "lucide-react"; // ⬅️ icon chatbot + gửi

export default function ChatbotPopup() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, role: "bot", text: "Xin chào! Tôi có thể giúp gì cho bạn?" },
  ]);
  const [input, setInput] = useState("");
  const panelRef = useRef(null);

  useEffect(() => {
    const handleEsc = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const sendMessage = () => {
    const trimmed = input.trim();
    if (!trimmed) return;
    const userMsg = { id: Date.now(), role: "user", text: trimmed };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { id: Date.now() + 1, role: "bot", text: "Cảm ơn bạn! Chúng tôi sẽ liên hệ sớm." },
      ]);
    }, 400);
  };

  return (
    <div className="fixed bottom-5 right-5 z-[120]">
      {/* Floating button */}
      <button
        aria-label="Mở chatbot"
        onClick={() => setOpen((v) => !v)}
        className="relative rounded-full shadow-lg ring-1 ring-slate-200 text-white w-14 h-14 grid place-items-center hover:scale-105 transition"
        style={{ background: "linear-gradient(135deg, #22D3EE, #3B82F6)" }} // secondary
      >
        {/* ping glow */}
        <span className="absolute inline-flex h-full w-full rounded-full animate-ping opacity-20"
              style={{ background: "linear-gradient(135deg, #3B82F6, #06B6D4)" }} />
        <Bot size={22} className="relative z-10 drop-shadow-sm" />
      </button>

      {/* Popup panel */}
      {open && (
        <div
          ref={panelRef}
          className="absolute bottom-16 right-0 w-[320px] sm:w-[360px] bg-white rounded-2xl shadow-2xl ring-1 ring-slate-200 overflow-hidden animate-fade-in-up"
        >
          {/* Header */}
          <div
            className="px-4 py-3 text-white flex items-center justify-between"
            style={{ background: "linear-gradient(135deg, #22D3EE, #3B82F6)" }} // secondary
          >
            <div className="flex items-center gap-2 font-semibold">
              <span className="inline-flex items-center justify-center rounded-lg bg-white/15 p-1.5">
                <Bot size={16} />
              </span>
              XinKEdu Chat
            </div>
            <button
              aria-label="Đóng"
              onClick={() => setOpen(false)}
              className="rounded-lg px-2 py-1 hover:bg-white/10"
            >
              ×
            </button>
          </div>

          {/* Messages */}
          <div className="h-72 max-h-[70vh] overflow-y-auto p-3 space-y-3 bg-slate-50">
            {messages.map((m) => (
              <div
                key={m.id}
                className={
                  m.role === "user"
                    ? "ml-auto max-w-[80%] rounded-2xl px-3 py-2 text-white"
                    : "mr-auto max-w-[80%] rounded-2xl px-3 py-2 ring-1 ring-slate-200 text-slate-800 bg-white"
                }
                style={
                  m.role === "user"
                    ? { background: "linear-gradient(135deg, #3B82F6, #06B6D4)" } // primary
                    : undefined
                }
              >
                {m.text}
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-3 bg-white border-t border-slate-200">
            <div className="flex items-center gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                placeholder="Nhập tin nhắn..."
                className="flex-1 h-10 px-3 rounded-xl border border-slate-200 focus:border-sky-500 focus:ring-4 focus:ring-sky-100 outline-none"
              />
              <button
                onClick={sendMessage}
                className="h-10 px-3 rounded-xl text-white flex items-center gap-1.5 hover:opacity-95 transition"
                style={{ background: "linear-gradient(135deg, #22D3EE, #3B82F6)" }} // secondary
              >
                <Send size={16} />
                Gửi
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
