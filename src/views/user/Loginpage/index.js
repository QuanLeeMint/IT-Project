import React, { useState }from 'react';
import './login.scss'; // Import the CSS file
import logo from "assets/Lets/logo1-2.png"
import backgroundImage from "assets/Lets/Background3.jpg"
import { ROUTERS } from "utils/router";
import { Link } from "react-router-dom";
const Loginpage = () => {
    const [isRightPanelActive, setIsRightPanelActive] = useState(false);

    const handleSignUpClick = () => {
        setIsRightPanelActive(true);  
    };

    const handleSignInClick = () => {
        setIsRightPanelActive(false);
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
                                <button type="button">Đăng ký</button>
                            </form>
                        </div>

                        {/* Sign In Container */}
                        <div className="form-container sign-in-container">
                            <form className='form-2'>
                                <div className="social-container">
                                    <img className="imglogo" src={logo} alt="Logo" width="90" height="80" />
                                </div>
                                <h1>Đăng nhập</h1>
                                
                                <input type="email" placeholder="Email" />
                                <input type="password" placeholder="Mật khẩu" />
                                <span>
                                    <Link to={ROUTERS.USER.FORGETPASS} className="link">Quên mật khẩu</Link>
                                </span>
                                <button type="button">Đăng nhập</button>
                            </form>
                        </div>

                        {/* Overlay Container */}
                        <div className="overlay-container">
                            <div className="overlay">
                                <div className="overlay-panel overlay-left">
                                    <h1>Welcome Back!</h1>
                                    <p>Hãy kết nối với chúng tôi để cập nhập những thông tin mới nhất và các chương trình hấp dẫn từ Let's Cafe</p>
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
