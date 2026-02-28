// app/subtraction-practice/page.tsx
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Subtraction Practice Worksheets | Free Printable Math Sheets K-6',
  description: 'Master subtraction with custom practice sheets. Generate free printable subtraction worksheets for kindergarten through 6th grade with basic facts, borrowing, and visual aids.',
}

export default function SubtractionPractice() {
  const faqs = [
    {
      question: 'What subtraction skills can I practice with these worksheets?',
      answer: 'Our generator creates subtraction worksheets with basic facts (1-20), two-digit subtraction with and without borrowing, visual aids like shapes for counting, and real-world word problems. Three difficulty levels available for each grade.'
    },
    {
      question: 'Do you include negative numbers in subtraction worksheets?',
      answer: 'Our worksheets focus on positive results only, which keeps practice age-appropriate for elementary students. This is intentional — fluency with positive subtraction, including multi-digit borrowing, is the foundation students need before negative numbers are introduced in middle school.'
    },
    {
      question: 'Can I get worksheets with visual models for younger students?',
      answer: 'Yes! Our generator includes shape counting visual aids specifically designed for kindergarten and 1st grade students to build conceptual understanding of subtraction as take-away.'
    },
    {
      question: 'How often do worksheets include word problems?',
      answer: 'Approximately 30% of generated worksheets will include word problems with real-world subtraction scenarios appropriate for each grade level.'
    },
    {
      question: 'How do I teach borrowing to a child who keeps getting confused?',
      answer: 'Confusion with borrowing almost always means the concept of place value is not yet solid. Before drilling the procedure, spend time with base-ten blocks or drawn place value charts so the child can see physically what it means to trade a ten for ten ones. Once that visual is clear, the written method tends to click quickly.'
    },
    {
      question: 'What is the difference between a child who struggles with subtraction facts and one who has a deeper gap?',
      answer: 'A child who simply needs more practice with facts will make errors randomly across different problems. A child with a conceptual gap will consistently struggle with a specific type — often anything involving borrowing, or problems where the minuend digit is smaller than the subtrahend digit. That pattern is a signal to go back to place value before continuing with procedural practice.'
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
            <div className="practice-badge practice-badge-light-green">
              Free Printable Worksheets
            </div>
            <h1 className="practice-title">
              Subtraction Practice Worksheets
            </h1>
            <p className="practice-subtitle practice-subtitle-light-green">
              Master Subtraction with Custom Practice Sheets
            </p>
            <p className="practice-description">
              Generate custom subtraction worksheets with basic facts, two-digit problems, and visual models. 
              Perfect for building conceptual understanding with shapes, counting, and real-world scenarios.
            </p>

            {/* Features Grid */}
            <div className="practice-features-grid">
              <div className="practice-card practice-card-center">
                <div className="practice-card-icon">1-20</div>
                <h3 className="practice-card-title">Number Range</h3>
                <p className="practice-card-text">Basic subtraction facts within 1-20 range</p>
              </div>
              <div className="practice-card practice-card-center">
                <div className="practice-card-icon">🔢</div>
                <h3 className="practice-card-title">Visual Models</h3>
                <p className="practice-card-text">Shape counting and visual aids</p>
              </div>
              <div className="practice-card practice-card-center">
                <div className="practice-card-icon">➖</div>
                <h3 className="practice-card-title">Two-Digit</h3>
                <p className="practice-card-text">With and without borrowing</p>
              </div>
            </div>

            <div className="practice-cta-container">
              <Link href="/" className="practice-button practice-button-light-green">
                Generate Custom Subtraction Worksheets
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
                Why Subtraction Is Harder Than It Looks
              </h2>
              <p style={{
                color: 'var(--text-secondary)',
                lineHeight: '1.7',
                fontSize: '1.05rem',
                marginBottom: '1rem'
              }}>
                Subtraction looks simple on paper — you start with something and take some away. But it's actually one of the trickier concepts in early elementary math, because it asks children to hold two things in their head at once: the original amount and the amount being removed. That working memory demand is real, and it's why kids who breeze through addition can suddenly hit a wall when the minus sign appears.
              </p>
              <p style={{
                color: 'var(--text-secondary)',
                lineHeight: '1.7',
                fontSize: '1.05rem'
              }}>
                The deeper challenge comes later, with borrowing. When a child has to subtract 47 from 83 and the ones column doesn't work out cleanly, they need to understand what it means to trade a ten for ten ones — not just follow a procedure. Children who are taught the steps before they understand the concept tend to make systematic errors that get harder to untangle as the numbers get bigger. For students building toward multiplication, the <Link href="/addition-practice" style={{color: 'var(--primary)', textDecoration: 'underline'}}>addition practice</Link> and <Link href="/multiplication-practice" style={{color: 'var(--primary)', textDecoration: 'underline'}}>multiplication practice</Link> pages support the arithmetic fluency that higher operations require.
              </p>
            </div>
          </section>

          {/* SKILLS BREAKDOWN SECTION */}
          <section className="practice-section">
            <h2 className="practice-section-title">
              What You'll Practice
            </h2>
            <p className="practice-section-subtitle">
              Comprehensive subtraction practice across all grade levels
            </p>
            <div className="practice-grid">
              <div className="practice-card">
                <h3 className="practice-card-heading">K-2 Grade Skills</h3>
                <div className="practice-bullet">
                  <div className="practice-bullet-dot practice-bullet-dot-light-green"></div>
                  <span className="practice-bullet-text">Basic subtraction facts 1-10 — building automatic recall of foundational facts</span>
                </div>
                <div className="practice-bullet">
                  <div className="practice-bullet-dot practice-bullet-dot-light-green"></div>
                  <span className="practice-bullet-text">Counting back with shapes — connecting take-away to quantities</span>
                </div>
                <div className="practice-bullet">
                  <div className="practice-bullet-dot practice-bullet-dot-light-green"></div>
                  <span className="practice-bullet-text">Simple take-away problems — understanding subtraction as removal</span>
                </div>
              </div>
              <div className="practice-card">
                <h3 className="practice-card-heading">3-4 Grade Skills</h3>
                <div className="practice-bullet">
                  <div className="practice-bullet-dot practice-bullet-dot-light-green"></div>
                  <span className="practice-bullet-text">Two-digit subtraction without borrowing — mastering place value alignment</span>
                </div>
                <div className="practice-bullet">
                  <div className="practice-bullet-dot practice-bullet-dot-light-green"></div>
                  <span className="practice-bullet-text">Introduction to borrowing — understanding why trading tens works</span>
                </div>
                <div className="practice-bullet">
                  <div className="practice-bullet-dot practice-bullet-dot-light-green"></div>
                  <span className="practice-bullet-text">Subtraction word problems — applying skills in real-world contexts</span>
                </div>
              </div>
              <div className="practice-card">
                <h3 className="practice-card-heading">5-6 Grade Skills</h3>
                <div className="practice-bullet">
                  <div className="practice-bullet-dot practice-bullet-dot-light-green"></div>
                  <span className="practice-bullet-text">Multi-digit subtraction with borrowing — borrowing across multiple columns</span>
                </div>
                <div className="practice-bullet">
                  <div className="practice-bullet-dot practice-bullet-dot-light-green"></div>
                  <span className="practice-bullet-text">Complex word problems — multi-step subtraction scenarios</span>
                </div>
                <div className="practice-bullet">
                  <div className="practice-bullet-dot practice-bullet-dot-light-green"></div>
                  <span className="practice-bullet-text">Mental math strategies — subtracting efficiently without paper</span>
                </div>
              </div>
            </div>
          </section>

          {/* GRADE LEVELS SECTION */}
          <section className="practice-section">
            <h2 className="practice-section-title">
              Subtraction by Grade Level
            </h2>
            <p className="practice-section-subtitle">
              What subtraction mastery looks like at each stage, and what sticking points to watch for
            </p>
            <div className="practice-grade-grid">
              {[
                { 
                  grade: 'K', 
                  focus: 'Basic facts 1-5 with visuals',
                  detail: 'A kindergartener who has mastered subtraction can take away objects and count what remains. The common sticking point is understanding that subtraction reduces the quantity — children who don\'t yet conserve number may recount both groups. By the end of kindergarten, a child should be able to solve simple take-away problems with objects.'
                },
                { 
                  grade: '1', 
                  focus: 'Facts 1-10, take-away',
                  detail: 'A 1st grader should subtract single-digit numbers within 10 reliably. The sticking point is counting back accurately — many children count the starting number as one of the taken-away steps. By the end of 1st grade, a child should use number lines and counting back strategies correctly.'
                },
                { 
                  grade: '2', 
                  focus: 'Facts 1-20, simple problems',
                  detail: 'A 2nd grader should have automatic recall of all subtraction facts within 20. The common sticking point is fact families — children who learned addition separately may not see 13-7 as the inverse of 7+6. By the end of 2nd grade, a child should connect subtraction to addition automatically.'
                },
                { 
                  grade: '3', 
                  focus: 'Two-digit, no borrowing',
                  detail: 'A 3rd grader consolidates two-digit subtraction without borrowing and begins encountering problems that require it. The sticking point is place value — children who can\'t explain what the digits mean will struggle when borrowing appears.'
                },
                { 
                  grade: '4', 
                  focus: 'Two-digit with borrowing',
                  detail: 'A 4th grader should borrow accurately across two- and three-digit problems. Mastery means understanding why borrowing works, not just following steps. The sticking point is borrowing across zero — problems like 300-147 reveal whether place value is truly understood.'
                },
                { 
                  grade: '5', 
                  focus: 'Multi-digit subtraction',
                  detail: 'A 5th grader subtracts larger numbers and begins working with decimals. Mastery means treating decimal subtraction as a natural extension of whole-number subtraction. The sticking point is alignment — children who don\'t line up decimal points will make systematic errors.'
                },
                { 
                  grade: '6', 
                  focus: 'Complex borrowing',
                  detail: 'By 6th grade, subtraction should be fluent as a sub-skill inside algebra, ratios, and multi-step problems. Students still making borrowing errors need direct remediation focused on place value rather than more complex problem practice.'
                }
              ].map((level, index) => (
                <div key={index} className="practice-card" style={{textAlign: 'left'}}>
                  <div className="practice-grade-badge practice-grade-badge-light-green" style={{textAlign: 'center', margin: '0 auto 0.75rem'}}>
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
              Varied subtraction practice materials
            </p>
            <div className="practice-grid">
              {[
                { type: 'Basic Facts', count: '25+ problems', grades: 'K-2', desc: 'Single-digit subtraction within 20 to build automatic recall' },
                { type: 'Shape Counting', count: '20+ problems', grades: 'K-1', desc: 'Visual subtraction with shapes for conceptual understanding' },
                { type: 'Take-Away Problems', count: '15+ problems', grades: 'K-2', desc: 'Simple subtraction scenarios connecting symbols to meaning' },
                { type: 'Two-Digit (No Borrowing)', count: '20+ problems', grades: '2-3', desc: 'Vertical subtraction practice focusing on place value alignment' },
                { type: 'Two-Digit (With Borrowing)', count: '20+ problems', grades: '3-4', desc: 'Borrowing practice to master the regrouping procedure' },
                { type: 'Word Problems', count: '10+ problems', grades: '1-6', desc: 'Real-world subtraction scenarios appropriate for each grade level' }
              ].map((worksheet, index) => (
                <div key={index} className="practice-worksheet-card">
                  <div className="practice-worksheet-header">
                    <h3 className="practice-worksheet-title">
                      {worksheet.type}
                    </h3>
                    <span className="practice-count-badge practice-count-badge-light-green">
                      {worksheet.count}
                    </span>
                  </div>
                  <p className="practice-worksheet-desc">
                    {worksheet.desc}
                  </p>
                  <div className="practice-worksheet-grades practice-worksheet-grades-light-green">
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
                When Subtraction Practice Isn't Enough
              </h2>
              <p style={{
                color: 'var(--text-secondary)',
                lineHeight: '1.7',
                marginBottom: '1.25rem'
              }}>
                For some children, the gap isn't in practice — it's in the underlying place value understanding that makes borrowing make sense. If your child consistently struggles with subtraction, especially borrowing across zeros or problems where the minuend digit is smaller than the subtrahend digit, worksheets alone won't bridge that gap. Our <strong>Subtraction in 30 Days</strong> course (grades 2–4) walks through the complete progression from basic facts to borrowing across zeros. You can also browse all available courses and planners on the <Link href="/resources" style={{color: 'var(--primary)', textDecoration: 'underline'}}>resources page</Link>.
              </p>
              <a
                href="https://homeschoolmath.gumroad.com/l/cdhshb"
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
                View Subtraction in 30 Days — $57
              </a>
            </div>
          </section>

          {/* FAQ SECTION */}
          <section className="practice-section">
            <h2 className="practice-section-title">
              Frequently Asked Questions
            </h2>
            <p className="practice-section-subtitle">
              Everything you need to know about subtraction practice worksheets
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
            <div className="practice-cta-box practice-cta-box-light-green">
              <h2 className="practice-cta-title">
                Build Subtraction Fluency!
              </h2>
              <p className="practice-cta-text">
                Master subtraction skills with customized practice sheets that grow with your student. 
                From basic take-away to complex borrowing, build the foundational fluency that all higher math depends on.
              </p>
              <div className="practice-cta-container">
                <Link href="/" className="practice-cta-button practice-cta-button-light-green">
                  Create Subtraction Worksheets Now
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
              <Link href="/addition-practice" className="practice-nav-card">
                <div className="practice-nav-icon practice-nav-icon-light-green">
                  +
                </div>
                <div className="practice-nav-label">
                  Addition
                </div>
                <div className="practice-nav-desc">
                  Basic facts
                </div>
              </Link>

              <Link href="/multiplication-practice" className="practice-nav-card">
                <div className="practice-nav-icon practice-nav-icon-light-green">
                  ×
                </div>
                <div className="practice-nav-label">
                  Multiplication
                </div>
                <div className="practice-nav-desc">
                  Times tables
                </div>
              </Link>

              <Link href="/grade-1-worksheets" className="practice-nav-card">
                <div className="practice-nav-icon practice-nav-icon-light-green">
                  1
                </div>
                <div className="practice-nav-label">
                  1st Grade
                </div>
                <div className="practice-nav-desc">
                  Math worksheets
                </div>
              </Link>

              <Link href="/grade-2-worksheets" className="practice-nav-card">
                <div className="practice-nav-icon practice-nav-icon-light-green">
                  2
                </div>
                <div className="practice-nav-label">
                  2nd Grade
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
