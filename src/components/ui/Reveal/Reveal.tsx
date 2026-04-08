'use client';

import { useEffect, useRef, ReactNode, CSSProperties, ElementType } from 'react';
import styles from './Reveal.module.css';

interface RevealProps {
  children: ReactNode;
  delay?: 0 | 1 | 2 | 3 | 4 | 5;
  className?: string;
  as?: ElementType;
}

export default function Reveal({
  children,
  delay = 0,
  className = '',
  as: Tag = 'div',
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add(styles.visible);
          observer.unobserve(el);
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const delayStyle: CSSProperties = delay ? { transitionDelay: `${delay * 0.1}s` } : {};

  const props = {
    ref,
    className: `${styles.reveal} ${className}`,
    style: delayStyle,
  };

  return <Tag {...props}>{children}</Tag>;
}
