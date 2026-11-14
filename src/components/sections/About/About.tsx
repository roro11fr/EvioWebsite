import Reveal from '@/components/ui/Reveal/Reveal';
import SectionLabel from '@/components/ui/SectionLabel/SectionLabel';
import Button from '@/components/ui/Button/Button';
import { dictionaries, type Lang } from '@/lib/data';
import styles from './About.module.css';

export default function About({ lang }: { lang: Lang }) {
  const t = dictionaries[lang].about;

  return (
    <section className={`${styles.about} section`} id="about">
      <div className="container">
        <div className={styles.grid}>
          {/* Left */}
          <div className={styles.left}>
            <Reveal>
              <SectionLabel>{t.label}</SectionLabel>
            </Reveal>
            <Reveal delay={1}>
              <h2 className={styles.title}>
                {t.titleLine}<br /><em>{t.titleItalic}</em>
              </h2>
            </Reveal>
            {/* Three pillars. Swap for `t.stats` once the numbers are confirmed. */}
            <ul className={styles.pillars}>
              {t.pillars.map((p, i) => (
                <Reveal key={p.title} delay={(i + 2) as 2 | 3 | 4} as="li">
                  <div className={styles.pillar}>
                    <span className={styles.pillarTitle}>{p.title}</span>
                    <span className={styles.pillarText}>{p.text}</span>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>

          {/* Right */}
          <div className={styles.right}>
            {t.body.map((para, i) => (
              <Reveal key={i} delay={(i + 1) as 1 | 2}>
                <p className={styles.body}>{para}</p>
              </Reveal>
            ))}
            <Reveal delay={3}>
              <Button href="#contact" variant="outline">{t.button}</Button>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
