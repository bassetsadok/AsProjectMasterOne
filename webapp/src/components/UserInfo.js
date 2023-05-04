import React from 'react';
import '../styles/UserInfo.css';

const UserInfo = () => {
  return (
    <div className="user-info">
      <label htmlFor="fullName">Full Name:</label>
      <input type="text" id="fullName" />
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" />
    </div>
  );
};

export default UserInfo;
