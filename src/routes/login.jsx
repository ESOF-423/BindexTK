// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";

// core components/views
import DashboardPage from "../views/Dashboard/Dashboard.jsx";
import LoginPage from "../views/LoginPage/LoginPage.jsx";


const login = [
  {
    path: "/dashboard",
    sidebarName: "Dashboard",
    // navbarName: "Belgrade Senior Center",
    icon: Dashboard,
    component: DashboardPage
  },
  {
    path: "/login",
    sidebarName: "Login",
    // navbarName: "Profile",
    icon: Person,
    component: LoginPage
  },  
  { 
    redirect: true, 
    path: "/", 
    to: "/dashboard", 
    // navbarName: "Redirect" 
  }
];

export default login;
