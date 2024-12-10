import React, { useState } from 'react';
import './login.scss'; // Import file CSS
import logo from "assets/Lets/logo1-2.png";
import backgroundImage from "assets/Lets/Background3.jpg";
import { ROUTERS } from "utils/router";
import { Link, useNavigate } from "react-router-dom";

const Loginpage = () => {
    const [isRightPanelActive, setIsRightPanelActive] = useState(false);
    const [email, setEmail] = useState(""); 
    const navigate = useNavigate();

    const handleSignUpClick = () => {
        setIsRightPanelActive(true);
    };

    const handleSignInClick = () => {
        setIsRightPanelActive(false);
    };

    const handleSignUp = async (event) => {
        event.preventDefault(); 
        const email = document.querySelector(".form-1 input[type='email']").value;
        const password = document.querySelector(".form-1 input[type='password']").value;

        if (!email || !password) {
            alert("Email và mật khẩu không được để trống!");
            return;
        }

        try {
            const response = await fetch('http://localhost:3001/api/register', {  
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();
            if (response.ok) {
                console.log("Đăng ký thành công", data);
                alert('Đăng ký thành công');
                setIsRightPanelActive(false);  
            } else {
                console.log("Lỗi đăng ký", data);
                alert(data.message || 'Đăng ký thất bại');
            }
        } catch (error) {
            console.log("Lỗi kết nối API", error);
            alert('Có lỗi xảy ra, vui lòng thử lại!');
        }
    };

    const handleSignIn = async (event) => {
        event.preventDefault(); 

        const email = document.querySelector(".form-2 input[type='email']").value;
        const password = document.querySelector(".form-2 input[type='password']").value;
    
        if (!email || !password) {
            alert("Email và mật khẩu không được để trống!");
            return;
        }
    
        try {
            const response = await fetch('http://localhost:3001/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });
    
            const data = await response.json();
    
            if (response.ok) {
                if (data?.token) {
                    localStorage.setItem("token", data.token);
                    localStorage.setItem("userEmail", email); // Lưu email vào localStorage
                    setEmail(email); 
                    alert("Đăng nhập thành công!");
                
                    const redirectPath = localStorage.getItem('redirectPath');
                    if (redirectPath) {
                        navigate(redirectPath); // Điều hướng tới profile nếu có URL lưu
                        localStorage.removeItem('redirectPath');
                    } else {
                        navigate('/homepage');
                    }
                } else {
                    alert('Không tìm thấy token!');
                }
            } else {
                alert(data.message || 'Email hoặc mật khẩu không đúng');
            }
        } catch (error) {
            console.error("Lỗi kết nối API", error);
            alert('Không thể kết nối đến máy chủ. Vui lòng thử lại sau!');
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
                        {/* Signup form */}
                        <div className="form-container sign-up-container">
                            <form className='form-1' onSubmit={handleSignUp}>
                                <div className="social-container">
                                    <img className="imglogo" src={logo} alt="Logo" width="90" height="80" />
                                </div>
                                <h1>Đăng kí tài khoản</h1>
                                <input type="email" placeholder="Email" />
                                <input type="password" placeholder="Mật khẩu" />
                                <button type="submit">Đăng ký</button>
                            </form>
                        </div>

                        {/* Signin form */}
                        <div className="form-container sign-in-container">
                            <form className='form-2' onSubmit={handleSignIn}>
                                <div className="logo">
                                    <img className="imglogo" src={logo} alt="Logo" width="90" height="80" />
                                </div>
                                <h1>Đăng nhập</h1>
                                <input type="email" placeholder="Email" />
                                <input type="password" placeholder="Mật khẩu" />
                                <span>
                                    <Link to={ROUTERS.USER.FORGETPASS} className="link">Quên mật khẩu</Link>
                                </span>
                                <button type="submit">Đăng nhập</button>
                            </form>
                        </div>

                        {/* Overlay for switching between forms */}
                        <div className="overlay-container">
                            <div className="overlay">
                                <div className="overlay-panel overlay-left">
                                    <h1>Welcome Back!</h1>
                                    <p>Hãy kết nối với chúng tôi để cập nhật những thông tin mới nhất và các chương trình hấp dẫn từ Let's Cafe</p>
                                    <button className="ghost" onClick={handleSignInClick}>Đăng nhập</button>
                                </div>
                                <div className="overlay-panel overlay-right">
                                    <h1>Welcome to Let's Cafe</h1>
                                    <p>From farm to cup</p>
                                    <button className="ghost" onClick={handleSignUpClick}>Đăng kí</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Display the user's email after login */}
            {email && (
                <div className="user-info">
                    <p>
                        Chào mừng <Link to="/profile" className="profile-link">{email}</Link>
                    </p>
                </div>
            )}
        </div>
    );
};

export default Loginpage;
