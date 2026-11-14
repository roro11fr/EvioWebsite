import SiteShell, { buildMetadata } from '@/components/layout/SiteShell';

export const metadata = buildMetadata('en');

export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return <SiteShell lang="en">{children}</SiteShell>;
}
