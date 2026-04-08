'use client';

import { useState } from 'react';
import Image from 'next/image';
import Reveal from '@/components/ui/Reveal/Reveal';
import SectionLabel from '@/components/ui/SectionLabel/SectionLabel';
import Button from '@/components/ui/Button/Button';
import VideoModal from '@/components/ui/VideoModal/VideoModal';
import { workItems } from '@/lib/data';
import styles from './Work.module.css';

export default function Work() {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section className={`${styles.work} section`} id="work">
      <div className="container">
        <div className={styles.header}>
          <Reveal>
            <SectionLabel>Portfolio</SectionLabel>
          </Reveal>
          <Reveal delay={1}>
            <h2 className={styles.title}>
              Selected<br /><em>work.</em>
            </h2>
          </Reveal>
        </div>
      </div>

      <div className={styles.grid}>
        {workItems.map((item, i) => (
          <Reveal
            key={item.id}
            delay={(i % 5) as 0 | 1 | 2 | 3 | 4}
            as="article"
            className={`${styles.item} ${item.wide ? styles.itemWide : ''}`}
          >
            <button
              className={styles.thumb}
              onClick={() => setActiveId(item.youtubeId)}
              aria-label={`Play ${item.title}`}
            >
              <Image
                src={`https://img.youtube.com/vi/${item.youtubeId}/maxresdefault.jpg`}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className={styles.thumbnail}
              />
              <div className={styles.overlay}>
                <span className={styles.play}>▶</span>
              </div>
            </button>
            <div className={styles.info}>
              <span className={styles.cat}>{item.category}</span>
              <h3 className={styles.itemTitle}>{item.title}</h3>
            </div>
          </Reveal>
        ))}
      </div>

      <div className={styles.cta}>
        <Button
          href="https://www.instagram.com/evioproduction/"
          variant="primary"
          external
        >
          View Full Portfolio on Instagram
        </Button>
      </div>

      {activeId && (
        <VideoModal
          youtubeId={activeId}
          onClose={() => setActiveId(null)}
        />
      )}
    </section>
  );
}
