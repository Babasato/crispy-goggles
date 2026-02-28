// app/addition-practice/page.tsx
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Addition Practice Worksheets | Free Printable Math Sheets K-6',
  description: 'Master addition with custom practice sheets. Generate free printable addition worksheets for kindergarten through 6th grade with basic facts, regrouping, and visual aids.',
}

export default function AdditionPractice() {
  const faqs = [
    {
      question: 'What addition skills can I practice with these worksheets?',
      answer: 'Our generator creates addition worksheets with basic facts (1-20), two-digit addition with and without regrouping, visual aids like number lines and shapes, and real-world word problems. Three difficulty levels are available for each grade.'
    },
    {
      question: 'When should a child start learning addition with regrouping?',
      answer: 'Most children are ready to learn addition with regrouping (carrying) in 2nd or 3rd grade, once they have a solid grasp of place value — meaning they understand that the "1" in "14" represents one ten, not one unit. If a child is struggling with regrouping, the most effective fix is almost always to go back to place value work, not to drill the carrying procedure more. Regrouping makes sense the moment place value clicks.'
    },
    {
      question: 'How do I know if my child has truly mastered addition facts or is just memorizing?',
      answer: 'A child who has genuinely internalized addition facts can answer them quickly in any format — horizontal, vertical, fill-in-the-blank, or embedded in a word problem — without slowing down when the presentation changes. A child who is only surface-memorizing will often freeze or slow down significantly when the format shifts or when facts appear in a different order than they practiced. Test fluency by mixing presentation formats and including a few facts out of the usual sequence.'
    },
    {
      question: 'My child keeps making careless addition errors. What is actually going on?',
      answer: 'Persistent "careless" errors in addition are rarely about carelessness. They usually signal one of two things: the child is still counting on fingers and occasionally miscounts, or the child has partially memorized facts but the retrieval is not yet automatic, so working memory gets overloaded on multi-step problems and errors creep in. The solution is building true fact fluency through spaced practice — not more worksheets done quickly, but fewer problems done until each answer is instant.'
    },
    {
      question: 'Can I get worksheets with visual aids for younger students?',
      answer: 'Yes. The generator includes number lines and shape counting visual aids specifically designed for kindergarten and 1st grade students to build conceptual understanding before moving to abstract number facts.'
    },
    {
      question: 'What is the difference between addition fluency and addition understanding?',
      answer: 'Understanding means a child can explain why 8 + 5 = 13 — they can decompose numbers, use a number line, or show it with objects. Fluency means they can retrieve 8 + 5 = 13 instantly without any of that. Both matter. Understanding should come first; fluency is built on top of it through practice. A child who only has fluency without understanding will hit a wall when addition gets more complex. A child who has understanding but not fluency will be slow and error-prone under pressure.'
    },
    {
      question: 'Do the answer keys include step-by-step explanations?',
      answer: 'No, answer keys provide only the final answers. This allows students to work through problems independently while giving parents quick verification.'
    },
    {
      question: 'How often do worksheets include word problems?',
      answer: 'Approximately 30% of generated worksheets include word problems with real-world addition scenarios appropriate for each grade level.'
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
            <div className="practice-badge practice-badge-blue">
              Free Printable Worksheets
            </div>
            <h1 className="practice-title">
              Addition Practice Worksheets
            </h1>
            <p className="practice-subtitle practice-subtitle-blue">
              Master Addition with Custom Practice Sheets
            </p>
            <p className="practice-description">
              Generate custom addition worksheets with basic facts, two-digit problems, and visual aids. 
              Perfect for building foundational math skills with number lines, shapes, and real-world scenarios.
            </p>

            {/* Features Grid */}
            <div className="practice-features-grid">
              <div className="practice-card practice-card-center">
                <div className="practice-card-icon">1-20</div>
                <h3 className="practice-card-title">Number Range</h3>
                <p className="practice-card-text">Basic addition facts within 1-20 range</p>
              </div>
              <div className="practice-card practice-card-center">
                <div className="practice-card-icon">📊</div>
                <h3 className="practice-card-title">Visual Aids</h3>
                <p className="practice-card-text">Number lines and shape counting</p>
              </div>
              <div className="practice-card practice-card-center">
                <div className="practice-card-icon">🔢</div>
                <h3 className="practice-card-title">Two-Digit</h3>
                <p className="practice-card-text">With and without regrouping</p>
              </div>
            </div>

            <div className="practice-cta-container">
              <Link href="/" className="practice-button practice-button-blue">
                Generate Custom Addition Worksheets
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
                Why Addition Is the Foundation That Everything Else Sits On
              </h2>
              <p style={{
                color: 'var(--text-secondary)',
                lineHeight: '1.7',
                fontSize: '1.05rem',
                marginBottom: '1rem'
              }}>
                Most parents come to addition practice looking for a worksheet that will help their child go faster. Speed is the wrong target — at least at first. The real question is whether your child has internalized the facts or is still constructing them each time. There is a meaningful difference between a child who knows that 7 + 8 = 15 and one who figures it out in half a second by counting up from 7. Both get the right answer. Only one of them has working memory left over for the rest of the problem.
              </p>
              <p style={{
                color: 'var(--text-secondary)',
                lineHeight: '1.7',
                fontSize: '1.05rem'
              }}>
                This becomes critical when multi-digit addition arrives. A child who hasn't built genuine fact fluency will hit a wall with two- and three-digit problems — not because the concept is hard, but because the cognitive load of calculating basic facts and managing the regrouping procedure at the same time is simply too high. The errors that look like "not paying attention" are almost always overloaded working memory. For students building toward multiplication, the <Link href="/subtraction-practice" style={{color: 'var(--primary)', textDecoration: 'underline'}}>subtraction practice</Link> and <Link href="/multiplication-practice" style={{color: 'var(--primary)', textDecoration: 'underline'}}>multiplication practice</Link> pages support the arithmetic fluency that higher operations require.
              </p>
            </div>
          </section>

          {/* SKILLS BREAKDOWN SECTION */}
          <section className="practice-section">
            <h2 className="practice-section-title">
              What You'll Practice
            </h2>
            <p className="practice-section-subtitle">
              Comprehensive addition practice across all grade levels
            </p>
            <div className="practice-grid">
              <div className="practice-card">
                <h3 className="practice-card-heading">K-2 Grade Skills</h3>
                <div className="practice-bullet">
                  <div className="practice-bullet-dot practice-bullet-dot-blue"></div>
                  <span className="practice-bullet-text">Basic addition facts 1-10 — building automatic recall of foundational facts</span>
                </div>
                <div className="practice-bullet">
                  <div className="practice-bullet-dot practice-bullet-dot-blue"></div>
                  <span className="practice-bullet-text">Counting with shapes and pictures — connecting quantities to numerals</span>
                </div>
                <div className="practice-bullet">
                  <div className="practice-bullet-dot practice-bullet-dot-blue"></div>
                  <span className="practice-bullet-text">Number line addition — understanding addition as moving forward on a line</span>
                </div>
              </div>
              <div className="practice-card">
                <h3 className="practice-card-heading">3-4 Grade Skills</h3>
                <div className="practice-bullet">
                  <div className="practice-bullet-dot practice-bullet-dot-blue"></div>
                  <span className="practice-bullet-text">Two-digit addition without regrouping — mastering place value alignment</span>
                </div>
                <div className="practice-bullet">
                  <div className="practice-bullet-dot practice-bullet-dot-blue"></div>
                  <span className="practice-bullet-text">Introduction to regrouping — understanding why carrying works</span>
                </div>
                <div className="practice-bullet">
                  <div className="practice-bullet-dot practice-bullet-dot-blue"></div>
                  <span className="practice-bullet-text">Addition word problems — applying skills in real-world contexts</span>
                </div>
              </div>
              <div className="practice-card">
                <h3 className="practice-card-heading">5-6 Grade Skills</h3>
                <div className="practice-bullet">
                  <div className="practice-bullet-dot practice-bullet-dot-blue"></div>
                  <span className="practice-bullet-text">Multi-digit addition with regrouping — carrying across multiple columns</span>
                </div>
                <div className="practice-bullet">
                  <div className="practice-bullet-dot practice-bullet-dot-blue"></div>
                  <span className="practice-bullet-text">Complex word problems — multi-step addition scenarios</span>
                </div>
                <div className="practice-bullet">
                  <div className="practice-bullet-dot practice-bullet-dot-blue"></div>
                  <span className="practice-bullet-text">Mental math strategies — adding efficiently without paper</span>
                </div>
              </div>
            </div>
          </section>

          {/* GRADE LEVELS SECTION */}
          <section className="practice-section">
            <h2 className="practice-section-title">
              Addition by Grade Level
            </h2>
            <p className="practice-section-subtitle">
              What addition mastery looks like at each stage, and what sticking points to watch for
            </p>
            <div className="practice-grade-grid">
              {[
                {
                  grade: 'K',
                  focus: 'Basic facts 1-5 with visuals',
                  detail: 'A kindergartener who has mastered addition can count two groups of objects and write the total. The common sticking point is one-to-one correspondence — children who recount the first group instead of holding it in mind. By the end of kindergarten, a child should be able to add any two numbers within 5 without needing physical objects.'
                },
                {
                  grade: '1',
                  focus: 'Facts 1-10, number lines',
                  detail: 'A 1st grader should add single-digit numbers within 10 quickly and reliably. The sticking point is the shift from counting-all to counting-on — many 1st graders recount from 1 every time instead of starting from the larger number. By the end of 1st grade, a child should have most sums within 10 memorized and be comfortable using a number line.'
                },
                {
                  grade: '2',
                  focus: 'Facts 1-20, simple word problems',
                  detail: 'A 2nd grader should have automatic recall of all sums within 20 and accurate two-digit addition without regrouping. The common sticking point is place value confusion — children who add 27 + 35 and write 512 because they added the tens and ones separately without understanding columns.'
                },
                {
                  grade: '3',
                  focus: 'Two-digit, no regrouping',
                  detail: 'A 3rd grader consolidates two-digit addition and begins multi-digit work. The sticking point at this stage is usually not the addition itself but reading comprehension — children miss what the problem is actually asking. By the end of 3rd grade, a child should add three-digit numbers reliably.'
                },
                {
                  grade: '4',
                  focus: 'Two-digit with regrouping',
                  detail: 'A 4th grader should have multi-digit addition fully automated. Mastery means carrying accurately across multiple columns. The sticking point is the "carried one" — children who forget to add it or add it twice. By end of 4th grade, a child should add four-digit numbers accurately.'
                },
                {
                  grade: '5',
                  focus: 'Multi-digit addition',
                  detail: 'A 5th grader adds multi-digit whole numbers and begins adding decimals. Mastery means treating decimal addition as a natural extension of whole-number addition. The sticking point is alignment — children who add 3.5 + 2.45 and line up right edges instead of decimal points.'
                },
                {
                  grade: '6',
                  focus: 'Complex regrouping',
                  detail: 'By 6th grade, addition should be completely fluent as a sub-skill inside algebra, ratios, and multi-step problems. Students still making basic fact errors under pressure need direct remediation rather than more complex problem practice.'
                }
              ].map((level, index) => (
                <div key={index} className="practice-card" style={{textAlign: 'left'}}>
                  <div className="practice-grade-badge practice-grade-badge-blue" style={{textAlign: 'center', margin: '0 auto 0.75rem'}}>
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
              Varied addition practice materials
            </p>
            <div className="practice-grid">
              {[
                { type: 'Basic Facts', count: '25+ problems', grades: 'K-2', desc: 'Single-digit addition within 20 to build automatic recall' },
                { type: 'Number Lines', count: '15+ problems', grades: 'K-2', desc: 'Visual addition using number lines for conceptual understanding' },
                { type: 'Shape Counting', count: '20+ problems', grades: 'K-1', desc: 'Count and add with shapes to connect quantities to numerals' },
                { type: 'Two-Digit (No Regrouping)', count: '20+ problems', grades: '2-3', desc: 'Vertical addition practice focusing on place value alignment' },
                { type: 'Two-Digit (With Regrouping)', count: '20+ problems', grades: '3-4', desc: 'Carrying practice to master the regrouping procedure' },
                { type: 'Word Problems', count: '10+ problems', grades: '1-6', desc: 'Real-world addition scenarios appropriate for each grade level' }
              ].map((worksheet, index) => (
                <div key={index} className="practice-worksheet-card">
                  <div className="practice-worksheet-header">
                    <h3 className="practice-worksheet-title">
                      {worksheet.type}
                    </h3>
                    <span className="practice-count-badge practice-count-badge-blue">
                      {worksheet.count}
                    </span>
                  </div>
                  <p className="practice-worksheet-desc">
                    {worksheet.desc}
                  </p>
                  <div className="practice-worksheet-grades practice-worksheet-grades-blue">
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
                When Addition Practice Isn't Enough
              </h2>
              <p style={{
                color: 'var(--text-secondary)',
                lineHeight: '1.7',
                marginBottom: '1.25rem'
              }}>
                For some children, the gap isn't in practice — it's in the underlying number sense that makes addition intuitive. If your child is still counting on fingers past 1st grade, struggling with place value, or not connecting quantities to symbols, worksheets alone won't bridge that gap. Our <strong>Number Sense Foundations</strong> course (K–2) builds the conceptual groundwork that makes fact fluency stick. You can also browse all available courses and planners on the <Link href="/resources" style={{color: 'var(--primary)', textDecoration: 'underline'}}>resources page</Link>.
              </p>
              <a
                href="https://homeschoolmath.gumroad.com/l/mfikwi"
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
                View Number Sense Foundations — $57
              </a>
            </div>
          </section>

          {/* FAQ SECTION */}
          <section className="practice-section">
            <h2 className="practice-section-title">
              Frequently Asked Questions
            </h2>
            <p className="practice-section-subtitle">
              Everything you need to know about addition practice worksheets
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
            <div className="practice-cta-box practice-cta-box-blue">
              <h2 className="practice-cta-title">
                Build Addition Fluency!
              </h2>
              <p className="practice-cta-text">
                Master addition skills with customized practice sheets that grow with your student. 
                From basic counting to complex regrouping, build the foundational fluency that all higher math depends on.
              </p>
              <div className="practice-cta-container">
                <Link href="/" className="practice-cta-button practice-cta-button-blue">
                  Create Addition Worksheets Now
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
              <Link href="/subtraction-practice" className="practice-nav-card">
                <div className="practice-nav-icon practice-nav-icon-blue">
                  −
                </div>
                <div className="practice-nav-label">
                  Subtraction
                </div>
                <div className="practice-nav-desc">
                  Basic facts
                </div>
              </Link>

              <Link href="/multiplication-practice" className="practice-nav-card">
                <div className="practice-nav-icon practice-nav-icon-blue">
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
                <div className="practice-nav-icon practice-nav-icon-blue">
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
                <div className="practice-nav-icon practice-nav-icon-blue">
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