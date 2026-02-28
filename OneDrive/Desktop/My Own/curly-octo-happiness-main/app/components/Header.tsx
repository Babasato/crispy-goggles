// app/components/Header.tsx - WITH DARK MODE TOGGLE & RESOURCES
"use client";
import Link from 'next/link';
import DarkModeToggle from './DarkModeToggle';

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-content">
        <div className="brand">
          <Link href="/" className="home-link">
            <h1 className="brand-title">Homeschool Math</h1>
          </Link>
        </div>
        
        <nav className="main-nav">
          <Link href="/about" className="nav-link">About</Link>
          <Link href="/resources" className="nav-link">Resources</Link>
          <Link href="/contact" className="nav-link">Contact</Link>
          <DarkModeToggle />
        </nav>
      </div>
    </header>
  );
}
