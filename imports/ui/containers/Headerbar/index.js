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
    };

    // set up sign in/ sign out cmponent on user login
    if (userLoggedIn) {
      const userEmail = Meteor.user().emails[0].address;

      signedInLinksLeft = (
        <div>
          {/* temp code */}
          <Link
            to="/bookspot/new"
          >
            <FlatButton
              label="Add Booking"
            />
          </Link>
          {/* temp code */}
          <Link
            to="/bookspot/list"
          >
            <FlatButton
              label="View Bookings"
            />
          </Link>
          <Link
            to="/sharespot/list"
          >
            <FlatButton
              label="View Share Shots"
            />
          </Link>
          <Link
            to="/sharespot/new"
          >
            <FlatButton
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
              label={userEmail}
            />
          </Link>
          <Link
            to="/login"
          >
            <FlatButton
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
              label="Sign In"
            />
          </Link>
        </div>
      );
    }

    // set display
    display = (<AppBar
      iconElementLeft={
        <div style={styles.menuLeft}>
          <IconButton>
            <Link
              to="/"
            >
              <MapsDirectionsCar />
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

    /* switch (this.props.userLocation) {
      case 'HOME':
        display = (<AppBar
          iconElementLeft={
            <IconButton
              tooltip="Home"
            >
              <Link
                to="/menu"
              >
                <MapsDirectionsCar />
                <Home />
                Home
              </Link>
            </IconButton>
          }
          iconElementRight={
            <div>
              { signedInLinks }
            </div>
          }
        />);
        break;
      case 'FIND-SPOT':
        break;
      case 'BOOK-SPOT':
        display = (<AppBar
          iconElementLeft={
            <IconButton>
              <Link
                to="/menu"
              >
                <MapsDirectionsCar />
              </Link>
            </IconButton>
          }
          iconElementRight={
            <div>
              <Link
                to="/bookspot/new"
              >
                <FlatButton
                  label="New book spot"
                  // onClick={this.props.addBookingSpot}
                />
              </Link>
              { signedInLinks }
            </div>
          }
        />);
        break;
      case 'SHARE-SPOT':
        display = (<AppBar
          iconElementLeft={
            <IconButton>
              <Link
                to="/menu"
              >
                <MapsDirectionsCar />
              </Link>
            </IconButton>
          }
          iconElementRight={
            <div>
              { signedInLinks }
            </div>
          }
        />);
        break;
      default:
        break;
    }*/

    /* if (!this.props) {
      return null;
    }*/
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
