import Image from 'next/image';
import { ArrowDown, ArrowRight, ArrowUpRight, BrainCircuit, Boxes, CalendarCheck2, FileDown, Mail, Workflow } from 'lucide-react';

import { projects } from '@/data/projects';
import { ProjectCard } from '@/components/ProjectCard';
import { WorkflowIntakeDialog } from '@/components/WorkflowIntakeDialog';

const stackGroups = [
  { name: 'Automation', tools: ['n8n', 'Make.com', 'GoHighLevel', 'Zapier'] },
  { name: 'AI', tools: ['OpenAI', 'Gemini', 'Groq', 'CrewAI'] },
  { name: 'Data', tools: ['Supabase', 'Airtable', 'Notion', 'Google Sheets'] },
  { name: 'Communication', tools: ['Gmail', 'Slack', 'Telegram'] },
  { name: 'Scheduling', tools: ['Google Calendar', 'Cal.com'] },
  { name: 'Deployment', tools: ['Vercel', 'Render', 'GitHub'] }
];

export default function Home() {
  const solutionSteps = [
    { label: 'Map the workflow', detail: 'Understand the handoffs, decisions, and exceptions.', icon: Workflow },
    { label: 'Design the logic', detail: 'Define triggers, rules, data, and reliable fallbacks.', icon: BrainCircuit },
    { label: 'Connect your tools', detail: 'Integrate APIs, webhooks, CRMs, and AI where useful.', icon: Boxes },
    { label: 'Keep people in control', detail: 'Add human review at decisions that need judgment.', icon: CalendarCheck2 },
    { label: 'Test and document', detail: 'Validate the flow and leave a system others can operate.', icon: ArrowRight }
  ];
  const painPoints = [
    'Manual follow-ups',
    'Scattered CRM data',
    'Missed leads or appointments',
    'Repetitive admin work',
    'Slow reporting',
    'No clear automation workflow'
  ];
  const processSteps = [
    { number: '01', title: 'Share your workflow', detail: 'Bring one process that takes too much time or attention.' },
    { number: '02', title: 'Identify automation opportunities', detail: 'Find repetitive steps, bottlenecks, and useful integrations.' },
    { number: '03', title: 'Decide the next best system', detail: 'Leave with a clearer view of what to automate next.' }
  ];
  return (
    <main className="pb-16">
      <section className="mx-auto max-w-7xl px-5 pb-16 pt-7 sm:px-8 lg:px-10 lg:pb-24 lg:pt-10">
        <nav className="mb-14 flex items-center justify-between border-b border-white/10 pb-4" aria-label="Portfolio navigation">
          <a href="#top" className="text-sm font-bold text-white">Jette Aries Portilla <span className="ml-1 font-normal text-cyan-200">/ Automation</span></a>
          <a href="#contact" className="hidden items-center gap-2 text-sm font-semibold text-slate-300 transition hover:text-cyan-200 sm:inline-flex">
            Let&apos;s talk <ArrowUpRight size={16} />
          </a>
        </nav>

        <div id="top" className="grid scroll-mt-8 gap-12 lg:grid-cols-[1.12fr_0.88fr] lg:items-center lg:gap-16">
          <div className="max-w-3xl">
            <p className="eyebrow">AI Automation Specialist <span className="mx-2 text-white/30">/</span> Portfolio</p>
            <h1 className="mt-6 max-w-3xl text-5xl font-semibold leading-[1.08] text-white sm:text-6xl lg:text-7xl">
              Turn manual work into <span className="gradient-text">dependable systems.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              I design AI-enabled automation for operations, CRM, and customer workflows, with clear logic and people in control.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a href="https://cal.com/jette-aries-portilla/discovery-call" target="_blank" rel="noopener noreferrer" className="button-primary w-full sm:w-auto">
                Book a Discovery Call <ArrowUpRight size={16} />
              </a>
              <a href="#projects" className="button-secondary w-full sm:w-auto">
                View Automation Projects <ArrowDown size={16} />
              </a>
            </div>
          </div>

          <div className="card relative overflow-hidden rounded-xl p-5 sm:p-7">
            <div className="absolute right-0 top-0 h-32 w-32 border-b border-l border-cyan-200/15" aria-hidden="true" />
            <div className="relative flex items-end justify-between gap-4 border-b border-white/10 pb-5">
              <div>
                <p className="eyebrow">Operating model</p>
                <p className="mt-2 text-sm text-slate-400">Useful automation, deliberate oversight</p>
              </div>
              <span className="font-mono text-xs text-cyan-100/75">01 — 04</span>
            </div>
            <div className="relative mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {[
                { label: 'AI workflow design', icon: BrainCircuit, tone: 'text-cyan-200' },
                { label: 'CRM automation', icon: Boxes, tone: 'text-rose-200' },
                { label: 'Connected operations', icon: Workflow, tone: 'text-cyan-300' },
                { label: 'Human review checkpoints', icon: CalendarCheck2, tone: 'text-rose-300' }
              ].map((item, index) => {
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
      </section>

      <section id="pain-points" className="border-y border-white/10 bg-[#0d1312]/90 px-5 py-14 sm:px-8 lg:px-10 lg:py-16">
        <div className="mx-auto grid max-w-7xl gap-9 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="eyebrow">Where work gets stuck</p>
            <h2 className="mt-3 max-w-xl text-3xl font-semibold leading-tight text-white sm:text-4xl">Small manual gaps add up.</h2>
            <p className="mt-4 max-w-lg text-sm leading-7 text-slate-300">When routine work depends on memory and disconnected tools, follow-through gets harder to trust.</p>
          </div>
          <div className="grid gap-x-6 sm:grid-cols-2">
            {painPoints.map((point, index) => (
              <div key={point} className="flex min-h-14 items-center gap-3 border-b border-white/10 py-3">
                <span className="font-mono text-xs text-cyan-100/75">0{index + 1}</span>
                <span className="text-sm text-slate-200">{point}</span>
              </div>
            ))}
          </div>
          <div className="lg:col-start-2">
            <a href="https://cal.com/jette-aries-portilla/discovery-call" target="_blank" rel="noopener noreferrer" className="button-primary w-full sm:w-auto">
              Book a Discovery Call <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </section>

      <section id="approach" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <p className="eyebrow">A practical approach</p>
            <h2 className="mt-3 max-w-xl text-3xl font-semibold leading-tight text-white sm:text-4xl">A clear path from process to system.</h2>
            <p className="mt-4 max-w-lg text-sm leading-7 text-slate-300">Start with how the work happens today. Build around the real tools, decisions, and people involved.</p>
            <a href="https://cal.com/jette-aries-portilla/discovery-call" target="_blank" rel="noopener noreferrer" className="button-primary mt-7 w-full sm:w-auto">
              Discuss Your Workflow <ArrowUpRight size={16} />
            </a>
          </div>
          <div className="divide-y divide-white/10 border-y border-white/10">
            {solutionSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.label} className="grid gap-3 py-4 sm:grid-cols-[2.5rem_2rem_minmax(0,1fr)] sm:items-start">
                  <span className="font-mono text-xs text-cyan-100/75">0{index + 1}</span>
                  <Icon size={18} className="text-cyan-200" strokeWidth={1.8} aria-hidden="true" />
                  <div>
                    <h3 className="text-sm font-semibold text-white">{step.label}</h3>
                    <p className="mt-1 text-sm leading-6 text-slate-400">{step.detail}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="tools" className="border-y border-cyan-200/10 bg-[#09111b]/95 px-5 py-14 sm:px-8 lg:px-10 lg:py-18">
        <div className="mx-auto max-w-7xl">
          <div className="cyber-panel stack-module overflow-hidden rounded-xl p-5 sm:p-8 lg:p-10">
            <div className="relative z-10 grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start lg:gap-12">
              <div>
                <p className="eyebrow">Tools in the mix <span className="ml-2 text-rose-300/80">/ 06 domains</span></p>
                <h2 className="mt-3 max-w-lg text-3xl font-semibold leading-tight text-white sm:text-4xl">A connected toolkit, chosen for the workflow.</h2>
                <p className="mt-4 max-w-md text-base leading-7 text-slate-300">The stack follows the job: move information, support decisions, and keep people in the loop.</p>
                <div className="mt-6 flex items-center gap-3 font-mono text-xs uppercase text-cyan-100/70">
                  <span className="h-px w-8 bg-cyan-200/60" />
                  <span>System layer / 01—06</span>
                </div>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                {stackGroups.map((group, index) => (
                  <div key={group.name} className="rounded-lg border border-cyan-100/15 bg-[#08111c]/75 p-4 transition-colors hover:border-cyan-200/45 hover:bg-[#0d1b29]/90">
                    <div className="mb-3 flex items-center justify-between gap-3">
                      <h3 className="text-sm font-semibold text-white">{group.name}</h3>
                      <span className="font-mono text-xs text-rose-200/80">0{index + 1}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {group.tools.map((tool) => <span key={tool} className="stack-badge">{tool}</span>)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="border-y border-white/10 bg-[#0d1312]/90 px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-9 max-w-3xl">
            <p className="eyebrow">Project proof</p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight text-white sm:text-4xl">Designed around the work, not just the tools.</h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">Explore workflow design, automation architecture, and AI-assisted operations across these systems. Each project is labeled by its current build status.</p>
          </div>
          <div className="grid items-stretch gap-5 xl:grid-cols-2">
            {projects.map((project) => <ProjectCard key={project.slug} project={project} />)}
          </div>
          <div className="mt-9">
            <a href="https://cal.com/jette-aries-portilla/discovery-call" target="_blank" rel="noopener noreferrer" className="button-primary w-full sm:w-auto">
              Review These Systems With Me <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </section>

      <section id="process" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="mb-9 max-w-2xl">
          <p className="eyebrow">The first conversation</p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight text-white sm:text-4xl">A useful next step, without overcomplicating it.</h2>
        </div>
        <div className="grid gap-0 border-y border-white/10 md:grid-cols-3 md:divide-x md:divide-white/10">
          {processSteps.map((step) => (
            <div key={step.number} className="border-b border-white/10 py-6 md:border-b-0 md:px-6 md:first:pl-0 md:last:pr-0">
              <span className="font-mono text-xs text-cyan-100/75">STEP {step.number}</span>
              <h3 className="mt-4 text-lg font-semibold text-white">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">{step.detail}</p>
            </div>
          ))}
        </div>
        <a href="https://cal.com/jette-aries-portilla/discovery-call" target="_blank" rel="noopener noreferrer" className="button-primary mt-8 w-full sm:w-auto">
          Start With a Workflow Review <ArrowUpRight size={16} />
        </a>
      </section>

      <section id="builder" className="border-y border-cyan-200/10 bg-[#0a111a]/90 px-5 py-14 sm:px-8 lg:px-10 lg:py-18">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[18rem_minmax(0,1fr)] lg:items-center lg:gap-12">
          <div className="profile-frame overflow-hidden rounded-xl p-2">
            <Image
              src="/images/aries-headshot.jpg"
              alt="Jette Aries E. Portilla, AI Automation Specialist"
              width={800}
              height={800}
              sizes="(max-width: 1024px) 100vw, 288px"
              className="aspect-[4/5] w-full rounded-lg object-cover object-top"
            />
            <div className="border-t border-cyan-100/15 px-4 py-4">
              <p className="font-mono text-xs uppercase text-cyan-100/70">Builder / Operator</p>
              <p className="mt-2 text-lg font-semibold text-white">Jette Aries E. Portilla</p>
              <p className="mt-1 text-sm text-slate-300">AI Automation Specialist</p>
            </div>
          </div>
          <div>
            <p className="eyebrow">The builder behind the systems</p>
            <h2 className="mt-3 max-w-2xl text-3xl font-semibold leading-tight text-white sm:text-4xl">Operations-first thinking, built into every workflow.</h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300">More than six years of customer support and operations experience inform how I map handoffs, data rules, and exception paths before choosing an automation.</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="detail-panel rounded-lg p-4">
                <p className="font-mono text-xs uppercase text-cyan-100/70">01 / Approach</p>
                <p className="mt-2 text-sm leading-6 text-slate-200">Translate operational requirements into workflows with explicit data, rules, and human review.</p>
              </div>
              <div className="detail-panel rounded-lg p-4">
                <p className="font-mono text-xs uppercase text-rose-200/80">02 / Focus</p>
                <p className="mt-2 text-sm leading-6 text-slate-200">SaaS and CRM automation, AI decision support, and business-process orchestration.</p>
              </div>
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a href="/resume/jette-aries-portilla-resume.pdf" download className="button-primary w-full sm:w-auto">
                Download Resume <FileDown size={16} />
              </a>
              <a href="mailto:jette.portilla@gmail.com" className="button-secondary w-full sm:w-auto">
                <Mail size={16} /> Email
              </a>
              <a href="https://www.linkedin.com/in/jettearies/" target="_blank" rel="noopener noreferrer" className="button-secondary w-full sm:w-auto">
                <ArrowUpRight size={16} /> LinkedIn
              </a>
              <a href="https://github.com/jette-sketch" target="_blank" rel="noopener noreferrer" className="button-secondary w-full sm:w-auto">
                <ArrowUpRight size={16} /> GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-10 lg:py-14">
        <div className="cyber-panel relative overflow-hidden rounded-xl bg-[linear-gradient(120deg,rgba(12,52,71,0.75),rgba(12,21,34,0.96)_58%,rgba(55,28,43,0.55)] p-6 sm:p-10 lg:p-12">
          <div className="absolute right-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-cyan-200/55 to-transparent" aria-hidden="true" />
          <div className="relative grid gap-10 lg:grid-cols-[minmax(0,1fr)_19rem] lg:items-end">
            <div className="max-w-3xl">
              <p className="eyebrow">Start a conversation</p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">Ready to review your workflow?</h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300">Book a short discovery call so we can identify bottlenecks, automation opportunities, and the best next step for your operation.</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a href="https://cal.com/jette-aries-portilla/discovery-call" target="_blank" rel="noopener noreferrer" className="button-primary w-full sm:w-auto">
                  Book a Discovery Call <ArrowUpRight size={16} />
                </a>
                <WorkflowIntakeDialog />
              </div>
            </div>

            <address className="not-italic">
              <p className="font-mono text-xs uppercase text-cyan-100/75">Other ways to connect</p>
              <div className="mt-4 space-y-3 border-t border-white/10 pt-4">
                <a href="mailto:jette.portilla@gmail.com" className="flex items-center gap-3 text-sm text-slate-200 transition hover:text-cyan-200">
                  <Mail size={16} className="shrink-0 text-cyan-200" />
                  <span className="break-all">jette.portilla@gmail.com</span>
                </a>
                <a href="https://www.linkedin.com/in/jettearies/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-slate-200 transition hover:text-cyan-200">
                  <ArrowUpRight size={16} className="shrink-0 text-cyan-200" />
                  <span>LinkedIn</span>
                </a>
                <a href="https://github.com/jette-sketch" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-slate-200 transition hover:text-cyan-200">
                  <ArrowUpRight size={16} className="shrink-0 text-cyan-200" />
                  <span>GitHub</span>
                </a>
                <a href="/resume/jette-aries-portilla-resume.pdf" download className="flex items-center gap-3 text-sm text-slate-200 transition hover:text-cyan-200">
                  <FileDown size={16} className="shrink-0 text-cyan-200" />
                  <span>Download Resume</span>
                  <ArrowDown size={14} className="ml-auto shrink-0" />
                </a>
              </div>
            </address>
          </div>
        </div>
      </section>
    </main>
  );
}
