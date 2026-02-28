// app/fractions-practice/page.tsx
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Fractions Practice Worksheets | Free Printable Math Sheets 3rd-6th Grade',
  description: 'Master fractions with custom practice sheets. Generate free printable fractions worksheets for 3rd through 6th grade with basic concepts, visual models, and finding fractions of wholes.',
}

export default function FractionsPractice() {
  const faqs = [
    {
      question: 'What fraction skills can I practice with these worksheets?',
      answer: 'Our generator creates fractions worksheets covering basic fraction concepts (1/2, 1/3, 1/4, 2/3, 3/4), finding fractions of whole numbers, visual aids like fraction bars, and simple fraction calculations. The focus is on conceptual understanding and foundational fluency. We do not include fraction operations (addition, subtraction, multiplication, or division) — those require their own focused instruction and appear in grades 4 and above.'
    },
    {
      question: 'Do you include fraction addition, subtraction, multiplication, or division?',
      answer: 'No, our fractions worksheets focus on basic fraction concepts and finding fractional parts only. We do not include fraction operations (addition, subtraction, multiplication, or division). This is intentional: fraction operations require a strong conceptual foundation that these worksheets are designed to build first. Introducing operations too early, before a child truly understands what a fraction represents, is one of the most common causes of lasting confusion with fractions.'
    },
    {
      question: 'Why do so many children struggle with fractions?',
      answer: 'The most common root cause is that children learn fractions as notation — they can write 3/4 and read it aloud — without understanding what it means. A fraction is a single number that represents a relationship between a part and a whole, not two separate numbers stacked on top of each other. When that conceptual gap exists, everything built on top of it is fragile. Visual models like fraction bars and number lines are the most effective remediation: they make the meaning visible before symbols are introduced.'
    },
    {
      question: 'What visual models are included for fractions?',
      answer: 'We include fraction bars and simple area models to help students understand fractions as parts of a whole. These visual representations are placed before abstract symbolic work in our worksheets because research consistently shows that children who learn fractions visually first develop more durable understanding. The goal is that a child can look at a fraction bar shaded to show 2/5 and immediately understand the meaning — before they ever manipulate the symbols algebraically.'
    },
    {
      question: 'At what grade should children start learning fractions?',
      answer: 'Fractions are formally introduced in 3rd grade, but meaningful preparation starts earlier. In 1st and 2nd grade, children work with halves and fourths through partitioning shapes — this is informal fraction work. By 3rd grade, the focus shifts to understanding the fraction as a number, placing fractions on a number line, and comparing fractions. The 3rd grade fractions standard is often underestimated; it asks for genuine conceptual understanding, not just recognition of symbols.'
    },
    {
      question: 'How do I know if my child understands fractions or is just following rules?',
      answer: 'Ask your child to place 2/3 on a number line between 0 and 1. If they can do that and explain why it goes where it does, they understand fractions. If they can\'t, they\'ve learned a notation system without the meaning. A second diagnostic: ask whether 3/4 or 5/8 is larger, without calculating. A child who understands fractions can reason "3/4 is three-quarters of the way to 1, and 5/8 is more than halfway but less than 3/4" — this is the kind of number sense that makes all subsequent fraction work tractable.'
    },
    {
      question: 'Are the worksheets suitable for students who struggle with fractions?',
      answer: 'Yes, and they\'re particularly well-suited for remediation. The worksheets begin with basic fraction recognition and visual models, then build gradually toward more abstract work. For a struggling student, the right approach is to start at the beginning regardless of their grade level — a 5th grader who doesn\'t understand what a fraction means should work through 3rd grade visual material before attempting 5th grade operations. Grade level on the worksheet matters less than meeting the child where they actually are.'
    },
    {
      question: 'How do fractions connect to decimals and percentages?',
      answer: 'Fractions, decimals, and percentages are three ways of representing the same thing: parts of a whole. 1/2, 0.5, and 50% all describe the same quantity. Children who understand fractions conceptually find the transition to decimals and percentages relatively natural. Children who learned fractions as a set of rules to follow often treat each representation as a completely separate subject — which is why fraction understanding is so important to establish correctly and fully before moving on.'
    }
  ];

  const schemaMarkup = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqs.map(faq => ({
      '@type': 'Question',
      'name': faq.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.answer
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />
      
      <div className="practice-page">
        <div className="practice-container">

          {/* HERO SECTION */}
          <section className="practice-hero">
            <div className="practice-badge practice-badge-red">
              Free Printable Worksheets
            </div>
            <h1 className="practice-title">
              Fractions Practice Worksheets
            </h1>
            <p className="practice-subtitle practice-subtitle-red">
              Master Fractions with Custom Practice Sheets
            </p>
            <p className="practice-description">
              Generate custom fractions worksheets with basic concepts, visual models, and finding fractional parts. 
              Perfect for building the foundational understanding of fractions that all higher math depends on.
            </p>

            {/* Features Grid */}
            <div className="practice-features-grid">
              <div className="practice-card practice-card-center">
                <div className="practice-card-icon">½ ¼ ⅓</div>
                <h3 className="practice-card-title">Basic Fractions</h3>
                <p className="practice-card-text">Common fractions: 1/2, 1/3, 1/4, 2/3, 3/4</p>
              </div>
              <div className="practice-card practice-card-center">
                <div className="practice-card-icon">📊</div>
                <h3 className="practice-card-title">Visual Models</h3>
                <p className="practice-card-text">Fraction bars and visual aids</p>
              </div>
              <div className="practice-card practice-card-center">
                <div className="practice-card-icon">🔢</div>
                <h3 className="practice-card-title">Parts of Wholes</h3>
                <p className="practice-card-text">Finding fractions of numbers</p>
              </div>
            </div>

            <div className="practice-cta-container">
              <Link href="/" className="practice-button practice-button-red">
                Generate Custom Fractions Worksheets
              </Link>
              <div className="practice-info-box">
                10 free worksheets per day • 3 difficulty levels
              </div>
            </div>
          </section>

          {/* WHY THIS MATTERS SECTION */}
          <section className="practice-section">
            <div style={{
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: '8px',
              padding: '2rem',
              marginBottom: '1rem'
            }}>
              <h2 style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                color: 'var(--text-primary)',
                marginBottom: '1rem'
              }}>
                Why Fractions Are the Hardest Thing in Elementary Math
              </h2>
              <p style={{
                color: 'var(--text-secondary)',
                lineHeight: '1.7',
                fontSize: '1.05rem',
                marginBottom: '1rem'
              }}>
                Of all the topics in elementary mathematics, fractions produce more lasting confusion than anything else. The reason is straightforward but often missed: fractions ask children to extend a concept they thought they understood. Until fractions, numbers are counts — whole things you can point to. Fractions introduce the idea of a number as a relationship, a part of a whole. That's a conceptual leap, not just a new procedure, and children who are handed rules without the concept underneath will struggle every time fractions appear in a new context.
              </p>
              <p style={{
                color: 'var(--text-secondary)',
                lineHeight: '1.7',
                fontSize: '1.05rem'
              }}>
                The good news is that with the right visual foundation and enough varied practice, fractions become intuitive. The worksheets here are built to provide that foundation: visual models first, then symbolic work, then application to finding fractional parts of quantities. For students working toward fraction operations, the <Link href="/multiplication-practice" style={{color: 'var(--primary)', textDecoration: 'underline'}}>multiplication practice</Link> and <Link href="/division-practice" style={{color: 'var(--primary)', textDecoration: 'underline'}}>division practice</Link> pages support the arithmetic fluency that fraction operations require.
              </p>
            </div>
          </section>

          {/* SKILLS BREAKDOWN SECTION */}
          <section className="practice-section">
            <h2 className="practice-section-title">
              What You'll Practice
            </h2>
            <p className="practice-section-subtitle">
              Comprehensive fractions practice built on visual understanding
            </p>
            <div className="practice-grid">
              <div className="practice-card">
                <h3 className="practice-card-heading">3rd Grade Skills</h3>
                <div className="practice-bullet">
                  <div className="practice-bullet-dot practice-bullet-dot-red"></div>
                  <span className="practice-bullet-text">Basic fraction recognition — understanding what a fraction represents, not just how it looks</span>
                </div>
                <div className="practice-bullet">
                  <div className="practice-bullet-dot practice-bullet-dot-red"></div>
                  <span className="practice-bullet-text">Parts of a whole — how numerator and denominator relate to each other</span>
                </div>
                <div className="practice-bullet">
                  <div className="practice-bullet-dot practice-bullet-dot-red"></div>
                  <span className="practice-bullet-text">Fraction bar models — the most important visual tool for building fraction sense</span>
                </div>
              </div>
              <div className="practice-card">
                <h3 className="practice-card-heading">4th Grade Skills</h3>
                <div className="practice-bullet">
                  <div className="practice-bullet-dot practice-bullet-dot-red"></div>
                  <span className="practice-bullet-text">Common fractions fluency — working quickly and accurately with 1/2, 1/3, 1/4, 2/3, 3/4</span>
                </div>
                <div className="practice-bullet">
                  <div className="practice-bullet-dot practice-bullet-dot-red"></div>
                  <span className="practice-bullet-text">Finding fractions of numbers — understanding 2/3 of 12 as a division-then-multiply process</span>
                </div>
                <div className="practice-bullet">
                  <div className="practice-bullet-dot practice-bullet-dot-red"></div>
                  <span className="practice-bullet-text">Simple fraction problems — applying fraction understanding in varied contexts</span>
                </div>
              </div>
              <div className="practice-card">
                <h3 className="practice-card-heading">5th–6th Grade Skills</h3>
                <div className="practice-bullet">
                  <div className="practice-bullet-dot practice-bullet-dot-red"></div>
                  <span className="practice-bullet-text">Fraction concepts mastery — fluency with all basic fractions without visual support</span>
                </div>
                <div className="practice-bullet">
                  <div className="practice-bullet-dot practice-bullet-dot-red"></div>
                  <span className="practice-bullet-text">Complex fractions of whole numbers — applying fractional thinking to multi-step problems</span>
                </div>
                <div className="practice-bullet">
                  <div className="practice-bullet-dot practice-bullet-dot-red"></div>
                  <span className="practice-bullet-text">Visual model applications — using models to verify and check abstract fraction work</span>
                </div>
              </div>
            </div>
          </section>

          {/* GRADE LEVELS SECTION */}
          <section className="practice-section">
            <h2 className="practice-section-title">
              Fractions by Grade Level
            </h2>
            <p className="practice-section-subtitle">
              What fraction mastery looks like at each stage, and what sticking points to watch for
            </p>
            <div className="practice-grade-grid">
              {[
                {
                  grade: '3',
                  focus: 'Conceptual introduction',
                  detail: 'A 3rd grader who has mastered fractions can place unit fractions on a number line and explain why 1/3 is larger than 1/4. The common sticking point: children who can identify fractions visually but can\'t place them on a number line don\'t yet understand fractions as numbers.'
                },
                {
                  grade: '4',
                  focus: 'Fluency and equivalence',
                  detail: 'A 4th grader should recognize equivalent fractions and compare fractions with different denominators using reasoning rather than calculation. The sticking point: children who must always find common denominators to compare fractions are missing the number sense that makes 4th grade fraction work manageable.'
                },
                {
                  grade: '5',
                  focus: 'Operations readiness',
                  detail: 'A 5th grader entering fraction operations should have automatic recognition of all common fractions and be able to find a fraction of a whole number fluently. Without this, fraction multiplication and division will be overwhelming — they require solid conceptual fluency as a foundation.'
                },
                {
                  grade: '6',
                  focus: 'Consolidation and application',
                  detail: 'By 6th grade, fraction concepts should be secure enough to apply in ratio, proportion, and percent contexts. Students who still struggle with basic fraction concepts at this stage benefit from returning to visual models — the remediation is the same at any grade level.'
                }
              ].map((level, index) => (
                <div key={index} className="practice-card" style={{textAlign: 'left'}}>
                  <div className="practice-grade-badge practice-grade-badge-red" style={{textAlign: 'center', margin: '0 auto 0.75rem'}}>
                    {level.grade}
                  </div>
                  <div className="practice-grade-title" style={{textAlign: 'center'}}>
                    Grade {level.grade} — {level.focus}
                  </div>
                  <p style={{
                    color: 'var(--text-secondary)',
                    lineHeight: '1.6',
                    fontSize: '0.9rem',
                    marginTop: '0.75rem'
                  }}>
                    {level.detail}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* WORKSHEET TYPES SECTION */}
          <section className="practice-section">
            <h2 className="practice-section-title">
              Worksheet Categories
            </h2>
            <p className="practice-section-subtitle">
              Varied fractions practice materials
            </p>
            <div className="practice-grid">
              {[
                { type: 'Basic Fraction Recognition', count: '20+ problems', grades: '3-4', desc: 'Identify common fractions with and without visual support' },
                { type: 'Fraction Bar Models', count: '15+ problems', grades: '3-5', desc: 'Visual fraction representations to build conceptual understanding' },
                { type: 'Parts of a Whole', count: '18+ problems', grades: '3-4', desc: 'Understanding numerator-denominator relationships concretely' },
                { type: 'Finding Fractions of Numbers', count: '20+ problems', grades: '4-6', desc: 'Calculate fractional amounts of whole numbers' },
                { type: 'Simple Fraction Problems', count: '15+ problems', grades: '4-6', desc: 'Applied fraction problems in varied real-world contexts' },
                { type: 'Mixed Fraction Practice', count: '25+ problems', grades: '4-6', desc: 'Interleaved fraction problems to build durable fluency' }
              ].map((worksheet, index) => (
                <div key={index} className="practice-worksheet-card">
                  <div className="practice-worksheet-header">
                    <h3 className="practice-worksheet-title">
                      {worksheet.type}
                    </h3>
                    <span className="practice-count-badge practice-count-badge-red">
                      {worksheet.count}
                    </span>
                  </div>
                  <p className="practice-worksheet-desc">
                    {worksheet.desc}
                  </p>
                  <div className="practice-worksheet-grades practice-worksheet-grades-red">
                    Grades {worksheet.grades}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* COURSE MENTION */}
          <section className="practice-section">
            <div style={{
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderLeft: '4px solid var(--primary)',
              borderRadius: '8px',
              padding: '2rem'
            }}>
              <h2 style={{
                fontSize: '1.375rem',
                fontWeight: '700',
                color: 'var(--text-primary)',
                marginBottom: '0.75rem'
              }}>
                When Fraction Confusion Runs Deeper Than Practice Can Fix
              </h2>
              <p style={{
                color: 'var(--text-secondary)',
                lineHeight: '1.7',
                marginBottom: '1.25rem'
              }}>
                If your child consistently misunderstands fractions despite worksheet practice — confusing the numerator and denominator, adding across instead of finding common denominators, or treating fractions as two separate numbers — the underlying number sense may need direct attention. Our <strong>Multiplication & Division Foundations</strong> course (grades 3–5) addresses the arithmetic fluency that fraction work requires, and our <strong>Number Sense Foundations</strong> course (K–2) rebuilds the conceptual base for younger children. Both are available on the <Link href="/resources" style={{color: 'var(--primary)', textDecoration: 'underline'}}>resources page</Link>.
              </p>
              <a
                href="https://homeschoolmath.gumroad.com/l/csfto"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block',
                  background: 'var(--primary)',
                  color: 'white',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '6px',
                  fontWeight: '600',
                  textDecoration: 'none',
                  fontSize: '0.95rem'
                }}
              >
                View Multiplication & Division Foundations — $57
              </a>
            </div>
          </section>

          {/* FAQ SECTION */}
          <section className="practice-section">
            <h2 className="practice-section-title">
              Frequently Asked Questions
            </h2>
            <p className="practice-section-subtitle">
              Everything you need to know about fractions practice worksheets
            </p>
            <div className="practice-faq-container">
              {faqs.map((faq, index) => (
                <div key={index} className="practice-faq-card">
                  <h3 className="practice-faq-question">
                    {faq.question}
                  </h3>
                  <p className="practice-faq-answer">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA SECTION */}
          <section className="practice-cta-section">
            <div className="practice-cta-box practice-cta-box-red">
              <h2 className="practice-cta-title">
                Build Fraction Understanding!
              </h2>
              <p className="practice-cta-text">
                Master fraction concepts with customized practice sheets. 
                From basic recognition to finding parts of wholes, build the fraction fluency that all higher math depends on.
              </p>
              <div className="practice-cta-container">
                <Link href="/" className="practice-cta-button practice-cta-button-red">
                  Create Fractions Worksheets Now
                </Link>
                <p className="practice-cta-note">
                  Free • No registration required • 10 worksheets per day
                </p>
              </div>
            </div>
          </section>

          {/* RELATED SKILLS NAVIGATION */}
          <section className="practice-nav-section">
            <h2 className="practice-nav-title">
              Explore Other Math Skills
            </h2>
            <div className="practice-nav-grid">
              <Link href="/division-practice" className="practice-nav-card">
                <div className="practice-nav-icon practice-nav-icon-red">
                  ÷
                </div>
                <div className="practice-nav-label">
                  Division
                </div>
                <div className="practice-nav-desc">
                  Basic facts
                </div>
              </Link>

              <Link href="/multiplication-practice" className="practice-nav-card">
                <div className="practice-nav-icon practice-nav-icon-red">
                  ×
                </div>
                <div className="practice-nav-label">
                  Multiplication
                </div>
                <div className="practice-nav-desc">
                  Times tables
                </div>
              </Link>

              <Link href="/grade-4-worksheets" className="practice-nav-card">
                <div className="practice-nav-icon practice-nav-icon-red">
                  4
                </div>
                <div className="practice-nav-label">
                  4th Grade
                </div>
                <div className="practice-nav-desc">
                  Math worksheets
                </div>
              </Link>

              <Link href="/grade-5-worksheets" className="practice-nav-card">
                <div className="practice-nav-icon practice-nav-icon-red">
                  5
                </div>
                <div className="practice-nav-label">
                  5th Grade
                </div>
                <div className="practice-nav-desc">
                  Math worksheets
                </div>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
