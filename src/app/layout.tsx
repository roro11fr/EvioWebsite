import type { Metadata } from 'next';
import { Cormorant_Garamond, Syne } from 'next/font/google';
import Grain from '@/components/layout/Grain';
import CustomCursor from '@/components/layout/CustomCursor/CustomCursor';
import Nav from '@/components/layout/Nav/Nav';
import Footer from '@/components/layout/Footer/Footer';
import './globals.css';

// ── Fonts ────────────────────────────────────────────────────
const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
});

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-body',
  display: 'swap',
});

// ── Metadata ─────────────────────────────────────────────────
export const metadata: Metadata = {
  title: 'Evio Production — Video & Marketing Agency',
  description:
    'Evio Production crafts cinematic brand videos, social content, and marketing campaigns that move people.',
  openGraph: {
    title: 'Evio Production — Video & Marketing Agency',
    description: 'Cinematic video production and marketing campaigns built to captivate, convert, and last.',
    siteName: 'Evio Production',
  },
};

// ── Root Layout ───────────────────────────────────────────────
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${syne.variable}`}>
      <body>
        <Grain />
        <CustomCursor />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
