import React from 'react';
import { NavLink } from 'react-router-dom';

const Registration = () => (
  <div>
    <h5>Registration here</h5>
    <NavLink to='/login' activeClassName="is-active"> Login </NavLink>
  </div>
);

export default Registration;