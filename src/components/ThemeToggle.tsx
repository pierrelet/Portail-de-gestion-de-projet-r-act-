import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import './ThemeToggle.css';

const ThemeToggle: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button 
      className={`theme-toggle ${isDarkMode ? 'dark' : 'light'}`}
      onClick={toggleTheme}
      aria-label={isDarkMode ? 'Passer au thème clair' : 'Passer au thème sombre'}
      title={isDarkMode ? 'Thème clair' : 'Thème sombre'}
    >
      <div className="theme-toggle-icon">
        {isDarkMode ? '☀️' : '🌙'}
      </div>
      <span className="theme-toggle-text">
        {isDarkMode ? 'Clair' : 'Sombre'}
      </span>
    </button>
  );
};

export default ThemeToggle;
