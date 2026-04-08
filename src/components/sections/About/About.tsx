import Reveal from '@/components/ui/Reveal/Reveal';
import SectionLabel from '@/components/ui/SectionLabel/SectionLabel';
import Button from '@/components/ui/Button/Button';
import { stats } from '@/lib/data';
import styles from './About.module.css';

export default function About() {
  return (
    <section className={`${styles.about} section`} id="about">
      <div className="container">
        <div className={styles.grid}>
          {/* Left */}
          <div className={styles.left}>
            <Reveal>
              <SectionLabel>About Us</SectionLabel>
            </Reveal>
            <Reveal delay={1}>
              <h2 className={styles.title}>
                Stories worth<br /><em>telling.</em>
              </h2>
            </Reveal>
            <div className={styles.stats}>
              {stats.map((stat, i) => (
                <Reveal key={stat.label} delay={(i + 2) as 2 | 3 | 4}>
                  <div className={styles.stat}>
                    <span className={styles.statNumber}>{stat.number}</span>
                    <span className={styles.statLabel}>{stat.label}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className={styles.right}>
            <Reveal delay={1}>
              <p className={styles.body}>
                Evio Production is a full-service video and marketing agency
                obsessed with one thing: making your brand impossible to ignore.
              </p>
            </Reveal>
            <Reveal delay={2}>
              <p className={styles.body}>
                From concept to final cut, we combine cinematic craft with
                strategic thinking — creating content that doesn&apos;t just look
                good, but actually works.
              </p>
            </Reveal>
            <Reveal delay={3}>
              <Button href="#contact" variant="outline">Work With Us</Button>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
