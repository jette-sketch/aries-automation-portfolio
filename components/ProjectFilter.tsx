'use client';

import { useState } from 'react';
import { ProjectCard, type Project } from '@/components/ProjectCard';

type Category = 'All' | 'SaaS & operations' | 'AI & content' | 'CRM & leads';
const categories: Category[] = ['All', 'SaaS & operations', 'AI & content', 'CRM & leads'];
const groups: Record<Exclude<Category, 'All'>, string[]> = {
  'SaaS & operations': ['dentalflow-saas', 'clinicflow-operations-prototype', 'ai-procurement-approval-system', 'ai-booking-agent'],
  'AI & content': ['social-presence-automation', 'ai-content-operations-approval-pipeline', 'ai-inbox-triage-assistant', 'ai-booking-agent'],
  'CRM & leads': ['roofing-lead-sales-automation', 'autonomous-multi-agent-crm'],
};

export function ProjectFilter({ projects }: { projects: readonly Project[] }) {
  const [category, setCategory] = useState<Category>('All');
  const shown = category === 'All' ? projects : projects.filter((project) => groups[category].includes(project.slug));
  return <><div className="mb-4 flex flex-wrap gap-2" role="group" aria-label="Filter projects by type">{categories.map((item) => <button type="button" key={item} className="filter-button" aria-pressed={category === item} onClick={() => setCategory(item)}>{item}</button>)}</div><p className="mb-2 text-sm text-slate-400" role="status">Showing {shown.length} {shown.length === 1 ? 'project' : 'projects'}</p><div className="project-list">{shown.map((project) => <ProjectCard key={project.slug} project={project} />)}</div></>;
}
