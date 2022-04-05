import React, { Component } from 'react';
import { Navigate } from 'react-router';

import './styles.scss';

import AuthWrapper from '../AuthWrapper';
import FormInput from '../forms/FormInput';
import Button from '../forms/Button';

import { auth } from '../../firebase/utils';

const initialState = {
  email: '',
};

class EmailPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleClick() {
    console.log(this.props.location);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { email } = this.state;

      const config = {
        url: 'http://localhost:3000/login',
      };

      await auth
        .sendPasswordResetEmail(email, config)
        .then(() => {
          return <Navigate to='/login' />;
        })
        .catch((error) => {
          console.log('Somthing went wrong', { error });
        });
    } catch (error) {
      // console.log(error);
    }
  };

  render() {
    const { email } = this.state;

    const configAuthWrapper = {
      headline: 'Email Password',
    };
    return (
      <AuthWrapper {...configAuthWrapper}>
        <div className='formWrap'>
          <form onSubmit={this.handleSubmit}>
            <FormInput
              type='email'
              name='email'
              value={email}
              placeholder='email'
              onChange={this.handleChange}
            />
            <Button type='submit'>email password</Button>
          </form>
        </div>
      </AuthWrapper>
    );
  }
}

export default EmailPassword;
