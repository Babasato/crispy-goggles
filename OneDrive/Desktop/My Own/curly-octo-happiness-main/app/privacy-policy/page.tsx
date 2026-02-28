// app/privacy-policy/page.tsx
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy | Math Worksheet Generator',
  description: 'Privacy policy for Math Worksheet Generator. Learn how we protect your data and privacy while using our educational resources.',
}

export default function PrivacyPolicy() {
  return (
    <>
      {/* Website Header for the page */}
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
          <Link href="/" style={{
            textDecoration: 'none',
            color: 'inherit'
          }}>
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

      {/* Privacy Policy Content */}
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
          <div style={{
            background: 'var(--surface)',
            border: '1px solid var(--border)',
            borderRadius: '8px',
            padding: '2rem'
          }}>
            <h1 style={{
              fontSize: '2.5rem',
              fontWeight: '700',
              color: 'var(--text-primary)',
              marginBottom: '1rem'
            }}>
              Privacy Policy
            </h1>
            <p style={{
              color: 'var(--text-secondary)',
              marginBottom: '2rem'
            }}>
              {/* ✅ STATIC DATE - Prevents hydration errors */}
              Last updated: December 28, 2025
            </p>

            <div style={{
              fontSize: '1.125rem',
              lineHeight: '1.7'
            }}>
              {/* Section 1 - Information We Collect */}
              <section style={{marginBottom: '2.5rem'}}>
                <h2 style={{
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  color: 'var(--text-primary)',
                  marginBottom: '1rem'
                }}>
                  1. Information We Collect
                </h2>
                <p style={{
                  color: 'var(--text-secondary)',
                  marginBottom: '1rem'
                }}>
                  Math Worksheet Generator is committed to protecting your privacy. We collect minimal information 
                  necessary to provide our educational services:
                </p>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  color: 'var(--text-secondary)'
                }}>
                  {[
                    'Worksheet generation preferences and settings',
                    'Download statistics (anonymous)',
                    'Basic usage analytics to improve our service',
                    'Contact information only if you voluntarily provide it'
                  ].map((item, index) => (
                    <li key={index} style={{
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
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              {/* Section 2 - Children's Privacy */}
              <section style={{marginBottom: '2.5rem'}}>
                <h2 style={{
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  color: 'var(--text-primary)',
                  marginBottom: '1rem'
                }}>
                  2. Children's Privacy
                </h2>
                <p style={{
                  color: 'var(--text-secondary)',
                  marginBottom: '1rem'
                }}>
                  Our service is designed for educational use and may be used by children under parental supervision.
                  We comply with the Children's Online Privacy Protection Act (COPPA) and do not knowingly collect
                  <strong> personal information</strong> from children under 13 without prior <strong>verifiable parental consent</strong>.
                  Under the amended COPPA rule effective June 2025, personal information includes identifiers like names,
                  email addresses, and new categories like <strong>biometric identifiers</strong> and <strong>government-issued IDs</strong>.
                </p>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                  All worksheet generation and downloads are anonymous and don't require user registration. We do not
                  require children to provide any personal information to use the core features of our website.
                </p>
                <p style={{ color: 'var(--text-secondary)' }}>
                  <strong>Parental Rights:</strong> Parents have the right to review, correct, or delete any personal
                  information we may have collected from their child, and to refuse further collection or use.
                  To make such a request, please contact us using the information in Section 9.
                </p>
              </section>

              {/* Section 3 - How We Use Information */}
              <section style={{marginBottom: '2.5rem'}}>
                <h2 style={{
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  color: 'var(--text-primary)',
                  marginBottom: '1rem'
                }}>
                  3. How We Use Information
                </h2>
                <p style={{
                  color: 'var(--text-secondary)',
                  marginBottom: '1rem'
                }}>
                  We use collected information to:
                </p>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  color: 'var(--text-secondary)'
                }}>
                  {[
                    'Generate customized math worksheets',
                    'Improve our worksheet generator and user experience',
                    'Understand how our resources are being used',
                    'Provide customer support when requested'
                  ].map((item, index) => (
                    <li key={index} style={{
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
                      {item}
                    </li>
                  ))}
                </ul>
                <p style={{ color: 'var(--text-secondary)', marginTop: '1rem' }}>
                  In accordance with COPPA amendments, we do not retain children's personal information indefinitely.
                  We retain data only for as long as reasonably necessary to fulfill the specific purpose for which it
                  was collected.
                </p>
              </section>

              {/* Section 4 - Data Security and Retention */}
              <section style={{marginBottom: '2.5rem'}}>
                <h2 style={{
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  color: 'var(--text-primary)',
                  marginBottom: '1rem'
                }}>
                  4. Data Security and Retention
                </h2>
                <p style={{
                  color: 'var(--text-secondary)',
                  marginBottom: '1rem'
                }}>
                  We implement appropriate security measures to protect against unauthorized access to 
                  or unauthorized alteration, disclosure, or destruction of data. All worksheet generation 
                  happens locally in your browser, and no personal math problems or student work is stored 
                  on our servers.
                </p>
                <p style={{ color: 'var(--text-secondary)' }}>
                  We have established a written data security program and clear data retention schedule.
                  We <strong>do not retain children's personal information indefinitely</strong> and delete it when no longer
                  reasonably necessary for the purpose it was collected.
                </p>
              </section>

              {/* Section 5 - Third-Party Services */}
              <section style={{marginBottom: '2.5rem'}}>
                <h2 style={{
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  color: 'var(--text-primary)',
                  marginBottom: '1rem'
                }}>
                  5. Third-Party Services
                </h2>
                <p style={{
                  color: 'var(--text-secondary)'
                }}>
                  We may use third-party services such as website analytics to understand how our 
                  service is used. These services collect anonymous usage data and don't identify 
                  individual users.
                </p>
              </section>

              {/* ✅ CORRECTED Section 6 - Advertising and Cookies */}
              <section style={{marginBottom: '2.5rem'}}>
                <h2 style={{
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  color: 'var(--text-primary)',
                  marginBottom: '1rem'
                }}>
                  6. Advertising and Cookies
                </h2>
                <p style={{ color: 'var(--text-secondary)' }}>
                  To support the operation of this free educational website, we may work with third-party advertising networks.
                  These partners may use cookies and similar technologies to serve ads based on a user's prior visits to this 
                  website or other sites on the internet. We will update this section with specific partner information if and when 
                  an advertising program is implemented.
                </p>
              </section>

              {/* Section 7 - Your Choices and Opt-Outs */}
              <section style={{marginBottom: '2.5rem'}}>
                <h2 style={{
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  color: 'var(--text-primary)',
                  marginBottom: '1rem'
                }}>
                  7. Your Choices and Opt-Outs
                </h2>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                  You may opt out of personalized advertising by visiting 
                  <a href="https://www.aboutads.info" target="_blank" rel="noopener" style={{color: 'var(--primary)', marginLeft: '5px'}}>
                    AboutAds.info
                  </a>.
                  You can also manage your cookie preferences through your browser settings at any time.
                </p>
                <p style={{ color: 'var(--text-secondary)' }}>
                  <strong>For Parents:</strong> Under COPPA, we must obtain your separate, verifiable consent before
                  disclosing your child's personal information to third parties for non-integral purposes like
                  certain types of advertising. Our service is designed to avoid such disclosures.
                </p>
              </section>

              {/* Section 8 - Changes to This Policy */}
              <section style={{marginBottom: '2.5rem'}}>
                <h2 style={{
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  color: 'var(--text-primary)',
                  marginBottom: '1rem'
                }}>
                  8. Changes to This Policy
                </h2>
                <p style={{
                  color: 'var(--text-secondary)',
                  marginBottom: '1rem'
                }}>
                  We may update this privacy policy from time to time. We will notify you of any changes 
                  by posting the new privacy policy on this page and updating the "last updated" date.
                </p>
                <p style={{ color: 'var(--text-secondary)' }}>
                  If we make material changes to how we handle children's personal information, we will
                  notify parents and obtain new parental consent as required by law.
                </p>
              </section>

              {/* Section 9 - Contact Us */}
              <section style={{marginBottom: '2.5rem'}}>
                <h2 style={{
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  color: 'var(--text-primary)',
                  marginBottom: '1rem'
                }}>
                  9. Contact Us
                </h2>
                <p style={{
                  color: 'var(--text-secondary)',
                  marginBottom: '1rem'
                }}>
                  If you have any questions about this privacy policy or wish to exercise your or your child's privacy rights, please contact us at:
                </p>
                <p style={{ color: 'var(--text-secondary)' }}>
                  <strong>Email:</strong> bob@homeschoolmath.site
                  <br />
                  <strong>Mailing Address:</strong> Nairobi, Kenya
                </p>
                <p style={{ color: 'var(--text-secondary)', marginTop: '1rem', fontSize: '0.95rem', fontStyle: 'italic' }}>
                  <strong>Note for Parents:</strong> To protect your child's privacy, we do not knowingly collect their personal information without prior, verifiable parental consent. If you have any concerns about your child's data, we encourage you to contact us directly via the email above.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
