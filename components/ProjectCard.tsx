import Link from 'next/link';
import { ProjectRoadmap } from '@/components/ProjectRoadmap';
import { ArrowUpRight, ChevronDown, FolderClosed } from 'lucide-react';

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
  return (
    <details id={project.slug} name="portfolio-projects" className="project-drawer">
      <summary className="project-drawer-trigger">
        <FolderClosed size={21} className="project-drawer-icon" aria-hidden="true" />
        <span className="project-drawer-title">{project.title}</span>
        <span className="project-drawer-maturity">{project.maturity}</span>
        <ChevronDown size={19} className="project-drawer-chevron" aria-hidden="true" />
      </summary>
      <div className="project-drawer-content">
        <div className="project-drawer-copy">
          <p>{project.summary}</p>
          <div className="project-context">
            <p><strong>Problem:</strong> {project.businessProblem}</p>
            <p><strong>Approach:</strong> {project.solutionOverview}</p>
          </div>
          <p className="project-drawer-status"><strong>Current state:</strong> {project.status} {project.credibilityNote}</p>
          <div className="project-tools">{project.stack.map(tool => <span key={tool}>{tool}</span>)}</div>
          <Link href={`/projects/${project.slug}`} className="button-secondary">Open full case study <ArrowUpRight size={16} aria-hidden="true" /></Link>
        </div>
        <Link href={`/projects/${project.slug}`} className="project-visual project-drawer-visual" aria-label={`View ${project.title} case study`}>
          <div className="diagram-frame"><img src={`/diagrams/${project.diagram}`} alt={`${project.title} workflow diagram`} loading="lazy" decoding="async" /></div>
          <span>WORKFLOW DIAGRAM <span>VIEW DETAILS ↗</span></span>
        </Link>
        <div className="project-drawer-roadmap"><ProjectRoadmap slug={project.slug} /></div>
      </div>
    </details>
  );
}
