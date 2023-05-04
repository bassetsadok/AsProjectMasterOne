import React from 'react';
import '../styles/ActionButtons.css';

const ActionButtons = () => {
  return (
    <div className="action-buttons">
      <button className="update-info">Update Information</button>
      <button className="delete-account">Delete Account</button>
    </div>
  );
};

export default ActionButtons;
