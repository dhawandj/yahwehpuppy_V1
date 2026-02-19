
import React, { useState, useEffect } from 'react';

const PALETTES = [
  { 
    name: 'Sunset Orange', 
    primary: '#f97316', 
    hover: '#ea580c', 
    light: '#fff7ed', 
    border: '#ffedd5', 
    shadow: 'rgba(249, 115, 22, 0.2)',
    bgStart: '#ffffff',
    bgEnd: '#fff9f5'
  },
  { 
    name: 'Royal Indigo', 
    primary: '#6366f1', 
    hover: '#4f46e5', 
    light: '#f5f3ff', 
    border: '#e0e7ff', 
    shadow: 'rgba(99, 102, 241, 0.2)',
    bgStart: '#ffffff',
    bgEnd: '#f8f7ff'
  },
  { 
    name: 'Lush Emerald', 
    primary: '#10b981', 
    hover: '#059669', 
    light: '#f0fdf4', 
    border: '#dcfce7', 
    shadow: 'rgba(16, 185, 129, 0.2)',
    bgStart: '#ffffff',
    bgEnd: '#f4fdf7'
  },
  { 
    name: 'Classic Blue', 
    primary: '#3b82f6', 
    hover: '#2563eb', 
    light: '#eff6ff', 
    border: '#dbeafe', 
    shadow: 'rgba(59, 130, 246, 0.2)',
    bgStart: '#ffffff',
    bgEnd: '#f5f9ff'
  },
  { 
    name: 'Elegant Rose', 
    primary: '#f43f5e', 
    hover: '#e11d48', 
    light: '#fff1f2', 
    border: '#ffe4e6', 
    shadow: 'rgba(244, 63, 94, 0.2)',
    bgStart: '#ffffff',
    bgEnd: '#fff7f8'
  },
];

const ThemeToggle: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTheme, setActiveTheme] = useState('Sunset Orange');

  useEffect(() => {
    const savedTheme = localStorage.getItem('yahwehfarm_theme');
    if (savedTheme) {
      const palette = PALETTES.find(p => p.name === savedTheme);
      if (palette) applyTheme(palette);
    } else {
      // Default to Sunset Orange if nothing is saved
      const sunset = PALETTES.find(p => p.name === 'Sunset Orange');
      if (sunset) applyTheme(sunset);
    }
  }, []);

  const applyTheme = (palette: typeof PALETTES[0]) => {
    const root = document.documentElement;
    root.style.setProperty('--primary', palette.primary);
    root.style.setProperty('--primary-hover', palette.hover);
    root.style.setProperty('--primary-light', palette.light);
    root.style.setProperty('--primary-border', palette.border);
    root.style.setProperty('--primary-shadow', palette.shadow);
    root.style.setProperty('--bg-start', palette.bgStart);
    root.style.setProperty('--bg-end', palette.bgEnd);
    setActiveTheme(palette.name);
    localStorage.setItem('yahwehfarm_theme', palette.name);
  };

  return (
    <div className="fixed left-4 bottom-8 sm:left-8 sm:bottom-8 z-[110]">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 sm:w-14 sm:h-14 bg-white/80 backdrop-blur-md border border-slate-200 shadow-xl rounded-full flex items-center justify-center text-slate-600 hover:text-primary transition-all active:scale-90"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute bottom-16 left-0 bg-white/95 backdrop-blur-lg border border-slate-200 rounded-2xl shadow-2xl p-4 w-48 sm:w-56 animate-in slide-in-from-bottom-2 fade-in duration-200">
          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 px-1">Choose Theme</h4>
          <div className="space-y-2">
            {PALETTES.map((palette) => (
              <button
                key={palette.name}
                onClick={() => applyTheme(palette)}
                className={`w-full flex items-center gap-3 p-2 rounded-xl transition-all ${
                  activeTheme === palette.name ? 'bg-slate-50 ring-1 ring-slate-200' : 'hover:bg-slate-50'
                }`}
              >
                <div 
                  className="w-5 h-5 rounded-full shrink-0 shadow-sm" 
                  style={{ backgroundColor: palette.primary }}
                />
                <span className={`text-xs font-bold ${activeTheme === palette.name ? 'text-slate-900' : 'text-slate-500'}`}>
                  {palette.name}
                </span>
                {activeTheme === palette.name && (
                  <div className="ml-auto w-1.5 h-1.5 rounded-full bg-primary" />
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ThemeToggle;
