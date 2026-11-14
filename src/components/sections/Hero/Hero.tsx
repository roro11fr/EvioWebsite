import Button from '@/components/ui/Button/Button';
import { dictionaries, type Lang } from '@/lib/data';
import styles from './Hero.module.css';

export default function Hero({ lang }: { lang: Lang }) {
  const t = dictionaries[lang].hero;
  // Doubled for a seamless CSS loop
  const reelWords = [...t.reel, ...t.reel];

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
          {t.eyebrow}
        </p>
        <h1 className={styles.title}>
          <span className={`${styles.titleLine} ${styles.animItem}`} style={{ animationDelay: '0.1s' }}>
            {t.titleLine}
          </span>
          <span className={`${styles.titleItalic} ${styles.animItem}`} style={{ animationDelay: '0.2s' }}>
            {t.titleItalic}
          </span>
        </h1>
        <p className={`${styles.sub} ${styles.animItem}`} style={{ animationDelay: '0.3s' }}>
          {t.sub}
        </p>
        <div className={`${styles.actions} ${styles.animItem}`} style={{ animationDelay: '0.4s' }}>
          <Button href="#work" variant="primary">{t.primary}</Button>
          <Button href="#contact" variant="ghost">{t.secondary}</Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <a href="#about" className={styles.scroll}>
        <span>{t.scroll}</span>
        <div className={styles.scrollLine} aria-hidden="true" />
      </a>
    </section>
  );
}
