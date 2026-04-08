import Button from '@/components/ui/Button/Button';
import styles from './Hero.module.css';

const reelWords = [
  'PRODUCTION','MARKETING','STORYTELLING',
  'CINEMATIC','BRAND','CONTENT',
  'PRODUCTION','MARKETING','STORYTELLING',
  'CINEMATIC','BRAND','CONTENT',
];

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      {/* Background reel text — decorative, CSS animated */}
      <div className={styles.bg} aria-hidden="true">
        <div className={styles.reel}>
          <div className={styles.reelTrack}>
            {reelWords.map((word, i) => (
              <span key={i}>{word}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Content — CSS entry animations */}
      <div className={styles.content}>
        <p className={`${styles.eyebrow} ${styles.animItem}`} style={{ animationDelay: '0s' }}>
          Video &amp; Marketing Agency
        </p>
        <h1 className={styles.title}>
          <span className={`${styles.titleLine} ${styles.animItem}`} style={{ animationDelay: '0.1s' }}>
            We make
          </span>
          <span className={`${styles.titleItalic} ${styles.animItem}`} style={{ animationDelay: '0.2s' }}>
            brands move.
          </span>
        </h1>
        <p className={`${styles.sub} ${styles.animItem}`} style={{ animationDelay: '0.3s' }}>
          Cinematic video production and marketing campaigns
          <br />
          built to captivate, convert, and last.
        </p>
        <div className={`${styles.actions} ${styles.animItem}`} style={{ animationDelay: '0.4s' }}>
          <Button href="#work" variant="primary">See Our Work</Button>
          <Button href="#contact" variant="ghost">Get a Quote</Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scroll} aria-hidden="true">
        <span>Scroll</span>
        <div className={styles.scrollLine} />
      </div>
    </section>
  );
}
