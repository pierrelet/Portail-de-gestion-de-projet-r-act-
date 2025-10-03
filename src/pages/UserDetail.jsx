import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';
import Loader from '../components/Loader';
import Footer from '../components/Footer';
import { fetchUserById, fetchTodosByUserId, createTodo, updateTodo } from '../services/api';
import './UserDetail.css';

const UserDetail = () => {
  const { userId } = useParams();
  const navigate = useNavigate();
  
  const [user, setUser] = useState(null);
  const [todos, setTodos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showAddForm, setShowAddForm] = useState(false);

  useEffect(() => {
    const loadUserData = async () => {
      try {
        setLoading(true);
        setError('');
        
        const [userData, todosData] = await Promise.all([
          fetchUserById(userId),
          fetchTodosByUserId(userId)
        ]);
        
        setUser(userData);
        setTodos(todosData);
      } catch (err) {
        setError('Erreur lors du chargement des données');
        console.error('Erreur:', err);
      } finally {
        setLoading(false);
      }
    };

    if (userId) {
      loadUserData();
    }
  }, [userId]);

  const handleSearchChange = (value) => {
    setSearchTerm(value);
  };

  const handleToggleComplete = async (todoId, completed) => {
    try {
      await updateTodo(todoId, { completed });
      setTodos(prevTodos => 
        prevTodos.map(todo => 
          todo.id === todoId ? { ...todo, completed } : todo
        )
      );
    } catch (err) {
      console.error('Erreur lors de la mise à jour:', err);
    }
  };

  const handleAddTodo = async (newTodo) => {
    try {
      const createdTodo = await createTodo(newTodo);
      // JSONPlaceholder retourne un ID fictif, on utilise l'ID local
      const todoWithId = {
        ...createdTodo,
        id: todos.length + 1 // ID temporaire pour l'affichage
      };
      setTodos(prevTodos => [...prevTodos, todoWithId]);
      setShowAddForm(false);
    } catch (err) {
      console.error('Erreur lors de l\'ajout:', err);
      throw err;
    }
  };

  if (loading) {
    return (
      <div className="user-detail-page">
        <Header />
        <main className="main-content">
          <Loader message="Chargement des données utilisateur..." />
        </main>
      </div>
    );
  }

  if (error || !user) {
    return (
      <div className="user-detail-page">
        <Header />
        <main className="main-content">
          <div className="error-container">
            <h2>Utilisateur non trouvé</h2>
            <p>{error || 'L\'utilisateur demandé n\'existe pas.'}</p>
            <Link to="/" className="back-button">
              Retour à l'accueil
            </Link>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="user-detail-page">
      <Header />
      <main className="main-content">
        <nav className="breadcrumb">
          <Link to="/" className="breadcrumb-link">Accueil</Link>
          <span className="breadcrumb-separator">›</span>
          <span className="breadcrumb-current">{user.name}</span>
        </nav>

        <div className="user-profile">
          <div className="user-avatar-large">
            <img 
              src={`/src/assets/Images/${((user.id - 1) % 10) + 1}.jpg`}
              alt={`Photo de profil de ${user.name}`}
              className="user-avatar-large-img"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="user-avatar-large-fallback">
              {user.name.charAt(0).toUpperCase()}
            </div>
          </div>
          <div className="user-details">
            <h1 className="user-name">{user.name}</h1>
            <p className="user-email">{user.email}</p>
            <p className="user-company">{user.company?.name || 'Entreprise non définie'}</p>
            <p className="user-website">
              <a href={`http://${user.website}`} target="_blank" rel="noopener noreferrer">
                {user.website}
              </a>
            </p>
          </div>
        </div>

        <div className="todos-section">
          <div className="section-header">
            <h2>Projets et Tâches</h2>
            <button 
              className="add-todo-button"
              onClick={() => setShowAddForm(!showAddForm)}
            >
              {showAddForm ? 'Annuler' : '+ Ajouter une tâche'}
            </button>
          </div>

          {showAddForm && (
            <div className="add-form-container">
              <TodoForm 
                userId={parseInt(userId)} 
                onSubmit={handleAddTodo}
              />
            </div>
          )}

          <div className="search-section">
            <SearchBar
              searchTerm={searchTerm}
              onSearchChange={handleSearchChange}
              placeholder="Rechercher une tâche..."
            />
          </div>

          <TodoList 
            todos={todos} 
            searchTerm={searchTerm}
            onToggleComplete={handleToggleComplete}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default UserDetail;
