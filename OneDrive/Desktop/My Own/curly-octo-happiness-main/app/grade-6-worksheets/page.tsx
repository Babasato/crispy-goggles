// app/grade-6-worksheets/page.tsx
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sixth Grade Math Worksheets | Free Printable 6th Grade Math Practice',
  description: 'Free printable 6th grade math worksheets covering ratios, proportions, expressions, equations, statistics, and geometry. Perfect for homeschool and classroom use.',
}

export default function Grade6Worksheets() {
  const faqs = [
    {
      question: 'What math skills are emphasized in sixth grade?',
      answer: 'Sixth grade is the bridge to algebra. Students focus on ratios and proportional relationships, algebraic expressions and equations, rational number operations (including negatives), statistical thinking with measures of center and variability, and geometric concepts including area, surface area, and volume. By the end of 6th grade, a child should be able to solve one-step equations, understand ratio concepts, and analyze data distributions.'
    },
    {
      question: 'How can I tell if my sixth grader is ready for pre-algebra?',
      answer: 'Readiness for pre-algebra is about more than just computation. Look for these signs: your child can solve one-step equations without guessing, understands that variables represent unknown quantities, can set up a proportion from a word problem, works comfortably with negative numbers in context, and can explain their reasoning with mathematical language. If they\'re still shaky on basic operations with fractions and decimals, those gaps need attention before moving forward.'
    },
    {
      question: 'What is the biggest challenge in sixth grade math?',
      answer: 'The shift from concrete to abstract thinking is the biggest hurdle. In elementary grades, math was about finding answers. In 6th grade, it becomes about understanding relationships — ratios, proportions, and algebraic thinking. Many children who could execute procedures successfully struggle when asked to think flexibly about mathematical relationships. The most effective approach is to connect new concepts to concrete situations: ratios to recipes, negative numbers to temperatures or debt, equations to balance scales.'
    },
    {
      question: 'How do I help my child who is struggling with ratios and proportions?',
      answer: 'Ratios are hard because they ask children to think about relationships rather than absolute amounts. Start with real-world contexts where ratios are visible — mixing juice concentrate with water, comparing prices per ounce at the grocery store, scaling a recipe up or down. Use tables to organize equivalent ratios before introducing cross-multiplication. The most common mistake is treating ratios as fractions without understanding the difference — take time to clarify that a ratio compares quantities while a fraction represents a part-whole relationship.'
    },
    {
      question: 'What does algebraic thinking look like in sixth grade?',
      answer: 'In 6th grade, algebraic thinking means understanding that letters represent unknown numbers. A student working at grade level can write expressions like "n + 5" to represent "5 more than a number," evaluate expressions when given a value, and solve simple one-step equations like x + 7 = 15 by thinking "what number makes this true?" The goal is not formal algebra but developing the habit of thinking about unknown quantities and relationships.'
    },
    {
      question: 'How much math practice does a sixth grader need each day?',
      answer: 'For most homeschool students, 30–40 minutes of focused, varied practice is effective. This should include a mix of skill practice and problem-solving, with some time spent on concepts that require more thinking. The key is quality over quantity — 20 problems worked carefully with understanding are more valuable than 40 rushed with errors. Include word problems regularly to maintain the connection between skills and real-world application.'
    },
    {
      question: 'What should a sixth grader be able to do by the end of the year?',
      answer: 'By the end of 6th grade, a student working at grade level should: understand ratio concepts and use ratio reasoning to solve problems, perform operations with multi-digit decimals and fractions (including negatives), write and evaluate algebraic expressions, solve one-step equations and inequalities, display and analyze data distributions, calculate area, surface area, and volume, and solve multi-step real-world problems involving all these concepts.'
    },
    {
      question: 'Are these worksheets aligned with middle school standards?',
      answer: 'Yes. The sixth grade worksheets cover the domains of the Common Core State Standards for Grade 6: Ratios and Proportional Relationships, The Number System, Expressions and Equations, Geometry, and Statistics and Probability. Whether your homeschool follows Common Core formally or uses it as a benchmark, the skills covered reflect what 6th grade mathematics requires for success in middle school and beyond.'
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
      category: 'Ratios & Proportional Relationships',
      topics: ['Ratio concepts and language', 'Unit rates and equivalent ratios', 'Percent problems', 'Scale drawings and conversions']
    },
    {
      category: 'Expressions & Equations',
      topics: ['Algebraic expressions', 'One-step equations and inequalities', 'Independent and dependent variables', 'Order of operations with exponents']
    },
    {
      category: 'The Number System',
      topics: ['Multi-digit decimal operations', 'Fraction operations review', 'Negative numbers and opposites', 'Absolute value and coordinate plane']
    },
    {
      category: 'Statistics & Probability',
      topics: ['Statistical questions', 'Measures of center (mean, median)', 'Measures of variability', 'Data distributions and displays']
    },
    {
      category: 'Geometry',
      topics: ['Area of polygons', 'Volume of rectangular prisms', 'Surface area of 3D shapes', 'Coordinate geometry']
    }
  ];

  const gradeLevels = [
    {
      grade: 'Beginning of 6th Grade',
      description: 'A student entering 6th grade should have solid fluency with fraction and decimal operations and understand basic geometry concepts from 5th grade. The most common gap is that fraction operations were memorized procedurally without conceptual understanding — students can get answers but can\'t explain why procedures work. By the end of this phase, your child should be ready to extend these skills to ratios and negative numbers.'
    },
    {
      grade: 'Mid 6th Grade',
      description: 'The middle of 6th grade is dominated by ratios and the introduction of algebraic thinking. Mastery here means a child can set up proportions from word problems and solve simple equations. The most common sticking point is the abstract nature of variables — students who are used to finding answers can struggle when asked to work with unknown quantities. Using balance scales and "guess and check" before formal solving helps bridge this gap.'
    },
    {
      grade: 'End of 6th Grade',
      description: 'By year\'s end, a 6th grader should be able to integrate multiple concepts in problem-solving — using ratios within equations, analyzing data distributions, and applying geometry formulas. Parents should expect their child to be able to work through multi-step problems independently and check their work for reasonableness. Students ready for pre-algebra can think flexibly about mathematical relationships and explain their reasoning clearly.'
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
              Sixth Grade Math Worksheets
            </h1>
            <p style={{
              fontSize: '1.5rem',
              color: 'var(--primary)',
              fontWeight: '600',
              marginBottom: '1.5rem'
            }}>
              Practice Sheets for 6th Grade Students
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
              Master ratios, algebraic thinking, statistics, and geometry concepts. 
              Build strong foundations for middle school mathematics and pre-algebra success.
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
                  ⚖️
                </div>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  color: 'var(--text-primary)',
                  marginBottom: '0.75rem'
                }}>
                  Ratios & Proportions
                </h3>
                <p style={{
                  color: 'var(--text-secondary)',
                  lineHeight: '1.5'
                }}>
                  Comprehensive practice with ratio reasoning, unit rates, percentages, and proportional relationships in real-world contexts.
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
                  𝑥
                </div>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  color: 'var(--text-primary)',
                  marginBottom: '0.75rem'
                }}>
                  Algebraic Thinking
                </h3>
                <p style={{
                  color: 'var(--text-secondary)',
                  lineHeight: '1.5'
                }}>
                  Expressions, equations, and inequalities that build the foundation for formal algebra in middle school.
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
                  Statistics & Data
                </h3>
                <p style={{
                  color: 'var(--text-secondary)',
                  lineHeight: '1.5'
                }}>
                  Statistical measures, data distributions, variability, and probability concepts for data literacy.
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
                Generate Custom 6th Grade Worksheets
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
              Why Sixth Grade Math Is a Turning Point
            </h2>
            <p style={{
              color: 'var(--text-secondary)',
              lineHeight: '1.7',
              fontSize: '1.05rem',
              marginBottom: '1rem'
            }}>
              Sixth grade is where math shifts from arithmetic to relationships. In elementary grades, students learned to compute with numbers — adding, subtracting, multiplying, and dividing. In 6th grade, they begin to think about how numbers relate to each other through ratios, proportions, and the beginnings of algebraic reasoning. This shift is harder than it looks because it asks children to think abstractly about quantities they can't see. A child who could successfully add fractions in 5th grade might struggle to set up a proportion in 6th, not because the math is harder, but because the thinking is different.
            </p>
            <p style={{
              color: 'var(--text-secondary)',
              lineHeight: '1.7',
              fontSize: '1.05rem',
              marginBottom: '1rem'
            }}>
              The second major shift in 6th grade is the introduction of negative numbers. For the first time, numbers extend below zero, and students must understand that -5 is less than -3. This concept is surprisingly unintuitive — it requires thinking about direction and magnitude, not just amount. Building fluency with these new concepts takes time and varied practice. The <Link href="/word-problems" style={{color: 'var(--primary)', textDecoration: 'underline'}}>word problems</Link> and <Link href="/fractions-practice" style={{color: 'var(--primary)', textDecoration: 'underline'}}>fractions practice</Link> pages offer additional work with the foundational skills that 6th grade math builds upon.
            </p>
            <p style={{
              color: 'var(--text-secondary)',
              lineHeight: '1.7',
              fontSize: '1.05rem'
            }}>
              The worksheets here are designed to support this transition. They emphasize understanding over rote procedure, asking students to explain their reasoning and connect concepts to real-world situations like scaling recipes, analyzing data, and measuring space. The goal is not just correct answers but flexible thinking that will serve students well in middle school and beyond.
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
              What to Expect at Each Stage of 6th Grade
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
              Sixth Grade Math Skills
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
              Essential math concepts and skills for sixth grade success
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
                6th Grade Math Focus Areas
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
                    Proportional Reasoning
                  </h3>
                  <ul style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                    color: 'var(--text-secondary)'
                  }}>
                    <li style={{marginBottom: '0.75rem', display: 'flex', alignItems: 'flex-start'}}>
                      <span style={{marginRight: '0.5rem'}}>•</span>
                      Understanding ratio as a relationship between quantities
                    </li>
                    <li style={{marginBottom: '0.75rem', display: 'flex', alignItems: 'flex-start'}}>
                      <span style={{marginRight: '0.5rem'}}>•</span>
                      Solving percent problems in real-world contexts
                    </li>
                    <li style={{marginBottom: '0.75rem', display: 'flex', alignItems: 'flex-start'}}>
                      <span style={{marginRight: '0.5rem'}}>•</span>
                      Using tables and graphs to represent proportional relationships
                    </li>
                    <li style={{display: 'flex', alignItems: 'flex-start'}}>
                      <span style={{marginRight: '0.5rem'}}>•</span>
                      Converting units using ratio reasoning
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
                    Algebraic Foundations
                  </h3>
                  <ul style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                    color: 'var(--text-secondary)'
                  }}>
                    <li style={{marginBottom: '0.75rem', display: 'flex', alignItems: 'flex-start'}}>
                      <span style={{marginRight: '0.5rem'}}>•</span>
                      Writing and evaluating algebraic expressions
                    </li>
                    <li style={{marginBottom: '0.75rem', display: 'flex', alignItems: 'flex-start'}}>
                      <span style={{marginRight: '0.5rem'}}>•</span>
                      Solving one-step equations with rational numbers
                    </li>
                    <li style={{marginBottom: '0.75rem', display: 'flex', alignItems: 'flex-start'}}>
                      <span style={{marginRight: '0.5rem'}}>•</span>
                      Graphing points in all four quadrants
                    </li>
                    <li style={{display: 'flex', alignItems: 'flex-start'}}>
                      <span style={{marginRight: '0.5rem'}}>•</span>
                      Using variables to represent real-world quantities
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
              Comprehensive collection of sixth grade math practice materials
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem'
            }}>
              {[
                { name: 'Ratios & Proportions', href: '/ratios-practice', count: '40+ worksheets', desc: 'Ratio reasoning, unit rates, and percent problems' },
                { name: 'Algebra Practice', href: '/algebra-practice', count: '35+ worksheets', desc: 'Expressions, equations, and inequalities' },
                { name: 'Statistics & Data', href: '/statistics-practice', count: '25+ worksheets', desc: 'Measures of center, variability, and data displays' },
                { name: 'Geometry', href: '/geometry-practice', count: '30+ worksheets', desc: 'Area, volume, surface area, and coordinate plane' },
                { name: 'Word Problems', href: '/word-problems', count: '45+ worksheets', desc: 'Multi-step real-world problems' },
                { name: 'Number System', href: '/number-system', count: '35+ worksheets', desc: 'Negatives, decimals, and fractions' }
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
                When 6th Grade Math Needs More Than Worksheets
              </h2>
              <p style={{
                color: 'var(--text-secondary)',
                lineHeight: '1.7',
                marginBottom: '1.25rem'
              }}>
                For some students, the leap to abstract thinking requires more structured support. If your child is struggling with ratios, variables, or negative numbers — not just practicing but genuinely confused — our <strong>Multiplication & Division Foundations</strong> course (grades 3–5) can help backfill the arithmetic fluency that makes algebraic thinking possible. You can also browse all available courses and planners on the <Link href="/resources" style={{color: 'var(--primary)', textDecoration: 'underline'}}>resources page</Link>.
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
              Real questions homeschooling parents ask about sixth grade math
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
                Excel in Middle School Math!
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
                Start generating custom sixth grade worksheets today. Perfect for building advanced math skills and preparing for pre-algebra success.
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
              <Link href="/grade-5-worksheets" style={{
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
                  5
                </div>
                <div style={{
                  color: 'var(--text-primary)',
                  fontWeight: '600',
                  marginBottom: '0.25rem'
                }}>
                  Grade 5
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

              <Link href="/algebra-practice" style={{
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
                  𝑥
                </div>
                <div style={{
                  color: 'var(--text-primary)',
                  fontWeight: '600',
                  marginBottom: '0.25rem'
                }}>
                  Algebra
                </div>
                <div style={{
                  color: 'var(--text-secondary)',
                  fontSize: '0.875rem'
                }}>
                  Introductory practice
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
                  Complex problems
                </div>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
