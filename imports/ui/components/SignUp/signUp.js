import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';

class SignUp extends Component {
  constructor() {
    super();
    this.submitAction = this.submitAction.bind(this);
  }
  submitAction(event) {
    event.preventDefault();
    const signUpForm = $(event.target);

    const email = signUpForm.find('#email').val();
    const password = signUpForm.find('#password').val();
    const confirmPassword = signUpForm.find('#confirm-password').val();

    if (password === confirmPassword && password !== '' && confirmPassword !== '') {
      const accountInfo = {
        email,
        password,
      };
      Accounts.createUser(accountInfo, (error) => {
        if (error) {
          console.log('There was an error, you suck!', 4000);
        } else {
          Meteor.loginWithPassword(email, password, (err) => {
            if (err) {
              console.log('There was an error creating your account!', 4000);
            } else {
              this.props.router.push('/');
            }
          });
        }
      });
    } else {
      console.log('Your passwords do not match!');
    }

  }
  // createUser


  render() {
    return (
      <form onSubmit={this.submitAction}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input placeholder="Email" type="email" id="email" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input placeholder="Password" type="password" id="password" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Confirm Password:</label>
          <input placeholder="Confirm Password" type="password" id="confirm-password" className="form-control" />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary">Button</button>
        </div>
      </form>
    );
  }
}
export default SignUp;

