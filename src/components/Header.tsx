import React from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import MenuBurger from './MenuBurger';
import './Header.css';

const Header: React.FC = () => {
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
        <MenuBurger />
      </div>
    </header>
  );
};

export default Header;
