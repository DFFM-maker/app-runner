import { ChatMessage } from "../components/chat/ChatMessage";
import { ChatInput } from "../components/chat/ChatInput";

export function ChatPage() {
  return (
    <div className="flex-1 flex flex-col h-full overflow-hidden">
      {/* Top Navigation */}
      <header className="h-14 flex items-center justify-between px-6 border-b border-zinc-800 backdrop-blur-md bg-black/70 sticky top-0 z-10 shrink-0">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-zinc-500 text-sm font-medium">
            <span>Workspace</span>
            <span className="text-zinc-800">/</span>
            <span className="text-zinc-100">AI Research Assistant</span>
          </div>
          <div className="h-4 w-[1px] bg-zinc-800 mx-2"></div>
          <div className="flex items-center gap-1 bg-zinc-900 border border-zinc-800 rounded px-2 py-0.5">
            <span className="text-[10px] text-zinc-500 font-mono tracking-tighter">CMD+K</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="p-1.5 text-zinc-500 hover:text-white rounded-md hover:bg-zinc-900 transition-colors">
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <button className="p-1.5 text-zinc-500 hover:text-white rounded-md hover:bg-zinc-900 transition-colors">
            <span className="material-symbols-outlined">help</span>
          </button>
        </div>
      </header>

      {/* Chat Container */}
      <div className="flex-1 overflow-y-auto custom-scrollbar">
        <div className="max-w-3xl mx-auto py-10 px-4 flex flex-col gap-10">
          <ChatMessage
            role="assistant"
            content="Hello! I've indexed your latest notes on neural networks and synthesized the connection to your Transformer project. How can I help you today?"
            model="Model 4.0"
          />

          <ChatMessage
            role="user"
            content="Can you summarize the connection between the 'Attention mechanism' note and my recent 'Transformer' project?"
            avatar="https://lh3.googleusercontent.com/aida-public/AB6AXuCQ7ObK_0CCt0-glrqoqvyuf-h8qjaaWb0Ky1BydFBsYLYfUH2AAUQ_00as8sZvxoHQtJKAjb8TOGOZLDR4pClUe--HrlRG8p7eWPgjKkmLmGCbTb13928sQJ3KGwFCtUH95fGs3KTpLwWZwNmTQp2C1tizj1vKHEul_ZW_eCnaHKTbM4RWpfRJNEaZgcu0m9ETBZ8rlE6Y7lq1egcauqpPncYuq8vEU0keu2iKpdhbpIwT6KGjXZRJI_o_SGlq75hNbKbddt7FRXL5"
          />

          <ChatMessage
            role="assistant"
            content="Based on your notes, here is the synthesis:"
            suggestion="Your 'Attention mechanism' note details the mathematical foundations of dot-product attention, which directly correlates with the MultiHeadAttention module in your 'Transformer' repository."
            resources={[
              { name: "AttentionMechanism.md", icon: "article" },
              { name: "src/model.py", icon: "code" }
            ]}
          />
        </div>
      </div>

      <ChatInput />
    </div>
  );
}
