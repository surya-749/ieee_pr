import type { Metadata } from 'next';
import { Space_Grotesk, Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: 'IEEE RAS VITC | Recruitment & Innovation Platform',
  description: 'A multidisciplinary community building technology at the intersection of robotics, software, AI and automation.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={cn(
          inter.variable,
          spaceGrotesk.variable,
          jetBrainsMono.variable,
          'min-h-screen bg-background font-sans antialiased text-foreground'
        )}
      >
        <div className="scan-line z-50" />
        
        {children}
      </body>
    </html>
  );
}
