import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Portail de Gestion de Projets</h3>
            <p>Application développée dans le cadre de l'épreuve E2 du BTS SIO</p>
          </div>
          
          <div className="footer-section">
            <h4>Développeur</h4>
            <p className="developer-name">Pierre Relet</p>
            <p>Étudiant BTS SIO</p>
          </div>
          
          <div className="footer-section">
            <h4>Technologies</h4>
            <div className="tech-tags">
              <span className="tech-tag">React</span>
              <span className="tech-tag">Vite</span>
              <span className="tech-tag">CSS3</span>
              <span className="tech-tag">JavaScript</span>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Liens Utiles</h4>
            <div className="footer-links">
              <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
                Documentation React
              </a>
              <a href="https://jsonplaceholder.typicode.com" target="_blank" rel="noopener noreferrer">
                API JSONPlaceholder
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>&copy; {currentYear} Pierre Relet - Tous droits réservés</p>
          </div>
          <div className="footer-version">
            <p>Version 1.0.0 - Épreuve E2</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
