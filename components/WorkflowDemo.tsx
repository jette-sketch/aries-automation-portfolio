'use client';

import { useEffect, useState } from 'react';

const steps = [
  { title: 'Receive', detail: 'A sample content candidate enters the workflow.' },
  { title: 'Validate', detail: 'Deterministic checks reject malformed input and handle duplicates.' },
  { title: 'Record', detail: 'The candidate and an audit event are recorded together.' },
  { title: 'Assess', detail: 'An AI assessment is treated as untrusted input and validated.' },
  { title: 'Review', detail: 'Policy and authorization checks govern what may happen next.' },
];

const scenarios = {
  valid: {
    label: 'Valid sample',
    events: [
      'Synthetic candidate received.',
      'Required fields and duplicate checks passed.',
      'Candidate and audit event recorded together.',
      'Sample AI assessment passed schema validation.',
      'Policy checks passed. Awaiting authorized human review.',
    ],
    result: 'Ready for human review. No publishing or external action occurred.',
  },
  invalid: {
    label: 'Missing required field',
    events: [
      'Synthetic candidate received.',
      'Validation failed: a required field is missing. Processing stopped.',
    ],
    result: 'Rejected at validation. No candidate or audit event was recorded.',
  },
} as const;

type Scenario = keyof typeof scenarios;
type RunStatus = 'idle' | 'running' | 'complete';

export function WorkflowDemo() {
  const [active, setActive] = useState(0);
  const [scenario, setScenario] = useState<Scenario>('valid');
  const [status, setStatus] = useState<RunStatus>('idle');
  const [completed, setCompleted] = useState(0);
  const events = scenarios[scenario].events;

  useEffect(() => {
    if (status !== 'running') return;
    const delay = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 650;
    const timer = window.setTimeout(() => {
      const next = completed + 1;
      setActive(next - 1);
      setCompleted(next);
      if (next >= events.length) setStatus('complete');
    }, delay);
    return () => window.clearTimeout(timer);
  }, [status, completed, events.length]);

  function reset() {
    setStatus('idle');
    setCompleted(0);
    setActive(0);
  }

  function changeScenario(next: Scenario) {
    setScenario(next);
    reset();
  }

  function run() {
    setCompleted(0);
    setActive(0);
    setStatus('running');
  }

  return (
    <section id="workflow-demo" className="tech-band mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
      <p className="eyebrow">Interactive demonstration</p>
      <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">See how a workflow handles the unexpected.</h2>
      <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300">Run a scripted example inspired by Social Presence Automation, or select a step to explore its purpose.</p>
      <div className="detail-panel mt-7 rounded-xl p-5 sm:p-7">
        <p className="eyebrow">Simulation / synthetic data</p>
        <div className="mt-4 flex flex-wrap items-end gap-3">
          <label className="simulation-select-label" htmlFor="simulation-scenario">Sample scenario
            <select id="simulation-scenario" value={scenario} onChange={(event) => changeScenario(event.target.value as Scenario)} className="simulation-select">
              <option value="valid">Valid sample</option>
              <option value="invalid">Missing required field</option>
            </select>
          </label>
          <button type="button" className="button-primary" onClick={run} disabled={status === 'running'}>{status === 'running' ? 'Running…' : 'Run simulation'}</button>
          <button type="button" className="button-secondary" onClick={reset}>Reset</button>
        </div>
        <div className="workflow-simulation mt-6">
          <div>
            <div className="workflow-demo-steps" role="group" aria-label="Workflow demonstration steps">
              {steps.map((step, index) => <button type="button" key={step.title} className="filter-button" aria-pressed={active === index} onClick={() => setActive(index)}>{String(index + 1).padStart(2, '0')} / {step.title}</button>)}
            </div>
            <div className="mt-5 border-t border-white/10 pt-5" aria-live="polite" aria-atomic="true"><h3 className="text-lg font-semibold text-white">{steps[active].title}</h3><p className="mt-2 text-sm leading-6 text-slate-300">{steps[active].detail}</p></div>
          </div>
          <div className="simulation-log"><div className="flex items-center justify-between gap-3"><h3 className="text-sm font-semibold text-white">Execution log</h3><span className="simulation-status">{status === 'idle' ? 'Ready' : status === 'running' ? 'Running' : scenario === 'invalid' ? 'Rejected' : 'Review required'}</span></div>
            {completed === 0 ? <p className="mt-4 text-sm leading-6 text-slate-400">Choose a scenario and run the simulation.</p> : <ol className="mt-4 space-y-3" aria-label="Simulated execution events">{events.slice(0, completed).map((event, index) => <li key={index} className="simulation-event"><span>{String(index + 1).padStart(2, '0')}</span>{event}</li>)}</ol>}
            <p role="status" className="mt-4 text-sm leading-6 text-cyan-100">{status === 'complete' ? scenarios[scenario].result : ''}</p>
          </div>
        </div>
        <p className="mt-5 text-xs leading-5 text-slate-400">Scripted illustration using synthetic data. Nothing is sent, stored, assessed by AI, or published. The real project is still under development.</p>
      </div>
    </section>
  );
}
