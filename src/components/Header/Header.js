import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem, Badge, Image } from 'react-bootstrap';
import { androidMenu } from 'react-icons-kit/ionicons/androidMenu';
import { iosBell } from 'react-icons-kit/ionicons/iosBell';
import { Icon } from 'react-icons-kit';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';

import './Header.scss';

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
    const { logout: logoutFunc } = this.props;
    return (
      <Navbar fluid>
        <Navbar.Header>
          <Navbar.Brand>
            <Icon icon={androidMenu} size={20} onClick={this.toogleSidebar} />
          </Navbar.Brand>
        </Navbar.Header>

        <Nav>
          <NavItem eventKey={4} className='menu-item'>
            <div>
              <span className='menu-header'>Account Summary</span>
              <br />
              <span className='menu-subtitle'>Welcome back Vinay Pandya! Your last login was</span>
            </div>
          </NavItem>
        </Nav>

        <Nav pullRight>
          <NavItem eventKey={1}>
            <Icon icon={iosBell} size={23} style={{ paddingRight: '0px' }} />
            <Badge style={{ border: '#fff 1px solid', top: '-15px', left: '-11px', position: 'relative', background: '#f95a5c', fontSize: '9px', padding: '3px 4px' }}>21</Badge>
          </NavItem>

          <NavItem eventKey={2} className='menu-item'>
            <Image width={30} height={30} src="https://images.unsplash.com/profile-1532218907284-ff3cb028976d?dpr=1&auto=format&fit=crop&w=128&h=128&q=60&crop=faces&bg=fff" circle alt='hello' />
          </NavItem>

          <NavDropdown eventKey={3} style={{ fontWeight: 600 }} title="Vinay Pandya" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}>Action</MenuItem>
            <MenuItem eventKey={3.2}>Another action</MenuItem>
            <MenuItem eventKey={3.3}>Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.4} onClick={logoutFunc}>Logout</MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar>
    );
  }
};

Header.propTypes = {
  toogleSidebar: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.user.token
  };
}

export default connect(mapStateToProps, { logout })(Header);