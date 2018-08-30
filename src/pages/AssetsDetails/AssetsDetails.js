import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { changeNavTitle } from '../../actions/common';

const AssetsDetails = (props) => {
  const { changeNavTitle: changeNavBarTitle } = props;
  return (
    <div>
      <h5>Assets details {changeNavBarTitle({ title: 'assets details' })}</h5>
    </div>
  );
};

AssetsDetails.propTypes = {
  changeNavTitle: PropTypes.func.isRequired
};

export default connect(null, { changeNavTitle })(AssetsDetails);