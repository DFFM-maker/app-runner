import { Modal } from "../ui/Modal";
import { Button } from "../ui/Button";

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SettingsModal({ isOpen, onClose }: SettingsModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Settings">
      <div className="space-y-8">
        {/* Profile Section */}
        <section className="space-y-4">
          <h3 className="text-sm font-bold text-zinc-500 uppercase tracking-widest">Profile</h3>
          <div className="flex items-center gap-4 p-4 bg-zinc-900 border border-zinc-800 rounded-xl">
             <div className="size-16 rounded-full bg-zinc-800 border border-zinc-700 overflow-hidden shrink-0">
               <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnlJuvNlV1vWt98fRG50CFv7ijhYcELcirILTEXOiDbigGFnZI2D8WrzknbGykmUzyJh_BFxTqK4qabDDIxgtvX-oP_srFxSTfiQoVnJgAoMuSltUm-Tk1s7WH08u9VpNNh8jU5NveBKGyQDmzyPagDHmYBbTq_jwFt1CgE_VRl5M4NDLBQvdrBchgNCcQa51DDNj_Bh3wplFwyhNPN6o9-ditl1VlIUvp09xgcXaOlKR5u-RFM5phh2u7p3buQcUn0pCEM17QBHre" alt="Avatar" className="w-full h-full object-cover" />
             </div>
             <div className="flex-1">
               <p className="text-white font-bold">Alex Rivera</p>
               <p className="text-zinc-500 text-sm">alex.rivera@example.com</p>
             </div>
             <Button variant="outline" size="sm">Edit</Button>
          </div>
        </section>

        {/* Preferences Section */}
        <section className="space-y-4">
          <h3 className="text-sm font-bold text-zinc-500 uppercase tracking-widest">Preferences</h3>
          <div className="space-y-2">
            <div className="flex items-center justify-between p-4 bg-zinc-900/50 border border-zinc-800 rounded-xl">
              <div>
                <p className="text-sm font-medium text-white">Dark Mode</p>
                <p className="text-xs text-zinc-500">Enable high-contrast dark theme</p>
              </div>
              <div className="w-10 h-6 bg-primary rounded-full relative cursor-pointer">
                <div className="absolute right-1 top-1 size-4 bg-white rounded-full"></div>
              </div>
            </div>
            <div className="flex items-center justify-between p-4 bg-zinc-900/50 border border-zinc-800 rounded-xl">
              <div>
                <p className="text-sm font-medium text-white">AI Synthesis</p>
                <p className="text-xs text-zinc-500">Automatically link new notes</p>
              </div>
              <div className="w-10 h-6 bg-zinc-700 rounded-full relative cursor-pointer">
                <div className="absolute left-1 top-1 size-4 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
        </section>

        <div className="flex justify-end gap-3 pt-4 border-t border-zinc-800">
          <Button variant="ghost" onClick={onClose}>Cancel</Button>
          <Button onClick={onClose}>Save Changes</Button>
        </div>
      </div>
    </Modal>
  );
}
