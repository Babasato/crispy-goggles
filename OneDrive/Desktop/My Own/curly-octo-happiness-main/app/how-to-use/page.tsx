// app/how-to-use/page.tsx - OPTIMIZED VERSION
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Use Math Worksheet Generator | Step-by-Step Tutorial',
  description: 'Learn how to effectively use our math worksheet generator to create customized practice sheets for homeschool and classroom use. Tips for printing and customization.',
}

// 1. REUSABLE COMPONENTS
const CheckListItem = ({ text }: { text: string }) => (
  <li style={{
    display: 'flex',
    alignItems: 'flex-start',
    marginBottom: '0.5rem'
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
    {text}
  </li>
)

interface StepCardProps {
  step: number
  title: string
  description: string
  tip: string
  isLast: boolean
}

const StepCard = ({ step, title, description, tip, isLast }: StepCardProps) => (
  <div style={{
    background: 'var(--surface)',
    border: '1px solid var(--border)',
    borderRadius: '8px',
    padding: '2rem',
    position: 'relative',
    zIndex: 1
  }}>
    <div style={{
      display: 'flex',
      alignItems: 'flex-start'
    }}>
      {/* Step Circle */}
      <div style={{
        flexShrink: 0,
        width: '3rem',
        height: '3rem',
        background: 'var(--primary)',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: '1.5rem',
        boxShadow: '0 0 0 8px var(--background)' // Creates gap in progress line
      }}>
        <span style={{
          color: 'white',
          fontWeight: '700',
          fontSize: '1.125rem'
        }}>
          {step}
        </span>
      </div>
      
      {/* Content */}
      <div style={{ flex: 1 }}>
        <h2 style={{
          fontSize: '1.5rem',
          fontWeight: '600',
          color: 'var(--text-primary)',
          marginBottom: '1rem'
        }}>
          {title}
        </h2>
        <p style={{
          color: 'var(--text-secondary)',
          fontSize: '1.125rem',
          lineHeight: '1.6',
          marginBottom: '1rem'
        }}>
          {description}
        </p>
        <div style={{
          background: 'var(--surface-elevated)',
          color: 'var(--text-secondary)',
          borderRadius: '6px',
          padding: '1rem',
          borderLeft: '4px solid var(--primary)'
        }}>
          <p style={{
            fontWeight: '600',
            margin: 0,
            fontSize: '1rem',
            color: 'var(--text-primary)'
          }}>
            Pro Tip: <span style={{ fontWeight: 'normal' }}>{tip}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
)

// 2. RESPONSIVE GRID COMPONENT
const BestPracticesGrid = () => {
  const homeschoolTips = [
    'Create a consistent daily practice schedule',
    'Mix review problems with new concepts',
    'Use answer keys for immediate feedback',
    'Track progress and adjust difficulty accordingly'
  ]

  const teacherTips = [
    'Generate differentiated worksheets for various skill levels',
    'Create homework packets with mixed review',
    'Use for quick assessments and progress monitoring',
    'Print multiple versions to prevent answer sharing'
  ]

  return (
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
          For Homeschool Parents
        </h3>
        <ul style={{
          listStyle: 'none',
          padding: 0,
          margin: 0,
          color: 'var(--text-secondary)'
        }}>
          {homeschoolTips.map((tip, index) => (
            <CheckListItem key={index} text={tip} />
          ))}
        </ul>
      </div>
      <div>
        <h3 style={{
          fontSize: '1.25rem',
          fontWeight: '600',
          color: 'var(--text-primary)',
          marginBottom: '1rem'
        }}>
          For Classroom Teachers
        </h3>
        <ul style={{
          listStyle: 'none',
          padding: 0,
          margin: 0,
          color: 'var(--text-secondary)'
        }}>
          {teacherTips.map((tip, index) => (
            <CheckListItem key={index} text={tip} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default function HowToUse() {
  const steps = [
    {
      step: 1,
      title: 'Select Grade Level',
      description: 'Choose the appropriate grade level from Kindergarten through 6th grade to ensure the math problems match your student\'s skill level.',
      tip: 'Start with your child\'s current grade level and adjust based on their proficiency'
    },
    {
      step: 2,
      title: 'Choose Problem Types',
      description: 'Select from various math operations including addition, subtraction, multiplication, division, fractions, and word problems.',
      tip: 'Mix different problem types to provide comprehensive practice'
    },
    {
      step: 3,
      title: 'Customize Difficulty',
      description: 'Adjust the difficulty settings for each problem type, such as number range, regrouping requirements, or problem complexity.',
      tip: 'Gradually increase difficulty as your child masters each concept'
    },
    {
      step: 4,
      title: 'Generate Worksheet',
      description: 'Click the generate button to create your customized worksheet with a unique set of problems every time.',
      tip: 'Generate multiple versions for repeated practice'
    },
    {
      step: 5,
      title: 'Download and Print',
      description: 'Download the PDF worksheet and answer key, then print for immediate use. Worksheets are optimized for standard printer paper.',
      tip: 'Use the answer key for quick grading and feedback'
    }
  ]

  return (
    <>
      {/* Approved Header */}
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
              Math Worksheet Generator
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
          maxWidth: '800px',
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
              How to Use Our Math Worksheet Generator
            </h1>
            <p style={{
              fontSize: '1.25rem',
              color: 'var(--text-secondary)',
              marginBottom: '2rem',
              lineHeight: '1.6'
            }}>
              Step-by-step guide to creating perfect math practice sheets for your students
            </p>
          </section>

          {/* Steps Section with Visual Progress Line */}
          <div style={{
            position: 'relative',
            marginBottom: '3rem'
          }}>
            {/* Vertical Progress Line */}
            <div style={{
              position: 'absolute',
              left: '1.5rem', // Aligns with step circle center
              top: '2rem',
              bottom: '2rem',
              width: '2px',
              background: 'var(--border)',
              zIndex: 0
            }}></div>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '2rem'
            }}>
              {steps.map((step, index) => (
                <StepCard
                  key={step.step}
                  {...step}
                  isLast={index === steps.length - 1}
                />
              ))}
            </div>
          </div>

          {/* Best Practices Section - Using Reusable Grid */}
          <section style={{
            background: 'var(--surface)',
            border: '1px solid var(--border)',
            borderRadius: '8px',
            padding: '2rem',
            marginBottom: '3rem'
          }}>
            <h2 style={{
              fontSize: '2rem',
              fontWeight: '700',
              color: 'var(--text-primary)',
              marginBottom: '2rem',
              textAlign: 'center'
            }}>
              Best Practices
            </h2>
            <BestPracticesGrid />
          </section>

          {/* Bonus Resources Section */}
          <section id="bonus-planning-tools" style={{
            background: 'var(--surface)',
            border: '2px dashed var(--border)',
            borderRadius: '12px',
            padding: '2rem',
            marginBottom: '3rem',
            textAlign: 'center'
          }}>
            <h2 style={{
              fontSize: '1.5rem',
              fontWeight: '700',
              color: 'var(--text-primary)',
              marginBottom: '1rem'
            }}>
              📊 Bonus: Organize Your Math Year
            </h2>
            <p style={{
              color: 'var(--text-secondary)',
              fontSize: '1.125rem',
              lineHeight: '1.6',
              marginBottom: '1.5rem'
            }}>
              Don&apos;t just practice math—track it. Our premium <strong>Notion Math Dashboard</strong> and 
              Annual Planning tools help you visualize progress and keep your records perfect.
            </p>
            <Link href="/resources" style={{
              color: 'var(--primary)',
              fontWeight: '600',
              textDecoration: 'underline',
              fontSize: '1.125rem'
            }}>
              Explore our Homeschool Resources →
            </Link>
          </section>

          {/* CTA Section */}
          <section style={{ textAlign: 'center' }}>
            <h2 style={{
              fontSize: '2rem',
              fontWeight: '700',
              color: 'var(--text-primary)',
              marginBottom: '1.5rem'
            }}>
              Ready to Create Your Worksheets?
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
              Start Generating Worksheets Now
            </Link>
          </section>
        </div>
      </div>
    </>
  )
}
