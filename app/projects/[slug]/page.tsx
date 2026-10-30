import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight, Check, CircleDot, ShieldCheck } from 'lucide-react';

import { projects } from '@/data/projects';

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  const engineering = 'engineering' in project ? project.engineering : undefined;
  const social = 'social' in project ? project.social : undefined;
  const clinic = 'clinic' in project ? project.clinic : undefined;

  return (
    <main className="mx-auto max-w-7xl px-5 py-7 sm:px-8 lg:px-10 lg:py-10">
      <div className="mb-10 flex items-center justify-between gap-4 border-b border-white/10 pb-4">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 transition hover:text-emerald-200">
          <ArrowLeft size={16} /> Back to portfolio
        </Link>
        <span className="hidden font-mono text-xs uppercase tracking-wider text-slate-500 sm:inline">Case study / System design</span>
      </div>

      <article className="card cyber-panel overflow-hidden rounded-xl">
        <header className="case-study-header relative overflow-hidden border-b border-cyan-100/15 px-5 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-12">
          <div className={`grid gap-8 lg:grid-cols-[minmax(0,1fr)_18rem] ${social ? 'lg:items-start' : 'lg:items-end'}`}>
            <div className={`relative max-w-4xl ${social ? 'min-w-0' : ''}`}>
              <div className="flex flex-wrap items-center gap-3">
                <p className="eyebrow">{project.maturity}</p>
                <span className="h-px w-8 bg-cyan-200/55" aria-hidden="true" />
                <p className="font-mono text-xs uppercase tracking-wider text-slate-400">Technical writeup</p>
              </div>
              <h1 className="mt-5 text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">{project.title}</h1>
              <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">{project.summary}</p>
              {clinic && <a href="https://clinicflow-public-portfolio-demo-52fghb.v2.appdeploy.ai/" target="_blank" rel="noopener noreferrer" className="button-primary mt-6 w-full sm:w-auto">View Interactive Prototype <ArrowUpRight size={16} aria-hidden="true" /></a>}
            </div>
            <div className={`detail-panel relative rounded-lg p-5 ${social ? 'min-w-0 lg:col-start-2 lg:row-span-2 lg:row-start-1' : ''}`}>
              <p className="font-mono text-xs uppercase tracking-wider text-rose-200/90">Build status</p>
              <p className="mt-2 text-base leading-7 text-slate-100">{social ? 'Core ingestion and review controls are implemented and tested. Media processing and publishing remain under development.' : project.status}</p>
              <p className="mt-3 border-l-2 border-cyan-300/70 pl-3 text-sm leading-6 text-slate-300">{project.credibilityNote}</p>
            </div>
            {social && (
              <div className="min-w-0 lg:col-start-1 lg:row-start-2">
                <p className="eyebrow mb-3">Core technologies</p>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tool) => <span key={tool} className="stack-badge">{tool}</span>)}
                </div>
              </div>
            )}
          </div>
          {!social && <div className="relative mt-8">
            <p className="eyebrow mb-3">{engineering ? 'Core architecture' : clinic ? 'Core technologies' : 'Final recommended stack'}</p>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tool) => <span key={tool} className="stack-badge">{tool}</span>)}
            </div>
          </div>}
        </header>

        <section className="border-b border-cyan-100/15 px-5 py-6 sm:px-8 lg:px-12" aria-labelledby="workflow-diagram-title">
          <div className="mb-4 flex items-center justify-between gap-3">
            <div>
              <p className="eyebrow">System map</p>
              <h2 id="workflow-diagram-title" className="mt-1 text-base font-semibold text-slate-100">{engineering ? 'Architecture layers' : 'Workflow diagram'}</h2>
            </div>
            <span className="h-2 w-2 rounded-full bg-cyan-200 shadow-[0_0_12px_rgba(103,232,249,0.7)]" aria-hidden="true" />
          </div>
          <div className="diagram-frame overflow-hidden rounded-lg border border-cyan-100/20 bg-[#070d17] p-2 sm:p-4">
            <img src={`/diagrams/${project.diagram}`} alt={`${project.title} ${engineering ? 'architecture layers' : 'workflow diagram'}`} className="mx-auto w-full" style={engineering || social || clinic ? { maxWidth: '48rem', maxHeight: 'none' } : undefined} />
          </div>
        </section>

        {clinic && (
          <div className="space-y-10 border-b border-cyan-100/15 px-5 py-8 sm:px-8 lg:px-12 lg:py-10">
            <section aria-labelledby="clinic-discovery-title">
              <p className="eyebrow font-mono">Field discovery</p>
              <h2 id="clinic-discovery-title" className="mt-2 text-2xl font-semibold text-white">Start with how the clinic actually works</h2>
              <p className="mt-3 max-w-3xl text-base leading-8 text-slate-300">Field observation identified a walk-in-heavy reception process centered on paper or name-list intake, receptionist-issued queue numbers, first-come-first-served handling, and routing visits to an appropriate service or provider. The prototype follows that observed operating model rather than assuming appointment-slot scheduling; it does not claim every clinic workflow has been validated.</p>
            </section>
            <section aria-labelledby="clinic-requirements-title">
              <p className="eyebrow font-mono">Problem to requirements</p>
              <h2 id="clinic-requirements-title" className="mt-2 text-2xl font-semibold text-white">Translate observations into requirements</h2>
              <div className="mt-5 space-y-3">
                {clinic.observations.map((item) => <div key={item.observed} className="detail-panel grid gap-4 rounded-lg p-4 sm:grid-cols-2 sm:gap-6"><div><p className="eyebrow font-mono">Observed</p><p className="mt-2 text-sm leading-6 text-slate-100">{item.observed}</p></div><div><p className="eyebrow font-mono">Requirement</p><p className="mt-2 text-sm leading-6 text-slate-100">{item.requirement}</p></div></div>)}
              </div>
            </section>
            <section aria-labelledby="clinic-experience-title">
              <p className="eyebrow font-mono">Prototype experience</p>
              <h2 id="clinic-experience-title" className="mt-2 text-2xl font-semibold text-white">Surfaces for reception and staff</h2>
              <ol className="mt-5 grid gap-3 sm:grid-cols-2">
                {clinic.surfaces.map((item, index) => <li key={item.title} className="detail-panel min-w-0 rounded-lg p-4"><span className="font-mono text-sm text-cyan-200">0{index + 1}</span><h3 className="mt-2 font-semibold text-white">{item.title}</h3><p className="mt-2 text-sm leading-6 text-slate-300">{item.detail}</p></li>)}
              </ol>
            </section>
            <section aria-labelledby="clinic-safety-title">
              <p className="eyebrow font-mono">Privacy / safety boundary</p>
              <h2 id="clinic-safety-title" className="mt-2 text-2xl font-semibold text-white">Operational prototype, not a clinical system</h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                <li className="detail-panel rounded-lg p-4 text-sm leading-6 text-slate-100">The demo uses synthetic data only. Its public queue view displays queue numbers instead of patient names.</li>
                <li className="detail-panel rounded-lg p-4 text-sm leading-6 text-slate-100">The prototype makes no medical decisions or treatment recommendations and represents no real clinic integrations as live.</li>
                <li className="detail-panel rounded-lg p-4 text-sm leading-6 text-slate-100 sm:col-span-2">Follow-ups are administrative; the interface does not calculate treatment schedules.</li>
              </ul>
            </section>
            <section aria-labelledby="clinic-delivery-title">
              <p className="eyebrow font-mono">What was shipped</p>
              <h2 id="clinic-delivery-title" className="mt-2 text-2xl font-semibold text-white">From field notes to an interactive prototype</h2>
              <ol className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {clinic.delivery.map((item, index) => <li key={item.title} className="detail-panel min-w-0 rounded-lg p-4"><span className="font-mono text-sm text-cyan-200">0{index + 1}</span><h3 className="mt-2 font-semibold text-white">{item.title}</h3><p className="mt-2 text-sm leading-6 text-slate-300">{item.detail}</p></li>)}
              </ol>
            </section>
            <section aria-labelledby="clinic-state-title">
              <p className="eyebrow font-mono">Current state</p>
              <h2 id="clinic-state-title" className="mt-2 text-2xl font-semibold text-white">Prototype maturity and verification status</h2>
              <p className="mt-3 text-sm leading-7 text-slate-300">The deployed demo is a prototype for workflow exploration, not a production clinic deployment.</p>
              <dl className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {clinic.currentState.map((item) => <div key={item.label} className="detail-panel rounded-lg p-4"><dt className={`font-mono text-xs font-semibold uppercase tracking-wider ${item.label === 'Production verified' ? 'text-rose-200' : 'text-cyan-200'}`}>{item.label}</dt><dd className="mt-2 text-sm leading-6 text-slate-100">{item.detail}</dd></div>)}
              </dl>
            </section>
          </div>
        )}

        {social && (
          <div className="space-y-10 border-b border-cyan-100/15 px-5 py-8 sm:px-8 lg:px-12 lg:py-10">
            <section aria-labelledby="ingestion-title">
              <p className="eyebrow font-mono">Engineering problem</p>
              <h2 id="ingestion-title" className="mt-2 text-2xl font-semibold text-white">Deterministic ingestion and auditability</h2>
              <p className="mt-3 max-w-3xl text-base leading-8 text-slate-300">{project.businessProblem}</p>
              <p className="mt-5 border-l-2 border-cyan-300/70 pl-4 text-base font-semibold leading-7 text-slate-100">Retries should repeat intent, not duplicate consequences.</p>
              <ol className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {project.workflowSequence.map((step, index) => <li key={step} className="detail-panel min-w-0 rounded-lg p-4 text-sm leading-6 text-slate-100"><span className="mr-3 font-mono text-cyan-200">0{index + 1}</span>{step}</li>)}
              </ol>
            </section>
            <section aria-labelledby="social-evidence-title">
              <p className="eyebrow font-mono">Verified engineering evidence</p>
              <h2 id="social-evidence-title" className="mt-2 text-2xl font-semibold text-white">Reliability controls with tested behavior</h2>
              <p className="mt-2 text-sm leading-7 text-slate-300">Evidence covers core paths; this is not a claim of exhaustive adversarial testing.</p>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {social.evidence.map((item) => <li key={item} className="detail-panel rounded-lg p-4 text-sm leading-6 text-slate-100">{item}</li>)}
              </ul>
            </section>
            <section aria-labelledby="ai-boundary-title">
              <p className="eyebrow font-mono">AI boundary</p>
              <h2 id="ai-boundary-title" className="mt-2 text-2xl font-semibold text-white">AI proposes. Deterministic systems decide.</h2>
              <p className="mt-3 max-w-3xl text-base leading-7 text-slate-300">AI can assess content and return structured recommendations. Its output is untrusted input and cannot bypass validation, authorize progression, override policy, or publish content.</p>
              <ol className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
                {social.aiFlow.map((step, index) => <li key={step} className="relative min-w-0 pb-4 last:pb-0 sm:pb-0"><div className="detail-panel flex min-w-0 items-start gap-3 rounded-lg p-4 text-sm leading-6 text-slate-100 sm:block"><span className="shrink-0 font-mono text-cyan-200 sm:mb-2 sm:block">0{index + 1}</span><span>{step}</span></div>{index < social.aiFlow.length - 1 && <span aria-hidden="true" className="absolute bottom-0 left-6 h-4 w-px bg-cyan-200/60 sm:hidden" />}</li>)}
              </ol>
            </section>
            <section aria-labelledby="disclosure-title">
              <p className="eyebrow font-mono">Disclosure / IP review</p>
              <h2 id="disclosure-title" className="mt-2 text-2xl font-semibold text-white">Policy checks stay deterministic</h2>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {project.safetyNotes.map((item) => <li key={item} className="detail-panel rounded-lg p-4 text-sm leading-6 text-slate-100 last:lg:col-span-2">{item}</li>)}
              </ul>
            </section>
            <section aria-labelledby="social-lessons-title">
              <p className="eyebrow font-mono">Engineering lessons</p>
              <h2 id="social-lessons-title" className="mt-2 text-2xl font-semibold text-white">Reliability before execution</h2>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {social.lessons.map((lesson) => <div key={lesson.title} className="detail-panel rounded-lg p-4"><h3 className="font-semibold text-white">{lesson.title}</h3><p className="mt-2 text-sm leading-6 text-slate-300">{lesson.detail}</p></div>)}
              </div>
            </section>
            <section aria-labelledby="social-state-title">
              <p className="eyebrow font-mono">Current state</p>
              <h2 id="social-state-title" className="mt-2 text-2xl font-semibold text-white">Core review controls are active; publishing is still in progress</h2>
              <dl className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {social.currentState.map((item) => <div key={item.label} className={`detail-panel rounded-lg p-4 ${item.label === 'In progress' ? 'lg:col-span-2' : ''}`}><dt className={`font-mono text-xs font-semibold uppercase tracking-wider ${item.label === 'Production verified' ? 'text-rose-200' : 'text-cyan-200'}`}>{item.label}</dt><dd className="mt-2 text-sm leading-6 text-slate-100">{item.detail}</dd></div>)}
              </dl>
            </section>
            <section aria-labelledby="social-codex-title">
              <p className="eyebrow font-mono">Engineering method</p>
              <h2 id="social-codex-title" className="mt-2 text-2xl font-semibold text-white">Codex&apos;s role</h2>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300">{social.codexNote}</p>
            </section>
          </div>
        )}

        {engineering && (
          <div className="space-y-10 border-b border-cyan-100/15 px-5 py-8 sm:px-8 lg:px-12 lg:py-10">
            <section aria-labelledby="evolution-title">
              <p className="eyebrow font-mono">Architecture evolution</p>
              <h2 id="evolution-title" className="mt-2 text-2xl font-semibold text-white">From automation to SaaS</h2>
              <ol className="mt-5 grid gap-3 sm:grid-cols-2">
                {engineering.evolution.map((stage, index) => (
                  <li key={stage.title} className="detail-panel min-w-0 rounded-lg p-4 last:sm:col-span-2">
                    <span className="font-mono text-xs text-cyan-200">0{index + 1}</span>
                    <h3 className="mt-2 font-semibold text-white">{stage.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-300">{stage.detail}</p>
                  </li>
                ))}
              </ol>
            </section>
            <section aria-labelledby="evidence-title">
              <p className="eyebrow font-mono">Evidence</p>
              <h2 id="evidence-title" className="mt-2 text-2xl font-semibold text-white">Verified engineering evidence</h2>
              <p className="mt-2 text-sm leading-6 text-slate-300">Evidence for specific paths; broader testing and deployment verification remain ongoing.</p>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {engineering.evidence.map((item) => <li key={item} className="detail-panel rounded-lg p-4 text-sm leading-6 text-slate-200 last:sm:col-span-2">{item}</li>)}
              </ul>
            </section>
            <section aria-labelledby="codex-title">
              <p className="eyebrow font-mono">Engineering method</p>
              <h2 id="codex-title" className="mt-2 text-2xl font-semibold text-white">Building with Codex</h2>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300">Codex accelerates implementation, inspection, and debugging, but correctness is established through explicit requirements, deterministic enforcement, tests, and deployment evidence.</p>
              <div className="mt-5 grid gap-3 lg:grid-cols-3">
                {['Define', 'Build & Verify', 'Correct & Ship'].map((phase, phaseIndex) => (
                  <section key={phase} className="detail-panel min-w-0 rounded-lg p-5">
                    <h3 className="eyebrow font-mono">Phase 0{phaseIndex + 1} / {phase}</h3>
                    <ol start={phaseIndex * 3 + 1} className="mt-4 space-y-3">
                      {engineering.loop.slice(phaseIndex * 3, phaseIndex * 3 + 3).map((step, index) => (
                        <li key={step} className="flex gap-3 text-sm leading-6 text-slate-100">
                          <span className="shrink-0 font-mono text-cyan-200">0{phaseIndex * 3 + index + 1}</span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ol>
                  </section>
                ))}
              </div>
            </section>
            <section aria-labelledby="lessons-title">
              <p className="eyebrow font-mono">Lessons</p>
              <h2 id="lessons-title" className="mt-2 text-2xl font-semibold text-white">Engineering lessons</h2>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {engineering.lessons.map((lesson) => <div key={lesson.title} className="detail-panel rounded-lg p-4"><h3 className="font-semibold text-white">{lesson.title}</h3><p className="mt-2 text-sm leading-6 text-slate-300">{lesson.detail}</p></div>)}
              </div>
            </section>
            <section aria-labelledby="state-title">
              <p className="eyebrow font-mono">Current state</p>
              <h2 id="state-title" className="mt-2 text-2xl font-semibold text-white">Project maturity and verification status</h2>
              <dl className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {engineering.currentState.map((item) => <div key={item.label} className="detail-panel rounded-lg p-4"><dt className={`font-mono text-xs font-semibold uppercase tracking-wider ${item.label === 'Production verified' ? 'text-rose-200' : 'text-cyan-200'}`}>{item.label}</dt><dd className={`mt-2 text-sm leading-6 ${item.label === 'Production verified' ? 'text-rose-200' : 'text-slate-100'}`}>{item.detail}</dd></div>)}
              </dl>
            </section>
          </div>
        )}

        {clinic ? null : social ? (
          <div className="space-y-8 px-5 py-8 sm:px-8 lg:px-12 lg:py-10">
            <section aria-labelledby="social-summary-title">
              <h2 id="social-summary-title" className="text-2xl font-semibold text-white">System pattern</h2>
              <p className="mt-3 text-base leading-7 text-slate-300">{project.pattern}</p>
            </section>
            <section aria-labelledby="social-next-title">
              <h2 id="social-next-title" className="text-2xl font-semibold text-white">Remaining work</h2>
              <ul className="mt-3 space-y-2">{project.nextImprovements.map((item) => <li key={item} className="flex gap-3 text-base leading-7 text-slate-300"><ArrowUpRight size={16} className="mt-1 shrink-0 text-cyan-200" aria-hidden="true"/><span>{item}</span></li>)}</ul>
            </section>
          </div>
        ) : engineering ? (
          <div className="space-y-8 px-5 py-8 sm:px-8 lg:px-12 lg:py-10">
            <section aria-labelledby="business-context-title">
              <h2 id="business-context-title" className="text-2xl font-semibold text-white">Business context</h2>
              <p className="mt-3 max-w-3xl text-base leading-8 text-slate-300">{project.businessProblem}</p>
            </section>
            <section aria-labelledby="oversight-title">
              <h2 id="oversight-title" className="text-2xl font-semibold text-white">AI and human oversight</h2>
              <ul className="mt-3 max-w-3xl space-y-2">
                {project.aiUsage.map((item) => <li key={item} className="text-base leading-7 text-slate-300">{item}</li>)}
              </ul>
            </section>
            <section aria-labelledby="remaining-work-title">
              <h2 id="remaining-work-title" className="text-2xl font-semibold text-white">Remaining work</h2>
              <ul className="mt-3 max-w-3xl space-y-2">
                {project.nextImprovements.map((item) => <li key={item} className="flex gap-3 text-base leading-7 text-slate-300"><ArrowUpRight size={16} className="mt-1 shrink-0 text-cyan-200" aria-hidden="true" /><span>{item}</span></li>)}
              </ul>
            </section>
          </div>
        ) : (
        <div className="grid gap-10 px-5 py-8 sm:px-8 lg:grid-cols-[minmax(0,1fr)_20rem] lg:gap-12 lg:px-12 lg:py-10">
          <div className="min-w-0 space-y-10">
            <section className="detail-section">
              <div className="mb-4 flex items-center gap-3">
                <span className="font-mono text-sm text-cyan-100/80">01</span>
                <span className="h-px w-7 bg-cyan-200/45" aria-hidden="true" />
                <p className="eyebrow">Overview</p>
              </div>
              <p className="max-w-3xl text-base leading-8 text-slate-300">{project.solutionOverview}</p>
            </section>

            <section className="detail-section">
              <div className="mb-4 flex items-center gap-3">
                <span className="font-mono text-sm text-cyan-100/80">02</span>
                <span className="h-px w-7 bg-cyan-200/45" aria-hidden="true" />
                <p className="eyebrow">Business problem</p>
              </div>
              <p className="max-w-3xl text-base leading-8 text-slate-300">{project.businessProblem}</p>
            </section>

            <section className="detail-section">
              <div className="mb-4 flex items-center gap-3">
                <span className="font-mono text-sm text-cyan-100/80">03</span>
                <span className="h-px w-7 bg-cyan-200/45" aria-hidden="true" />
                <p className="eyebrow">Workflow sequence</p>
              </div>
              <ol className="grid gap-2 sm:grid-cols-2">
                {project.workflowSequence.map((step, index) => (
                  <li key={step} className="detail-panel flex min-h-16 items-start gap-3 rounded-md p-4 text-base leading-6 text-slate-200">
                    <span className="font-mono text-sm text-cyan-100/85">0{index + 1}</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </section>

            <section className="detail-section">
              <div className="mb-4 flex items-center gap-3">
                <span className="font-mono text-sm text-cyan-100/80">04</span>
                <span className="h-px w-7 bg-cyan-200/45" aria-hidden="true" />
                <p className="eyebrow">Key automations</p>
              </div>
              <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
                {project.keyAutomations.map((item) => (
                  <li key={item} className="flex gap-3 text-base leading-7 text-slate-300">
                    <Check size={17} className="mt-1 shrink-0 text-cyan-200" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="detail-section">
              <div className="mb-4 flex items-center gap-3">
                <span className="font-mono text-sm text-cyan-100/80">05</span>
                <span className="h-px w-7 bg-cyan-200/45" aria-hidden="true" />
                <p className="eyebrow">AI usage</p>
              </div>
              <ul className="space-y-3">
                {project.aiUsage.map((item) => (
                  <li key={item} className="flex gap-3 text-base leading-7 text-slate-300">
                    <CircleDot size={15} className="mt-1 shrink-0 text-cyan-300" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="detail-section">
              <div className="mb-4 flex items-center gap-3">
                <span className="font-mono text-sm text-cyan-100/80">06</span>
                <span className="h-px w-7 bg-cyan-200/45" aria-hidden="true" />
                <p className="eyebrow">Safety / human review / data handling notes</p>
              </div>
              <ul className="space-y-3">
                {project.safetyNotes.map((item) => (
                  <li key={item} className="flex gap-3 text-base leading-7 text-slate-300">
                    <ShieldCheck size={16} className="mt-1 shrink-0 text-amber-200" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="detail-section">
              <div className="mb-4 flex items-center gap-3">
                <span className="font-mono text-sm text-cyan-100/80">07</span>
                <span className="h-px w-7 bg-cyan-200/45" aria-hidden="true" />
                <p className="eyebrow">Next improvements</p>
              </div>
              <ul className="space-y-3">
                {project.nextImprovements.map((item) => (
                  <li key={item} className="flex gap-3 text-base leading-7 text-slate-300">
                    <ArrowUpRight size={16} className="mt-1 shrink-0 text-cyan-200" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <aside className="min-w-0 space-y-5 lg:sticky lg:top-6 lg:self-start">
            <section className="detail-panel rounded-lg p-5">
              <p className="eyebrow">System pattern</p>
              <p className="mt-2 text-base leading-7 text-slate-200">{project.pattern}</p>
            </section>

            <section className="detail-panel rounded-lg p-5">
              <p className="eyebrow">Portfolio-safe implementation notes</p>
              <ul className="mt-4 space-y-3">
                {project.implementationNotes.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-6 text-slate-300">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-200" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          </aside>
        </div>
        )}
      </article>
    </main>
  );
}
