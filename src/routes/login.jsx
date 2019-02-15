// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";

// core components/views
import DashboardPage from "../views/Dashboard/Dashboard.jsx";


const login = [
  {
    path: "/dashboard",
    sidebarName: "Dashboard",
    // navbarName: "Belgrade Senior Center",
    icon: Dashboard,
    component: DashboardPage
  },  
  { 
    redirect: true, 
    path: "/", 
    to: "/dashboard", 
    // navbarName: "Redirect" 
  }
];

export default login;
