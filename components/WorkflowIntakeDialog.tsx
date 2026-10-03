'use client';

import { useRef, type FormEvent } from 'react';
import { ArrowUpRight, X } from 'lucide-react';

const bookingUrl = 'https://cal.com/jette-aries-portilla/discovery-call';

export function WorkflowIntakeDialog() {
  const dialogRef = useRef<HTMLDialogElement>(null);

  function continueToBooking(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    window.open(bookingUrl, '_blank', 'noopener,noreferrer');
    dialogRef.current?.close();
  }

  return (
    <>
      <button type="button" className="button-secondary w-full sm:w-auto" onClick={() => dialogRef.current?.showModal()}>
        Not sure what to automate?
      </button>
      <dialog
        ref={dialogRef}
        aria-labelledby="workflow-dialog-title"
        aria-describedby="workflow-dialog-description"
        onClick={(event) => {
          if (event.target === dialogRef.current) dialogRef.current.close();
        }}
        className="cyber-panel m-auto max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] max-w-2xl overflow-y-auto rounded-xl p-0 text-white shadow-2xl shadow-black/50"
      >
        <div className="flex items-start justify-between gap-6 border-b border-cyan-100/15 p-5 sm:p-7">
          <div>
            <p className="eyebrow">Workflow notes</p>
            <h2 id="workflow-dialog-title" className="mt-2 text-2xl font-semibold text-white">What workflow should we review?</h2>
            <p id="workflow-dialog-description" className="mt-2 max-w-xl text-sm leading-6 text-slate-300">
              Share a few details about your current process so the discovery call can be more useful.
            </p>
          </div>
          <button type="button" onClick={() => dialogRef.current?.close()} aria-label="Close workflow form" className="rounded-md p-2 text-slate-400 transition hover:bg-white/5 hover:text-white">
            <X size={20} />
          </button>
        </div>

        <form onSubmit={continueToBooking} className="space-y-5 p-5 sm:p-7">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="space-y-2 text-sm font-medium text-slate-200">
              <span>Name</span>
              <input name="name" autoComplete="name" className="w-full rounded-md border border-cyan-100/20 bg-black/25 px-3 py-2.5 text-base text-white placeholder:text-slate-500 focus:border-cyan-200 focus:outline-none focus:ring-2 focus:ring-cyan-200/20" />
            </label>
            <label className="space-y-2 text-sm font-medium text-slate-200">
              <span>Email</span>
              <input name="email" type="email" autoComplete="email" className="w-full rounded-md border border-cyan-100/20 bg-black/25 px-3 py-2.5 text-base text-white placeholder:text-slate-500 focus:border-cyan-200 focus:outline-none focus:ring-2 focus:ring-cyan-200/20" />
            </label>
          </div>
          <label className="block space-y-2 text-sm font-medium text-slate-200">
            <span>Company or project</span>
            <input name="company" autoComplete="organization" className="w-full rounded-md border border-cyan-100/20 bg-black/25 px-3 py-2.5 text-base text-white placeholder:text-slate-500 focus:border-cyan-200 focus:outline-none focus:ring-2 focus:ring-cyan-200/20" />
          </label>
          <label className="block space-y-2 text-sm font-medium text-slate-200">
            <span>What process feels too manual right now?</span>
            <textarea name="manual-process" rows={3} className="w-full resize-y rounded-md border border-cyan-100/20 bg-black/25 px-3 py-2.5 text-base text-white placeholder:text-slate-500 focus:border-cyan-200 focus:outline-none focus:ring-2 focus:ring-cyan-200/20" />
          </label>
          <label className="block space-y-2 text-sm font-medium text-slate-200">
            <span>What tools are you currently using?</span>
            <input name="tools" className="w-full rounded-md border border-cyan-100/20 bg-black/25 px-3 py-2.5 text-base text-white placeholder:text-slate-500 focus:border-cyan-200 focus:outline-none focus:ring-2 focus:ring-cyan-200/20" />
          </label>
          <label className="block space-y-2 text-sm font-medium text-slate-200">
            <span>What outcome do you want?</span>
            <textarea name="desired-outcome" rows={3} className="w-full resize-y rounded-md border border-cyan-100/20 bg-black/25 px-3 py-2.5 text-base text-white placeholder:text-slate-500 focus:border-cyan-200 focus:outline-none focus:ring-2 focus:ring-cyan-200/20" />
          </label>
          <p className="text-xs leading-5 text-slate-400">Your answers are not submitted yet. This form is a preparation guide before booking.</p>
          <button type="submit" className="button-primary w-full sm:w-auto">
            Continue to Booking <ArrowUpRight size={16} />
          </button>
        </form>
      </dialog>
    </>
  );
}