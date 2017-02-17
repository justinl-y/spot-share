import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import AppBar from 'material-ui/AppBar';
import MapsDirectionsCar from 'material-ui/svg-icons/maps/directions-car';
import { addParkingSpot } from '../ShareSpotInput/actions';
import { userSignOut } from '../ProcessLogin/actions';

class HeaderBar extends Component {
  render() {
    const { userLoggedIn } = this.props;
    let display = null;
    let signedInLinks = '';

    // set up sign in/ sign out cmponent on user login
    if (userLoggedIn) {
      signedInLinks = (<Link
        to="/login"
      >
        <FlatButton
          label="Sign Out"
          onClick={this.props.userLogout}
        />
      </Link>);
    } else {
      signedInLinks = (<Link
        to="/login"
      >
        <FlatButton
          label="Sign In"
        />
      </Link>);
    }

    switch (this.props.userLocation) {
      case 'HOME':
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
      case 'FIND-SPOT':
        break;
      case 'BOOK-SPOT':
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
              <Link
                to="/sharespot/new"
              >
                <FlatButton
                  label="New share spot"
                  onClick={this.props.addParkingSpot}
                />
              </Link>
              { signedInLinks }
            </div>
          }
        />);
        break;
      default:
        break;
    }

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
  addParkingSpot: () => {
    dispatch(addParkingSpot());
  },
  userLogout: () => {
    dispatch(userSignOut());
  },
});

HeaderBar.propTypes = {
  addParkingSpot: PropTypes.func.isRequired,
  userLocation: PropTypes.string.isRequired,
  userLoggedIn: PropTypes.bool.isRequired,
  userLogout: PropTypes.func.isRequired,
};

// connect to redux
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HeaderBar);
