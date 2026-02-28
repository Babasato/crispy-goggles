// app/division-practice/page.tsx
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Division Practice Worksheets | Free Printable Math Sheets 3rd-6th Grade',
  description: 'Master division with custom practice sheets. Generate free printable division worksheets for 3rd through 6th grade with basic facts, inverse operations, and sharing scenarios.',
}

export default function DivisionPractice() {
  const faqs = [
    {
      question: 'What division skills can I practice with these worksheets?',
      answer: 'Our generator creates division worksheets with basic division facts, division as the inverse of multiplication, equal sharing word problems, and practice within multiplication fact families. Three difficulty levels available.'
    },
    {
      question: 'Why does my child understand multiplication but struggle with division?',
      answer: 'This is the most common division complaint, and the reason is structural: multiplication is a forward operation, while division is a backward operation. Children who learned multiplication as a pattern or chant never built the flexible understanding needed to run the operation in reverse. The most effective fix is fact family practice — grouping 3×4=12, 4×3=12, 12÷3=4, and 12÷4=3 together so the child sees all four facts as one interconnected idea.'
    },
    {
      question: 'Do you include long division or problems with remainders?',
      answer: 'No, our division worksheets focus on basic division facts only. We do not include long division, remainders, or complex fraction division. The goal of these worksheets is to build fluency with core division facts within the 12×12 multiplication table.'
    },
    {
      question: 'What is the best way to teach division to a child who does not know their multiplication facts yet?',
      answer: 'Do not teach division yet. A child without solid multiplication facts will learn division as a separate set of facts to memorize, which doubles the burden. Two to four weeks of focused multiplication fact work before introducing division will make the division unit dramatically faster.'
    },
    {
      question: 'Are visual aids included for division worksheets?',
      answer: 'While we focus on numerical practice, we do not include specific visual aids for division. The worksheets emphasize the relationship between multiplication and division through fact families.'
    },
    {
      question: 'How do I explain division to a child who keeps confusing the dividend and divisor?',
      answer: 'Go back to equal sharing language: "24 divided by 4" means "24 things shared equally into 4 groups." Once they can translate an expression into a sharing story, the procedural notation makes sense.'
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
            <div className="practice-badge practice-badge-orange">
              Free Printable Worksheets
            </div>
            <h1 className="practice-title">
              Division Practice Worksheets
            </h1>
            <p className="practice-subtitle practice-subtitle-orange">
              Master Division with Custom Practice Sheets
            </p>
            <p className="practice-description">
              Generate custom division worksheets with basic facts, inverse operations, and equal sharing scenarios. 
              Perfect for building division fluency and conceptual understanding.
            </p>

            {/* Features Grid */}
            <div className="practice-features-grid">
              <div className="practice-card practice-card-center">
                <div className="practice-card-icon">÷</div>
                <h3 className="practice-card-title">Basic Facts</h3>
                <p className="practice-card-text">Division within fact families</p>
              </div>
              <div className="practice-card practice-card-center">
                <div className="practice-card-icon">🔄</div>
                <h3 className="practice-card-title">Inverse Operations</h3>
                <p className="practice-card-text">Connection to multiplication</p>
              </div>
              <div className="practice-card practice-card-center">
                <div className="practice-card-icon">📝</div>
                <h3 className="practice-card-title">Word Problems</h3>
                <p className="practice-card-text">Equal sharing scenarios</p>
              </div>
            </div>

            <div className="practice-cta-container">
              <Link href="/generator" className="practice-button practice-button-orange">
                Generate Custom Division Worksheets
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
                Why Division Trips Kids Up When Multiplication Didn't
              </h2>
              <p style={{
                color: 'var(--text-secondary)',
                lineHeight: '1.7',
                fontSize: '1.05rem',
                marginBottom: '1rem'
              }}>
                Division is the operation that exposes every gap in how multiplication was taught. A child who memorized the times tables as a sequence can usually get through multiplication by counting up through the table. But that same strategy breaks down in division, because division asks the question in reverse.
              </p>
              <p style={{
                color: 'var(--text-secondary)',
                lineHeight: '1.7',
                fontSize: '1.05rem'
              }}>
                The children who sail through division almost always learned their multiplication facts with the division facts attached — as <strong>fact families</strong>. They know that 7, 8, and 56 belong together, and that belonging goes in both directions. For students building toward fractions, the <Link href="/multiplication-practice" style={{color: 'var(--primary)', textDecoration: 'underline'}}>multiplication practice</Link> and <Link href="/fractions-practice" style={{color: 'var(--primary)', textDecoration: 'underline'}}>fractions practice</Link> pages support the arithmetic fluency that division requires.
              </p>
            </div>
          </section>

          {/* SKILLS BREAKDOWN SECTION */}
          <section className="practice-section">
            <h2 className="practice-section-title">
              What You'll Practice
            </h2>
            <p className="practice-section-subtitle">
              Comprehensive division practice built on fact family understanding
            </p>
            <div className="practice-grid">
              <div className="practice-card">
                <h3 className="practice-card-heading">3rd Grade Skills</h3>
                <div className="practice-bullet">
                  <div className="practice-bullet-dot practice-bullet-dot-orange"></div>
                  <span className="practice-bullet-text">Basic division concepts — understanding division as sharing and grouping</span>
                </div>
                <div className="practice-bullet">
                  <div className="practice-bullet-dot practice-bullet-dot-orange"></div>
                  <span className="practice-bullet-text">Equal sharing — real-world scenarios that make division meaningful</span>
                </div>
                <div className="practice-bullet">
                  <div className="practice-bullet-dot practice-bullet-dot-orange"></div>
                  <span className="practice-bullet-text">Connection to multiplication — seeing division as the inverse operation</span>
                </div>
              </div>
              <div className="practice-card">
                <h3 className="practice-card-heading">4th Grade Skills</h3>
                <div className="practice-bullet">
                  <div className="practice-bullet-dot practice-bullet-dot-orange"></div>
                  <span className="practice-bullet-text">Division facts fluency — automatic recall within the 12×12 table</span>
                </div>
                <div className="practice-bullet">
                  <div className="practice-bullet-dot practice-bullet-dot-orange"></div>
                  <span className="practice-bullet-text">Fact families — understanding 3×4=12 and 12÷3=4 as connected facts</span>
                </div>
                <div className="practice-bullet">
                  <div className="practice-bullet-dot practice-bullet-dot-orange"></div>
                  <span className="practice-bullet-text">Word problems — applying division in varied contexts</span>
                </div>
              </div>
              <div className="practice-card">
                <h3 className="practice-card-heading">5th–6th Grade Skills</h3>
                <div className="practice-bullet">
                  <div className="practice-bullet-dot practice-bullet-dot-orange"></div>
                  <span className="practice-bullet-text">Division facts mastery — fluency with all division facts</span>
                </div>
                <div className="practice-bullet">
                  <div className="practice-bullet-dot practice-bullet-dot-orange"></div>
                  <span className="practice-bullet-text">Multi-step problems — division as a tool for complex problem-solving</span>
                </div>
                <div className="practice-bullet">
                  <div className="practice-bullet-dot practice-bullet-dot-orange"></div>
                  <span className="practice-bullet-text">Fraction and ratio readiness — division understanding applied to advanced topics</span>
                </div>
              </div>
            </div>
          </section>

          {/* GRADE LEVELS SECTION */}
          <section className="practice-section">
            <h2 className="practice-section-title">
              Division by Grade Level
            </h2>
            <p className="practice-section-subtitle">
              What division mastery looks like at each stage, and what sticking points to watch for
            </p>
            <div className="practice-grade-grid">
              {[
                {
                  grade: '3',
                  focus: 'Basic concepts, sharing',
                  detail: 'A 3rd grader who has mastered division can solve 12÷3 by thinking "three groups, how many in each?" and sketch it out. The common sticking point is treating division as magic rather than a logical operation. Focus on the meaning of division before the facts.'
                },
                {
                  grade: '4',
                  focus: 'Facts practice, families',
                  detail: 'A 4th grader should be building division fact fluency. Mastery means answering facts within the 12×12 table quickly. The common sticking point is not connecting division to multiplication — children who learned facts separately often treat division as a whole new subject. Fact family practice is the most effective approach here.'
                },
                {
                  grade: '5',
                  focus: 'Fluency, word problems',
                  detail: 'A 5th grader uses division as a tool for multi-digit problems, fractions, and ratios. Gaps in division fluency make 5th-grade division feel impossible. The sticking point is when children can\'t hold the fact retrieval and the multi-step thinking in memory at the same time.'
                },
                {
                  grade: '6',
                  focus: 'Mastery, applications',
                  detail: 'By 6th grade, division appears inside fractions and early algebra. If a 6th grader is struggling, tracing back to basic fact fluency is almost always the right starting point — remediation at the fact level, not more complex problem practice.'
                }
              ].map((level, index) => (
                <div key={index} className="practice-card" style={{textAlign: 'left'}}>
                  <div className="practice-grade-badge practice-grade-badge-orange" style={{textAlign: 'center', margin: '0 auto 0.75rem'}}>
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
              Varied division practice materials
            </p>
            <div className="practice-grid">
              {[
                { type: 'Basic Division Facts', count: '20+ problems', grades: '3-4', desc: 'Division facts within the 12×12 multiplication table to build automatic recall' },
                { type: 'Fact Families', count: '18+ problems', grades: '3-5', desc: 'Connect division to multiplication through fact families for conceptual understanding' },
                { type: 'Missing Divisors', count: '15+ problems', grades: '3-5', desc: 'Find the missing number in division equations to build flexible thinking' },
                { type: 'Equal Sharing', count: '16+ problems', grades: '3-4', desc: 'Real-world word problems with sharing scenarios that make division meaningful' },
                { type: 'Inverse Operations', count: '15+ problems', grades: '4-5', desc: 'Practice seeing the relationship between × and ÷ to build fluency' },
                { type: 'Mixed Division Practice', count: '25+ problems', grades: '4-6', desc: 'Interleaved division problems to build durable, automatic fluency' }
              ].map((worksheet, index) => (
                <div key={index} className="practice-worksheet-card">
                  <div className="practice-worksheet-header">
                    <h3 className="practice-worksheet-title">
                      {worksheet.type}
                    </h3>
                    <span className="practice-count-badge practice-count-badge-orange">
                      {worksheet.count}
                    </span>
                  </div>
                  <p className="practice-worksheet-desc">
                    {worksheet.desc}
                  </p>
                  <div className="practice-worksheet-grades practice-worksheet-grades-orange">
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
                When Division Confusion Runs Deeper Than Practice Can Fix
              </h2>
              <p style={{
                color: 'var(--text-secondary)',
                lineHeight: '1.7',
                marginBottom: '1.25rem'
              }}>
                If your child consistently struggles with division despite worksheet practice — guessing rather than knowing, avoiding division problems, or not connecting division to multiplication — the underlying number sense may need direct attention. Our <strong>Multiplication & Division Foundations</strong> course (grades 3–5) addresses the arithmetic fluency that division requires. You can also browse all available courses and planners on the <Link href="/resources" style={{color: 'var(--primary)', textDecoration: 'underline'}}>resources page</Link>.
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
              Everything you need to know about division practice worksheets
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
            <div className="practice-cta-box practice-cta-box-orange">
              <h2 className="practice-cta-title">
                Build Division Fluency!
              </h2>
              <p className="practice-cta-text">
                Master division facts with customized practice sheets that grow with your student. 
                From basic facts to fact families, build the division fluency that makes all higher math possible.
              </p>
              <div className="practice-cta-container">
                <Link href="/generator" className="practice-cta-button practice-cta-button-orange">
                  Create Division Worksheets Now
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
              <Link href="/multiplication-practice" className="practice-nav-card">
                <div className="practice-nav-icon practice-nav-icon-orange">
                  ×
                </div>
                <div className="practice-nav-label">
                  Multiplication
                </div>
                <div className="practice-nav-desc">
                  Times tables
                </div>
              </Link>

              <Link href="/fractions-practice" className="practice-nav-card">
                <div className="practice-nav-icon practice-nav-icon-orange">
                  ½
                </div>
                <div className="practice-nav-label">
                  Fractions
                </div>
                <div className="practice-nav-desc">
                  Basic concepts
                </div>
              </Link>

              <Link href="/grade-3-worksheets" className="practice-nav-card">
                <div className="practice-nav-icon practice-nav-icon-orange">
                  3
                </div>
                <div className="practice-nav-label">
                  3rd Grade
                </div>
                <div className="practice-nav-desc">
                  Math worksheets
                </div>
              </Link>

              <Link href="/grade-4-worksheets" className="practice-nav-card">
                <div className="practice-nav-icon practice-nav-icon-orange">
                  4
                </div>
                <div className="practice-nav-label">
                  4th Grade
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