// app/components/DarkModeToggle.tsx
'use client';
import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

export default function DarkModeToggle() {
  const [theme, setTheme] = useState<string | null>(null);

  useEffect(() => {
    // Read the theme that was set by the script in layout.tsx
    const currentTheme = document.documentElement.getAttribute('data-theme');
    setTheme(currentTheme || 'light');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  // Render an empty box of the same size during initial load to prevent layout shift
  if (!theme) {
    return <div style={{ width: '36px', height: '36px' }} />;
  }

  return (
    <button
      onClick={toggleTheme}
      className="dark-mode-toggle"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
