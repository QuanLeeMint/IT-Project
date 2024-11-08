import { memo } from "react";
import { useLocation } from "react-router-dom";
import Header from "../header";
import Footer from "../footer";

const MasterLayout = ({ children, ...props }) => {
    const location = useLocation();
    const isLoginPage = location.pathname === '/login'; // Kiểm tra nếu là trang đăng nhập

    return (
        <div {...props}>
            {/* Chỉ hiển thị Header nếu không phải là trang đăng nhập */}
            {!isLoginPage && <Header />}
            
            {children}
            
            {/* Chỉ hiển thị Footer nếu không phải là trang đăng nhập */}
            {!isLoginPage && <Footer />}
        </div>
    );
};

export default memo(MasterLayout);
