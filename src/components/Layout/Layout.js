import React from 'react';
import PropTypes from 'prop-types';
import { renderRoutes } from 'react-router-config';
import { NavLink } from 'react-router-dom';
import './Layout.scss';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { logout } from '../../actions/auth';

const Layout = ({ route, isAuthenticated, logout: logoutFunc }) => (
  <div>
    <Header />
    <NavLink to='/' activeClassName="is-active">Home</NavLink>
    {isAuthenticated ? <button type='button' onClick={logoutFunc}>Logout</button> : <NavLink to='/login' activeClassName="is-active">Login</NavLink>}
    {/* <NavLink to='/signup' activeClassName="is-active">Signup</NavLink> */}
    {renderRoutes(route.routes)}
    <Footer />
  </div>
);

Layout.propTypes = {
  route: PropTypes.shape({ routes: PropTypes.array.isRequired }).isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.user.token
  };
}

export default connect(mapStateToProps, { logout })(Layout);
