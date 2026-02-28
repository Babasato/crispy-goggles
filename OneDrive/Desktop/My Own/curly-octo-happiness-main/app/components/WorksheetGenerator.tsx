// app/components/WorksheetGenerator.tsx - COMPLETE FIXED VERSION
'use client';

import React, { useState, useEffect, useRef } from 'react';
import DownloadSection from './DownloadSection';

interface Problem {
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

interface WorksheetGeneratorProps {
  onOpenLeadMagnet: () => void;
  downloadsRemaining: number;
  incrementDownloadCount: () => void;
  hasReceivedSignupBonus: boolean;
}

// Grade configurations
const gradeConfigurations = {
  kindergarten: {
    availableTypes: ['Addition', 'Subtraction', 'Counting'],
    defaultTypes: ['Addition', 'Subtraction'],
    difficultyLevels: {
      easy: { range: '1-4', description: 'Numbers 1-4' },
      medium: { range: '1-5', description: 'Numbers 1-5' },
      hard: { range: '1-8', description: 'Numbers 1-8' }
    },
    description: 'Basic counting, addition, and subtraction within 8'
  },
  first: {
    availableTypes: ['Addition', 'Subtraction', 'Word Problems'],
    defaultTypes: ['Addition', 'Subtraction'],
    difficultyLevels: {
      easy: { range: '1-10', description: 'Single-digit operations' },
      medium: { range: '1-15', description: 'Within 15' },
      hard: { range: '1-20', description: 'Within 20' }
    },
    description: 'Addition and subtraction within 20'
  },
  second: {
    availableTypes: ['Addition', 'Subtraction', 'Multiplication', 'Word Problems'],
    defaultTypes: ['Addition', 'Subtraction', 'Word Problems'],
    difficultyLevels: {
      easy: { range: '1-20', description: 'Within 20' },
      medium: { range: '1-50', description: 'Within 50' },
      hard: { range: '1-100', description: 'Within 100' }
    },
    description: 'Two-digit operations, basic multiplication'
  },
  third: {
    availableTypes: ['Addition', 'Subtraction', 'Multiplication', 'Division', 'Word Problems'],
    defaultTypes: ['Multiplication', 'Division', 'Word Problems'],
    difficultyLevels: {
      easy: { range: '1-5', description: 'Basic facts 1-5' },
      medium: { range: '1-10', description: 'Facts 1-10' },
      hard: { range: '1-12', description: 'Full times tables' }
    },
    description: 'Multiplication, division, and multi-step problems'
  },
  fourth: {
    availableTypes: ['Multiplication', 'Division', 'Word Problems', 'Fractions'],
    defaultTypes: ['Multiplication', 'Division', 'Word Problems'],
    difficultyLevels: {
      easy: { range: '2-digit', description: 'Two-digit numbers' },
      medium: { range: '3-digit', description: 'Three-digit numbers' },
      hard: { range: '4-digit', description: 'Multi-digit operations' }
    },
    description: 'Multi-digit operations and fractions'
  },
  fifth: {
    availableTypes: ['Multiplication', 'Division', 'Word Problems', 'Fractions', 'Decimals'],
    defaultTypes: ['Multiplication', 'Division', 'Word Problems'],
    difficultyLevels: {
      easy: { range: 'Basic', description: 'Simple fractions/decimals' },
      medium: { range: 'Intermediate', description: 'Mixed operations' },
      hard: { range: 'Advanced', description: 'Complex problems' }
    },
    description: 'Advanced operations with fractions and decimals'
  },
  sixth: {
    availableTypes: ['Multiplication', 'Division', 'Word Problems', 'Percent', 'Ratios'],
    defaultTypes: ['Multiplication', 'Division', 'Word Problems'],
    difficultyLevels: {
      easy: { range: 'Intro', description: 'Basic ratios/percent' },
      medium: { range: 'Standard', description: 'Standard problems' },
      hard: { range: 'Advanced', description: 'Complex applications' }
    },
    description: 'Ratios, percentages, and pre-algebra'
  }
};

// Word problem templates
const wordProblemTemplates = {
  addition: [
    "{person} has {num1} {item}. {person} gets {num2} more. How many {item} are there now?",
    "There are {num1} {item} in the basket and {num2} on the table. How many {item} are there altogether?",
    "{person} found {num1} {item} in the morning and {num2} more in the afternoon. How many {item} did {person} find in total?",
    "In the park, there are {num1} red {item} and {num2} blue {item}. How many {item} are there in all?",
    "{person} baked {num1} {item} yesterday and {num2} {item} today. How many {item} did {person} bake?",
  ],
  subtraction: [
    "{person} had {num1} {item} and gave {num2} to a friend. How many {item} does {person} have left?",
    "There were {num1} {item} on the shelf. {num2} were sold. How many {item} remain?",
    "{person} collected {num1} {item}. {num2} rolled away. How many {item} are left?",
    "The basket had {num1} {item}. We ate {num2} of them. How many {item} are still in the basket?",
    "{person} saw {num1} {item} at first. Then {num2} {item} flew away. How many {item} stayed?",
  ],
  multiplication: [
    "There are {num1} boxes. Each box has {num2} {item}. How many {item} are there total?",
    "{person} has {num1} bags. Each bag has {num2} {item}. How many {item} does {person} have?",
    "In {num1} groups, there are {num2} {item} in each group. How many {item} are there altogether?",
    "{person} bought {num1} packs of {item}. Each pack has {num2} {item}. How many {item} in total?",
    "The teacher gave {num1} students {num2} {item} each. How many {item} did the teacher give out?",
  ]
};

const items = [
  'apples', 'cookies', 'pencils', 'books', 'toys', 'crayons', 
  'markers', 'stickers', 'buttons', 'marbles', 'candies', 'flowers',
  'shells', 'rocks', 'cards', 'coins', 'erasers', 'balloons'
];

const people = [
  'Sarah', 'John', 'Emma', 'Michael', 'Lisa', 'David',
  'Anna', 'James', 'Sophia', 'Daniel', 'Olivia', 'Alex'
];

// COMPREHENSIVE NUMBER RANGES - Grade and operation specific
const getNumberRanges = (grade: string, difficulty: string, operation: string) => {
  const ranges: Record<string, Record<string, Record<string, any>>> = {
    kindergarten: {
      addition: {
        easy: { min: 1, max: 4, maxSum: 5 },
        medium: { min: 1, max: 5, maxSum: 8 },
        hard: { min: 2, max: 5, maxSum: 10 }
      },
      subtraction: {
        easy: { min: 2, max: 5, maxResult: 5 },
        medium: { min: 3, max: 8, maxResult: 8 },
        hard: { min: 4, max: 10, maxResult: 10 }
      },
      counting: {
        easy: { min: 1, max: 5 },
        medium: { min: 1, max: 8 },
        hard: { min: 1, max: 9 }
      }
    },
    first: {
      addition: {
        easy: { min: 1, max: 9, maxSum: 10 },
        medium: { min: 3, max: 9, maxSum: 15 },
        hard: { min: 5, max: 15, maxSum: 20 }
      },
      subtraction: {
        easy: { min: 5, max: 10 },
        medium: { min: 8, max: 15 },
        hard: { min: 10, max: 20 }
      }
    },
    second: {
      addition: {
        easy: { min: 5, max: 20 },
        medium: { min: 10, max: 50 },
        hard: { min: 25, max: 99 }
      },
      subtraction: {
        easy: { min: 10, max: 25 },
        medium: { min: 20, max: 50 },
        hard: { min: 30, max: 99 }
      },
      multiplication: {
        easy: { min: 1, max: 5 },
        medium: { min: 2, max: 8 },
        hard: { min: 2, max: 10 }
      }
    },
    third: {
      addition: {
        easy: { min: 10, max: 50 },
        medium: { min: 25, max: 100 },
        hard: { min: 50, max: 500 }
      },
      subtraction: {
        easy: { min: 10, max: 50 },
        medium: { min: 25, max: 100 },
        hard: { min: 50, max: 500 }
      },
      multiplication: {
        easy: { min: 1, max: 5 },
        medium: { min: 2, max: 10 },
        hard: { min: 2, max: 12 }
      },
      division: {
        easy: { divisor: { min: 2, max: 5 }, quotient: { min: 1, max: 10 } },
        medium: { divisor: { min: 2, max: 10 }, quotient: { min: 1, max: 10 } },
        hard: { divisor: { min: 2, max: 12 }, quotient: { min: 1, max: 12 } }
      }
    },
    fourth: {
      multiplication: {
        easy: { min: 10, max: 50 },
        medium: { min: 10, max: 100 },
        hard: { min: 100, max: 999 }
      },
      division: {
        easy: { divisor: { min: 2, max: 10 }, quotient: { min: 2, max: 20 } },
        medium: { divisor: { min: 2, max: 12 }, quotient: { min: 10, max: 50 } },
        hard: { divisor: { min: 2, max: 12 }, quotient: { min: 10, max: 100 } }
      },
      fractions: {
        easy: { maxDenominator: 4 },
        medium: { maxDenominator: 8 },
        hard: { maxDenominator: 12 }
      }
    },
    fifth: {
      multiplication: {
        easy: { min: 10, max: 100 },
        medium: { min: 50, max: 500 },
        hard: { min: 100, max: 999 }
      },
      division: {
        easy: { divisor: { min: 2, max: 12 }, quotient: { min: 10, max: 50 } },
        medium: { divisor: { min: 2, max: 12 }, quotient: { min: 10, max: 100 } },
        hard: { divisor: { min: 5, max: 25 }, quotient: { min: 10, max: 100 } }
      },
      fractions: {
        easy: { maxDenominator: 8 },
        medium: { maxDenominator: 12 },
        hard: { maxDenominator: 16 }
      },
      decimals: {
        easy: { decimalPlaces: 1, min: 0.1, max: 10 },
        medium: { decimalPlaces: 2, min: 0.1, max: 100 },
        hard: { decimalPlaces: 2, min: 1, max: 1000 }
      }
    },
    sixth: {
      multiplication: {
        easy: { min: 10, max: 100 },
        medium: { min: 50, max: 500 },
        hard: { min: 100, max: 9999 }
      },
      division: {
        easy: { divisor: { min: 5, max: 20 }, quotient: { min: 5, max: 50 } },
        medium: { divisor: { min: 10, max: 50 }, quotient: { min: 10, max: 100 } },
        hard: { divisor: { min: 10, max: 100 }, quotient: { min: 10, max: 500 } }
      },
      percent: {
        easy: { min: 10, max: 100, percentMin: 10, percentMax: 50 },
        medium: { min: 50, max: 500, percentMin: 10, percentMax: 100 },
        hard: { min: 100, max: 1000, percentMin: 1, percentMax: 150 }
      },
      ratios: {
        easy: { min: 1, max: 10 },
        medium: { min: 2, max: 20 },
        hard: { min: 5, max: 50 }
      }
    }
  };

  return ranges[grade]?.[operation.toLowerCase()]?.[difficulty] || { min: 1, max: 10 };
};

// Helper functions
const gcd = (a: number, b: number): number => {
  return b === 0 ? a : gcd(b, a % b);
};

const generateFractionProblem = (grade: string, difficulty: string): { question: string; answer: string } => {
  const range = getNumberRanges(grade, difficulty, 'fractions');
  const maxDenom = range.maxDenominator;
  
  const operations = ['+', '-'];
  const operation = operations[Math.floor(Math.random() * operations.length)];
  
  const useSameDenominator = Math.random() < 0.5 || difficulty === 'easy';
  
  let denom1, denom2, numer1, numer2;
  
  if (useSameDenominator) {
    denom1 = denom2 = Math.floor(Math.random() * (maxDenom - 1)) + 2;
    numer1 = Math.floor(Math.random() * (denom1 - 1)) + 1;
    numer2 = Math.floor(Math.random() * (denom2 - 1)) + 1;
  } else {
    denom1 = Math.floor(Math.random() * (maxDenom - 1)) + 2;
    denom2 = Math.floor(Math.random() * (maxDenom - 1)) + 2;
    numer1 = Math.floor(Math.random() * (denom1 - 1)) + 1;
    numer2 = Math.floor(Math.random() * (denom2 - 1)) + 1;
  }
  
  const question = `${numer1}/${denom1} ${operation} ${numer2}/${denom2} = `;
  
  let answerNumer, answerDenom;
  if (useSameDenominator) {
    answerDenom = denom1;
    answerNumer = operation === '+' ? numer1 + numer2 : numer1 - numer2;
  } else {
    answerDenom = denom1 * denom2;
    if (operation === '+') {
      answerNumer = numer1 * denom2 + numer2 * denom1;
    } else {
      answerNumer = numer1 * denom2 - numer2 * denom1;
    }
  }
  
  if (answerNumer !== 0) {
    const divisor = gcd(Math.abs(answerNumer), answerDenom);
    answerNumer = answerNumer / divisor;
    answerDenom = answerDenom / divisor;
  }
  
  const answer = answerNumer === 0 ? '0' : `${answerNumer}/${answerDenom}`;
  
  return { question, answer };
};

const generateDecimalProblem = (grade: string, difficulty: string): { question: string; answer: string } => {
  const range = getNumberRanges(grade, difficulty, 'decimals');
  const operations = ['+', '-', '×'];
  const operation = operations[Math.floor(Math.random() * operations.length)];
  
  const num1 = parseFloat((Math.random() * (range.max - range.min) + range.min).toFixed(range.decimalPlaces));
  const num2 = parseFloat((Math.random() * (range.max - range.min) + range.min).toFixed(range.decimalPlaces));
  
  const question = `${num1} ${operation} ${num2} = `;
  
  let result;
  if (operation === '+') {
    result = num1 + num2;
  } else if (operation === '-') {
    result = num1 - num2;
  } else {
    result = num1 * num2;
  }
  
  const answer = result.toFixed(range.decimalPlaces);
  
  return { question, answer };
};

const generatePercentProblem = (difficulty: string): { question: string; answer: string } => {
  const range = getNumberRanges('sixth', difficulty, 'percent');
  
  const base = Math.floor(Math.random() * (range.max - range.min + 1)) + range.min;
  const percent = Math.floor(Math.random() * (range.percentMax - range.percentMin + 1)) + range.percentMin;
  
  const problemTypes = ['find_percent', 'find_whole', 'find_rate'];
  const problemType = problemTypes[Math.floor(Math.random() * problemTypes.length)];
  
  let question, answer;
  
  if (problemType === 'find_percent') {
    question = `What is ${percent}% of ${base}?`;
    answer = String(Math.round((base * percent / 100) * 100) / 100);
  } else if (problemType === 'find_whole') {
    const part = Math.round(base * percent / 100);
    question = `${part} is ${percent}% of what number?`;
    answer = String(base);
  } else {
    const part = Math.round(base * percent / 100);
    question = `${part} is what percent of ${base}?`;
    answer = String(percent) + '%';
  }
  
  return { question, answer };
};

const generateRatioProblem = (difficulty: string): { question: string; answer: string } => {
  const range = getNumberRanges('sixth', difficulty, 'ratios');
  
  const num1 = Math.floor(Math.random() * (range.max - range.min + 1)) + range.min;
  const num2 = Math.floor(Math.random() * (range.max - range.min + 1)) + range.min;
  const multiplier = Math.floor(Math.random() * 5) + 2;
  
  const problemTypes = ['equivalent', 'simplify', 'solve_proportion'];
  const problemType = problemTypes[Math.floor(Math.random() * problemTypes.length)];
  
  let question, answer;
  
  if (problemType === 'equivalent') {
    question = `If the ratio is ${num1}:${num2}, what is an equivalent ratio when multiplied by ${multiplier}?`;
    answer = `${num1 * multiplier}:${num2 * multiplier}`;
  } else if (problemType === 'simplify') {
    const base1 = Math.floor(Math.random() * range.max) + 1;
    const base2 = Math.floor(Math.random() * range.max) + 1;
    const factor = Math.floor(Math.random() * 4) + 2;
    const expandedNum1 = base1 * factor;
    const expandedNum2 = base2 * factor;
    question = `Simplify the ratio ${expandedNum1}:${expandedNum2}`;
    const divisor = gcd(expandedNum1, expandedNum2);
    answer = `${expandedNum1 / divisor}:${expandedNum2 / divisor}`;
  } else {
    const a = Math.floor(Math.random() * range.max) + 1;
    const b = Math.floor(Math.random() * range.max) + 1;
    const c = Math.floor(Math.random() * range.max) + 1;
    const d = Math.round((b * c) / a);
    question = `Solve for x: ${a}/${b} = ${c}/x`;
    answer = String(d);
  }
  
  return { question, answer };
};

const generateWordProblem = (grade: string, operation: string, difficulty: string): { question: string; answer: string } => {
  const item = items[Math.floor(Math.random() * items.length)];
  const person = people[Math.floor(Math.random() * people.length)];
  
  const range = getNumberRanges(grade, difficulty, operation);
  let num1, num2, question, answer;

  switch (operation) {
    case 'addition':
      num1 = Math.floor(Math.random() * (range.max - range.min + 1)) + range.min;
      num2 = Math.floor(Math.random() * (range.max - range.min + 1)) + range.min;
      
      if (range.maxSum && (num1 + num2) > range.maxSum) {
        num2 = range.maxSum - num1;
        if (num2 < range.min) {
          num1 = Math.floor(range.maxSum / 2);
          num2 = range.maxSum - num1;
        }
      }
      
      const addTemplate = wordProblemTemplates.addition[Math.floor(Math.random() * wordProblemTemplates.addition.length)];
      question = addTemplate
        .replace(/{person}/g, person)
        .replace(/{item}/g, item)
        .replace(/{num1}/g, num1.toString())
        .replace(/{num2}/g, num2.toString());
      answer = String(num1 + num2);
      break;

    case 'subtraction':
      num1 = Math.floor(Math.random() * (range.max - range.min + 1)) + range.min;
      num2 = Math.floor(Math.random() * (num1 - range.min + 1)) + range.min;
      if (num2 >= num1) num2 = num1 - 1;
      if (num2 < 1) num2 = 1;
      
      const subTemplate = wordProblemTemplates.subtraction[Math.floor(Math.random() * wordProblemTemplates.subtraction.length)];
      question = subTemplate
        .replace(/{person}/g, person)
        .replace(/{item}/g, item)
        .replace(/{num1}/g, num1.toString())
        .replace(/{num2}/g, num2.toString());
      answer = String(num1 - num2);
      break;

    case 'multiplication':
      num1 = Math.floor(Math.random() * (range.max - range.min + 1)) + range.min;
      num2 = Math.floor(Math.random() * (range.max - range.min + 1)) + range.min;
      const multTemplate = wordProblemTemplates.multiplication[Math.floor(Math.random() * wordProblemTemplates.multiplication.length)];
      question = multTemplate
        .replace(/{person}/g, person)
        .replace(/{item}/g, item)
        .replace(/{num1}/g, num1.toString())
        .replace(/{num2}/g, num2.toString());
      answer = String(num1 * num2);
      break;

    case 'division':
      const divisor = Math.floor(Math.random() * (range.divisor.max - range.divisor.min + 1)) + range.divisor.min;
      const quotient = Math.floor(Math.random() * (range.quotient.max - range.quotient.min + 1)) + range.quotient.min;
      const total = divisor * quotient;
      
      question = `${person} has ${total} ${item} to share equally among ${divisor} friends. How many ${item} does each friend get?`;
      answer = String(quotient);
      break;

    default:
      num1 = Math.floor(Math.random() * 5) + 1;
      num2 = Math.floor(Math.random() * 5) + 1;
      question = `${person} has ${num1} ${item}. ${person} gets ${num2} more ${item}. How many ${item} does ${person} have now?`;
      answer = String(num1 + num2);
  }

  return { question, answer };
};

// COMPLETE PROBLEM GENERATION - All operations properly implemented
const generateMathProblem = (
  grade: string, 
  index: number, 
  problemTypes: string[], 
  difficulty: string, 
  usedCombinations: Set<string>
): Problem => {
  const shouldBeWordProblem = Math.random() < 0.3 && problemTypes.includes('Word Problems');
  
  if (shouldBeWordProblem) {
    const wordOperations = [];
    if (problemTypes.includes('Addition')) wordOperations.push('addition');
    if (problemTypes.includes('Subtraction')) wordOperations.push('subtraction');
    if (problemTypes.includes('Multiplication') && grade !== 'kindergarten' && grade !== 'first') {
      wordOperations.push('multiplication');
    }
    if (problemTypes.includes('Division') && (grade === 'third' || grade === 'fourth' || grade === 'fifth' || grade === 'sixth')) {
      wordOperations.push('division');
    }
    
    const operation = wordOperations[Math.floor(Math.random() * wordOperations.length)] || 'addition';
    const { question, answer } = generateWordProblem(grade, operation, difficulty);
    return { 
      id: index + 1, 
      question, 
      answer, 
      isWordProblem: true,
      hasVisual: false
    };
  }

  const availableOperations: string[] = [];
  if (problemTypes.includes('Addition')) availableOperations.push('addition');
  if (problemTypes.includes('Subtraction')) availableOperations.push('subtraction');
  if (problemTypes.includes('Multiplication') && grade !== 'kindergarten' && grade !== 'first') {
    availableOperations.push('multiplication');
  }
  if (problemTypes.includes('Division') && (grade === 'third' || grade === 'fourth' || grade === 'fifth' || grade === 'sixth')) {
    availableOperations.push('division');
  }
  if (problemTypes.includes('Fractions') && (grade === 'fourth' || grade === 'fifth')) {
    availableOperations.push('fractions');
  }
  if (problemTypes.includes('Decimals') && grade === 'fifth') {
    availableOperations.push('decimals');
  }
  if (problemTypes.includes('Percent') && grade === 'sixth') {
    availableOperations.push('percent');
  }
  if (problemTypes.includes('Ratios') && grade === 'sixth') {
    availableOperations.push('ratios');
  }
  if (problemTypes.includes('Counting') && grade === 'kindergarten') {
    availableOperations.push('counting');
  }

  const operation = availableOperations.length > 0 
    ? availableOperations[Math.floor(Math.random() * availableOperations.length)]
    : 'addition';

  let question = "";
  let answer = "";
  let attempts = 0;
  const maxAttempts = 50;
  let num1 = 0, num2 = 0;

  do {
    const range = getNumberRanges(grade, difficulty, operation);
    
    if (operation === 'addition') {
      num1 = Math.floor(Math.random() * (range.max - range.min + 1)) + range.min;
      num2 = Math.floor(Math.random() * (range.max - range.min + 1)) + range.min;
      
      if (range.maxSum && (num1 + num2) > range.maxSum) {
        num2 = range.maxSum - num1;
        if (num2 < range.min) {
          num1 = Math.floor(range.maxSum / 2);
          num2 = range.maxSum - num1;
        }
      }
      
      question = `${num1} + ${num2} = `;
      answer = String(num1 + num2);
      
    } else if (operation === 'subtraction') {
      num1 = Math.floor(Math.random() * (range.max - range.min + 1)) + range.min;
      num2 = Math.floor(Math.random() * (num1 - range.min + 1)) + range.min;
      if (num2 >= num1) num2 = num1 - 1;
      if (num2 < 1) num2 = 1;
      
      question = `${num1} - ${num2} = `;
      answer = String(num1 - num2);
      
    } else if (operation === 'multiplication') {
      num1 = Math.floor(Math.random() * (range.max - range.min + 1)) + range.min;
      num2 = Math.floor(Math.random() * (range.max - range.min + 1)) + range.min;
      
      question = `${num1} × ${num2} = `;
      answer = String(num1 * num2);
      
    } else if (operation === 'division') {
      const divisor = Math.floor(Math.random() * (range.divisor.max - range.divisor.min + 1)) + range.divisor.min;
      const quotient = Math.floor(Math.random() * (range.quotient.max - range.quotient.min + 1)) + range.quotient.min;
      const dividend = divisor * quotient;
      
      question = `${dividend} ÷ ${divisor} = `;
      answer = String(quotient);
      num1 = dividend;
      num2 = divisor;
      
    } else if (operation === 'fractions') {
      const result = generateFractionProblem(grade, difficulty);
      return { 
        id: index + 1, 
        question: result.question, 
        answer: result.answer, 
        isWordProblem: false,
        hasVisual: false
      };
      
    } else if (operation === 'decimals') {
      const result = generateDecimalProblem(grade, difficulty);
      return { 
        id: index + 1, 
        question: result.question, 
        answer: result.answer, 
        isWordProblem: false,
        hasVisual: false
      };
      
    } else if (operation === 'percent') {
      const result = generatePercentProblem(difficulty);
      return { 
        id: index + 1, 
        question: result.question, 
        answer: result.answer, 
        isWordProblem: false,
        hasVisual: false
      };
      
    } else if (operation === 'ratios') {
      const result = generateRatioProblem(difficulty);
      return { 
        id: index + 1, 
        question: result.question, 
        answer: result.answer, 
        isWordProblem: false,
        hasVisual: false
      };
      
    } else if (operation === 'counting') {
      num1 = Math.floor(Math.random() * (range.max - range.min + 1)) + range.min;
      question = `Count: How many objects? (${num1})`;
      answer = String(num1);
    }

    const combinationKey = `${num1}-${operation}-${num2}`;
    if (!usedCombinations.has(combinationKey)) {
      usedCombinations.add(combinationKey);
      break;
    }
    attempts++;
  } while (attempts < maxAttempts);

  // FIXED: Visual aids capped at 9 for PDF generation
  const shouldHaveVisual = (grade === 'kindergarten' || grade === 'first') && 
                           (operation === 'addition' || operation === 'subtraction' || operation === 'counting') && 
                           num1 <= 9 && num2 <= 9 && (num1 + num2) <= 9;

  let visualData = undefined;
  if (shouldHaveVisual && (operation === 'addition' || operation === 'subtraction')) {
    visualData = {
      num1,
      num2,
      operation: operation === 'addition' ? '+' : '-',
      shape: '●',
      color: '#000000'
    };
  }

  return { 
    id: index + 1, 
    question, 
    answer, 
    isWordProblem: false,
    hasVisual: shouldHaveVisual,
    visualType: 'shapes',
    visualData
  };
};

const useProblemGeneration = (grade: string, count: number, problemTypes: string[], difficulty: string) => {
  const [problems, setProblems] = useState<Problem[]>([]);
  const [isClient, setIsClient] = useState(false);
  const usedCombinationsRef = React.useRef<Set<string>>(new Set());

  useEffect(() => {
    setIsClient(true);
    const generateProblems = (c: number, l: string, types: string[], diff: string): Problem[] => {
      usedCombinationsRef.current.clear();
      return Array.from({ length: c }).map((_, i) => 
        generateMathProblem(l, i, types, diff, usedCombinationsRef.current)
      );
    };
    const generatedProblems = generateProblems(count, grade, problemTypes, difficulty);
    setProblems(generatedProblems);
  }, [count, grade, problemTypes, difficulty]);

  const title = `${grade.charAt(0).toUpperCase() + grade.slice(1)} Grade Math Worksheet - ${difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}`;

  return { problems, title, isClient };
};

export default function WorksheetGenerator({ 
  onOpenLeadMagnet, 
  downloadsRemaining, 
  incrementDownloadCount,
  hasReceivedSignupBonus 
}: WorksheetGeneratorProps) {
  const [problemCount, setProblemCount] = useState(5);
  const [gradeLevel, setGradeLevel] = useState('first');
  const [difficulty, setDifficulty] = useState('easy');
  const [isGenerating, setIsGenerating] = useState(false);
  const [showAnswers, setShowAnswers] = useState(false);
  const [includeVisuals, setIncludeVisuals] = useState(true);
  
  const worksheetPreviewRef = useRef<HTMLDivElement>(null);
  const downloadSectionRef = useRef<HTMLDivElement>(null);
  
  const gradeConfig = gradeConfigurations[gradeLevel as keyof typeof gradeConfigurations];
  const [problemTypes, setProblemTypes] = useState<string[]>(gradeConfig.defaultTypes);
  
  const { problems, title, isClient } = useProblemGeneration(gradeLevel, problemCount, problemTypes, difficulty);
  
  useEffect(() => {
    setProblemTypes(gradeConfig.defaultTypes);
  }, [gradeLevel]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      setTimeout(() => {
        worksheetPreviewRef.current?.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }, 100);
    }, 500);
  };

  const handleProblemTypeChange = (type: string) => {
    setProblemTypes(prev => 
      prev.includes(type) 
        ? prev.filter(t => t !== type)
        : [...prev, type]
    );
  };

  const canDownload = downloadsRemaining > 0;
  
  const renderVisual = (problem: Problem) => {
    if (!includeVisuals || !problem.hasVisual || !problem.visualData) return null;
    
    const { num1, num2, operation } = problem.visualData;
    const shape = '●';

    if (operation === '+') {
      return (
        <div className="visual-container">
          <div className="visual-group">
            <div className="group-label">{num1}</div>
            <div className="shapes-row">
              {Array.from({ length: num1 }).map((_, i) => (
                <span key={i} className="shape">
                  {shape}
                </span>
              ))}
            </div>
          </div>
          <span className="operation-symbol">+</span>
          <div className="visual-group">
            <div className="group-label">{num2}</div>
            <div className="shapes-row">
              {Array.from({ length: num2 }).map((_, i) => (
                <span key={i} className="shape">
                  {shape}
                </span>
              ))}
            </div>
          </div>
          <span className="operation-symbol">=</span>
          <div className="visual-group">
            <div className="group-label">?</div>
            <div className="shapes-row">
              <span className="count-hint">Count them!</span>
            </div>
          </div>
        </div>
      );
    } else if (operation === '-') {
      return (
        <div className="visual-container">
          <div className="visual-group">
            <div className="group-label">Start with {num1}</div>
            <div className="shapes-row">
              {Array.from({ length: num1 }).map((_, i) => (
                <span key={i} className="shape-with-cross">
                  {shape}
                  {i >= (num1 - num2) && <span className="cross">✕</span>}
                </span>
              ))}
            </div>
            <div className="subtraction-explanation">Take away {num2}</div>
          </div>
        </div>
      );
    }
    
    return null;
  };

  if (!isClient) {
    return (
      <div className="container">
        <h1 className="title">Homeschool Math Worksheet Generator</h1>
        <div className="card">
          <div style={{ textAlign: 'center', padding: '40px' }}>
            <div className="spinner" style={{ margin: '0 auto 20px', width: '32px', height: '32px' }}></div>
            <p>Loading worksheet generator...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <h1 className="title">Homeschool Math Worksheet Generator</h1>
      <p className="subtitle">
        Create custom worksheets and download the clean PDF. (Downloads Remaining: <strong>{downloadsRemaining}</strong>)
      </p>

      <div className="card controls-card">
        <div className="control-group">
          <label className="label" htmlFor="count">Number of Problems</label>
          <input
            id="count"
            type="number"
            min="5"
            max="20"
            value={problemCount}
            onChange={(e) => setProblemCount(Math.min(20, Math.max(5, parseInt(e.target.value) || 10)))}
            className="input-field"
          />
          <div className="helper-text">5-20 problems</div>
        </div>
        
        <div className="control-group">
          <label className="label" htmlFor="level">Grade Level</label>
          <select
            id="level"
            value={gradeLevel}
            onChange={(e) => setGradeLevel(e.target.value)}
            className="input-field"
          >
            <option value="kindergarten">Kindergarten</option>
            <option value="first">First Grade</option>
            <option value="second">Second Grade</option>
            <option value="third">Third Grade</option>
            <option value="fourth">Fourth Grade</option>
            <option value="fifth">Fifth Grade</option>
            <option value="sixth">Sixth Grade</option>
          </select>
          <div className="helper-text">{gradeConfig.description}</div>
        </div>

        <div className="control-group">
          <label className="label" htmlFor="difficulty">Difficulty Level</label>
          <select
            id="difficulty"
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            className="input-field"
          >
            <option value="easy">Easy - {gradeConfig.difficultyLevels.easy.description}</option>
            <option value="medium">Medium - {gradeConfig.difficultyLevels.medium.description}</option>
            <option value="hard">Hard - {gradeConfig.difficultyLevels.hard.description}</option>
          </select>
          <div className="helper-text">Choose problem difficulty</div>
        </div>

        <div className="control-group">
          <label className="label">Problem Types</label>
          <div className="checkbox-group">
            {gradeConfig.availableTypes.map(type => (
              <label key={type} className="checkbox-label">
                <input
                  type="checkbox"
                  checked={problemTypes.includes(type)}
                  onChange={() => handleProblemTypeChange(type)}
                  className="checkbox-input"
                />
                <span className="checkbox-text">{type}</span>
              </label>
            ))}
          </div>
          <div className="helper-text">Select one or more types</div>
        </div>

        <div className="control-group">
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={includeVisuals}
              onChange={() => setIncludeVisuals(!includeVisuals)}
              className="checkbox-input"
            />
            <span className="checkbox-text">Include Visual Aids (for younger grades)</span>
          </label>
          <div className="helper-text">Adds colorful shapes to illustrate problems</div>
        </div>
        
        <button 
          onClick={handleGenerate} 
          disabled={isGenerating || problemTypes.length === 0} 
          className="generate-button"
        >
          {isGenerating ? (
            <>
              <div className="spinner"></div>
              Generating...
            </>
          ) : (
            <>
              Generate Worksheet
            </>
          )}
        </button>
      </div>

      <div ref={worksheetPreviewRef}>
        <h2 className="section-title">
          Worksheet Preview
          <div className="preview-controls">
            <label className="toggle-answers">
              <input
                type="checkbox"
                checked={showAnswers}
                onChange={() => setShowAnswers(!showAnswers)}
              />
              Show Answers
            </label>
            <label className="toggle-answers">
              <input
                type="checkbox"
                checked={includeVisuals}
                onChange={() => setIncludeVisuals(!includeVisuals)}
              />
              Show Visuals
            </label>
          </div>
        </h2>
        
        <div className="card preview-card">
          <h3 className="preview-title">{title}</h3>
          <div className="problem-grid">
            {problems.map((p, index) => (
              <div key={p.id} className="problem-item">
                <span className="problem-number">{index + 1}.</span> 
                <span className="problem-text">{p.question}</span>
                {renderVisual(p)}
                {showAnswers ? (
                  <div className="answer-line">
                    <span className="answer-label">Answer:</span> 
                    <span className="answer-value">{p.answer}</span>
                  </div>
                ) : (
                  <div className="answer-line">
                    <span className="answer-label">Answer:</span> 
                    <div className="answer-underline"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div ref={downloadSectionRef}>
        <h2 className="section-title">Download</h2>
        
        <div className="download-wrapper">
          {canDownload ? (
            <DownloadSection 
              problems={problems} 
              title={title} 
              onDownloadComplete={incrementDownloadCount}
              onOpenLeadMagnet={onOpenLeadMagnet} 
              includeVisuals={includeVisuals}
              downloadsRemaining={downloadsRemaining}
              hasReceivedSignupBonus={hasReceivedSignupBonus}
            />
          ) : (
            <div className="card limit-card"> 
              <h3 className="limit-title">Nice work! You've generated 10 worksheets today</h3>
              <p className="limit-description">
                Join our community of 5,000+ homeschool parents to get <strong>10 more downloads today</strong> plus helpful teaching resources.
              </p>
              <button 
                onClick={onOpenLeadMagnet} 
                className="generate-button limit-button"
              >
                Join Our Community
              </button>
              <p className="limit-note">Free to join • No credit card required</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
          
