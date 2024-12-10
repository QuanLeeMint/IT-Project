import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from './sidebar';
import AccountInfo from './accountInfo';
import Progress from './progress';

import './style.scss';

// Fetch thông tin user từ server
const fetchUserProfile = async (token) => {
  try {
    const response = await fetch('http://localhost:3001/api/profile', {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error('Không thể tải thông tin người dùng');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Lỗi:', error);
    return null;
  }
};

const ProfilePage = () => {
  const [userInfo, setUserInfo] = useState(null);
  const navigate = useNavigate(); // Hook để điều hướng

  useEffect(() => {
    const token = localStorage.getItem('token');
    const redirectTo = localStorage.getItem('redirectTo') || '/profile'; // Lấy URL gốc lưu trữ

    if (!token) {
      alert('Bạn cần đăng nhập trước khi xem thông tin này.');
      localStorage.setItem('redirectTo', window.location.pathname); // Lưu URL gốc
      navigate('/login');
      return;
    }

    fetchUserProfile(token)
      .then((data) => {
        if (data) {
          setUserInfo(data.user);
        } else {
          alert('Token không hợp lệ hoặc đã hết hạn.');
          localStorage.removeItem('token');
          localStorage.setItem('redirectTo', window.location.pathname);
          navigate('/login');
        }
      })
      .catch((error) => console.error('Error loading user profile', error));
  }, [navigate]);

  return (
    <div className="profile-page">
      <Sidebar />
      <div className="profile-content">
        <div className="profile-sections">
          {userInfo ? (
            <>
              <AccountInfo userInfo={userInfo} />
              <Progress />
            </>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
