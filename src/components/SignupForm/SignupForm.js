import React from 'react';
import { NavLink } from 'react-router-dom';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import Button from 'react-bootstrap/lib/Button';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import './SignupForm.scss';


class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
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
      } else {
        return 'error';
      }
    } else {
      return null;
    }
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  hanldeSubmit(e) {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    const { firstName, lastName, email, password, confirmPassword } = this.state;

    return (
      <div>
        <h2>Make Your Money Move</h2>
        <p>Goldeneye lets you invest in companies you love, commission-free.</p>

        <form onSubmit={this.hanldeSubmit}>

          <Row>
            <Col md={6}>
              <FormGroup controlId="firstName">

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
            <FormControl
              name='email'
              type="email"
              value={email}
              placeholder="Email address"
              onChange={this.handleChange}
            />
          </FormGroup>

          <FormGroup controlId="password" validationState={this.validatePassword()}>
            <FormControl
              name='password'
              type="password"
              value={password}
              placeholder="Password"
              onChange={this.handleChange}
            />
          </FormGroup>

          <FormGroup controlId="confirmPassword" validationState={this.validatePassword()}>
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
            <Button type='submit'>Sign up</Button>
            <NavLink to='/login' activeClassName="is-active" className='pull-right'> Login </NavLink>
          </FormGroup>
        </form>
      </div>
    );
  }
}

export default SignupForm;