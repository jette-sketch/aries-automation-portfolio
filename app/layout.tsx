import type { Metadata } from 'next';

import { siteUrl } from '@/data/site';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Jette Aries Portilla | AI Automation Specialist',
    template: '%s | Jette Aries Portilla',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
