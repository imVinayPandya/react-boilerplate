import React, { Component } from 'react';
import PropsTypes from 'prop-types';

class Header extends Component {
  constructor(props) {
    super(props);
    this.toogleSidebar = this.toogleSidebar.bind(this);
  }

  toogleSidebar(e) {
    e.preventDefault();
    const { toogleSidebar } = this.props;
    toogleSidebar();
  }

  render() {
    return (
      <div>
        <h3>This is header</h3>
        <button onClick={this.toogleSidebar} type='button'>Toogle Menu</button>
      </div>);
  }
};

Header.propTypes = {
  toogleSidebar: PropsTypes.func.isRequired
};

export default Header;