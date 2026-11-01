'use client';

import { useState } from 'react';

const examples = [
  { problem: 'Manual follow-ups', steps: ['Lead received', 'Validate details', 'Schedule follow-up', 'Notify the team'], outcome: 'A possible way to make follow-ups visible and consistent.' },
  { problem: 'Scattered CRM data', steps: ['Capture update', 'Validate and match', 'Update CRM', 'Flag exceptions'], outcome: 'A possible way to reduce repeated entry while keeping exceptions visible.' },
  { problem: 'Missed leads or appointments', steps: ['Receive request', 'Check availability', 'Confirm with a person', 'Record and notify'], outcome: 'A possible way to coordinate requests and handoffs.' },
  { problem: 'Repetitive admin work', steps: ['Receive request', 'Check required fields', 'Route for review', 'Record outcome'], outcome: 'A possible way to give routine work a clear review path.' },
  { problem: 'Slow reporting', steps: ['Collect records', 'Validate data', 'Prepare summary', 'Review report'], outcome: 'A possible way to make reporting more repeatable.' },
];

export function ProblemExplorer() {
  const [selected, setSelected] = useState(0);
  const item = examples[selected];
  return <section id="pain-points" className="tech-band border-y border-white/10 px-5 py-14 sm:px-8 lg:px-10 lg:py-16">
    <div className="mx-auto max-w-7xl">
      <p className="eyebrow">Where work gets stuck</p>
      <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">What would you like to improve?</h2>
      <p className="mt-3 text-sm leading-7 text-slate-300">Select a bottleneck to explore an illustrative workflow.</p>
      <div className="mt-7 grid gap-5 lg:grid-cols-[minmax(13rem,.7fr)_1.3fr]">
        <div className="grid gap-2" role="group" aria-label="Choose a workflow bottleneck">{examples.map((example, index) => <button key={example.problem} type="button" aria-pressed={selected === index} onClick={() => setSelected(index)} className="choice-button">{example.problem}</button>)}</div>
        <div className="detail-panel rounded-xl p-5 sm:p-7" aria-live="polite" aria-atomic="true"><p className="eyebrow">Illustrative example</p><h3 className="mt-3 text-xl font-semibold text-white">{item.problem}</h3><ol className="mt-5 flex flex-wrap gap-2">{item.steps.map((step, index) => <li key={step} className="flow-step"><span>{String(index + 1).padStart(2, '0')}</span> {step}</li>)}</ol><p className="mt-5 text-sm leading-6 text-slate-300">{item.outcome}</p><p className="mt-3 text-xs text-slate-400">Example only. The actual design depends on your tools, requirements, and review needs.</p></div>
      </div>
    </div>
  </section>;
}
