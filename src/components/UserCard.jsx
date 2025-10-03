import React from 'react';
import { Link } from 'react-router-dom';
import './UserCard.css';

const UserCard = ({ user }) => {
  const getProfileImage = (userId) => {
    const imageNumber = ((userId - 1) % 10) + 1;
    return `/src/assets/Images/${imageNumber}.jpg`;
  };

  return (
    <div className="user-card">
      <Link to={`/user/${user.id}`} className="user-card-link">
        <div className="user-card-content">
          <div className="user-avatar">
            <img 
              src={getProfileImage(user.id)} 
              alt={`Photo de profil de ${user.name}`}
              className="user-avatar-img"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="user-avatar-fallback">
              {user.name.charAt(0).toUpperCase()}
            </div>
          </div>
          <div className="user-info">
            <h3 className="user-name">{user.name}</h3>
            <p className="user-email">{user.email}</p>
            <p className="user-company">{user.company?.name || 'Entreprise non définie'}</p>
          </div>
          <div className="user-card-arrow">
            →
          </div>
        </div>
      </Link>
    </div>
  );
};

export default UserCard;
