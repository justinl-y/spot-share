import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Card, CardText } from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import { Toolbar, ToolbarTitle } from 'material-ui/Toolbar';
import RaisedButton from 'material-ui/RaisedButton';

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

class ApplicationMenu extends Component {
  componentWillMount() {
    this.props.setApplicationLocation(currentLocation);
  }

  render() {
    return (
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
  setApplicationLocation: PropTypes.func.isRequired,
};

// connect to redux
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ApplicationMenu);
