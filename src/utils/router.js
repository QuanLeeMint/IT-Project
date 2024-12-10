
 export const  ADMIN_PATH = "/admin"
export const ROUTERS = {
    USER:{
        HOME:"/",
        PROFILE:"profile",
        ABOUT:"/about",
        STORY:"/story",
        STORE:"/store",
        PRODUCT:"/product",
        PROVIDE:"/provide",
        COURSE:"/course",
        COFFEE:"/coffee",
        LOGIN:"/login",
        FORGETPASS:"/forgetpass",
        CART:"/cart",
        DETAIL:"/product_detail",
        SUCCESS:"/vnpay_return"
    },

    ADMIN:{
        HOME_AD :`${ADMIN_PATH}/`,
        USER : `${ADMIN_PATH}/user`,
        ORDER : `${ADMIN_PATH}/order`,
        PRODUCT_AD:`${ADMIN_PATH}/product`,
        COURSE_AD:`${ADMIN_PATH}/course`,
        COFFEE_AD:`${ADMIN_PATH}/coffee`,
    }
};