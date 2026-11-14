import { dictionaries, homePath, INSTAGRAM_URL, type Lang } from '@/lib/data';
import CurrentYear from './CurrentYear';
import styles from './Footer.module.css';

export default function Footer({ lang }: { lang: Lang }) {
  const t = dictionaries[lang].footer;
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          {/* eslint-disable-next-line @next/next/no-img-element -- small static logo */}
          <img
            src="/brand/evio-logo.png"
            alt="EVIO Production"
            width={377}
            height={458}
            className={styles.logo}
          />
          <div className={styles.taglines}>
            <p className={styles.tagline}>{t.tagline}</p>
            <p className={styles.sub}>{t.sub}</p>
          </div>
        </div>
        <div className={styles.bottom}>
          <p className={styles.copy}>
            &copy; <CurrentYear /> EVIO Production. {t.rights}
          </p>
          <div className={styles.links}>
            <a href={`${homePath[lang]}#contact`} className={styles.social}>
              {t.contact}
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.social}
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
