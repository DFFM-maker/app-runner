import { Modal } from "../ui/Modal";
import { Button } from "../ui/Button";
import { cn } from "../../lib/utils";

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SettingsModal({ isOpen, onClose }: SettingsModalProps) {
  const sidebarItems = [
    { label: "General", icon: "settings", active: true },
    { label: "Security", icon: "shield" },
    { label: "API", icon: "terminal" },
    { label: "Billing", icon: "credit_card" },
  ];

  const preferenceItems = [
    { label: "Notifications", icon: "notifications" },
    { label: "Team Members", icon: "group" },
  ];

  return (
    <Modal isOpen={isOpen} onClose={onClose} noPadding hideHeader className="max-w-4xl overflow-hidden h-[640px]">
      {/* Custom Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800 shrink-0">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-zinc-400 text-xl">settings</span>
          <h2 className="text-white text-sm font-semibold tracking-tight">Settings</h2>
        </div>
        <button onClick={onClose} className="text-zinc-500 hover:text-white transition-colors">
          <span className="material-symbols-outlined">close</span>
        </button>
      </div>

      <div className="flex h-full overflow-hidden">
        {/* Sidebar */}
        <aside className="w-64 border-r border-zinc-800 bg-zinc-950 flex flex-col p-4 gap-6 shrink-0">
          <div className="flex flex-col">
            <h3 className="px-3 text-[11px] font-bold text-zinc-500 uppercase tracking-widest mb-2">Workspace</h3>
            <nav className="flex flex-col gap-1">
              {sidebarItems.map((item) => (
                <button
                  key={item.label}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                    item.active ? "bg-white/5 text-white" : "text-zinc-400 hover:bg-white/5 hover:text-white"
                  )}
                >
                  <span className="material-symbols-outlined !text-[20px]">{item.icon}</span>
                  <span>{item.label}</span>
                </button>
              ))}
            </nav>
          </div>
          <div className="flex flex-col">
            <h3 className="px-3 text-[11px] font-bold text-zinc-500 uppercase tracking-widest mb-2">Preferences</h3>
            <nav className="flex flex-col gap-1">
              {preferenceItems.map((item) => (
                <button
                  key={item.label}
                  className="flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium text-zinc-400 hover:bg-white/5 hover:text-white transition-colors"
                >
                  <span className="material-symbols-outlined !text-[20px]">{item.icon}</span>
                  <span>{item.label}</span>
                </button>
              ))}
            </nav>
          </div>
        </aside>

        {/* Content */}
        <div className="flex-1 flex flex-col bg-zinc-950 overflow-hidden">
          <main className="flex-1 overflow-y-auto p-8 scroll-smooth custom-scrollbar">
            <div className="mb-8">
              <h1 className="text-2xl font-bold text-white tracking-tight">General Settings</h1>
              <p className="text-zinc-500 text-sm mt-1">Manage your workspace preferences and interface language.</p>
            </div>

            {/* Appearance Section */}
            <section className="mb-10">
              <h2 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined !text-[18px]">palette</span>
                Appearance
              </h2>
              <div className="bg-zinc-900 border border-zinc-800 p-1 rounded-lg flex w-fit min-w-[320px]">
                {["Light", "Dark", "System"].map((mode) => (
                  <button
                    key={mode}
                    className={cn(
                      "flex-1 flex items-center justify-center gap-2 py-1.5 px-4 rounded-md text-sm font-medium transition-all",
                      mode === "Dark" ? "bg-zinc-800 text-white" : "text-zinc-500 hover:text-zinc-300"
                    )}
                  >
                    <span className="material-symbols-outlined !text-[18px]">
                      {mode === "Light" ? "light_mode" : mode === "Dark" ? "dark_mode" : "desktop_windows"}
                    </span>
                    {mode}
                  </button>
                ))}
              </div>
              <p className="text-zinc-500 text-[11px] mt-3">Select how the Second Brain interface looks on your device.</p>
            </section>

            {/* Language Section */}
            <section className="mb-10">
              <h2 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined !text-[18px]">language</span>
                Language
              </h2>
              <div className="relative max-w-xs">
                <select className="w-full bg-zinc-900 border border-zinc-800 rounded-md text-white py-2 px-3 text-sm focus:ring-1 focus:ring-primary focus:border-primary outline-none appearance-none">
                  <option>English (US)</option>
                  <option>Italiano (IT)</option>
                  <option>Spanish (ES)</option>
                </select>
                <span className="absolute right-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-zinc-500 !text-[18px] pointer-events-none">unfold_more</span>
              </div>
            </section>

            {/* Data Management Section */}
            <section className="mb-8">
              <h2 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined !text-[18px]">database</span>
                Data Management
              </h2>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-4 bg-zinc-900 border border-zinc-800 rounded-lg">
                  <div>
                    <h4 className="text-sm font-medium text-white">Export Workspace</h4>
                    <p className="text-xs text-zinc-500 mt-0.5">Download all your brain data in JSON format.</p>
                  </div>
                  <Button size="sm" variant="outline" className="gap-2">
                    <span className="material-symbols-outlined !text-[16px]">download</span>
                    Export
                  </Button>
                </div>
                <div className="flex items-center justify-between p-4 border border-red-500/20 bg-red-500/5 rounded-lg">
                  <div>
                    <h4 className="text-sm font-medium text-red-500">Delete Account</h4>
                    <p className="text-xs text-zinc-500 mt-0.5">Permanently remove all data and close account.</p>
                  </div>
                  <button className="text-red-500 hover:text-red-400 text-xs font-semibold py-2 px-4 border border-red-500/30 hover:bg-red-500/10 rounded-md transition-all">
                    Delete Account
                  </button>
                </div>
              </div>
            </section>
          </main>

          <footer className="flex items-center justify-end px-8 py-4 border-t border-zinc-800 bg-zinc-950 gap-3 shrink-0">
            <button className="text-zinc-400 hover:text-white text-sm font-medium py-2 px-4 transition-colors" onClick={onClose}>
              Cancel
            </button>
            <Button size="sm" onClick={onClose} className="px-6 shadow-lg shadow-primary/20">
              Save Changes
            </Button>
          </footer>
        </div>
      </div>
    </Modal>
  );
}
