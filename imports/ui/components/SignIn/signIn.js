import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { Router } from 'react-router';

class SignIn extends Component {
  constructor() {
    super();
    this.submitAction = this.submitAction.bind(this);
  }
  submitAction(event) {
    event.preventDefault();
    const signInForm = $(event.target);

    const email = signInForm.find('#email').val();
    const password = signInForm.find('#password').val();

  // login
    Meteor.loginWithPassword(email, password, (error) => {
      if (error) {
        console.log('There was an error:' + error.reason);
      } else {
        this.props.router.push('/');
      }
    });
  }

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
          <button type="submit" className="btn btn-primary">Button</button>
        </div>
      </form>
    );
  }
}
export default SignIn;

