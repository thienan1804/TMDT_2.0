import HomePage from "../presentations/pages/Home/HomePage";
import LoginPage from "../presentations/pages/Login/LoginPage";

const publicRoutes = [{ path: "/login", component: LoginPage }];

const privateRoutes = [{ path: "/", component: HomePage }];

export { privateRoutes, publicRoutes };
