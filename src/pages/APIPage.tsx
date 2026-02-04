import { Header } from "../components/layout/Header";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { cn } from "../lib/utils";

export function APIPage() {
  const metrics = [
    { label: "Total Requests", value: "1,242,891", change: "+12.5%", positive: true },
    { label: "Latency (avg)", value: "142ms", change: "±4ms", positive: null },
    { label: "Cost (MTD)", value: "$42.50", change: "Est. $58.00", positive: null },
  ];

  const keys = [
    { name: "Production Main", key: "sk_live_••••••••3a9c", status: "active", created: "Oct 12, 2023", lastUsed: "2 mins ago" },
    { name: "Development", key: "sk_test_••••••••f92b", status: "active", created: "Nov 01, 2023", lastUsed: "1 day ago" },
    { name: "Staging", key: "sk_test_••••••••7d41", status: "inactive", created: "Dec 15, 2023", lastUsed: "Never" },
  ];

  return (
    <div className="flex-1 flex flex-col h-full overflow-hidden">
      <Header breadcrumbs={[{ label: "Dashboard" }, { label: "API Management", active: true }]} />

      <main className="flex-1 overflow-y-auto custom-scrollbar bg-zinc-950">
        <div className="max-w-6xl mx-auto px-8 py-10 space-y-10">
          {/* Page Heading */}
          <header className="flex flex-wrap justify-between items-end gap-6">
            <div className="space-y-1">
              <h2 className="text-3xl font-bold tracking-tight text-white">API Management</h2>
              <p className="text-zinc-500 text-sm max-w-lg">
                Create, rotate, and manage secure API keys to integrate your second brain with external applications and local scripts.
              </p>
            </div>
            <Button className="gap-2 shadow-lg shadow-primary/20">
              <span className="material-symbols-outlined !text-[20px]">add</span>
              <span>Create New Key</span>
            </Button>
          </header>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {metrics.map((m, i) => (
              <Card key={i} className="p-5 bg-zinc-900 border-zinc-800 hover:border-zinc-700 transition-all">
                <p className="text-zinc-500 text-xs font-medium uppercase tracking-wider mb-2">{m.label}</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-white">{m.value}</span>
                  {m.change && (
                    <span className={cn(
                      "text-[10px] font-bold",
                      m.positive === true ? "text-emerald-400" : "text-zinc-500"
                    )}>
                      {m.change}
                    </span>
                  )}
                </div>
              </Card>
            ))}
          </div>

          {/* API Keys Section */}
          <section className="space-y-4">
            <div className="flex items-center justify-between px-1">
              <h3 className="text-white text-lg font-bold flex items-center gap-2">
                Active Keys
                <span className="bg-zinc-800 text-zinc-400 text-[10px] px-1.5 py-0.5 rounded border border-white/5">3</span>
              </h3>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
              <table className="w-full text-left border-collapse">
                <thead className="bg-zinc-800/50 border-b border-zinc-800">
                  <tr>
                    <th className="px-6 py-3 text-[11px] font-bold uppercase tracking-wider text-zinc-500">Name</th>
                    <th className="px-6 py-3 text-[11px] font-bold uppercase tracking-wider text-zinc-500">API Key</th>
                    <th className="px-6 py-3 text-[11px] font-bold uppercase tracking-wider text-zinc-500">Created</th>
                    <th className="px-6 py-3 text-[11px] font-bold uppercase tracking-wider text-zinc-500">Last Used</th>
                    <th className="px-6 py-3 text-[11px] font-bold uppercase tracking-wider text-zinc-500 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-800">
                  {keys.map((k, i) => (
                    <tr key={i} className="hover:bg-white/[0.02] transition-colors group">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <div className={cn("size-2 rounded-full", k.status === 'active' ? 'bg-emerald-500' : 'bg-zinc-600')}></div>
                          <span className="text-sm font-medium text-white">{k.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <code className="text-xs text-zinc-400 font-mono bg-black/30 px-2 py-0.5 rounded">{k.key}</code>
                      </td>
                      <td className="px-6 py-4 text-sm text-zinc-500">{k.created}</td>
                      <td className="px-6 py-4 text-sm text-zinc-500">{k.lastUsed}</td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex items-center justify-end gap-2 text-zinc-400">
                          <button className="hover:text-white transition-colors p-1"><span className="material-symbols-outlined !text-[18px]">content_copy</span></button>
                          <button className="hover:text-white transition-colors p-1"><span className="material-symbols-outlined !text-[18px]">refresh</span></button>
                          <button className="hover:text-red-400 transition-colors p-1"><span className="material-symbols-outlined !text-[18px]">delete</span></button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Usage Section */}
          <section className="space-y-4">
            <div className="flex items-center justify-between px-1">
              <h3 className="text-white text-lg font-bold">Usage Analytics</h3>
              <div className="flex bg-zinc-900 border border-zinc-800 rounded-lg p-1">
                <button className="px-3 py-1 text-xs font-medium text-white bg-zinc-800 rounded-md">7 Days</button>
                <button className="px-3 py-1 text-xs font-medium text-zinc-500 hover:text-white transition-colors">30 Days</button>
                <button className="px-3 py-1 text-xs font-medium text-zinc-500 hover:text-white transition-colors">90 Days</button>
              </div>
            </div>
            <Card className="bg-zinc-900 border-zinc-800 p-6">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <p className="text-zinc-500 text-xs font-medium uppercase tracking-wider">Requests Trend</p>
                  <p className="text-white text-2xl font-bold">84,292 <span className="text-zinc-500 text-sm font-normal">avg/day</span></p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <div className="size-2 rounded-full bg-primary"></div>
                    <span className="text-xs text-zinc-400">Successful</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="size-2 rounded-full bg-zinc-700"></div>
                    <span className="text-xs text-zinc-400">Failed</span>
                  </div>
                </div>
              </div>

              {/* Chart Placeholder SVG */}
              <div className="relative h-64 w-full">
                <div className="absolute inset-0 flex items-end justify-between px-2 text-[10px] text-zinc-600 font-mono">
                  <span>MON</span>
                  <span>TUE</span>
                  <span>WED</span>
                  <span>THU</span>
                  <span>FRI</span>
                  <span>SAT</span>
                  <span>SUN</span>
                </div>
                <div className="absolute inset-x-0 top-0 bottom-6 border-b border-zinc-800/50 border-dashed"></div>
                <div className="absolute inset-x-0 top-1/4 bottom-6 border-b border-zinc-800/50 border-dashed"></div>
                <div className="absolute inset-x-0 top-2/4 bottom-6 border-b border-zinc-800/50 border-dashed"></div>
                <div className="absolute inset-x-0 top-3/4 bottom-6 border-b border-zinc-800/50 border-dashed"></div>

                <svg className="absolute inset-x-0 top-0 h-[calc(100%-1.5rem)] w-full overflow-visible" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="#1c60f2" stopOpacity="0.3"></stop>
                      <stop offset="100%" stopColor="#1c60f2" stopOpacity="0"></stop>
                    </linearGradient>
                  </defs>
                  <path d="M0,150 L100,120 L200,160 L300,80 L400,100 L500,40 L600,60 L700,30 L800,90 L900,20 L1000,40 L1100,200 L1100,200 L0,200 Z" fill="url(#chartGradient)" className="origin-left scale-x-[calc(100/1100)]"></path>
                  <polyline fill="none" points="0,150 100,120 200,160 300,80 400,100 500,40 600,60 700,30 800,90 900,20 1000,40 1100,70" stroke="#1c60f2" strokeWidth="2.5" vectorEffect="non-scaling-stroke"></polyline>
                </svg>
              </div>
            </Card>
          </section>
        </div>
      </main>
    </div>
  );
}
