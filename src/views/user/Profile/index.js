// ProfilePage.js
import React from 'react';
import Sidebar from './sidebar';
import AccountInfo from './accountInfo';
import Progress from './progress';

import './style.scss';

const ProfilePage = () => {
  return (
    <div className="profile-page">
      <Sidebar />
      <div className="profile-content">
        <div className="profile-sections">
          <AccountInfo />
          <Progress />
         
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
