// app/components/Navigation.tsx
"use client";

import Link from 'next/link';

export default function Navigation() {
  

  return (
    <nav className="navigation">
      <Link href="/" className="nav-brand">
       
      </Link>
      
      <div className="nav-links">
        <Link href="/grade-1-math-worksheets">Grade 1</Link>
        <Link href="/addition-worksheets">Addition</Link>
        <Link href="/subtraction-practice">Subtraction</Link>
        <Link href="/multiplication-practice">Multiplication</Link>
        <Link href="/fractions-worksheets">Fractions</Link>
        <Link href="/word-problems">Word Problems</Link>
      </div>
    </nav>
  );
}