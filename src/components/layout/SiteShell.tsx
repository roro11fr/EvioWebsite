import type { Metadata } from 'next';
import { Cormorant_Garamond, Syne } from 'next/font/google';
import Grain from '@/components/layout/Grain';
import CustomCursor from '@/components/layout/CustomCursor/CustomCursor';
import Nav from '@/components/layout/Nav/Nav';
import Footer from '@/components/layout/Footer/Footer';
import { dictionaries, homePath, type Lang } from '@/lib/data';
import '@/app/globals.css';

// ── Fonts ────────────────────────────────────────────────────
const cormorant = Cormorant_Garamond({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '600'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
});

const syne = Syne({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-body',
  display: 'swap',
});

// ── Metadata ─────────────────────────────────────────────────
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'http://localhost:3000');

export function buildMetadata(lang: Lang): Metadata {
  const { title, description } = dictionaries[lang].meta;
  return {
    metadataBase: new URL(siteUrl),
    title,
    description,
    alternates: {
      canonical: homePath[lang],
      languages: { ro: homePath.ro, en: homePath.en, 'x-default': homePath.ro },
    },
    openGraph: {
      title,
      description,
      siteName: 'EVIO Production',
      locale: lang === 'ro' ? 'ro_RO' : 'en_US',
      type: 'website',
      url: homePath[lang],
    },
  };
}

// ── Root Layout (shared by both languages) ───────────────────
export default function SiteShell({
  lang,
  children,
}: {
  lang: Lang;
  children: React.ReactNode;
}) {
  return (
    <html lang={lang} className={`${cormorant.variable} ${syne.variable}`}>
      <body>
        <Grain />
        <CustomCursor />
        <Nav lang={lang} />
        <main>{children}</main>
        <Footer lang={lang} />
      </body>
    </html>
  );
}
