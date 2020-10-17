import React from 'react';

export const Navbar = ({ name, urlImage }) => {
  return (
    <nav className="navbar">
      <div className="navbar__profile">
        <div>
          <img src={urlImage} alt="Profile" />
        </div>
        <p>{name}</p>
      </div>
      <div className="navbar__sign-out">
        <i className="fas fa-sign-out-alt"></i>
      </div>
    </nav>
  );
};
