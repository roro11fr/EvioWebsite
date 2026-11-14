'use client';

import { useEffect, useRef, useState } from 'react';
import Reveal from '@/components/ui/Reveal/Reveal';
import SectionLabel from '@/components/ui/SectionLabel/SectionLabel';
import Button from '@/components/ui/Button/Button';
import {
  clients,
  dictionaries,
  FEATURED_COUNT,
  homePath,
  portfolioPath,
  type Client,
  type Lang,
} from '@/lib/data';
import styles from './Work.module.css';

function embedUrl(client: Client): string {
  const base = 'https://www.youtube.com/embed/';
  const params = 'autoplay=1&rel=0&modestbranding=1&playsinline=1';
  return 'list' in client.embed
    ? `${base}videoseries?list=${client.embed.list}&${params}`
    : `${base}${client.embed.video}?${params}`;
}

/** Custom cover from /public/portfolio, otherwise the full-resolution YouTube thumbnail. */
function coverUrl(client: Client): string {
  return client.poster
    ? `/portfolio/${client.poster}`
    : `https://i.ytimg.com/vi/${client.thumb}/maxresdefault.jpg`;
}

/**
 * `home`: a teaser with the first FEATURED_COUNT projects and a link to the full page.
 * `page`: the dedicated portfolio page with every project.
 */
export default function Work({ lang, variant = 'home' }: { lang: Lang; variant?: 'home' | 'page' }) {
  const t = dictionaries[lang].work;
  const isPage = variant === 'page';
  const shown = isPage ? clients : clients.slice(0, FEATURED_COUNT);
  const Heading = isPage ? 'h1' : 'h2';
  const [active, setActive] = useState<Client | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  // Open / close the native <dialog> (focus trap, Esc and backdrop handled by the browser).
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (active && !dialog.open) dialog.showModal();
    if (!active && dialog.open) dialog.close();
    document.body.style.overflow = active ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [active]);

  const close = () => {
    setActive(null);
    triggerRef.current?.focus();
  };

  return (
    <section className={`${styles.work} section ${isPage ? styles.page : ''}`} id="work">
      <div className="container">
        <div className={styles.header}>
          <Reveal>
            <SectionLabel>{t.label}</SectionLabel>
          </Reveal>
          <Reveal delay={1}>
            <Heading className={styles.title}>
              {t.titleLine}<br /><em>{t.titleItalic}</em>
            </Heading>
          </Reveal>
          <Reveal delay={2}>
            <p className={styles.intro}>{t.intro}</p>
          </Reveal>
        </div>
      </div>

      <ul className={styles.grid}>
        {shown.map((client, i) => (
          <Reveal key={client.name} delay={(i % 3) as 0 | 1 | 2} as="li" className={styles.item}>
            <button
              type="button"
              className={styles.card}
              onClick={(e) => {
                triggerRef.current = e.currentTarget;
                setActive(client);
              }}
              aria-haspopup="dialog"
            >
              <div className={styles.thumb}>
                {/* eslint-disable-next-line @next/next/no-img-element -- remote YouTube thumbnail or static cover */}
                <img
                  src={coverUrl(client)}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className={styles.image}
                />
                <div className={styles.overlay} aria-hidden="true">
                  <span className={styles.play}>▶</span>
                </div>
              </div>
              <div className={styles.info}>
                <h3 className={styles.itemTitle}>{client.name}</h3>
                <span className={styles.cardButton}>{t.cardButton} →</span>
              </div>
            </button>
          </Reveal>
        ))}
      </ul>

      <div className={`container ${styles.footerCta}`}>
        <Reveal>
          {isPage ? (
            <Button href={homePath[lang]} variant="outline">← {t.backHome}</Button>
          ) : (
            <Button href={portfolioPath[lang]} variant="outline">{t.viewAll} →</Button>
          )}
        </Reveal>
      </div>

      <dialog
        ref={dialogRef}
        className={styles.dialog}
        aria-label={active?.name}
        onClose={() => active && close()}
        onClick={(e) => {
          // Click on the backdrop closes the dialog
          if (e.target === e.currentTarget) close();
        }}
      >
        {active && (
          <div className={styles.dialogInner}>
            <div className={styles.dialogHead}>
              <h3 className={styles.dialogTitle}>{active.name}</h3>
              <button type="button" className={styles.close} onClick={close}>
                {t.close} ✕
              </button>
            </div>
            <div className={`${styles.player} ${active.vertical ? styles.vertical : ''}`}>
              <iframe
                src={embedUrl(active)}
                title={active.name}
                allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
              />
            </div>
            <a
              href={active.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ytLink}
            >
              {t.playlistLink} ↗
            </a>
          </div>
        )}
      </dialog>
    </section>
  );
}
