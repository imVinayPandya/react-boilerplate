// import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import DashboardPage from './pages/DashboardPage/DashboardPage';
import LoginPage from './pages/LoginPage/LoginPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
// import App from './App';
import SignupPage from './pages/SignupPage/SignupPage';
import HomePage from './pages/HomePage/HomePage';
import AuthRequired from './hoc/AuthRequired';
import AuthNotRequired from './hoc/AuthNotRequired';
import AssetsDetails from './pages/AssetsDetails/AssetsDetails';

const Routes = [
  {
    component: HomePage,
    path: '/',
    exact: true,
  },
  { component: AuthNotRequired(LoginPage), path: '/login', exact: true },
  { component: AuthNotRequired(SignupPage), path: '/signup', exact: true },
  {
    component: AuthRequired(Layout),
    routes: [
      { component: AuthRequired(DashboardPage), path: '/dashboard', exact: true },
      { component: AuthRequired(AssetsDetails), path: '/asset-details', exact: true },
      { component: AuthRequired(NotFoundPage) }
    ]
  },
  { component: AuthNotRequired(NotFoundPage) }
];

export default Routes;