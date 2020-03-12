import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <div className="navbar">
    <div className="navbar__wrapper">
      <p className="logo">CUSTOMER SUPPORT TICKETING SYSTEM</p>
      <div className="navbar__wrapper__links">
        <NavLink to="/" className="link">
          SIGN UP
        </NavLink>
        <NavLink to="/" className="link link--bordered">
          SIGN IN
        </NavLink>
      </div>
    </div>
  </div>
);

export default Header;
