import React from 'react';
import UserCard from './UserCard';
import { User } from '../types';
import './UserList.css';

interface UserListProps {
  users: User[];
  searchTerm: string;
}

const UserList: React.FC<UserListProps> = ({ users, searchTerm }) => {
  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (user.company?.name && user.company.name.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  if (filteredUsers.length === 0) {
    return (
      <div className="user-list-empty">
        <p>Aucun utilisateur trouvé pour "{searchTerm}"</p>
      </div>
    );
  }

  return (
    <div className="user-list">
      <div className="user-list-grid">
        {filteredUsers.map(user => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default UserList;
