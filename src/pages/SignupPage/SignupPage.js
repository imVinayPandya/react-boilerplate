import React from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import SignupForm from '../../components/SignupForm/SignupForm';
import './SignupPage.scss';

class SignupPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Grid>
        <Row className="signup-margin-top">
          <Col md={8} mdOffset={2}>
            <div className='card'>
              <div className='card-container'>

                <div className="signup-row">
                  <div className="col-md-3 hidden-sm hidden-xs no-float signup-right-column bg-info-custom">
                    <img src="http://www.ansonika.com/mavia/img/registration_bg.svg" style={{ width: '30%' }} alt='hello' />
                    <h4 className="py-3">Let's get you set up</h4>
                    <p>It should only take a couple of minutes</p>
                  </div>
                  <div className="col-md-6 col-sm-3 col-xs-3 no-float">
                    <h1>Sign up</h1>
                    <SignupForm />
                  </div>
                </div>

              </div>
            </div>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default SignupPage;