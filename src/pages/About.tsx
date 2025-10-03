import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './About.css';

const About: React.FC = () => {
  return (
    <div className="about-page">
      <Header />
      <main className="main-content">
        <div className="about-container">
          <div className="about-header">
            <h1>À Propos du Portail de Gestion de Projets</h1>
            <p className="about-subtitle">
              Une application moderne développée avec React pour la gestion des projets d'équipe
            </p>
          </div>

          <div className="about-content">
            <section className="about-section">
              <h2>🎯 Objectif</h2>
              <p>
                Cette application web a été développée dans le cadre de l'épreuve E2 du BTS SIO. 
                Elle permet aux collaborateurs d'une ESN (Entreprise de Services Numériques) 
                de visualiser et gérer efficacement leurs projets et tâches.
              </p>
            </section>

            <section className="about-section">
              <h2>✨ Fonctionnalités Principales</h2>
              <div className="features-grid">
                <div className="feature-card">
                  <div className="feature-icon">👥</div>
                  <h3>Gestion des Utilisateurs</h3>
                  <p>Consultez la liste complète des collaborateurs avec leurs informations détaillées</p>
                </div>
                <div className="feature-card">
                  <div className="feature-icon">📋</div>
                  <h3>Suivi des Tâches</h3>
                  <p>Visualisez et gérez les tâches de chaque utilisateur avec un système de statut</p>
                </div>
                <div className="feature-card">
                  <div className="feature-icon">🔍</div>
                  <h3>Recherche Intelligente</h3>
                  <p>Recherchez rapidement des utilisateurs ou des tâches par nom, email ou entreprise</p>
                </div>
                <div className="feature-card">
                  <div className="feature-icon">➕</div>
                  <h3>Ajout de Tâches</h3>
                  <p>Créez facilement de nouvelles tâches avec validation côté client</p>
                </div>
                <div className="feature-card">
                  <div className="feature-icon">🌙</div>
                  <h3>Thème Adaptatif</h3>
                  <p>Basculez entre le thème clair et sombre selon vos préférences</p>
                </div>
                <div className="feature-card">
                  <div className="feature-icon">📱</div>
                  <h3>Design Responsive</h3>
                  <p>Interface optimisée pour tous les appareils (mobile, tablette, desktop)</p>
                </div>
              </div>
            </section>

            <section className="about-section">
              <h2>🛠️ Technologies Utilisées</h2>
              <div className="tech-stack">
                <div className="tech-item">
                  <span className="tech-name">React 18</span>
                  <span className="tech-desc">Framework JavaScript moderne</span>
                </div>
                <div className="tech-item">
                  <span className="tech-name">Vite</span>
                  <span className="tech-desc">Outil de build rapide</span>
                </div>
                <div className="tech-item">
                  <span className="tech-name">React Router</span>
                  <span className="tech-desc">Navigation SPA</span>
                </div>
                <div className="tech-item">
                  <span className="tech-name">CSS3</span>
                  <span className="tech-desc">Styles responsive et animations</span>
                </div>
                <div className="tech-item">
                  <span className="tech-name">JSONPlaceholder</span>
                  <span className="tech-desc">API REST pour les données</span>
                </div>
              </div>
            </section>

            <section className="about-section">
              <h2>📊 Architecture</h2>
              <p>
                L'application suit une architecture en composants React avec une séparation claire 
                des responsabilités. Chaque composant est modulaire, réutilisable et documenté.
              </p>
              <ul className="architecture-list">
                <li><strong>Composants Présentiels</strong> : UserCard, TodoItem, Loader</li>
                <li><strong>Composants Conteneurs</strong> : UserList, TodoList, Home, UserDetail</li>
                <li><strong>Composants Utilitaires</strong> : SearchBar, TodoForm, ThemeToggle</li>
                <li><strong>Services</strong> : API calls centralisées</li>
                <li><strong>Contextes</strong> : Gestion globale du thème</li>
              </ul>
            </section>

            <section className="about-section">
              <h2>🎓 Conformité Épreuve E2</h2>
              <div className="compliance-grid">
                <div className="compliance-item">
                  <span className="compliance-check">✅</span>
                  <span>Architecture en composants pertinente</span>
                </div>
                <div className="compliance-item">
                  <span className="compliance-check">✅</span>
                  <span>Utilisation appropriée des hooks React</span>
                </div>
                <div className="compliance-item">
                  <span className="compliance-check">✅</span>
                  <span>Navigation fonctionnelle avec React Router</span>
                </div>
                <div className="compliance-item">
                  <span className="compliance-check">✅</span>
                  <span>Validation de formulaire efficace</span>
                </div>
                <div className="compliance-item">
                  <span className="compliance-check">✅</span>
                  <span>Code réutilisable et maintenable</span>
                </div>
                <div className="compliance-item">
                  <span className="compliance-check">✅</span>
                  <span>Respect des bonnes pratiques React</span>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
