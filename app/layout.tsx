import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Jette Aries Portilla | AI Automation Portfolio',
  description: 'AI automation, CRM automation, workflow orchestration, and business process automation portfolio.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
