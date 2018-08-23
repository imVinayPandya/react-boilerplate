import React from 'react';
import { NavLink } from 'react-router-dom';

const Login = () => (
  <div>
    <h5>Login here</h5>
    <NavLink to='/signup' activeClassName="is-active"> Signup </NavLink>
    <NavLink to='/'> Home </NavLink>
  </div>
);

export default Login;