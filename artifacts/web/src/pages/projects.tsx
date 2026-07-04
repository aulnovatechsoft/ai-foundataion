import { Shell } from "@/components/layout/Shell";
import { Redirect } from "wouter";
import { Show } from "@clerk/react";
import { useListProjects } from "@workspace/api-client-react";
import { FolderKanban, Plus, MoreVertical, LayoutGrid, Calendar, CheckCircle2, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ProjectsPage() {
  return (
    <>
      <Show when="signed-in">
        <Shell>
          <ProjectsContent />
        </Shell>
      </Show>
      <Show when="signed-out">
        <Redirect to="/sign-in" />
      </Show>
    </>
  );
}

function ProjectsContent() {
  const { data: projects, isLoading } = useListProjects();

  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-slide-up pb-24 text-[hsl(var(--text))]">
      <div className="flex items-end justify-between">
        <div>
          <h1 className="text-4xl font-heading font-bold mb-3 flex items-center gap-3">
            <FolderKanban className="w-8 h-8 text-[hsl(var(--accent))]" />
            Projects
          </h1>
          <p className="text-[hsl(var(--text-muted))] text-lg">Manage your personal AI build projects.</p>
        </div>
        <Button className="bg-[hsl(var(--accent))] hover:bg-[hsl(var(--accent))/0.9] text-white">
          <Plus className="w-4 h-4 mr-2" /> New Project
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {isLoading ? (
          <div className="text-[hsl(var(--text-muted))]">Loading...</div>
        ) : projects && projects.length > 0 ? (
          projects.map(project => (
            <div key={project.id} className="os-card p-6 flex flex-col group cursor-pointer">
              <div className="flex justify-between items-start mb-4">
                <div className={`px-2.5 py-1 rounded text-xs font-semibold uppercase tracking-wider ${
                  project.status === 'completed' ? 'bg-green-500/10 text-green-500' :
                  project.status === 'in_progress' ? 'bg-orange-500/10 text-orange-500' :
                  'bg-[hsl(var(--surface-2))] text-[hsl(var(--text-muted))]'
                }`}>
                  {project.status.replace('_', ' ')}
                </div>
                <Button variant="ghost" size="icon" className="h-8 w-8 text-[hsl(var(--text-muted))] -mr-2 -mt-2">
                  <MoreVertical className="w-4 h-4" />
                </Button>
              </div>
              
              <h3 className="text-xl font-heading font-semibold mb-2 group-hover:text-[hsl(var(--accent))] transition-colors">{project.title}</h3>
              <p className="text-[hsl(var(--text-muted))] text-sm mb-6 flex-1 line-clamp-2">{project.description || "No description provided."}</p>
              
              <div className="space-y-3 mt-auto">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-[hsl(var(--text-muted))]">Progress</span>
                  <span className="font-semibold">{project.progress}%</span>
                </div>
                <div className="h-2 w-full bg-[hsl(var(--surface-2))] rounded-full overflow-hidden border border-[hsl(var(--border))]">
                  <div className="h-full bg-[hsl(var(--accent))] rounded-full transition-all" style={{ width: `${project.progress}%` }}></div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full os-card p-12 flex flex-col items-center justify-center text-center">
             <div className="w-16 h-16 rounded-2xl bg-[hsl(var(--surface-2))] border border-[hsl(var(--border))] flex items-center justify-center mb-4">
               <LayoutGrid className="w-8 h-8 text-[hsl(var(--text-muted))]" />
             </div>
             <h3 className="text-xl font-heading font-semibold mb-2">No projects yet</h3>
             <p className="text-[hsl(var(--text-muted))] max-w-md mb-6">Create your first personal project to apply what you've learned in the curriculum.</p>
             <Button variant="outline" className="border-[hsl(var(--border))] text-[hsl(var(--text))]">
                <Plus className="w-4 h-4 mr-2" /> Create Project
             </Button>
          </div>
        )}
      </div>
    </div>
  );
}
