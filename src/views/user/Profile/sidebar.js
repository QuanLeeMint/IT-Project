// Sidebar.js
import React from 'react';
import './sidebar.scss';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>Thông tin tài khoản</li>
        <li>Lịch sử mua hàng</li>
        <li>Đổi mật khẩu</li>
        <li>Sửa thông tin cá nhân</li>
        <li className="logout">Đăng xuất</li>
      </ul>
    </div>
  );
};

export default Sidebar;
