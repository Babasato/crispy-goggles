"use client";

import Link from 'next/link';
import { memo } from 'react';

// Use memo to prevent unnecessary re-renders
const LandingPageTemplate = memo(function LandingPageTemplate({
  title,
  description,
  gradeLevel,
  topics,
  problemTypes,
  featuredImage
}: {
  title: string;
  description: string;
  gradeLevel?: string;
  topics: string[];
  problemTypes: string[];
  featuredImage?: string;
}) {
  return (
    <div className="landing-page">
      <header className="landing-header">
        <h1>{title}</h1>
        <p className="landing-description">{description}</p>
        <Link href="/" className="cta-button">
          Generate Worksheet
        </Link>
      </header>

      <section className="how-to-section">
        <h2>How It Works</h2>
        <div className="steps">
          <div className="step">
            <h3>1. Customize Your Worksheet</h3>
            <p>Select problem types, difficulty level, and specific topics</p>
          </div>
          <div className="step">
            <h3>2. Generate Problems</h3>
            <p>Our system creates unique math problems instantly</p>
          </div>
          <div className="step">
            <h3>3. Download & Print</h3>
            <p>Get your printable PDF with answer key</p>
          </div>
        </div>
      </section>

      <section className="features-section">
        <h2>Key Features</h2>
        <div className="features-grid">
          <div className="feature">
            <h3>Customizable</h3>
            <p>Tailor worksheets to specific learning needs and grade levels</p>
          </div>
          <div className="feature">
            <h3>Answer Keys</h3>
            <p>Separate answer key PDF for easy grading</p>
          </div>
          <div className="feature">
            <h3>Print Ready</h3>
            <p>Professional formatting optimized for printing</p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2>Ready to Create Your Worksheet?</h2>
        <p>Start generating custom math practice sheets in seconds</p>
        <Link href="/" className="cta-button large">
          Generate Worksheet
        </Link>
      </section>
    </div>
  );
});

export default LandingPageTemplate;