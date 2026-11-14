import { NextResponse } from 'next/server';
import { dictionaries, SERVICE_KEYS, type Lang } from '@/lib/data';

// Sends contact-form submissions by email through Resend (https://resend.com).
// Required environment variables (set them in Vercel → Settings → Environment Variables):
//   RESEND_API_KEY      — API key from Resend
//   CONTACT_TO_EMAIL    — inbox that receives the messages
//   CONTACT_FROM_EMAIL  — sender on a domain verified in Resend, e.g. "EVIO Website <site@evioproduction.ro>"
// Without them the route answers 503 and the form shows its error message,
// so a visitor never sees "sent" for a message that went nowhere.

export const runtime = 'nodejs';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const LIMITS = { name: 120, email: 200, phone: 40, company: 120, message: 5000 };

function clean(value: unknown, max: number): string {
  return typeof value === 'string' ? value.trim().slice(0, max) : '';
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'invalid_json' }, { status: 400 });
  }

  // Honeypot filled in → pretend success, send nothing.
  if (clean(body.website, 200)) return NextResponse.json({ ok: true });

  const name    = clean(body.name, LIMITS.name);
  const email   = clean(body.email, LIMITS.email);
  const phone   = clean(body.phone, LIMITS.phone);
  const company = clean(body.company, LIMITS.company);
  const message = clean(body.message, LIMITS.message);
  const service = clean(body.service, 40);
  const lang: Lang = body.lang === 'en' ? 'en' : 'ro';

  const validService = service === 'other' || (SERVICE_KEYS as string[]).includes(service);
  if (!name || !EMAIL_RE.test(email) || !message || !validService) {
    return NextResponse.json({ error: 'invalid_fields' }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to     = process.env.CONTACT_TO_EMAIL;
  const from   = process.env.CONTACT_FROM_EMAIL;
  if (!apiKey || !to || !from) {
    console.error('[contact] Missing RESEND_API_KEY, CONTACT_TO_EMAIL or CONTACT_FROM_EMAIL');
    return NextResponse.json({ error: 'not_configured' }, { status: 503 });
  }

  // Service name always reported in Romanian for the team inbox.
  const ro = dictionaries.ro;
  const serviceLabel =
    service === 'other'
      ? ro.contact.fields.serviceOther
      : ro.services.items[service as (typeof SERVICE_KEYS)[number]].title;

  const text = [
    `Nume: ${name}`,
    `Email: ${email}`,
    `Telefon: ${phone || '—'}`,
    `Companie: ${company || '—'}`,
    `Serviciu: ${serviceLabel}`,
    `Limba site-ului: ${lang.toUpperCase()}`,
    '',
    'Mesaj:',
    message,
  ].join('\n');

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to: to.split(',').map((s) => s.trim()).filter(Boolean),
        reply_to: email,
        subject: `Mesaj nou de pe site — ${name}`,
        text,
      }),
    });

    if (!res.ok) {
      console.error('[contact] Resend error', res.status, await res.text());
      return NextResponse.json({ error: 'send_failed' }, { status: 502 });
    }
  } catch (err) {
    console.error('[contact] Network error', err);
    return NextResponse.json({ error: 'send_failed' }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
