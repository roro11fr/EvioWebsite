import Reveal from '@/components/ui/Reveal/Reveal';
import SectionLabel from '@/components/ui/SectionLabel/SectionLabel';
import { services } from '@/lib/data';
import styles from './Services.module.css';

export default function Services() {
  return (
    <section className={`${styles.services} section`} id="services">
      <div className="container">
        <div className={styles.header}>
          <Reveal>
            <SectionLabel>What We Do</SectionLabel>
          </Reveal>
          <Reveal delay={1}>
            <h2 className={styles.title}>
              Full-spectrum<br /><em>production.</em>
            </h2>
          </Reveal>
        </div>

        <div className={styles.grid}>
          {services.map((service, i) => (
            <Reveal key={service.number} delay={(i % 6) as 0|1|2|3|4|5} as="article">
              <div className={styles.card}>
                <span className={styles.cardNumber}>{service.number}</span>
                <span className={styles.cardIcon}>{service.icon}</span>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardDesc}>{service.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
