import Work from '@/components/sections/Work/Work';
import { buildMetadata } from '@/components/layout/SiteShell';

export const metadata = buildMetadata('ro', 'portfolio');

export default function Page() {
  return <Work lang="ro" variant="page" />;
}
