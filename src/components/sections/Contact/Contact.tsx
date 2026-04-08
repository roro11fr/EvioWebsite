'use client';

import { useState, FormEvent } from 'react';
import Reveal from '@/components/ui/Reveal/Reveal';
import SectionLabel from '@/components/ui/SectionLabel/SectionLabel';
import { serviceOptions } from '@/lib/data';
import styles from './Contact.module.css';

interface FormState {
  name: string;
  email: string;
  service: string;
  message: string;
}

const initialState: FormState = { name: '', email: '', service: '', message: '' };

export default function Contact() {
  const [form, setForm]       = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Wire to your email service / API here
    console.log('Form submitted:', form);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setForm(initialState);
      }, 3500);
    }, 800);
  };

  return (
    <section className={`${styles.contact} section`} id="contact">
      <div className="container">
        <div className={styles.inner}>
          {/* Left */}
          <div className={styles.left}>
            <Reveal>
              <SectionLabel>Get In Touch</SectionLabel>
            </Reveal>
            <Reveal delay={1}>
              <h2 className={styles.title}>
                Let&apos;s create<br />something<br /><em>remarkable.</em>
              </h2>
            </Reveal>
            <Reveal delay={2}>
              <div className={styles.links}>
                <a
                  href="https://www.instagram.com/evioproduction/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  <span className={styles.linkIcon}>◈</span>
                  @evioproduction
                </a>
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal delay={2} className={styles.right}>
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Your Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="John Doe"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">Email Address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="hello@yourbrand.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="service">Service Needed</label>
                <select
                  id="service"
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                >
                  <option value="">Select a service</option>
                  {serviceOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="message">Tell Us About Your Project</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Brief description of your project, timeline, and goals..."
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <button
                type="submit"
                className={`${styles.submitBtn} ${submitted ? styles.success : ''}`}
                disabled={loading || submitted}
              >
                {submitted ? 'Message Sent ✓' : loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
