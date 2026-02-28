// app/utils/pdfDownloader.ts - OPTIMIZED FOR 5 PROBLEMS
import jsPDF from 'jspdf';

export interface Problem {
  id: number;
  question: string;
  answer: string;
  isWordProblem?: boolean;
  hasVisual?: boolean;
  visualType?: 'shapes' | 'counting' | 'none';
  visualData?: {
    num1: number;
    num2: number;
    operation: '+' | '-' | '×';
    shape: string;
    color: string;
  };
}

function renderVisualInPDF(
  doc: jsPDF, 
  problem: Problem, 
  x: number, 
  y: number
): number {
  if (!problem.hasVisual || !problem.visualData) return 0;
  
  const { num1, num2, operation } = problem.visualData;
  
  let currentX = x;
  let currentY = y;
  let height = 25;

  doc.setFillColor(0, 0, 0);

  if (operation === '+') {
    const maxPerRow = 4;
    
    // First group
    for (let i = 0; i < num1; i++) {
      if (i > 0 && i % maxPerRow === 0) {
        currentX = x;
        currentY += 8;
        height += 8;
      }
      doc.circle(currentX, currentY, 1.2, 'F');
      currentX += 5;
    }
    
    // Plus sign
    currentX += 8;
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text('+', currentX, currentY + 1);
    currentX += 10;
    
    // Second group
    const startX = currentX;
    for (let i = 0; i < num2; i++) {
      if (i > 0 && i % maxPerRow === 0) {
        currentX = startX;
        currentY += 8;
        height += 8;
      }
      doc.circle(currentX, currentY, 1.2, 'F');
      currentX += 5;
    }
    
    // Equal and question
    currentX += 8;
    doc.text('=', currentX, currentY + 1);
    currentX += 10;
    doc.text('?', currentX, currentY + 1);
    
    height += 12;
    
  } else if (operation === '-') {
    const maxPerRow = 4;
    
    for (let i = 0; i < num1; i++) {
      if (i > 0 && i % maxPerRow === 0) {
        currentX = x;
        currentY += 8;
        height += 8;
      }
      doc.circle(currentX, currentY, 1.2, 'F');
      
      if (i >= (num1 - num2)) {
        doc.setDrawColor(0, 0, 0);
        doc.setLineWidth(0.6);
        doc.line(currentX - 1.5, currentY - 1.5, currentX + 1.5, currentY + 1.5);
        doc.line(currentX - 1.5, currentY + 1.5, currentX + 1.5, currentY - 1.5);
      }
      
      currentX += 5;
    }
    height += 12;
    
  } else if (operation === '×') {
    const groupsPerRow = 2;
    for (let group = 0; group < num1; group++) {
      const row = Math.floor(group / groupsPerRow);
      const col = group % groupsPerRow;
      const groupX = x + (col * 25);
      const groupY = y + (row * 12);
      
      for (let i = 0; i < num2; i++) {
        doc.circle(groupX + (i * 5), groupY, 1, 'F');
      }
      height = Math.max(height, groupY - y + 15);
    }
    height += 8;
  }
  
  return height;
}

export async function downloadCombinedPDF(
  problems: Problem[], 
  title: string,
  includeVisuals: boolean = false
): Promise<void> {
  // LIMIT to exactly 5 problems for optimal layout
  const displayProblems = problems.slice(0, 5);
  
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 20;
  const contentWidth = pageWidth - (2 * margin);

  // ==================== WORKSHEET PAGE ====================
  doc.setFontSize(18);
  doc.setFont('helvetica', 'bold');
  doc.text(title, pageWidth / 2, 25, { align: 'center' });

  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.text('Name: _____________________', margin, 40);
  doc.text('Date: _____________________', pageWidth - margin - 50, 40);

  let yPosition = 55;

  // CALCULATED SPACING FOR 5 PROBLEMS
  const availableHeight = pageHeight - 70; // From 55mm to bottom margin
  const problemHeight = availableHeight / 5; // Each problem gets equal space
  
  displayProblems.forEach((problem, index) => {
    const problemY = 55 + (index * problemHeight);
    
    // Problem number
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text(`${index + 1}.`, margin, problemY);
    
    // Problem question
    doc.setFont('helvetica', 'normal');
    const problemText = ` ${problem.question}`;
    const lines = doc.splitTextToSize(problemText, contentWidth - 15);
    
    const numberWidth = doc.getTextWidth(`${index + 1}. `);
    const questionX = margin + numberWidth;
    
    doc.text(lines, questionX, problemY);
    let currentY = problemY + (lines.length * 4);

    // Render visuals
    if (includeVisuals && problem.hasVisual) {
      const visualHeight = renderVisualInPDF(doc, problem, margin + 5, currentY);
      if (visualHeight > 0) {
        currentY += visualHeight + 5;
      }
    }

    // Answer line - positioned consistently in each problem's section
    const answerY = problemY + (problemHeight * 0.7); // 70% down in each problem's space
    doc.setDrawColor(0, 0, 0);
    doc.setLineWidth(0.3);
    doc.line(margin, answerY, margin + 60, answerY);
    doc.setFontSize(9);
    doc.text('Answer:', margin, answerY - 2);
  });

  // ==================== ANSWER KEY PAGE ====================
  doc.addPage();
  
  doc.setFontSize(18);
  doc.setFont('helvetica', 'bold');
  doc.text('Answer Key', pageWidth / 2, 25, { align: 'center' });

  let answerY = 40;
  const answerSpacing = (pageHeight - 50) / 5; // Equal spacing for 5 answers

  displayProblems.forEach((problem, index) => {
    const yPos = 40 + (index * answerSpacing);
    
    doc.setFontSize(10);
    doc.setFont('helvetica', 'bold');
    doc.text(`${index + 1}.`, margin, yPos);
    
    doc.setFont('helvetica', 'normal');
    const answerText = ` ${problem.question}`;
    const answerLines = doc.splitTextToSize(answerText, contentWidth - 30);
    
    const numberWidth = doc.getTextWidth(`${index + 1}. `);
    const questionX = margin + numberWidth;
    
    doc.text(answerLines, questionX, yPos);
    
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(220, 38, 38);
    doc.text(`${problem.answer}`, margin + contentWidth - 20, yPos);
    doc.setTextColor(0, 0, 0);
  });

  const filename = `${title.replace(/\s+/g, '_')}_${Date.now()}.pdf`;
  doc.save(filename);
}