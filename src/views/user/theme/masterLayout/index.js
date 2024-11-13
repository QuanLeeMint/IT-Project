import { memo } from "react";
import { useLocation } from "react-router-dom";
import Header from "../header";
import Footer from "../footer";

const MasterLayout = ({ children, ...props }) => {
    const location = useLocation();
    const isAuthPage = location.pathname === '/login' || location.pathname === '/forgetpass'; // Kiểm tra nếu là trang đăng nhập hoặc quên mật khẩu

    return (
        <div {...props}>
            {/* Chỉ hiển thị Header nếu không phải là trang đăng nhập hoặc quên mật khẩu */}
            {!isAuthPage && <Header />}
            
            {children}
            
            {/* Chỉ hiển thị Footer nếu không phải là trang đăng nhập hoặc quên mật khẩu */}
            {!isAuthPage && <Footer />}
        </div>
    );
};

export default memo(MasterLayout);
