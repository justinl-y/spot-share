import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { Card, CardText } from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import { Toolbar, ToolbarTitle } from 'material-ui/Toolbar';
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
        this.props.router.push('/menu');
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
             <Card>
              <Paper>
               <Toolbar>
                <ToolbarTitle text="Sign In" />
                </Toolbar>
                <CardText>
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
                  errorStyle={styles.errorStyle}
                  floatingLabelStyle={styles.floatingLabelStyle}
                  onChange={(event) => { this.handleInputChange('password', event)}}
                /><br />
                <RaisedButton
                  labelColor="black"
                  label="Login"
                  onClick={(e) => { this.submitAction(e); }}
                />
                 </CardText>
                </Paper>
               </Card>
              </div>
    );
  }
}
export default SignIn;
