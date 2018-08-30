import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { changeNavTitle } from '../../actions/common';

class AssetsDetails extends Component {

  componentWillMount() {
    const { changeNavTitle: changeNavBarTitle, commonData: common } = this.props;
    changeNavBarTitle({ ...common, title: 'assets details' });
  }

  render() {
    return (
      <div>
        <h5>Assets details {}</h5>
      </div>
    );
  }
}

AssetsDetails.propTypes = {
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

export default connect(mapStateToProps, { changeNavTitle })(AssetsDetails);