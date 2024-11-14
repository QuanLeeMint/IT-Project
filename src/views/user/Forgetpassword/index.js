import React, { useState }from 'react';
import './forgetpass.scss'; // Import the CSS file
import logo from "assets/Lets/logo1-2.png"
import backgroundImage from "assets/Lets/Background3.jpg"
import Button from 'components/Button/button';

const Forgetpass = () => {
    const handleLoginClick = () => {
        // Xử lý khi nhấn vào nút "Đăng Nhập"
    };

    return (
        <div className="forgetpass-page" style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100vh',
        }}>
            <div className="form-container">
                <div className="logo">
                    <img className="imglogo" src={logo} alt="Logo" width="90" height="80" />
                </div>
                <h2>Quên mật khẩu</h2>
                <form>
                    <div className="input-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" placeholder="Nhập email của bạn" required />
                    </div>
                    <Button text="Gửi yêu cầu" onClick={handleLoginClick} />
                </form>
            </div>
    </div>
        
    );
};

export default Forgetpass;
