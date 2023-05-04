import React from 'react';
import '../styles/UpdatePassword.css';

const UpdatePassword = () => {
  return (
    <div className="update-password">
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" />
      <label htmlFor="confirmPassword">Confirm Password:</label>
      <input type="password" id="confirmPassword" />
    </div>
  );
};

export default UpdatePassword



