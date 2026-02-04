import { Avatar } from "../ui/Avatar";
import avatarImg from "../../assets/avatar.png";

interface HeaderProps {
  title?: string;
  breadcrumbs?: { label: string; active?: boolean }[];
}

export function Header({ breadcrumbs }: HeaderProps) {
  const defaultBreadcrumbs = [
    { label: "Workspace" },
    { label: "AI Research Assistant", active: true }
  ];

  const displayBreadcrumbs = breadcrumbs || defaultBreadcrumbs;

  return (
    <header className="h-14 flex items-center justify-between px-6 border-b border-zinc-800 backdrop-blur-md bg-black/70 sticky top-0 z-10 shrink-0">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 text-zinc-500 text-sm font-medium">
          {displayBreadcrumbs.map((bc, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className={bc.active ? "text-zinc-100" : ""}>{bc.label}</span>
              {i < displayBreadcrumbs.length - 1 && <span className="text-zinc-800">/</span>}
            </div>
          ))}
        </div>
        <div className="h-4 w-[1px] bg-zinc-800 mx-2"></div>
        <div className="flex items-center gap-1 bg-zinc-900 border border-zinc-800 rounded px-2 py-0.5">
          <span className="text-[10px] text-zinc-500 font-mono tracking-tighter">CMD+K</span>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-zinc-500">
          <a href="#" className="hover:text-white transition-colors">Research</a>
          <a href="#" className="hover:text-white transition-colors">Projects</a>
          <a href="#" className="hover:text-white transition-colors">Archive</a>
        </nav>

        <div className="flex items-center gap-2">
          <button className="p-1.5 text-zinc-500 hover:text-white rounded-md hover:bg-zinc-900 transition-colors">
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <button className="p-1.5 text-zinc-500 hover:text-white rounded-md hover:bg-zinc-900 transition-colors">
            <span className="material-symbols-outlined">help</span>
          </button>
          <Avatar src={avatarImg} fallback="AR" size="sm" className="ml-2 border-zinc-800" />
        </div>
      </div>
    </header>
  );
}
