// RouterCustom.js
import { ROUTERS } from "./utils/router";
import Homepage from "./views/user/Homepage";
import Aboutpage from "./views/user/About";
import MasterLayout from "./views/user/theme/masterLayout";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Storepage from "views/user/Storepage";
import Storypage from "views/user/Storypage";
import Coffeepage from "views/user/Productpage/Coffeepage";
import Coursepage from "views/user/Productpage/Coursepage";
import Providepage from "views/user/Productpage/Providepage";
import Loginpage from "views/user/Loginpage";
import Forgetpass from "views/user/Forgetpassword";
import ProfilePage from "views/user/Profile";

const RenderUserRouter = () => {
    const userRouters = [
        { path: ROUTERS.USER.HOME, component: <Homepage /> },
        { path: ROUTERS.USER.ABOUT, component: <Aboutpage/> },
        { path: ROUTERS.USER.STORE, component: <Storepage/> },
        { path: ROUTERS.USER.STORY, component: <Storypage/> },
        { path: ROUTERS.USER.COFFEE, component: <Coffeepage/> },
        { path: ROUTERS.USER.COURSE, component: <Coursepage/> },
        { path: ROUTERS.USER.PROVIDE, component: <Providepage/> },
        { path: ROUTERS.USER.LOGIN, component: <Loginpage/> },
        { path: ROUTERS.USER.FORGETPASS, component: <Forgetpass/> },
        {path: ROUTERS.USER.PROFILE, component: <ProfilePage/>}
    ];  

    return (
        <Router>
            <MasterLayout>
                <Routes>
                    {userRouters.map((item, key) => (
                        <Route key={key} path={item.path} element={item.component} />
                    ))}
                </Routes>
            </MasterLayout>
        </Router>
    );
};

const RouterCustom = () => {
    return <RenderUserRouter />;
};

export default RouterCustom;
