import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { changeNavTitle } from '../../actions/common';

const Dashboard = (props) => {
  const { changeNavTitle: changeNavBarTitle } = props;
  return (
    <div>
      <h5>Welcome to golden eye {changeNavBarTitle({ title: 'account summary' })}</h5>
    </div>
  );
};

Dashboard.propTypes = {
  changeNavTitle: PropTypes.func.isRequired
};

export default connect(null, { changeNavTitle })(Dashboard);