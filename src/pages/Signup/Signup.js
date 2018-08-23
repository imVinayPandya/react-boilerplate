import React from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import SignupForm from '../../components/SignupForm/SignupForm';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='container'>
        <Grid>
          <Row>
            <Col md={6} mdOffset={3}>
              <SignupForm />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Signup;