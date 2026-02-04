import { Header } from "../components/layout/Header";

export function NeuralMapPage() {
  return (
    <div className="flex-1 flex flex-col h-full overflow-hidden">
      <Header breadcrumbs={[{ label: "Workspace" }, { label: "Neural Map", active: true }]} />
      <main className="flex-1 flex items-center justify-center bg-zinc-950 p-8">
        <div className="max-w-4xl w-full aspect-video bg-zinc-900 border border-zinc-800 rounded-2xl relative overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_50%,#1c60f2,transparent_70%)]"></div>
          <div className="text-center space-y-4">
            <span className="material-symbols-outlined text-primary !text-[64px]">hub</span>
            <h2 className="text-2xl font-bold text-white">Neural Connection Map</h2>
            <p className="text-zinc-500 max-w-md mx-auto">
              This interactive map visualizes the relationships between your documents, projects, and research notes.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
