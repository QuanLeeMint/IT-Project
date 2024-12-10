import { memo, useState, useEffect } from "react";
import "./style.scss";
import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { CiMail } from "react-icons/ci";
import logo from "assets/Lets/logo1-2.png";
import axios from "axios";
import { ROUTERS } from "utils/router";

const HeaderAD = () => {
  const location = useLocation();

  const [menu] = useState([
    {
      name: "Trang chủ",
      path: ROUTERS.ADMIN.HOME_AD,
    },
    {
      name: "Người dùng",
      path: ROUTERS.ADMIN.USER,
    },
    {
      name: "Sản phẩm",
      path: ROUTERS.ADMIN.PRODUCT_AD,
      isShowSubmenu: false,
      child: [
        {
          name: "Khóa học",
          path: ROUTERS.ADMIN.COURSE_AD,
        },
        {
          name: "Sản phẩm bán lẻ",
          path: ROUTERS.ADMIN.COFFEE_AD,
        },
      ],
    },
    {
      name: "Đơn hàng",
      path: ROUTERS.ADMIN.ORDER,
    },
  ]);

  const [dashboardData, setDashboardData] = useState({
    revenue: 0,
    coffeeBagCount: 0,
    courseCount: 0,
    userCount: 0,
  });

  // Fetch data from backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/admin/dashboard/load');
        if (response.data?.success) {
          setDashboardData({
            revenue: response.data.data?.revenue || 0,
            coffeeBagCount: response.data.data?.coffeeBagCount || 0,
            courseCount: response.data.data?.courseCount || 0,
            userCount: response.data.data?.userCount || 0,
          });
        }
      } catch (error) {
        console.error("Failed to load dashboard data:", error);
      }
    };

    fetchData();
  }, []);

  return (
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
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="header-logo">
            <Link to={ROUTERS.USER.HOME}>
              <img className="imglogo" src={logo} alt="Logo" width="90" height="80" />
            </Link>
          </div>
          <div className="header-dashboard">
            <div className="dashboard-item">
              <div className="content">
                <span className="label">Doanh thu</span>
                <span className="value">{dashboardData.revenue.toLocaleString()} VND</span>
              </div>
            </div>
            <div className="dashboard-item">
              <div className="content">
                <span className="label">Cà phê gói</span>
                <span className="value">{dashboardData.coffeeBagCount}</span>
              </div>
            </div>
            <div className="dashboard-item">
              <div className="content">
                <span className="label">Khóa học</span>
                <span className="value">{dashboardData.courseCount}</span>
              </div>
            </div>
            <div className="dashboard-item">
              <div className="content">
                <span className="label">Người dùng</span>
                <span className="value">{dashboardData.userCount}</span>
              </div>
            </div>
          </div>
          <nav className="header-menu">
            <ul>
              {menu.map((menuItem, menuKey) => {
                const isActive =
                  location.pathname === menuItem.path ||
                  (menuItem.child && menuItem.child.some((child) => location.pathname === child.path));

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
        </div>
      </div>
    </div>
  );
};

export default memo(HeaderAD);
