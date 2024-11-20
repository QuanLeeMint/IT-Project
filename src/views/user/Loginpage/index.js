import React, { useState } from 'react';
import './login.scss'; // Import the CSS file
import logo from "assets/Lets/logo1-2.png";
import backgroundImage from "assets/Lets/Background3.jpg";
import { ROUTERS } from "utils/router";
import { Link, useNavigate } from "react-router-dom";

const Loginpage = () => {
    const [isRightPanelActive, setIsRightPanelActive] = useState(false);
    const navigate = useNavigate();  // Hook dùng để điều hướng người dùng

    const handleSignUpClick = () => {
        setIsRightPanelActive(true);
    };

    const handleSignInClick = () => {
        setIsRightPanelActive(false);
    };

    const handleSignUp = async () => {
        const email = document.querySelector(".form-1 input[type='email']").value;
    const password = document.querySelector(".form-1 input[type='password']").value;

    try {
        // Gửi dữ liệu đăng ký đến API
        const response = await fetch('http://localhost:3001/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();
        if (response.ok) {
            // Đăng ký thành công
            console.log("Đăng ký thành công", data);
            alert('Đăng ký thành công');
        } else {
            // Nếu API trả về lỗi, hiển thị thông báo lỗi
            console.log("Lỗi đăng ký", data);
            alert(data.message || 'Đăng ký thất bại'); // Hiển thị thông báo lỗi từ API
        }
    } catch (error) {
        // Xử lý lỗi nếu API không phản hồi hoặc lỗi hệ thống
        console.log("Lỗi kết nối API", error);
        alert('Có lỗi xảy ra, vui lòng thử lại!');
    }
    };

    const handleSignIn = async () => {
        const email = document.querySelector(".form-2 input[type='email']").value;
        const password = document.querySelector(".form-2 input[type='password']").value;

        // Gửi dữ liệu đăng nhập đến API
        const response = await fetch('http://localhost:3001/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();
        if (response.ok) {
            // Xử lý đăng nhập thành công
            console.log("Đăng nhập thành công", data);
            // Chuyển hướng đến trang homepage
            navigate('/homepage');  // Điều hướng đến trang chính sau khi đăng nhập thành công
        } else {
            // Xử lý lỗi đăng nhập
            console.log("Lỗi đăng nhập", data);
        }
    };

    return (
        <div className="loginform" style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100vh',
        }}>
            <div className='box'>
                <div className='login-container'>
                    <div className={`container ${isRightPanelActive ? 'right-panel-active' : ''}`} id="container">
                        <div className="form-container sign-up-container">
                            <form className='form-1'>
                                <div className="social-container">
                                    <img className="imglogo" src={logo} alt="Logo" width="90" height="80" />
                                </div>
                                <h1>Đăng kí tài khoản</h1>
                                <input type="email" placeholder="Email" />
                                <input type="password" placeholder="Mật khẩu" />
                                <button type="button" onClick={handleSignUp}>Đăng ký</button>
                            </form>
                        </div>

                        {/* Sign In Container */}
                        <div className="form-container sign-in-container">
                            <form className='form-2'>
                                <div className="logo">
                                    <img className="imglogo" src={logo} alt="Logo" width="90" height="80" />
                                </div>
                                <h1>Đăng nhập</h1>
                                <input type="email" placeholder="Email" />
                                <input type="password" placeholder="Mật khẩu" />
                                <span>
                                    <Link to={ROUTERS.USER.FORGETPASS} className="link">Quên mật khẩu</Link>
                                </span>
                                <button type="button" onClick={handleSignIn}>Đăng nhập</button>
                            </form>
                        </div>

                        {/* Overlay Container */}
                        <div className="overlay-container">
                            <div className="overlay">
                                <div className="overlay-panel overlay-left">
                                    <h1>Welcome Back!</h1>
                                    <p>Hãy kết nối với chúng tôi để cập nhật những thông tin mới nhất và các chương trình hấp dẫn từ Let's Cafe</p>
                                    <button className="ghost" onClick={handleSignInClick}>Đăng nhập</button>
                                </div>
                                <div className="overlay-panel overlay-right">
                                    <h1>Welcome to Let's Cafe</h1>
                                    <p>Form farm to cup</p>
                                    <button className="ghost" onClick={handleSignUpClick}>Đăng kí</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Loginpage;
