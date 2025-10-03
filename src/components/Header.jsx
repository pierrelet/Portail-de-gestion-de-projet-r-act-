import React from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="header-logo">
          <h1>Portail de Gestion de Projets</h1>
        </Link>
        <nav className="header-nav">
          <Link to="/" className="nav-link">
            Accueil
          </Link>
          <Link to="/about" className="nav-link">
            À propos
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
};

export default Header;
