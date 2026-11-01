'use client';

import { useState } from 'react';
import { Workflow } from 'lucide-react';

const systems = {
  workflows: { label: 'WORKFLOWS', heading: 'Workflows that keep work moving.', detail: 'Connect triggers, decisions, and handoffs across your tools.' },
  connected: { label: 'CONNECTED SYSTEMS', heading: 'Thoughtful automation. Built for real work.', detail: 'Connecting people, processes, data, and AI.' },
  data: { label: 'DATA + AI', heading: 'Useful data. Human oversight.', detail: 'Bring data and AI into workflows with clear rules and review.' },
} as const;

type System = keyof typeof systems;

export function SystemsExplorer() {
  const [active, setActive] = useState<System>('connected');
  const selected = systems[active];
  return (
    <div className="hero-visual systems-explorer">
      <div className="systems-graphic">
        <div className="hero-orbit" aria-hidden="true"><span /><span /><span /></div>
        <div className="systems-grid" aria-hidden="true" />
        <div className="systems-core" role="group" aria-label="Explore connected systems">
          <button type="button" className="systems-node" aria-pressed={active === 'workflows'} onClick={() => setActive('workflows')}>WORKFLOWS</button>
          <button type="button" className="systems-center" aria-pressed={active === 'connected'} onClick={() => setActive('connected')}><Workflow size={36} aria-hidden="true" /><small>CONNECTED<br />SYSTEMS</small></button>
          <button type="button" className="systems-node" aria-pressed={active === 'data'} onClick={() => setActive('data')}>DATA + AI</button>
        </div>
        <span className="systems-prompt" aria-hidden="true">SELECT A NODE <span>↗</span></span>
      </div>
      <div className="hero-caption" aria-live="polite" aria-atomic="true"><span>{selected.label}</span><strong>{selected.heading}</strong><p>{selected.detail}</p></div>
    </div>
  );
}
