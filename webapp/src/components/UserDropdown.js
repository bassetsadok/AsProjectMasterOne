import React, { useState } from 'react';
import '../styles/UserDropdown.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

const UserDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="user-dropdown">
      <button onClick={toggleDropdown}>
        <FontAwesomeIcon icon={faUserCircle} /> Username
      </button>
      {isOpen && (
        <ul>
          <li onClick={() => console.log('Logout clicked')}>Logout</li>
        </ul>
      )}
    </div>
  );
};

export default UserDropdown;
