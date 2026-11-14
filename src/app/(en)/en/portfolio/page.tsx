import Work from '@/components/sections/Work/Work';
import { buildMetadata } from '@/components/layout/SiteShell';

export const metadata = buildMetadata('en', 'portfolio');

export default function Page() {
  return <Work lang="en" variant="page" />;
}
