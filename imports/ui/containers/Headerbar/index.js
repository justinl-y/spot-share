import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import AppBar from 'material-ui/AppBar';

// import { addParkingSpot } from '../ShareSpotInput/actions';
// import { addBookingSpot } from '../BookSpotInput/actions';
import { userSignOut } from '../ProcessLogin/actions';

// import Home from 'material-ui/svg-icons/action/home';
import MapsDirectionsCar from 'material-ui/svg-icons/maps/directions-car';


class HeaderBar extends Component {
  render() {
    const { userLoggedIn } = this.props;
    let display = null;
    let signedInLinksLeft = '';
    let signedInLinksRight = '';

    // set up sign in/ sign out cmponent on user login
    if (userLoggedIn) {
      signedInLinksLeft = (
        <Link
          to="/bookspot/list"
        >
          <FlatButton
            label="View Bookings"
            // onClick={this.props.addParkingSpot}
          />
        </Link>
      );

      signedInLinksRight = (
        <div>
          <Link
            to="/sharespot/list"
          >
            <FlatButton
              label="View Share Shots"
              // onClick={this.props.addParkingSpot}
            />
          </Link>
          <Link
            to="/sharespot/new"
          >
            <FlatButton
              label="Add Share Spot"
              // onClick={this.props.addParkingSpot}
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
        <div>
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
  /* addParkingSpot: () => {
    dispatch(addParkingSpot());
  },
  addBookingSpot: () => {
    dispatch(addBookingSpot());
  },*/
  userLogout: () => {
    dispatch(userSignOut());
  },
});

HeaderBar.propTypes = {
  // addParkingSpot: PropTypes.func.isRequired,
  // addBookingSpot: PropTypes.func.isRequired,
  // userLocation: PropTypes.string.isRequired,
  userLoggedIn: PropTypes.bool.isRequired,
  userLogout: PropTypes.func.isRequired,
};

// connect to redux
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HeaderBar);
