import { NavLink } from "react-router-dom";
import { cn } from "../../lib/utils";
import { Button } from "../ui/Button";
import { Avatar } from "../ui/Avatar";

interface SidebarProps {
  onOpenSettings: () => void;
  onOpenAPI: () => void;
}

export function Sidebar({ onOpenSettings, onOpenAPI }: SidebarProps) {
  const navItems = [
    { to: "/", label: "Home", icon: "home" },
    { to: "/library", label: "Library", icon: "book_2" },
  ];

  return (
    <aside className="w-64 flex flex-col h-full bg-zinc-950 border-r border-zinc-800 shrink-0">
      <div className="p-4 flex flex-col h-full">
        {/* App Header */}
        <div className="flex items-center gap-3 px-2 mb-8">
          <div className="size-8 rounded-lg bg-primary flex items-center justify-center text-white">
            <span className="material-symbols-outlined !text-[20px]">psychology</span>
          </div>
          <div className="flex flex-col">
            <h1 className="text-sm font-semibold leading-none text-white">Second Brain</h1>
            <p className="text-[10px] text-zinc-500 mt-1 uppercase tracking-wider font-bold">Personal Space</p>
          </div>
        </div>

        {/* New Chat Button */}
        <div className="px-2 mb-6">
          <Button variant="outline" className="w-full justify-start gap-2 border-primary/30 text-primary hover:bg-primary/10 hover:text-primary hover:border-primary/50">
            <span className="material-symbols-outlined">add</span>
            <span>New Chat</span>
          </Button>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-1 px-2 flex-1">
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

          <button
            onClick={onOpenAPI}
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-zinc-500 hover:text-white hover:bg-zinc-900 transition-colors w-full text-left"
          >
            <span className="material-symbols-outlined !text-[20px]">key</span>
            <span>API Management</span>
          </button>
        </nav>

        {/* Footer */}
        <div className="mt-auto pt-4 border-t border-zinc-800">
          <div className="flex items-center justify-between p-2 rounded-lg hover:bg-zinc-900 transition-colors group">
            <div className="flex items-center gap-3">
              <Avatar fallback="AR" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnlJuvNlV1vWt98fRG50CFv7ijhYcELcirILTEXOiDbigGFnZI2D8WrzknbGykmUzyJh_BFxTqK4qabDDIxgtvX-oP_srFxSTfiQoVnJgAoMuSltUm-Tk1s7WH08u9VpNNh8jU5NveBKGyQDmzyPagDHmYBbTq_jwFt1CgE_VRl5M4NDLBQvdrBchgNCcQa51DDNj_Bh3wplFwyhNPN6o9-ditl1VlIUvp09xgcXaOlKR5u-RFM5phh2u7p3buQcUn0pCEM17QBHre" />
              <div className="flex flex-col overflow-hidden">
                <p className="text-xs font-semibold text-white truncate">Alex Rivera</p>
                <p className="text-[10px] text-zinc-500 truncate">Pro Plan</p>
              </div>
            </div>
            <button
              onClick={onOpenSettings}
              className="p-1 text-zinc-500 hover:text-white transition-colors"
            >
              <span className="material-symbols-outlined !text-[20px]">settings</span>
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}
