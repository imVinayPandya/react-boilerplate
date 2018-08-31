import React, { Component } from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import LoginForm from '../../components/LoginForm/LoginForm';
import { login } from '../../actions/auth';
import './LoginPage.scss';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.hanldeLogin = this.hanldeLogin.bind(this);
    this.navigateToSignupPage = this.navigateToSignupPage.bind(this);
  }

  hanldeLogin(data) {
    const { login: loginProp, history } = this.props;
    return loginProp(data).then(() => history.push('/dashboard'));
  }

  navigateToSignupPage() {
    const { history } = this.props;
    history.push('/signup');
  }

  render() {
    const { location } = this.props;
    const { search } = location;
    const params = new URLSearchParams(search);
    const isLogout = params.get('logout');

    return (
      <div className='login-page'>
        <Grid>
          <Row>
            <Col md={4} mdOffset={4}>
              <div className='card margin-top'>
                <div className='card-header'>
                  <h4 className='login-header'>
                    {
                      isLogout === '1' ? (
                        <div>
                          <p>You are now logged out.</p>
                          <p>Thank you for using Save Simply!</p>
                        </div>
                      ) : 'SIGN IN TO YOUR ACCOUNT'}
                  </h4>
                </div>
                <div className='card-content'>
                  <LoginForm onLogin={this.hanldeLogin} />
                </div>
                <div className='card-footer login-footer'>
                  <Link to='/forgot-password' className='margin forgot-password'>Forgot your password?</Link>
                  <br />
                  <Button bsStyle='primary' className='margin signup-button' bsSize='large' onClick={this.navigateToSignupPage}>SIGN UP</Button>
                </div>
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

LoginPage.propTypes = {
  login: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};

export default connect(null, { login })(LoginPage);