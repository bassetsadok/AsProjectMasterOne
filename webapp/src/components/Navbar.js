import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faCogs, faCalculator, faNewspaper, faTags, faShieldAlt, faStar } from '@fortawesome/free-solid-svg-icons';



const Navbar = () => {
    return (
      <nav className="navbar">
        <NavLink to="/"><FontAwesomeIcon icon={faHome} /> Home</NavLink>
        <NavLink to="/profile"><FontAwesomeIcon icon={faUser} /> Profile</NavLink>
        <NavLink to="/sensors"><FontAwesomeIcon icon={faCogs} /> Sensors</NavLink>
        <NavLink to="/energy-calculation"><FontAwesomeIcon icon={faCalculator} /> Energy Calculation</NavLink>
        <NavLink to="/news"><FontAwesomeIcon icon={faNewspaper} /> News</NavLink>
        <NavLink to="/label"><FontAwesomeIcon icon={faTags} /> Label</NavLink>
        <NavLink to="/privacy-policy"><FontAwesomeIcon icon={faShieldAlt} /> Privacy Policy</NavLink>
        <NavLink to="/rate-application"><FontAwesomeIcon icon={faStar} /> Rate Application</NavLink>
      </nav>
    );
  };
  
  export default Navbar;
  