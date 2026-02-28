// app/resources/page.tsx - WITH COURSES SECTION + ANCHOR LINK AND DARK MODE COMPATIBILITY
'use client';

import Link from 'next/link';

export default function Resources() {
  return (
    <div className="main-content-area" style={{ 
      background: 'var(--background)', 
      color: 'var(--text-primary)',
      minHeight: '100vh',
      padding: '2rem 1.5rem'
    }}>
      {/* Header Section */}
      <header style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <div style={{ textAlign: 'left', marginBottom: '1rem' }}>
          <Link 
            href="/#resources-banner" 
            style={{ 
              color: 'var(--primary)', 
              textDecoration: 'none',
              fontWeight: '600',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            ← Back to Generator
          </Link>
        </div>

        <h1 className="contact-page-title" style={{ color: 'var(--text-primary)' }}>
          Homeschool Math Resources
        </h1>
        <p className="contact-description" style={{ color: 'var(--text-secondary)' }}>
          Structured courses and professional planning tools designed for homeschooling parents who want real results — not just more busywork.
        </p>
      </header>

      {/* Section 1: Courses */}
      <section style={{ marginBottom: '4rem' }}>
        <h2 className="contact-section-title" style={{ color: 'var(--text-primary)' }}>
          Math Courses
        </h2>

        <p className="about-text" style={{ 
          marginBottom: '1.5rem', 
          color: 'var(--text-secondary)' 
        }}>
          Each course is a complete, structured program built specifically for homeschooling parents teaching one-on-one. No prep required — just open and teach.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

          {/* Course 1 */}
          <div 
            className="info-card" 
            style={{ 
              background: 'var(--surface)',
              border: '2px solid var(--accent-blue)', 
              borderRadius: '12px',
              padding: '2rem',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(59, 130, 246, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <h3 className="text-h3" style={{ fontSize: '1.5rem', color: 'var(--text-primary)' }}>
                  Number Sense Foundations
                </h3>
                <p style={{ 
                  color: 'var(--accent-blue)', 
                  fontWeight: 'bold', 
                  fontSize: '0.9rem', 
                  marginBottom: '0.5rem' 
                }}>
                  GRADES K–2
                </p>
              </div>
              <span style={{ 
                background: 'var(--accent-blue)', 
                color: 'white', 
                padding: '6px 12px', 
                borderRadius: '4px', 
                fontSize: '1rem', 
                fontWeight: 'bold',
                whiteSpace: 'nowrap'
              }}>
                $57
              </span>
            </div>
            
            <p className="text-p" style={{ 
              fontSize: '1.1rem', 
              marginBottom: '1.5rem', 
              color: 'var(--text-secondary)' 
            }}>
              The foundation every young math learner needs. This course builds genuine number sense — not just counting, but understanding what numbers mean and how they relate to each other. Covers place value, composing and decomposing numbers, addition and subtraction concepts, and the mental math strategies that make later arithmetic feel intuitive rather than effortful. Designed for parents with no teaching background: every lesson tells you exactly what to say, what to watch for, and what to do when a child is stuck.
            </p>
            
            <Link 
              href="https://homeschoolmath.gumroad.com/l/mfikwi" 
              target="_blank" 
              className="contact-submit-button" 
              style={{ 
                display: 'block', 
                textAlign: 'center', 
                textDecoration: 'none', 
                width: '100%', 
                background: 'var(--accent-blue)', 
                color: 'white', 
                padding: '1rem', 
                borderRadius: '8px', 
                border: 'none', 
                fontWeight: '600',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--primary)';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'var(--accent-blue)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              Get Number Sense Foundations on Gumroad →
            </Link>
          </div>

          {/* Course 2 */}
          <div 
            className="info-card" 
            style={{ 
              background: 'var(--surface)',
              border: '2px solid var(--accent-blue)', 
              borderRadius: '12px',
              padding: '2rem',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(59, 130, 246, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <h3 className="text-h3" style={{ fontSize: '1.5rem', color: 'var(--text-primary)' }}>
                  Subtraction in 30 Days
                </h3>
                <p style={{ 
                  color: 'var(--accent-blue)', 
                  fontWeight: 'bold', 
                  fontSize: '0.9rem', 
                  marginBottom: '0.5rem' 
                }}>
                  GRADES 2–4
                </p>
              </div>
              <span style={{ 
                background: 'var(--accent-blue)', 
                color: 'white', 
                padding: '6px 12px', 
                borderRadius: '4px', 
                fontSize: '1rem', 
                fontWeight: 'bold',
                whiteSpace: 'nowrap'
              }}>
                $57
              </span>
            </div>
            
            <p className="text-p" style={{ 
              fontSize: '1.1rem', 
              marginBottom: '1.5rem', 
              color: 'var(--text-secondary)' 
            }}>
              Subtraction trips up more kids than almost any other early math skill — and the reason is almost always that borrowing was introduced before the concept was solid. This 30-day course fixes that. It starts with the meaning of subtraction, builds toward two-digit problems with and without regrouping, and ends with borrowing across zeros — the step where most kids (and parents) hit a wall. Each day is a short, focused lesson with a clear objective and a printable practice page.
            </p>
            
            <Link 
              href="https://homeschoolmath.gumroad.com/l/cdhshb" 
              target="_blank" 
              className="contact-submit-button" 
              style={{ 
                display: 'block', 
                textAlign: 'center', 
                textDecoration: 'none', 
                width: '100%', 
                background: 'var(--accent-blue)', 
                color: 'white', 
                padding: '1rem', 
                borderRadius: '8px', 
                border: 'none', 
                fontWeight: '600',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--primary)';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'var(--accent-blue)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              Get Subtraction in 30 Days on Gumroad →
            </Link>
          </div>

          {/* Course 3 */}
          <div 
            className="info-card" 
            style={{ 
              background: 'var(--surface)',
              border: '2px solid var(--accent-blue)', 
              borderRadius: '12px',
              padding: '2rem',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(59, 130, 246, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <h3 className="text-h3" style={{ fontSize: '1.5rem', color: 'var(--text-primary)' }}>
                  Multiplication & Division Foundations
                </h3>
                <p style={{ 
                  color: 'var(--accent-blue)', 
                  fontWeight: 'bold', 
                  fontSize: '0.9rem', 
                  marginBottom: '0.5rem' 
                }}>
                  GRADES 3–5
                </p>
              </div>
              <span style={{ 
                background: 'var(--accent-blue)', 
                color: 'white', 
                padding: '6px 12px', 
                borderRadius: '4px', 
                fontSize: '1rem', 
                fontWeight: 'bold',
                whiteSpace: 'nowrap'
              }}>
                $57
              </span>
            </div>
            
            <p className="text-p" style={{ 
              fontSize: '1.1rem', 
              marginBottom: '1.5rem', 
              color: 'var(--text-secondary)' 
            }}>
              Multiplication is where math confidence gets made or broken for a lot of kids — and the biggest mistake is rushing to memorization before the concept is understood. This course builds multiplication and division together from the ground up: equal groups, arrays, the relationship between the two operations, and then fact fluency built on understanding rather than rote drilling. By the end, students aren't just reciting facts — they know why they work. Covers all facts to 12×12 and introduces long division with a method that actually makes sense.
            </p>
            
            <Link 
              href="https://homeschoolmath.gumroad.com/l/csfto" 
              target="_blank" 
              className="contact-submit-button" 
              style={{ 
                display: 'block', 
                textAlign: 'center', 
                textDecoration: 'none', 
                width: '100%', 
                background: 'var(--accent-blue)', 
                color: 'white', 
                padding: '1rem', 
                borderRadius: '8px', 
                border: 'none', 
                fontWeight: '600',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--primary)';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'var(--accent-blue)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              Get Multiplication & Division Foundations on Gumroad →
            </Link>
          </div>

        </div>
      </section>

      {/* Section 2: Planners & Tools */}
      <section style={{ marginBottom: '4rem' }}>
        <h2 className="contact-section-title" style={{ color: 'var(--text-primary)' }}>
          Planners & Tracking Tools
        </h2>
        
        <p className="about-text" style={{ 
          marginBottom: '1.5rem', 
          color: 'var(--text-secondary)' 
        }}>
          Reliable, automated tools for parents who want professional-grade organization without the administrative headache.
        </p>

        {/* Flagship Planner */}
        <div 
          className="info-card accent-blue" 
          style={{ 
            background: 'var(--surface)',
            border: '2px solid var(--accent-blue)', 
            borderRadius: '12px',
            padding: '2rem',
            marginBottom: '1.5rem',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-4px)';
            e.currentTarget.style.boxShadow = '0 8px 24px rgba(59, 130, 246, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <h3 className="text-h3" style={{ fontSize: '1.8rem', color: 'var(--text-primary)' }}>
                Notion Math Progress Dashboard
              </h3>
              <p style={{ 
                color: 'var(--accent-blue)', 
                fontWeight: 'bold', 
                fontSize: '0.9rem', 
                marginBottom: '0.5rem' 
              }}>
                THE ULTIMATE MASTER TRACKER
              </p>
            </div>
            <span style={{ 
              background: 'var(--accent-blue)', 
              color: 'white', 
              padding: '6px 12px', 
              borderRadius: '4px', 
              fontSize: '1rem', 
              fontWeight: 'bold' 
            }}>
              $22
            </span>
          </div>
          
          <p className="text-p" style={{ 
            fontSize: '1.1rem', 
            marginBottom: '1.5rem', 
            color: 'var(--text-secondary)' 
          }}>
            Track your student's entire mathematical journey in one intelligent system. Auto-calculate teaching hours, 
            visualize skill mastery with progress bars, and generate compliance portfolios in 30 seconds. Features 13 
            pre-built views, smart alerts for struggling skills, and seamless multi-student tracking—all in Notion.
          </p>
          
          <Link 
            href="https://homeschoolmath.gumroad.com/l/ahxceu" 
            target="_blank" 
            className="contact-submit-button" 
            style={{ 
              display: 'block', 
              textAlign: 'center', 
              textDecoration: 'none', 
              width: '100%', 
              background: 'var(--accent-blue)', 
              color: 'white', 
              padding: '1rem', 
              borderRadius: '8px', 
              border: 'none', 
              fontWeight: '600',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--primary)';
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'var(--accent-blue)';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            Get the Template on Gumroad →
          </Link>
        </div>

        {/* Two Product Cards */}
        <div style={{ 
          display: 'flex', 
          flexDirection: 'row', 
          gap: '1.5rem', 
          flexWrap: 'wrap' 
        }}>
          {/* Curriculum Planner */}
          <div className="info-card accent-red" style={{ 
            flex: '1', 
            minWidth: '300px',
            background: 'var(--surface)', 
            padding: '1.5rem', 
            borderRadius: '12px', 
            border: '1px solid var(--border)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <h3 className="text-h3" style={{ color: 'var(--text-primary)' }}>
                  Curriculum PDF Generator
                </h3>
                <span style={{ 
                  background: 'var(--background)', 
                  padding: '2px 8px', 
                  borderRadius: '4px', 
                  fontSize: '0.8rem', 
                  fontWeight: 'bold', 
                  color: 'var(--text-secondary)',
                  whiteSpace: 'nowrap'
                }}>
                  $17
                </span>
              </div>
              
              <p className="text-p" style={{ 
                marginBottom: '1.5rem', 
                color: 'var(--text-secondary)',
                flexGrow: '1'
              }}>
                Map out your entire academic year in minutes. Set high-level objectives, align with standards, and generate 
                a comprehensive PDF roadmap to keep your teaching on track.
              </p>
            </div>
            
            <Link 
              href="https://homeschoolmath.gumroad.com/l/btoecv" 
              target="_blank" 
              className="contact-submit-button" 
              style={{ 
                display: 'block', 
                textAlign: 'center', 
                textDecoration: 'none', 
                fontSize: '0.9rem', 
                background: 'var(--primary)', 
                color: 'white', 
                padding: '0.75rem', 
                borderRadius: '8px',
                width: '100%'
              }}
            >
              View on Gumroad
            </Link>
          </div>

          {/* Weekly Planner */}
          <div className="info-card accent-orange" style={{ 
            flex: '1', 
            minWidth: '300px',
            background: 'var(--surface)', 
            padding: '1.5rem', 
            borderRadius: '12px', 
            border: '1px solid var(--border)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <h3 className="text-h3" style={{ color: 'var(--text-primary)' }}>
                  Weekly Math Planner
                </h3>
                <span style={{ 
                  background: 'var(--background)', 
                  padding: '2px 8px', 
                  borderRadius: '4px', 
                  fontSize: '0.8rem', 
                  fontWeight: 'bold', 
                  color: 'var(--text-secondary)',
                  whiteSpace: 'nowrap'
                }}>
                  $7
                </span>
              </div>
              
              <p className="text-p" style={{ 
                marginBottom: '1.5rem', 
                color: 'var(--text-secondary)',
                flexGrow: '1'
              }}>
                The perfect companion for daily teaching. Generate unlimited weekly planners to organize lessons, track 
                manipulatives, and document student reflections.
              </p>
            </div>
            
            <Link 
              href="https://homeschoolmath.gumroad.com/l/bkltc" 
              target="_blank" 
              className="contact-submit-button" 
              style={{ 
                display: 'block', 
                textAlign: 'center', 
                textDecoration: 'none', 
                fontSize: '0.9rem', 
                background: 'var(--primary)', 
                color: 'white', 
                padding: '0.75rem', 
                borderRadius: '8px',
                width: '100%'
              }}
            >
              View on Gumroad
            </Link>
          </div>
        </div>

        {/* Bundle */}
        <div 
          className="info-card accent-green" 
          style={{ 
            marginTop: '1.5rem',
            background: 'var(--surface)',
            border: '2px solid #10B981', 
            borderRadius: '12px',
            padding: '2rem',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-4px)';
            e.currentTarget.style.boxShadow = '0 8px 24px rgba(16, 185, 129, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <h3 className="text-h3" style={{ fontSize: '1.8rem', color: 'var(--text-primary)' }}>
                The Complete Homeschool Math System Bundle
              </h3>
              <p style={{ 
                color: '#10B981', 
                fontWeight: 'bold', 
                fontSize: '0.9rem', 
                marginBottom: '0.5rem' 
              }}>
                GET ALL 3 PREMIUM TOOLS & SAVE 24%
              </p>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ 
                background: '#10B981', 
                color: 'white', 
                padding: '6px 12px', 
                borderRadius: '4px', 
                fontSize: '1.2rem', 
                fontWeight: 'bold',
                marginBottom: '0.25rem'
              }}>
                $35
              </div>
              <div style={{ 
                fontSize: '0.8rem', 
                color: 'var(--text-secondary)',
                textDecoration: 'line-through'
              }}>
                Regular: $46
              </div>
            </div>
          </div>
          
          <p className="text-p" style={{ 
            fontSize: '1.1rem', 
            marginBottom: '1.5rem', 
            color: 'var(--text-secondary)' 
          }}>
            Stop piecing together random tools. Get everything you need to plan, track, and document your entire math curriculum in one complete bundle. Includes: Notion Math Progress Dashboard, Year-Long Curriculum Planner Generator, and Weekly Math Planner.
          </p>
          
          <Link 
            href="https://homeschoolmath.gumroad.com/l/bmedz" 
            target="_blank" 
            className="contact-submit-button" 
            style={{ 
              display: 'block', 
              textAlign: 'center', 
              textDecoration: 'none', 
              width: '100%', 
              background: '#10B981', 
              color: 'white', 
              padding: '1rem', 
              borderRadius: '8px', 
              border: 'none', 
              fontWeight: '600',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--primary)';
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#10B981';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            Get the Complete Bundle on Gumroad →
          </Link>
        </div>
      </section>

      {/* Section 3: Free Tools */}
      <section>
        <h2 className="contact-section-title" style={{ color: 'var(--text-primary)' }}>
          Free Community Tools
        </h2>
        
        <div className="auto-grid">
          <div className="info-card" style={{ 
            background: 'var(--surface)', 
            padding: '1.5rem', 
            borderRadius: '12px', 
            border: '1px solid var(--border)' 
          }}>
            <h3 className="text-h3" style={{ color: 'var(--text-primary)' }}>
              Worksheet Generator
            </h3>
            <p className="text-p" style={{ color: 'var(--text-secondary)' }}>
              Our signature tool for creating unlimited custom math practice pages for core operations (K-6).
            </p>
            <Link 
              href="/#resources-banner" 
              className="contact-resource-link" 
              style={{ 
                display: 'block', 
                marginTop: '1rem', 
                color: 'var(--primary)', 
                fontWeight: '600' 
              }}
            >
              Open Generator →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
