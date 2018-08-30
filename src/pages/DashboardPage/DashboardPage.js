import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { changeNavTitle } from '../../actions/common';

class Dashboard extends Component {
  componentWillMount() {
    const { changeNavTitle: changeNavBarTitle, commonData: common } = this.props;
    changeNavBarTitle({ ...common, title: 'assets details' });
  }

  render() {
    return (
      <div>
        <h5>Welcome to golden eye</h5>
      </div>
    );
  }
}

Dashboard.propTypes = {
  changeNavTitle: PropTypes.func.isRequired,
  commonData: PropTypes.shape({
    title: PropTypes.string
  }).isRequired
};

function mapStateToProps(state) {
  return {
    commonData: state.common
  };
}

export default connect(mapStateToProps, { changeNavTitle })(Dashboard);