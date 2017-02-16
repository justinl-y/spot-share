import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { Meteor } from 'meteor/meteor';
import { cyan500 } from 'material-ui/styles/colors';


const styles = {
  floatingLabelStyle: {
    color: cyan500,
  },
  errorStyle: {
    color: cyan500,
  },
};

class SignUp extends Component {
  constructor() {
    super();
    this.submitAction = this.submitAction.bind(this);
    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
    };
  }
  submitAction(event) {
    const { email, password, confirmPassword } = this.state;

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
              this.props.router.push('/menu');
            }
          });
        }
      });
    } else {
      console.log('Your passwords do not match!');
    }
  }
  handleInputChange(input, event) {
    const updateState = {};
    updateState[input] = event.target.value;
    this.setState(updateState);
  }
  // createUser


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
                  errorStyle={styles.errorStyle}
                  floatingLabelStyle={styles.floatingLabelStyle}
                  onChange={(event) => { this.handleInputChange('email', event)}}

                /><br />

                <TextField
                  style={{
                    width: '100%',
                  }}
                  hintText="Password"
                  errorText="Please enter your password."
                  floatingLabelText="Password"
                  theme="primary"
                  errorStyle={styles.errorStyle}
                  floatingLabelStyle={styles.floatingLabelStyle}
                  onChange={(event) => { this.handleInputChange('password', event)}}
                /><br />

                <TextField
                  style={{
                    width: '100%',
                  }}
                  hintText="Confirm Password"
                  errorText="Please enter your password."
                  floatingLabelText="Confirm Password"
                  errorStyle={styles.errorStyle}
                  floatingLabelStyle={styles.floatingLabelStyle}
                  onChange={(event) => { this.handleInputChange('confirmPassword', event)}}
                /><br />

                <RaisedButton
                  labelColor="black"
                  label="Sign Up"
                  onClick={(e) => { this.submitAction(e); }}
                />
              </div>
    );
  }
}
export default SignUp;

