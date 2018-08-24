import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LoginForm from '../../components/LoginForm/LoginForm';
import { login } from '../../actions/auth';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.hanldeLogin = this.hanldeLogin.bind(this);
  }

  hanldeLogin(data) {
    const { login: loginProp, history } = this.props;
    return loginProp(data).then(() => history.push('/'));
  }

  render() {
    return (
      <div className='container'>
        <Grid>
          <Row>
            <Col md={4} mdOffset={4}>
              <LoginForm onLogin={this.hanldeLogin} />
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