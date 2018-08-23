import React from 'react';
import { renderRoutes } from 'react-router-config';
import { NavLink } from 'react-router-dom';
import './Layout.scss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Layout = ({ route }) => {
  return (
    <div>
      <Header />
      <NavLink to='/' activeClassName="is-active">Home</NavLink>
      <NavLink to='/login' activeClassName="is-active">Login</NavLink>
      <NavLink to='/registration' activeClassName="is-active">Registration</NavLink>
      {renderRoutes(route.routes)}
      <Footer />
    </div>
  );
};
export default Layout;
