import Reveal from '@/components/ui/Reveal/Reveal';
import SectionLabel from '@/components/ui/SectionLabel/SectionLabel';
import Button from '@/components/ui/Button/Button';
import { dictionaries, SERVICE_KEYS, serviceIcons, type Lang } from '@/lib/data';
import styles from './Services.module.css';

export default function Services({ lang }: { lang: Lang }) {
  const t = dictionaries[lang].services;

  return (
    <section className={`${styles.services} section`} id="services">
      <div className="container">
        <div className={styles.header}>
          <Reveal>
            <SectionLabel>{t.label}</SectionLabel>
          </Reveal>
          <Reveal delay={1}>
            <h2 className={styles.title}>
              {t.titleLine}<br /><em>{t.titleItalic}</em>
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className={styles.intro}>{t.intro}</p>
          </Reveal>
        </div>

        <div className={styles.grid}>
          {SERVICE_KEYS.map((key, i) => (
            <Reveal key={key} delay={(i % 6) as 0|1|2|3|4|5} as="article">
              <div className={styles.card}>
                <span className={styles.cardNumber}>{String(i + 1).padStart(2, '0')}</span>
                <span className={styles.cardIcon} aria-hidden="true">{serviceIcons[key]}</span>
                <h3 className={styles.cardTitle}>{t.items[key].title}</h3>
                <p className={styles.cardDesc}>{t.items[key].description}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className={styles.cta}>
          <Button href="#contact" variant="outline">{t.cta}</Button>
        </Reveal>
      </div>
    </section>
  );
}
