import { dictionaries, SERVICE_KEYS, type Lang } from '@/lib/data';
import styles from './Marquee.module.css';

export default function Marquee({ lang }: { lang: Lang }) {
  const items = SERVICE_KEYS.map((k) => dictionaries[lang].services.items[k].title);
  // Duplicate for seamless loop
  const doubled = [...items, ...items];

  return (
    <div className={styles.marquee} aria-hidden="true">
      <div className={styles.track}>
        {doubled.map((item, i) => (
          <span key={i} className={styles.item}>
            {item}
            <span className={styles.dot}>◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
