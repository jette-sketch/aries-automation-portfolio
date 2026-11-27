'use client';

import { useId, useState } from 'react';
import { Check, Circle, ClipboardList, Flag, FlaskConical, Hammer, Radio } from 'lucide-react';
import { roadmaps, type Milestone, type MilestoneStatus, type ProjectSlug } from '@/data/projectRoadmaps';

const statusInfo = {
  documented: { label: 'Documented', icon: ClipboardList },
  built: { label: 'Built / draft', icon: Hammer },
  'reported-tested': { label: 'Reported tested', icon: FlaskConical },
  'demo-deployed': { label: 'Demo deployed', icon: Radio },
  open: { label: 'Open work', icon: Flag },
  planned: { label: 'Planned', icon: Circle },
} satisfies Record<MilestoneStatus, { label: string; icon: typeof Check }>;

function Roadmap({ milestones }: { milestones: readonly Milestone[] }) {
  const panelId = useId();
  const [selected, setSelected] = useState(() => {
    const open = milestones.findIndex(m => m.status === 'open');
    return open >= 0 ? open : Math.max(0, milestones.findIndex(m => m.status === 'planned') - 1);
  });
  const milestone = milestones[selected];
  const info = statusInfo[milestone.status];
  const StatusIcon = info.icon;

  return (
    <div className="project-roadmap">
      <div className="roadmap-heading">
        <div><p className="eyebrow">Development roadmap</p><h3>From design to delivery</h3></div>
        <span className="roadmap-count">{milestones.length} MILESTONES</span>
      </div>
      <p className="roadmap-instruction">Select a milestone to explore what it covers and its documented status.</p>
      <ol className="roadmap-track">
        {milestones.map((item, index) => {
          const step = statusInfo[item.status];
          const Icon = step.icon;
          return (
            <li key={item.title} data-status={item.status}>
              <button type="button" className="roadmap-step" aria-pressed={selected === index} aria-controls={panelId} onClick={() => setSelected(index)}>
                <span className="roadmap-node" aria-hidden="true"><Icon size={18} /></span>
                <span className="roadmap-step-number">0{index + 1}</span>
                <span className="roadmap-step-title">{item.title}</span>
                <span className="roadmap-step-status">{step.label}</span>
              </button>
            </li>
          );
        })}
      </ol>
      <div id={panelId} className="roadmap-detail" data-status={milestone.status} aria-live="polite" aria-atomic="true">
        <div className="roadmap-detail-top"><span className="roadmap-detail-status"><StatusIcon size={15} aria-hidden="true" />{info.label}</span><span className="roadmap-count">STEP {selected + 1} / {milestones.length}</span></div>
        <h4>{milestone.title}</h4><p>{milestone.detail}</p>
      </div>
      <p className="roadmap-disclaimer">A portfolio summary of recorded milestones and planned work, not live progress tracking or a production-readiness score.</p>
    </div>
  );
}

export function ProjectRoadmap({ slug }: { slug: string }) {
  if (!Object.prototype.hasOwnProperty.call(roadmaps, slug)) return null;
  return <Roadmap key={slug} milestones={roadmaps[slug as ProjectSlug]} />;
}
