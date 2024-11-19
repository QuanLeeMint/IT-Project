// Progress.js
import React from 'react';
import './progress.scss';
import logo from "assets/Lets/logo1-2.png"
const Progress = () => {
  return (
    
    <div className="progress">
      <div className="logo">
        <img className="imglogo" src={logo} alt="Logo" width="90" height="80" />
      </div>
      <h2>Điểm của bạn</h2>
      <div className="progress-info">
        <p>Bạn cần <span>100 điểm</span> nữa để tăng hạng!</p>
      </div>
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: '40%' }}></div>
      </div>
      <p className="progress-text">0/99 điểm</p>
    </div>
  );
};

export default Progress;
