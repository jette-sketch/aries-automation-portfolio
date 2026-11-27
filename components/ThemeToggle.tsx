'use client';

import { Moon, Sun } from 'lucide-react';

const THEME_KEY = 'portfolio-color-theme';

export function ThemeToggle() {
  function toggleTheme() {
    const root = document.documentElement;
    const next = root.dataset.theme === 'light' ? 'dark' : 'light';
    root.dataset.theme = next;
    try { localStorage.setItem(THEME_KEY, next); } catch { /* Storage may be blocked. */ }
  }
  return (
    <button type="button" className="theme-toggle" onClick={toggleTheme} aria-label="Switch between day and night mode" title="Switch day / night mode">
      <Sun className="theme-toggle-sun" size={20} aria-hidden="true" />
      <Moon className="theme-toggle-moon" size={20} aria-hidden="true" />
    </button>
  );
}
