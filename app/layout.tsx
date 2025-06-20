import './global.css';
import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';

import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Navbar from '../components/ui/navbar';
import AuroraBackground from 'components/ui/background';

export const metadata: Metadata = {

  title: 'Zup Website',
  description: 'Zup Website',
  openGraph: {
    title: 'Landing Page',
    description: 'Zup Website',
    siteName: 'Zup Website',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const cx = (...classes) => classes.filter(Boolean).join(' ');

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cx(
        '',
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <body className="antialiased bg-no-repeat">
        <main className="w-full lex-auto min-w-0 flex flex-col md:px-0">
          <Navbar />
          {children}
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  );
}
