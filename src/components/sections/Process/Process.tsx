import Reveal from '@/components/ui/Reveal/Reveal';
import SectionLabel from '@/components/ui/SectionLabel/SectionLabel';
import { processSteps } from '@/lib/data';
import styles from './Process.module.css';

export default function Process() {
  return (
    <section className={`${styles.process} section`} id="process">
      <div className="container">
        <div className={styles.header}>
          <Reveal>
            <SectionLabel>How We Work</SectionLabel>
          </Reveal>
          <Reveal delay={1}>
            <h2 className={styles.title}>
              Our<br /><em>process.</em>
            </h2>
          </Reveal>
        </div>

        <div className={styles.steps}>
          {processSteps.map((step, i) => (
            <Reveal key={step.number} delay={(i % 5) as 0|1|2|3|4}>
              <div className={styles.step}>
                <div className={styles.stepNum}>{step.number}</div>
                <div className={styles.stepContent}>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
