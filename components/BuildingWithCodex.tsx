import { ArrowUpRight } from 'lucide-react';

const phases = [
  { number: '01', title: 'Define', steps: ['Requirement', 'Acceptance criteria', 'Architecture / constraints'] },
  { number: '02', title: 'Build & verify', steps: ['Codex-assisted implementation', 'Automated / targeted testing', 'Evidence review'] },
  { number: '03', title: 'Correct & ship', steps: ['Root-cause fix', 'Regression testing', 'Staging / deployment verification'] }
];

const examples = [
  {
    title: 'DentalFlow',
    href: '/projects/dentalflow-saas',
    detail: 'Codex assists implementation and evidence-driven fixes across the authoritative data layer, tenant and access enforcement, reliability hardening, and staging readiness for a production-oriented SaaS system.'
  },
  {
    title: 'Social Presence Automation',
    href: '/projects/social-presence-automation',
    detail: 'Codex supports deterministic ingestion, idempotency, atomic audit behavior, schema and AI output validation, disclosure/IP policy enforcement, and regression testing.'
  },
  {
    title: 'ClinicFlow',
    href: '/projects/clinicflow-operations-prototype',
    detail: 'Codex helps turn field observations into requirements and implement queue rules, state transitions, synthetic-data safeguards, and a guided demo. Regression and responsive checks support operational realism without inventing clinical workflows.'
  }
];

const routing = [
  { scope: 'Routine / mechanical', model: 'GPT-6 Luna' },
  { scope: 'Engineering implementation', model: 'GPT-6.1 Terra' },
  { scope: 'Complex / high-risk', model: 'GPT-6.1 Sol' }
];

export function BuildingWithCodex() {
  return (
    <section id="building-with-codex" aria-labelledby="codex-heading" className="tech-band mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
      <div className="max-w-3xl">
        <p className="eyebrow">Engineering method</p>
        <h2 id="codex-heading" className="mt-3 text-3xl font-semibold leading-tight text-white sm:text-4xl">Building with Codex</h2>
        <p className="mt-4 text-base leading-7 text-slate-300">Codex is an engineering collaborator in a controlled workflow: requirements first, implementation second, verification before completion.</p>
        <p className="mt-3 text-sm leading-7 text-slate-400">I remain responsible for requirements, acceptance criteria, architecture, security boundaries, validation, evidence review, and deployment decisions.</p>
      </div>

      <div className="mt-9 grid gap-3 md:grid-cols-3">
        {phases.map((phase) => (
          <div key={phase.number} className="detail-panel min-w-0 rounded-lg p-5">
            <p className="font-mono text-xs uppercase tracking-wider text-cyan-200">Phase {phase.number} / {phase.title}</p>
            <ol className="mt-4 space-y-2">
              {phase.steps.map((step, index) => <li key={step} className="flex gap-3 text-sm leading-6 text-slate-200"><span className="font-mono text-cyan-200/70">0{index + 1}</span><span>{step}</span></li>)}
            </ol>
          </div>
        ))}
      </div>
      <p className="mt-4 text-sm leading-7 text-slate-400">Define / Build / Verify / Diagnose / Correct / Regression test / Deploy or stage / Production verify when applicable.</p>

      <div className="mt-10">
        <p className="eyebrow">Across the projects</p>
        <h3 className="mt-2 text-xl font-semibold text-white">The method in practice</h3>
        <div className="mt-4 grid gap-3 lg:grid-cols-3">
          {examples.map((project) => (
            <article key={project.title} className="detail-panel flex min-w-0 flex-col rounded-lg p-5">
              <h4 className="font-semibold text-white">{project.title}</h4>
              <p className="mt-2 flex-1 text-sm leading-6 text-slate-300">{project.detail}</p>
              <a href={project.href} className="mt-4 inline-flex items-center gap-2 self-start text-sm font-semibold text-cyan-200 hover:text-cyan-100">View case study <ArrowUpRight size={15} aria-hidden="true" /></a>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-10 grid gap-4 lg:grid-cols-2">
        <div className="detail-panel min-w-0 rounded-lg p-5 sm:p-6">
          <p className="eyebrow">Verification / evidence</p>
          <h3 className="mt-2 text-xl font-semibold text-white">Evidence before completion</h3>
          <p className="mt-3 text-sm leading-7 text-slate-300">Implementation is not considered complete because the code looks correct or compiles. Depending on scope, evidence includes build and typecheck, lint, targeted and regression tests, integration behavior, responsive review, runtime checks, and staging or deployment verification. Production verification is separate where applicable.</p>
          <p className="mt-4 border-l-2 border-cyan-300/70 pl-3 text-sm font-semibold leading-6 text-slate-100">Designed / Built / Tested / Deployed / Production verified are distinct states.</p>
        </div>
        <div className="detail-panel min-w-0 rounded-lg p-5 sm:p-6">
          <p className="eyebrow">Failure handling</p>
          <h3 className="mt-2 text-xl font-semibold text-white">Inspect the failing layer</h3>
          <p className="mt-3 text-sm leading-7 text-slate-300">Fail / Inspect evidence / Identify the failing layer / Form a hypothesis / Test / Fix the root cause / Retest / Run relevant regression.</p>
          <p className="mt-4 text-sm leading-7 text-slate-400">A local build is one signal; deployment and production behavior require their own evidence.</p>
        </div>
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-2">
        <div className="detail-panel min-w-0 rounded-lg p-5 sm:p-6">
          <p className="eyebrow">AI trust boundary</p>
          <h3 className="mt-2 text-xl font-semibold text-white">AI proposes; rules and people decide</h3>
          <p className="mt-3 text-sm leading-7 text-slate-300">LLM output is untrusted input. Validate its schema and values against business rules, authorization, and consequences; keep deterministic rules in deterministic code.</p>
          <p className="mt-4 border-l-2 border-cyan-300/70 pl-3 text-sm font-semibold leading-6 text-slate-100">AI proposes / Validation / Authorization / Execution</p>
        </div>
        <div className="detail-panel min-w-0 rounded-lg p-5 sm:p-6">
          <p className="eyebrow">Model routing</p>
          <h3 className="mt-2 text-xl font-semibold text-white">Match effort to risk</h3>
          <p className="mt-3 text-sm leading-7 text-slate-300">Model choice and verification depth follow complexity, cost, and risk. A practical routing example:</p>
          <dl className="mt-4 divide-y divide-white/10 border-y border-white/10">
            {routing.map((item) => <div key={item.scope} className="flex flex-wrap justify-between gap-x-4 gap-y-1 py-2 text-sm"><dt className="text-slate-300">{item.scope}</dt><dd className="font-semibold text-cyan-100">{item.model}</dd></div>)}
          </dl>
          <p className="mt-3 text-sm leading-6 text-slate-400">High-risk work can include security, architecture, database invariants, concurrency, migrations, and deployment-critical decisions.</p>
        </div>
      </div>
    </section>
  );
}
