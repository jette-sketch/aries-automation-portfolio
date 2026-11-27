import type { Metadata } from 'next';
import './globals.css';
import { BookingCalendar } from '@/components/BookingCalendar';

export const metadata: Metadata = {
  title: 'Jette Aries Portilla | AI Automation Portfolio',
  description: 'AI automation, CRM automation, workflow orchestration, and business process automation portfolio.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}<BookingCalendar /></body>
    </html>
  );
}
