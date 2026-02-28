// app/components/LeadMagnetSignup.tsx - REDESIGNED
"use client";

import { useState } from "react";

interface LeadMagnetSignupProps {
  onSuccess: (email: string) => void;
  onClose: () => void;
}

export default function LeadMagnetSignup({ onSuccess, onClose }: LeadMagnetSignupProps) {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [marketing_consent, setMarketingConsent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!marketing_consent) {
      alert("Please confirm you'd like to receive educational resources and recommendations.");
      return;
    }
    
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/emails", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          marketing_consent: marketing_consent,
        }),
      });

      const result = await response.json();
      if (!response.ok || !result.success) {
        throw new Error(result.error || "Failed to save email");
      }

      const userData = { email };
      localStorage.setItem("worksheetUser", JSON.stringify(userData));
      onSuccess(email);
    } catch (error: any) {
      alert(`Error: ${error.message}. Please try again.`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="lead-magnet-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close-button" onClick={onClose} aria-label="Close">
          ✕
        </button>

        <div className="modal-header">
          <div className="bonus-badge">+10 Bonus Downloads</div>
          <h2>Get 10 More Worksheets Instantly!</h2>
        </div>

        <form onSubmit={handleSubmit} className="signup-form">
          <div className="form-group">
            <input
              id="email"
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="email-input"
            />
          </div>
          
          <div className="consent-box">
            <div className="consent-header">
              <input
                id="marketing-consent"
                type="checkbox"
                checked={marketing_consent}
                onChange={(e) => setMarketingConsent(e.target.checked)}
                className="consent-checkbox"
              />
              <label htmlFor="marketing-consent" className="consent-title">
                Yes, send me free resources!
              </label>
            </div>
            <p className="consent-description">
              Get time-saving teaching tips, curriculum ideas, and helpful product recommendations (including affiliate links). Unsubscribe anytime.
            </p>
          </div>

          <button type="submit" disabled={isSubmitting} className="submit-button">
            {isSubmitting ? (
              <>
                <span className="spinner"></span>
                Processing...
              </>
            ) : (
              "Unlock My 10 Bonus Downloads"
            )}
          </button>
        </form>

        <p className="footer-note">
          No spam, just quality math resources. 
        </p>
      </div>

      <style jsx>{`
        .modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(4px);
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 20px;
          z-index: 1000;
          animation: fadeIn 0.2s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .lead-magnet-modal {
          position: relative;
          background: white;
          border-radius: 16px;
          padding: 32px;
          width: 100%;
          max-width: 440px;
          box-shadow: 0 24px 48px rgba(0, 0, 0, 0.2);
          animation: slideUp 0.3s ease;
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .close-button {
          position: absolute;
          top: 16px;
          right: 16px;
          background: #f3f4f6;
          border: none;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          font-size: 18px;
          color: #6b7280;
          cursor: pointer;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .close-button:hover {
          background: #e5e7eb;
          color: #111827;
        }

        .modal-header {
          text-align: center;
          margin-bottom: 28px;
        }

        .bonus-badge {
          background: linear-gradient(135deg, #f59e0b, #d97706);
          color: white;
          padding: 8px 16px;
          border-radius: 24px;
          font-weight: 700;
          font-size: 15px;
          display: inline-block;
          margin-bottom: 16px;
          box-shadow: 0 4px 12px rgba(245, 158, 11, 0.3);
        }

        .modal-header h2 {
          color: #111827;
          font-size: 24px;
          font-weight: 700;
          margin: 0;
          line-height: 1.3;
        }

        .form-group {
          margin-bottom: 20px;
        }

        .email-input {
          width: 100%;
          padding: 14px 16px;
          border: 2px solid #e5e7eb;
          border-radius: 10px;
          font-size: 16px;
          transition: all 0.2s ease;
          box-sizing: border-box;
        }

        .email-input:focus {
          outline: none;
          border-color: #3b82f6;
          box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.1);
        }

        .consent-box {
          background: #f0f9ff;
          border: 2px solid #bfdbfe;
          border-radius: 12px;
          padding: 16px;
          margin-bottom: 24px;
        }

        .consent-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 8px;
        }

        .consent-checkbox {
          width: 20px;
          height: 20px;
          cursor: pointer;
          flex-shrink: 0;
        }

        .consent-title {
          font-size: 16px;
          font-weight: 700;
          color: #1e40af;
          cursor: pointer;
          margin: 0;
        }

        .consent-description {
          margin: 0 0 0 32px;
          font-size: 13px;
          color: #475569;
          line-height: 1.5;
        }
        
        .submit-button {
          width: 100%;
          background: linear-gradient(135deg, #10b981, #059669);
          color: white;
          border: none;
          border-radius: 10px;
          padding: 16px;
          font-size: 17px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
        }

        .submit-button:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(16, 185, 129, 0.4);
        }

        .submit-button:active:not(:disabled) {
          transform: translateY(0);
        }

        .submit-button:disabled {
          opacity: 0.7;
          cursor: not-allowed;
          transform: none;
        }

        .spinner {
          width: 18px;
          height: 18px;
          border: 3px solid rgba(255, 255, 255, 0.3);
          border-top: 3px solid white;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .footer-note {
          color: #9ca3af;
          font-size: 12px;
          text-align: center;
          margin-top: 16px;
          margin-bottom: 0;
        }

        @media (max-width: 480px) {
          .lead-magnet-modal {
            padding: 24px;
            max-width: calc(100vw - 40px);
          }
          
          .modal-header h2 {
            font-size: 21px;
          }

          .consent-description {
            margin-left: 32px;
          }
        }
      `}</style>
    </div>
  );
}
