import React from 'react';
import TodoItem from './TodoItem';
import './TodoList.css';

const TodoList = ({ todos, searchTerm, onToggleComplete }) => {
  const filteredTodos = todos.filter(todo => 
    todo.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const completedTodos = filteredTodos.filter(todo => todo.completed);
  const pendingTodos = filteredTodos.filter(todo => !todo.completed);

  if (filteredTodos.length === 0) {
    return (
      <div className="todo-list-empty">
        <p>Aucune tâche trouvée pour "{searchTerm}"</p>
      </div>
    );
  }

  return (
    <div className="todo-list">
      <div className="todo-list-header">
        <h3>Tâches ({filteredTodos.length})</h3>
        <div className="todo-stats">
          <span className="todo-stat pending">
            En cours: {pendingTodos.length}
          </span>
          <span className="todo-stat completed">
            Terminées: {completedTodos.length}
          </span>
        </div>
      </div>
      
      <div className="todo-sections">
        {pendingTodos.length > 0 && (
          <div className="todo-section">
            <h4>Tâches en cours</h4>
            <div className="todo-items">
              {pendingTodos.map(todo => (
                <TodoItem 
                  key={todo.id} 
                  todo={todo} 
                  onToggleComplete={onToggleComplete}
                />
              ))}
            </div>
          </div>
        )}

        {completedTodos.length > 0 && (
          <div className="todo-section">
            <h4>Tâches terminées</h4>
            <div className="todo-items">
              {completedTodos.map(todo => (
                <TodoItem 
                  key={todo.id} 
                  todo={todo} 
                  onToggleComplete={onToggleComplete}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TodoList;
