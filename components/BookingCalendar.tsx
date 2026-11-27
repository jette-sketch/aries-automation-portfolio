'use client';

import { useCallback, useEffect, useRef } from 'react';
import { ArrowUpRight, CalendarDays, X } from 'lucide-react';

const bookingUrl = 'https://cal.com/jette-aries-portilla/discovery-call';
const calLink = 'jette-aries-portilla/discovery-call';
const origin = 'https://app.cal.com';

type CalApi = ((...args: unknown[]) => void) & { q: unknown[][]; ns: Record<string, unknown>; loaded: boolean };
type CalWindow = Window & { Cal?: CalApi };

type ScrollLock = {
  x: number; y: number; bodyPosition: string; bodyTop: string; bodyLeft: string;
  bodyWidth: string; bodyOverflow: string; bodyPaddingRight: string; htmlOverflow: string; htmlScrollBehavior: string;
};

export function BookingCalendar() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const calendarRef = useRef<HTMLDivElement>(null);
  const previousFocus = useRef<HTMLElement | null>(null);
  const floatingButtonRef = useRef<HTMLAnchorElement>(null);
  const scrollLock = useRef<ScrollLock | null>(null);
  const restoringScroll = useRef(false);
  const restoreFrame = useRef(0);
  const initialized = useRef(false);
  const muted = useRef(false);

  const restorePage = useCallback(() => {
    const lock = scrollLock.current;
    if (!lock) return;
    scrollLock.current = null;
    restoringScroll.current = true;
    const body = document.body.style;
    const html = document.documentElement.style;
    body.position = lock.bodyPosition;
    body.top = lock.bodyTop;
    body.left = lock.bodyLeft;
    body.width = lock.bodyWidth;
    body.overflow = lock.bodyOverflow;
    body.paddingRight = lock.bodyPaddingRight;
    html.overflow = lock.htmlOverflow;
    window.scrollTo({ left: lock.x, top: lock.y, behavior: 'auto' });
    const target = previousFocus.current;
    const rect = target?.getBoundingClientRect();
    // Do not return focus to a stale hero link after an automatic prompt.
    if (target?.isConnected && rect && rect.bottom > 0 && rect.top < window.innerHeight) {
      target.focus({ preventScroll: true });
    } else {
      floatingButtonRef.current?.focus({ preventScroll: true });
    }
    window.scrollTo({ left: lock.x, top: lock.y, behavior: 'auto' });
    html.scrollBehavior = lock.htmlScrollBehavior;
    restoreFrame.current = window.requestAnimationFrame(() => {
      restoreFrame.current = 0;
      restoringScroll.current = false;
    });
  }, []);

  const openCalendar = useCallback(() => {
    const dialog = dialogRef.current;
    if (!dialog || dialog.open) return;
    if (document.querySelector('dialog[open]')) return;
    previousFocus.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const body = document.body.style;
    const html = document.documentElement.style;
    const x = window.scrollX;
    const y = window.scrollY;
    const scrollbar = Math.max(0, window.innerWidth - document.documentElement.clientWidth);
    const padding = parseFloat(getComputedStyle(document.body).paddingRight) || 0;
    scrollLock.current = { x, y, bodyPosition: body.position, bodyTop: body.top, bodyLeft: body.left,
      bodyWidth: body.width, bodyOverflow: body.overflow, bodyPaddingRight: body.paddingRight,
      htmlOverflow: html.overflow, htmlScrollBehavior: html.scrollBehavior };
    html.scrollBehavior = 'auto';
    html.overflow = 'hidden';
    body.position = 'fixed';
    body.top = '-' + y + 'px';
    body.left = '-' + x + 'px';
    body.width = '100%';
    body.overflow = 'hidden';
    if (scrollbar) body.paddingRight = (padding + scrollbar) + 'px';
    // Native dialog focus restoration must target a visible, fixed element.
    floatingButtonRef.current?.focus({ preventScroll: true });
    try { dialog.showModal(); } catch { restorePage(); return; }

    if (initialized.current || !calendarRef.current) return;
    initialized.current = true;
    const win = window as CalWindow;
    if (!win.Cal) {
      const queue = ((...args: unknown[]) => { queue.q.push(args); }) as CalApi;
      queue.q = [];
      queue.ns = {};
      queue.loaded = true;
      win.Cal = queue;
      const script = document.createElement('script');
      script.src = origin + '/embed/embed.js';
      script.async = true;
      document.head.appendChild(script);
    }
    if (!win.Cal) return;
    win.Cal('init', { origin });
    win.Cal('inline', {
      elementOrSelector: '#portfolio-booking-calendar',
      calLink,
      config: { layout: 'month_view', theme: 'dark' },
    });
    win.Cal('on', { action: 'bookingSuccessfulV2', callback: () => { muted.current = true; } });
  }, [restorePage]);

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

    // Exactly two automatic prompts, tied to the actual homepage headings.
    // Progress is monotonic: reaching the final demonstration never re-arms Project proof.
    const promptHeadings = ['#projects h2', '#workflow-demo h2'] as const;
    let lastPromptIndex = -1;
    let frame = 0;
    function onScroll() {
      if (frame || scrollLock.current || restoringScroll.current || muted.current) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        if (scrollLock.current || restoringScroll.current || muted.current || document.querySelector('dialog[open]')) return;
        let visibleIndex = -1;
        promptHeadings.forEach((selector, index) => {
          const heading = document.querySelector<HTMLElement>('main[data-booking-sections] ' + selector);
          if (!heading) return;
          const rect = heading.getBoundingClientRect();
          if (rect.bottom > 0 && rect.top <= window.innerHeight * 0.75) visibleIndex = index;
        });
        if (visibleIndex <= lastPromptIndex) return;
        openCalendar();
        if (dialogRef.current?.open) lastPromptIndex = visibleIndex;
      });
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      document.removeEventListener('click', onBookingClick);
      window.removeEventListener('scroll', onScroll);
      if (frame) window.cancelAnimationFrame(frame);
      restorePage();
      if (restoreFrame.current) window.cancelAnimationFrame(restoreFrame.current);
      restoringScroll.current = false;
    };
  }, [openCalendar, restorePage]);

  return <>
    <a ref={floatingButtonRef} href={bookingUrl} data-booking className="button-primary fixed bottom-4 right-4 z-50 rounded-full shadow-xl sm:bottom-6 sm:right-6" aria-haspopup="dialog">
      <CalendarDays size={18} aria-hidden="true" /> Book a Call
    </a>
    <dialog ref={dialogRef} aria-labelledby="booking-calendar-title" aria-describedby="booking-calendar-description"
      onClose={restorePage}
      onClick={event => { if (event.target === dialogRef.current) dialogRef.current?.close(); }}
      className="cyber-panel booking-calendar-dialog overflow-hidden overscroll-contain rounded-xl p-0 text-white shadow-2xl">
      <div className="booking-calendar-header flex shrink-0 items-start justify-between gap-2 border-b border-cyan-100/15 p-3 sm:p-4">
        <div><p className="eyebrow">Let&apos;s talk</p><h2 id="booking-calendar-title" className="mt-1 text-xl font-semibold">Book a discovery call</h2><p id="booking-calendar-description" className="mt-1 text-xs leading-5 text-slate-300">Choose an available time to discuss your workflow and automation opportunities.</p></div>
        <button type="button" autoFocus onClick={() => dialogRef.current?.close()} aria-label="Close booking calendar" className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md text-slate-300 hover:bg-white/10 hover:text-white"><X size={24} /></button>
      </div>
      <div className="booking-calendar-body">
        <div id="portfolio-booking-calendar" ref={calendarRef} className="min-h-[20rem] w-full min-w-0 p-2" />
      </div>
      <div className="booking-calendar-footer flex shrink-0 flex-wrap items-center justify-between gap-2 border-t border-cyan-100/15 p-3">
        <label className="flex items-center gap-2 text-xs text-slate-300"><input type="checkbox" onChange={event => { muted.current = event.target.checked; }} /> Don&apos;t show automatically again this visit</label>
        <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="button-secondary">Open calendar in a new tab <ArrowUpRight size={16} aria-hidden="true" /></a>
      </div>
    </dialog>
  </>;
}
