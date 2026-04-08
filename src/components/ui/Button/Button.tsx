import Link from 'next/link';
import styles from './Button.module.css';

type Variant = 'primary' | 'ghost' | 'outline';

interface ButtonProps {
  href: string;
  variant?: Variant;
  fullWidth?: boolean;
  external?: boolean;
  children: React.ReactNode;
  className?: string;
}

export default function Button({
  href,
  variant = 'primary',
  fullWidth = false,
  external = false,
  children,
  className = '',
}: ButtonProps) {
  const cls = [
    styles.btn,
    styles[variant],
    fullWidth ? styles.full : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}
