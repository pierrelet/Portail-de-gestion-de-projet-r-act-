import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import UserList from '../components/UserList';
import Loader from '../components/Loader';
import Footer from '../components/Footer';
import { fetchUsers } from '../services/api';
import { User } from '../types';
import './Home.css';

const Home: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const loadUsers = async (): Promise<void> => {
      try {
        setLoading(true);
        setError('');
        const usersData = await fetchUsers();
        setUsers(usersData);
      } catch (err) {
        setError('Erreur lors du chargement des utilisateurs');
        console.error('Erreur:', err);
      } finally {
        setLoading(false);
      }
    };

    loadUsers();
  }, []);

  const handleSearchChange = (value: string): void => {
    setSearchTerm(value);
  };

  if (loading) {
    return (
      <div className="home-page">
        <Header />
        <main className="main-content">
          <Loader message="Chargement des utilisateurs..." />
        </main>
      </div>
    );
  }

  if (error) {
    return (
      <div className="home-page">
        <Header />
        <main className="main-content">
          <div className="error-container">
            <h2>Erreur</h2>
            <p>{error}</p>
            <button 
              onClick={() => window.location.reload()} 
              className="retry-button"
            >
              Réessayer
            </button>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="home-page">
      <Header />
      <main className="main-content">
        <div className="page-header">
          <h1>Gestion des Projets</h1>
          <p>Consultez et gérez les projets de tous les collaborateurs</p>
        </div>

        <div className="search-section">
          <SearchBar
            searchTerm={searchTerm}
            onSearchChange={handleSearchChange}
            placeholder="Rechercher un utilisateur par nom, email ou entreprise..."
          />
        </div>

        <div className="users-section">
          <div className="section-header">
            <h2>Collaborateurs ({users.length})</h2>
            {searchTerm && (
              <p className="search-results">
                Résultats pour "{searchTerm}"
              </p>
            )}
          </div>
          
          <UserList users={users} searchTerm={searchTerm} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
