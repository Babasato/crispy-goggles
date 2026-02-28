// app/not-found.tsx
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="main-container">
      <div className="main-content-area" style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        minHeight: '60vh',
        textAlign: 'center' 
      }}>
        <div className="info-card accent-blue" style={{ maxWidth: '500px', padding: '3rem' }}>
          <h1 className="contact-page-title" style={{ fontSize: '3rem', marginBottom: '1rem' }}>404</h1>
          <h2 className="contact-section-title">Page Not Found</h2>
          <p className="contact-description" style={{ marginBottom: '2rem' }}>
            The resource you're looking for has been moved or updated to our new Resources hub.
          </p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <Link href="/resources" className="contact-submit-button" style={{ textDecoration: 'none' }}>
              Visit the Resources Page
            </Link>
            <Link href="/" className="nav-link">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
