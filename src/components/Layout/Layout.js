import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { renderRoutes } from 'react-router-config';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import Sidebar from 'react-sidebar';
import { withBaseIcon } from 'react-icons-kit';

import { clipboard } from 'react-icons-kit/ionicons/clipboard';
import { documentText } from 'react-icons-kit/ionicons/documentText';
import { handOUp } from 'react-icons-kit/fa/handOUp';
import { bank } from 'react-icons-kit/fa/bank';
import { plus } from 'react-icons-kit/fa/plus';
import { infoCircle } from 'react-icons-kit/fa/infoCircle';
import { chatboxes } from 'react-icons-kit/ionicons/chatboxes';
import { paperPlaneO } from 'react-icons-kit/fa/paperPlaneO';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { logout } from '../../actions/auth';

import './Layout.scss';

const mql = window.matchMedia('(min-width: 800px)');

const SideNavIcon =
  withBaseIcon({ size: 20, style: { verticalAlign: 'middle' } });

const sideNavStyles = {
  sidebar: {
    width: 200,
    height: '100%',
    backgroundColor: '#282c45'
  },
  header: {
    color: '#858697',
    padding: '14px',
    textTransform: 'uppercase',
    fontSize: '12px'
  },
  paddingBottom: {
    paddingBottom: '15px'
  },
  sidebarLink: {
    display: 'block',
    // padding: '16px 0px',
    padding: '10px 0 10px 12px',
    textDecoration: 'none',
    fontSize: '12px'
    // color: '#858697'
  },
  divider: {
    margin: '8px 0',
    height: 1,
    backgroundColor: '#3c4361'
  },
  content: {
    // padding: '16px',
    // height: '100%',
    // backgroundColor: 'white'
  },
  footer: {
    fontSize: '8px',
    lineHeight: '1px',
    textAlign: 'center'
  }
};

class Layout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sidebarDocked: mql.matches,
      open: mql.matches,
      styles: sideNavStyles
    };

    this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    this.toogleSidebar = this.toogleSidebar.bind(this);
  }

  componentWillMount() {
    mql.addListener(this.mediaQueryChanged);
  }

  componentWillUnmount() {
    mql.removeListener(this.mediaQueryChanged);
  }

  onSetSidebarOpen(open) {
    this.setState({ open });
  }

  toogleSidebar() {
    this.setState((prevState) => {
      let { open, sidebarDocked } = prevState;
      open = !open;
      if (mql.matches === false) {
        sidebarDocked = false;
      } else {
        sidebarDocked = open === true;
      }
      return { open, sidebarDocked };
    });
  }

  mediaQueryChanged() {
    this.setState({ sidebarDocked: mql.matches, open: false });
  }

  render() {
    const { isAuthenticated, logout: logoutFunc, route } = this.props;

    const { open, sidebarDocked, styles } = this.state;

    const accountLinks = [
      <NavLink key="dashboard" to='/dashboard' activeClassName='sidenav-link-active' style={styles.sidebarLink}>
        <SideNavIcon icon={clipboard} />&nbsp;&nbsp;
        Account Summary
      </NavLink>,
      <NavLink key='other' to='/asset-details' activeClassName='sidenav-link-active' style={styles.sidebarLink}>
        <SideNavIcon icon={documentText} />&nbsp;&nbsp;&nbsp;
          Assets Details
      </NavLink>
    ];

    const transactionLinks = [
      <NavLink key="add-funds" to='/add-funds' activeClassName='sidenav-link-active' style={styles.sidebarLink}>
        <SideNavIcon icon={plus} />&nbsp;&nbsp;
        Add Funds
      </NavLink>,
      <NavLink key="withdraw-funds" to='/withdraw-funds' activeClassName='sidenav-link-active' style={styles.sidebarLink}>
        <SideNavIcon icon={handOUp} />&nbsp;&nbsp;
        Withdraw Funds
      </NavLink>,
      <NavLink key='add-bank-account' to='/add-bank-account' activeClassName='sidenav-link-active' style={styles.sidebarLink}>
        <SideNavIcon icon={bank} size={17} />&nbsp;&nbsp;&nbsp;
        Add Bank Account
      </NavLink>,
      <NavLink key='transaction-info' to='/transaction-info' activeClassName='sidenav-link-active' style={styles.sidebarLink}>
        <SideNavIcon icon={infoCircle} />&nbsp;&nbsp;&nbsp;
        Transaction Info
      </NavLink>
    ];

    const serviceLinks = [
      <NavLink key="account-statement" to='/account-statements' activeClassName='sidenav-link-active' style={styles.sidebarLink}>
        <SideNavIcon icon={documentText} />&nbsp;&nbsp;
        Account Statements
      </NavLink>,
      <NavLink key='faq' to='/faq' activeClassName='sidenav-link-active' style={styles.sidebarLink}>
        <SideNavIcon icon={chatboxes} />&nbsp;&nbsp;&nbsp;
          FAQ
      </NavLink>,
      <NavLink key='contact-us' to='/contact-us' activeClassName='sidenav-link-active' style={styles.sidebarLink}>
        <SideNavIcon icon={paperPlaneO} size={17} />&nbsp;&nbsp;&nbsp;
          Contact Us
      </NavLink>
    ];

    return (
      <div>
        {/* this is sidebar */}
        <Sidebar
          sidebarClassName='nav-sidebar-content'
          styles={styles}
          sidebar={(
            <div style={styles.content}>
              <a href="/" style={styles.sidebarLink}>
                Save Simply
              </a>

              <div style={styles.divider} />
              <div style={styles.header}>Accounts</div>
              {accountLinks}
              <div style={styles.paddingBottom} />

              <div style={styles.divider} />
              <div style={styles.header}>Transactions</div>
              {transactionLinks}
              <div style={styles.paddingBottom} />

              <div style={styles.divider} />
              <div style={styles.header}>Services</div>
              {serviceLinks}
              <div style={styles.paddingBottom} />
              <div style={styles.paddingBottom} />
              <div style={styles.paddingBottom} />

              <div style={styles.footer} className='copyright-footer'>
                <p>© 2018 Save Simply.</p>
                <p>All rights reserved</p>
              </div>
              <div style={styles.paddingBottom} />
              <div style={styles.paddingBottom} />
              <div style={styles.paddingBottom} />

            </div>
          )}
          open={open}
          docked={sidebarDocked}
          onSetOpen={this.onSetSidebarOpen}
        >

          {/* this is header */}
          <Header toogleSidebar={this.toogleSidebar} />

          {/* this is main content */}
          <div className='container-fluid'>

            {/* {isAuthenticated ? <button type='button' onClick={logoutFunc}>Logout</button> : <NavLink to='/login' activeClassName="is-active">Login</NavLink>} */}

            {renderRoutes(route.routes)}
          </div>

          {/* this is footer */}
          {/* <Footer /> */}

        </Sidebar>

      </div>
    );
  }

}

Layout.propTypes = {
  route: PropTypes.shape({ routes: PropTypes.array.isRequired }).isRequired,
  // isAuthenticated: PropTypes.bool.isRequired,
  // logout: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.user.token
  };
}

export default connect(mapStateToProps, { logout })(Layout);
