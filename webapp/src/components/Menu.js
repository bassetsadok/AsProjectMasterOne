import React, { useState } from 'react';
import '../styles/Menu.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="menu">
      <button onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} />
      </button>
      {isOpen && (
        <ul>
          {/* Add your menu items here */}
          <li>Menu Item 1</li>
          <li>Menu Item 2</li>
          <li>Menu Item 3</li>
        </ul>
      )}
    </div>
  );
};

export default Menu;
