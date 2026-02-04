import { ChatMessage } from "../components/chat/ChatMessage";
import { ChatInput } from "../components/chat/ChatInput";
import { Header } from "../components/layout/Header";
import { ContextSidebar } from "../components/chat/ContextSidebar";

export function ChatPage() {
  return (
    <div className="flex flex-1 h-full overflow-hidden">
      <div className="flex-1 flex flex-col min-w-0">
        <Header />

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
      <ContextSidebar />
    </div>
  );
}
