import React from 'react';
import { Link } from 'react-router';
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
  li: {
    listStyle: 'none',
  },

};

const menuItems = [
  { link: '/bookspot/new', label: 'Book A Spot' },
  { link: '/sharespot/new', label: 'Share A Spot' },
  { link: '/bookspot/list', label: 'Manage Book Spots' },
  { link: '/sharespot/list', label: 'Manage Share Spots' },
];

const ApplicationMenu = () => (
  <div style={styles.component}>
    <Card style={styles.card}>
      <Paper>
        <Toolbar>
          <ToolbarTitle text="Where do you want to go today?" />
        </Toolbar>
        <CardText>
          <ul>
            {
            menuItems.map(e =>
              <li
                key={Math.random() * Date.now()}
                style={styles.li}
              >
                <Link
                  to={e.link}
                >
                  <RaisedButton
                    label={e.label}
                    // onClick={userLogout}
                  />
                </Link>
              </li>,
              )
            }
          </ul>
        </CardText>
      </Paper>
    </Card>
  </div>
);

export default ApplicationMenu;
