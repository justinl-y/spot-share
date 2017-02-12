import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import AppBar from 'material-ui/AppBar';
import MapsDirectionsCar from 'material-ui/svg-icons/maps/directions-car';

class HeaderBar extends Component {
  render() {
    let display = null;

    switch (this.props.userLocation) {
      case 'HOME':
        display = (<AppBar
          iconElementLeft={
            <IconButton>
              <Link
                to="/"
              >
                <MapsDirectionsCar />
              </Link>
            </IconButton>
          }
        />);
        break;
      case 'SHARE-SPOT':
        display = (<AppBar
          iconElementLeft={
            <IconButton>
              <Link
                to="/"
              >
                <MapsDirectionsCar />
              </Link>
            </IconButton>
          }
          iconElementRight={
            <div>
              <Link
                to="/sharespots/new"
              >
                <FlatButton
                  label="New share spot"
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
  };
}

HeaderBar.propTypes = {
  userLocation: PropTypes.string.isRequired,
};

// connect to redux
export default connect(
  mapStateToProps,
)(HeaderBar);
