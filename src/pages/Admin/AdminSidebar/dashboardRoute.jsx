// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/Description";
import SearchOutlined from "@material-ui/icons/SearchOutlined";
import Event from "@material-ui/icons/Event";
import Service from "@material-ui/icons/RoomService";
import People from "@material-ui/icons/People"
import FilterList from "@material-ui/icons/FilterList";

// core components/views
import DashboardPage from "./AdminDashboardPage/Dashboard.jsx";
import Events from "./AdminEventsPage/Events.jsx";
import Services from "./AdminServicesPage/Services.jsx";
import Members from "./AdminMembersPage/Members.jsx";
import Staff from "./AdminStaffPage/Staff.jsx";
import Search from "./AdminSearchPage/Search.jsx";
import Filter from "./AdminFilterPage/Filter.jsx";
import Forms from "./AdminFormsPage/Forms.jsx";

const dashboardRoutes = [
  {
    path: "/admin-dashboard",
    sidebarName: "Dashboard",
    navbarName: "Dashboard",
    icon: Dashboard,
    component: DashboardPage
  },
  {
    path: "/admin-events",
    sidebarName: "Events",
    navbarName: "Events",
    icon: Event,
    component: Events
  },
  {
    path: "/admin-services",
    sidebarName: "Services",
    navbarName: "Services",
    icon: Service,
    component: Services
  },
  {
    path: "/admin-members",
    sidebarName: "Members",
    navbarName: "Members",
    icon: People,
    component: Members
  },
  {
    path: "/admin-staff",
    sidebarName: "Staff",
    navbarName: "Staff",
    icon: Person,
    component: Staff
  },
  {
    path: "/admin-search",
    sidebarName: "Search",
    navbarName: "Search",
    icon: SearchOutlined,
    component: Search
  },
  {
    path: "/admin-filter",
    sidebarName: "Filter",
    navbarName: "Filter",
    icon: FilterList,
    component: Filter
  },
  {
    path: "/admin-forms",
    sidebarName: "Forms",
    navbarName: "Forms",
    icon: LibraryBooks,
    component: Forms
  // },
  // { 
  //   redirect: true, 
  //   path: "/", 
  //   to: "/dashboard", 
  //   navbarName: "Redirect" 
  }
];

export default dashboardRoutes;
