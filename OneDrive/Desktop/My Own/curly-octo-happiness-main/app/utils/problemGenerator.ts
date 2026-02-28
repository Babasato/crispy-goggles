export interface Problem {
  id: number;
  question: string;
  answer: string;
  isWordProblem?: boolean;
  context?: string;
}

export interface ProblemSettings {
  operation: 'addition' | 'subtraction' | 'multiplication' | 'division';
  difficulty: 'easy' | 'medium' | 'hard';
  count: number;
  includeWordProblems: boolean;
  wordProblemPercentage: number;
}

// Word problem templates with realistic scenarios
const WORD_PROBLEM_TEMPLATES = {
  addition: {
    shopping: [
      {
        template: "Sarah bought apples for ${a} and juice for ${b}. How much did she spend in total?",
        operation: (a: number, b: number) => a + b
      },
      {
        template: "Tom spent ${a} on books and ${b} on pencils. What was his total spending?",
        operation: (a: number, b: number) => a + b
      },
      {
        template: "Maria bought a toy for ${a} and a game for ${b}. How much did she pay altogether?",
        operation: (a: number, b: number) => a + b
      }
    ],
    nature: [
      {
        template: "There are {a} birds in the tree and {b} birds in the bush. How many birds are there in total?",
        operation: (a: number, b: number) => a + b
      },
      {
        template: "A garden has {a} roses and {b} daisies. How many flowers are in the garden?",
        operation: (a: number, b: number) => a + b
      },
      {
        template: "The park has {a} oak trees and {b} maple trees. How many trees are there altogether?",
        operation: (a: number, b: number) => a + b
      }
    ],
    school: [
      {
        template: "Class A has {a} students and Class B has {b} students. How many students are there in both classes?",
        operation: (a: number, b: number) => a + b
      },
      {
        template: "The library has {a} fiction books and {b} non-fiction books. How many books are there in total?",
        operation: (a: number, b: number) => a + b
      }
    ]
  },
  subtraction: {
    shopping: [
      {
        template: "Jake had ${a}. He spent ${b} on lunch. How much money does he have left?",
        operation: (a: number, b: number) => a - b
      },
      {
        template: "Emma had ${a} in her wallet. She bought a book for ${b}. How much money remains?",
        operation: (a: number, b: number) => a - b
      }
    ],
    food: [
      {
        template: "Mom baked {a} cookies. The family ate {b} cookies. How many cookies are left?",
        operation: (a: number, b: number) => a - b
      },
      {
        template: "There were {a} slices of pizza. {b} slices were eaten. How many slices remain?",
        operation: (a: number, b: number) => a - b
      }
    ],
    nature: [
      {
        template: "There were {a} birds on the fence. {b} birds flew away. How many birds are still on the fence?",
        operation: (a: number, b: number) => a - b
      }
    ]
  },
  multiplication: {
    food: [
      {
        template: "Each box contains {a} apples. If there are {b} boxes, how many apples are there in total?",
        operation: (a: number, b: number) => a * b
      },
      {
        template: "A recipe calls for {a} eggs per batch. How many eggs are needed for {b} batches?",
        operation: (a: number, b: number) => a * b
      }
    ],
    school: [
      {
        template: "Each classroom has {a} desks. If there are {b} classrooms, how many desks are there in total?",
        operation: (a: number, b: number) => a * b
      },
      {
        template: "Each student needs {a} pencils. How many pencils are needed for {b} students?",
        operation: (a: number, b: number) => a * b
      }
    ],
    toys: [
      {
        template: "Each toy car costs ${a}. How much do {b} toy cars cost?",
        operation: (a: number, b: number) => a * b
      }
    ]
  },
  division: {
    sharing: [
      {
        template: "There are {a} candies to be shared equally among {b} children. How many candies does each child get?",
        operation: (a: number, b: number) => a / b
      },
      {
        template: "{a} stickers need to be divided equally into {b} groups. How many stickers are in each group?",
        operation: (a: number, b: number) => a / b
      }
    ],
    money: [
      {
        template: "Sarah earned ${a} in {b} days. How much did she earn per day?",
        operation: (a: number, b: number) => a / b
      }
    ]
  }
};

export const generateProblems = (settings: ProblemSettings): Problem[] => {
  const problems: Problem[] = [];
  const wordProblemsCount = Math.floor(settings.count * (settings.wordProblemPercentage / 100));
  const basicProblemsCount = settings.count - wordProblemsCount;

  // Generate basic math problems
  for (let i = 0; i < basicProblemsCount; i++) {
    const problem = generateBasicProblem(settings.operation, settings.difficulty, i + 1);
    problems.push(problem);
  }

  // Generate word problems
  if (settings.includeWordProblems) {
    for (let i = 0; i < wordProblemsCount; i++) {
      const problem = generateWordProblem(
        settings.operation,
        settings.difficulty,
        basicProblemsCount + i + 1
      );
      problems.push(problem);
    }
  }

  return problems;
};

const generateBasicProblem = (
  operation: string,
  difficulty: string,
  id: number
): Problem => {
  const ranges = getDifficultyRanges(difficulty);
  let a: number, b: number, answer: number, question: string;

  switch (operation) {
    case 'addition':
      a = getRandomNumber(ranges.min, ranges.max);
      b = getRandomNumber(ranges.min, ranges.max);
      answer = a + b;
      question = `${a} + ${b} = ___`;
      break;
    
    case 'subtraction':
      // Ensure positive results
      a = getRandomNumber(ranges.min + ranges.min, ranges.max);
      b = getRandomNumber(ranges.min, a);
      answer = a - b;
      question = `${a} - ${b} = ___`;
      break;
    
    case 'multiplication':
      a = getRandomNumber(ranges.min, ranges.max);
      b = getRandomNumber(ranges.min, ranges.max);
      answer = a * b;
      question = `${a} × ${b} = ___`;
      break;
    
    case 'division':
      // Ensure clean division
      b = getRandomNumber(ranges.min, ranges.max);
      const quotient = getRandomNumber(ranges.min, ranges.max);
      a = b * quotient;
      answer = quotient;
      question = `${a} ÷ ${b} = ___`;
      break;
    
    default:
      throw new Error(`Unknown operation: ${operation}`);
  }

  return {
    id,
    question,
    answer: answer.toString(),
    isWordProblem: false
  };
};

const generateWordProblem = (
  operation: string,
  difficulty: string,
  id: number
): Problem => {
  const templates = WORD_PROBLEM_TEMPLATES[operation as keyof typeof WORD_PROBLEM_TEMPLATES];
  if (!templates) {
    throw new Error(`No word problem templates for operation: ${operation}`);
  }

  // Get all available contexts for this operation
  const contexts = Object.keys(templates);
  const selectedContext = contexts[Math.floor(Math.random() * contexts.length)];
  const contextTemplates = templates[selectedContext as keyof typeof templates] as any[];
  
  // Select random template from the context
  const template = contextTemplates[Math.floor(Math.random() * contextTemplates.length)];
  
  const ranges = getDifficultyRanges(difficulty);
  let a: number, b: number, answer: number;

  // Generate appropriate numbers based on operation
  switch (operation) {
    case 'addition':
      a = getRandomNumber(ranges.min, ranges.max);
      b = getRandomNumber(ranges.min, ranges.max);
      answer = template.operation(a, b);
      break;
    
    case 'subtraction':
      // Ensure positive results
      a = getRandomNumber(ranges.min + ranges.min, ranges.max);
      b = getRandomNumber(ranges.min, a);
      answer = template.operation(a, b);
      break;
    
    case 'multiplication':
      // Keep numbers reasonable for word problems
      const multRange = { min: Math.max(1, ranges.min), max: Math.min(12, ranges.max) };
      a = getRandomNumber(multRange.min, multRange.max);
      b = getRandomNumber(multRange.min, multRange.max);
      answer = template.operation(a, b);
      break;
    
    case 'division':
      // Ensure clean division for word problems
      b = getRandomNumber(Math.max(2, ranges.min), Math.min(10, ranges.max));
      const quotient = getRandomNumber(ranges.min, ranges.max);
      a = b * quotient;
      answer = template.operation(a, b);
      break;
    
    default:
      throw new Error(`Unknown operation: ${operation}`);
  }

  // Replace placeholders in template
  let question = template.template
    .replace(/\{a\}/g, a.toString())
    .replace(/\{b\}/g, b.toString())
    .replace(/\$\{a\}/g, `$${a}`)
    .replace(/\$\{b\}/g, `$${b}`);

  return {
    id,
    question,
    answer: answer.toString(),
    isWordProblem: true,
    context: selectedContext
  };
};

const getDifficultyRanges = (difficulty: string) => {
  switch (difficulty) {
    case 'easy':
      return { min: 1, max: 10 };
    case 'medium':
      return { min: 10, max: 50 };
    case 'hard':
      return { min: 50, max: 100 };
    default:
      return { min: 1, max: 10 };
  }
};

const getRandomNumber = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};