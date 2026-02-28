// app/types/index.ts
export interface Problem {
  id: number;
  question: string;
  answer: string;
  isWordProblem?: boolean;
  context?: string;
}

export interface EmailSignupProps {
  onSignup: (email: string) => void;
  isLoading?: boolean;
  language?: string;
  getMoreText?: string;
  signupText?: string;
  appearance?: 'light' | 'dark';
}