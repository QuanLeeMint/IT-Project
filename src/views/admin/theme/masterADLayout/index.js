import { memo } from "react";
import Footer from "views/admin/common/footer";
import HeaderAD from "views/admin/theme/headerAD"
const MasterADLayout = ({ children, ...props }) => {
    return (
        <div {...props}>
            {/* Chỉ hiển thị Header nếu không phải là trang đăng nhập hoặc quên mật khẩu */}
            {<HeaderAD/>}
            
            {children}
            
            {/* Chỉ hiển thị Footer nếu không phải là trang đăng nhập hoặc quên mật khẩu */}
            {<Footer />}
        </div>
    );
};

export default memo(MasterADLayout);
