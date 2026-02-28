// app/components/ProblemList.tsx
import React, { useState } from 'react';
import { Problem } from '../utils/pdfDownloader';

interface ProblemListProps {
  problems: Problem[];
}

export default function ProblemList({ problems }: ProblemListProps) {
  const [previewMode, setPreviewMode] = useState<'worksheet' | 'answers'>('worksheet');

  if (problems.length === 0) {
    return (
      <div className="problem-list-empty">
        <div className="empty-content">
          <div className="empty-icon">🎯</div>
          <h3>No Problems Yet</h3>
          <p>Generate some problems using the controls above to see your worksheet preview here.</p>
        </div>
      </div>
    );
  }

  const problemsPerColumn = Math.ceil(problems.length / 2);
  const column1Problems = problems.slice(0, problemsPerColumn);
  const column2Problems = problems.slice(problemsPerColumn);

  return (
    <div className="problem-list">
      <div className="preview-header">
        <div className="header-content">
          <h3>Worksheet Preview</h3>
          <p>This is exactly what your PDF will look like (Page 1 - Student Version):</p>
        </div>
        
        <div className="preview-toggle">
          <button
            className={`toggle-btn ${previewMode === 'worksheet' ? 'active' : ''}`}
            onClick={() => setPreviewMode('worksheet')}
          >
            📄 Student Worksheet
          </button>
          <button
            className={`toggle-btn ${previewMode === 'answers' ? 'active' : ''}`}
            onClick={() => setPreviewMode('answers')}
          >
            ✅ Answer Key (Page 2)
          </button>
        </div>
      </div>

      // In your ProblemList.tsx, replace the worksheet-preview section with this:
<div className="worksheet-preview">
  <div className="worksheet-header">
    <h1 className="worksheet-title">Math Practice Worksheet</h1>
    <div className="worksheet-subtitle">
      {previewMode === 'answers' ? 'ANSWER KEY' : 'STUDENT WORKSHEET'}
    </div>
    <div className="worksheet-date">
      All {problems.length} problems • {previewMode === 'answers' ? 'Answer Key' : 'Worksheet'} • {new Date().toLocaleDateString()}
    </div>
  </div>

  {previewMode === 'worksheet' && (
    <div className="student-info">
      <div className="info-field">
        <label>Name:</label>
        <div className="info-line"></div>
      </div>
      <div className="info-field">
        <label>Date:</label>
        <div className="info-line"></div>
      </div>
      <div className="info-field">
        <label>Score:</label>
        <div className="score-field">
          <div className="score-line"></div>
          <span className="score-total">/ {problems.length}</span>
        </div>
      </div>
    </div>
  )}

  {previewMode === 'answers' && (
    <div className="answer-key-notice">
      <div className="notice-icon">📝</div>
      <div className="notice-text">Answer Key - All {problems.length} problems</div>
    </div>
  )}

  <div className="problems-grid">
    <div className="problems-column">
      {problems.slice(0, Math.ceil(problems.length / 2)).map((problem, index) => (
        <ProblemPreview
          key={problem.id}
          problem={problem}
          number={index + 1}
          showAnswer={previewMode === 'answers'}
        />
      ))}
    </div>

    <div className="problems-column">
      {problems.slice(Math.ceil(problems.length / 2)).map((problem, index) => (
        <ProblemPreview
          key={problem.id}
          problem={problem}
          number={index + Math.ceil(problems.length / 2) + 1}
          showAnswer={previewMode === 'answers'}
        />
      ))}
    </div>
  </div>

  <div className="preview-footer">
    <div className="footer-text">
      {previewMode === 'answers' ? 'Answer Key' : 'Student Worksheet'} • All {problems.length} problems • {new Date().toLocaleDateString()}
    </div>
  </div>
</div>

      <style jsx>{`
        .problem-list {
          background: white;
          border-radius: 16px;
          padding: 24px;
          margin: 32px 0;
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
          border: 1px solid #e5e7eb;
        }

        .problem-list-empty {
          background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
          border-radius: 16px;
          padding: 48px 24px;
          margin: 32px 0;
          border: 2px dashed #cbd5e1;
          text-align: center;
        }

        .empty-content {
          max-width: 400px;
          margin: 0 auto;
        }

        .empty-icon {
          font-size: 48px;
          margin-bottom: 16px;
        }

        .empty-content h3 {
          color: #374151;
          font-size: 20px;
          font-weight: 600;
          margin: 0 0 8px 0;
        }

        .empty-content p {
          color: #6b7280;
          font-size: 16px;
          margin: 0;
          line-height: 1.5;
        }

        .preview-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 2px solid #e5e7eb;
          flex-wrap: wrap;
          gap: 16px;
        }

        .header-content h3 {
          color: #111827;
          font-size: 20px;
          font-weight: 600;
          margin: 0 0 4px 0;
        }

        .header-content p {
          color: #6b7280;
          font-size: 14px;
          margin: 0;
        }

        .preview-toggle {
          display: flex;
          background: #f3f4f6;
          border-radius: 8px;
          padding: 4px;
          gap: 4px;
        }

        .toggle-btn {
          background: transparent;
          border: none;
          padding: 8px 16px;
          border-radius: 6px;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
          color: #6b7280;
        }

        .toggle-btn.active {
          background: white;
          color: #111827;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }

        .worksheet-preview {
          background: #ffffff;
          border: 2px solid #e5e7eb;
          border-radius: 12px;
          padding: 32px;
          margin: 16px 0;
          font-family: 'Arial', sans-serif;
          max-height: 600px;
          overflow-y: auto;
        }

        .worksheet-header {
          text-align: center;
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 3px solid ${previewMode === 'answers' ? '#dc2626' : '#2563eb'};
        }

        .worksheet-title {
          font-size: 24px;
          font-weight: bold;
          margin: 0 0 8px 0;
          color: ${previewMode === 'answers' ? '#dc2626' : '#111827'};
        }

        .worksheet-subtitle {
          font-size: 18px;
          color: ${previewMode === 'answers' ? '#dc2626' : '#2563eb'};
          font-weight: bold;
          margin: 8px 0;
        }

        .worksheet-date {
          font-size: 12px;
          color: #6b7280;
        }

        .student-info {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 20px;
          margin-bottom: 24px;
          padding: 16px;
          background: #f8fafc;
          border-radius: 8px;
          border: 1px solid #e2e8f0;
        }

        .info-field {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .info-field label {
          font-size: 12px;
          color: #64748b;
          font-weight: 600;
          min-width: 40px;
        }

        .info-line {
          border-bottom: 2px solid #334155;
          height: 16px;
          flex: 1;
        }

        .score-field {
          display: flex;
          align-items: center;
          gap: 6px;
          flex: 1;
        }

        .score-line {
          border-bottom: 2px solid #334155;
          height: 16px;
          width: 30px;
        }

        .score-total {
          font-weight: bold;
          color: #334155;
          font-size: 14px;
        }

        .answer-key-notice {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 24px;
          padding: 12px;
          background: #fef2f2;
          border-radius: 8px;
          border: 2px solid #dc2626;
        }

        .notice-icon {
          font-size: 20px;
        }

        .notice-text {
          color: #dc2626;
          font-weight: 600;
          font-size: 14px;
        }

        .problems-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
          margin-bottom: 24px;
        }

        .problems-column {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .preview-footer {
          text-align: center;
          padding-top: 16px;
          border-top: 1px solid #e2e8f0;
          margin-top: 24px;
        }

        .footer-text {
          font-size: 10px;
          color: #9ca3af;
        }

        @media (max-width: 768px) {
          .problems-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .student-info {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .preview-header {
            flex-direction: column;
            align-items: stretch;
          }

          .worksheet-preview {
            padding: 20px;
            max-height: 500px;
          }
        }
      `}</style>
    </div>
  );
}

// ProblemPreview component remains exactly the same as before
function ProblemPreview({ problem, number, showAnswer }: any) {
  return (
    <div className="problem-preview">
      <div className="problem-header">
        <span className="problem-number">{number}.</span>
        <span className="problem-question">{problem.question}</span>
      </div>
      
      <div className="problem-answer">
        <span className="answer-label">Answer:</span>
        {showAnswer ? (
          <span className="answer-value">{problem.answer}</span>
        ) : (
          <div className="answer-line"></div>
        )}
      </div>

      <style jsx>{`
        .problem-preview {
          padding: 12px;
          background: ${showAnswer ? '#fef2f2' : '#f8fafc'};
          border-radius: 8px;
          border-left: 4px solid ${showAnswer ? '#dc2626' : '#3b82f6'};
        }

        .problem-header {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          margin-bottom: 10px;
        }

        .problem-number {
          font-weight: bold;
          font-size: 16px;
          min-width: 28px;
          flex-shrink: 0;
          color: ${showAnswer ? '#dc2626' : '#3b82f6'};
        }

        .problem-question {
          flex: 1;
          line-height: 1.4;
          font-size: 15px;
          color: #374151;
        }

        .problem-answer {
          margin-left: 38px;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .answer-label {
          font-weight: 600;
          color: #4b5563;
          font-size: 14px;
        }

        .answer-line {
          border-bottom: 2px solid #374151;
          height: 16px;
          flex: 1;
          max-width: 120px;
        }

        .answer-value {
          color: #dc2626;
          font-weight: bold;
          font-size: 16px;
          padding: 6px 12px;
          background: white;
          border-radius: 6px;
          border: 2px solid #dc2626;
        }
      `}</style>
    </div>
  );
}
