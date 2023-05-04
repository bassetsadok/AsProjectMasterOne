import React from 'react';
import UserInfo from './UserInfo';
import UpdatePassword from './UpdatePassword';
import ActionButtons from './ActionButtons';
import '../styles/UserProfile.css';

const UserProfile = () => {
  return (
    <div className="user-profile">
      <div className="profile-picture">
        <img src="/146035.png" alt="Profile" />
      </div>
      <h2>Username</h2>
      <div className="user-details">
        <UserInfo />
        <UpdatePassword />
      </div>
      <ActionButtons />
    </div>
  );
};

export default UserProfile;
