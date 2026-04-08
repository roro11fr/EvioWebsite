import Reveal from '@/components/ui/Reveal/Reveal';
import SectionLabel from '@/components/ui/SectionLabel/SectionLabel';
import { testimonials } from '@/lib/data';
import styles from './Testimonials.module.css';

export default function Testimonials() {
  return (
    <section className={`${styles.testimonials} section`}>
      <div className="container">
        <Reveal>
          <SectionLabel>Client Words</SectionLabel>
        </Reveal>
        <div className={styles.grid}>
          {testimonials.map((t, i) => (
            <Reveal key={t.author} delay={(i + 1) as 1|2|3} as="blockquote">
              <div className={styles.card}>
                <p className={styles.quote}>&ldquo;{t.quote}&rdquo;</p>
                <cite className={styles.cite}>
                  — {t.author}, {t.role}
                </cite>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
