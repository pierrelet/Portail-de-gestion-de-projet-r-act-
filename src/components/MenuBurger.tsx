import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import './MenuBurger.css';

const MenuBurger: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setIsOpen(!isOpen);
  };

  const closeMenu = (): void => {
    setIsOpen(false);
  };

  return (
    <div className="menu-burger">
      <button 
        className={`burger-button ${isOpen ? 'open' : ''}`}
        onClick={toggleMenu}
        aria-label="Menu"
      >
        <span className="burger-line"></span>
        <span className="burger-line"></span>
        <span className="burger-line"></span>
      </button>

      <nav className={`burger-nav ${isOpen ? 'open' : ''}`}>
        <div className="burger-nav-content">
          <Link 
            to="/" 
            className="burger-link"
            onClick={closeMenu}
          >
            🏠 Accueil
          </Link>
          <Link 
            to="/about" 
            className="burger-link"
            onClick={closeMenu}
          >
            ℹ️ À propos
          </Link>
          <div className="burger-theme-toggle">
            <ThemeToggle />
          </div>
        </div>
      </nav>

      {isOpen && (
        <div 
          className="burger-overlay"
          onClick={closeMenu}
        />
      )}
    </div>
  );
};

export default MenuBurger;
