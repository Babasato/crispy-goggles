// app/grade-1-worksheets/page.tsx
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'First Grade Math Worksheets | Free Printable 1st Grade Math Practice',
  description: 'Free printable 1st grade math worksheets covering addition, subtraction, counting, place value, measurement, and geometry. Perfect for homeschool and classroom use.',
}

export default function Grade1Worksheets() {
  const faqs = [
    {
      question: 'What math skills should first graders master?',
      answer: 'First grade is about building the bridge from counting to calculating. By the end of 1st grade, a child should be able to add and subtract within 20 with fluency, understand that teen numbers are composed of ten and some ones, count to 120 starting from any number, tell time to the hour and half-hour, and solve simple word problems with addition and subtraction. The most important outcome is not speed but understanding — a child should be able to explain why 8 + 5 = 13, not just give the answer.'
    },
    {
      question: 'How can I tell if my first grader has a math fluency problem?',
      answer: 'The clearest sign is counting on fingers for every fact. In kindergarten, finger counting is expected. In 1st grade, the goal is to move beyond it. If your child is still counting from 1 for every problem (rather than counting on from the larger number), or if they can\'t solve 6 + 4 without objects, they need more work on number sense before fact fluency. A second signal is difficulty with teen numbers — if 16 is consistently read as "sixteen" but the child doesn\'t understand it as 10 and 6, place value understanding needs attention.'
    },
    {
      question: 'What is the best way to teach addition and subtraction facts in first grade?',
      answer: 'Start with strategies, not memorization. Teach counting on (starting from the larger number), making ten (knowing that 8 + 5 can be thought of as 8 + 2 + 3), and doubles (6 + 6). These strategies build number sense while facts are being learned. Practice should be daily but short — 10-15 minutes of varied practice is more effective than 30 minutes of drills. Mix fact practice with word problems so children learn to recognize when to add or subtract in context.'
    },
    {
      question: 'My first grader reverses numbers (writes 12 as 21). Is this normal?',
      answer: 'Yes, number reversals are extremely common in 1st grade and do not indicate a math problem. They indicate that the visual memory for numeral orientation is still developing. The same child who writes 12 as 21 usually has no trouble understanding that twelve comes after eleven. Gentle correction and practice writing numbers in context (like labeling answers) helps more than drilling formation. If reversals persist past 2nd grade, or if the child cannot distinguish 12 from 21 when reading, that\'s worth discussing with someone.'
    },
    {
      question: 'What does place value understanding look like in first grade?',
      answer: 'In 1st grade, place value means understanding that teen numbers are "ten and some ones." A child with solid place value understanding can look at 14 and explain that it means one ten and four ones. They can also show it with objects: a group of ten and four singles. The common sticking point is when children can count to 20 but don\'t understand what the digits represent — they\'re reciting a sequence, not understanding a system. Place value games with base-ten blocks are the most effective fix.'
    },
    {
      question: 'How much math practice does a first grader need each day?',
      answer: 'For most 1st graders, 15–20 minutes of focused math work is enough. This should include a mix of fact practice, word problems, and hands-on work with manipulatives. The key is engagement, not duration — a child who is mentally checked out for half the session isn\'t learning. Shorter, focused sessions with variety (some worksheet work, some games, some real-life math) build stronger retention than longer sessions of repetitive practice.'
    },
    {
      question: 'Are these worksheets suitable for a child who is struggling with math?',
      answer: 'Yes, and they\'re designed with differentiation in mind. Each worksheet type offers three difficulty levels, so you can start where your child is comfortable and build up. For a struggling student, start with the "Easy" level and use plenty of manipulatives alongside the worksheet — have them count real objects before writing answers. The goal is to build confidence and understanding simultaneously. If your child is significantly behind, the Number Sense Foundations course (K–2) on our resources page provides a more structured approach.'
    },
    {
      question: 'What should a first grader be able to do by the end of the year?',
      answer: 'By the end of 1st grade, a student working at grade level should: add and subtract within 20 with fluency (using strategies, not counting), understand place value of tens and ones, compare two-digit numbers using <, >, and =, tell time to the hour and half-hour, read and make simple graphs, measure lengths using non-standard units, partition circles and rectangles into halves and fourths, and solve addition and subtraction word problems within 20.'
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

  const skills = [
    {
      category: 'Addition & Subtraction',
      topics: ['Addition within 20 with strategies', 'Subtraction within 20', 'Fact families', 'Word problems with visual supports']
    },
    {
      category: 'Counting & Place Value',
      topics: ['Counting to 120', 'Tens and ones understanding', 'Comparing two-digit numbers', 'Number patterns and skip counting']
    },
    {
      category: 'Measurement & Data',
      topics: ['Telling time (hour and half-hour)', 'Non-standard measurement', 'Simple picture graphs', 'Data collection and sorting']
    },
    {
      category: 'Geometry',
      topics: ['2D and 3D shapes', 'Halves and fourths', 'Composing shapes', 'Spatial reasoning']
    }
  ];

  const gradeLevels = [
    {
      grade: 'Beginning of 1st Grade',
      description: 'A student entering 1st grade should be able to count to 100, recognize numbers 0–20, and understand that numbers represent quantities. The most common gap at this stage is that children can recite numbers but don\'t yet have one-to-one correspondence — they say the number but lose track of what they\'re counting. By the end of this phase, your child should be able to count objects reliably and recognize all numbers through 20 without hesitation.'
    },
    {
      grade: 'Mid 1st Grade',
      description: 'The middle of 1st grade is where addition and subtraction strategies develop. Mastery here means a child can use counting on, making ten, and doubles to solve problems within 20. The most common sticking point is understanding that subtraction is not just "take away" but also comparison — "how many more" problems often confuse children who only learned subtraction as removal. Expect this phase to need lots of real-world practice with concrete objects.'
    },
    {
      grade: 'End of 1st Grade',
      description: 'By year\'s end, a 1st grader should be able to add and subtract within 20 using strategies, not counting. They should understand that 14 is one ten and four ones, and be able to explain their thinking. Parents should expect their child to solve simple word problems independently and begin to use symbols (+, -, =) correctly. The goal is not speed but flexible understanding.'
    }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />
      
      <div style={{
        minHeight: '100vh',
        background: 'var(--background)',
        padding: '2rem 0'
      }}>
        <div style={{
          maxWidth: '1000px',
          margin: '0 auto',
          padding: '0 1.5rem'
        }}>
          {/* Hero Section */}
          <section style={{
            textAlign: 'center',
            padding: '3rem 0',
            marginBottom: '3rem'
          }}>
            <div style={{
              display: 'inline-block',
              background: 'var(--primary)',
              color: 'white',
              fontSize: '0.875rem',
              fontWeight: '600',
              padding: '0.5rem 1.5rem',
              borderRadius: '6px',
              marginBottom: '1.5rem'
            }}>
              Free Printable Worksheets
            </div>
            <h1 style={{
              fontSize: '2.5rem',
              fontWeight: '700',
              color: 'var(--text-primary)',
              marginBottom: '1rem',
              lineHeight: '1.2'
            }}>
              First Grade Math Worksheets
            </h1>
            <p style={{
              fontSize: '1.5rem',
              color: 'var(--primary)',
              fontWeight: '600',
              marginBottom: '1.5rem'
            }}>
              Practice Sheets for 1st Grade Students
            </p>
            <p style={{
              fontSize: '1.125rem',
              color: 'var(--text-secondary)',
              marginBottom: '2.5rem',
              maxWidth: '600px',
              marginLeft: 'auto',
              marginRight: 'auto',
              lineHeight: '1.6'
            }}>
              Build addition and subtraction fluency within 20 while introducing place value, 
              measurement, and geometry concepts. Perfect for developing number sense in young learners.
            </p>

            {/* Features Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.5rem',
              marginBottom: '2.5rem'
            }}>
              <div style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: '8px',
                padding: '1.5rem',
                textAlign: 'center'
              }}>
                <div style={{
                  width: '3rem',
                  height: '3rem',
                  background: 'var(--primary)',
                  color: 'white',
                  borderRadius: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: '700',
                  fontSize: '1.25rem',
                  margin: '0 auto 1rem'
                }}>
                  🧮
                </div>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  color: 'var(--text-primary)',
                  marginBottom: '0.75rem'
                }}>
                  Visual Word Problems
                </h3>
                <p style={{
                  color: 'var(--text-secondary)',
                  lineHeight: '1.5'
                }}>
                  Problems with simple drawings and number lines to help young readers understand what the question is asking.
                </p>
              </div>

              <div style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: '8px',
                padding: '1.5rem',
                textAlign: 'center'
              }}>
                <div style={{
                  width: '3rem',
                  height: '3rem',
                  background: 'var(--primary)',
                  color: 'white',
                  borderRadius: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: '700',
                  fontSize: '1.25rem',
                  margin: '0 auto 1rem'
                }}>
                  📊
                </div>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  color: 'var(--text-primary)',
                  marginBottom: '0.75rem'
                }}>
                  Three Difficulty Levels
                </h3>
                <p style={{
                  color: 'var(--text-secondary)',
                  lineHeight: '1.5'
                }}>
                  Easy (1-10), Medium (1-20), and Challenging (1-50) to meet each child where they are and build confidence.
                </p>
              </div>

              <div style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: '8px',
                padding: '1.5rem',
                textAlign: 'center'
              }}>
                <div style={{
                  width: '3rem',
                  height: '3rem',
                  background: 'var(--primary)',
                  color: 'white',
                  borderRadius: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: '700',
                  fontSize: '1.25rem',
                  margin: '0 auto 1rem'
                }}>
                  🔄
                </div>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  color: 'var(--text-primary)',
                  marginBottom: '0.75rem'
                }}>
                  Mixed Operations
                </h3>
                <p style={{
                  color: 'var(--text-secondary)',
                  lineHeight: '1.5'
                }}>
                  Combine addition, subtraction, and word problems to build flexible thinking and problem-solving skills.
                </p>
              </div>
            </div>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              alignItems: 'center'
            }}>
              <Link href="/" style={{
                background: 'var(--primary)',
                color: 'white',
                border: 'none',
                padding: '1rem 2rem',
                borderRadius: '6px',
                fontWeight: '600',
                textDecoration: 'none',
                display: 'inline-block',
                transition: 'background-color 0.2s'
              }}>
                Generate Custom 1st Grade Worksheets
              </Link>
              <div style={{
                background: '#f1f5f9',
                color: '#1e293b',
                border: '1px solid #e2e8f0',
                padding: '0.75rem 1.5rem',
                borderRadius: '6px',
                fontWeight: '600'
              }}>
                <span style={{color: 'var(--primary)'}}>10</span> free worksheets per day • <span style={{color: 'var(--primary)'}}>3</span> difficulty levels
              </div>
            </div>
          </section>

                   {/* Why This Matters Section */}
          <section style={{
            background: 'var(--surface)',
            border: '1px solid var(--border)',
            borderRadius: '8px',
            padding: '2rem',
            marginBottom: '3rem'
          }}>
            <h2 style={{
              fontSize: '1.5rem',
              fontWeight: '700',
              color: 'var(--text-primary)',
              marginBottom: '1rem'
            }}>
              Why First Grade Math Matters More Than It Seems
            </h2>
            <p style={{
              color: 'var(--text-secondary)',
              lineHeight: '1.7',
              fontSize: '1.05rem',
              marginBottom: '1rem'
            }}>
              First grade looks simple — counting, adding small numbers, telling time. But underneath that simplicity is a critical transition: the move from counting to calculating. In kindergarten, children learn that numbers represent quantities. In first grade, they learn to combine and separate those quantities without starting over from one each time. That shift — from "counting all" to "counting on" — is the foundation of every calculation they will ever do.
            </p>
            <p style={{
              color: 'var(--text-secondary)',
              lineHeight: '1.7',
              fontSize: '1.05rem',
              marginBottom: '1rem'
            }}>
              The second critical piece in first grade is place value. Understanding that 14 means one ten and four ones — not just the number after 13 — is what makes regrouping in 2nd grade make sense. Children who don't develop this understanding in 1st grade can still memorize procedures in 2nd, but they'll be memorizing steps without comprehension, which eventually breaks down. The <Link href="/addition-practice" style={{color: 'var(--primary)', textDecoration: 'underline'}}>addition practice</Link> and <Link href="/subtraction-practice" style={{color: 'var(--primary)', textDecoration: 'underline'}}>subtraction practice</Link> pages offer targeted worksheets that build both fluency and understanding.
            </p>
            <p style={{
              color: 'var(--text-secondary)',
              lineHeight: '1.7',
              fontSize: '1.05rem'
            }}>
              The worksheets here are designed to support both transitions: visual models that help children see what the numbers mean, and graduated practice that builds toward fluency.
            </p>
          </section>

          {/* Grade Level Descriptions */}
          <section style={{marginBottom: '3rem'}}>
            <h2 style={{
              fontSize: '2rem',
              fontWeight: '700',
              color: 'var(--text-primary)',
              textAlign: 'center',
              marginBottom: '1rem'
            }}>
              What to Expect at Each Stage of 1st Grade
            </h2>
            <p style={{
              fontSize: '1.125rem',
              color: 'var(--text-secondary)',
              textAlign: 'center',
              marginBottom: '2.5rem',
              maxWidth: '600px',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}>
              What mastery looks like, where children typically get stuck, and what your child should be able to do
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.5rem'
            }}>
              {gradeLevels.map((level, index) => (
                <div key={index} style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: '8px',
                  padding: '1.5rem'
                }}>
                  <h3 style={{
                    fontSize: '1.125rem',
                    fontWeight: '700',
                    color: 'var(--primary)',
                    marginBottom: '0.75rem'
                  }}>
                    {level.grade}
                  </h3>
                  <p style={{
                    color: 'var(--text-secondary)',
                    lineHeight: '1.6',
                    margin: 0
                  }}>
                    {level.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Skills Section */}
          <section style={{marginBottom: '3rem'}}>
            <h2 style={{
              fontSize: '2rem',
              fontWeight: '700',
              color: 'var(--text-primary)',
              textAlign: 'center',
              marginBottom: '1rem'
            }}>
              First Grade Math Skills
            </h2>
            <p style={{
              fontSize: '1.125rem',
              color: 'var(--text-secondary)',
              textAlign: 'center',
              marginBottom: '2.5rem',
              maxWidth: '600px',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}>
              Essential math concepts and skills for first grade success
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.5rem'
            }}>
              {skills.map((skill, index) => (
                <div key={index} style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: '8px',
                  padding: '1.5rem'
                }}>
                  <h3 style={{
                    fontSize: '1.25rem',
                    fontWeight: '600',
                    color: 'var(--text-primary)',
                    marginBottom: '1rem'
                  }}>
                    {skill.category}
                  </h3>
                  <ul style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0
                  }}>
                    {skill.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        marginBottom: '0.75rem',
                        color: 'var(--text-secondary)'
                      }}>
                        <div style={{
                          width: '0.5rem',
                          height: '0.5rem',
                          background: 'var(--primary)',
                          borderRadius: '50%',
                          marginRight: '0.75rem',
                          marginTop: '0.5rem',
                          flexShrink: 0
                        }}></div>
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Focus Areas Section */}
          <section style={{marginBottom: '3rem'}}>
            <div style={{
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: '8px',
              padding: '2rem'
            }}>
              <h2 style={{
                fontSize: '2rem',
                fontWeight: '700',
                color: 'var(--text-primary)',
                textAlign: 'center',
                marginBottom: '2rem'
              }}>
                1st Grade Math Focus Areas
              </h2>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2rem'
              }}>
                <div>
                  <h3 style={{
                    fontSize: '1.25rem',
                    fontWeight: '600',
                    color: 'var(--text-primary)',
                    marginBottom: '1rem'
                  }}>
                    Operations & Algebraic Thinking
                  </h3>
                  <ul style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                    color: 'var(--text-secondary)'
                  }}>
                    <li style={{marginBottom: '0.75rem', display: 'flex', alignItems: 'flex-start'}}>
                      <span style={{marginRight: '0.5rem'}}>•</span>
                      Addition and subtraction within 20
                    </li>
                    <li style={{marginBottom: '0.75rem', display: 'flex', alignItems: 'flex-start'}}>
                      <span style={{marginRight: '0.5rem'}}>•</span>
                      Fact families and related facts
                    </li>
                    <li style={{marginBottom: '0.75rem', display: 'flex', alignItems: 'flex-start'}}>
                      <span style={{marginRight: '0.5rem'}}>•</span>
                      Making ten strategy
                    </li>
                    <li style={{display: 'flex', alignItems: 'flex-start'}}>
                      <span style={{marginRight: '0.5rem'}}>•</span>
                      Word problems with unknowns
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 style={{
                    fontSize: '1.25rem',
                    fontWeight: '600',
                    color: 'var(--text-primary)',
                    marginBottom: '1rem'
                  }}>
                    Number & Operations in Base Ten
                  </h3>
                  <ul style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                    color: 'var(--text-secondary)'
                  }}>
                    <li style={{marginBottom: '0.75rem', display: 'flex', alignItems: 'flex-start'}}>
                      <span style={{marginRight: '0.5rem'}}>•</span>
                      Understanding tens and ones
                    </li>
                    <li style={{marginBottom: '0.75rem', display: 'flex', alignItems: 'flex-start'}}>
                      <span style={{marginRight: '0.5rem'}}>•</span>
                      Comparing two-digit numbers
                    </li>
                    <li style={{marginBottom: '0.75rem', display: 'flex', alignItems: 'flex-start'}}>
                      <span style={{marginRight: '0.5rem'}}>•</span>
                      Counting to 120
                    </li>
                    <li style={{display: 'flex', alignItems: 'flex-start'}}>
                      <span style={{marginRight: '0.5rem'}}>•</span>
                      Skip counting by 2s, 5s, and 10s
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Worksheet Types Section */}
          <section style={{marginBottom: '3rem'}}>
            <h2 style={{
              fontSize: '2rem',
              fontWeight: '700',
              color: 'var(--text-primary)',
              textAlign: 'center',
              marginBottom: '1rem'
            }}>
              Worksheet Categories
            </h2>
            <p style={{
              fontSize: '1.125rem',
              color: 'var(--text-secondary)',
              textAlign: 'center',
              marginBottom: '2.5rem',
              maxWidth: '600px',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}>
              Comprehensive collection of first grade math practice materials
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem'
            }}>
              {[
                { name: 'Addition Practice', href: '/addition-practice', count: '25+ worksheets', desc: 'Facts within 20 with visual supports' },
                { name: 'Subtraction Practice', href: '/subtraction-practice', count: '20+ worksheets', desc: 'Take-away and comparison problems' },
                { name: 'Place Value', href: '/place-value', count: '15+ worksheets', desc: 'Tens and ones with base-ten blocks' },
                { name: 'Word Problems', href: '/word-problems', count: '30+ worksheets', desc: 'Simple story problems with pictures' },
                { name: 'Time & Measurement', href: '/time-measurement', count: '12+ worksheets', desc: 'Hour/half-hour and non-standard units' },
                { name: 'Geometry', href: '/geometry', count: '12+ worksheets', desc: 'Shapes, halves, and fourths' }
              ].map((type, index) => (
                <Link key={index} href={type.href} style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: '8px',
                  padding: '1.5rem',
                  textDecoration: 'none',
                  transition: 'border-color 0.2s'
                }}>
                  <h3 style={{
                    fontSize: '1.125rem',
                    fontWeight: '600',
                    color: 'var(--text-primary)',
                    marginBottom: '0.5rem'
                  }}>
                    {type.name}
                  </h3>
                  <p style={{
                    color: 'var(--primary)',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    marginBottom: '0.5rem'
                  }}>
                    {type.count}
                  </p>
                  <p style={{
                    color: 'var(--text-secondary)',
                    fontSize: '0.875rem',
                    margin: 0
                  }}>
                    {type.desc}
                  </p>
                </Link>
              ))}
            </div>
          </section>

          {/* Course Mention */}
          <section style={{marginBottom: '3rem'}}>
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
                When 1st Grade Math Needs More Than Worksheets
              </h2>
              <p style={{
                color: 'var(--text-secondary)',
                lineHeight: '1.7',
                marginBottom: '1.25rem'
              }}>
                For some children, the gap isn't in practice — it's in the underlying number sense that makes addition and subtraction intuitive. If your child is still counting on fingers for every fact past mid-year, struggles to understand teen numbers, or can't explain their thinking, worksheets alone won't bridge that gap. Our <strong>Number Sense Foundations</strong> course (K–2) builds the conceptual groundwork that makes fact fluency stick. You can also browse all available courses and planners on the <Link href="/resources" style={{color: 'var(--primary)', textDecoration: 'underline'}}>resources page</Link>.
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

          {/* FAQ Section */}
          <section style={{marginBottom: '3rem'}}>
            <h2 style={{
              fontSize: '2rem',
              fontWeight: '700',
              color: 'var(--text-primary)',
              textAlign: 'center',
              marginBottom: '1rem'
            }}>
              Frequently Asked Questions
            </h2>
            <p style={{
              fontSize: '1.125rem',
              color: 'var(--text-secondary)',
              textAlign: 'center',
              marginBottom: '2.5rem',
              maxWidth: '600px',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}>
              Real questions homeschooling parents ask about first grade math
            </p>
            <div style={{
              maxWidth: '800px',
              margin: '0 auto'
            }}>
              {faqs.map((faq, index) => (
                <div key={index} style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: '8px',
                  padding: '1.5rem',
                  marginBottom: '1rem'
                }}>
                  <h3 style={{
                    fontSize: '1.125rem',
                    fontWeight: '600',
                    color: 'var(--text-primary)',
                    marginBottom: '0.75rem'
                  }}>
                    {faq.question}
                  </h3>
                  <p style={{
                    color: 'var(--text-secondary)',
                    lineHeight: '1.6',
                    margin: '0'
                  }}>
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section style={{marginBottom: '3rem'}}>
            <div style={{
              background: 'var(--primary)',
              color: 'white',
              borderRadius: '8px',
              padding: '3rem 2rem',
              textAlign: 'center'
            }}>
              <h2 style={{
                fontSize: '2rem',
                fontWeight: '700',
                marginBottom: '1rem'
              }}>
                Build Strong Math Foundations!
              </h2>
              <p style={{
                fontSize: '1.125rem',
                color: 'rgba(255, 255, 255, 0.9)',
                marginBottom: '2.5rem',
                maxWidth: '600px',
                marginLeft: 'auto',
                marginRight: 'auto',
                lineHeight: '1.6'
              }}>
                Start generating custom first grade worksheets today. Perfect for building essential math skills and preparing for second grade success.
              </p>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                alignItems: 'center'
              }}>
                <Link href="/" style={{
                  background: 'white',
                  color: 'var(--primary)',
                  border: 'none',
                  padding: '1.25rem 2.5rem',
                  borderRadius: '6px',
                  fontWeight: '600',
                  textDecoration: 'none',
                  display: 'inline-block',
                  transition: 'background-color 0.2s',
                  fontSize: '1.125rem'
                }}>
                  Create Worksheets Now
                </Link>
                <p style={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  fontSize: '0.875rem',
                  margin: '0'
                }}>
                  Free • No registration required • 10 worksheets per day
                </p>
              </div>
            </div>
          </section>

          {/* Grade Levels Section */}
          <section style={{marginBottom: '3rem'}}>
            <h2 style={{
              fontSize: '2rem',
              fontWeight: '700',
              color: 'var(--text-primary)',
              textAlign: 'center',
              marginBottom: '2.5rem'
            }}>
              Explore Other Grade Levels
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1.5rem'
            }}>
              <Link href="/kindergarten-worksheets" style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: '8px',
                padding: '1.5rem',
                textAlign: 'center',
                textDecoration: 'none',
                transition: 'border-color 0.2s'
              }}>
                <div style={{
                  width: '3rem',
                  height: '3rem',
                  background: 'var(--primary)',
                  color: 'white',
                  borderRadius: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: '700',
                  fontSize: '1.25rem',
                  margin: '0 auto 1rem'
                }}>
                  K
                </div>
                <div style={{
                  color: 'var(--text-primary)',
                  fontWeight: '600',
                  marginBottom: '0.25rem'
                }}>
                  Kindergarten
                </div>
                <div style={{
                  color: 'var(--text-secondary)',
                  fontSize: '0.875rem'
                }}>
                  Math worksheets
                </div>
              </Link>

              <Link href="/grade-2-worksheets" style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: '8px',
                padding: '1.5rem',
                textAlign: 'center',
                textDecoration: 'none',
                transition: 'border-color 0.2s'
              }}>
                <div style={{
                  width: '3rem',
                  height: '3rem',
                  background: 'var(--primary)',
                  color: 'white',
                  borderRadius: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: '700',
                  fontSize: '1.25rem',
                  margin: '0 auto 1rem'
                }}>
                  2
                </div>
                <div style={{
                  color: 'var(--text-primary)',
                  fontWeight: '600',
                  marginBottom: '0.25rem'
                }}>
                  Grade 2
                </div>
                <div style={{
                  color: 'var(--text-secondary)',
                  fontSize: '0.875rem'
                }}>
                  Math worksheets
                </div>
              </Link>

              <Link href="/grade-3-worksheets" style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: '8px',
                padding: '1.5rem',
                textAlign: 'center',
                textDecoration: 'none',
                transition: 'border-color 0.2s'
              }}>
                <div style={{
                  width: '3rem',
                  height: '3rem',
                  background: 'var(--primary)',
                  color: 'white',
                  borderRadius: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: '700',
                  fontSize: '1.25rem',
                  margin: '0 auto 1rem'
                }}>
                  3
                </div>
                <div style={{
                  color: 'var(--text-primary)',
                  fontWeight: '600',
                  marginBottom: '0.25rem'
                }}>
                  Grade 3
                </div>
                <div style={{
                  color: 'var(--text-secondary)',
                  fontSize: '0.875rem'
                }}>
                  Math worksheets
                </div>
              </Link>

              <Link href="/grade-4-worksheets" style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: '8px',
                padding: '1.5rem',
                textAlign: 'center',
                textDecoration: 'none',
                transition: 'border-color 0.2s'
              }}>
                <div style={{
                  width: '3rem',
                  height: '3rem',
                  background: 'var(--primary)',
                  color: 'white',
                  borderRadius: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: '700',
                  fontSize: '1.25rem',
                  margin: '0 auto 1rem'
                }}>
                  4
                </div>
                <div style={{
                  color: 'var(--text-primary)',
                  fontWeight: '600',
                  marginBottom: '0.25rem'
                }}>
                  Grade 4
                </div>
                <div style={{
                  color: 'var(--text-secondary)',
                  fontSize: '0.875rem'
                }}>
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