import { cn } from "../../lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "success" | "zinc";
  className?: string;
}

export function Badge({ children, variant = "secondary", className }: BadgeProps) {
  const variants = {
    primary: "bg-primary/10 text-primary border-primary/20",
    secondary: "bg-zinc-800 text-zinc-400 border-white/5",
    success: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
    zinc: "bg-zinc-900 text-zinc-500 border-zinc-800",
  };

  return (
    <span
      className={cn(
        "px-1.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-widest border",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
