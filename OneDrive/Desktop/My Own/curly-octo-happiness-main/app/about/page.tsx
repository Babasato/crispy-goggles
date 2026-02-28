// app/about/page.tsx - UPDATED WITH EXISTING CSS CLASSES
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us | The Mission Behind homeschoolmath.site',
  description: 'Learn about our mission to provide high-quality, algorithmic math resources for homeschool families and educators worldwide.',
}

export default function About() {
  const educationalPillars = [
    { 
      title: "Conceptual Mastery", 
      desc: "Build deep understanding alongside procedural fluency for lasting mathematical knowledge." 
    },
    { 
      title: "Flexible Thinking", 
      desc: "Varied problem types and approaches to develop adaptable mathematical problem-solving skills." 
    },
    { 
      title: "Growth Mindset", 
      desc: "Appropriately challenging materials that encourage persistence and celebrate progress." 
    },
    { 
      title: "Seamless Differentiation", 
      desc: "Tools designed to meet diverse learning needs in both classroom and homeschool settings." 
    }
  ]

  return (
    <>
      {/* ✅ Consistent Website Header */}
      <header className="site-header">
        <div className="header-content">
          <Link href="/" className="home-link">
            <h1 className="brand-title">Math Worksheet Generator</h1>
          </Link>
          <nav className="main-nav">
            <Link href="/" className="nav-link">
              ← Back to Generator
            </Link>
          </nav>
        </div>
      </header>

      <div className="about-page">
        <div className="about-container">
          <div className="about-card">
            {/* Hero Section */}
            <div style={{ textAlign: 'center', padding: '3rem 0', marginBottom: '2rem' }}>
              <h1 className="about-title">About Our Mission</h1>
              <p className="about-text" style={{ fontSize: '1.25rem', maxWidth: '700px', margin: '0 auto' }}>
                Bridging the gap between premium educational technology and accessibility through 
                high-quality, customizable math resources.
              </p>
            </div>

            {/* Our Mission Section */}
            <section className="about-section">
              <h2 className="about-section-title">Why We Exist</h2>
              <div className="auto-grid">
                <div className="info-card accent-blue">
                  <h3 className="text-h3">The Problem</h3>
                  <p className="text-p">
                    Quality math resources often come with premium price tags or rigid structures 
                    that don't adapt to individual learning needs.
                  </p>
                </div>
                
                <div className="info-card accent-green">
                  <h3 className="text-h3">Our Solution</h3>
                  <p className="text-p">
                    Algorithmic worksheet generation that provides infinite, tailored practice 
                    while remaining completely free and accessible to everyone.
                  </p>
                </div>
              </div>
            </section>

            {/* What We Offer Section */}
            <section className="about-section">
              <h2 className="about-section-title">What We Offer</h2>
              <div className="auto-grid">
                <div className="info-card accent-blue">
                  <h3 className="text-h3">Customizable Worksheets</h3>
                  <p className="text-p">
                    Randomized algorithmic generation ensures every worksheet is unique, 
                    preventing rote memorization and encouraging true mastery.
                  </p>
                </div>

                <div className="info-card accent-green">
                  <h3 className="text-h3">Comprehensive Coverage</h3>
                  <p className="text-p">
                    K-6 math resources aligned with core standards and conceptual development 
                    milestones.
                  </p>
                </div>

                <div className="info-card accent-orange">
                  <h3 className="text-h3">Planning Tools</h3>
                  <p className="text-p">
                    Notion dashboards and curriculum trackers to organize the administrative 
                    side of education effectively.
                  </p>
                </div>

                <div className="info-card accent-red">
                  <h3 className="text-h3">Always Free</h3>
                  <p className="text-p">
                    No hidden fees or intrusive subscriptions—just honest, effective educational 
                    tools accessible to everyone.
                  </p>
                </div>
              </div>
            </section>

            {/* ✅ ENHANCED: Educational Philosophy Grid */}
            <section className="about-section">
              <h2 className="about-section-title">Our Educational Philosophy</h2>
              <p className="about-text">
                Math education requires more than just repetition. Our resources are engineered around these core principles:
              </p>
              
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
                gap: '1.25rem', 
                marginTop: '1.5rem' 
              }}>
                {educationalPillars.map((pillar, i) => (
                  <div key={i} className="info-card" style={{
                    borderLeft: '4px solid var(--primary)',
                    height: '100%',
                    padding: '1.25rem'
                  }}>
                    <h3 style={{ 
                      fontSize: '1.125rem',
                      fontWeight: '600',
                      color: 'var(--text-primary)', 
                      marginBottom: '0.5rem',
                      lineHeight: '1.4'
                    }}>
                      {pillar.title}
                    </h3>
                    <p style={{ 
                      fontSize: '0.95rem', 
                      color: 'var(--text-secondary)',
                      lineHeight: '1.5',
                      margin: 0
                    }}>
                      {pillar.desc}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA Section */}
            <section className="about-cta-section">
              <h2 className="about-section-title">Ready to Transform Math Practice?</h2>
              <p className="about-text" style={{ maxWidth: '600px', margin: '0 auto 2rem' }}>
                Join thousands of educators and parents who use homeschoolmath.site 
                to support their students' mathematical journey.
              </p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link href="/" className="about-cta-button">
                  Start Generating Worksheets
                </Link>
                <Link 
                  href="/how-to-use"
                  style={{
                    display: 'inline-block',
                    background: 'transparent',
                    color: 'var(--primary)',
                    border: '2px solid var(--primary)',
                    padding: '1rem 2rem',
                    borderRadius: '6px',
                    fontWeight: '600',
                    textDecoration: 'none',
                    transition: 'all 0.2s'
                  }}
                >
                  See How It Works
                </Link>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}
