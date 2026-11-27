'use client';

import { useId, useState } from 'react';
import { Workflow, Network, DatabaseZap } from 'lucide-react';

const systems = {
  workflows: { label: 'WORKFLOWS', heading: 'Workflows that keep work moving.', detail: 'Connect triggers, decisions, and handoffs across your tools.', icon: Workflow },
  connected: { label: 'CONNECTED SYSTEMS', heading: 'Thoughtful automation. Built for real work.', detail: 'Connecting people, processes, data, and AI.', icon: Network },
  data: { label: 'DATA + AI', heading: 'Useful data. Human oversight.', detail: 'Bring data and AI into workflows with clear rules and review.', icon: DatabaseZap },
} as const;

type System = keyof typeof systems;
const nodeOrder: System[] = ['workflows', 'connected', 'data'];

// Fixed geometry avoids random hydration differences and per-frame React rendering.
const particles = Array.from({ length: 36 }, (_, index) => {
  const angle = index * 137.508 * Math.PI / 180;
  const radius = 78 + (index * 37 % 103);
  return { x: 210 + Math.cos(angle) * radius, y: 210 + Math.sin(angle) * radius, r: index % 7 === 0 ? 1.7 : .8 };
});

export function SystemsExplorer() {
  const [active, setActive] = useState<System>('connected');
  const [paused, setPaused] = useState(false);
  const id = useId();
  const selected = systems[active];
  const CoreIcon = selected.icon;
  return (
    <div className="hero-visual systems-explorer lucifer-explorer" data-core={active} data-paused={paused}>
      <div className="systems-graphic lucifer-graphic">
        <svg className="lucifer-reactor" viewBox="0 0 420 420" aria-hidden="true" focusable="false">
          <defs>
            <radialGradient id={id + '-aura'}>
              <stop offset="0" stopColor="var(--core-light)" stopOpacity=".28" />
              <stop offset=".48" stopColor="var(--core-color)" stopOpacity=".13" />
              <stop offset="1" stopColor="var(--core-color)" stopOpacity="0" />
            </radialGradient>
            <radialGradient id={id + '-sphere'}>
              <stop offset="0" stopColor="var(--core-light)" stopOpacity=".9" />
              <stop offset=".22" stopColor="var(--core-color)" stopOpacity=".48" />
              <stop offset=".66" stopColor="#081725" stopOpacity=".96" />
              <stop offset="1" stopColor="#050d17" />
            </radialGradient>
          </defs>
          <circle className="lucifer-aura" cx="210" cy="210" r="207" fill={'url(#' + id + '-aura)'} />
          <g className="lucifer-particles">
            {particles.map((particle, index) => <circle key={index} cx={particle.x} cy={particle.y} r={particle.r} fill="currentColor" opacity={index % 3 === 0 ? .7 : .25} />)}
          </g>
          <g className="lucifer-reticle" fill="none" stroke="currentColor">
            <circle cx="210" cy="210" r="197" strokeOpacity=".13" />
            <circle cx="210" cy="210" r="183" strokeOpacity=".25" strokeDasharray="1 8" strokeWidth="2" />
            <circle cx="210" cy="210" r="167" strokeOpacity=".26" strokeDasharray="28 7 3 7" />
            <circle cx="210" cy="210" r="147" strokeOpacity=".16" />
            <ellipse cx="210" cy="210" rx="188" ry="85" transform="rotate(-33 210 210)" strokeOpacity=".22" />
            <ellipse cx="210" cy="210" rx="188" ry="85" transform="rotate(33 210 210)" strokeOpacity=".22" />
          </g>
          <g className="lucifer-orbit lucifer-orbit-outer" fill="none" stroke="currentColor">
            <circle cx="210" cy="210" r="183" strokeWidth="2" strokeOpacity=".7" strokeDasharray="100 1049" strokeLinecap="round" />
            <circle cx="393" cy="210" r="3.5" fill="var(--core-light)" stroke="none" />
            <circle cx="210" cy="210" r="167" strokeWidth="1.5" strokeDasharray="29 1020" strokeOpacity=".8" />
          </g>
          <g className="lucifer-orbit lucifer-orbit-inner" fill="none" stroke="currentColor">
            <circle cx="210" cy="210" r="145" strokeWidth="3" strokeDasharray="59 852" strokeOpacity=".65" strokeLinecap="round" />
            <circle cx="355" cy="210" r="3.2" fill="var(--core-light)" stroke="none" />
            <circle cx="210" cy="210" r="130" strokeWidth="1.4" strokeDasharray="18 798" strokeOpacity=".8" />
          </g>
          <g className="lucifer-orbit lucifer-orbit-third" fill="none" stroke="currentColor">
            <circle cx="210" cy="210" r="155" strokeWidth="1.8" strokeDasharray="38 936" strokeOpacity=".55" strokeLinecap="round" />
            <circle cx="365" cy="210" r="2.5" fill="var(--core-light)" stroke="none" />
          </g>
          <g className="lucifer-orbit lucifer-segments" fill="none" stroke="currentColor">
            <circle cx="210" cy="210" r="111" strokeWidth="8" strokeDasharray="28 15 8 16" strokeOpacity=".42" />
            <circle cx="210" cy="210" r="101" strokeWidth="1" strokeDasharray="2 5" strokeOpacity=".62" />
          </g>
          <g className="lucifer-pulse">
            <circle cx="210" cy="210" r="91" stroke="currentColor" strokeWidth="2" fill="none" strokeOpacity=".85" />
            <circle cx="210" cy="210" r="84" fill={'url(#' + id + '-sphere)'} stroke="currentColor" strokeOpacity=".8" />
            <circle cx="210" cy="210" r="66" fill="none" stroke="currentColor" strokeDasharray="2 5" strokeOpacity=".5" />
            <circle cx="210" cy="210" r="52" fill="none" stroke="currentColor" strokeOpacity=".4" />
            <path d="M210 120v14 M210 286v14 M120 210h14 M286 210h14" stroke="var(--core-light)" strokeWidth="2" />
          </g>
        </svg>
        <div className="lucifer-core-label" aria-hidden="true">
          <CoreIcon size={35} strokeWidth={1.6} />
          <span>{selected.label}</span>
        </div>
        <span className="lucifer-core-hint" aria-hidden="true">INTERACTIVE SYSTEMS CORE</span>
      </div>
      <div className="lucifer-node-controls" role="group" aria-label="Explore connected systems">
        {nodeOrder.map(node => (
          <button key={node} type="button" className="lucifer-node" aria-pressed={active === node} onClick={() => setActive(node)}>
            {systems[node].label}
          </button>
        ))}
      </div>
      <div className="hero-caption" aria-live="polite" aria-atomic="true"><span>{selected.label}</span><strong>{selected.heading}</strong><p>{selected.detail}</p></div>
      <button type="button" className="lucifer-motion-control" aria-pressed={paused} onClick={() => setPaused(value => !value)}>{paused ? 'Resume animation' : 'Pause animation'}</button>
    </div>
  );
}
