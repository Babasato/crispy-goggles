/* WorksheetDownload.tsx */

"use client";

interface WorksheetDownloadProps {
  email: string;
  language: string;
  unitSystem: string;
  grade: string;
  onContinue: () => void;
}

export default function WorksheetDownload({ 
  email, 
  language, 
  unitSystem, 
  grade, 
  onContinue 
}: WorksheetDownloadProps) {

  // Tracking wrapper for the button click
  const handleGenerateClick = () => {
    // Send the Key Event to GA4
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'generate_worksheet', {
        'event_category': 'engagement',
        'event_label': grade || 'unspecified_grade',
        'unit_system': unitSystem,
        'language': language
      });
    }

    // Continue with the original generation logic
    onContinue();
  };

  return (
    <div className="download-modal">
      <div className="download-content">
        <h2>Get Bonus Downloads</h2>
        <p>Enter your email for bonus downloads and updates</p>
        
        <div className="download-details">
          <p><strong>Email:</strong> {email}</p>
          {unitSystem && <p><strong>Unit System:</strong> {unitSystem}</p>}
          {grade && <p><strong>Grade:</strong> {grade}</p>}
        </div>
        
        <button onClick={handleGenerateClick} className="cta-button">
          Generate Worksheet
        </button>
        
        <p className="privacy-notice">
          We'll send you bonus downloads and occasional updates. You can unsubscribe at any time.
        </p>
      </div>
    </div>
  );
}
