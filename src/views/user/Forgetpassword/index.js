import React, { useState } from 'react';
import './forgetpass.scss'; // Import the CSS file
import logo from "assets/Lets/logo1-2.png";
import backgroundImage from "assets/Lets/Background3.jpg";
import Button from 'components/Button/button';
import axios from 'axios'; // Import axios

const Forgetpass = () => {
    const [email, setEmail] = useState(''); // State để lưu email người dùng
    const [message, setMessage] = useState(''); // State để lưu thông báo

    const handleLoginClick = async (e) => {
        e.preventDefault(); // Ngừng hành động mặc định của form

    try {
        const response = await axios.post('http://localhost:3001/api/forgetpass', { email });
        setMessage(response.data.message); // Hiển thị thông báo từ server
    } catch (error) {
        if (error.response) {
            // Lỗi từ server (ví dụ: 400, 500)
            setMessage(`Lỗi từ server: ${error.response.data.message}`);
            console.error('Lỗi từ server:', error.response.data);
        } else {
            // Lỗi do kết nối hoặc lỗi khác
            setMessage('Đã có lỗi xảy ra. Vui lòng thử lại sau.');
            console.error('Lỗi không xác định:', error);
        }
    }
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
                <form onSubmit={handleLoginClick}>
                    <div className="input-group">
                        <label htmlFor="email">Email:</label>
                        <input 
                            type="email" 
                            id="email" 
                            placeholder="Nhập email của bạn" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} // Cập nhật giá trị email
                            required 
                        />
                    </div>
                    <Button text="Gửi yêu cầu" type="submit" /> {/* Chuyển Button thành nút submit */}
                </form>
                {message && <p>{message}</p>} {/* Hiển thị thông báo */}
            </div>
        </div>
    );
};

export default Forgetpass;
