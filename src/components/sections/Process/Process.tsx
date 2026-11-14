import Reveal from '@/components/ui/Reveal/Reveal';
import SectionLabel from '@/components/ui/SectionLabel/SectionLabel';
import { dictionaries, type Lang } from '@/lib/data';
import styles from './Process.module.css';

export default function Process({ lang }: { lang: Lang }) {
  const t = dictionaries[lang].process;

  return (
    <section className={`${styles.process} section`} id="process">
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
        </div>

        <ol className={styles.steps}>
          {t.steps.map((step, i) => (
            <Reveal key={step.title} delay={(i % 5) as 0|1|2|3|4} as="li">
              <div className={styles.step}>
                <div className={styles.stepNum} aria-hidden="true">{String(i + 1).padStart(2, '0')}</div>
                <div className={styles.stepContent}>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
