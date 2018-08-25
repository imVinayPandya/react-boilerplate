import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

export default (ChildComponent) => {
  class AuthRequired extends PureComponent {
    render() {
      const { isAuthenticated } = this.props;
      // console.log(this.props);
      switch (isAuthenticated) {
        case undefined:
        case false:
          return <Redirect to="/login" />;
        case null:
          return <div>Loading</div>;
        default:
          return <ChildComponent {...this.props} />;
      }
    }
  }

  function mapStateToProps(state) {
    return {
      isAuthenticated: !!state.user.token
    };
  }

  return connect(mapStateToProps)(AuthRequired);
};
