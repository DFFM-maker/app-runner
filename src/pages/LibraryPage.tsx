import { DocumentCard } from "../components/library/DocumentCard";
import { Input } from "../components/ui/Input";
import { Header } from "../components/layout/Header";

export function LibraryPage() {
  const documents = [
    { name: "Project_Brief.pdf", type: "pdf", size: "1.2 MB", updatedAt: "2h ago", icon: "description" },
    { name: "Research_Notes.md", type: "markdown", size: "45 KB", updatedAt: "Yesterday", icon: "markdown" },
    { name: "Meeting_Minutes.docx", type: "doc", size: "128 KB", updatedAt: "3 days ago", icon: "article" },
    { name: "Brainstorming_Session.txt", type: "text", size: "12 KB", updatedAt: "1 week ago", icon: "text_snippet" },
    { name: "Knowledge_Base.md", type: "markdown", size: "2.4 MB", updatedAt: "Oct 12, 2023", icon: "history_edu" },
  ];

  return (
    <div className="flex-1 flex flex-col h-full overflow-hidden">
      <Header breadcrumbs={[{ label: "Workspace" }, { label: "Library", active: true }]} />

      <div className="flex-1 overflow-y-auto custom-scrollbar p-8">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-bold text-white tracking-tight">Your Knowledge Base</h1>
            <p className="text-zinc-500 text-sm">Manage and organize the documents your Second Brain has access to.</p>
          </div>

          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-zinc-500 !text-[20px]">search</span>
            <Input className="pl-10" placeholder="Search documents..." />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {documents.map((doc, i) => (
              <DocumentCard key={i} {...doc} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
