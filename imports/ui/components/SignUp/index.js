import { Meteor } from 'meteor/meteor';
import React, { Component, PropTypes } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { Card, CardText } from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import { Toolbar, ToolbarTitle } from 'material-ui/Toolbar';
import { cyan500 } from 'material-ui/styles/colors';

const styles = {
  component: {
    height: '85vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
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
  buttonStyle: {
    width: '100%',
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

  submitAction() {
    const { email, password, confirmPassword } = this.state;

    if (password === confirmPassword && password !== '' && confirmPassword !== '') {
      const accountInfo = {
        email,
        password,
      };

      // Accounts from meteor package
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

  render() {
    return (
      <div style={styles.component}>
        <Card style={styles.card}>
          <Paper>
            <Toolbar>
              <ToolbarTitle text="Sign Up" />
            </Toolbar>
            <CardText>
              <TextField
                hintText="Email"
                errorText="Please enter your email."
                floatingLabelText="Email"
                style={styles.textField}
                errorStyle={styles.errorStyle}
                floatingLabelStyle={styles.floatingLabelStyle}
                onChange={(event) => { this.handleInputChange('email', event)}}
              /><br />
              <TextField
                hintText="Password"
                errorText="Please enter your password."
                floatingLabelText="Password"
                theme="primary"
                style={styles.textField}
                errorStyle={styles.errorStyle}
                floatingLabelStyle={styles.floatingLabelStyle}
                onChange={(event) => { this.handleInputChange('password', event); }}
              /><br />
              <TextField
                hintText="Confirm Password"
                errorText="Please enter your password."
                floatingLabelText="Confirm Password"
                style={styles.textField}
                errorStyle={styles.errorStyle}
                floatingLabelStyle={styles.floatingLabelStyle}
                onChange={(event) => { this.handleInputChange('confirmPassword', event); }}
              /><br />
              <RaisedButton
                labelColor="black"
                label="Sign Up"
                style={styles.buttonStyle}
                onClick={(e) => { this.submitAction(e); }}
              />
            </CardText>
          </Paper>
        </Card>
      </div>
    );
  }
}

SignUp.propTypes = {
  // router: PropTypes.object.isRequired,
};

export default SignUp;
