import { NavLink } from "react-router-dom";
import { cn } from "../../lib/utils";
import { Button } from "../ui/Button";
import { Avatar } from "../ui/Avatar";
import avatarImg from "../../assets/avatar.png";
import logoImg from "../../assets/logo_dark.png";

interface SidebarProps {
  onOpenSettings: () => void;
}

export function Sidebar({ onOpenSettings }: SidebarProps) {
  const navItems = [
    { to: "/", label: "Home", icon: "home" },
    { to: "/library", label: "Library", icon: "book_2" },
    { to: "/neural-map", label: "Neural Map", icon: "account_tree" },
    { to: "/recent", label: "Recent", icon: "schedule" },
  ];

  const recents = [
    { name: "Project_Brief.pdf", icon: "description", active: true },
    { name: "Research_Notes.md", icon: "markdown" },
  ];

  const projects = [
    { name: "AI Research", icon: "folder" },
    { name: "Product Specs", icon: "folder" },
    { name: "Knowledge Base", icon: "folder" },
  ];

  return (
    <aside className="w-64 flex flex-col h-full bg-zinc-950 border-r border-zinc-800 shrink-0">
      <div className="p-4 flex flex-col h-full">
        {/* App Header */}
        <div className="flex items-center gap-3 px-2 mb-8">
          <div className="size-8 rounded-lg bg-primary flex items-center justify-center overflow-hidden">
            <img src={logoImg} alt="Logo" className="size-full object-cover" />
          </div>
          <div className="flex flex-col">
            <h1 className="text-sm font-semibold leading-none text-white">Second Brain</h1>
            <p className="text-[11px] text-zinc-500 mt-1 uppercase tracking-wider font-bold">Personal Space</p>
          </div>
          <button className="ml-auto text-zinc-500 hover:text-white transition-colors">
            <span className="material-symbols-outlined !text-[18px]">unfold_more</span>
          </button>
        </div>

        {/* New Chat Button */}
        <div className="px-2 mb-6">
          <Button variant="outline" className="w-full justify-start gap-2 border-primary/30 text-primary hover:bg-primary/10 hover:text-primary hover:border-primary/50">
            <span className="material-symbols-outlined">add</span>
            <span>New Chat</span>
          </Button>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-1 px-2 mb-8">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                  isActive
                    ? "bg-primary/10 text-white border border-primary/20"
                    : "text-zinc-500 hover:text-white hover:bg-zinc-900"
                )
              }
            >
              <span className="material-symbols-outlined !text-[20px]">{item.icon}</span>
              <span>{item.label}</span>
            </NavLink>
          ))}

          <NavLink
            to="/api-management"
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                isActive
                  ? "bg-primary/10 text-white border border-primary/20"
                  : "text-zinc-500 hover:text-white hover:bg-zinc-900"
              )
            }
          >
            <span className="material-symbols-outlined !text-[20px]">key</span>
            <span>API Management</span>
          </NavLink>
        </nav>

        {/* Recents */}
        <div className="flex flex-col gap-1 px-2 mb-6">
          <p className="px-3 text-[11px] font-bold text-zinc-500 uppercase tracking-widest mb-2">Recents</p>
          {recents.map((item) => (
            <div
              key={item.name}
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition-all border border-transparent",
                item.active
                  ? "bg-white/10 text-white border-white/5"
                  : "text-zinc-500 hover:text-white hover:bg-zinc-900"
              )}
            >
              <span className={cn("material-symbols-outlined !text-[20px]", item.active ? "text-white/70" : "text-zinc-500")}>{item.icon}</span>
              <p className="text-sm font-medium truncate flex-1">{item.name}</p>
              {item.active && <span className="size-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(28,96,242,0.6)]"></span>}
            </div>
          ))}
        </div>

        {/* Projects */}
        <div className="flex flex-col gap-1 px-2 flex-1">
          <p className="px-3 text-[11px] font-bold text-zinc-500 uppercase tracking-widest mb-2">Projects</p>
          {projects.map((project) => (
            <div key={project.name} className="flex items-center gap-3 px-3 py-1.5 text-zinc-500 hover:text-white cursor-pointer text-sm transition-colors group">
              <span className="material-symbols-outlined !text-[18px] group-hover:text-primary transition-colors">{project.icon}</span>
              <span>{project.name}</span>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-auto pt-4 border-t border-zinc-800 flex flex-col gap-2">
          <Button className="w-full justify-center gap-2 py-2.5 shadow-lg shadow-primary/20">
            <span className="material-symbols-outlined !text-[18px]">add</span>
            <span>New Note</span>
          </Button>

          <div className="flex items-center justify-between p-2 rounded-lg hover:bg-zinc-900 transition-colors group cursor-pointer" onClick={onOpenSettings}>
            <div className="flex items-center gap-2">
              <Avatar fallback="AR" src={avatarImg} size="sm" className="border-zinc-700" />
              <span className="text-xs font-medium text-zinc-300 group-hover:text-white transition-colors">Settings</span>
            </div>
            <span className="material-symbols-outlined text-zinc-500 !text-[18px]">keyboard_command_key</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
