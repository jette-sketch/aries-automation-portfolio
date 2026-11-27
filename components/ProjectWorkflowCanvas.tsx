'use client';

import { useEffect, useId, useState } from 'react';
import { ArrowDown, ArrowRight, Check, Circle, Flag, GitBranch, Play, Pause, RotateCcw, SkipForward, Zap } from 'lucide-react';
import { projectWorkflows, type WorkflowSpec } from '@/data/projectWorkflows';
import type { ProjectSlug } from '@/data/projectRoadmaps';

type Choice = 'normal' | 'alternate';
type Run = { choice: Choice; completed: number; playing: boolean; inspected: number };
const initial = (choice: Choice = 'normal'): Run => ({ choice, completed: 0, playing: false, inspected: 0 });

function pathFor(spec: WorkflowSpec, choice: Choice) {
  const count = choice === 'normal' ? spec.nodes.length : spec.gate + 1;
  const path = Array.from({ length: count }, (_, i) => i);
  return choice === 'normal' ? path : [...path, spec.nodes.length];
}

function advance(spec: WorkflowSpec, state: Run): Run {
  const path = pathFor(spec, state.choice);
  if (state.completed >= path.length) return { ...state, playing: false };
  const completed = state.completed + 1;
  return { ...state, completed, inspected: path[completed - 1], playing: state.playing && completed < path.length };
}

function Canvas({ spec }: { spec: WorkflowSpec }) {
  const [run, setRun] = useState<Run>(() => initial());
  const panelId = useId();
  const path = pathFor(spec, run.choice);
  const scenario = spec[run.choice];
  const finished = run.completed === path.length;
  const currentNode = run.playing ? path[run.completed] : undefined;
  const branchId = spec.nodes.length;
  const inspected = run.inspected === branchId ? [spec.exception[0], 'Exception path', spec.exception[1]] : spec.nodes[run.inspected];

  useEffect(() => {
    if (!run.playing) return;
    const timer = window.setTimeout(() => setRun(previous => previous.playing ? advance(spec, previous) : previous),
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 650);
    return () => window.clearTimeout(timer);
  }, [run.playing, run.completed, run.choice, spec]);

  function runOrPause() {
    setRun(previous => {
      if (previous.playing) return { ...previous, playing: false };
      if (previous.completed === pathFor(spec, previous.choice).length) return { ...initial(previous.choice), playing: true };
      return { ...previous, playing: true };
    });
  }

  function nodeState(id: number) {
    const position = path.indexOf(id);
    if (id === currentNode) return 'running';
    if (position >= 0 && position < run.completed) return id === branchId ? 'branch' : 'done';
    if (position < 0 && finished) return 'skipped';
    return 'idle';
  }

  function nodeButton(id: number, title: string, kind: string) {
    const state = nodeState(id);
    const Icon = state === 'done' ? Check : state === 'branch' ? Flag : kind === 'Decision' ? GitBranch : id === 0 ? Zap : id === branchId ? Flag : Circle;
    return <button type="button" className="workflow-canvas-node" data-state={state} aria-pressed={run.inspected === id} aria-controls={panelId}
      onClick={() => setRun(previous => ({ ...previous, inspected: id }))}>
      <span className="workflow-node-icon"><Icon size={18} aria-hidden="true" /></span>
      <span className="workflow-node-kind">{kind}</span><strong>{title}</strong>
      <span className="workflow-node-state">{state === 'done' ? 'Visited' : state === 'branch' ? 'Exception reached' : state === 'running' ? 'Running' : state === 'skipped' ? 'Skipped' : 'Ready'}</span>
    </button>;
  }

  return (
    <div className="project-workflow-lab">
      <div className="workflow-lab-heading"><div><p className="eyebrow">Interactive workflow canvas</p><h3>Explore the execution path</h3></div><span className="workflow-lab-tag">SYNTHETIC DEMO</span></div>
      <p className="workflow-lab-description">Choose an input scenario, run or step through the graph, and inspect individual nodes.</p>
      <div className="workflow-lab-scenarios" role="group" aria-label="Workflow scenario">
        {(['normal', 'alternate'] as const).map(choice => (
          <button key={choice} type="button" className="workflow-scenario-option" aria-pressed={run.choice === choice} onClick={() => setRun(initial(choice))}>
            <span className="workflow-node-kind">{choice === 'normal' ? 'STANDARD PATH' : 'ALTERNATE PATH'}</span><strong>{spec[choice][0]}</strong><small>{spec[choice][1]}</small>
          </button>
        ))}
      </div>
      <div className="workflow-lab-toolbar">
        <button type="button" className="button-primary" onClick={runOrPause}>{run.playing ? <Pause size={17} /> : <Play size={17} />}{run.playing ? 'Pause' : finished ? 'Run again' : 'Run workflow'}</button>
        <button type="button" className="button-secondary" onClick={() => setRun(previous => advance(spec, { ...previous, playing: false }))} disabled={run.playing || finished}><SkipForward size={17} /> Step</button>
        <button type="button" className="button-secondary" onClick={() => setRun(initial(run.choice))}><RotateCcw size={16} /> Reset</button>
        <span className="workflow-run-indicator" data-outcome={finished ? scenario[3] : 'idle'} role="status">{finished ? scenario[3] === 'blocked' ? 'Blocked safely' : scenario[3] === 'review' ? 'Review required' : 'Path completed' : run.playing ? 'Running' : run.completed ? 'Paused / stepped' : 'Ready'} · {run.completed}/{path.length}</span>
      </div>
      <div className="workflow-canvas-scroll" tabIndex={0} aria-label="Scrollable workflow graph">
        <div className="workflow-canvas-grid" style={{ gridTemplateColumns: 'repeat(' + spec.nodes.length + ', minmax(9rem, 1fr))' }}>
          {spec.nodes.map((node, i) => (
            <div key={i} className="workflow-canvas-column">
              <div className="workflow-main-node">{nodeButton(i, node[0], node[1])}
                {i < spec.nodes.length - 1 && <span className="workflow-canvas-edge" data-traversed={path.includes(i + 1) && run.completed > i + 1} aria-hidden="true"><ArrowRight size={17} /></span>}
              </div>
              {i === spec.gate && <div className="workflow-branch-node">
                <span className="workflow-branch-edge" data-traversed={run.choice === 'alternate' && run.completed > spec.gate + 1}><ArrowDown size={18} aria-hidden="true" />Alternate</span>
                {nodeButton(branchId, spec.exception[0], 'Exception path')}
              </div>}
            </div>
          ))}
        </div>
      </div>
      <div className="workflow-lab-panels">
        <section id={panelId} className="workflow-inspector" aria-live="polite" aria-atomic="true"><p className="eyebrow">Node inspector</p><h4>{inspected[0]}</h4><span className="workflow-node-kind">{inspected[1]}</span><p>{inspected[2]}</p></section>
        <section className="workflow-inspector"><p className="eyebrow">Execution trace</p><h4>Simulated events</h4>
          {run.completed === 0 ? <p>Run or step through the workflow to reveal its trace.</p> : <ol className="workflow-trace" aria-label="Simulated events">{scenario[2].slice(0, run.completed).map((event, index) => <li key={index}><span>{String(index + 1).padStart(2, '0')}</span>{event}</li>)}</ol>}
          {finished && <p className="workflow-outcome" data-outcome={scenario[3]} role="status">{scenario[4]}</p>}
        </section>
      </div>
      <p className="workflow-lab-disclaimer">Scripted educational simulation of the intended workflow, using synthetic inputs. No APIs, databases, messages, bookings or AI models are executed. Not evidence of production behavior.</p>
    </div>
  );
}

export function ProjectWorkflowCanvas({ slug }: { slug: string }) {
  if (!Object.prototype.hasOwnProperty.call(projectWorkflows, slug)) return null;
  return <Canvas key={slug} spec={projectWorkflows[slug as ProjectSlug]} />;
}
