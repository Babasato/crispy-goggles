// app/contact/page.tsx
"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* ✅ ADDED: Consistent Website Header */}
      <header style={{
        background: 'var(--surface)',
        borderBottom: '1px solid var(--border)',
        padding: '1rem 1.5rem'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <h1 style={{
              fontSize: '1.4rem',
              fontWeight: '700',
              margin: 0,
              color: 'var(--text-primary)'
            }}>
              Math Worksheet Generator
            </h1>
          </Link>
          <nav>
            <Link href="/" style={{
              color: 'var(--text-secondary)',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: '0.95rem'
            }}>
              ← Back to Generator
            </Link>
          </nav>
        </div>
      </header>

      <div className="contact-page-container">
        <div className="contact-content-wrapper">
          <div className="contact-content-card">
            <h1 className="contact-page-title">Contact Us</h1>
            
            <section className="contact-section">
              <h2 className="contact-section-title">We're Here to Help</h2>
              <p className="contact-description">
                Have questions about our tools, need technical support, or want to share 
                feedback? Reach out and our team will get back to you shortly.
              </p>
            </section>

            <div className="contact-grid">
              <div className="contact-form-section">
                <h3 className="contact-subsection-title">Send Us a Message</h3>

                {submitStatus === 'success' && (
                  <div className="contact-success-message">
                    ✓ Message sent successfully! We will respond shortly.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="contact-error-message">
                    ✗ Something went wrong. Please try again or email <strong>bob@homeschoolmath.site</strong> directly.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">Your Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="form-input"
                      placeholder="Enter your name"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="form-input"
                      placeholder="Enter your email"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="subject" className="form-label">Subject</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="form-input"
                    >
                      <option value="">Select a subject</option>
                      <option value="technical">Technical Support</option>
                      <option value="feature">Feature Request</option>
                      <option value="feedback">General Feedback</option>
                      <option value="partnership">Partnership Inquiry</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message" className="form-label">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="form-textarea"
                      placeholder="Tell us how we can help you..."
                    ></textarea>
                  </div>
                  
                  <button type="submit" disabled={isSubmitting} className="contact-submit-button">
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>

              <div className="contact-resources-section">
                <h3 className="contact-subsection-title">Quick Help & Resources</h3>
                
                <div className="contact-resources-stack">
                  {/* ✅ ADDED: Direct Email Card */}
                  <div className="info-card accent-blue">
                    <h4 className="text-h3">Email Directly</h4>
                    <p className="text-p" style={{marginBottom: '1rem'}}>
                      For privacy requests or if you prefer not to use the form, email us directly:
                    </p>
                    <a href="mailto:bob@homeschoolmath.site" className="contact-resource-link">
                      bob@homeschoolmath.site
                    </a>
                  </div>
                  
                  <div className="info-card accent-green">
                    <h4 className="text-h3">User Documentation</h4>
                    <p className="text-p" style={{marginBottom: '1rem'}}>
                      Learn the best practices for generating and printing your math resources.
                    </p>
                    <Link href="/how-to-use" className="contact-resource-link">
                      View Tutorial →
                    </Link>
                  </div>
                  
                  <div className="info-card accent-orange">
                    <h4 className="text-h3">The Resource Vault</h4>
                    <p className="text-p" style={{marginBottom: '1rem'}}>
                      Access curriculum planners, Notion templates, and recommended teaching tools.
                    </p>
                    <Link href="/resources" className="contact-resource-link">
                      Explore Resources →
                    </Link>
                  </div>

                  <div className="info-card">
                    <h4 className="text-h3">Response Time</h4>
                    <p className="text-p">
                      We typically respond within 24-48 hours.
                    </p>
                    <p className="contact-info-note" style={{marginTop: '0.5rem'}}>
                      Please note: We are a small team dedicated to providing free educational 
                      resources. Your patience is appreciated.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
