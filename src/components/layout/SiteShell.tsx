import type { Metadata } from 'next';
import { Cormorant_Garamond, Syne } from 'next/font/google';
import Grain from '@/components/layout/Grain';
import CustomCursor from '@/components/layout/CustomCursor/CustomCursor';
import Nav from '@/components/layout/Nav/Nav';
import Footer from '@/components/layout/Footer/Footer';
import { dictionaries, homePath, portfolioPath, type Lang } from '@/lib/data';
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

export function buildMetadata(lang: Lang, page: 'home' | 'portfolio' = 'home'): Metadata {
  const dict = dictionaries[lang];
  const isPortfolio = page === 'portfolio';
  const title = isPortfolio ? dict.work.pageTitle : dict.meta.title;
  const description = isPortfolio ? dict.work.pageDescription : dict.meta.description;
  const paths = isPortfolio ? portfolioPath : homePath;
  return {
    metadataBase: new URL(siteUrl),
    title,
    description,
    alternates: {
      canonical: paths[lang],
      languages: { ro: paths.ro, en: paths.en, 'x-default': paths.ro },
    },
    openGraph: {
      title,
      description,
      siteName: 'EVIO Production',
      locale: lang === 'ro' ? 'ro_RO' : 'en_US',
      type: 'website',
      url: paths[lang],
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
