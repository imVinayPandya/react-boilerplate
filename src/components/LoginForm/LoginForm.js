import React, { Component } from 'react';
import { Button, FormControl, FormGroup } from 'react-bootstrap';
import { isEmail } from 'validator';
import PropTypes from 'prop-types';
import InlineMessage from '../InlineMssage/InlineMessage';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        email: '',
        password: ''
      },
      loading: false,
      errors: {
        email: '',
        password: ''
      }
    };

    this.handleChange = this.handleChange.bind(this);
    this.hanldeSubmit = this.hanldeSubmit.bind(this);
    // this.validate = this.validate.bind(this);
  }

  handleChange(e) {
    e.persist();
    this.setState((prevState) => ({
      data: { ...prevState.data, [e.target.name]: e.target.value }
    }));
    const { data } = this.state;
    this.validate(data);
  }

  hanldeSubmit(e) {
    e.preventDefault();
    const { data } = this.state;
    const { onLogin } = this.props;
    const errors = this.validate(data);
    this.setState({ errors });

    if (Object.keys(errors).length === 0) {
      onLogin(data);
    }
  }

  validate(data) {
    const errors = {};
    if (!data.password) errors.password = 'Password cant be blank';
    if (!isEmail(data.email)) errors.email = 'Invalid email address';
    this.setState({ errors });
    return errors;
  }

  render() {
    const { data, errors } = this.state;
    const { email, password } = data;

    return (
      <div>
        <h2>Login</h2>

        <form onSubmit={this.hanldeSubmit}>

          <FormGroup controlId="email" validationState={errors.email ? 'error' : null}>
            <FormControl
              name='email'
              type="email"
              value={email}
              placeholder="Email address"
              onChange={this.handleChange}
            />
            {errors.email && <InlineMessage message={errors.email} />}
          </FormGroup>

          <FormGroup controlId="password" validationState={errors.password ? 'error' : null}>
            <FormControl
              name='password'
              type="password"
              value={password}
              placeholder="Password"
              onChange={this.handleChange}
            />
            {errors.password && <InlineMessage message={errors.password} />}
          </FormGroup>

          <FormGroup>
            <Button type='submit' bsStyle="primary" bsSize="large">Log In</Button>
          </FormGroup>
        </form>
      </div>
    );
  }
}

LoginForm.propTypes = {
  onLogin: PropTypes.func.isRequired
};

export default LoginForm;