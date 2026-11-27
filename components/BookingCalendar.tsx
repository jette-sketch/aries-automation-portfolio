'use client';

import { useCallback, useEffect, useRef } from 'react';
import { ArrowUpRight, CalendarDays, X } from 'lucide-react';

const bookingUrl = 'https://cal.com/jette-aries-portilla/discovery-call';
const calLink = 'jette-aries-portilla/discovery-call';
const origin = 'https://app.cal.com';

type CalApi = ((...args: unknown[]) => void) & { q: unknown[][]; ns: Record<string, unknown>; loaded: boolean };
type CalWindow = Window & { Cal?: CalApi };

export function BookingCalendar() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const calendarRef = useRef<HTMLDivElement>(null);
  const previousFocus = useRef<HTMLElement | null>(null);
  const initialized = useRef(false);
  const muted = useRef(false);

  const openCalendar = useCallback(() => {
    const dialog = dialogRef.current;
    if (!dialog || dialog.open) return;
    if (document.querySelector('dialog[open]')) return;
    previousFocus.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    dialog.showModal();

    if (initialized.current || !calendarRef.current) return;
    initialized.current = true;
    const win = window as CalWindow;
    if (!win.Cal) {
      const queue = ((...args: unknown[]) => queue.q.push(args)) as CalApi;
      queue.q = [];
      queue.ns = {};
      queue.loaded = true;
      win.Cal = queue;
      const script = document.createElement('script');
      script.src = origin + '/embed/embed.js';
      script.async = true;
      document.head.appendChild(script);
    }
    win.Cal('init', { origin });
    win.Cal('inline', {
      elementOrSelector: '#portfolio-booking-calendar',
      calLink,
      config: { layout: 'month_view', theme: 'dark' },
    });
    win.Cal('on', { action: 'bookingSuccessfulV2', callback: () => { muted.current = true; } });
  }, []);

  useEffect(() => {
    // All booking CTAs retain their real URL when JavaScript is unavailable.
    function onBookingClick(event: MouseEvent) {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const anchor = event.target instanceof Element ? event.target.closest<HTMLAnchorElement>('a[data-booking]') : null;
      if (!anchor) return;
      event.preventDefault();
      const activeDialog = document.querySelector<HTMLDialogElement>('dialog[open]');
      if (activeDialog && activeDialog !== dialogRef.current) activeDialog.close();
      openCalendar();
    }
    document.addEventListener('click', onBookingClick);

    // Count completed top-level homepage sections; never re-prompt on reverse scroll.
    // A fast jump across several sections produces at most one prompt.
    let highestPair = 0;
    let frame = 0;
    let lastPath = window.location.pathname;
    const countPairs = () => {
      const sections = Array.from(document.querySelectorAll<HTMLElement>('main[data-booking-sections] > section'));
      const completed = sections.filter(section => section.getBoundingClientRect().bottom <= window.innerHeight * 0.45).length;
      return Math.floor(completed / 2);
    };
    highestPair = countPairs();
    function onScroll() {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        if (lastPath !== window.location.pathname) {
          lastPath = window.location.pathname;
          highestPair = 0;
        }
        const pair = countPairs();
        if (pair <= highestPair) return;
        highestPair = pair;
        if (!muted.current && !document.querySelector('dialog[open]')) openCalendar();
      });
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      document.removeEventListener('click', onBookingClick);
      window.removeEventListener('scroll', onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [openCalendar]);

  return <>
    <a href={bookingUrl} data-booking className="button-primary fixed bottom-4 right-4 z-50 rounded-full shadow-xl sm:bottom-6 sm:right-6" aria-haspopup="dialog">
      <CalendarDays size={18} aria-hidden="true" /> Book a Call
    </a>
    <dialog ref={dialogRef} aria-labelledby="booking-calendar-title" aria-describedby="booking-calendar-description"
      onClose={() => { if (previousFocus.current?.isConnected) previousFocus.current.focus({ preventScroll: true }); }}
      onClick={event => { if (event.target === dialogRef.current) dialogRef.current?.close(); }}
      className="cyber-panel m-auto max-h-[calc(100dvh-1rem)] w-[calc(100%-1rem)] max-w-5xl overflow-y-auto rounded-xl p-0 text-white shadow-2xl">
      <div className="flex items-start justify-between gap-4 border-b border-cyan-100/15 p-4 sm:p-6">
        <div><p className="eyebrow">Let's talk</p><h2 id="booking-calendar-title" className="mt-2 text-2xl font-semibold">Book a discovery call</h2><p id="booking-calendar-description" className="mt-2 text-sm text-slate-300">Choose an available time to discuss your workflow and automation opportunities.</p></div>
        <button type="button" autoFocus onClick={() => dialogRef.current?.close()} aria-label="Close booking calendar" className="rounded-md p-2 text-slate-300 hover:text-white"><X size={24} /></button>
      </div>
      <div id="portfolio-booking-calendar" ref={calendarRef} className="min-h-[22rem] w-full overflow-auto p-2 sm:p-4" />
      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-cyan-100/15 p-4">
        <label className="flex items-center gap-2 text-sm text-slate-300"><input type="checkbox" onChange={event => { muted.current = event.target.checked; }} /> Don't show automatically again this visit</label>
        <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="button-secondary">Open calendar in a new tab <ArrowUpRight size={16} aria-hidden="true" /></a>
      </div>
    </dialog>
  </>;
}
