import Dashboard from "../layouts/DashboardLayout/DashboardLayout.jsx";
import LoginPage from "../layouts/LoginLayout/LoginLayout.jsx";

const indexRoutes = [
  { path: "/login", component: LoginPage, name: LoginPage },
  { path: "/dashboard", component: Dashboard, name: Dashboard }
];

export default indexRoutes;
