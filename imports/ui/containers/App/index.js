import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Snackbar from 'material-ui/Snackbar';
import { clearMessageText } from '../ProcessLogin/actions';


// import { Meteor } from 'meteor/meteor';
// import { createContainer } from 'meteor/react-meteor-data';
// import { Bookings } from '../../../api/bookings';
// import { ParkingSpots } from '../../../api/parking-spots';

import { setApplicationLocation } from '../App/actions';

const currentLocation = 'HOME';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      // signInMessage: '',
    };
  }

  componentWillMount() {
    this.props.setApplicationLocation(currentLocation);
  }

  componentWillReceiveProps(nextProps) {
    // console.log(nextProps.signInMessage);
    // console.log(nextProps.signInMessage.text);
    console.log('next.props:' + nextProps.signInMessage.active);
    console.log('this.props:' + nextProps.signInMessage.active);

    if (this.props.signInMessage.active) {
      this.setState({
        open: true,
      });

      this.props.clearMessageText();
    }
  }

  handleRequestClose() {
    this.setState({
      open: false,
    });
  }

  render() {
    return (
      <div>
        {console.log(this.state.open)}
        <Snackbar
          open={this.state.open}
          message={this.props.signInMessage.text === undefined ? '' : this.props.signInMessage.text}
          autoHideDuration={3000}
          onRequestClose={this.handleRequestClose.bind(this)}
        />
        { this.props.children }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    visibilityFilter: state.appData.visibilityFilter,
    applicationLocation: state.appData.applicationLocation,
    signInMessage: state.appData.processLogin.message,
  };
}

const mapDispatchToProps = dispatch => ({
  setApplicationLocation: (location) => {
    dispatch(setApplicationLocation(location));
  },
  clearMessageText: () => {
    dispatch(clearMessageText());
  },
});

App.defaultProps = {
  signInMessage: PropTypes.object,
};

App.propTypes = {
  children: PropTypes.object.isRequired,
  setApplicationLocation: PropTypes.func.isRequired,
  signInMessage: PropTypes.object,
  clearMessageText: PropTypes.func.isRequired,
};

// connect to redux
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

/* export default createContainer(() => {
  Meteor.subscribe('bookings');
  // Meteor.subscribe('getParkingSpots');
  return {
    currentUser: Meteor.user(),
    currentUserId: Meteor.userId(),
    bookings: Bookings.find({}).fetch(),
    // parkingSpots: ParkingSpots.find({}).fetch(),
  };
}, App); */
