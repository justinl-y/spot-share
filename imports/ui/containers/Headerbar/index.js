import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import AppBar from 'material-ui/AppBar';
import MapsDirectionsCar from 'material-ui/svg-icons/maps/directions-car';
import { addParkingSpot } from '../ShareSpotInput/actions';

class HeaderBar extends Component {
  render() {
    const { userLoggedIn } = this.props;
    let display = null;

    console.log(userLoggedIn);

    /* const signedInLinks = (isUserLoggedIn) => {
      if (!isUserLoggedIn) return '';
      return (<Link
        to="/login"
      >
        <FlatButton
          label="Logout"
          // onClick={userLogout}
        />
      </Link>);
    };*/

    let signedInLinks = '';

    userLoggedIn
    ?
      signedInLinks = (<Link
        to="/login"
      >
        <FlatButton
          label="Logout"
          // onClick={userLogout}
        />
      </Link>)
    :
    null;

    console.log(signedInLinks);

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
              <Link
                to="/login"
              >
                <FlatButton
                  label="Logout"
                  // onClick={userLogout}
                />
              </Link>
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
});

HeaderBar.propTypes = {
  addParkingSpot: PropTypes.func.isRequired,
  userLocation: PropTypes.string.isRequired,
  userLoggedIn: PropTypes.bool.isRequired,
};

// connect to redux
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HeaderBar);
