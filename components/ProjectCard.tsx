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
  return (
    <article id={project.slug} className="project-feature">
      <div className="project-feature-copy">
        <p className="eyebrow">{project.maturity}</p>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        <div className="project-context"><p><strong>Problem:</strong> {project.businessProblem}</p><p><strong>Approach:</strong> {project.solutionOverview}</p></div>
        <p className="project-status"><strong>Current state:</strong> {project.status} {project.credibilityNote}</p>
        <div className="project-tools">{project.stack.map((tool) => <span key={tool}>{tool}</span>)}</div>
        <Link href={`/projects/${project.slug}`} className="button-secondary">Open case study <ArrowUpRight size={16} /></Link>
      </div>
      <Link href={`/projects/${project.slug}`} className="project-visual" aria-label={`View ${project.title} case study`}>
        <div className="diagram-frame"><img src={`/diagrams/${project.diagram}`} alt={`${project.title} workflow diagram`} /></div>
        <span>WORKFLOW DIAGRAM <span>VIEW DETAILS ↗</span></span>
      </Link>
    </article>
  );
}
