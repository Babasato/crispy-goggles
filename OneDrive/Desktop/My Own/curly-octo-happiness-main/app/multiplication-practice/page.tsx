// app/multiplication-practice/page.tsx
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Multiplication Practice Worksheets | Free Printable Times Tables',
  description: 'Master multiplication with custom practice sheets. Generate free printable multiplication worksheets for 2nd through 6th grade with times tables, arrays, and word problems.',
  alternates: {
    canonical: 'https://homeschoolmath.site/multiplication-practice',
  },
}

export default function MultiplicationPractice() {
  const faqs = [
    {
      question: 'What multiplication skills can I practice with these worksheets?',
      answer: 'Our generator creates multiplication worksheets with times tables practice up to 12×12, basic multiplication facts, array visualizations, and real-world word problems. Three difficulty levels: Easy (1-5), Medium (1-8), and Hard (1-12).'
    },
    {
      question: 'What order should I teach the times tables in?',
      answer: 'The most effective order is not 1s, 2s, 3s in sequence. Start with the 2s and 5s because children often already have a sense of skip-counting these. Then move to 10s, 11s, and squares (3×3, 4×4, etc.), because these have memorable patterns. Save the 6s, 7s, and 8s for last — these are the hardest because they have no strong patterns and must be memorized directly.'
    },
    {
      question: 'My child knows the times tables in order but freezes on random fact quizzes. What is the problem?',
      answer: 'This is known as sequential dependency. The child has memorized the tables as a chant, so they can get to 7×8 by running through the table from the beginning, but they cannot retrieve the fact directly. The fix is to practice facts in random order to break the sequence and build true automaticity.'
    },
    {
      question: 'Do you include multi-digit multiplication problems?',
      answer: 'No, our multiplication worksheets focus on basic multiplication facts and times tables only. The goal at this stage is fluency with core facts, which then becomes the foundation for multi-digit work. Attempting multi-digit multiplication before basic facts are automatic is the single most common cause of errors and frustration.'
    },
    {
      question: 'How long should multiplication fact practice take each day?',
      answer: 'Ten to fifteen minutes of focused multiplication practice daily will build fluency faster than an hour once a week. The key is that practice should stop when focus drops — a child drilling facts while mentally checked out is not building automaticity, they are just passing time.'
    },
    {
      question: 'Are array visualizations included in all worksheets?',
      answer: 'Array visualizations are primarily included in worksheets for grades 2-3 to build conceptual understanding of multiplication as equal groups. For older grades, worksheets focus more on fact fluency and word problems, since the concept is established and the goal becomes automaticity.'
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
            <div className="practice-badge practice-badge-purple">
              Free Printable Worksheets
            </div>
            <h1 className="practice-title">
              Multiplication Practice Worksheets
            </h1>
            <p className="practice-subtitle practice-subtitle-purple">
              Master Multiplication with Custom Practice Sheets
            </p>
            <p className="practice-description">
              Generate custom multiplication worksheets with times tables, array visualizations, and real-world scenarios. 
              Perfect for building multiplication fluency and conceptual understanding.
            </p>

            {/* Features Grid */}
            <div className="practice-features-grid">
              <div className="practice-card practice-card-center">
                <div className="practice-card-icon">12×12</div>
                <h3 className="practice-card-title">Times Tables</h3>
                <p className="practice-card-text">Complete practice up to 12×12</p>
              </div>
              <div className="practice-card practice-card-center">
                <div className="practice-card-icon">🔲</div>
                <h3 className="practice-card-title">Array Visuals</h3>
                <p className="practice-card-text">Visual multiplication models</p>
              </div>
              <div className="practice-card practice-card-center">
                <div className="practice-card-icon">🎯</div>
                <h3 className="practice-card-title">3 Levels</h3>
                <p className="practice-card-text">Easy, Medium, Hard difficulty</p>
              </div>
            </div>

            <div className="practice-cta-container">
              <Link href="/" className="practice-button practice-button-purple">
                Generate Custom Multiplication Worksheets
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
                Why Times Tables Are Hard — and Why Most Practice Makes It Harder
              </h2>
              <p style={{
                color: 'var(--text-secondary)',
                lineHeight: '1.7',
                fontSize: '1.05rem',
                marginBottom: '1rem'
              }}>
                Most children who struggle with multiplication facts aren't struggling with the numbers—they're struggling with how they're being practiced. The most common mistake is drilling tables in sequence (3×1, 3×2, 3×3). Children learn the chant but not the facts. Ask them 3×7 in isolation and they have to count up from the beginning. That's not fluency; that's just a longer version of counting on fingers.
              </p>
              <p style={{
                color: 'var(--text-secondary)',
                lineHeight: '1.7',
                fontSize: '1.05rem'
              }}>
                The worksheets here are organized to build both understanding and fluency—starting with arrays that make the concept visible, then progressing to random-order fact practice that breaks sequential dependency. For students building toward division, the <Link href="/division-practice" style={{color: 'var(--primary)', textDecoration: 'underline'}}>division practice</Link> and <Link href="/fractions-practice" style={{color: 'var(--primary)', textDecoration: 'underline'}}>fractions practice</Link> pages support the arithmetic fluency that higher operations require.
              </p>
            </div>
          </section>

          {/* SKILLS BREAKDOWN SECTION */}
          <section className="practice-section">
            <h2 className="practice-section-title">
              What You'll Practice
            </h2>
            <p className="practice-section-subtitle">
              Comprehensive multiplication practice across all grade levels
            </p>
            <div className="practice-grid">
              <div className="practice-card">
                <h3 className="practice-card-heading">2-3 Grade Skills</h3>
                <div className="practice-bullet">
                  <div className="practice-bullet-dot practice-bullet-dot-purple"></div>
                  <span className="practice-bullet-text">Times tables 1-5 and introductory arrays — building conceptual understanding of equal groups</span>
                </div>
                <div className="practice-bullet">
                  <div className="practice-bullet-dot practice-bullet-dot-purple"></div>
                  <span className="practice-bullet-text">Understanding equal groups and skip counting — connecting repeated addition to multiplication</span>
                </div>
              </div>
              <div className="practice-card">
                <h3 className="practice-card-heading">3-4 Grade Skills</h3>
                <div className="practice-bullet">
                  <div className="practice-bullet-dot practice-bullet-dot-purple"></div>
                  <span className="practice-bullet-text">Times tables 1-8 and fact retrieval — moving from counting to automatic recall</span>
                </div>
                <div className="practice-bullet">
                  <div className="practice-bullet-dot practice-bullet-dot-purple"></div>
                  <span className="practice-bullet-text">Solving simple word problems with products to 64 — applying facts in context</span>
                </div>
              </div>
              <div className="practice-card">
                <h3 className="practice-card-heading">5-6 Grade Skills</h3>
                <div className="practice-bullet">
                  <div className="practice-bullet-dot practice-bullet-dot-purple"></div>
                  <span className="practice-bullet-text">Full 1-12 times tables mastery — automatic recall of all facts without hesitation</span>
                </div>
                <div className="practice-bullet">
                  <div className="practice-bullet-dot practice-bullet-dot-purple"></div>
                  <span className="practice-bullet-text">Complex multi-step word problems — using multiplication as a tool in extended problems</span>
                </div>
              </div>
            </div>
          </section>

          {/* GRADE LEVELS SECTION */}
          <section className="practice-section">
            <h2 className="practice-section-title">
              Multiplication by Grade Level
            </h2>
            <p className="practice-section-subtitle">
              What multiplication mastery looks like at each stage, and what sticking points to watch for
            </p>
            <div className="practice-grade-grid">
              {[
                {
                  grade: '2',
                  focus: 'Arrays & Equal Groups',
                  detail: 'A 2nd grader who has mastered multiplication readiness can draw an array for a fact and write the equation. The common sticking point is understanding that rows represent equal groups — children who draw the correct total but can\'t explain the grouping haven\'t yet grasped the concept. Focus on 2s, 5s, and 10s at this stage.'
                },
                {
                  grade: '3',
                  focus: 'Core Fact Retrieval',
                  detail: 'This is the critical year for multiplication. Mastery means recalling facts through 8×8 without counting up or skip-counting. The common sticking point is the 6s, 7s, and 8s — these are the hardest to memorize because they have no strong patterns. By the end of 3rd grade, a child should have most core facts automatic.'
                },
                {
                  grade: '4',
                  focus: 'Automaticity to 12×12',
                  detail: 'A 4th grader should have all facts through 12×12 fully automatic. This is essential because multi-digit multiplication and long division require so much working memory that basic facts must be effortless. The sticking point is usually the 7s and 8s — if these aren\'t solid, multi-digit work will be frustrating.'
                },
                {
                  grade: '5',
                  focus: 'Tool for Application',
                  detail: 'By 5th grade, multiplication is a sub-skill used in fractions, area, and volume. Mastery means facts are so automatic that the child never notices them as separate steps. Students still slow with basic facts at this stage benefit from direct fluency work before attempting more complex problems.'
                }
              ].map((level, index) => (
                <div key={index} className="practice-card" style={{textAlign: 'left'}}>
                  <div className="practice-grade-badge practice-grade-badge-purple" style={{textAlign: 'center', margin: '0 auto 0.75rem'}}>
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
              Varied multiplication practice materials
            </p>
            <div className="practice-grid">
              {[
                { type: 'Times Tables', count: '25+ problems', grades: '2-4', desc: 'Systematic practice with each times table in isolation' },
                { type: 'Array Visuals', count: '15+ problems', grades: '2-3', desc: 'Multiplication as equal groups with visual models' },
                { type: 'Mixed Facts', count: '30+ problems', grades: '3-5', desc: 'Random-order fact practice to build automaticity' },
                { type: 'Missing Factors', count: '20+ problems', grades: '3-5', desc: 'Find the missing number in multiplication equations' },
                { type: 'Word Problems', count: '15+ problems', grades: '3-6', desc: 'Real-world multiplication scenarios' },
                { type: 'Fact Families', count: '20+ problems', grades: '3-5', desc: 'Connect multiplication to division through fact families' }
              ].map((worksheet, index) => (
                <div key={index} className="practice-worksheet-card">
                  <div className="practice-worksheet-header">
                    <h3 className="practice-worksheet-title">
                      {worksheet.type}
                    </h3>
                    <span className="practice-count-badge practice-count-badge-purple">
                      {worksheet.count}
                    </span>
                  </div>
                  <p className="practice-worksheet-desc">
                    {worksheet.desc}
                  </p>
                  <div className="practice-worksheet-grades practice-worksheet-grades-purple">
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
                When Multiplication Practice Isn't Enough
              </h2>
              <p style={{
                color: 'var(--text-secondary)',
                lineHeight: '1.7',
                marginBottom: '1.25rem'
              }}>
                For some children, the gap isn't in practice — it's in the conceptual foundation that makes multiplication make sense. If your child can recite the times tables in order but freezes on random facts, or doesn't connect multiplication to equal groups, worksheets alone won't bridge that gap. Our <strong>Multiplication & Division Foundations</strong> course (grades 3–5) covers the full progression from arrays through fact fluency and into division as the inverse operation. You can also browse all available courses and planners on the <Link href="/resources" style={{color: 'var(--primary)', textDecoration: 'underline'}}>resources page</Link>.
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
              Everything you need to know about multiplication practice worksheets
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
            <div className="practice-cta-box practice-cta-box-purple">
              <h2 className="practice-cta-title">
                Build Multiplication Fluency!
              </h2>
              <p className="practice-cta-text">
                Master multiplication facts with customized practice sheets that grow with your student. 
                From basic arrays to complete times tables fluency, build the foundational skills that all higher math depends on.
              </p>
              <div className="practice-cta-container">
                <Link href="/" className="practice-cta-button practice-cta-button-purple">
                  Create Multiplication Worksheets Now
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
                <div className="practice-nav-icon practice-nav-icon-purple">
                  ÷
                </div>
                <div className="practice-nav-label">
                  Division
                </div>
                <div className="practice-nav-desc">
                  Basic facts
                </div>
              </Link>

              <Link href="/fractions-practice" className="practice-nav-card">
                <div className="practice-nav-icon practice-nav-icon-purple">
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
                <div className="practice-nav-icon practice-nav-icon-purple">
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
                <div className="practice-nav-icon practice-nav-icon-purple">
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