import Reveal from '@/components/ui/Reveal/Reveal';
import SectionLabel from '@/components/ui/SectionLabel/SectionLabel';
import Button from '@/components/ui/Button/Button';
import { workItems } from '@/lib/data';
import styles from './Work.module.css';

export default function Work() {
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
            delay={(i % 5) as 0|1|2|3|4}
            as="article"
            className={`${styles.item} ${item.wide ? styles.itemWide : ''}`}
          >
            <div className={styles.thumb}>
              <div className={styles.overlay}>
                <span className={styles.play}>▶</span>
              </div>
              <div className={`${styles.placeholder} ${styles[item.placeholderClass as keyof typeof styles]}`} />
            </div>
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
    </section>
  );
}
