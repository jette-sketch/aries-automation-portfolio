'use client';

import { useRef, useState, type FormEvent } from 'react';
import { ArrowUpRight, X } from 'lucide-react';

const bookingUrl = 'https://cal.com/jette-aries-portilla/discovery-call';
const inputClass = 'w-full rounded-md border border-cyan-100/20 bg-black/25 px-3 py-2.5 text-base text-white focus:border-cyan-200 focus:outline-none focus:ring-2 focus:ring-cyan-200/20';

export function WorkflowIntakeDialog() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [summary, setSummary] = useState('');
  const [copyStatus, setCopyStatus] = useState('');
  function prepareSummary(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setSummary(`Workflow: ${data.get('process')}\nCurrent tools: ${data.get('tools')}\nDesired outcome: ${data.get('outcome')}`);
    setCopyStatus('');
  }
  async function copySummary() {
    try { await navigator.clipboard.writeText(summary); setCopyStatus('Copied. You can paste these notes into your booking or keep them for the call.'); }
    catch { setCopyStatus('Copy was unavailable. Select the notes below and copy them manually.'); }
  }
  return <>
    <button type="button" className="button-secondary w-full sm:w-auto" onClick={() => dialogRef.current?.showModal()}>Not sure what to automate?</button>
    <dialog ref={dialogRef} aria-labelledby="workflow-dialog-title" aria-describedby="workflow-dialog-description" onClick={(event) => { if (event.target === dialogRef.current) dialogRef.current.close(); }} className="cyber-panel m-auto max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] max-w-2xl overflow-y-auto rounded-xl p-0 text-white shadow-2xl shadow-black/50">
      <div className="flex items-start justify-between gap-6 border-b border-cyan-100/15 p-5 sm:p-7"><div><p className="eyebrow">Workflow notes</p><h2 id="workflow-dialog-title" className="mt-2 text-2xl font-semibold text-white">Prepare for a workflow review</h2><p id="workflow-dialog-description" className="mt-2 text-sm leading-6 text-slate-300">Create a short summary to copy for your call. Your answers stay in this browser and are not sent automatically.</p></div><button type="button" onClick={() => dialogRef.current?.close()} aria-label="Close workflow form" className="rounded-md p-2 text-slate-400 hover:text-white"><X size={20} /></button></div>
      <form onSubmit={prepareSummary} className="space-y-5 p-5 sm:p-7">
        <label className="block space-y-2 text-sm font-medium text-slate-200"><span>What process feels too manual?</span><textarea name="process" rows={3} required className={inputClass} /></label>
        <label className="block space-y-2 text-sm font-medium text-slate-200"><span>What tools are you using?</span><input name="tools" required className={inputClass} /></label>
        <label className="block space-y-2 text-sm font-medium text-slate-200"><span>What outcome do you want?</span><textarea name="outcome" rows={3} required className={inputClass} /></label>
        <button type="submit" className="button-primary">Prepare summary</button>
        {summary && <div className="space-y-3 border-t border-white/10 pt-5"><label className="block text-sm font-medium text-slate-200" htmlFor="workflow-summary">Your notes</label><textarea id="workflow-summary" value={summary} readOnly rows={5} className={inputClass} /><p className="text-xs leading-5 text-slate-400">The notes are not sent to the booking page. Copy and share them yourself if you wish.</p><div className="flex flex-wrap gap-3"><button type="button" onClick={copySummary} className="button-secondary">Copy notes</button><a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="button-primary">Continue to booking <ArrowUpRight size={16} /></a></div><p role="status" className="text-sm text-cyan-100">{copyStatus}</p></div>}
      </form>
    </dialog>
  </>;
}
