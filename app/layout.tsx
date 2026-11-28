import type { Metadata } from 'next';
import { siteUrl } from '@/data/site';
import './globals.css';
import { BookingCalendar } from '@/components/BookingCalendar';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Jette Aries Portilla | AI Automation Portfolio',
  description: 'AI automation, CRM automation, workflow orchestration, and business process automation portfolio.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: "(function(){try{var t=localStorage.getItem('portfolio-color-theme');if(t==='light'||t==='dark')document.documentElement.dataset.theme=t;}catch(e){}})();" }} /></head>
      <body>{children}<BookingCalendar /></body>
    </html>
  );
}
