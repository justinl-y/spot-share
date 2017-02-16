import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { Meteor } from 'meteor/meteor';


class SignIn extends Component {
  constructor() {
    super();
    this.submitAction = this.submitAction.bind(this);
    this.state = {
      email: '',
      password: '',
    };
  }
  submitAction() {
    const { email, password } = this.state;

  // login
    Meteor.loginWithPassword(email, password, (error) => {
      if (error) {
        console.log('There was an error:' + error.reason);
      } else {
        this.props.router.push('/');
      }
    });
  }
  handleInputChange(input, event) {
    const updateState = {};
    updateState[input] = event.target.value;
    this.setState(updateState);
  }

  render() {
    return (
             <div>
                <TextField
                  style={{
                    width: '100%',
                  }}
                  hintText="Email"
                  errorText="Please enter your email."
                  floatingLabelText="Email"
                  onChange={(event) => { this.handleInputChange('email', event)}}
                /><br />

                <TextField
                  style={{
                    width: '100%',
                  }}
                  hintText="Password"
                  errorText="Please enter your password."
                  floatingLabelText="Password"
                  onChange={(event) => { this.handleInputChange('password', event)}}
                /><br />
                <RaisedButton
                  labelColor="black"
                  label="Login"
                  onClick={(e) => { this.submitAction(e); }}
                />
                <RaisedButton
                  labelColor="black"
                  label="Sign Up"
                />
              </div>
    );
  }
}
export default SignIn;
