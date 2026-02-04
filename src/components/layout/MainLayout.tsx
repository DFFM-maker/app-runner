import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { SettingsModal } from "../modals/SettingsModal";
import { APIModal } from "../modals/APIModal";

export function MainLayout() {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isAPIOpen, setIsAPIOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-background-dark text-zinc-100 font-display">
      <Sidebar
        onOpenSettings={() => setIsSettingsOpen(true)}
        onOpenAPI={() => setIsAPIOpen(true)}
      />
      <main className="flex-1 flex flex-col min-w-0 bg-background-dark">
        <Outlet />
      </main>

      <SettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
      />
      <APIModal
        isOpen={isAPIOpen}
        onClose={() => setIsAPIOpen(false)}
      />
    </div>
  );
}
