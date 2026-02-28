// app/utils/pdfGenerator.ts
import jsPDF from 'jspdf';

export interface Problem {
  id: number;
  question: string;
  answer: string;
  isWordProblem?: boolean;
  hasVisual?: boolean;
  visualType?: 'shapes' | 'counting' | 'none';
}

// Add paper size type
export type PaperSize = 'a4' | 'letter';

// Paper dimensions info
export const PAPER_SIZES = {
  a4: { width: 210, height: 297, name: 'A4', label: 'A4 (International)' },
  letter: { width: 215.9, height: 279.4, name: 'Letter', label: 'US Letter' }
} as const;

export async function downloadCombinedPDF(
  problems: Problem[], 
  title: string,
  includeVisuals: boolean = false,
  paperSize: PaperSize = 'a4' // NEW parameter with A4 as default
): Promise<void> {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: paperSize // Use selected paper size
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  
  // Adjust margins based on paper size
  const margin = paperSize === 'a4' ? 15 : 13;
  const contentWidth = pageWidth - (2 * margin);

  // WORKSHEET PAGE
  doc.setFontSize(18);
  doc.setFont('helvetica', 'bold');
  doc.text(title, pageWidth / 2, 20, { align: 'center' });

  // Add subtle paper size indicator
  doc.setFontSize(8);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(150, 150, 150);
  doc.text(`Paper: ${PAPER_SIZES[paperSize].name}`, pageWidth - margin - 30, 15);

  doc.setFontSize(10);
  doc.setTextColor(0, 0, 0);
  doc.text('Name: _____________________', margin, 35);
  doc.text('Date: _____________________', pageWidth - margin - 50, 35);

  let yPosition = 50;

  problems.forEach((problem, index) => {
    // Calculate space needed for this problem
    const problemText = `${index + 1}. ${problem.question}`;
    const lines = doc.splitTextToSize(problemText, contentWidth - 10);
    let spaceNeeded = lines.length * 5 + 20;
    
    // Add visual space if needed
    if (includeVisuals && problem.hasVisual) {
      const numbers = problem.question.match(/\d+/g);
      if (numbers && numbers.length >= 2) {
        const num1 = parseInt(numbers[0]);
        const num2 = parseInt(numbers[1]);
        if (num1 <= 10 && num2 <= 10) {
          spaceNeeded += 15;
        }
      }
    }
    
    // Check if we need a new page (adjust threshold for different paper sizes)
    const pageBreakThreshold = pageHeight - margin;
    if (yPosition + spaceNeeded > pageBreakThreshold) {
      doc.addPage();
      yPosition = 20;
    }

    // Problem text
    doc.setFontSize(11);
    doc.setFont('helvetica', 'normal');
    
    doc.text(lines, margin, yPosition);
    yPosition += lines.length * 5;

    // SIMPLE VISUALS FOR PDF
    if (includeVisuals && problem.hasVisual) {
      const numbers = problem.question.match(/\d+/g);
      if (numbers && numbers.length >= 2) {
        const num1 = parseInt(numbers[0]);
        const num2 = parseInt(numbers[1]);
        
        if (num1 <= 10 && num2 <= 10) {
          // Check if visual fits on current page
          if (yPosition + 20 > pageBreakThreshold) {
            doc.addPage();
            yPosition = 20;
          }
          
          // Draw simple circles for visuals
          const startX = margin + 5;
          let currentX = startX;
          
          if (problem.question.includes('+')) {
            for (let i = 0; i < num1; i++) {
              if (i > 0 && i % 8 === 0) {
                currentX = startX;
                yPosition += 8;
              }
              doc.circle(currentX, yPosition, 1.5, 'F');
              currentX += 4;
            }
            
            doc.setFontSize(10);
            doc.text('+', currentX + 1, yPosition + 1);
            currentX += 6;
            
            for (let i = 0; i < num2; i++) {
              if (i > 0 && (i + num1) % 8 === 0) {
                currentX = startX + 40;
                yPosition += 8;
              }
              doc.circle(currentX, yPosition, 1.5, 'F');
              currentX += 4;
            }
            
            yPosition += 10;
          } else if (problem.question.includes('-')) {
            for (let i = 0; i < num1; i++) {
              if (i > 0 && i % 10 === 0) {
                currentX = startX;
                yPosition += 8;
              }
              doc.circle(currentX, yPosition, 1.5, 'F');
              
              if (i >= (num1 - num2)) {
                doc.setDrawColor(220, 38, 38);
                doc.line(currentX - 2, yPosition - 2, currentX + 2, yPosition + 2);
                doc.line(currentX - 2, yPosition + 2, currentX + 2, yPosition - 2);
              }
              
              currentX += 4;
            }
            yPosition += 10;
          }
        }
      }
    }

    // Answer line
    doc.setDrawColor(0, 0, 0);
    doc.setLineWidth(0.3);
    doc.line(margin, yPosition + 5, margin + 60, yPosition + 5);
    doc.setFontSize(9);
    doc.text('Answer:', margin, yPosition + 3);

    yPosition += 20;
  });

  // ANSWER KEY PAGE
  doc.addPage();
  doc.setFontSize(18);
  doc.setFont('helvetica', 'bold');
  doc.text('Answer Key', pageWidth / 2, 20, { align: 'center' });

  yPosition = 35;

  problems.forEach((problem, index) => {
    const answerText = `${index + 1}. ${problem.question}`;
    const answerLines = doc.splitTextToSize(answerText, contentWidth - 30);
    const answerSpaceNeeded = Math.max(7, answerLines.length * 5) + 5;
    
    if (yPosition + answerSpaceNeeded > pageHeight - margin) {
      doc.addPage();
      yPosition = 20;
    }

    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    
    doc.text(answerLines, margin, yPosition);
    
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(220, 38, 38);
    doc.text(`${problem.answer}`, margin + contentWidth - 25, yPosition);
    doc.setTextColor(0, 0, 0);

    yPosition += Math.max(7, answerLines.length * 5);
  });

  // Add paper size to filename
  const filename = `${title.replace(/\s+/g, '_')}_${PAPER_SIZES[paperSize].name}_${Date.now()}.pdf`;
  doc.save(filename);
}

// Helper function for paper size options
export function getPaperSizeOptions() {
  return Object.entries(PAPER_SIZES).map(([key, value]) => ({
    value: key as PaperSize,
    label: value.label
  }));
}
