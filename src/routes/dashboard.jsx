// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
// import ContentPaste from "@material-ui/icons/ContentPaste";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import Loop from "@material-ui/icons/Loop";
import SearchOutlined from "@material-ui/icons/SearchOutlined";
import CalendarToday from "@material-ui/icons/CalendarToday";
//import Search from "@material-ui/icons/Search";
// core components/views
import DashboardPage from "../views/Dashboard/Dashboard.jsx";
import Events from "../views/Events/Events.jsx";
import Services from "../views/Services/Services.jsx";
import Members from "../views/Members/Members.jsx";
import Staff from "../views/Staff/Staff.jsx";
import Search from "../views/Search/Search.jsx";
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
    path: "/events",
    sidebarName: "Events",
    // navbarName: "sign into events",
    icon: Loop,
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
