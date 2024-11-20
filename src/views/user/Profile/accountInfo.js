import React from 'react';
import './accountInfo.scss';
import avatar from 'assets/Lets/avar.png'; // Thay bằng đường dẫn ảnh avatar của bạn

const AccountInfo = () => {
  return (
    <div className="account-info">
      <div className="avar-form">
        <img src={avatar} alt="User Avatar" className="avatar" />
        <span className="username">Lê Minh Quân</span>
      </div>
      <div className="info">
        <div className="info-item">
          <label>Họ và tên</label>
          <p>Lê Minh Quân</p>
        </div>
        <div className="info-item">
          <label>Địa chỉ email</label>
          <p>quanheo2003@gmail.com</p>
        </div>
        <div className="info-item">
          <label>Số điện thoại</label>
          <p>0937536507</p>
        </div>
        <div className="info-item">
          <label>Ngày sinh</label>
          <p>2003-09-28</p>
        </div>
        <div className="info-item">
          <label>Địa chỉ</label>
          <p>A1/168 Phường Xã, Quận/Huyện</p>
        </div>
      </div>
    </div>
  );
};

export default AccountInfo;
