import { Meteor } from 'meteor/meteor';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Card, CardText } from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import { Toolbar, ToolbarTitle } from 'material-ui/Toolbar';
import FlatButton from 'material-ui/FlatButton';

import { setApplicationLocation } from '../../containers/App/actions';

const currentLocation = 'HOME';

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
  ul: {
    margin: '0',
    padding: '0',
  },
  li: {
    textAlign: 'center',
    listStyle: 'none',
  },
  button: {
    width: '300px',
  },
};

const menuItems = [
  { link: '/', label: 'Book A Spot' },
  { link: '/bookspot/list', label: 'Manage Book Spots' },
  { link: '/sharespot/list', label: 'Manage Share Spots' },
  { link: '/sharespot/new', label: 'Share A Spot' },
];

class ApplicationMenu extends Component {
  componentWillMount() {
    if (!Meteor.userId()) {
      // browserHistory.push('/login');
      this.props.router.push('/login');
    }

    this.props.setApplicationLocation(currentLocation);
  }

  render() {
    // console.log(`Meteor User ID: ${Meteor.userId()}`);
    // console.log(`Meteor user logging in: ${Meteor.loggingIn()}`);

    return (
      <div style={styles.component}>
        <Card style={styles.card}>
          <Paper>
            <Toolbar>
              <ToolbarTitle text="Where do you want to go today?" />
            </Toolbar>
            <CardText>
              <ul style={styles.ul}>
                {
                menuItems.map(e =>
                  <li
                    key={Math.random() * Date.now()}
                    style={styles.li}
                  >
                    <Link
                      to={e.link}
                    >
                      <FlatButton
                        style={styles.button}
                        label={e.label}
                      />
                    </Link>
                  </li>,
                  )
                }
              </ul>
            </CardText>
          </Paper>
        </Card>
      </div>);
  }
}

function mapStateToProps(state) {
  return {
    applicationLocation: state.appData.applicationLocation,
  };
}

const mapDispatchToProps = dispatch => ({
  setApplicationLocation: (location) => {
    dispatch(setApplicationLocation(location));
  },
});

ApplicationMenu.propTypes = {
  router: PropTypes.object.isRequired,
  setApplicationLocation: PropTypes.func.isRequired,
};

// connect to redux
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ApplicationMenu);
