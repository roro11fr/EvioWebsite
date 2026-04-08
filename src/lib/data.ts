// ─────────────────────────────────────────────────────────────
// All static site data — single source of truth
// ─────────────────────────────────────────────────────────────

export interface Service {
  number: string;
  icon: string;
  title: string;
  description: string;
}

export interface WorkItem {
  id: number;
  category: string;
  title: string;
  youtubeId: string;
  wide?: boolean;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

export interface Stat {
  number: string;
  label: string;
}

// ── SERVICES ────────────────────────────────────────────────
export const services: Service[] = [
  {
    number: '01',
    icon: '▶',
    title: 'Brand Films',
    description:
      "Cinematic storytelling that captures your brand's essence and leaves a lasting impression on your audience.",
  },
  {
    number: '02',
    icon: '◈',
    title: 'Social Content',
    description:
      'Platform-native video and photo content designed to stop the scroll and drive real engagement.',
  },
  {
    number: '03',
    icon: '◉',
    title: 'Commercials',
    description:
      'High-production TV and digital spots that communicate your value in seconds and convert viewers into customers.',
  },
  {
    number: '04',
    icon: '◈',
    title: 'Event Coverage',
    description:
      'Live events, launches, and conferences captured with multi-camera precision and editorial flair.',
  },
  {
    number: '05',
    icon: '◇',
    title: 'Motion Graphics',
    description:
      'Animated visuals, title sequences, and brand animations that bring your identity to life on screen.',
  },
  {
    number: '06',
    icon: '▣',
    title: 'Marketing Campaigns',
    description:
      'End-to-end campaign strategy, creative production, and distribution built around measurable results.',
  },
];

// ── WORK ITEMS ───────────────────────────────────────────────
export const workItems: WorkItem[] = [
  {
    id: 1,
    category: 'Brand Film',
    title: 'Lamine Yamal — DNA Campaign',
    youtubeId: 'SvaWq2pb_zQ',
  },
  {
    id: 2,
    category: 'Commercial',
    title: 'Rayan Cherki — Remix Spot',
    youtubeId: 'vY2CoYjLcVg',
  },
  {
    id: 3,
    category: 'Social Content',
    title: 'Kylian Mbappé — Now Or Never',
    youtubeId: 'ZJdbVnV2wbs',
    wide: true,
  },
  {
    id: 4,
    category: 'Event Coverage',
    title: 'Mbappé 2025/26 — Season Highlights',
    youtubeId: 'qNQc_yqJ-BY',
  },
  {
    id: 5,
    category: 'Motion Graphics',
    title: 'Erling Haaland — The Viking Edit',
    youtubeId: 'yHiEJDMng60',
  },
];

// ── PROCESS STEPS ────────────────────────────────────────────
export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Discovery & Strategy',
    description:
      'We learn your brand, goals, and audience. Every project starts with a strategic brief that aligns creative direction with business outcomes.',
  },
  {
    number: '02',
    title: 'Creative Development',
    description:
      'Concept, scripting, storyboarding, and pre-production. We develop the creative vision before a single camera rolls.',
  },
  {
    number: '03',
    title: 'Production',
    description:
      'Professional multi-camera shoots, lighting design, and direction — executed with cinematic precision on every project, regardless of scale.',
  },
  {
    number: '04',
    title: 'Post-Production',
    description:
      'Editing, color grading, sound design, and motion graphics — the craft that transforms footage into something truly memorable.',
  },
  {
    number: '05',
    title: 'Delivery & Beyond',
    description:
      'Final exports optimized for every platform. We stay on to support campaigns, track performance, and iterate where needed.',
  },
];

// ── TESTIMONIALS ─────────────────────────────────────────────
export const testimonials: Testimonial[] = [
  {
    quote:
      'Evio Production completely transformed how our brand appears on screen. The quality exceeded every expectation.',
    author: 'Sofia R.',
    role: 'Marketing Director',
  },
  {
    quote:
      'From concept to delivery, the team was professional, creative, and deeply invested in our success. Highly recommend.',
    author: 'Marco L.',
    role: 'Founder & CEO',
  },
  {
    quote:
      'The campaign video they made for us went viral. Results speak for themselves — working with them again.',
    author: 'Alina M.',
    role: 'Brand Manager',
  },
];

// ── STATS ────────────────────────────────────────────────────
export const stats: Stat[] = [
  { number: '200+', label: 'Projects Delivered' },
  { number: '5+', label: 'Years in Production' },
  { number: '50+', label: 'Happy Clients' },
];

// ── NAV LINKS ────────────────────────────────────────────────
export const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#work', label: 'Work' },
  { href: '#process', label: 'Process' },
];

// ── MARQUEE ITEMS ────────────────────────────────────────────
export const marqueeItems = [
  'Brand Films',
  'Social Content',
  'Commercials',
  'Event Coverage',
  'Motion Graphics',
  'Campaigns',
];

// ── FORM OPTIONS ─────────────────────────────────────────────
export const serviceOptions = [
  { value: 'brand-film', label: 'Brand Film' },
  { value: 'social', label: 'Social Content' },
  { value: 'commercial', label: 'Commercial' },
  { value: 'event', label: 'Event Coverage' },
  { value: 'motion', label: 'Motion Graphics' },
  { value: 'campaign', label: 'Full Campaign' },
  { value: 'other', label: 'Other' },
];
