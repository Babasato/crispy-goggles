"use client";

import { useState } from 'react';

interface ProblemSettingsProps {
  onGenerate: () => void;
  isGenerating: boolean;
  problemCount: number;
  setProblemCount: (count: number) => void;
  selectedTypes: string[];
  setSelectedTypes: (types: string[]) => void;
  downloadsRemaining: number;
  includeWordProblems: boolean;
  setIncludeWordProblems: (include: boolean) => void;
  wordProblemPercentage: number;
  setWordProblemPercentage: (percentage: number) => void;
  selectedContexts: string[];
  setSelectedContexts: (contexts: string[]) => void;
  currency: string;
  setCurrency: (currency: string) => void;
}

export default function ProblemSettings({
  onGenerate,
  isGenerating,
  problemCount,
  setProblemCount,
  selectedTypes,
  setSelectedTypes,
  downloadsRemaining,
  includeWordProblems,
  setIncludeWordProblems,
  wordProblemPercentage,
  setWordProblemPercentage,
}: ProblemSettingsProps) {
  const problemTypes = [
    { id: 'addition', label: 'Addition', icon: '+' },
    { id: 'subtraction', label: 'Subtraction', icon: '−' },
    { id: 'multiplication', label: 'Multiplication', icon: '×' },
    { id: 'division', label: 'Division', icon: '÷' }
  ];

  const handleTypeToggle = (type: string) => {
    if (selectedTypes.includes(type)) {
      setSelectedTypes(selectedTypes.filter(t => t !== type));
    } else {
      setSelectedTypes([...selectedTypes, type]);
    }
  };

  return (
    <div className="settings-panel">
      <div className="settings-header">
        <h3>Generate Your Worksheet</h3>
        <p className="settings-subtitle">Choose your math practice options</p>
      </div>
      
      <div className="settings-grid">
        {/* Problem Types */}
        <div className="settings-section">
          <h4>Problem Types</h4>
          <div className="checkbox-grid">
            {problemTypes.map((type) => (
              <label key={type.id} className="checkbox-card">
                <input
                  type="checkbox"
                  checked={selectedTypes.includes(type.id)}
                  onChange={() => handleTypeToggle(type.id)}
                />
                <span className="checkbox-content">
                  <span className="checkbox-icon">{type.icon}</span>
                  <span className="checkbox-label">{type.label}</span>
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Worksheet Settings */}
        <div className="settings-section">
          <h4>Worksheet Settings</h4>
          
          <div className="form-group">
            <label>Number of Problems</label>
            <div className="number-input-wrapper">
              <input
                type="number"
                min="5"
                max="50"
                value={problemCount}
                onChange={(e) => setProblemCount(Number(e.target.value))}
                className="number-input"
              />
              <span className="input-hint">5-50 problems</span>
            </div>
          </div>

          {/* FIXED CHECKBOX - Text appears below */}
          <div className="include-word-problems">
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={includeWordProblems}
                onChange={(e) => setIncludeWordProblems(e.target.checked)}
              />
              <span className="checkbox-text">Include word problems in the worksheet</span>
            </label>
            <p className="setting-description">Add real-world context to math problems</p>
          </div>

          {includeWordProblems && (
            <div className="form-group">
              <label>Word Problems: {wordProblemPercentage}% of worksheet</label>
              <input
                type="range"
                min="20"
                max="60"
                step="20"
                value={wordProblemPercentage}
                onChange={(e) => setWordProblemPercentage(Number(e.target.value))}
                className="range-slider"
              />
              <div className="range-labels">
                <span>20%</span>
                <span>40%</span>
                <span>60%</span>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="generate-section">
        <button
          onClick={onGenerate}
          disabled={isGenerating || selectedTypes.length === 0}
          className={`generate-button ${isGenerating ? 'generating' : ''}`}
        >
          {isGenerating ? (
            <>
              <span className="spinner"></span>
              Creating Worksheet...
            </>
          ) : (
            <>
              Generate My Worksheet
              <span className="button-arrow">→</span>
            </>
          )}
        </button>

        <div className="download-info">
          <span className="downloads-left">
            {downloadsRemaining} downloads remaining
          </span>
          {downloadsRemaining <= 3 && (
            <div className="usage-warning">
              <span>Running low on downloads</span>
            </div>
          )}
        </div>

        {downloadsRemaining <= 0 && (
          <div className="limit-reached">
            <p className="limit-message">
              You've used all your free downloads! Sign up for unlimited access.
            </p>
          </div>
        )}
      </div>

      <style jsx>{`
        .settings-panel {
          background: white;
          border-radius: 16px;
          padding: 32px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
          margin: 32px 0;
          border: 1px solid rgba(59, 130, 246, 0.1);
        }

        .settings-header {
          text-align: center;
          margin-bottom: 40px;
        }

        .settings-header h3 {
          color: #1f2937;
          font-size: 28px;
          font-weight: 700;
          margin: 0 0 12px 0;
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .settings-subtitle {
          color: #6b7280;
          font-size: 16px;
          margin: 0;
        }

        .settings-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
          margin-bottom: 40px;
        }

        @media (max-width: 768px) {
          .settings-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
          .settings-panel {
            padding: 24px;
            margin: 24px 0;
          }
        }

        .settings-section {
          background: #f8fafc;
          border-radius: 12px;
          padding: 24px;
          border: 1px solid #e2e8f0;
        }

        .settings-section h4 {
          color: #374151;
          font-size: 18px;
          font-weight: 600;
          margin: 0 0 20px 0;
        }

        .form-group {
          margin-bottom: 24px;
        }

        .form-group:last-child {
          margin-bottom: 0;
        }

        .form-group label {
          display: block;
          color: #374151;
          font-weight: 600;
          margin-bottom: 8px;
          font-size: 14px;
        }

        .number-input-wrapper {
          position: relative;
        }

        .number-input {
          width: 100%;
          padding: 12px 16px;
          border: 2px solid #e5e7eb;
          border-radius: 8px;
          font-size: 16px;
          font-weight: 500;
          transition: border-color 0.2s;
        }

        .number-input:focus {
          outline: none;
          border-color: #3b82f6;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }

        .input-hint {
          position: absolute;
          right: 16px;
          top: 50%;
          transform: translateY(-50%);
          color: #9ca3af;
          font-size: 12px;
          pointer-events: none;
        }

        .checkbox-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
        }

        @media (max-width: 480px) {
          .checkbox-grid {
            grid-template-columns: 1fr;
          }
        }

        .checkbox-card {
          display: flex;
          align-items: center;
          padding: 16px;
          border: 2px solid #e5e7eb;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.2s;
          background: white;
        }

        .checkbox-card:hover {
          border-color: #3b82f6;
          background: #eff6ff;
          transform: translateY(-1px);
        }

        .checkbox-card input:checked + .checkbox-content {
          color: #3b82f6;
          font-weight: 700;
        }

        .checkbox-card input:checked {
          accent-color: #3b82f6;
        }

        .checkbox-card input {
          margin-right: 12px;
          transform: scale(1.2);
        }

        .checkbox-content {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .checkbox-icon {
          font-size: 20px;
          font-weight: bold;
          width: 24px;
          text-align: center;
        }

        .checkbox-label {
          font-size: 14px;
          font-weight: 500;
        }

        /* FIXED CHECKBOX STYLING */
        .include-word-problems {
          margin: 1.5rem 0;
          padding: 1rem;
          background: white;
          border-radius: 8px;
          border: 1px solid #e2e8f0;
        }

        .include-word-problems .checkbox-label {
          display: block;
          font-weight: 600;
          margin-bottom: 0.5rem;
          line-height: 1.4;
          cursor: pointer;
        }

        .include-word-problems .checkbox-label input {
          margin-right: 0.75rem;
          vertical-align: top;
          margin-top: 0.2rem;
          width: 18px;
          height: 18px;
          accent-color: #3b82f6;
        }

        .checkbox-text {
          display: inline-block;
          vertical-align: top;
          width: calc(100% - 30px);
        }

        .setting-description {
          color: #6b7280;
          font-size: 12px;
          margin: 0.5rem 0 0 2rem;
          font-style: italic;
        }

        .range-slider {
          width: 100%;
          margin: 12px 0;
          -webkit-appearance: none;
          height: 8px;
          border-radius: 4px;
          background: #e5e7eb;
          outline: none;
        }

        .range-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #3b82f6;
          cursor: pointer;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }

        .range-slider::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #3b82f6;
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }

        .range-labels {
          display: flex;
          justify-content: space-between;
          font-size: 12px;
          color: #6b7280;
          font-weight: 500;
        }

        .generate-section {
          text-align: center;
          border-top: 2px solid #f1f5f9;
          padding-top: 32px;
        }

        .generate-button {
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          color: white;
          border: none;
          padding: 20px 40px;
          border-radius: 12px;
          font-size: 18px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          margin: 0 auto 20px auto;
          min-width: 280px;
          box-shadow: 0 4px 16px rgba(59, 130, 246, 0.3);
        }

        .generate-button:hover:not(:disabled) {
          transform: translateY(-3px);
          box-shadow: 0 8px 32px rgba(59, 130, 246, 0.4);
        }

        .generate-button:active:not(:disabled) {
          transform: translateY(-1px);
        }

        .generate-button:disabled {
          background: #9ca3af;
          cursor: not-allowed;
          transform: none;
          box-shadow: none;
        }

        .button-arrow {
          font-size: 16px;
          font-weight: 700;
        }

        .spinner {
          width: 20px;
          height: 20px;
          border: 3px solid rgba(255,255,255,0.3);
          border-top: 3px solid white;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        .download-info {
          background: #eff6ff;
          border: 1px solid #dbeafe;
          border-radius: 8px;
          padding: 12px 20px;
          margin: 16px auto;
          max-width: 300px;
        }

        .downloads-left {
          color: #1e40af;
          font-weight: 600;
          font-size: 14px;
        }

        .usage-warning {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          color: #f59e0b;
          font-weight: 600;
          margin-top: 8px;
          font-size: 14px;
        }

        .limit-reached {
          background: linear-gradient(135deg, #fef3c7, #fde68a);
          border: 2px solid #f59e0b;
          border-radius: 12px;
          padding: 20px;
          margin-top: 16px;
        }

        .limit-message {
          color: #92400e;
          font-weight: 600;
          margin: 0;
          font-size: 16px;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}