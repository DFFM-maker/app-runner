import { Modal } from "../ui/Modal";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";
import { cn } from "../../lib/utils";

interface APIModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function APIModal({ isOpen, onClose }: APIModalProps) {
  const keys = [
    { name: "Production Main", key: "sk_live_••••••••3a9c", status: "active", lastUsed: "2 mins ago" },
    { name: "Development", key: "sk_test_••••••••f92b", status: "active", lastUsed: "1 day ago" },
    { name: "Staging", key: "sk_test_••••••••7d41", status: "inactive", lastUsed: "Never" },
  ];

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="API Management" className="max-w-3xl">
      <div className="space-y-8">
        <div className="flex justify-between items-start gap-6">
          <p className="text-zinc-500 text-sm flex-1">
            Create, rotate, and manage secure API keys to integrate your second brain with external applications and local scripts.
          </p>
          <Button size="sm" className="gap-2 shrink-0">
            <span className="material-symbols-outlined !text-[18px]">add</span>
            <span>New Key</span>
          </Button>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-3 gap-4">
          <Card className="p-4 space-y-1">
            <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">Requests</p>
            <p className="text-xl font-bold text-white">1.2M</p>
          </Card>
          <Card className="p-4 space-y-1">
            <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">Latency</p>
            <p className="text-xl font-bold text-white">142ms</p>
          </Card>
          <Card className="p-4 space-y-1">
            <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">Cost</p>
            <p className="text-xl font-bold text-white">$42.50</p>
          </Card>
        </div>

        {/* Keys Table */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead className="bg-zinc-800/50 border-b border-zinc-800">
              <tr>
                <th className="px-4 py-3 text-[10px] font-bold uppercase tracking-wider text-zinc-500">Name</th>
                <th className="px-4 py-3 text-[10px] font-bold uppercase tracking-wider text-zinc-500">Key</th>
                <th className="px-4 py-3 text-[10px] font-bold uppercase tracking-wider text-zinc-500">Last Used</th>
                <th className="px-4 py-3 text-[10px] font-bold uppercase tracking-wider text-zinc-500 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800">
              {keys.map((k, i) => (
                <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-2">
                      <div className={cn("size-2 rounded-full", k.status === 'active' ? 'bg-emerald-500' : 'bg-zinc-600')}></div>
                      <span className="text-sm font-medium text-white">{k.name}</span>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <code className="text-[10px] text-zinc-500 font-mono bg-black/30 px-1.5 py-0.5 rounded">{k.key}</code>
                  </td>
                  <td className="px-4 py-4 text-xs text-zinc-500">{k.lastUsed}</td>
                  <td className="px-4 py-4 text-right">
                    <div className="flex items-center justify-end gap-1">
                      <button className="p-1.5 text-zinc-500 hover:text-white transition-colors">
                        <span className="material-symbols-outlined !text-[18px]">content_copy</span>
                      </button>
                      <button className="p-1.5 text-zinc-500 hover:text-red-400 transition-colors">
                        <span className="material-symbols-outlined !text-[18px]">delete</span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Modal>
  );
}
