import React, { Component } from 'react';
import { Card, CardText } from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import { Toolbar, ToolbarTitle } from 'material-ui/Toolbar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { cyan500 } from 'material-ui/styles/colors';

const styles = {
  floatingLabelStyle: {
    color: cyan500,
  },
  errorStyle: {
    color: cyan500,
  },
};

const SignUp = () => (
      <div>
        <Card>
          <Paper>
            <Toolbar>
              <ToolbarTitle text="Sign Up" />
            </Toolbar>
            <CardText>
              <form>
                <TextField
                  style={{
                    width: '100%',
                  }}
                  hintText="Choose a Username"
                  hello={styles.hello}
                  errorText="Please choose a username!"
                  errorStyle={styles.errorStyle}
                  floatingLabelText="Username"
                  floatingLabelStyle={styles.floatingLabelStyle}
                /><br />

                <TextField
                  style={{
                    width: '100%',
                  }}
                  hintText="Enter your email address"
                  errorText="Please enter your email address."
                  errorStyle={styles.errorStyle}
                  floatingLabelText="Email"
                  floatingLabelStyle={styles.floatingLabelStyle}
                /><br />

                <TextField
                  style={{
                    width: '100%',
                  }}
                  hintText="Choose a Password"
                  errorText="Please enter your password."
                  errorStyle={styles.errorStyle}
                  floatingLabelText="Password"
                  floatingLabelStyle={styles.floatingLabelStyle}
                /><br />

                <TextField
                  style={{
                    width: '100%',
                  }}
                  hintText="Confirm Password"
                  errorText="Please confirm your password."
                  errorStyle={styles.errorStyle}
                  floatingLabelText="Confirm Password"
                  floatingLabelStyle={styles.floatingLabelStyle}
                /><br />

                <RaisedButton
                  backgroundColor="cyan500"
                  labelColor="white"
                  label="Sign Up"
                  primary={true}
                  width="100%"
                />
              </form>
            </CardText>
          </Paper>
        </Card>
      </div>
    );

export default SignUp;
