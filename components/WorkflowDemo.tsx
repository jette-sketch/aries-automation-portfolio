'use client';

import { useEffect, useState } from 'react';

const steps = [
  { title: 'Receive', icon: '↘', detail: 'A sample content candidate enters the workflow.', label: 'Incoming candidate' },
  { title: 'Validate', icon: '◇', detail: 'Deterministic checks reject malformed input and handle duplicates.', label: 'Check the input' },
  { title: 'Record', icon: '▤', detail: 'The candidate and an audit event are recorded together.', label: 'Keep an audit trail' },
  { title: 'Assess', icon: '✦', detail: 'An AI assessment is treated as untrusted input and validated.', label: 'Validate assessment' },
  { title: 'Review', icon: '◎', detail: 'Policy and authorization checks govern what may happen next.', label: 'Human oversight' },
];

const scenarios = {
  valid: {
    label: 'Ready for review',
    description: 'Follow a complete candidate through the safeguards.',
    events: ['Synthetic candidate received.', 'Required fields and duplicate checks passed.', 'Candidate and audit event recorded together.', 'Sample AI assessment passed schema validation.', 'Policy checks passed. Awaiting authorized human review.'],
    result: 'Ready for human review. No publishing or external action occurred.',
  },
  invalid: {
    label: 'Missing information',
    description: 'See what happens when a required field is missing.',
    events: ['Synthetic candidate received.', 'Validation failed: a required field is missing. Processing stopped.'],
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
  const rejected = status === 'complete' && scenario === 'invalid';

  useEffect(() => {
    if (status !== 'running') return;
    const delay = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 750;
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
      <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300">Choose a scenario, follow the journey, and explore the safeguards at each step.</p>

      <div className="simulation-studio mt-7">
        <div className="simulation-topline"><span>WORKFLOW LAB / SOCIAL PRESENCE</span><span><i aria-hidden="true" /> SIMULATED ENVIRONMENT</span></div>
        <div className="simulation-intro"><div><span className="simulation-kicker">01 / CHOOSE A SCENARIO</span><h3>What should happen to this candidate?</h3></div><span className="simulation-synthetic">SYNTHETIC DATA</span></div>
        <div className="simulation-scenarios" role="group" aria-label="Sample scenario">
          {(Object.keys(scenarios) as Scenario[]).map((key) => (
            <button type="button" key={key} className="simulation-scenario" aria-pressed={scenario === key} onClick={() => changeScenario(key)}>
              <span className="simulation-scenario-icon" aria-hidden="true">{key === 'valid' ? '✓' : '!'}</span>
              <span><strong>{scenarios[key].label}</strong><small>{scenarios[key].description}</small></span>
              <span className="simulation-choice" aria-hidden="true">{scenario === key ? '●' : '○'}</span>
            </button>
          ))}
        </div>
        <div className="simulation-toolbar">
          <button type="button" className="button-primary simulation-run" onClick={run} disabled={status === 'running'}><span aria-hidden="true">▶</span> {status === 'running' ? 'Running…' : status === 'complete' ? 'Run again' : 'Run simulation'}</button>
          <button type="button" className="button-secondary" onClick={reset}>Reset</button>
          <span className="simulation-hint">Select a stage to explore its purpose.</span>
        </div>
        <div className="simulation-canvas">
          <div className="simulation-canvas-heading"><span className="simulation-kicker">02 / FOLLOW THE JOURNEY</span><span className={'simulation-status' + (rejected ? ' is-rejected' : '')}><i aria-hidden="true" /> {status === 'idle' ? 'Ready' : status === 'running' ? 'Running' : rejected ? 'Stopped safely' : 'Review required'}</span></div>
          <div className="simulation-track" role="group" aria-label="Workflow demonstration steps">
            {steps.map((step, index) => {
              const done = index < completed;
              const stopped = rejected && index === completed - 1;
              return <button type="button" key={step.title} className={'simulation-node' + (active === index ? ' is-active' : '') + (done ? ' is-done' : '') + (stopped ? ' is-stopped' : '')} aria-pressed={active === index} onClick={() => setActive(index)} disabled={status === 'running'}>
                <span className="simulation-node-icon" aria-hidden="true">{stopped ? '!' : done ? '✓' : step.icon}</span>
                <span className="simulation-node-number">0{index + 1}</span><strong>{step.title}</strong><small>{step.label}</small>
              </button>;
            })}
          </div>
          <div className="simulation-bottom">
            <div className="simulation-detail" aria-live="polite" aria-atomic="true"><span className="simulation-kicker">STAGE 0{active + 1} / {steps[active].title.toUpperCase()}</span><h3>{steps[active].title}</h3><p>{steps[active].detail}</p><span className="simulation-detail-tip">Select another stage to learn more ↗</span></div>
            <div className="simulation-log"><div className="simulation-log-heading"><div><span className="simulation-kicker">LIVE WALKTHROUGH</span><h3>Execution log</h3></div><span className="simulation-count">{completed} / {events.length}</span></div>
              {completed === 0 ? <p className="simulation-empty">Your journey starts here. Choose a scenario and press run.</p> : <ol className="simulation-events" aria-label="Simulated execution events">{events.slice(0, completed).map((event, index) => <li key={index} className="simulation-event"><span aria-hidden="true">{scenario === 'invalid' && index === 1 ? '!' : '✓'}</span>{event}</li>)}</ol>}
              <p role="status" className={'simulation-result' + (rejected ? ' is-rejected' : '')}>{status === 'complete' ? scenarios[scenario].result : ''}</p>
            </div>
          </div>
        </div>
        <p className="simulation-disclaimer">Scripted illustration using synthetic data. Nothing is sent, stored, assessed by AI, or published. The real project is still under development.</p>
      </div>
    </section>
  );
}

