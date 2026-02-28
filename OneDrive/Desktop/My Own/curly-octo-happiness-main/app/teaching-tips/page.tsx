// app/teaching-tips/page.tsx
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Math Teaching Tips & Strategies | Effective Math Instruction for Homeschool',
  description: 'Discover effective math teaching strategies, differentiation techniques, and practical tips for homeschool parents. Learn how to build number sense, teach fact fluency, and develop problem-solving skills.',
}

export default function TeachingTips() {
  const strategies = [
    {
      category: 'Building Number Sense',
      tips: [
        'Start with concrete manipulatives before moving to abstract symbols',
        'Use number talks daily to develop mental math flexibility',
        'Incorporate subitizing activities for quick quantity recognition',
        'Play estimation games to develop quantitative intuition',
        'Use real-world contexts like shopping, cooking, and measuring'
      ]
    },
    {
      category: 'Teaching Fact Fluency',
      tips: [
        'Practice facts in random order, not sequential chants',
        'Teach fact families to show relationships between operations',
        'Use games and flashcards for short daily practice sessions',
        'Focus on strategies (doubles, making ten) before memorization',
        'Celebrate progress and track mastery systematically'
      ]
    },
    {
      category: 'Differentiation Strategies',
      tips: [
        'Use tiered assignments with three difficulty levels',
        'Provide multiple ways to demonstrate understanding',
        'Adjust number ranges based on student readiness',
        'Use flexible pacing — move faster through mastered content',
        'Offer choice in problem types and contexts'
      ]
    },
    {
      category: 'Word Problem Success',
      tips: [
        'Teach students to visualize the situation before grabbing numbers',
        'Use the "remove the numbers" strategy to focus on the story',
        'Start with one-step problems before introducing multi-step',
        'Connect problems to student interests and real life',
        'Model thinking aloud when solving problems'
      ]
    }
  ]

  const gradeLevelTips = [
    {
      grades: 'K-2',
      focus: 'Foundations & Number Sense',
      tips: [
        'Develop one-to-one correspondence through counting objects',
        'Build understanding of tens and ones with base-ten blocks',
        'Use number lines to visualize addition and subtraction',
        'Practice subitizing with dot cards and quick images',
        'Connect numbers to quantities, not just symbols'
      ],
      link: '/kindergarten-worksheets',
      linkText: 'Kindergarten Worksheets'
    },
    {
      grades: '3-4',
      focus: 'Multiplication & Fractions',
      tips: [
        'Introduce multiplication through arrays and equal groups',
        'Teach division as the inverse of multiplication from the start',
        'Use fraction bars and number lines for fraction concepts',
        'Practice facts in random order to build true fluency',
        'Connect fractions to real-world sharing situations'
      ],
      link: '/grade-3-worksheets',
      linkText: '3rd Grade Worksheets'
    },
    {
      grades: '5-6',
      focus: 'Ratios & Algebraic Thinking',
      tips: [
        'Introduce ratios through recipes and scaling situations',
        'Use tables to organize equivalent ratios before cross-multiplication',
        'Connect variables to real-world unknown quantities',
        'Practice with negative numbers in temperature and debt contexts',
        'Emphasize explanation and reasoning over answer-getting'
      ],
      link: '/grade-6-worksheets',
      linkText: '6th Grade Worksheets'
    }
  ]

  const conceptualUnderstandingTips = [
    'Follow the CRA sequence: start with physical objects (Concrete), move to drawings/models (Representational), and finally use numbers and symbols (Abstract)',
    'Use visual representations like number lines, arrays, and fraction bars',
    'Connect new concepts to prior knowledge — build bridges, not islands',
    'Encourage multiple solution strategies and compare them',
    'Focus on the "why" behind procedures, not just the steps',
    'Use real-world contexts that matter to your child'
  ]

  const skillDevelopmentTips = [
    'Provide distributed practice over time — 10 minutes daily beats an hour weekly',
    'Use interleaved practice mixing different skills in one session',
    'Incorporate timed practice only after concepts are understood',
    'Provide immediate corrective feedback and celebrate effort',
    'Track mastery with simple charts to build motivation'
  ]

  return (
    <>
      {/* Header Component */}
      <header style={{
        background: 'var(--surface)',
        borderBottom: '1px solid var(--border)',
        padding: '1rem 1.5rem'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <h1 style={{
              fontSize: '1.4rem',
              fontWeight: '700',
              margin: 0,
              color: 'var(--text-primary)'
            }}>
              Homeschool Math Worksheets
            </h1>
          </Link>
          <nav>
            <Link href="/" style={{
              color: 'var(--text-secondary)',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: '0.95rem'
            }}>
              ← Back to Generator
            </Link>
          </nav>
        </div>
      </header>

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
          {/* Header Section */}
          <section style={{
            textAlign: 'center',
            padding: '3rem 0',
            marginBottom: '3rem'
          }}>
            <h1 style={{
              fontSize: '2.5rem',
              fontWeight: '700',
              color: 'var(--text-primary)',
              marginBottom: '1rem',
              lineHeight: '1.2'
            }}>
              Math Teaching Tips & Strategies
            </h1>
            <p style={{
              fontSize: '1.25rem',
              color: 'var(--text-secondary)',
              marginBottom: '2rem',
              maxWidth: '600px',
              marginLeft: 'auto',
              marginRight: 'auto',
              lineHeight: '1.6'
            }}>
              Practical, research-backed strategies to help your child develop 
              strong mathematical understanding — whether they're just starting 
              out or preparing for middle school.
            </p>
          </section>

          {/* Core Teaching Strategies */}
          <section style={{marginBottom: '3rem'}}>
            <h2 style={{
              fontSize: '2rem',
              fontWeight: '700',
              color: 'var(--text-primary)',
              textAlign: 'center',
              marginBottom: '1rem'
            }}>
              Core Teaching Strategies
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
              What actually works when teaching math to children
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.5rem'
            }}>
              {strategies.map((strategy, index) => (
                <div key={index} style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: '8px',
                  padding: '1.5rem'
                }}>
                  <h3 style={{
                    fontSize: '1.25rem',
                    fontWeight: '600',
                    color: 'var(--primary)',
                    marginBottom: '1rem'
                  }}>
                    {strategy.category}
                  </h3>
                  <ul style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0
                  }}>
                    {strategy.tips.map((tip, tipIndex) => (
                      <li key={tipIndex} style={{
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
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* What Works By Grade Level */}
          <section style={{marginBottom: '3rem'}}>
            <h2 style={{
              fontSize: '2rem',
              fontWeight: '700',
              color: 'var(--text-primary)',
              textAlign: 'center',
              marginBottom: '1rem'
            }}>
              What Works By Grade Level
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
              Age-appropriate strategies for each stage of development
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.5rem'
            }}>
              {gradeLevelTips.map((level, index) => (
                <div key={index} style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: '8px',
                  padding: '1.5rem'
                }}>
                  <div style={{
                    display: 'inline-block',
                    background: 'var(--primary)',
                    color: 'white',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    padding: '0.25rem 1rem',
                    borderRadius: '4px',
                    marginBottom: '1rem'
                  }}>
                    Grades {level.grades}
                  </div>
                  <h3 style={{
                    fontSize: '1.25rem',
                    fontWeight: '600',
                    color: 'var(--text-primary)',
                    marginBottom: '0.75rem'
                  }}>
                    {level.focus}
                  </h3>
                  <ul style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: '0 0 1.25rem 0'
                  }}>
                    {level.tips.map((tip, tipIndex) => (
                      <li key={tipIndex} style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        marginBottom: '0.5rem',
                        color: 'var(--text-secondary)',
                        fontSize: '0.95rem'
                      }}>
                        <div style={{
                          width: '0.4rem',
                          height: '0.4rem',
                          background: 'var(--primary)',
                          borderRadius: '50%',
                          marginRight: '0.6rem',
                          marginTop: '0.5rem',
                          flexShrink: 0
                        }}></div>
                        {tip}
                      </li>
                    ))}
                  </ul>
                  <Link href={level.link} style={{
                    color: 'var(--primary)',
                    textDecoration: 'underline',
                    fontWeight: '500',
                    fontSize: '0.9rem'
                  }}>
                    {level.linkText} →
                  </Link>
                </div>
              ))}
            </div>
          </section>

          {/* Best Practices Section */}
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
                Research-Backed Best Practices
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
                    color: 'var(--primary)',
                    marginBottom: '1rem'
                  }}>
                    For Conceptual Understanding
                  </h3>
                  <ul style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                    color: 'var(--text-secondary)'
                  }}>
                    {conceptualUnderstandingTips.map((item, index) => (
                      <li key={index} style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        marginBottom: '0.75rem'
                      }}>
                        <div style={{
                          width: '0.5rem',
                          height: '0.5rem',
                          background: index === 0 ? 'var(--primary)' : 'var(--primary)',
                          borderRadius: '50%',
                          marginRight: '0.75rem',
                          marginTop: '0.5rem',
                          flexShrink: 0
                        }}></div>
                        <span style={index === 0 ? {fontWeight: '500'} : {}}>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 style={{
                    fontSize: '1.25rem',
                    fontWeight: '600',
                    color: 'var(--primary)',
                    marginBottom: '1rem'
                  }}>
                    For Skill Development
                  </h3>
                  <ul style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                    color: 'var(--text-secondary)'
                  }}>
                    {skillDevelopmentTips.map((item, index) => (
                      <li key={index} style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        marginBottom: '0.75rem'
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
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Common Mistakes to Avoid */}
          <section style={{marginBottom: '3rem'}}>
            <div style={{
              background: 'var(--surface)',
              border: '1px solid #fecaca',
              borderRadius: '8px',
              padding: '2rem'
            }}>
              <h2 style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                color: '#b91c1c',
                marginBottom: '1rem'
              }}>
                Common Mistakes to Avoid
              </h2>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '1.5rem'
              }}>
                <div>
                  <h3 style={{
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    color: 'var(--text-primary)',
                    marginBottom: '0.75rem'
                  }}>
                    ❌ Drilling facts in order
                  </h3>
                  <p style={{color: 'var(--text-secondary)', fontSize: '0.95rem'}}>
                    Children learn the chant, not the facts. Practice in random order from day one.
                  </p>
                </div>
                <div>
                  <h3 style={{
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    color: 'var(--text-primary)',
                    marginBottom: '0.75rem'
                  }}>
                    ❌ Moving to symbols too quickly
                  </h3>
                  <p style={{color: 'var(--text-secondary)', fontSize: '0.95rem'}}>
                    Skip the concrete stage and children memorize procedures without understanding.
                  </p>
                </div>
                <div>
                  <h3 style={{
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    color: 'var(--text-primary)',
                    marginBottom: '0.75rem'
                  }}>
                    ❌ Teaching operations in isolation
                  </h3>
                  <p style={{color: 'var(--text-secondary)', fontSize: '0.95rem'}}>
                    Children miss the relationships between addition/subtraction and multiplication/division.
                  </p>
                </div>
                <div>
                  <h3 style={{
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    color: 'var(--text-primary)',
                    marginBottom: '0.75rem'
                  }}>
                    ❌ Focusing only on speed
                  </h3>
                  <p style={{color: 'var(--text-secondary)', fontSize: '0.95rem'}}>
                    Speed without understanding breaks down when problems get complex.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Related Resources */}
          <section style={{
            background: 'linear-gradient(135deg, var(--surface) 0%, var(--surface-elevated) 100%)',
            border: '1px solid var(--border)',
            borderRadius: '12px',
            padding: '2.5rem',
            marginBottom: '3rem',
            textAlign: 'center'
          }}>
            <h2 style={{
              fontSize: '1.75rem',
              fontWeight: '700',
              color: 'var(--primary)',
              marginBottom: '1rem'
            }}>
              Put These Strategies into Practice
            </h2>
            <p style={{
              color: 'var(--text-secondary)',
              fontSize: '1.125rem',
              lineHeight: '1.6',
              marginBottom: '2rem',
              maxWidth: '700px',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}>
              Great teaching strategies need great practice materials. Our worksheet generator creates 
              custom practice aligned with these principles — visual supports, graduated difficulty, 
              and mixed practice built in.
            </p>
            <div style={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}>
              <Link href="/" style={{
                display: 'inline-block',
                padding: '0.75rem 1.5rem',
                background: 'var(--primary)',
                color: 'white',
                borderRadius: '8px',
                fontWeight: '600',
                textDecoration: 'none',
                transition: 'background-color 0.2s'
              }}>
                Generate Worksheets Now
              </Link>
              <Link href="/resources" style={{
                display: 'inline-block',
                padding: '0.75rem 1.5rem',
                background: 'transparent',
                color: 'var(--primary)',
                border: '1px solid var(--border)',
                borderRadius: '8px',
                fontWeight: '600',
                textDecoration: 'none',
                transition: 'background-color 0.2s'
              }}>
                Browse Planning Resources
              </Link>
            </div>
          </section>

          {/* CTA Section */}
          <section style={{textAlign: 'center', marginBottom: '2rem'}}>
            <h2 style={{
              fontSize: '2rem',
              fontWeight: '700',
              color: 'var(--text-primary)',
              marginBottom: '1.5rem'
            }}>
              Ready to Create Engaging Math Practice?
            </h2>
            <Link 
              href="/"
              style={{
                display: 'inline-block',
                background: 'var(--primary)',
                color: 'white',
                border: 'none',
                padding: '1rem 2rem',
                borderRadius: '6px',
                fontWeight: '600',
                textDecoration: 'none',
                transition: 'background-color 0.2s',
                fontSize: '1.125rem'
              }}
            >
              Generate Custom Math Worksheets
            </Link>
          </section>
        </div>
      </div>
    </>
  )
}
