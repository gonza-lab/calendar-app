import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../../../actions/auth';

export const Navbar = ({ urlImage }) => {
  const { name } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(startLogout());
  };
  return (
    <nav className="navbar">
      <div className="navbar__profile">
        <div>
          <img src={urlImage} alt="Profile" />
        </div>
        <p>{name}</p>
      </div>
      <div onClick={handleLogout} className="navbar__sign-out">
        <i className="fas fa-sign-out-alt"></i>
      </div>
    </nav>
  );
};
