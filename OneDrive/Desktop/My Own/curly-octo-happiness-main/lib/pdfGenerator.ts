export function generatePdf(problems: any[], gradeLevel: string) {
  // Create a printable version of the worksheet
  const printableContent = document.createElement("div");
  printableContent.innerHTML = `
    <div style="font-family: Arial, sans-serif; padding: 20px;">
      <h1 style="text-align: center; margin-bottom: 30px;">Math Worksheet - Grade ${gradeLevel}</h1>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
        ${problems.map((problem, index) => `
          <div style="padding: 10px; border-bottom: 1px solid #eee;">
            <p style="margin: 0; font-weight: bold;">${index + 1}. ${problem.question}</p>
            <p style="margin: 10px 0 0 0; color: #666;">Answer: ${problem.answer}</p>
          </div>
        `).join("")}
      </div>
    </div>
  `;
  
  const printWindow = window.open("", "_blank");
  if (printWindow) {
    printWindow.document.write(`
      <html>
        <head>
          <title>Math Worksheet - Grade ${gradeLevel}</title>
          <style>
            body { font-family: Arial, sans-serif; }
            @media print {
              body { padding: 20px; }
            }
          </style>
        </head>
        <body>
          ${printableContent.innerHTML}
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.print();
  }
}
