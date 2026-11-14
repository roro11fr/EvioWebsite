import Hero         from '@/components/sections/Hero/Hero';
import Marquee      from '@/components/sections/Marquee/Marquee';
import About        from '@/components/sections/About/About';
import Services     from '@/components/sections/Services/Services';
import Work         from '@/components/sections/Work/Work';
import Process      from '@/components/sections/Process/Process';
import Testimonials from '@/components/sections/Testimonials/Testimonials';
import Contact      from '@/components/sections/Contact/Contact';
import type { Lang } from '@/lib/data';

export default function HomePage({ lang }: { lang: Lang }) {
  return (
    <>
      <Hero lang={lang} />
      <Marquee lang={lang} />
      <About lang={lang} />
      <Services lang={lang} />
      <Work lang={lang} />
      <Process lang={lang} />
      <Testimonials lang={lang} />
      <Contact lang={lang} />
    </>
  );
}
