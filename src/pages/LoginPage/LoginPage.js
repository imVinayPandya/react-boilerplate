import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import LoginForm from '../../components/LoginForm/LoginForm';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.hanldeLogin = this.hanldeLogin.bind(this);
  }

  hanldeLogin(data) {
    console.log(data);
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

export default LoginPage;