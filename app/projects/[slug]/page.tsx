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

  return (
    <main className="mx-auto max-w-7xl px-5 py-7 sm:px-8 lg:px-10 lg:py-10">
      <div className="mb-10 flex items-center justify-between gap-4 border-b border-white/10 pb-4">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 transition hover:text-emerald-200">
          <ArrowLeft size={16} /> Back to portfolio
        </Link>
        <span className="hidden font-mono text-xs uppercase tracking-wider text-slate-500 sm:inline">Case study / System design</span>
      </div>

      <article className="card overflow-hidden rounded-xl">
        <header className="relative overflow-hidden border-b border-white/10 px-5 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-12">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-end">
            <div className="relative max-w-4xl">
              <div className="flex flex-wrap items-center gap-3">
                <p className="eyebrow">{project.maturity}</p>
                <span className="h-px w-8 bg-emerald-200/40" aria-hidden="true" />
                <p className="font-mono text-[10px] uppercase tracking-wider text-slate-500">Technical writeup</p>
              </div>
              <h1 className="mt-5 text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">{project.title}</h1>
              <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">{project.summary}</p>
            </div>
            <div className="relative rounded-lg border border-white/10 bg-black/20 p-5">
              <p className="font-mono text-[10px] uppercase tracking-wider text-amber-200/80">Build status</p>
              <p className="mt-2 text-sm leading-6 text-slate-200">{project.status}</p>
              <p className="mt-3 border-l-2 border-emerald-300/60 pl-3 text-xs leading-6 text-slate-400">{project.credibilityNote}</p>
            </div>
          </div>
          <div className="relative mt-8">
            <p className="eyebrow mb-3">Final recommended stack</p>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tool) => <span key={tool} className="stack-badge">{tool}</span>)}
            </div>
          </div>
        </header>

        <section className="border-b border-white/10 px-5 py-6 sm:px-8 lg:px-12" aria-labelledby="workflow-diagram-title">
          <div className="mb-4 flex items-center justify-between gap-3">
            <div>
              <p className="eyebrow">System map</p>
              <h2 id="workflow-diagram-title" className="mt-1 text-sm font-semibold text-slate-200">Workflow diagram</h2>
            </div>
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" aria-hidden="true" />
          </div>
          <div className="diagram-frame overflow-hidden rounded-lg border border-white/10 bg-[#070b0a] p-2 sm:p-3">
            <img src={`/diagrams/${project.diagram}`} alt={`${project.title} workflow diagram`} className="mx-auto w-full" />
          </div>
        </section>

        <div className="grid gap-10 px-5 py-8 sm:px-8 lg:grid-cols-[minmax(0,1fr)_20rem] lg:gap-12 lg:px-12 lg:py-10">
          <div className="min-w-0 space-y-10">
            <section className="detail-section">
              <div className="mb-4 flex items-center gap-3">
                <span className="font-mono text-xs text-emerald-200/70">01</span>
                <span className="h-px w-7 bg-emerald-200/35" aria-hidden="true" />
                <p className="eyebrow">Overview</p>
              </div>
              <p className="max-w-3xl text-base leading-8 text-slate-300">{project.solutionOverview}</p>
            </section>

            <section className="detail-section">
              <div className="mb-4 flex items-center gap-3">
                <span className="font-mono text-xs text-emerald-200/70">02</span>
                <span className="h-px w-7 bg-emerald-200/35" aria-hidden="true" />
                <p className="eyebrow">Business problem</p>
              </div>
              <p className="max-w-3xl text-base leading-8 text-slate-300">{project.businessProblem}</p>
            </section>

            <section className="detail-section">
              <div className="mb-4 flex items-center gap-3">
                <span className="font-mono text-xs text-emerald-200/70">03</span>
                <span className="h-px w-7 bg-emerald-200/35" aria-hidden="true" />
                <p className="eyebrow">Workflow sequence</p>
              </div>
              <ol className="grid gap-2 sm:grid-cols-2">
                {project.workflowSequence.map((step, index) => (
                  <li key={step} className="flex min-h-16 items-start gap-3 rounded-md bg-black/20 p-3.5 text-sm leading-6 text-slate-300">
                    <span className="font-mono text-xs text-emerald-200">0{index + 1}</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </section>

            <section className="detail-section">
              <div className="mb-4 flex items-center gap-3">
                <span className="font-mono text-xs text-emerald-200/70">04</span>
                <span className="h-px w-7 bg-emerald-200/35" aria-hidden="true" />
                <p className="eyebrow">Key automations</p>
              </div>
              <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
                {project.keyAutomations.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-6 text-slate-300">
                    <Check size={16} className="mt-1 shrink-0 text-emerald-300" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="detail-section">
              <div className="mb-4 flex items-center gap-3">
                <span className="font-mono text-xs text-emerald-200/70">05</span>
                <span className="h-px w-7 bg-emerald-200/35" aria-hidden="true" />
                <p className="eyebrow">AI usage</p>
              </div>
              <ul className="space-y-3">
                {project.aiUsage.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-6 text-slate-300">
                    <CircleDot size={15} className="mt-1 shrink-0 text-cyan-300" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="detail-section">
              <div className="mb-4 flex items-center gap-3">
                <span className="font-mono text-xs text-emerald-200/70">06</span>
                <span className="h-px w-7 bg-emerald-200/35" aria-hidden="true" />
                <p className="eyebrow">Safety / human review / data handling notes</p>
              </div>
              <ul className="space-y-3">
                {project.safetyNotes.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-6 text-slate-300">
                    <ShieldCheck size={16} className="mt-1 shrink-0 text-amber-200" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="detail-section">
              <div className="mb-4 flex items-center gap-3">
                <span className="font-mono text-xs text-emerald-200/70">07</span>
                <span className="h-px w-7 bg-emerald-200/35" aria-hidden="true" />
                <p className="eyebrow">Next improvements</p>
              </div>
              <ul className="space-y-3">
                {project.nextImprovements.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-6 text-slate-300">
                    <ArrowUpRight size={15} className="mt-1 shrink-0 text-emerald-200" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <aside className="min-w-0 space-y-5 lg:sticky lg:top-6 lg:self-start">
            <section className="rounded-lg border border-white/10 bg-black/20 p-5">
              <p className="eyebrow">System pattern</p>
              <p className="mt-2 text-sm leading-6 text-slate-200">{project.pattern}</p>
            </section>

            <section className="rounded-lg border border-white/10 bg-black/20 p-5">
              <p className="eyebrow">Portfolio-safe implementation notes</p>
              <ul className="mt-4 space-y-3">
                {project.implementationNotes.map((item) => (
                  <li key={item} className="flex gap-3 text-xs leading-6 text-slate-400">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-amber-200" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          </aside>
        </div>
      </article>
    </main>
  );
}
