// app/kindergarten-worksheets/page.tsx
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kindergarten Math Worksheets | Free Printable Math Practice for Kindergarten',
  description: 'Free printable kindergarten math worksheets covering counting, numbers, shapes, patterns, and basic addition and subtraction. Perfect for homeschool and early learning.',
}

export default function KindergartenWorksheets() {
  const faqs = [
    {
      question: 'What math skills should kindergarteners master?',
      answer: 'Kindergarten math is about building the foundation. By the end of kindergarten, a child should be able to count objects up to 20, recognize numbers 0–20, understand that the last number counted represents the total (cardinality), identify basic shapes (circle, square, triangle, rectangle), create and extend simple patterns, and add and subtract within 5 using objects. The goal is not speed but understanding — a child should know that 5 means five things, not just be able to say the number.'
    },
    {
      question: 'How can I tell if my kindergartener has one-to-one correspondence?',
      answer: 'One-to-one correspondence is the understanding that each object gets one count, and the last count tells how many there are. You can check this by having your child count a small group of objects (5–10). A child who has mastered this will touch each object once and say the numbers in order. A child who is still developing might count some objects twice, skip objects, or say the numbers without coordinating them with the objects. This is completely normal at the beginning of kindergarten and develops with practice.'
    },
    {
      question: 'What is the best way to teach addition and subtraction in kindergarten?',
      answer: 'In kindergarten, addition and subtraction should be taught entirely with objects, not symbols. Use small toys, counters, or snacks. "You have 3 crackers and I give you 2 more. How many do you have now?" Let them count to find out. Only after many experiences like this should you introduce the written symbols +, -, and =. The goal in kindergarten is understanding what adding and subtracting mean — not memorizing facts. Keep sessions playful and short, and always connect back to real objects.'
    },
    {
      question: 'My kindergartener reverses numbers (writes 2 backwards). Should I be worried?',
      answer: 'Number reversals are completely normal in kindergarten and do not indicate a problem. Writing numbers requires both visual memory (what the shape looks like) and fine motor control (making the shape). These skills are still developing. Gentle correction by modeling the correct formation is helpful; drilling or expressing frustration is not. Most children stop reversing numbers by the end of 1st grade naturally. If reversals persist past 2nd grade alongside other writing difficulties, that\'s worth discussing with someone.'
    },
    {
      question: 'How much math practice does a kindergartener need each day?',
      answer: 'For kindergarteners, 10–15 minutes of focused math time is plenty. Attention spans at this age are short, and quality matters more than quantity. A short, engaging session with hands-on materials and perhaps one worksheet is more effective than 30 minutes of forced practice. The goal is to build positive associations with math while developing foundational skills. Many short sessions throughout the week are better than one long session.'
    },
    {
      question: 'What does number sense look like in kindergarten?',
      answer: 'Number sense in kindergarten means understanding what numbers mean, not just being able to say them. A child with good number sense can look at a small group of objects (up to 5) and know how many without counting (subitizing). They can count out a specific number of objects from a larger group. They understand that 5 is more than 3 and can show this with objects. They can say what number comes next without counting from 1. These foundational skills predict later math success better than early counting ability.'
    },
    {
      question: 'Are these worksheets appropriate for a child who is not yet in kindergarten?',
      answer: 'Yes, the worksheets have three difficulty levels, so you can start with the "Easy" level for preschoolers who are ready for more structure. For young 4-year-olds, focus on the counting worksheets and use them alongside hands-on materials. The visual supports make the concepts accessible, but always prioritize hands-on learning at this age — worksheets should supplement, not replace, playing with real objects.'
    },
    {
      question: 'What should a kindergartener be able to do by the end of the year?',
      answer: 'By the end of kindergarten, a child working at grade level should: count to 100 by ones and tens, count forward from any given number (not just 1), write numbers 0–20, understand the relationship between numbers and quantities, compare groups of objects using more/less, add and subtract within 5 with objects, classify objects into categories, identify and describe basic shapes, and analyze and extend simple patterns.'
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
      category: 'Counting & Cardinality',
      topics: ['Counting objects 1-20', 'Number recognition 0-20', 'One-to-one correspondence', 'Understanding "how many?"', 'Comparing groups (more/less)']
    },
    {
      category: 'Operations & Algebraic Thinking',
      topics: ['Addition within 5 with objects', 'Subtraction within 5 with objects', 'Making 5 and 10', 'Simple word problems with pictures']
    },
    {
      category: 'Geometry',
      topics: ['2D shape identification', 'Shape attributes (sides, corners)', 'Position words (above, below, next to)', 'Composing simple shapes']
    },
    {
      category: 'Measurement & Data',
      topics: ['Measurable attributes (length, weight)', 'Simple patterns (AB, AAB, ABB)', 'Sorting and classifying', 'Comparing size directly']
    }
  ];

  const gradeLevels = [
    {
      grade: 'Beginning of Kindergarten',
      description: 'A student entering kindergarten is typically learning to count objects up to 10, though they may skip numbers or count objects twice. The most common gap at this stage is one-to-one correspondence — children can say the number words but don\'t yet coordinate them with objects. By the end of this phase, your child should be able to count a small group of objects (up to 10) reliably and recognize numbers 0–10.'
    },
    {
      grade: 'Mid Kindergarten',
      description: 'The middle of kindergarten is where number sense deepens. Children begin to understand that the last number counted tells how many (cardinality) and can compare groups to say which has more. The most common sticking point is moving from counting all to recognizing small quantities without counting (subitizing). Playing quick games with dice and dot cards helps build this skill. By mid-year, children should count to 20 and write numbers 0–10.'
    },
    {
      grade: 'End of Kindergarten',
      description: 'By year\'s end, a kindergartener should count to 100 by ones and tens, write numbers 0–20, and understand addition and subtraction as adding to and taking from. They should be able to solve simple word problems with objects and explain their thinking. The goal is not fluency with facts but a solid understanding of what the operations mean. Children ready for 1st grade understand that 5 + 2 means putting together, even if they still count to find the answer.'
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
              Kindergarten Math Worksheets
            </h1>
            <p style={{
              fontSize: '1.5rem',
              color: 'var(--primary)',
              fontWeight: '600',
              marginBottom: '1.5rem'
            }}>
              Practice Sheets for Kindergarten Students
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
              Build foundational math skills with visual worksheets covering counting, number recognition, 
              basic operations, and shapes. Perfect for early learners developing number sense.
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
                  🖍️
                </div>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  color: 'var(--text-primary)',
                  marginBottom: '0.75rem'
                }}>
                  Visual Learning
                </h3>
                <p style={{
                  color: 'var(--text-secondary)',
                  lineHeight: '1.5'
                }}>
                  Problems with simple shapes, counting pictures, and visual supports that help young learners understand concepts concretely.
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
                  Three Difficulty Levels
                </h3>
                <p style={{
                  color: 'var(--text-secondary)',
                  lineHeight: '1.5'
                }}>
                  Easy (1-5), Medium (1-10), and Challenging (1-15) to meet each child where they are and build confidence gradually.
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
                  Mixed Practice
                </h3>
                <p style={{
                  color: 'var(--text-secondary)',
                  lineHeight: '1.5'
                }}>
                  Combine counting, addition, subtraction, and pattern work to build flexible thinking and number sense.
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
                Generate Custom Kindergarten Worksheets
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
              Why Kindergarten Math Is More Important Than It Looks
            </h2>
            <p style={{
              color: 'var(--text-secondary)',
              lineHeight: '1.7',
              fontSize: '1.05rem',
              marginBottom: '1rem'
            }}>
              Kindergarten math looks like play — counting blocks, sorting shapes, making patterns. But underneath that play is the foundation of all later mathematics. In kindergarten, children learn what numbers actually mean. They develop one-to-one correspondence (each object gets one count). They learn cardinality (the last number tells how many). They begin to subitize — recognize small quantities without counting. These are not trivial skills; they are the cognitive building blocks of number sense.
            </p>
            <p style={{
              color: 'var(--text-secondary)',
              lineHeight: '1.7',
              fontSize: '1.05rem',
              marginBottom: '1rem'
            }}>
              The children who struggle in 1st grade and beyond are often not the ones who can't memorize facts — they're the ones who never developed this foundational number sense. They can count by rote but don't understand what the numbers represent. They can write numerals but can't show you what 6 means. That gap, if not addressed, makes every subsequent math topic harder. The <Link href="/addition-practice" style={{color: 'var(--primary)', textDecoration: 'underline'}}>addition practice</Link> and <Link href="/subtraction-practice" style={{color: 'var(--primary)', textDecoration: 'underline'}}>subtraction practice</Link> pages continue this foundation into early operations.
            </p>
            <p style={{
              color: 'var(--text-secondary)',
              lineHeight: '1.7',
              fontSize: '1.05rem'
            }}>
              The worksheets here are designed to build this foundation visually and concretely. They are meant to be used alongside hands-on materials — count real objects before counting pictures, sort real toys before sorting shapes on paper.
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
              What to Expect at Each Stage of Kindergarten
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
              Kindergarten Math Skills
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
              Essential math concepts and skills for kindergarten success
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
                Kindergarten Math Focus Areas
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
                    Number Sense
                  </h3>
                  <ul style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                    color: 'var(--text-secondary)'
                  }}>
                    <li style={{marginBottom: '0.75rem', display: 'flex', alignItems: 'flex-start'}}>
                      <span style={{marginRight: '0.5rem'}}>•</span>
                      Counting objects with one-to-one correspondence
                    </li>
                    <li style={{marginBottom: '0.75rem', display: 'flex', alignItems: 'flex-start'}}>
                      <span style={{marginRight: '0.5rem'}}>•</span>
                      Recognizing quantities without counting (subitizing)
                    </li>
                    <li style={{marginBottom: '0.75rem', display: 'flex', alignItems: 'flex-start'}}>
                      <span style={{marginRight: '0.5rem'}}>•</span>
                      Understanding "how many?" and comparing amounts
                    </li>
                    <li style={{display: 'flex', alignItems: 'flex-start'}}>
                      <span style={{marginRight: '0.5rem'}}>•</span>
                      Counting forward from any number (not just 1)
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
                    Early Operations & Geometry
                  </h3>
                  <ul style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                    color: 'var(--text-secondary)'
                  }}>
                    <li style={{marginBottom: '0.75rem', display: 'flex', alignItems: 'flex-start'}}>
                      <span style={{marginRight: '0.5rem'}}>•</span>
                      Addition and subtraction with objects
                    </li>
                    <li style={{marginBottom: '0.75rem', display: 'flex', alignItems: 'flex-start'}}>
                      <span style={{marginRight: '0.5rem'}}>•</span>
                      Composing and decomposing numbers within 5
                    </li>
                    <li style={{marginBottom: '0.75rem', display: 'flex', alignItems: 'flex-start'}}>
                      <span style={{marginRight: '0.5rem'}}>•</span>
                      Identifying and describing shapes
                    </li>
                    <li style={{display: 'flex', alignItems: 'flex-start'}}>
                      <span style={{marginRight: '0.5rem'}}>•</span>
                      Creating and extending patterns
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
              Comprehensive collection of kindergarten math practice materials
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem'
            }}>
              {[
                { name: 'Counting Practice', href: '/counting-practice', count: '15+ worksheets', desc: 'Count objects up to 20 with visual supports' },
                { name: 'Number Recognition', href: '/number-recognition', count: '12+ worksheets', desc: 'Identify and write numbers 0-20' },
                { name: 'Basic Addition', href: '/addition-practice', count: '15+ worksheets', desc: 'Add within 5 using pictures and objects' },
                { name: 'Basic Subtraction', href: '/subtraction-practice', count: '12+ worksheets', desc: 'Subtract within 5 with visual models' },
                { name: 'Shapes & Patterns', href: '/shapes-patterns', count: '10+ worksheets', desc: 'Identify shapes and complete patterns' },
                { name: 'Comparing Groups', href: '/comparing', count: '10+ worksheets', desc: 'More, less, and equal with pictures' }
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
                When Kindergarten Math Needs More Than Worksheets
              </h2>
              <p style={{
                color: 'var(--text-secondary)',
                lineHeight: '1.7',
                marginBottom: '1.25rem'
              }}>
                For some children, the foundation needs more direct support. If your child is still struggling with one-to-one correspondence past mid-year, cannot recognize small quantities without counting, or seems generally confused by what numbers mean, worksheets alone won't bridge that gap. Our <strong>Number Sense Foundations</strong> course (K–2) builds the conceptual groundwork through hands-on activities and clear progression. You can also browse all available courses and planners on the <Link href="/resources" style={{color: 'var(--primary)', textDecoration: 'underline'}}>resources page</Link>.
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
              Real questions homeschooling parents ask about kindergarten math
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
                Start Math Adventures Today!
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
                Begin your child's math journey with engaging, visual worksheets that build confidence and foundational skills for future success.
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

              <Link href="/addition-practice" style={{
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
                  +
                </div>
                <div style={{
                  color: 'var(--text-primary)',
                  fontWeight: '600',
                  marginBottom: '0.25rem'
                }}>
                  Addition
                </div>
                <div style={{
                  color: 'var(--text-secondary)',
                  fontSize: '0.875rem'
                }}>
                  Practice sheets
                </div>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}