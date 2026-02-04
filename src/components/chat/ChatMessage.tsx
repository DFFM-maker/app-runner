import { Avatar } from "../ui/Avatar";
import { Badge } from "../ui/Badge";
import { cn } from "../../lib/utils";
import avatarImg from "../../assets/avatar.png";

interface ChatMessageProps {
  role: "user" | "assistant";
  content: string;
  avatar?: string;
  name?: string;
  model?: string;
  resources?: { name: string; icon: string }[];
  suggestion?: string;
}

export function ChatMessage({ role, content, avatar, name, model, resources, suggestion }: ChatMessageProps) {
  const isAssistant = role === "assistant";

  return (
    <div className={cn("flex gap-4 items-start group", isAssistant ? "" : "flex-row-reverse")}>
      <div className={cn(
        "w-9 h-9 rounded-lg border flex items-center justify-center shrink-0 overflow-hidden",
        isAssistant ? "bg-zinc-900 border-zinc-800" : "bg-zinc-800 border-zinc-700"
      )}>
        {isAssistant ? (
          <span className="material-symbols-outlined !text-[20px] text-primary">auto_awesome</span>
        ) : (
          <Avatar src={avatar || avatarImg} fallback="U" size="lg" className="border-none" />
        )}
      </div>

      <div className={cn("flex flex-col gap-2 pt-1.5 flex-1", isAssistant ? "" : "items-end")}>
        <div className="flex items-center gap-2">
          <span className="text-sm font-bold text-white">{name || (isAssistant ? "Second Brain" : "You")}</span>
          {isAssistant && model && <Badge variant="primary">{model}</Badge>}
        </div>

        <div className={cn(
          "leading-relaxed text-[15px] max-w-lg shadow-lg",
          isAssistant
            ? "text-zinc-300"
            : "bg-primary text-white px-5 py-3 rounded-2xl rounded-tr-none shadow-primary/20"
        )}>
          {content}

          {isAssistant && suggestion && (
            <div className="mt-4 bg-zinc-900/50 border border-zinc-800 p-4 rounded-xl space-y-3">
               <div className="flex items-center gap-2 text-primary font-semibold text-sm">
                  <span className="material-symbols-outlined !text-[18px]">lightbulb</span>
                  Core Connection Found
               </div>
               <p className="text-sm text-zinc-400">
                  {suggestion}
               </p>
            </div>
          )}
        </div>

        {isAssistant && resources && resources.length > 0 && (
          <div className="flex gap-2 mt-2">
            {resources.map((res, i) => (
              <div key={i} className="flex items-center gap-2 bg-zinc-900 border border-zinc-800 px-3 py-1.5 rounded-lg cursor-pointer hover:bg-zinc-800 transition-colors">
                <span className="material-symbols-outlined text-primary !text-[16px]">{res.icon}</span>
                <span className="text-[12px] font-medium text-zinc-300">{res.name}</span>
              </div>
            ))}
          </div>
        )}

        {isAssistant && (
          <div className="flex items-center gap-4 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <button className="text-zinc-500 hover:text-zinc-300 flex items-center gap-1.5 text-xs">
              <span className="material-symbols-outlined !text-[16px]">thumb_up</span> Helpful
            </button>
            <button className="text-zinc-500 hover:text-zinc-300 flex items-center gap-1.5 text-xs">
              <span className="material-symbols-outlined !text-[16px]">content_copy</span> Copy
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
