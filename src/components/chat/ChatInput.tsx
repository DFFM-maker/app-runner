import { useState } from "react";
import { Button } from "../ui/Button";

export function ChatInput() {
  const [message, setMessage] = useState("");

  return (
    <footer className="p-6 bg-gradient-to-t from-black via-black to-transparent">
      <div className="max-w-3xl mx-auto relative group">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/30 to-blue-500/30 rounded-xl blur opacity-0 group-focus-within:opacity-100 transition-opacity duration-300"></div>
        <div className="relative bg-zinc-900 border border-zinc-800 rounded-xl p-2 flex flex-col gap-2 shadow-2xl">
          <textarea
            className="w-full bg-transparent border-none focus:ring-0 text-white placeholder-zinc-500 py-2 px-3 resize-none text-[15px]"
            placeholder="Ask anything or search your brain..."
            rows={1}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <div className="flex items-center justify-between px-2 pb-1">
            <div className="flex items-center gap-1">
              <button className="p-1.5 text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800 rounded-md transition-colors">
                <span className="material-symbols-outlined">attach_file</span>
              </button>
              <button className="p-1.5 text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800 rounded-md transition-colors">
                <span className="material-symbols-outlined">mic</span>
              </button>
              <button className="p-1.5 text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800 rounded-md transition-colors">
                <span className="material-symbols-outlined">image</span>
              </button>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[10px] text-zinc-600 font-medium hidden sm:block">Press <kbd className="bg-zinc-800 px-1 rounded border border-zinc-700 uppercase">Enter</kbd> to send</span>
              <Button size="icon" className="h-8 w-8" disabled={!message.trim()}>
                <span className="material-symbols-outlined !text-[18px]">arrow_upward</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center text-[11px] text-zinc-600 mt-4">
        Second Brain uses AI to synthesize your notes. Please verify important technical claims.
      </p>
    </footer>
  );
}
