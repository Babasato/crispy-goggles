// app/word-problems/page.tsx
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Math Word Problems Worksheets | Story Problems Practice 1st-6th Grade',
  description: 'Master math word problems with custom practice sheets. Generate free printable story problem worksheets for 1st through 6th grade with real-world scenarios and multiple operations.',
}

export default function WordProblems() {
  const faqs = [
    {
      question: 'What types of word problems are included in the worksheets?',
      answer: 'Our generator creates word problem worksheets with real-world scenarios involving addition, subtraction, multiplication, and division. Problems include shopping, sharing, time, money, distance, measurement, and everyday situations appropriate for each grade level. Each problem is designed to require genuine mathematical thinking, not just pattern matching.'
    },
    {
      question: 'Why do some children struggle with word problems even when they know the math facts?',
      answer: 'Word problems ask children to do two things at once: decode language and apply mathematics. A child who knows their facts can still struggle because reading comprehension, not math, is the bottleneck. The problem is often that they can\'t visualize what the problem is describing. The fix is teaching them to translate the story into a mental picture before reaching for numbers. Reading the problem aloud and asking "What is actually happening here?" is often more effective than re-explaining the operation.'
    },
    {
      question: 'How often do worksheets include word problems?',
      answer: 'Word problems have a 30% chance of appearing in any generated worksheet. This ensures students get regular practice with story problems while maintaining variety in their math practice. You can also generate dedicated word problem worksheets focused on specific operations or grade levels.'
    },
    {
      question: 'Are the word problems age-appropriate for different grade levels?',
      answer: 'Yes! We carefully design problems with appropriate vocabulary, number ranges, and complexity for each grade level. Younger students get simple, concrete scenarios with numbers they can visualize. Older students tackle complex, multi-step problems that require planning and reasoning. A 1st grader might solve "Tom has 3 apples and gets 2 more," while a 5th grader handles "A recipe calls for 2/3 cup of flour. If you want to make half the recipe, how much flour do you need?"'
    },
    {
      question: 'Do word problems include visual aids or supports?',
      answer: 'While the primary focus is on reading comprehension and problem-solving, some word problems for younger grades include simple visual context. The main emphasis is developing the ability to extract mathematical information from text — a skill that becomes increasingly important in upper elementary and beyond.'
    },
    {
      question: 'How do I help my child who guesses the operation without reading the problem?',
      answer: 'This is extremely common — children look at the numbers and guess whether to add, subtract, multiply, or divide based on what they\'ve been practicing. The fix is to remove the numbers temporarily. Cover them and ask: "What is this story about? What is happening?" Once they can describe the situation in their own words, uncover the numbers and ask which operation matches the story. This breaks the guessing habit and builds genuine comprehension.'
    },
    {
      question: 'What is the difference between a simple word problem and a complex one?',
      answer: 'Simple word problems involve one step and use direct language: "Sarah has 12 stickers and gives 4 away." Complex problems involve multiple steps, extraneous information, or indirect language: "Tom bought 3 packs of pencils. Each pack had 8 pencils. He gave 5 pencils to his sister. How many does he have left?" The extra step of ignoring irrelevant information is itself a cognitive skill that needs practice.'
    },
    {
      question: 'Should my child be taught to underline key words (like "in all" or "left")?',
      answer: 'This strategy is controversial and often counterproductive. Children who rely on keyword spotting will eventually be tricked by problems that use those words in different contexts. For example, "How many are left?" in a subtraction problem is safe, but "What is left over?" in a division problem means something else. The better approach is teaching them to visualize the scenario and understand what is actually happening, not just hunt for signal words.'
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
            <div className="practice-badge practice-badge-green">
              Free Printable Worksheets
            </div>
            <h1 className="practice-title">
              Math Word Problems Worksheets
            </h1>
            <p className="practice-subtitle practice-subtitle-green">
              Master Story Problems with Custom Practice Sheets
            </p>
            <p className="practice-description">
              Generate custom word problem worksheets with real-world scenarios and multiple operations. 
              Perfect for developing critical thinking, reading comprehension, and mathematical reasoning skills.
            </p>

            {/* Features Grid */}
            <div className="practice-features-grid">
              <div className="practice-card practice-card-center">
                <div className="practice-card-icon">📖</div>
                <h3 className="practice-card-title">Real-World Scenarios</h3>
                <p className="practice-card-text">Shopping, time, money, measurement, sharing</p>
              </div>
              <div className="practice-card practice-card-center">
                <div className="practice-card-icon">➕➖✖️➗</div>
                <h3 className="practice-card-title">All Operations</h3>
                <p className="practice-card-text">Addition, subtraction, multiplication, division</p>
              </div>
              <div className="practice-card practice-card-center">
                <div className="practice-card-icon">🎯</div>
                <h3 className="practice-card-title">Multi-Step Problems</h3>
                <p className="practice-card-text">Complex scenarios for upper grades</p>
              </div>
            </div>

            <div className="practice-cta-container">
              <Link href="/" className="practice-button practice-button-green">
                Generate Custom Word Problem Worksheets
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
                Why Word Problems Reveal What Math Facts Hide
              </h2>
              <p style={{
                color: 'var(--text-secondary)',
                lineHeight: '1.7',
                fontSize: '1.05rem',
                marginBottom: '1rem'
              }}>
                A child who can complete a page of addition problems in two minutes might still freeze when faced with this: "Maria has 15 apples. She gives 6 to her friend and then buys 4 more at the store. How many does she have now?" The difference isn't math ability — it's the ability to translate a situation into mathematical action. Word problems are the first place where math stops being about following instructions and starts being about thinking.
              </p>
              <p style={{
                color: 'var(--text-secondary)',
                lineHeight: '1.7',
                fontSize: '1.05rem',
                marginBottom: '1rem'
              }}>
                The children who handle word problems well aren't necessarily better at calculation. They're better at visualizing. When they read a problem, a mental movie plays — they see the apples, the giving away, the buying more. Only after the movie is clear do they reach for numbers. Children who struggle with word problems often skip the movie entirely and grab the first two numbers they see, guessing at the operation based on what they've been practicing that week.
              </p>
              <p style={{
                color: 'var(--text-secondary)',
                lineHeight: '1.7',
                fontSize: '1.05rem'
              }}>
                The worksheets here are designed to build that visualization skill gradually. Problems progress from simple one-step scenarios to complex multi-step situations with extraneous information. For students who need to strengthen the underlying number sense that makes problem-solving intuitive, the <Link href="/addition-practice" style={{color: 'var(--primary)', textDecoration: 'underline'}}>addition practice</Link> and <Link href="/subtraction-practice" style={{color: 'var(--primary)', textDecoration: 'underline'}}>subtraction practice</Link> pages provide the foundational fluency word problems depend on.
              </p>
            </div>
          </section>

          {/* SKILLS BREAKDOWN SECTION */}
          <section className="practice-section">
            <h2 className="practice-section-title">
              What You'll Practice
            </h2>
            <p className="practice-section-subtitle">
              Comprehensive word problem practice across all grade levels
            </p>
            <div className="practice-grid">
              <div className="practice-card">
                <h3 className="practice-card-heading">1st-2nd Grade Skills</h3>
                <div className="practice-bullet">
                  <div className="practice-bullet-dot practice-bullet-dot-green"></div>
                  <span className="practice-bullet-text">Single-step addition problems — combining quantities in real-world contexts</span>
                </div>
                <div className="practice-bullet">
                  <div className="practice-bullet-dot practice-bullet-dot-green"></div>
                  <span className="practice-bullet-text">Simple subtraction scenarios — taking away and finding differences</span>
                </div>
                <div className="practice-bullet">
                  <div className="practice-bullet-dot practice-bullet-dot-green"></div>
                  <span className="practice-bullet-text">Counting and sharing stories — building the foundation for multiplication and division</span>
                </div>
              </div>
              <div className="practice-card">
                <h3 className="practice-card-heading">3rd-4th Grade Skills</h3>
                <div className="practice-bullet">
                  <div className="practice-bullet-dot practice-bullet-dot-green"></div>
                  <span className="practice-bullet-text">Multi-step word problems — planning multiple operations in sequence</span>
                </div>
                <div className="practice-bullet">
                  <div className="practice-bullet-dot practice-bullet-dot-green"></div>
                  <span className="practice-bullet-text">Multiplication and division contexts — equal groups, arrays, and sharing</span>
                </div>
                <div className="practice-bullet">
                  <div className="practice-bullet-dot practice-bullet-dot-green"></div>
                  <span className="practice-bullet-text">Money and time problems — real-world financial and scheduling scenarios</span>
                </div>
              </div>
              <div className="practice-card">
                <h3 className="practice-card-heading">5th-6th Grade Skills</h3>
                <div className="practice-bullet">
                  <div className="practice-bullet-dot practice-bullet-dot-green"></div>
                  <span className="practice-bullet-text">Complex multi-step problems — problems requiring planning and organization</span>
                </div>
                <div className="practice-bullet">
                  <div className="practice-bullet-dot practice-bullet-dot-green"></div>
                  <span className="practice-bullet-text">Multiple operations required — addition, subtraction, multiplication, and division in one problem</span>
                </div>
                <div className="practice-bullet">
                  <div className="practice-bullet-dot practice-bullet-dot-green"></div>
                  <span className="practice-bullet-text">Extraneous information — learning to ignore irrelevant details</span>
                </div>
              </div>
            </div>
          </section>

          {/* GRADE LEVELS SECTION */}
          <section className="practice-section">
            <h2 className="practice-section-title">
              Word Problems by Grade Level
            </h2>
            <p className="practice-section-subtitle">
              What word problem mastery looks like at each stage, and what sticking points to watch for
            </p>
            <div className="practice-grade-grid">
              {[
                {
                  grade: '1-2',
                  focus: 'Single-step, addition/subtraction',
                  detail: 'A 1st or 2nd grader who has mastered word problems can read a simple story, identify whether to add or subtract, and explain why. The common sticking point is grabbing numbers without understanding the situation — a child who sees "5 apples" and "3 apples" and adds because they just practiced addition, even when the story says "ate" or "gave away." By the end of 2nd grade, a child should be able to act out a word problem with objects before solving it.'
                },
                {
                  grade: '3-4',
                  focus: 'Multi-step, all operations',
                  detail: 'A 3rd or 4th grader should handle problems that require more than one step. Mastery means they can plan ahead — recognizing that they need to solve part A before part B. The common sticking point is losing track of intermediate answers. Teaching them to write down partial results or circle them in the problem is more effective than starting over.'
                },
                {
                  grade: '5-6',
                  focus: 'Complex, real-world scenarios',
                  detail: 'A 5th or 6th grader should handle problems with extraneous information, fractions, decimals, and ratios. Mastery means they can ignore irrelevant details and identify what information is actually needed. The common sticking point is overwhelm — children shut down when a problem looks long. Teaching them to read the question first, then find the needed information, reduces anxiety significantly.'
                }
              ].map((level, index) => (
                <div key={index} className="practice-card" style={{textAlign: 'left'}}>
                  <div className="practice-grade-badge practice-grade-badge-green" style={{textAlign: 'center', margin: '0 auto 0.75rem'}}>
                    {level.grade.split('-')[0]}
                  </div>
                  <div className="practice-grade-title" style={{textAlign: 'center'}}>
                    Grades {level.grade} — {level.focus}
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
              Varied word problem practice materials
            </p>
            <div className="practice-grid">
              {[
                { type: 'Addition Word Problems', count: '8-12 problems', grades: '1-4', desc: 'Combining and adding scenarios to build understanding of aggregation' },
                { type: 'Subtraction Word Problems', count: '8-12 problems', grades: '1-4', desc: 'Take-away and difference stories that develop comparison skills' },
                { type: 'Multiplication Word Problems', count: '8-12 problems', grades: '3-6', desc: 'Equal groups and arrays that build the foundation for proportional reasoning' },
                { type: 'Division Word Problems', count: '8-12 problems', grades: '3-6', desc: 'Sharing and grouping scenarios that make division meaningful' },
                { type: 'Multi-Step Problems', count: '6-10 problems', grades: '3-6', desc: 'Problems requiring planning and multiple operations in sequence' },
                { type: 'Money and Time Problems', count: '8-12 problems', grades: '2-6', desc: 'Real-world financial and scheduling scenarios with practical application' }
              ].map((worksheet, index) => (
                <div key={index} className="practice-worksheet-card">
                  <div className="practice-worksheet-header">
                    <h3 className="practice-worksheet-title">
                      {worksheet.type}
                    </h3>
                    <span className="practice-count-badge practice-count-badge-green">
                      {worksheet.count}
                    </span>
                  </div>
                  <p className="practice-worksheet-desc">
                    {worksheet.desc}
                  </p>
                  <div className="practice-worksheet-grades practice-worksheet-grades-green">
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
                When Word Problem Struggles Run Deeper
              </h2>
              <p style={{
                color: 'var(--text-secondary)',
                lineHeight: '1.7',
                marginBottom: '1.25rem'
              }}>
                Sometimes difficulty with word problems isn't about reading comprehension — it's about number sense. Children who don't instinctively visualize quantities, who can't estimate whether an answer makes sense, or who treat numbers as symbols to manipulate rather than quantities to reason about will struggle with story problems no matter how much they practice. Our <strong>Number Sense Foundations</strong> course (K–2) builds the conceptual groundwork that makes mathematical reasoning intuitive. You can also browse all available courses and planners on the <Link href="/resources" style={{color: 'var(--primary)', textDecoration: 'underline'}}>resources page</Link>.
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
              Everything you need to know about word problem worksheets
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
            <div className="practice-cta-box practice-cta-box-green">
              <h2 className="practice-cta-title">
                Develop Problem-Solving Skills!
              </h2>
              <p className="practice-cta-text">
                Master real-world math applications with customized word problem worksheets that grow with your student. 
                Build critical thinking, reading comprehension, and mathematical reasoning skills for academic success.
              </p>
              <div className="practice-cta-container">
                <Link href="/" className="practice-cta-button practice-cta-button-green">
                  Create Word Problem Worksheets Now
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
                <div className="practice-nav-icon practice-nav-icon-green">
                  +
                </div>
                <div className="practice-nav-label">
                  Addition
                </div>
                <div className="practice-nav-desc">
                  Basic facts
                </div>
              </Link>

              <Link href="/subtraction-practice" className="practice-nav-card">
                <div className="practice-nav-icon practice-nav-icon-green">
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
                <div className="practice-nav-icon practice-nav-icon-green">
                  ×
                </div>
                <div className="practice-nav-label">
                  Multiplication
                </div>
                <div className="practice-nav-desc">
                  Times tables
                </div>
              </Link>

              <Link href="/division-practice" className="practice-nav-card">
                <div className="practice-nav-icon practice-nav-icon-green">
                  ÷
                </div>
                <div className="practice-nav-label">
                  Division
                </div>
                <div className="practice-nav-desc">
                  Basic facts
                </div>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
