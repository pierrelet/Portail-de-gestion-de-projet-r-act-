import React from 'react';
import './TodoItem.css';

const TodoItem = ({ todo, onToggleComplete }) => {
  const handleToggle = () => {
    if (onToggleComplete) {
      onToggleComplete(todo.id, !todo.completed);
    }
  };

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <div className="todo-content">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={handleToggle}
          className="todo-checkbox"
        />
        <span className="todo-title">{todo.title}</span>
      </div>
      <div className="todo-status">
        {todo.completed ? '✅' : '⏳'}
      </div>
    </div>
  );
};

export default TodoItem;
