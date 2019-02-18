// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
//import Loop from "@material-ui/icons/Loop";
import SearchOutlined from "@material-ui/icons/SearchOutlined";
import CalendarToday from "@material-ui/icons/CalendarToday";
import FilterList from "@material-ui/icons/FilterList";

// core components/views
import DashboardPage from "../views/Dashboard/Dashboard.jsx";
import LoginPage from "../views/LoginPage/LoginPage.jsx";
import Events from "../views/Events/Events.jsx";
import Services from "../views/Services/Services.jsx";
import Members from "../views/Members/Members.jsx";
import Staff from "../views/Staff/Staff.jsx";
import Search from "../views/Search/Search.jsx";
import Filter from "../views/Filter/Filter.jsx";
import Forms from "../views/Forms/Forms.jsx";

const dashboardRoutes = [
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
    path: "/events",
    sidebarName: "Events",
    // navbarName: "Table List",
    icon: CalendarToday,
    component: Events
  },
  {
    path: "/services",
    sidebarName: "Services",
    // navbarName: "Table List",
    icon: CalendarToday,
    component: Services
  },
  {
    path: "/members",
    sidebarName: "Members",
    // navbarName: "Members",
    icon: Person,
    component: Members
  },
  {
    path: "/staff",
    sidebarName: "Staff",
    // navbarName: "Staff",
    icon: Person,
    component: Staff
  },
  {
    path: "/search",
    sidebarName: "Search",
    // navbarName: "Search",
    icon: SearchOutlined,
    component: Search
  },
  {
    path: "/filter",
    sidebarName: "Filter",
    // navbarName: "Filter",
    icon: FilterList,
    component: Filter
  },
  {
    path: "/forms",
    sidebarName: "Forms",
    // navbarName: "Forms",
    icon: LibraryBooks,
    component: Forms
  },
  { 
    redirect: true, 
    path: "/", 
    to: "/dashboard", 
    // navbarName: "Redirect" 
  }
];

export default dashboardRoutes;
