import React from 'react';
import { NavLink } from 'react-router-dom';
import { Col, Row, Button, FormControl, FormGroup, ControlLabel } from 'react-bootstrap';
import './SignupForm.scss';


class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      addressOne: '',
      addressTwo: '',
      state: '',
      zipCode: '',
      password: '',
      confirmPassword: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.hanldeSubmit = this.hanldeSubmit.bind(this);
    this.validatePassword = this.validatePassword.bind(this);
  }

  validatePassword() {
    const { password, confirmPassword } = this.state;
    if (!!password && !!confirmPassword) {
      if (password === confirmPassword) {
        return 'success';
      }
      return 'error';
    }
    return null;
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  hanldeSubmit(e) {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    const { firstName, lastName, email, password, confirmPassword, phone, addressOne, addressTwo, state, zipCode } = this.state;

    return (
      <div>
        <form onSubmit={this.hanldeSubmit}>

          <Row>
            <Col md={6}>
              <FormGroup controlId="firstName">
                {/* <ControlLabel>First Name</ControlLabel> */}
                <FormControl
                  name='firstName'
                  type="text"
                  value={firstName}
                  placeholder="First name"
                  onChange={this.handleChange}
                  playsInline
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup controlId="lastName">
                {/* <ControlLabel>Last Name</ControlLabel> */}
                <FormControl
                  name='lastName'
                  type="text"
                  value={lastName}
                  placeholder="Last name"
                  onChange={this.handleChange}
                  playsInline
                />
              </FormGroup>
            </Col>
          </Row>

          <FormGroup controlId="email">
            {/* <ControlLabel>Email</ControlLabel> */}
            <FormControl
              name='email'
              type="email"
              value={email}
              placeholder="Email address"
              onChange={this.handleChange}
            />
          </FormGroup>

          <FormGroup controlId="phone">
            {/* <ControlLabel>Phone</ControlLabel> */}
            <FormControl
              name='phone'
              type="phone"
              value={phone}
              placeholder="Phone number"
              onChange={this.handleChange}
            />
          </FormGroup>

          <FormGroup controlId="addressOne">
            {/* <ControlLabel>Address line 1</ControlLabel> */}
            <FormControl
              name='addressOne'
              type="text"
              value={addressOne}
              placeholder="Address line one"
              onChange={this.handleChange}
            />
          </FormGroup>

          <FormGroup controlId="addressTwo">
            {/* <ControlLabel>Address line 2</ControlLabel> */}
            <FormControl
              name='addressTwo'
              type="text"
              value={addressTwo}
              placeholder="Address line two"
              onChange={this.handleChange}
            />
          </FormGroup>

          <Row>
            <Col md={8}>
              <FormGroup controlId="state">
                {/* <ControlLabel>State</ControlLabel> */}
                <FormControl
                  name='state'
                  type="text"
                  value={state}
                  placeholder="State"
                  onChange={this.handleChange}
                />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup controlId="zipCode">
                {/* <ControlLabel>Zip Code</ControlLabel> */}
                <FormControl
                  name='zipCode'
                  type="number"
                  value={zipCode}
                  min={11111}
                  minLength={5}
                  placeholder="Zip Code"
                  onChange={this.handleChange}
                />
              </FormGroup>
            </Col>
          </Row>

          <FormGroup controlId="password" validationState={this.validatePassword()}>
            {/* <ControlLabel>Password</ControlLabel> */}
            <FormControl
              name='password'
              type="password"
              value={password}
              placeholder="Password"
              onChange={this.handleChange}
            />
          </FormGroup>

          <FormGroup controlId="confirmPassword" validationState={this.validatePassword()}>
            {/* <ControlLabel>Confirm Password</ControlLabel> */}
            <FormControl
              name='confirmPassword'
              type="password"
              value={confirmPassword}
              placeholder="Confirm password"
              onChange={this.handleChange}
            />
            {/* <FormControl.Feedback /> */}
          </FormGroup>

          <FormGroup>
            <Button type='submit' bsStyle="primary" bsSize="large">Sign up</Button>
            <NavLink to='/login' activeClassName="is-active" className='pull-right'> Already have an account? </NavLink>
          </FormGroup>
        </form>
      </div >
    );
  }
}

export default SignupForm;