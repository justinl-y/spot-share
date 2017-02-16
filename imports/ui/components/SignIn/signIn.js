import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { Card, CardText } from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import { Toolbar, ToolbarTitle } from 'material-ui/Toolbar';
import { Meteor } from 'meteor/meteor';
import { cyan500 } from 'material-ui/styles/colors';


const styles = {
  component: {
    height: '85vh',
    display: 'flex',
  },
  card: {
    justifyContent: 'center',
    alignSelf: 'center',
    width: '500px',
  },
  textField: {
    width: '100%',
  },
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
      <div style={styles.container}>
        <Card style={styles.card}>
          <Paper>
            <Toolbar>
              <ToolbarTitle text="Sign In" />
            </Toolbar>
            <CardText>
              <TextField
                hintText="Email"
                errorText="Please enter your email."
                floatingLabelText="Email"
                errorStyle={styles.errorStyle}
                floatingLabelStyle={styles.floatingLabelStyle}
                style={styles.textField}
                onChange={(event) => { this.handleInputChange('email', event)}}
              /><br />
              <TextField
                hintText="Password"
                errorText="Please enter your password."
                floatingLabelText="Password"
                style={styles.textField}
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
