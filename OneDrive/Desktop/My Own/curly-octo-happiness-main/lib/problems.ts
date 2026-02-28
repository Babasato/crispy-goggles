interface Problem {
  id: number;
  question: string;
  answer: number;
  type: string;
}

export function generateProblems(count: number, grade: number, types: string[]): Problem[] {
  const problems: Problem[] = [];
  
  for (let i = 0; i < count; i++) {
    const type = types[Math.floor(Math.random() * types.length)];
    const problem = generateProblemByType(type, grade, i + 1);
    problems.push(problem);
  }
  
  return problems;
}

function generateProblemByType(type: string, grade: number, id: number): Problem {
  let num1: number, num2: number, answer: number, question: string;
  
  // Adjust number ranges based on grade level
  const maxNum = grade <= 2 ? 10 : grade <= 4 ? 100 : 1000;
  
  switch (type) {
    case 'addition':
      num1 = Math.floor(Math.random() * maxNum) + 1;
      num2 = Math.floor(Math.random() * maxNum) + 1;
      answer = num1 + num2;
      question = `${num1} + ${num2} = `;
      break;
      
    case 'subtraction':
      num1 = Math.floor(Math.random() * maxNum) + 1;
      num2 = Math.floor(Math.random() * num1) + 1; // Ensure positive result
      answer = num1 - num2;
      question = `${num1} - ${num2} = `;
      break;
      
    case 'multiplication':
      num1 = Math.floor(Math.random() * (grade <= 3 ? 10 : 12)) + 1;
      num2 = Math.floor(Math.random() * (grade <= 3 ? 10 : 12)) + 1;
      answer = num1 * num2;
      question = `${num1} × ${num2} = `;
      break;
      
    case 'division':
      answer = Math.floor(Math.random() * (grade <= 3 ? 10 : 12)) + 1;
      num2 = Math.floor(Math.random() * (grade <= 3 ? 10 : 12)) + 1;
      num1 = answer * num2; // Ensure whole number division
      question = `${num1} ÷ ${num2} = `;
      break;
      
    default:
      // Default to addition
      num1 = Math.floor(Math.random() * maxNum) + 1;
      num2 = Math.floor(Math.random() * maxNum) + 1;
      answer = num1 + num2;
      question = `${num1} + ${num2} = `;
  }
  
  return {
    id,
    question,
    answer,
    type
  };
}