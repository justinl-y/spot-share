import { Meteor } from 'meteor/meteor';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import AppBar from 'material-ui/AppBar';
// import Home from 'material-ui/svg-icons/action/home';
import MapsDirectionsCar from 'material-ui/svg-icons/maps/directions-car';
import { userSignOut } from '../ProcessLogin/actions';

class HeaderBar extends Component {
  render() {
    const { userLoggedIn } = this.props;
    let display = null;
    let signedInLinksLeft = '';
    let signedInLinksRight = '';

    const styles = {
      menuLeft: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
      },
      headerButtons: {
        color: 'white',
      },
    };

    // set up sign in/ sign out cmponent on user login
    if (userLoggedIn) {
      const userEmail = Meteor.user().emails[0].address;

      signedInLinksLeft = (
        <div>
          <Link
            to="/bookspot/list"
          >
            <FlatButton
              style={styles.headerButtons}
              label="View Bookings"
            />
          </Link>
          <Link
            to="/sharespot/list"
          >
            <FlatButton
              style={styles.headerButtons}
              label="View Share Shots"
            />
          </Link>
          <Link
            to="/sharespot/new"
          >
            <FlatButton
              style={styles.headerButtons}
              label="Add Share Spot"
            />
          </Link>
        </div>
      );

      signedInLinksRight = (
        <div>
          <Link
            to="/profile"
          >
            <FlatButton
              style={styles.headerButtons}
              label={userEmail}
            />
          </Link>
          <Link
            to="/login"
          >
            <FlatButton
              style={styles.headerButtons}
              label="Sign Out"
              onClick={this.props.userLogout}
            />
          </Link>
        </div>
      );
    } else {
      signedInLinksRight = (
        <div>
          <Link
            to="/login"
          >
            <FlatButton
              style={styles.headerButtons}
              label="Sign In"
            />
          </Link>
        </div>
      );
    }

    // set display
    display = (<AppBar
      style={styles.container}
      iconElementLeft={
        <div style={styles.menuLeft}>
          <IconButton>
            <Link
              to="/"
            >
              <MapsDirectionsCar
                style={styles.headerButtons}
              />
            </Link>
          </IconButton>
          { signedInLinksLeft }
        </div>
      }
      iconElementRight={
        <div>
          { signedInLinksRight }
        </div>
      }
    />);

    return (
      <div>
        {display}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    userLocation: state.appData.userLocation.userLocation,
    userLoggedIn: state.appData.processLogin.login,
  };
}

const mapDispatchToProps = dispatch => ({
  userLogout: () => {
    dispatch(userSignOut());
  },
});

HeaderBar.propTypes = {
  userLoggedIn: PropTypes.bool.isRequired,
  userLogout: PropTypes.func.isRequired,
};

// connect to redux
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HeaderBar);
