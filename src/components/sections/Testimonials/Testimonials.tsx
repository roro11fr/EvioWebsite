import Reveal from '@/components/ui/Reveal/Reveal';
import SectionLabel from '@/components/ui/SectionLabel/SectionLabel';
import { dictionaries, testimonials, type Lang } from '@/lib/data';
import styles from './Testimonials.module.css';

/** Hidden until real client testimonials are added in `src/lib/data.ts`. */
export default function Testimonials({ lang }: { lang: Lang }) {
  if (testimonials.length === 0) return null;
  const t = dictionaries[lang].testimonials;

  return (
    <section className={`${styles.testimonials} section`} id="testimonials">
      <div className="container">
        <Reveal>
          <SectionLabel>{t.label}</SectionLabel>
        </Reveal>
        <Reveal delay={1}>
          <p className={styles.intro}>{t.title}</p>
        </Reveal>
        <div className={styles.grid}>
          {testimonials.map((item, i) => (
            <Reveal key={item.name} delay={((i % 3) + 1) as 1 | 2 | 3} as="blockquote">
              <div className={styles.card}>
                <p className={styles.quote}>&ldquo;{item.quote[lang]}&rdquo;</p>
                <cite className={styles.cite}>
                  — {item.name}, {item.role[lang]}, {item.company}
                </cite>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
