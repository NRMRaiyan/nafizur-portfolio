import type { Metadata } from 'next';
import { Space_Grotesk, Inter } from 'next/font/google';
import { Analytics } from "@vercel/analytics/next"
import './globals.css';

const space = Space_Grotesk({ subsets: ['latin'], variable: '--font-space', display: 'swap' });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });

export const metadata: Metadata = {
  title: 'Nafizur Rahman Mallick — Engineer · Developer · Builder',
  description: 'Personal portfolio of Nafizur Rahman Mallick — engineer, developer, builder.',
  metadataBase: new URL('https://example.com'),
  openGraph: { title: 'Nafizur Rahman Mallick', description: 'Engineer · Developer · Builder', type: 'website' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-theme="dark">
      <body className={`${space.variable} ${inter.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
