export interface User {
  id: number;
  name: string;
  email: string;
  company: {
    name: string;
  };
  website: string;
}

export interface Todo {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
}

export interface TodoFormData {
  userId: number;
  title: string;
  completed: boolean;
}

export interface ThemeContextType {
  isDarkMode: boolean;
  toggleTheme: () => void;
}
