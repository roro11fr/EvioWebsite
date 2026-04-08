import { marqueeItems } from '@/lib/data';
import styles from './Marquee.module.css';

// Duplicate for seamless loop
const doubled = [...marqueeItems, ...marqueeItems];

export default function Marquee() {
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
