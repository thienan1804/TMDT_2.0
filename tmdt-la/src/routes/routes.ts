import HomePage from "../presentations/pages/home/HomePage";
import LoginPage from "../presentations/pages/login/LoginPage";

const publicRoutes = [{ path: "/login", component: LoginPage }];

const privateRoutes = [{ path: "/", component: HomePage }];

export { privateRoutes, publicRoutes };
