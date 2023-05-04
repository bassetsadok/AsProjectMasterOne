import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/profile">Profile</NavLink>
      <NavLink to="/sensors">Sensors</NavLink>
      <NavLink to="/energy-calculation">Energy Calculation</NavLink>
      <NavLink to="/news">News</NavLink>
      <NavLink to="/label">Label</NavLink>
      <NavLink to="/privacy-policy">Privacy Policy</NavLink>
      <NavLink to="/rate-application">Rate Application</NavLink>
    </nav>
  );
};

export default Navbar;
