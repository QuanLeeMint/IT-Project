import React, { useState }from 'react';
import './forgetpass.scss'; // Import the CSS file
import logo from "assets/Lets/logo1-2.png"
import backgroundImage from "assets/Lets/Background3.jpg"

const Forgetpass = () => {
    

    return (
        <div className="forgetpass-page" style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100vh',
        }}>
            <div className="form-container">
                <h2>Quên mật khẩu</h2>
                <form>
                    <div className="input-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" placeholder="Nhập email của bạn" required />
                    </div>
                    <button type="submit">Gửi yêu cầu</button>
                </form>
            </div>
    </div>
        
    );
};

export default Forgetpass;
