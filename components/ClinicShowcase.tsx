'use client';

import { useState } from 'react';

const stages = [
  { title: 'Registration', description: 'Explore a staff-assisted intake flow using synthetic records and fictional services.' },
  { title: 'Queue', description: 'See how a queue number and operational status represent a walk-in visit.' },
  { title: 'Staff dashboard', description: 'Review the prototype’s staff-facing view of current operational state.' },
  { title: 'Public preview', description: 'Explore a waiting display designed around queue numbers rather than patient names.' },
];

export function ClinicShowcase() {
  const [active, setActive] = useState(0);
  return <section id="clinic-showcase" className="tech-band border-y border-cyan-100/10 px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
    <div className="mx-auto max-w-7xl">
      <div className="max-w-3xl"><p className="eyebrow">Featured prototype / ClinicFlow</p><h2 className="mt-3 text-3xl font-semibold leading-tight text-white sm:text-4xl">From reception workflow to an interactive prototype.</h2><p className="mt-4 text-sm leading-7 text-slate-300">Field observations informed a walk-in reception prototype. Select an area to explore what the demo is designed to show.</p></div>
      <div className="clinic-showcase mt-7"><div className="clinic-stage-list" role="group" aria-label="ClinicFlow prototype areas">{stages.map((stage, index) => <button key={stage.title} type="button" className="choice-button" aria-pressed={active === index} onClick={() => setActive(index)}><span>{String(index + 1).padStart(2, '0')}</span> {stage.title}</button>)}</div>
        <div className="clinic-stage-content" aria-live="polite" aria-atomic="true"><p className="eyebrow">Prototype area</p><h3 className="mt-3 text-2xl font-semibold text-white">{stages[active].title}</h3><p className="mt-3 max-w-xl text-sm leading-7 text-slate-300">{stages[active].description}</p><p className="mt-5 border-l-2 border-cyan-300/60 pl-3 text-xs leading-6 text-slate-300">Deployed frontend prototype using synthetic data. No live clinical integrations or medical decisions. Production verified: No.</p><div className="mt-6 flex flex-wrap gap-3"><a href="https://clinicflow-public-portfolio-demo-52fghb.v2.appdeploy.ai/" target="_blank" rel="noopener noreferrer" className="button-primary">Open interactive prototype ↗</a><a href="/projects/clinicflow-operations-prototype" className="button-secondary">Read case study →</a></div></div>
      </div>
    </div>
  </section>;
}
