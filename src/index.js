import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router-dom';

// Admin Pages
import AdminLoginPage from './pages/Admin/AdminLoginPage/AdminLoginPage.jsx'
import AdminDashboardPage from './pages/Admin/AdminSidebar/AdminDashboardPage/AdminDashboardPage.jsx'
import AdminEventsPage from './pages/Admin/AdminSidebar/AdminEventsPage/AdminEventsPage.jsx'
import AdminServicesPage from './pages/Admin/AdminSidebar/AdminServicesPage/AdminServicesPage.jsx'
import AdminMembersPage from './pages/Admin/AdminSidebar/AdminMembersPage/AdminMembersPage.jsx'
import AdminStaffPage from './pages/Admin/AdminSidebar/AdminStaffPage/AdminStaffPage.jsx'
import AdminSearchPage from './pages/Admin/AdminSidebar/AdminSearchPage/AdminSearchPage.jsx'
import AdminFilterPage from './pages/Admin/AdminSidebar/AdminFilterPage/AdminFilterPage.jsx'
import AdminFormsPage from './pages/Admin/AdminSidebar/AdminFormsPage/AdminFormsPage.jsx'

// Volunteer Pages
// import VolunteerDashboardPage from ...
// import VolunteerLoginPage from ...

// Event Checkin Pages
// import SignInPage from ...
// import EventsPage from ...

// Home Page
import HomePage from './pages/HomePage/HomePage.jsx';

import "./assets/css/material-dashboard-react.css";

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      {/* Admin pages */}
      <Route path="/admin-login" component={AdminLoginPage} />
      <Route path="/admin-dashboard" component={AdminDashboardPage} />
      <Route path="/admin-events" component={AdminEventsPage} />
      <Route path="/admin-services" component={AdminServicesPage} />
      <Route path="/admin-members" component={AdminMembersPage} />
      <Route path="/admin-staff" component={AdminStaffPage} />
      <Route path="/admin-search" component={AdminSearchPage} />
      <Route path="/admin-filter" component={AdminFilterPage} />
      <Route path="/admin-forms" component={AdminFormsPage} />

      {/* Volunteer Pages */}
      {/* <Route path="/volunteer-login" component={VolunteerLoginPage} /> */}
      {/* <Route path="/volunteer-dashboard" component={VolunteerDashboardPage} /> */}

      {/* Event Checkin Pages */}
      {/* <Route path="/events" component={EventsPage} /> */}
      {/* <Route path="/sign-in" component={SignInPage} /> */}

      {/* Home Page */}
      <Route path="/" component={HomePage} />

    </Switch>
  </Router>,
  document.getElementById("root")
);