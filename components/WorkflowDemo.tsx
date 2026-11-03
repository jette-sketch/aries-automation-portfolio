'use client';

import { useState } from 'react';

const steps = [
  { title: 'Receive', detail: 'A sample content candidate enters the workflow.' },
  { title: 'Validate', detail: 'Deterministic checks reject malformed input and handle duplicates.' },
  { title: 'Record', detail: 'The candidate and an audit event are recorded together.' },
  { title: 'Assess', detail: 'An AI assessment is treated as untrusted input and validated.' },
  { title: 'Review', detail: 'Policy and authorization checks govern what may happen next.' },
];

export function WorkflowDemo() {
  const [active, setActive] = useState(0);
  return <section id="workflow-demo" className="tech-band mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20"><p className="eyebrow">Interactive demonstration</p><h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Explore a workflow step by step.</h2><p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300">A simplified example inspired by the Social Presence Automation case study. Select a step to see its purpose.</p><div className="detail-panel mt-7 rounded-xl p-5 sm:p-7"><div className="workflow-demo-steps" role="group" aria-label="Workflow demonstration steps">{steps.map((step, index) => <button type="button" key={step.title} className="filter-button" aria-pressed={active === index} onClick={() => setActive(index)}>{String(index + 1).padStart(2, '0')} / {step.title}</button>)}</div><div className="mt-6 border-t border-white/10 pt-5" aria-live="polite" aria-atomic="true"><h3 className="text-lg font-semibold text-white">{steps[active].title}</h3><p className="mt-2 text-sm leading-6 text-slate-300">{steps[active].detail}</p></div><p className="mt-5 text-xs leading-5 text-slate-400">Illustrative simulation only. No data is submitted and no live workflow runs. Publishing remains under development.</p></div></section>;
}
