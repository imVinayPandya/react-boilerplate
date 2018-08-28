import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { renderRoutes } from 'react-router-config';
import { NavLink } from 'react-router-dom';
import './Layout.scss';
import { connect } from 'react-redux';
import Sidebar from 'react-sidebar';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { logout } from '../../actions/auth';

const mql = window.matchMedia('(min-width: 800px)');

const style = {
  sidebar: {
    width: 256,
    height: '100%'
  }
};

class Layout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sidebarDocked: mql.matches,
      sidebarOpen: false
    };

    this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  componentWillMount() {
    mql.addListener(this.mediaQueryChanged);
  }

  componentWillUnmount() {
    mql.removeListener(this.mediaQueryChanged);
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }

  mediaQueryChanged() {
    this.setState({ sidebarDocked: mql.matches, sidebarOpen: false });
  }

  render() {
    const { isAuthenticated, logout: logoutFunc, route } = this.props;
    const { sidebarOpen, sidebarDocked } = this.state;
    return (
      <div>
        {/* this is sidebar */}
        <Sidebar
          styles={style}
          sidebar={<b>Sidebar content</b>}
          open={sidebarOpen}
          docked={sidebarDocked}
          onSetOpen={this.onSetSidebarOpen}
        >
          {/* this is header */}
          <Header />

          {/* this is main content */}
          <div className='container-fluid'>

            <NavLink to='/' activeClassName="is-active">Home</NavLink>
            {isAuthenticated ? <button type='button' onClick={logoutFunc}>Logout</button> : <NavLink to='/login' activeClassName="is-active">Login</NavLink>}

            {renderRoutes(route.routes)}
          </div>

          {/* this is footer */}
          <Footer />

        </Sidebar>

      </div>
    );
  }

}

Layout.propTypes = {
  route: PropTypes.shape({ routes: PropTypes.array.isRequired }).isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.user.token
  };
}

export default connect(mapStateToProps, { logout })(Layout);
