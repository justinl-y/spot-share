import React from 'react';
import { Card, CardText } from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import { Toolbar, ToolbarTitle } from 'material-ui/Toolbar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { cyan500 } from 'material-ui/styles/colors';
import styles from './styles.css';



const SignIn = () => (
      <div className={styles.formContainer}>
        <Card className={styles.card}>
          <Paper>
            <Toolbar>
              <ToolbarTitle text="Sign In" />
            </Toolbar>
            <CardText>
              <form>
                <TextField
                  style={{
                    width: '100%',
                  }}
                  hintText="Enter your email address"
                  errorText="Please enter your email address."
                  errorStyle={style.errorStyle}
                  floatingLabelText="Email"
                  floatingLabelStyle={style.floatingLabelStyle}
                /><br />

                <TextField
                  style={{
                    width: '100%',
                  }}
                  hintText="Enter your password"
                  errorText="Please enter your password"
                  errorStyle={style.errorStyle}
                  floatingLabelText="Password"
                  floatingLabelStyle={style.floatingLabelStyle}
                /><br />

                <RaisedButton
                  backgroundColor="cyan500"
                  labelColor="white"
                  label="Sign In"
                  primary={true}
                />
              </form>
            </CardText>
          </Paper>
        </Card>
      </div>
    );

export default SignIn;
