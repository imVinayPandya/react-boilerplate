import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
// import { renderRoutes } from 'react-router-config';
import { connect } from 'react-redux';
import { NavLink, Redirect } from 'react-router-dom';

class HomePage extends PureComponent {
  render() {
    const { isAuthenticated } = this.props;
    return (
      <div>
        <h1> Loading... </h1>
        {isAuthenticated ? <Redirect to='/dashboard' /> : <Redirect to='/login' />}
        {/* {renderRoutes(route.routes)} */}
      </div>
    );
  }
}

HomePage.propTypes = {
  // route: PropTypes.shape({ routes: PropTypes.array.isRequired }).isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  // logout: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.user.token
  };
}

export default connect(mapStateToProps)(HomePage);