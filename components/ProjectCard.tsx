import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export type Project = {
  slug: string;
  title: string;
  maturity: string;
  summary: string;
  stack: readonly string[];
  pattern: string;
  status: string;
  credibilityNote: string;
  highlights: readonly string[];
  businessProblem: string;
  solutionOverview: string;
  workflowSequence: readonly string[];
  keyAutomations: readonly string[];
  aiUsage: readonly string[];
  safetyNotes: readonly string[];
  nextImprovements: readonly string[];
  implementationNotes: readonly string[];
  diagram: string;
};

export function ProjectCard({ project }: { project: Project }) {
  const previewSequence = project.workflowSequence.slice(0, 3);

  return (
    <article id={project.slug} className="card group flex h-full flex-col overflow-hidden rounded-xl transition duration-200 hover:-translate-y-1 hover:border-emerald-200/30 hover:shadow-2xl hover:shadow-black/30">
      <div className="flex items-start justify-between gap-4 p-5 pb-0 sm:p-6 sm:pb-0">
        <div className="min-w-0">
          <p className="eyebrow">{project.maturity}</p>
          <h3 className="mt-3 text-2xl font-semibold leading-tight text-white sm:text-3xl">{project.title}</h3>
        </div>
        <Link href={`/projects/${project.slug}`} aria-label={`View ${project.title} details`} className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/15 text-slate-300 transition group-hover:border-emerald-200/50 group-hover:text-emerald-100">
          <ArrowUpRight size={18} />
        </Link>
      </div>

      <p className="mt-4 px-5 text-sm leading-7 text-slate-300 sm:px-6">{project.summary}</p>

      <div className="mt-5 grid gap-2 px-5 sm:px-6">
        {previewSequence.map((step, index) => (
          <div key={step} className="flex items-start gap-3 rounded-md bg-black/20 px-3 py-2.5 text-xs leading-5 text-slate-300">
            <span className="mt-0.5 font-mono text-[10px] text-emerald-200/70">0{index + 1}</span>
            <span>{step}</span>
          </div>
        ))}
      </div>

      <div className="mt-5 flex flex-wrap gap-2 px-5 sm:px-6">
        {project.stack.map((tool) => (
          <span key={tool} className="stack-badge">{tool}</span>
        ))}
      </div>

      <div className="mx-5 mt-5 border-y border-white/10 py-4 sm:mx-6">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-amber-200/80">Automation pattern</p>
            <p className="mt-1.5 text-xs leading-5 text-slate-300">{project.pattern}</p>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-amber-200/80">Build status</p>
            <p className="mt-1.5 text-xs leading-5 text-slate-300">{project.status}</p>
          </div>
        </div>
        <p className="mt-3 text-xs leading-5 text-slate-500">{project.credibilityNote}</p>
      </div>

      <ul className="flex-1 space-y-2 px-5 pt-4 text-sm leading-6 text-slate-300 sm:px-6">
        {project.highlights.map((item) => <li key={item} className="flex gap-2.5"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-300" aria-hidden="true" /><span>{item}</span></li>)}
      </ul>

      <div className="diagram-frame mx-5 mt-5 overflow-hidden rounded-lg border border-white/10 bg-[#070b0a] sm:mx-6">
        <img src={`/diagrams/${project.diagram}`} alt={`${project.title} workflow diagram`} className="w-full" />
      </div>

      <div className="mt-auto px-5 pb-5 pt-5 sm:px-6 sm:pb-6">
        <Link href={`/projects/${project.slug}`} className="button-secondary w-full justify-between">
          <span>View project details</span>
          <ArrowUpRight size={16} />
        </Link>
      </div>
    </article>
  );
}
