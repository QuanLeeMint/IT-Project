// AccountInfo.js
import React from 'react';
import './accountInfo.scss';

const AccountInfo = () => {
  return (
    <div className="account-info">
      <h2>Thông tin tài khoản</h2>
      <div className="info">
        <p><strong>Họ và tên:</strong> Lê Minh Quân</p>
        <p><strong>Địa chỉ email:</strong> quanheo2003@gmail.com</p>
        <p><strong>Số điện thoại:</strong> 0937536507</p>
        <p><strong>Ngày sinh:</strong> 2003-09-28</p>
        <p><strong>Địa chỉ:</strong> A1/168 Phường Xã, Quận/Huyện</p>
      </div>
    </div>
  );
};

export default AccountInfo;
