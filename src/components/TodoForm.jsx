import React, { useState } from 'react';
import './TodoForm.css';

const TodoForm = ({ userId, onSubmit }) => {
  const [title, setTitle] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    if (!title.trim()) {
      setError('Le titre de la tâche est obligatoire');
      return false;
    }
    if (title.trim().length < 5) {
      setError('Le titre doit contenir au moins 5 caractères');
      return false;
    }
    setError('');
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      const newTodo = {
        userId: userId,
        title: title.trim(),
        completed: false
      };

      await onSubmit(newTodo);
      setTitle('');
      setError('');
    } catch (err) {
      setError('Erreur lors de l\'ajout de la tâche');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
    if (error) {
      setError('');
    }
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <div className="form-header">
        <h3>Ajouter une nouvelle tâche</h3>
      </div>
      
      <div className="form-group">
        <label htmlFor="todo-title" className="form-label">
          Titre de la tâche *
        </label>
        <input
          type="text"
          id="todo-title"
          value={title}
          onChange={handleTitleChange}
          className={`form-input ${error ? 'error' : ''}`}
          placeholder="Entrez le titre de la tâche..."
          disabled={isSubmitting}
        />
        {error && <div className="form-error">{error}</div>}
      </div>

      <div className="form-actions">
        <button
          type="submit"
          className={`form-submit ${!title.trim() || title.trim().length < 5 ? 'disabled' : ''}`}
          disabled={!title.trim() || title.trim().length < 5 || isSubmitting}
        >
          {isSubmitting ? 'Ajout en cours...' : 'Ajouter la tâche'}
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
