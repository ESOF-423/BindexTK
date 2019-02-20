import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { MainElement } from '../index.jsx';
import AdminLoginPage from '../pages/Admin/AdminLoginPage/AdminLoginPage.jsx';
import AdminDashboardPage from '../pages/Admin/AdminSidebar/AdminDashboardPage/AdminDashboardPage.jsx';
import AdminEventsPage from '../pages/Admin/AdminSidebar/AdminEventsPage/AdminEventsPage.jsx';
import AdminFilterPage from '../pages/Admin/AdminSidebar/AdminFilterPage/AdminFilterPage.jsx';
import AdminFormsPage from '../pages/Admin/AdminSidebar/AdminFormsPage/AdminFormsPage.jsx';
import AdminMembersPage from '../pages/Admin/AdminSidebar/AdminMembersPage/AdminMembersPage.jsx';
import AdminSearchPage from '../pages/Admin/AdminSidebar/AdminSearchPage/AdminSearchPage.jsx';
import AdminServicesPage from '../pages/Admin/AdminSidebar/AdminServicesPage/AdminServicesPage.jsx';
import AdminStaffPage from '../pages/Admin/AdminSidebar/AdminStaffPage/AdminStaffPage.jsx';
import HomePage from '../pages/HomePage/HomePage.jsx';

it('shallow renders router without exploding', () => {
  const renderer = new ShallowRenderer();
  renderer.render(React.createElement(MainElement));
});

it('shallow renders HomePage without exploding', () => {
  const renderer = new ShallowRenderer();
  renderer.render(React.createElement(HomePage));
});

it('shallow renders AdminLoginPage without exploding', () => {
  const renderer = new ShallowRenderer();
  renderer.render(React.createElement(AdminLoginPage));
});

it('shallow renders AdminDashboardPage without exploding', () => {
  const renderer = new ShallowRenderer();
  renderer.render(React.createElement(AdminDashboardPage));
});

it('shallow renders AdminEventsPage without exploding', () => {
  const renderer = new ShallowRenderer();
  renderer.render(React.createElement(AdminEventsPage));
});

it('shallow renders AdminFilterPage without exploding', () => {
  const renderer = new ShallowRenderer();
  renderer.render(React.createElement(AdminFilterPage));
});

it('shallow renders AdminFormsPage without exploding', () => {
  const renderer = new ShallowRenderer();
  renderer.render(React.createElement(AdminFormsPage));
});

it('shallow renders AdminMembersPage without exploding', () => {
  const renderer = new ShallowRenderer();
  renderer.render(React.createElement(AdminMembersPage));
});

it('shallow renders AdminSearchPage without exploding', () => {
  const renderer = new ShallowRenderer();
  renderer.render(React.createElement(AdminSearchPage));
});

it('shallow renders AdminServicesPage without exploding', () => {
  const renderer = new ShallowRenderer();
  renderer.render(React.createElement(AdminServicesPage));
});

it('shallow renders AdminStaffPage without exploding', () => {
  const renderer = new ShallowRenderer();
  renderer.render(React.createElement(AdminStaffPage));
});