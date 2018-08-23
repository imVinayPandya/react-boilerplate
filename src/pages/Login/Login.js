import React from 'react';
import { NavLink } from 'react-router-dom';

const Login = () => (
  <div>
    <h5>Login here</h5>
    <NavLink to='/registration' activeClassName="is-active"> Registration </NavLink>
    <NavLink to='/'> Home </NavLink>
  </div>
);

export default Login;