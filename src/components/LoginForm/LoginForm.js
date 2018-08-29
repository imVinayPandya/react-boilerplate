import React, { Component } from 'react';
import { Button, FormControl, FormGroup, Alert, Checkbox } from 'react-bootstrap';
import { isEmail } from 'validator';
import PropTypes from 'prop-types';
import { Loader } from 'react-overlay-loader';
import InlineMessage from '../InlineMssage/InlineMessage';
import './LoginForm.scss';

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
  }

  hanldeSubmit(e) {
    e.preventDefault();
    const { data } = this.state;
    const { onLogin } = this.props;
    const errors = this.validate(data);
    this.setState({ errors });

    if (Object.keys(errors).length === 0) {
      this.setState({ loading: true });
      onLogin(data).catch((err) => {
        console.log(err.response.data.errors);
        this.setState({ errors: err.response.data.errors, loading: false });
      });
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
    const { data, errors, loading } = this.state;
    const { email, password } = data;

    return (
      <div>
        <form onSubmit={this.hanldeSubmit}>
          <Loader fullPage loading={loading} />

          {errors.global ?
            <Alert bsStyle="danger" >
              <h4>Something went wrong!</h4>
              <p>{errors.global}</p>
            </Alert> : ''}


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
            <Checkbox name='keep-login' className='keep-me-signed-in'>Keep me signed in</Checkbox>
          </FormGroup>

          <Button type='submit' bsStyle="info" bsSize="large" block>SIGN IN</Button>
        </form>
      </div>
    );
  }
}

LoginForm.propTypes = {
  onLogin: PropTypes.func.isRequired
};

export default LoginForm;