// app/components/Footer.tsx
"use client";

import Link from 'next/link';

export default function Footer() {
  const worksheetTypes = [
    { name: 'Addition Worksheets', href: '/addition-practice' },
    { name: 'Subtraction Worksheets', href: '/subtraction-practice' },
    { name: 'Multiplication Worksheets', href: '/multiplication-practice' },
    { name: 'Division Worksheets', href: '/division-practice' },
    { name: 'Fractions Worksheets', href: '/fractions-practice' },
    { name: 'Word Problems', href: '/word-problems' },
  ];

  const gradeCategories = [
    { name: 'Kindergarten Math', href: '/kindergarten-worksheets' },
    { name: '1st Grade Math', href: '/grade-1-worksheets' },
    { name: '2nd Grade Math', href: '/grade-2-worksheets' },
    { name: '3rd Grade Math', href: '/grade-3-worksheets' },
    { name: '4th Grade Math', href: '/grade-4-worksheets' },
    { name: '5th Grade Math', href: '/grade-5-worksheets' },
    { name: '6th Grade Math', href: '/grade-6-worksheets' },
  ];

  return (
    <footer className="footer-container">
      <div className="footer-content-wrapper">
        <div className="footer-grid">
          <div className="footer-brand-section">
            <h3 className="footer-brand">
              homeschoolmath.site
            </h3>
            <p className="footer-description">
              Math worksheets made simple. Create custom math worksheets for students in grades K-6.
              Perfect for teachers, parents, and homeschoolers.
            </p>
            <div className="stats-grid">
              <div className="stats-card">
                <span className="stats-number">100,000+</span>
                <span className="stats-label">Worksheets Generated</span>
              </div>
              <div className="stats-card">
                <span className="stats-number">5,000+</span>
                <span className="stats-label">Happy Teachers</span>
              </div>
            </div>
          </div>

          <div className="footer-links-section">
            <h4 className="footer-heading">
              Math Worksheet Types
            </h4>
            <ul className="footer-link-list">
              {worksheetTypes.map((type) => (
                <li key={type.href}>
                  <Link href={type.href}>
                    <div className="footer-link-content">
                      <span>{type.name}</span>
                      <span className="arrow">→</span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-links-section">
            <h4 className="footer-heading">
              By Grade Level
            </h4>
            <ul className="footer-link-list">
              {gradeCategories.map((grade) => (
                <li key={grade.href}>
                  <Link href={grade.href}>
                    <div className="footer-link-content">
                      <span>{grade.name}</span>
                      <span className="arrow">→</span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-links-section">
            <h4 className="footer-heading">
              Resources & Support
            </h4>
            <ul className="footer-link-list">
              {/* ADDED PLANNING RESOURCES LINK HERE */}
              <li>
                <Link href="/resources">
                  <div className="footer-link-content" style={{ color: '#60a5fa', fontWeight: 'bold' }}>
                    <span>Planning Resources</span>
                    <span className="arrow">→</span>
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/how-to-use">
                  <div className="footer-link-content">
                    <span>How to Use Generator</span>
                    <span className="arrow">→</span>
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/teaching-tips">
                  <div className="footer-link-content">
                    <span>Math Teaching Tips</span>
                    <span className="arrow">→</span>
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <div className="footer-link-content">
                    <span>Contact Support</span>
                    <span className="arrow">→</span>
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <div className="footer-link-content">
                    <span>About Us</span>
                    <span className="arrow">→</span>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-legal-section">
        {/* ... (rest of the legal section code remains exactly the same as you provided) ... */}
        <div className="footer-legal-content">
          <div className="legal-links-group">
            <Link href="/privacy-policy">
              <span className="legal-link-text">Privacy Policy</span>
            </Link>
            <span className="legal-separator">•</span>
            <Link href="/terms-of-service">
              <span className="legal-link-text">Terms of Service</span>
            </Link>
            <span className="legal-separator">•</span>
            <Link href="/cookies">
              <span className="legal-link-text">Cookie Policy</span>
            </Link>
          </div>
          
          <div className="trust-badges-group">
            <div className="trust-badge">
              <span>Safe & Secure</span>
            </div>
            <div className="trust-badge">
              <span>No Spam Policy</span>
            </div>
            <div className="trust-badge">
              <span>Teacher Approved</span>
            </div>
          </div>
        </div>

        <div className="footer-copyright-section">
          <p className="footer-copyright">
            © {new Date().getFullYear()} homeschoolmath.site. All rights reserved.
          </p>
          <p className="footer-subtext">
            Math worksheets made simple
          </p>
        </div>
      </div>
      <style jsx>{`
        /* ... (all your existing CSS remains exactly the same) ... */
        .footer-container {
          background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
          color: white;
          margin-top: auto;
        }

        .footer-content-wrapper {
          padding: 3rem 1rem 2rem 1rem;
        }

        @media (min-width: 768px) {
          .footer-content-wrapper {
            padding: 5rem 1.5rem 3rem 1.5rem;
          }
        }

        .footer-grid {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.5rem;
        }

        @media (min-width: 640px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
          }
        }

        @media (min-width: 1024px) {
          .footer-grid {
            grid-template-columns: 2fr 1fr 1fr 1fr;
            gap: 3rem;
          }
        }

        .footer-brand-section {
          grid-column: 1 / -1;
        }

        @media (min-width: 1024px) {
          .footer-brand-section {
            grid-column: 1;
          }
        }

        .footer-brand {
          font-size: clamp(1.5rem, 4vw, 1.75rem);
          font-weight: 800;
          margin: 0 0 1rem 0;
          color: #2563eb;
          line-height: 1.2;
        }

        .footer-description {
          color: #e2e8f0;
          line-height: 1.6;
          margin: 0 0 2rem 0;
          font-size: clamp(0.95rem, 2vw, 1rem);
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
        }

        @media (min-width: 640px) {
          .stats-grid {
            gap: 1.5rem;
          }
        }

        .stats-card {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 12px;
          padding: 1.5rem 1rem;
          text-align: center;
          transition: all 0.3s ease;
        }

        .stats-card:hover {
          background: rgba(255, 255, 255, 0.15);
          transform: translateY(-2px);
          border-color: rgba(37, 99, 235, 0.5);
        }

        .stats-number {
          display: block;
          font-size: clamp(1.5rem, 3vw, 2rem);
          font-weight: 900;
          color: #ffffff;
          margin-bottom: 0.5rem;
        }

        .stats-label {
          display: block;
          font-size: 0.75rem;
          color: #e2e8f0;
          font-weight: 600;
        }

        @media (min-width: 640px) {
          .stats-label {
            font-size: 0.875rem;
          }
        }

        .footer-heading {
          font-size: 1.125rem;
          font-weight: 700;
          color: white;
          margin: 0 0 1.5rem 0;
          border-bottom: 2px solid #2563eb;
          padding-bottom: 0.75rem;
        }

        .footer-link-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .footer-link-list a {
          color: white;
          text-decoration: none;
          display: block;
        }

        .footer-link-content {
          font-size: 0.9rem;
          font-weight: 500;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.75rem 0.5rem;
          border-radius: 6px;
          transition: all 0.3s ease;
          margin-bottom: 0.25rem;
        }

        @media (min-width: 640px) {
          .footer-link-content {
            font-size: 0.95rem;
            padding: 0.75rem 1rem;
          }
        }
        
        .footer-link-content:hover {
          background: rgba(37, 99, 235, 0.08);
          transform: translateX(4px);
          border-left: 2px solid #2563eb;
          margin-left: -2px;
        }

        .arrow {
          opacity: 0;
          transform: translateX(-8px);
          transition: opacity 0.3s ease, transform 0.3s ease;
          color: #2563eb;
          font-weight: 600;
          font-size: 1.1em;
        }
        
        .footer-link-content:hover .arrow {
          opacity: 1;
          transform: translateX(0);
        }

        .footer-legal-section {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding: 2rem 1rem;
          background: rgba(0, 0, 0, 0.2);
        }

        @media (min-width: 768px) {
          .footer-legal-section {
            padding: 2.5rem 1.5rem;
          }
        }

        .footer-legal-content {
          max-width: 1200px;
          margin: 0 auto 2rem auto;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          align-items: center;
        }

        @media (min-width: 768px) {
          .footer-legal-content {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 2rem;
          }
        }

        .legal-links-group {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
          justify-content: center;
        }
        
        .legal-links-group a {
          text-decoration: none;
          color: white;
        }
        
        .legal-link-text {
          font-size: 0.8rem;
          font-weight: 500;
          padding: 0.5rem 0.75rem;
          border-radius: 4px;
          transition: all 0.3s ease;
        }

        @media (min-width: 640px) {
          .legal-link-text {
            font-size: 0.875rem;
            padding: 0.5rem 1rem;
          }
        }
        
        .legal-link-text:hover {
          color: #2563eb;
          background: rgba(37, 99, 235, 0.1);
          transform: translateY(-1px);
        }

        .legal-separator {
          color: #a0aec0;
          font-size: 0.8rem;
        }

        .trust-badges-group {
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
          justify-content: center;
        }

        @media (min-width: 640px) {
          .trust-badges-group {
            gap: 1rem;
          }
        }

        .trust-badge {
          background: rgba(37, 99, 235, 0.15);
          border: 1px solid rgba(37, 99, 235, 0.3);
          border-radius: 20px;
          padding: 0.5rem 1rem;
          transition: all 0.3s ease;
        }

        .trust-badge:hover {
          background: rgba(37, 99, 235, 0.2);
          border-color: rgba(37, 99, 235, 0.6);
          transform: scale(1.02);
        }

        .trust-badge span {
          font-size: 0.75rem;
          color: #ffffff;
          font-weight: 600;
        }

        @media (min-width: 640px) {
          .trust-badge span {
            font-size: 0.8rem;
          }
        }

        .footer-copyright-section {
          max-width: 1200px;
          margin: 0 auto;
          text-align: center;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding-top: 1.5rem;
        }

        .footer-copyright {
          color: #cbd5e0;
          margin: 0;
          font-size: 0.8rem;
        }

        .footer-subtext {
          margin-top: 0.5rem;
          color: #a0aec0;
          font-size: 0.75rem;
          margin: 0.5rem 0 0 0;
        }

        @media (min-width: 640px) {
          .footer-copyright {
            font-size: 0.875rem;
          }
          .footer-subtext {
            font-size: 0.8rem;
          }
        }
      `}</style>
    </footer>
  );
}
