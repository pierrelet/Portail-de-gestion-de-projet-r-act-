import { User, Todo, TodoFormData } from '../types';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const fetchUsers = async (): Promise<User[]> => {
  try {
    const response = await fetch(`${BASE_URL}/users`);
    if (!response.ok) {
      throw new Error(`Erreur HTTP: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Erreur lors de la récupération des utilisateurs:', error);
    throw error;
  }
};

export const fetchUserById = async (userId: number): Promise<User> => {
  try {
    const response = await fetch(`${BASE_URL}/users/${userId}`);
    if (!response.ok) {
      throw new Error(`Erreur HTTP: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Erreur lors de la récupération de l'utilisateur ${userId}:`, error);
    throw error;
  }
};

export const fetchTodosByUserId = async (userId: number): Promise<Todo[]> => {
  try {
    const response = await fetch(`${BASE_URL}/todos?userId=${userId}`);
    if (!response.ok) {
      throw new Error(`Erreur HTTP: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Erreur lors de la récupération des todos de l'utilisateur ${userId}:`, error);
    throw error;
  }
};

export const createTodo = async (todoData: TodoFormData): Promise<Todo> => {
  try {
    const response = await fetch(`${BASE_URL}/todos`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(todoData),
    });
    
    if (!response.ok) {
      throw new Error(`Erreur HTTP: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Erreur lors de la création de la tâche:', error);
    throw error;
  }
};

export const updateTodo = async (todoId: number, todoData: Partial<Todo>): Promise<Todo> => {
  try {
    const response = await fetch(`${BASE_URL}/todos/${todoId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(todoData),
    });
    
    if (!response.ok) {
      throw new Error(`Erreur HTTP: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error(`Erreur lors de la mise à jour de la tâche ${todoId}:`, error);
    throw error;
  }
};

export const deleteTodo = async (todoId: number): Promise<boolean> => {
  try {
    const response = await fetch(`${BASE_URL}/todos/${todoId}`, {
      method: 'DELETE',
    });
    
    if (!response.ok) {
      throw new Error(`Erreur HTTP: ${response.status}`);
    }
    
    return true;
  } catch (error) {
    console.error(`Erreur lors de la suppression de la tâche ${todoId}:`, error);
    throw error;
  }
};
