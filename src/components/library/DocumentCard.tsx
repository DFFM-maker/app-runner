import { Card } from "../ui/Card";

interface DocumentCardProps {
  name: string;
  type: string;
  size?: string;
  updatedAt: string;
  icon: string;
}

export function DocumentCard({ name, type, size, updatedAt, icon }: DocumentCardProps) {
  return (
    <Card className="flex items-center gap-4 hover:border-primary/50 cursor-pointer transition-all group">
      <div className="size-10 rounded-lg bg-zinc-800 flex items-center justify-center text-zinc-500 group-hover:text-primary transition-colors">
        <span className="material-symbols-outlined !text-[24px]">{icon}</span>
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="text-sm font-semibold text-white truncate">{name}</h4>
        <div className="flex items-center gap-2 text-[11px] text-zinc-500">
          <span>{type.toUpperCase()}</span>
          {size && (
            <>
              <span>•</span>
              <span>{size}</span>
            </>
          )}
          <span>•</span>
          <span>{updatedAt}</span>
        </div>
      </div>
      <button className="p-2 text-zinc-600 hover:text-white transition-colors">
        <span className="material-symbols-outlined !text-[20px]">more_vert</span>
      </button>
    </Card>
  );
}
