import React, { useState } from "react";
import axios from "axios";

import "./sidebar.scss";

const Sidebar = () => {
  const [message, setMessage] = useState("");

  const handleLogoutClick = async () => {
    try {
      const token = localStorage.getItem("token");
  
      if (!token) {
        throw new Error("Token không tồn tại.");
      }
  
      console.log('Token client gửi:', token);
  
      const response = await axios.post(
        "http://localhost:3001/api/logout",
        {},
        {
          headers: { Authorization: `Bearer ${token}` }, // Token cần gửi chính xác trong header
        }
      );
  
      console.log('Response từ server:', response.data);
  
      localStorage.removeItem("token");
      setMessage(response.data.message);
  
      if (response.status === 200) {
        window.location.href = "/login";
      }
    } catch (error) {
      console.error(
        "Lỗi khi logout:",
        error.response?.data?.message || error.message
      );
      setMessage(error.response?.data?.message || "Đăng xuất thất bại");
    }
  };

  return (
    <div className="sidebar">
      <ul>
        <li>Thông tin tài khoản</li>
        <li>Lịch sử mua hàng</li>
        <li>Đổi mật khẩu</li>
        <li>Sửa thông tin cá nhân</li>
        <li className="logout" onClick={handleLogoutClick}>
          Đăng xuất
        </li>
      </ul>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default Sidebar;
