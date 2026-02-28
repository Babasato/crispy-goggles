// app/grade-2-worksheets/page.tsx
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Second Grade Math Worksheets | Free Printable 2nd Grade Math Practice',
  description: 'Free printable 2nd grade math worksheets covering addition, subtraction, place value, measurement, time, money, and geometry. Perfect for homeschool and classroom use.',
}

export default function Grade2Worksheets() {
  const faqs = [
    {
      question: 'What math skills do second graders focus on?',
      answer: "Second grade math centers on building fluency with addition and subtraction within 100, understanding place value to 1,000, telling time to the nearest 5 minutes, counting and comparing money, solving one- and two-step word problems, and beginning to understand arrays as a foundation for multiplication. By the end of 2nd grade, a child should be able to add and subtract two-digit numbers mentally and with the standard algorithm, and explain their reasoning."
    },
    {
      question: 'How can I tell if my second grader has a math fluency problem?',
      answer: "The clearest sign is counting on fingers to solve addition and subtraction facts that should be automatic. A 2nd grader should be able to retrieve sums and differences within 20 without counting — if they're still using finger counting, the underlying number sense isn't yet solid. A second signal is difficulty with two-digit addition: if your child can't add 37 + 45 mentally or explain the standard algorithm step by step, place value understanding needs attention. Neither is a crisis, but both are worth addressing directly rather than hoping they resolve on their own."
    },
    {
      question: 'What is the best way to build addition and subtraction fluency at home?',
      answer: "Consistent, short practice sessions are far more effective than occasional long ones. Ten minutes of focused fact practice daily — with varied problems, not the same worksheet repeated — produces much stronger retention than a 45-minute math block once a week. The key is keeping sessions short enough that your child stays attentive. Use timed practice occasionally but don't make speed the only goal: a child who answers quickly but can't explain their thinking has memorized, not understood. Mix in word problems so facts get applied in context."
    },
    {
      question: 'What is place value and why is it so important in second grade?',
      answer: "Place value is the understanding that the position of a digit determines its value: in the number 347, the 3 represents 300, the 4 represents 40, and the 7 represents 7. Second graders extend this understanding to the hundreds place. This matters because all multi-digit arithmetic — addition with regrouping, subtraction with borrowing, and eventually multiplication — depends entirely on place value understanding. Children who can manipulate digits algorithmically but don't understand what they represent will struggle significantly in 3rd and 4th grade."
    },
    {
      question: 'How do I help my second grader with subtraction if they keep making mistakes?',
      answer: "Most 2nd grade subtraction errors fall into two categories: fact errors (not knowing 13−7 automatically) and regrouping errors (not understanding how to borrow). For fact errors, targeted daily practice on the specific facts causing trouble is the fix. For regrouping errors, the issue is almost always conceptual — the child is following steps without understanding why. Go back to base-ten blocks or drawings: show physically that borrowing a ten means exchanging it for 10 ones. Once the concept is visible, the algorithm makes sense. The <Link href=\"/subtraction-practice\" style={{color: 'var(--primary)', textDecoration: 'underline'}}>subtraction practice</Link> page has worksheets specifically designed to build this skill progressively."
    },
    {
      question: 'When should my second grader start learning multiplication?',
      answer: "Second grade isn't the time for formal multiplication, but it is the right time to build the conceptual foundation. Arrays — rectangular arrangements of objects — introduce the idea that multiplication is repeated addition organized in equal groups. A child who understands that a 3×4 array has 3 rows of 4 and can count it as 4+4+4 is ready for multiplication to feel natural in 3rd grade rather than arbitrary. Work with arrays in 2nd grade, name them as multiplication informally, and the transition in 3rd grade becomes much smoother."
    },
    {
      question: 'How many worksheets should my second grader do per day?',
      answer: "For most 2nd graders, one targeted worksheet per session — typically 15–20 problems focused on one skill — is enough. More than that and attention drops off sharply. What matters more than quantity is consistency and variety across a week: addition one day, a word problem the next, place value after that. Children at this age also benefit from being asked to explain their answers aloud, which reveals gaps that written work sometimes hides."
    },
    {
      question: 'Are these worksheets suitable for homeschool use?',
      answer: "Yes, and they're designed with homeschool flexibility in mind. You can generate focused worksheets for exactly the skill your child is working on, at the difficulty level that's right for them, rather than being bound to a textbook's pacing. If your child needs three weeks on two-digit subtraction before moving on, you can generate fresh practice every day without repeating problems. You can also move faster through skills your child masters quickly, which is one of the real advantages of homeschooling math."
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
      topics: ['Addition within 100', 'Subtraction within 100', 'Two-digit problems with regrouping', 'Mental math strategies', 'Word problems']
    },
    {
      category: 'Place Value & Numbers',
      topics: ['Place value (hundreds, tens, ones)', 'Comparing three-digit numbers', 'Skip counting by 5s, 10s, 100s', 'Number patterns']
    },
    {
      category: 'Measurement & Data',
      topics: ['Telling time (5-minute intervals)', 'Counting money (coins & bills)', 'Measurement with rulers', 'Picture graphs and bar graphs']
    },
    {
      category: 'Geometry & Arrays',
      topics: ['2D and 3D shapes', 'Partitioning shapes into equal parts', 'Arrays as foundations for multiplication', 'Spatial reasoning']
    }
  ];

  const gradeLevels = [
    {
      grade: 'Beginning of 2nd Grade',
      description: "A student entering 2nd grade should have automatic recall of addition and subtraction facts within 10 and a working understanding of place value to 100. The most common gap at this stage is fact fluency — children often know their facts but retrieve them slowly, which creates a bottleneck as problems grow more complex. By the end of this phase, your child should add and subtract within 20 automatically, without counting on fingers or tally marks."
    },
    {
      grade: 'Mid 2nd Grade',
      description: "The middle of 2nd grade is where place value understanding is tested by two-digit addition and subtraction with regrouping. Mastery means a child understands why regrouping works — that you're exchanging a ten for ten ones — not just that you \"carry the one.\" The most common sticking point is subtraction with regrouping across zero (e.g., 200 − 47). Children who understand the concept handle it; those who only know the steps get confused. Expect this phase to need more time than the curriculum suggests."
    },
    {
      grade: 'End of 2nd Grade',
      description: "By year's end, a 2nd grader should fluently add and subtract within 100 using the standard algorithm, understand place value to 1,000, tell time to the nearest 5 minutes, count money in combinations of coins and bills, and use arrays to represent and solve repeated addition problems. Parents should expect their child to be able to solve a two-step word problem independently and explain which operation they chose and why."
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
              Second Grade Math Worksheets
            </h1>
            <p style={{
              fontSize: '1.5rem',
              color: 'var(--primary)',
              fontWeight: '600',
              marginBottom: '1.5rem'
            }}>
              Practice Sheets for 2nd Grade Students
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
              Build math fluency with addition and subtraction within 100 while introducing 
              place value, time, money, and geometry concepts. Perfect for building confidence in young learners.
            </p>
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
                Generate Custom 2nd Grade Worksheets
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
              Why Second Grade Math Is More Important Than It Looks
            </h2>
            <p style={{
              color: 'var(--text-secondary)',
              lineHeight: '1.7',
              fontSize: '1.05rem',
              marginBottom: '1rem'
            }}>
              Second grade math doesn't get the same attention as the "big" grades, but it's quietly one of the most foundational years in a child's mathematical development. The fluency with addition and subtraction that 2nd grade builds is not just a goal in itself — it's the bedrock that 3rd grade multiplication, 4th grade long division, and every subsequent year of math stands on. A child who leaves 2nd grade still counting on their fingers to add single digits will struggle not because they aren't smart, but because their cognitive resources are consumed by tasks that should be automatic.
            </p>
            <p style={{
              color: 'var(--text-secondary)',
              lineHeight: '1.7',
              fontSize: '1.05rem'
            }}>
              The most underestimated 2nd grade skill is place value understanding. Parents often see their child successfully completing addition worksheets and assume place value is fine — but there's a difference between executing the algorithm correctly and genuinely understanding that the digit 4 in 47 represents 4 tens. That understanding is what makes regrouping sensible rather than magical. Our <Link href="/addition-practice" style={{color: 'var(--primary)', textDecoration: 'underline'}}>addition practice</Link> and <Link href="/subtraction-practice" style={{color: 'var(--primary)', textDecoration: 'underline'}}>subtraction practice</Link> pages offer worksheets across all difficulty levels to build both fluency and comprehension.
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
              What to Expect at Each Stage of 2nd Grade
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

          {/* Features Grid Section */}
          <section style={{marginBottom: '3rem'}}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.5rem'
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
                  ⏱️
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
                  Choose from easy, medium, or challenging worksheets to match your child's skill level and build confidence gradually.
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
                  🎯
                </div>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  color: 'var(--text-primary)',
                  marginBottom: '0.75rem'
                }}>
                  Array Visuals
                </h3>
                <p style={{
                  color: 'var(--text-secondary)',
                  lineHeight: '1.5'
                }}>
                  Visual multiplication practice with arrays helps build foundational understanding of multiplication concepts.
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
                  💰
                </div>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  color: 'var(--text-primary)',
                  marginBottom: '0.75rem'
                }}>
                  Word Problem Variety
                </h3>
                <p style={{
                  color: 'var(--text-secondary)',
                  lineHeight: '1.5'
                }}>
                  Real-world scenarios with time, money, and measurement help students apply math skills to everyday situations.
                </p>
              </div>
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
              Second Grade Math Skills
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
              Essential math concepts and skills for second grade success
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
                2nd Grade Math Focus Areas
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
                    Building Fluency
                  </h3>
                  <ul style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                    color: 'var(--text-secondary)'
                  }}>
                    <li style={{marginBottom: '0.75rem', display: 'flex', alignItems: 'flex-start'}}>
                      <span style={{marginRight: '0.5rem'}}>•</span>
                      Addition and subtraction within 100
                    </li>
                    <li style={{marginBottom: '0.75rem', display: 'flex', alignItems: 'flex-start'}}>
                      <span style={{marginRight: '0.5rem'}}>•</span>
                      Mental math strategies
                    </li>
                    <li style={{marginBottom: '0.75rem', display: 'flex', alignItems: 'flex-start'}}>
                      <span style={{marginRight: '0.5rem'}}>•</span>
                      Place value understanding to 1,000
                    </li>
                    <li style={{display: 'flex', alignItems: 'flex-start'}}>
                      <span style={{marginRight: '0.5rem'}}>•</span>
                      Skip counting patterns
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
                    Real-World Applications
                  </h3>
                  <ul style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                    color: 'var(--text-secondary)'
                  }}>
                    <li style={{marginBottom: '0.75rem', display: 'flex', alignItems: 'flex-start'}}>
                      <span style={{marginRight: '0.5rem'}}>•</span>
                      Telling time and counting money
                    </li>
                    <li style={{marginBottom: '0.75rem', display: 'flex', alignItems: 'flex-start'}}>
                      <span style={{marginRight: '0.5rem'}}>•</span>
                      Measurement and data
                    </li>
                    <li style={{marginBottom: '0.75rem', display: 'flex', alignItems: 'flex-start'}}>
                      <span style={{marginRight: '0.5rem'}}>•</span>
                      Geometry and spatial reasoning
                    </li>
                    <li style={{display: 'flex', alignItems: 'flex-start'}}>
                      <span style={{marginRight: '0.5rem'}}>•</span>
                      Two-step word problem solving
                    </li>
                  </ul>
                </div>
              </div>
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
                If Addition and Subtraction Basics Need More Support
              </h2>
              <p style={{
                color: 'var(--text-secondary)',
                lineHeight: '1.7',
                marginBottom: '1.25rem'
              }}>
                For some 2nd graders, worksheets alone aren't enough — the underlying number sense that makes addition and subtraction click hasn't fully formed yet. Our <strong>Number Sense Foundations</strong> course covers K–2 number concepts from the ground up, including the mental models and strategies that make arithmetic feel intuitive rather than effortful. It's been particularly useful for homeschool parents whose child can follow procedures but seems to be "doing math without really understanding it." You can also browse all available courses and planners on the <Link href="/resources" style={{color: 'var(--primary)', textDecoration: 'underline'}}>resources page</Link>.
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
                View Number Sense Foundations (K–2) — $57
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
              Everything you need to know about second grade math worksheets
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
                Build Math Confidence!
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
                Start generating custom second grade worksheets today. Perfect for building essential math skills and preparing for third grade success.
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

              <Link href="/grade-1-worksheets" style={{
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
                  1
                </div>
                <div style={{
                  color: 'var(--text-primary)',
                  fontWeight: '600',
                  marginBottom: '0.25rem'
                }}>
                  Grade 1
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

              <Link href="/word-problems" style={{
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
                  ?
                </div>
                <div style={{
                  color: 'var(--text-primary)',
                  fontWeight: '600',
                  marginBottom: '0.25rem'
                }}>
                  Word Problems
                </div>
                <div style={{
                  color: 'var(--text-secondary)',
                  fontSize: '0.875rem'
                }}>
                  All grades
                </div>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}