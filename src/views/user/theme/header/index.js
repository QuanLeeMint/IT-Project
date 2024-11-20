import { memo } from "react";
import "./style.scss";
import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import { BiSolidUserCircle } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom"; // Import useLocation
import { CiMail } from "react-icons/ci";
import { formatter } from "utils/format";
import logo from "assets/Lets/logo1-2.png";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useState } from "react";
import { ROUTERS } from "utils/router";

const Header = () => {
    const location = useLocation(); // Lấy đường dẫn hiện tại

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
                    path: ROUTERS.USER.PROVIDE,
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

    return (
        <>
            <div className="header">
                <div className="header-top"> 
                    <div className="container">
                        <div className="row-1">
                            <div className="header-container col-6 header-top-left">
                                <ul>
                                    <li>
                                        <Link to="">
                                            <CiMail />
                                        </Link>
                                        Letscafe@gmail.com
                                    </li>
                                    <li>Vị cà phê quốc dân</li>
                                </ul>
                            </div>
                            <div className="header-container col-6 header-top-right">
                                <ul>
                                    <li>
                                        <Link to="https://www.facebook.com/Congtyletscafe">
                                            <BsFacebook />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="">
                                            <BsInstagram />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="">
                                            <FaTiktok />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="">
                                            <BsYoutube />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={ROUTERS.USER.LOGIN}>
                                            <BiSolidUserCircle />
                                        </Link>
                                        <span>
                                            <Link to={ROUTERS.USER.LOGIN} className="link">Đăng nhập</Link>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="header-logo">
                            <Link to ={ROUTERS.USER.HOME}>
                            <img className="imglogo" src={logo} alt="Logo" width="90" height="80" />
                            </Link>
                                
                            
                        </div>
                        <nav className="header-menu">
                            <ul>
                                {menu.map((menuItem, menuKey) => {
                                    // Kiểm tra xem đường dẫn hiện tại có phải là đường dẫn của menuItem hoặc một trong các đường dẫn con không
                                    const isActive = location.pathname === menuItem.path || 
                                                     (menuItem.child && menuItem.child.some(child => location.pathname === child.path));

                                    return (
                                        <li key={menuKey} className={isActive ? "active" : ""}>
                                            <Link to={menuItem.path}>{menuItem.name}</Link>
                                            {menuItem.child && (
                                                <ul className="header-menu-dropdown">
                                                    {menuItem.child.map((childItem, childKey) => (
                                                        <li key={`${menuKey}-${childKey}`}>
                                                            <Link to={childItem.path}>{childItem.name}</Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </li>
                                    );
                                })}
                            </ul>
                        </nav>
                        <div className="header-cart">
                            <div className="header-cart-price">
                                <span>{formatter(1000000)}</span>
                            </div>
                            <div className="cart-logo">
                                <ul>
                                    <li>
                                        <Link to="#">
                                            <AiOutlineShoppingCart />
                                            <span>5</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default memo(Header);
