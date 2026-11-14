'use client';

import { useState, useEffect, type MouseEvent } from 'react';
import { usePathname } from 'next/navigation';
import { dictionaries, homePath, LANGS, portfolioPath, type Lang } from '@/lib/data';
import styles from './Nav.module.css';

const SECTION_IDS = ['hero', 'about', 'services', 'work', 'process', 'contact'];

/** The section currently under the top third of the viewport. */
function currentSectionId(): string | null {
  const line = window.innerHeight / 3;
  let current: string | null = null;
  for (const id of SECTION_IDS) {
    const el = document.getElementById(id);
    if (el && el.getBoundingClientRect().top <= line) current = id;
  }
  return current;
}

export default function Nav({ lang }: { lang: Lang }) {
  const t = dictionaries[lang].nav;
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);
  const onPortfolio = usePathname() === portfolioPath[lang];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const close = () => setOpen(false);

  // Keep the visitor on the same page / section when switching language.
  const switchLang = (e: MouseEvent<HTMLAnchorElement>, target: Lang) => {
    e.preventDefault();
    if (onPortfolio) {
      window.location.assign(portfolioPath[target]);
      return;
    }
    const id = currentSectionId();
    const hash = id && id !== 'hero' ? `#${id}` : '';
    window.location.assign(homePath[target] + hash);
  };

  // Section links point at the home page so they also work from the portfolio page.
  const home = homePath[lang];
  const links = [
    { href: `${home}#about`, label: t.about },
    { href: `${home}#services`, label: t.services },
    { href: portfolioPath[lang], label: t.work, current: onPortfolio },
    { href: `${home}#process`, label: t.process },
  ];

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <a href={home} className={styles.logo} aria-label="EVIO Production">
        {/* eslint-disable-next-line @next/next/no-img-element -- small static logo */}
        <img src="/brand/evio-logo.png" alt="EVIO Production" width={377} height={458} />
      </a>

      <div className={styles.right}>
        <ul className={`${styles.links} ${open ? styles.open : ''}`}>
          {links.map(({ href, label, current }) => (
            <li key={href}>
              <a href={href} onClick={close} aria-current={current ? 'page' : undefined}>
                {label}
              </a>
            </li>
          ))}
          <li>
            <a href={`${home}#contact`} onClick={close} className={styles.cta}>
              {t.cta}
            </a>
          </li>
        </ul>

        <div className={styles.lang} role="group" aria-label={t.langLabel}>
          {LANGS.map((l, i) => (
            <span key={l} className={styles.langItem}>
              {i > 0 && <span className={styles.langSep} aria-hidden="true">/</span>}
              {l === lang ? (
                <span className={styles.langActive} aria-current="true">
                  {l.toUpperCase()}
                </span>
              ) : (
                <a
                  href={onPortfolio ? portfolioPath[l] : homePath[l]}
                  hrefLang={l}
                  lang={l}
                  onClick={(e) => switchLang(e, l)}
                >
                  {l.toUpperCase()}
                </a>
              )}
            </span>
          ))}
        </div>

        <button
          className={styles.toggle}
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? t.toggleClose : t.toggle}
          aria-expanded={open}
        >
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
}
