// ─────────────────────────────────────────────────────────────
// All site content (RO + EN) — single source of truth.
// Romanian is the primary language (served at "/"), English at "/en".
// ─────────────────────────────────────────────────────────────

export type Lang = 'ro' | 'en';

export const LANGS: Lang[] = ['ro', 'en'];

/** Home path for each language. */
export const homePath: Record<Lang, string> = { ro: '/', en: '/en' };

/** Full portfolio page for each language. */
export const portfolioPath: Record<Lang, string> = { ro: '/portofoliu', en: '/en/portfolio' };

/** How many projects the home page shows before the "view full portfolio" button. */
export const FEATURED_COUNT = 6;

// ── SHARED (language-neutral) ───────────────────────────────

export const INSTAGRAM_URL = 'https://www.instagram.com/evioproduction/';

/** Service keys — shared by the Services grid, the marquee and the contact form. */
export type ServiceKey = 'brand-films' | 'social' | 'ads' | 'events' | 'motion' | 'campaigns';

export const SERVICE_KEYS: ServiceKey[] = ['brand-films', 'social', 'ads', 'events', 'motion', 'campaigns'];

export const serviceIcons: Record<ServiceKey, string> = {
  'brand-films': '▶',
  social: '◈',
  ads: '◉',
  events: '◈',
  motion: '◇',
  campaigns: '▣',
};

// ── PORTFOLIO ───────────────────────────────────────────────
// Client names stay the same in both languages.
// `embed`: a YouTube playlist (`list`) or a single video (`video`).
// `thumb`: a video ID used for the card image (first clip of the playlist).
// `poster`: optional custom cover image in /public/portfolio (e.g. 'zada.jpg').
//           When set it replaces the YouTube thumbnail — use it for any card
//           whose automatic YouTube preview doesn't look good.
// `vertical`: the material is in vertical (9:16) format (judged by the first clip).

export interface Client {
  name: string;
  url: string;
  embed: { list: string } | { video: string };
  thumb: string;
  poster?: string;
  vertical?: boolean;
}

export const clients: Client[] = [
  {
    name: 'ZADA',
    url: 'https://www.youtube.com/playlist?list=PLYAkMcWaoYb4',
    embed: { list: 'PLYAkMcWaoYb4' },
    thumb: 'PVnhIJ2rRMY',
    poster: 'zada.jpg',
    vertical: true,
  },
  {
    name: 'RK-MED',
    url: 'https://www.youtube.com/playlist?list=PLGFqs1U5W7IM',
    embed: { list: 'PLGFqs1U5W7IM' },
    thumb: 'qUq3zmZ9t5Q',
    poster: 'rk-med.jpg',
    vertical: true,
  },
  {
    name: 'JADENT',
    url: 'https://www.youtube.com/@jadentdentalclinic2291/shorts',
    // Shorts playlist of the JADENT channel (UUSH + channel ID).
    embed: { list: 'UUSHGSjn7aSZ1wMEBHyZ5uNOxQ' },
    thumb: '3RQDkO-u4Qc',
    poster: 'jadent.jpg',
    vertical: true,
  },
  {
    name: 'Casa Meseriașilor',
    url: 'https://www.youtube.com/playlist?list=PLKHIP7sj5TNc',
    embed: { list: 'PLKHIP7sj5TNc' },
    thumb: 'eS3bSBPvprg',
    poster: 'casa-meseriasilor.jpg',
    vertical: true,
  },
  {
    name: 'Fereastra ADF',
    url: 'https://www.youtube.com/playlist?list=PLBvZTh2AhiAY',
    embed: { list: 'PLBvZTh2AhiAY' },
    thumb: 'nWXbpoCfx1k',
    poster: 'fereastra-adf.jpg',
    vertical: true,
  },
  {
    name: 'Zone47',
    url: 'https://www.youtube.com/playlist?list=PLF5KMB8TmPUo',
    embed: { list: 'PLF5KMB8TmPUo' },
    thumb: 'xp4-Ng5hfkc',
    poster: 'zone47.jpg',
    vertical: true,
  },
  {
    name: 'Hanul Bucovinei',
    url: 'https://www.youtube.com/playlist?list=PLKK5slaX8n3w',
    embed: { list: 'PLKK5slaX8n3w' },
    thumb: '7urut_ZZPik',
    poster: 'hanul-bucovinei.jpg',
    vertical: true,
  },
  {
    name: 'Expert Music',
    url: 'https://youtu.be/VGEnpmKRWsM',
    embed: { video: 'VGEnpmKRWsM' },
    thumb: 'VGEnpmKRWsM',
    poster: 'expert-music.jpg',
  },
  {
    name: 'Peak Gaming',
    url: 'https://youtube.com/shorts/vsulGYjX-vQ',
    embed: { video: 'vsulGYjX-vQ' },
    thumb: 'vsulGYjX-vQ',
    poster: 'peak-gaming.jpg',
    vertical: true,
  },
  {
    name: 'Blues Festival',
    url: 'https://www.youtube.com/playlist?list=PLeUA_inRrAms',
    embed: { list: 'PLeUA_inRrAms' },
    thumb: 'niu-qh6K8bQ',
    poster: 'blues-festival.jpg',
    vertical: true,
  },
  {
    name: 'Imobiliare Optimizate – 8imo',
    url: 'https://www.youtube.com/playlist?list=PLIrbpSfV7Lh8',
    embed: { list: 'PLIrbpSfV7Lh8' },
    thumb: 'D9QgwAaLWCA',
    poster: '8imo.jpg',
    vertical: true,
  },
  {
    name: 'ZENMAN',
    url: 'https://www.youtube.com/playlist?list=PLUb3bqmuKu4A',
    embed: { list: 'PLUb3bqmuKu4A' },
    thumb: 'X_aTIkxN7JU',
    poster: 'zenman.jpg',
  },
  {
    name: 'BUSYMAN',
    url: 'https://www.youtube.com/playlist?list=PLDJ70bGNlrcg',
    embed: { list: 'PLDJ70bGNlrcg' },
    thumb: 'NtttFE48nUY',
    poster: 'busyman.jpg',
  },
  {
    name: 'DAR DAUNE',
    url: 'https://www.youtube.com/playlist?list=PLERUHVkNATy4',
    embed: { list: 'PLERUHVkNATy4' },
    thumb: 'uF5f_sWRPLA',
    poster: 'dar-daune.jpg',
    vertical: true,
  },
  {
    name: 'Hotel Continental',
    url: 'https://youtube.com/shorts/vcOPNYaNENg',
    embed: { video: 'vcOPNYaNENg' },
    thumb: 'vcOPNYaNENg',
    poster: 'hotel-continental.jpg',
    vertical: true,
  },
];

// ── TESTIMONIALS ────────────────────────────────────────────
// The section stays hidden until real client testimonials are added here.
export interface Testimonial {
  name: string;
  role: Record<Lang, string>;
  company: string;
  quote: Record<Lang, string>;
}

export const testimonials: Testimonial[] = [];

// ── LOCALIZED TEXT ──────────────────────────────────────────

export interface ServiceText {
  title: string;
  description: string;
}

export interface Step {
  title: string;
  description: string;
}

export interface Pillar {
  title: string;
  text: string;
}

export interface Dictionary {
  meta: { title: string; description: string };
  nav: {
    about: string;
    services: string;
    work: string;
    process: string;
    cta: string;
    toggle: string;
    toggleClose: string;
    langLabel: string;
  };
  hero: {
    eyebrow: string;
    titleLine: string;
    titleItalic: string;
    sub: string;
    primary: string;
    secondary: string;
    scroll: string;
    reel: string[];
  };
  about: {
    label: string;
    titleLine: string;
    titleItalic: string;
    body: string[];
    button: string;
    pillars: Pillar[];
    /** Alternative to the pillars — use only after the numbers are confirmed. */
    stats: { number: string; label: string }[];
  };
  services: {
    label: string;
    titleLine: string;
    titleItalic: string;
    intro: string;
    items: Record<ServiceKey, ServiceText>;
    cta: string;
  };
  work: {
    label: string;
    titleLine: string;
    titleItalic: string;
    intro: string;
    cardButton: string;
    playlistLink: string;
    logosLabel: string;
    close: string;
    viewAll: string;
    backHome: string;
    pageTitle: string;
    pageDescription: string;
  };
  process: {
    label: string;
    titleLine: string;
    titleItalic: string;
    steps: Step[];
  };
  testimonials: { label: string; title: string };
  contact: {
    label: string;
    titleLine: string;
    titleItalic: string;
    intro: string;
    fields: {
      name: string;
      email: string;
      phone: string;
      company: string;
      optional: string;
      service: string;
      servicePlaceholder: string;
      serviceOther: string;
      message: string;
      messagePlaceholder: string;
    };
    submit: string;
    sending: string;
    success: string;
    error: string;
    required: string;
    invalidEmail: string;
  };
  footer: {
    tagline: string;
    sub: string;
    rights: string;
    contact: string;
  };
}

const ro: Dictionary = {
  meta: {
    title: 'EVIO Production | Producție video și marketing digital',
    description:
      'Producție video, conținut pentru rețelele sociale și campanii de marketing pentru branduri care vor să fie văzute și ținute minte.',
  },
  nav: {
    about: 'Despre noi',
    services: 'Servicii',
    work: 'Portofoliu',
    process: 'Cum lucrăm',
    cta: 'Hai să vorbim',
    toggle: 'Deschide meniul',
    toggleClose: 'Închide meniul',
    langLabel: 'Limba site-ului',
  },
  hero: {
    eyebrow: 'Agenție de producție video și marketing',
    titleLine: 'Facem brandurile',
    titleItalic: 'memorabile.',
    sub: 'Producție video cinematică și campanii de marketing create pentru ca brandul tău să fie văzut, simțit și ținut minte.',
    primary: 'Vezi proiectele',
    secondary: 'Hai să vorbim',
    scroll: 'Descoperă mai mult',
    reel: ['PRODUCȚIE', 'MARKETING', 'POVEȘTI', 'CINEMATIC', 'BRAND', 'CONȚINUT'],
  },
  about: {
    label: 'Despre noi',
    titleLine: 'Merită să fii',
    titleItalic: 'relevant!',
    body: [
      'EVIO Production este o agenție de conținut video și marketing digital creată pentru branduri care vor mai mult decât conținut. Construim povești cinematice, campanii și experiențe vizuale care atrag atenția, transmit emoție și rămân în mintea oamenilor.',
      'De la idee până la montajul final, combinăm strategia, emoția și calitatea producției pentru a crea materiale care nu doar arată bine, ci construiesc încredere, interes și rezultate.',
    ],
    button: 'Hai să lucrăm împreună',
    pillars: [
      { title: 'Strategie', text: 'Gândită în jurul obiectivelor tale.' },
      { title: 'Producție', text: 'Creată cu atenție la fiecare detaliu.' },
      { title: 'Campanii', text: 'Concepute să atragă atenția.' },
    ],
    stats: [
      { number: '3000+', label: 'materiale vizuale realizate' },
      { number: '5+', label: 'ani de activitate creativă' },
      { number: '20+', label: 'branduri și afaceri' },
    ],
  },
  services: {
    label: 'Ce facem',
    titleLine: 'Producție care mișcă',
    titleItalic: 'branduri.',
    intro:
      'De la videoclipuri cinematice la conținut pentru rețelele sociale și campanii integrate, creăm materiale vizuale gândite să atragă atenția, să transmită emoție și să genereze rezultate.',
    items: {
      'brand-films': {
        title: 'Filme de brand',
        description:
          'Videoclipuri cinematice care surprind identitatea brandului tău și lasă o impresie memorabilă în mintea publicului.',
      },
      social: {
        title: 'Conținut pentru rețelele sociale',
        description:
          'Conținut video și foto creat pentru platformele sociale, gândit să oprească derularea și să genereze interacțiuni reale.',
      },
      ads: {
        title: 'Materiale pentru reclame',
        description:
          'Materiale vizuale cu impact, concepute pentru campanii plătite, lansări și promoții, cu mesaje care încurajează publicul să facă următorul pas.',
      },
      events: {
        title: 'Filmări de eveniment',
        description:
          'Filmări profesionale pentru evenimente, lansări și conferințe, surprinse cu energie, precizie și atenție la detalii.',
      },
      motion: {
        title: 'Grafică animată',
        description:
          'Animații, titluri și elemente vizuale de brand care adaugă claritate, dinamism și impact conținutului tău.',
      },
      campaigns: {
        title: 'Campanii de marketing',
        description:
          'Concepte creative și execuție de la început până la final pentru campanii construite în jurul obiectivelor reale ale afacerii tale.',
      },
    },
    cta: 'Hai să vorbim despre proiectul tău',
  },
  work: {
    label: 'Portofoliu',
    titleLine: 'Proiecte care vorbesc',
    titleItalic: 'despre noi.',
    intro:
      'Descoperă o selecție de materiale realizate pentru brandurile cu care lucrăm. Fiecare colaborare pornește de la o poveste și un obiectiv diferit.',
    cardButton: 'Vezi proiectele',
    playlistLink: 'Vezi selecția pe YouTube',
    logosLabel: 'Branduri cu care am lucrat',
    close: 'Închide',
    viewAll: 'Vezi portofoliul',
    backHome: 'Înapoi la pagina principală',
    pageTitle: 'Portofoliu | EVIO Production',
    pageDescription:
      'Selecție de materiale video realizate de EVIO Production pentru brandurile cu care lucrăm: filme de brand, conținut social media și campanii.',
  },
  process: {
    label: 'Cum lucrăm',
    titleLine: 'De la idee',
    titleItalic: 'la impact.',
    steps: [
      {
        title: 'Descoperire și strategie',
        description:
          'Începem prin a înțelege afacerea, publicul și obiectivele tale. Stabilim ce vrem să comunicăm și ce rol va avea conținutul în promovarea brandului.',
      },
      {
        title: 'Concept și pregătire',
        description:
          'Construim ideea, scriem scenariul și pregătim filmarea. Stabilim mesajele, cadrele și detaliile de producție înainte să pornim camera.',
      },
      {
        title: 'Producție',
        description:
          'Punem planul în practică prin filmare, lumină și coordonare atentă. Alegem abordarea potrivită pentru fiecare proiect și surprindem cadrele care susțin povestea.',
      },
      {
        title: 'Montaj și postproducție',
        description:
          'Dăm formă materialului prin montaj, culoare, sunet și elemente grafice. Aici construim ritmul și pregătim versiunile potrivite pentru fiecare canal.',
      },
      {
        title: 'Livrare și pașii următori',
        description:
          'Livrăm materialele în formatele agreate. În colaborările care includ promovare, continuăm cu publicarea, campaniile și ajustările stabilite împreună.',
      },
    ],
  },
  testimonials: {
    label: 'Ce spun clienții',
    title: 'Colaborări povestite de cei cu care lucrăm.',
  },
  contact: {
    label: 'Hai să vorbim',
    titleLine: 'Hai să creăm ceva',
    titleItalic: 'memorabil.',
    intro:
      'Spune-ne câteva lucruri despre afacerea ta și ce ai vrea să construim împreună. Putem începe cu un proiect sau cu o colaborare pe termen lung.',
    fields: {
      name: 'Numele tău',
      email: 'Adresa de email',
      phone: 'Telefon',
      company: 'Companie',
      optional: 'opțional',
      service: 'Ce serviciu te interesează?',
      servicePlaceholder: 'Alege un serviciu',
      serviceOther: 'Altceva / Nu sunt sigur încă',
      message: 'Povestește-ne despre proiectul tău',
      messagePlaceholder: 'Ce vrei să promovăm și ce obiectiv ai?',
    },
    submit: 'Trimite mesajul',
    sending: 'Se trimite…',
    success: 'Mulțumim! Mesajul tău a fost trimis. Revenim către tine cât mai curând.',
    error: 'Mesajul nu a putut fi trimis. Te rugăm să încerci din nou.',
    required: 'Te rugăm să completezi acest câmp.',
    invalidEmail: 'Introdu o adresă de email validă.',
  },
  footer: {
    tagline: 'Facem brandurile memorabile.',
    sub: 'Producție video și marketing digital.',
    rights: 'Toate drepturile rezervate.',
    contact: 'Contact',
  },
};

const en: Dictionary = {
  meta: {
    title: 'EVIO Production | Video Production & Digital Marketing',
    description:
      'Video production, social media content, and marketing campaigns for brands that want to be seen and remembered.',
  },
  nav: {
    about: 'About us',
    services: 'Services',
    work: 'Our work',
    process: 'How we work',
    cta: 'Let’s talk',
    toggle: 'Open menu',
    toggleClose: 'Close menu',
    langLabel: 'Site language',
  },
  hero: {
    eyebrow: 'Video Production & Marketing Agency',
    titleLine: 'We make brands',
    titleItalic: 'unforgettable.',
    sub: 'Cinematic video production and marketing campaigns built to make your brand seen, felt, and remembered.',
    primary: 'View our work',
    secondary: 'Let’s talk',
    scroll: 'Explore more',
    reel: ['PRODUCTION', 'MARKETING', 'STORYTELLING', 'CINEMATIC', 'BRAND', 'CONTENT'],
  },
  about: {
    label: 'About us',
    titleLine: 'Your brand',
    titleItalic: 'deserves to matter.',
    body: [
      'EVIO Production is a video content and digital marketing agency for brands that want more from their content. We create cinematic stories, campaigns, and visual experiences that capture attention, connect with people, and stay in their minds.',
      'From the first idea to the final edit, we bring together strategy, emotion, and production quality to create content that looks good and builds trust, interest, and results.',
    ],
    button: 'Work with us',
    pillars: [
      { title: 'Strategy', text: 'Built around your goals.' },
      { title: 'Production', text: 'Crafted with cinematic detail.' },
      { title: 'Campaigns', text: 'Made to attract attention.' },
    ],
    stats: [
      { number: '3000+', label: 'visual assets created' },
      { number: '5+', label: 'years of creative work' },
      { number: '20+', label: 'brands & businesses' },
    ],
  },
  services: {
    label: 'What we do',
    titleLine: 'Production that',
    titleItalic: 'moves brands.',
    intro:
      'From cinematic videos to social media content and integrated campaigns, we create visuals designed to capture attention, connect with people, and deliver results.',
    items: {
      'brand-films': {
        title: 'Brand films',
        description:
          'Cinematic videos that capture your brand’s identity and leave a lasting impression on your audience.',
      },
      social: {
        title: 'Social media content',
        description:
          'Video and photography created for social platforms, designed to stop the scroll and spark genuine engagement.',
      },
      ads: {
        title: 'Ad creative',
        description:
          'Compelling visuals for paid campaigns, launches, and promotions, with messages that encourage your audience to take the next step.',
      },
      events: {
        title: 'Event coverage',
        description:
          'Professional filming for events, launches, and conferences, capturing the energy of each occasion with precision and attention to detail.',
      },
      motion: {
        title: 'Motion graphics',
        description:
          'Animations, titles, and branded visual elements that bring clarity, movement, and impact to your content.',
      },
      campaigns: {
        title: 'Marketing campaigns',
        description:
          'Creative concepts and execution from start to finish for campaigns built around your business goals.',
      },
    },
    cta: 'Let’s talk about your project',
  },
  work: {
    label: 'Our work',
    titleLine: 'Work that',
    titleItalic: 'speaks for us.',
    intro:
      'Explore a selection of work created for the brands we work with. Every collaboration begins with a different story and a different goal.',
    cardButton: 'View the work',
    playlistLink: 'Watch the selection on YouTube',
    logosLabel: 'Brands we’ve worked with',
    close: 'Close',
    viewAll: 'View full portfolio',
    backHome: 'Back to home',
    pageTitle: 'Portfolio | EVIO Production',
    pageDescription:
      'A selection of video work by EVIO Production for the brands we work with: brand films, social media content, and campaigns.',
  },
  process: {
    label: 'How we work',
    titleLine: 'From idea',
    titleItalic: 'to impact.',
    steps: [
      {
        title: 'Discovery & strategy',
        description:
          'We start by understanding your business, audience, and goals. We define what we want to communicate and how the content will support your brand.',
      },
      {
        title: 'Creative development',
        description:
          'We develop the concept, write the script, and plan the shoot. We agree on the messages, shots, and production details before the cameras start rolling.',
      },
      {
        title: 'Production',
        description:
          'We bring the plan to life through filming, lighting, and careful direction. We adapt our approach to each project and capture the shots that tell the story.',
      },
      {
        title: 'Post-production',
        description:
          'We shape the footage through editing, colour grading, sound, and graphics. This is where we build the pace and prepare the right versions for each channel.',
      },
      {
        title: 'Delivery & next steps',
        description:
          'We deliver the content in the agreed formats. For projects that include promotion, we continue with publishing, campaigns, and the adjustments we agree on together.',
      },
    ],
  },
  testimonials: {
    label: 'Client feedback',
    title: 'Hear from the people we work with.',
  },
  contact: {
    label: 'Get in touch',
    titleLine: 'Let’s create something',
    titleItalic: 'memorable.',
    intro:
      'Tell us about your business and what you’d like us to create together. We can start with a single project or a long-term collaboration.',
    fields: {
      name: 'Your name',
      email: 'Email address',
      phone: 'Phone number',
      company: 'Company',
      optional: 'optional',
      service: 'Which service are you interested in?',
      servicePlaceholder: 'Select a service',
      serviceOther: 'Other / Not sure yet',
      message: 'Tell us about your project',
      messagePlaceholder: 'What would you like to promote, and what is your goal?',
    },
    submit: 'Send message',
    sending: 'Sending…',
    success: 'Thank you! Your message has been sent. We’ll get back to you as soon as possible.',
    error: 'Your message could not be sent. Please try again.',
    required: 'Please complete this field.',
    invalidEmail: 'Please enter a valid email address.',
  },
  footer: {
    tagline: 'We make brands unforgettable.',
    sub: 'Video production and digital marketing.',
    rights: 'All rights reserved.',
    contact: 'Contact',
  },
};

export const dictionaries: Record<Lang, Dictionary> = { ro, en };
