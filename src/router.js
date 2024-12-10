import { ROUTERS } from "./utils/router";
import Homepage from "./views/user/homepage";
import Aboutpage from "./views/user/About";
import MasterLayout from "./views/user/theme/masterLayout";
import MasterADLayout from "views/admin/theme/masterADLayout";
import { Routes, Route, useLocation } from 'react-router-dom';
import Storepage from "views/user/Storepage";
import Storypage from "views/user/Storypage";
import Coffeepage from "views/user/Productpage/Coffeepage";
import Coursepage from "views/user/Productpage/Coursepage";
import Providepage from "views/user/Productpage/Providepage";
import Loginpage from "views/user/Loginpage";
import Forgetpass from "views/user/Forgetpassword";
import ProfilePage from "views/user/Profile";
import Cartpage from "views/user/Cart";
import ProductDetail from "views/user/Detail";
import Success from "views/user/Success";
import { ADMIN_PATH } from "./utils/router";
import HomepageAD from "views/admin/homepage";
import Orderpage from "views/admin/order";
import UsersPage from "views/admin/users";
import CoffeepageAD from "views/admin/product/coffee";
import CoursepageAD from "views/admin/product/course";

const RenderUserRouter = () => {
    const userRouters = [
        { path: ROUTERS.USER.HOME, component: <Homepage /> },
        { path: ROUTERS.USER.ABOUT, component: <Aboutpage /> },
        { path: ROUTERS.USER.STORE, component: <Storepage /> },
        { path: ROUTERS.USER.STORY, component: <Storypage /> },
        { path: ROUTERS.USER.COFFEE, component: <Coffeepage /> },
        { path: ROUTERS.USER.COURSE, component: <Coursepage /> },
        { path: ROUTERS.USER.PROVIDE, component: <Providepage /> },
        { path: ROUTERS.USER.LOGIN, component: <Loginpage /> },
        { path: ROUTERS.USER.FORGETPASS, component: <Forgetpass /> },
        { path: ROUTERS.USER.PROFILE, component: <ProfilePage /> },
        { path: ROUTERS.USER.CART, component: <Cartpage /> },
        { path: ROUTERS.USER.DETAIL, component: <ProductDetail /> },
        { path: ROUTERS.USER.SUCCESS, component: <Success /> }
    ];

    return (
        <MasterLayout>
            <Routes>
                {userRouters.map((item, key) => (
                    <Route key={key} path={item.path} element={item.component} />
                ))}
            </Routes>
        </MasterLayout>
    );
};

const RenderAdminRouter = () => {
    const adminRouters = [
        { path: ROUTERS.ADMIN.HOME_AD, component: <HomepageAD /> },
        { path: ROUTERS.ADMIN.USER, component: <UsersPage/> },
        { path: ROUTERS.ADMIN.ORDER, component: <Orderpage/> },
        { path: ROUTERS.ADMIN.COFFEE_AD, component: <CoffeepageAD/> },
        { path: ROUTERS.ADMIN.COURSE_AD, component: <CoursepageAD/> },
    ];

    return (
        <MasterADLayout>
            <Routes>
                {adminRouters.map((item, key) => (
                    <Route key={key} path={item.path} element={item.component} />
                ))}
            </Routes>
        </MasterADLayout>
    );
};

const RouterCustom = () => {
    const location = useLocation();
    const isAdminRouters = location.pathname.startsWith(ADMIN_PATH);

    return isAdminRouters ? <RenderAdminRouter /> : <RenderUserRouter />;
};

export default RouterCustom;
