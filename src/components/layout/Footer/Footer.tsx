import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <span className={styles.logo}>
            EVIO<span>.</span>
          </span>
          <p className={styles.tagline}>We make brands move.</p>
        </div>
        <div className={styles.bottom}>
          <p className={styles.copy}>
            &copy; 2026 Evio Production. All rights reserved.
          </p>
          <a
            href="https://www.instagram.com/evioproduction/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.social}
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}
