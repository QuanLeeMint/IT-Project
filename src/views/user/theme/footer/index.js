import { memo } from "react";
import "./style.scss";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { BsTwitter, BsFacebook, BsYoutube, BsLinkedin } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ROUTERS } from "utils/router";

const Footer = () => {
    const [menu, setMenu] = useState([
        {
            name: "Trang chủ",
            path: ROUTERS.USER.HOME,
        },
        {
            name: "Về chúng tôi",
            path: ROUTERS.USER.ABOUT,
        },
        {
            name: "Hệ thống của hàng",
            path: ROUTERS.USER.STORE,
        },
        {
            name: "Câu chuyện thương hiệu",
            path: ROUTERS.USER.STORY,
        },
        {
            name: "Sản phẩm",
            path: ROUTERS.USER.PRODUCT,
            isShowSubmenu: false,
            child: [
                {
                    name: "Cung cấp cà phê",
                    path: ROUTERS.USER.POVIDE,
                },
                {
                    name: "Khóa học",
                    path: ROUTERS.USER.COURSE,
                },
                {
                    name: "Sản phẩm bán lẻ",
                    path: ROUTERS.USER.COFFEE,
                },
            ],
        },
    ]);

    const [activeMenu, setActiveMenu] = useState(null);

    const toggleSubMenu = (index) => {
        setActiveMenu(activeMenu === index ? null : index);
    };

    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    {/* Địa chỉ */}
                    <div className="col-lg-3 col-md-6 col-sm-4 footer-address">
                        <h2>Address</h2>
                        <ul>
                            <li><FaMapMarkerAlt /> 1, Lê Duẩn Street, Thành phố HCM, Việt Nam</li>
                            <li><FaPhoneAlt /> +84 908842985</li>
                            <li><FaEnvelope /> Letscafe@gmail.com</li>
                            <li className="social-icons">
                                <a href="#"><BsTwitter /></a>
                                <a href="https://www.facebook.com/Congtyletscafe"><BsFacebook /></a>
                                <a href="#"><BsYoutube /></a>
                                <a href="#"><BsLinkedin /></a>
                            </li>
                        </ul>
                    </div>

                    {/* Giờ làm việc */}
                    <div className="col-lg-3 col-md-6 col-sm-4 footer-hours">
                        <h2>Working Hours</h2>
                        <ul>
                            <li>Monday - Friday: 8 AM - 8 PM</li>
                            <li>Saturday: 9 AM - 5 PM</li>
                            <li>Sunday: Closed</li>
                        </ul>
                    </div>

                    {/* Liên kết nhanh */}
                    <div className="col-lg-3 col-md-6 col-sm-4 footer-links">
                        <h2>Quick Links</h2>
                        <ul>
                            {menu.map((item, index) => (
                                <li
                                    key={index}
                                    onMouseEnter={() => item.child && setActiveMenu(index)} // Hiện submenu khi di chuột vào
                                    onMouseLeave={() => item.child && setActiveMenu(null)} // Ẩn submenu khi chuột ra
                                >
                                    <Link to={item.path}>
                                        {item.name}
                                        {item.child && <span className={`arrow ${activeMenu === index ? 'open' : ''}`}>▼</span>}
                                    </Link>
                                    {/* Kiểm tra và render submenu nếu có */}
                                    {item.child && activeMenu === index && (
                                        <ul className="submenu">
                                            {item.child.map((subItem, subIndex) => (
                                                <li key={subIndex}>
                                                    <Link to={subItem.path}>{subItem.name}</Link>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Bản tin */}
                    <div className="col-lg-3 col-md-6 col-sm-12 footer-subscription">
                        <h2>Newsletter</h2>
                        <p>Sign up to receive updates and special offers</p>
                        <input type="email" placeholder="Enter your email" />
                        <button>Subscribe</button>
                    </div>
                </div>
            </div>
            <div className="back-to-top">
                <a href="#top">↑</a>
            </div>
        </footer>
    );
};

export default memo(Footer);
