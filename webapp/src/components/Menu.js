import React, { useState } from 'react';
import '../styles/Menu.css';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="menu">
      <button onClick={toggleMenu}>{isOpen ? 'Close' : 'Open'} Menu</button>
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
