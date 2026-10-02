import Link from 'next/link';
import Image from 'next/image';
import { ArrowDown, ArrowUpRight, BrainCircuit, Boxes, CalendarCheck2, FileDown, Mail, MapPin, Workflow } from 'lucide-react';

import { projects } from '@/data/projects';
import { ProjectCard } from '@/components/ProjectCard';

const proofMetrics = [
  { value: String(projects.filter((project) => project.maturity === 'flagship build').length), label: 'flagship build' },
  { value: String(projects.filter((project) => project.maturity === 'production-style build').length), label: 'production-style portfolio build' },
  { value: String(projects.filter((project) => project.maturity === 'portfolio implementation').length), label: 'portfolio implementations' },
  { value: String(projects.filter((project) => project.maturity === 'architecture blueprint').length), label: 'architecture blueprint' }
];

const stackGroups = [
  { name: 'Automation', tools: ['n8n', 'Make.com', 'GoHighLevel', 'Zapier'] },
  { name: 'AI', tools: ['OpenAI', 'Gemini', 'Groq', 'CrewAI'] },
  { name: 'Data', tools: ['Supabase', 'Airtable', 'Notion', 'Google Sheets'] },
  { name: 'Communication', tools: ['Gmail', 'Slack', 'Telegram'] },
  { name: 'Scheduling', tools: ['Google Calendar', 'Cal.com'] },
  { name: 'Deployment', tools: ['Vercel', 'Render', 'GitHub'] }
];

export default function Home() {
  const featured = projects.slice(0, 4);
  const supporting = projects.slice(4);
  const operatingModel = [
    { label: 'AI workflow design', icon: BrainCircuit, tone: 'text-emerald-300' },
    { label: 'CRM automation', icon: Boxes, tone: 'text-amber-300' },
    { label: 'SaaS orchestration', icon: Workflow, tone: 'text-cyan-300' },
    { label: 'Human review checkpoints', icon: CalendarCheck2, tone: 'text-rose-300' }
  ];

  return (
    <main className="pb-16">
      <section className="relative mx-auto max-w-7xl px-5 pb-14 pt-7 sm:px-8 lg:px-10 lg:pb-20 lg:pt-10">
        <nav className="mb-14 flex items-center justify-between border-b border-white/10 pb-4" aria-label="Portfolio navigation">
          <a href="#top" className="text-sm font-bold tracking-wide text-white">Jette Aries Portilla <span className="ml-1 font-normal text-emerald-200">/ Automation</span></a>
          <a href="#contact" className="hidden items-center gap-2 text-sm font-semibold text-slate-300 transition hover:text-emerald-200 sm:inline-flex">
            Contact <ArrowUpRight size={16} />
          </a>
        </nav>

        <div id="top" className="grid gap-12 lg:grid-cols-[1.12fr_0.88fr] lg:items-center lg:gap-16">
          <div className="max-w-3xl">
            <p className="eyebrow">AI Automation Specialist <span className="mx-2 text-white/30">/</span> Portfolio</p>
            <h1 className="mt-6 max-w-3xl text-5xl font-semibold leading-[1.08] tracking-normal text-white sm:text-6xl lg:text-7xl">
              AI systems for <span className="gradient-text">operations, CRM, and process automation.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                Case studies cover workflow design, CRM automation, SaaS operations, and AI-assisted processes. Each is labeled by its current status, from active development to architecture blueprint.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a href="#projects" className="button-primary w-full sm:w-auto">
                View systems <ArrowDown size={16} />
              </a>
              <a href="#resume" className="button-secondary w-full sm:w-auto">View resume snapshot</a>
            </div>
          </div>

          <div className="card relative overflow-hidden rounded-xl p-5 sm:p-7">
            <div className="absolute right-0 top-0 h-32 w-32 border-l border-b border-emerald-200/10" aria-hidden="true" />
            <div className="relative flex items-end justify-between gap-4 border-b border-white/10 pb-5">
              <div>
                <p className="eyebrow">Operating model</p>
                <p className="mt-2 text-sm text-slate-400">Intake, decisions, system actions, and human oversight</p>
              </div>
              <span className="font-mono text-xs text-emerald-200/70">01 — 04</span>
            </div>
            <div className="relative mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {operatingModel.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="min-h-28 rounded-lg bg-black/20 p-4">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs text-slate-500">0{index + 1}</span>
                      <Icon size={18} className={item.tone} strokeWidth={1.8} />
                    </div>
                    <p className="mt-5 text-sm font-semibold leading-5 text-slate-100">{item.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 lg:grid-cols-4">
          {proofMetrics.map((metric, index) => (
            <div key={metric.label} className="min-h-28 bg-[#101715] p-5 sm:p-6">
              <p className="font-mono text-xs text-emerald-200/70">0{index + 1} <span className="text-white/30">/ STATUS</span></p>
              <p className="mt-3 text-3xl font-semibold tabular-nums text-white">{metric.value}</p>
              <p className="mt-1 text-xs leading-5 text-slate-400 sm:text-sm">{metric.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="stack" className="border-y border-white/10 bg-[#0d1312]/90 px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-9 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-3xl">
              <p className="eyebrow">Stack architecture</p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight text-white sm:text-4xl">Tools organized by their role in an automation system.</h2>
            </div>
            <span className="font-mono text-xs text-slate-500">TOOLS / 06 GROUPS</span>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {stackGroups.map((group, index) => (
              <div key={group.name} className="rounded-lg border border-white/10 bg-white/[0.025] p-5 transition-colors hover:border-emerald-200/25 hover:bg-white/[0.04]">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-white">{group.name}</p>
                  <span className="font-mono text-xs text-slate-500">0{index + 1}</span>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.tools.map((tool) => <span key={tool} className="stack-badge">{tool}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow">Featured systems</p>
            <h2 className="mt-3 max-w-3xl text-3xl font-semibold leading-tight text-white sm:text-4xl">Seven case studies showing the problem, workflow, control points, and build status.</h2>
          </div>
          <Link href="#contact" className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-200 transition hover:text-white">
            Request a system review <ArrowUpRight size={16} />
          </Link>
        </div>

        <div className="grid items-stretch gap-5 xl:grid-cols-2">
          {featured.map((project) => <ProjectCard key={project.slug} project={project} />)}
        </div>

        <div className="mb-9 mt-16 border-t border-white/10 pt-12">
          <p className="eyebrow">Supporting portfolio</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold leading-tight text-white sm:text-4xl">Additional portfolio implementations and a system-design blueprint.</h2>
        </div>
        <div className="grid items-stretch gap-5 xl:grid-cols-2">
          {supporting.map((project) => <ProjectCard key={project.slug} project={project} />)}
        </div>
      </section>

      <section id="resume" className="border-y border-white/10 bg-[#0d1312]/90 px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[17rem_minmax(0,1fr)] lg:items-stretch">
          <div className="overflow-hidden rounded-xl border border-white/10 bg-[#111a17] shadow-2xl shadow-black/20">
            <div className="overflow-hidden bg-[#f4f3ef]">
              <Image
                src="/images/aries-headshot.jpg"
                alt="Jette Aries Portilla, AI Automation Specialist"
                width={800}
                height={800}
                sizes="(max-width: 1024px) 100vw, 272px"
                className="aspect-square w-full object-cover object-top"
              />
            </div>
            <div className="border-t border-white/10 px-5 py-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-emerald-200/75">Profile / 01</p>
              <p className="mt-2 text-base font-semibold text-white">Jette Aries Portilla</p>
              <p className="mt-1 text-sm text-slate-400">AI Automation Specialist</p>
            </div>
          </div>

          <div className="flex flex-col justify-center gap-6">
            <div>
              <p className="eyebrow">Resume snapshot</p>
              <h2 className="mt-3 max-w-2xl text-3xl font-semibold leading-tight text-white sm:text-4xl">Operations-first thinking with AI-native execution.</h2>
            </div>
            <div className="card rounded-lg p-6 sm:p-8">
              <ul className="space-y-5 text-sm leading-7 text-slate-200 sm:text-base">
                <li className="flex gap-4"><span className="font-mono text-emerald-200">01</span><span>More than six years of customer support and operations experience.</span></li>
                <li className="flex gap-4"><span className="font-mono text-emerald-200">02</span><span>Translate operational requirements into workflows with explicit data, rules, and exception paths.</span></li>
                <li className="flex gap-4"><span className="font-mono text-emerald-200">03</span><span>Portfolio focus: SaaS and CRM automation, AI decision support, and business-process orchestration.</span></li>
              </ul>
              <a
                href="/resume/jette-aries-portilla-resume.pdf"
                download
                className="button-primary mt-7 w-full sm:w-auto"
              >
                Download Resume <ArrowDown size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="relative overflow-hidden rounded-xl border border-emerald-100/15 bg-[linear-gradient(120deg,rgba(31,58,48,0.88),rgba(17,25,23,0.96)_58%,rgba(45,34,25,0.72))] p-6 sm:p-10 lg:p-12">
          <div className="absolute right-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-emerald-200/40 to-transparent" aria-hidden="true" />
          <div className="relative grid gap-10 lg:grid-cols-[minmax(0,1fr)_19rem] lg:items-end">
            <div className="max-w-3xl">
              <p className="eyebrow">Work with me</p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">Automation design grounded in clear decisions, auditable data, and controlled handoffs.</h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300">
                Available for workflow design, process audits, AI task automation, CRM system mapping, and implementation support across business operations.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a href="#projects" className="button-primary w-full sm:w-auto">Explore systems <ArrowDown size={16} /></a>
                <a href="#resume" className="button-secondary w-full sm:w-auto">Resume snapshot</a>
              </div>
            </div>

            <address className="not-italic">
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-emerald-200/75">Contact details</p>
              <div className="mt-4 space-y-3 border-t border-white/10 pt-4">
                <a href="mailto:jette.portilla@gmail.com" className="flex items-center gap-3 text-sm text-slate-200 transition hover:text-emerald-200">
                  <Mail size={16} className="shrink-0 text-emerald-200" />
                  <span className="break-all">jette.portilla@gmail.com</span>
                </a>
                <a href="https://www.linkedin.com/in/jettearies/" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm text-slate-200 transition hover:text-emerald-200">
                  <ArrowUpRight size={16} className="shrink-0 text-emerald-200" />
                  <span>LinkedIn profile</span>
                </a>
                <p className="flex items-center gap-3 text-sm text-slate-300">
                  <MapPin size={16} className="shrink-0 text-emerald-200" />
                  <span>Philippines, Remote</span>
                </p>
                <a href="/resume/jette-aries-portilla-resume.pdf" download className="flex items-center gap-3 text-sm text-slate-200 transition hover:text-emerald-200">
                  <FileDown size={16} className="shrink-0 text-emerald-200" />
                  <span>Download Resume</span>
                  <ArrowDown size={14} className="ml-auto shrink-0" />
                </a>
              </div>
              <p className="mt-4 border-t border-white/10 pt-4 text-xs leading-5 text-slate-400">WhatsApp / Viber available in resume.</p>
            </address>
          </div>
        </div>
      </section>
    </main>
  );
}
