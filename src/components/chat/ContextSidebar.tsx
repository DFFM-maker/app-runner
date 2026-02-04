import { Card } from "../ui/Card";

export function ContextSidebar() {
  const resources = [
    { type: "Recent Project", title: "Transformer-v2", description: "PyTorch implementation with custom attention hooks.", icon: "open_in_new" },
    { type: "Reference Note", title: "Attention Mechanism", description: "Last edited 2 days ago • 1.2k words", icon: "article" },
  ];

  const tags = ["#deeplearning", "#nlp", "#research", "#math"];

  return (
    <aside className="w-80 hidden xl:flex flex-col bg-zinc-950 border-l border-zinc-800 shrink-0 overflow-y-auto custom-scrollbar">
      <div className="p-6 space-y-8">
        <div>
          <h3 className="text-[11px] font-bold text-zinc-500 uppercase tracking-widest mb-4">Context Resources</h3>
          <div className="space-y-3">
            {resources.map((res, i) => (
              <Card key={i} className="p-3 bg-zinc-900/50 border-zinc-800 hover:border-primary/50 cursor-pointer transition-colors group">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-zinc-400">{res.type}</span>
                  <span className="material-symbols-outlined !text-[14px] text-zinc-600 group-hover:text-primary transition-colors">{res.icon}</span>
                </div>
                <p className="text-sm font-bold text-white mb-1">{res.title}</p>
                <p className="text-[11px] text-zinc-500 leading-relaxed">{res.description}</p>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-[11px] font-bold text-zinc-500 uppercase tracking-widest mb-4">Neural Connections</h3>
          <div className="aspect-square bg-zinc-900/50 border border-zinc-800 rounded-xl relative overflow-hidden flex items-center justify-center group cursor-pointer hover:border-primary/30 transition-colors">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_50%,#1c60f2,transparent_70%)] group-hover:opacity-30 transition-opacity"></div>
            <div className="z-10 text-center">
              <span className="material-symbols-outlined text-primary !text-[32px] block mb-2">hub</span>
              <p className="text-xs text-zinc-400 group-hover:text-zinc-300">View Relationship Map</p>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-zinc-800">
          <h3 className="text-[11px] font-bold text-zinc-500 uppercase tracking-widest mb-4">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 bg-zinc-900 border border-zinc-800 rounded text-[10px] text-zinc-500 hover:text-white hover:border-zinc-600 cursor-pointer transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}
