// app/components/DownloadSection.tsx - COMPLETE VERSION WITH ANALYTICS
'use client';

import React, { useState } from 'react';
import { downloadCombinedPDF, Problem, PaperSize, getPaperSizeOptions } from '../utils/pdfGenerator';

interface DownloadSectionProps {
  problems: Problem[];
  title: string;
  includeVisuals: boolean;
  onDownloadComplete: () => void;
  onOpenLeadMagnet: () => void;
  downloadsRemaining: number;
  hasReceivedSignupBonus: boolean;
}

export default function DownloadSection({ 
  problems, 
  title,
  includeVisuals,
  onDownloadComplete, 
  onOpenLeadMagnet,
  downloadsRemaining,
  hasReceivedSignupBonus
}: DownloadSectionProps) {
  
  const [selectedPaperSize, setSelectedPaperSize] = useState<PaperSize>('a4');
  const paperSizeOptions = getPaperSizeOptions();
  
  // Track bonus prompt clicks
  const handleBonusClick = () => {
    // Track bonus prompt clicks in Google Analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'bonus_prompt_click', {
        'event_category': 'conversion',
        'event_label': 'download_bonus',
        'downloads_remaining': downloadsRemaining,
        'has_received_bonus': hasReceivedSignupBonus,
        'location': 'download_section'
      });
    }
    onOpenLeadMagnet();
  };
  
  const handleDownload = async () => {
    if (problems.length === 0) {
      alert('Please generate problems first!');
      return;
    }

    if (downloadsRemaining <= 0) {
      alert('No downloads remaining for today. Sign up for more!');
      handleBonusClick();
      return;
    }

    try {
      // --- GOOGLE ANALYTICS: Track worksheet download ---
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'generate_worksheet', {
          'event_category': 'engagement',
          'event_label': title,
          'paper_size': selectedPaperSize,
          'problem_count': problems.length,
          'include_visuals': includeVisuals,
          'downloads_remaining': downloadsRemaining,
          'has_bonus': hasReceivedSignupBonus
        });
      }
      // ------------------------------------------

      await downloadCombinedPDF(problems, title, includeVisuals, selectedPaperSize);
      onDownloadComplete();
      
      // --- OPTIONAL: Track successful download completion ---
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'download_complete', {
          'event_category': 'engagement',
          'event_label': 'pdf_downloaded',
          'paper_size': selectedPaperSize
        });
      }
      
    } catch (error) {
      console.error('Download failed:', error);
      
      // --- OPTIONAL: Track download failures ---
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'download_error', {
          'event_category': 'errors',
          'event_label': 'pdf_generation_failed',
          'error_type': error instanceof Error ? error.message : 'unknown'
        });
      }
      
      alert('Download failed. Please try again.');
    }
  };

  // Track paper size changes (optional analytics)
  const handlePaperSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newSize = e.target.value as PaperSize;
    setSelectedPaperSize(newSize);
    
    // Track paper size preference
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'paper_size_change', {
        'event_category': 'preferences',
        'event_label': 'paper_size_selected',
        'paper_size': newSize
      });
    }
  };

  const showBonusPrompt = downloadsRemaining < 3 && downloadsRemaining > 0 && !hasReceivedSignupBonus;

  return (
    <div className="download-card">
      <h3 className="download-title">
        Download Your Worksheet
      </h3>

      <p className="download-description">
        Download a clean PDF with {problems.length} problems and answer key.
        {includeVisuals && ' Includes visual aids.'}
      </p>

      {/* Paper Size Selector */}
      <div className="paper-size-selector">
        <label className="paper-size-label">
          Paper Size:
        </label>
        <select
          value={selectedPaperSize}
          onChange={handlePaperSizeChange}
          className="paper-size-dropdown"
        >
          {paperSizeOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <p className="paper-size-hint">
          {selectedPaperSize === 'a4' 
            ? 'Standard international size (210×297mm)' 
            : 'Standard US/Canada size (8.5×11in)'}
        </p>
      </div>

      {showBonusPrompt && (
        <div className="bonus-prompt">
          <span className="prompt-text">Only <strong>{downloadsRemaining} download{downloadsRemaining === 1 ? '' : 's'} left</strong>. Get 10 extra downloads when you sign up!</span>
          <button 
            onClick={handleBonusClick}
            className="bonus-button"
          >
            Get Bonus
          </button>
        </div>
      )}

      <button 
        onClick={handleDownload}
        className="download-button"
        disabled={downloadsRemaining <= 0}
      >
        {downloadsRemaining <= 0 ? (
          'No Downloads Left - Sign Up for More'
        ) : (
          `Download PDF (${selectedPaperSize.toUpperCase()})`
        )}
      </button>
      
      <div className="download-note">
        Includes student worksheet + answer key
        {includeVisuals && ' • With visual aids'}
        <br />
        <strong>Free daily downloads: 10</strong>
        {hasReceivedSignupBonus && ' • +10 bonus downloads from signup!'}
        <br />
        <span className="paper-size-indicator">
          Formatted for {selectedPaperSize === 'a4' ? 'A4' : 'Letter'} paper
        </span>
      </div>
    </div>
  );
}

