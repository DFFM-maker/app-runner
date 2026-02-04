import { cn } from "../../lib/utils";

interface AvatarProps {
  src?: string;
  fallback: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function Avatar({ src, fallback, size = "md", className }: AvatarProps) {
  const sizes = {
    sm: "size-6 text-[10px]",
    md: "size-8 text-xs",
    lg: "size-10 text-sm",
  };

  return (
    <div
      className={cn(
        "rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center overflow-hidden shrink-0",
        sizes[size],
        className
      )}
    >
      {src ? (
        <img src={src} alt={fallback} className="w-full h-full object-cover" />
      ) : (
        <span className="font-bold text-zinc-400">{fallback}</span>
      )}
    </div>
  );
}
