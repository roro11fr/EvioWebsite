import SiteShell, { buildMetadata } from '@/components/layout/SiteShell';

export const metadata = buildMetadata('ro');

export default function RomanianLayout({ children }: { children: React.ReactNode }) {
  return <SiteShell lang="ro">{children}</SiteShell>;
}
