'use client';

import { useState, type FormEvent, type ChangeEvent } from 'react';
import Reveal from '@/components/ui/Reveal/Reveal';
import SectionLabel from '@/components/ui/SectionLabel/SectionLabel';
import { dictionaries, INSTAGRAM_URL, SERVICE_KEYS, type Lang } from '@/lib/data';
import styles from './Contact.module.css';

interface FormState {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
  website: string; // honeypot — must stay empty
}

type Field = 'name' | 'email' | 'service' | 'message';
type Status = 'idle' | 'sending' | 'success' | 'error';

const initialState: FormState = {
  name: '', email: '', phone: '', company: '', service: '', message: '', website: '',
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export default function Contact({ lang }: { lang: Lang }) {
  const t = dictionaries[lang].contact;
  const serviceItems = dictionaries[lang].services.items;

  const [form, setForm]     = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});
  const [status, setStatus] = useState<Status>('idle');

  const validate = (f: FormState) => {
    const e: Partial<Record<Field, string>> = {};
    if (!f.name.trim()) e.name = t.required;
    if (!f.email.trim()) e.email = t.required;
    else if (!EMAIL_RE.test(f.email.trim())) e.email = t.invalidEmail;
    if (!f.service) e.service = t.required;
    if (!f.message.trim()) e.message = t.required;
    return e;
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (name in errors) setErrors((prev) => ({ ...prev, [name]: undefined }));
    if (status === 'success' || status === 'error') setStatus('idle');
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const found = validate(form);
    setErrors(found);
    const firstInvalid = Object.keys(found)[0];
    if (firstInvalid) {
      document.getElementById(`contact-${firstInvalid}`)?.focus();
      return;
    }

    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, lang }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus('success');
      setForm(initialState);
    } catch {
      setStatus('error');
    }
  };

  const fieldProps = (field: Field) => ({
    id: `contact-${field}`,
    name: field,
    value: form[field],
    onChange: handleChange,
    'aria-invalid': errors[field] ? true : undefined,
    'aria-describedby': errors[field] ? `contact-${field}-error` : undefined,
  });

  const errorFor = (field: Field) =>
    errors[field] ? (
      <span id={`contact-${field}-error`} className={styles.fieldError}>
        {errors[field]}
      </span>
    ) : null;

  const optional = <span className={styles.optional}>({t.fields.optional})</span>;

  return (
    <section className={`${styles.contact} section`} id="contact">
      <div className="container">
        <div className={styles.inner}>
          {/* Left */}
          <div className={styles.left}>
            <Reveal>
              <SectionLabel>{t.label}</SectionLabel>
            </Reveal>
            <Reveal delay={1}>
              <h2 className={styles.title}>
                {t.titleLine}<br /><em>{t.titleItalic}</em>
              </h2>
            </Reveal>
            <Reveal delay={2}>
              <p className={styles.intro}>{t.intro}</p>
            </Reveal>
            <Reveal delay={3}>
              <div className={styles.links}>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  <span className={styles.linkIcon} aria-hidden="true">◈</span>
                  @evioproduction
                </a>
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal delay={2} className={styles.right}>
            <form className={styles.form} onSubmit={handleSubmit} noValidate>
              <div className={styles.formGroup}>
                <label htmlFor="contact-name">{t.fields.name}</label>
                <input type="text" autoComplete="name" required {...fieldProps('name')} />
                {errorFor('name')}
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="contact-email">{t.fields.email}</label>
                <input type="email" autoComplete="email" required {...fieldProps('email')} />
                {errorFor('email')}
              </div>

              <div className={styles.row}>
                <div className={styles.formGroup}>
                  <label htmlFor="contact-phone">{t.fields.phone} {optional}</label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    value={form.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="contact-company">{t.fields.company} {optional}</label>
                  <input
                    id="contact-company"
                    name="company"
                    type="text"
                    autoComplete="organization"
                    value={form.company}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="contact-service">{t.fields.service}</label>
                <select required {...fieldProps('service')}>
                  <option value="">{t.fields.servicePlaceholder}</option>
                  {SERVICE_KEYS.map((key) => (
                    <option key={key} value={key}>
                      {serviceItems[key].title}
                    </option>
                  ))}
                  <option value="other">{t.fields.serviceOther}</option>
                </select>
                {errorFor('service')}
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="contact-message">{t.fields.message}</label>
                <textarea
                  rows={5}
                  placeholder={t.fields.messagePlaceholder}
                  required
                  {...fieldProps('message')}
                />
                {errorFor('message')}
              </div>

              {/* Honeypot: hidden from people, bots tend to fill it in */}
              <div className={styles.honeypot} aria-hidden="true">
                <label htmlFor="contact-website">Website</label>
                <input
                  id="contact-website"
                  name="website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={form.website}
                  onChange={handleChange}
                />
              </div>

              <button
                type="submit"
                className={styles.submitBtn}
                disabled={status === 'sending'}
              >
                {status === 'sending' ? t.sending : t.submit}
              </button>

              <div aria-live="polite">
                {status === 'success' && (
                  <p className={`${styles.notice} ${styles.noticeSuccess}`} role="status">
                    {t.success}
                  </p>
                )}
                {status === 'error' && (
                  <p className={`${styles.notice} ${styles.noticeError}`} role="alert">
                    {t.error}
                  </p>
                )}
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
