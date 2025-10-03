import React from 'react';
import { Todo } from '../types';
import './TodoItem.css';

interface TodoItemProps {
  todo: Todo;
  onToggleComplete?: (todoId: number, completed: boolean) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggleComplete }) => {
  const handleToggle = (): void => {
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
