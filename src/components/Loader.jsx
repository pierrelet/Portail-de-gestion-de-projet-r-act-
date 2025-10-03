import React from 'react';
import './Loader.css';

const Loader = ({ message = "Chargement..." }) => {
  return (
    <div className="loader-container">
      <div className="loader-spinner"></div>
      <p className="loader-message">{message}</p>
    </div>
  );
};

export default Loader;
