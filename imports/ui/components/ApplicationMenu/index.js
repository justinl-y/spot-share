import React from 'react';
import { Link, browserHistory } from 'react-router';
import { Card, CardText } from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import { Toolbar, ToolbarTitle } from 'material-ui/Toolbar';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
  component: {
    height: '85vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: '480px',
  },
  linkItems: {
    listStyle: 'none',
  },
};

const ApplicationMenu = () => (
  <div style={styles.component}>
    <Card style={styles.card}>
      <Paper>
        <Toolbar>
          <ToolbarTitle text="Where do you want to go today?" />
        </Toolbar>
        <CardText>
          <ul>
            <li style={styles.linkItems}>
              <Link
                to="/bookspot/new"
              >
                <RaisedButton
                  label="Book A Spot"
                  // onClick={e => this.handleSubmit(e)}
                />
              </Link>
            </li>
            <li>
              <Link
                to="/sharespot/new"
              >
                <RaisedButton
                  label="Share A Spot"
                  // onClick={e => this.handleSubmit(e)}
                />
              </Link>
            </li>
            <li>
              <Link
                to="/bookspot/list"
              >
                <RaisedButton
                  label="Manage Book Spots"
                  // onClick={e => this.handleSubmit(e)}
                />
              </Link>
            </li>
            <li>
              <Link
                to="/sharespot/list"
              >
                <RaisedButton
                  label="Manage Share Spots"
                  // onClick={e => this.handleSubmit(e)}
                />
              </Link>
            </li>
          </ul>
        </CardText>
      </Paper>
    </Card>
  </div>
);

export default ApplicationMenu;
