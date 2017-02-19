import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { connect } from 'react-redux';
import { createContainer } from 'meteor/react-meteor-data';
import { Link } from 'react-router';
import { Card, CardText } from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import { Toolbar, ToolbarTitle } from 'material-ui/Toolbar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';
import { Bookings } from '../../../api/bookings';
import { addBookingSpot } from '../../containers/BookSpotInput/actions';


class BookSpotEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {},
      fieldErrors: {},
    };
    this.onChange = address => this.setState({ address });
  }

  componentWillMount() {
    const bookingSpot = this.props.bookingSpot;
    this.addBookingSpotToState(bookingSpot);
  }

  componentWillUnmount() {
    this.props.addBookingSpot();
  }

  addBookingSpotToState(bookingSpot) {
    this.setState({
      fields: {},
    });
    const fields = {};

    fields._id = bookingSpot[0]._id;
    fields.dateBooked = new Date(bookingSpot[0].date_booked);
    fields.timeBooked = new Date(bookingSpot[0].time_booked);
    fields.duration = bookingSpot[0].duration;
    fields.bookingCost = bookingSpot[0].booking_cost;

    this.setState({ fields });
  }


  handleTextFieldChange(e, validation) {
    const fieldErrors = this.state.fieldErrors;
    delete fieldErrors[e.target.name];

    const fields = this.state.fields;
    fields[e.target.name] = e.target.value;

    validation.forEach((type) => {
      switch (type) {
        case 'req':
          if (!fields[e.target.name]) {
            const errorObject = { [e.target.name]: 'Required field' };
            this.setState({ fieldErrors: { ...this.state.fieldErrors, ...errorObject } });
          }
          break;
        case 'num':
          if (isNaN(fields[e.target.name])) {
            const errorObject = { [e.target.name]: 'Number required' };
            this.setState({ fieldErrors: { ...this.state.fieldErrors, ...errorObject } });
          }
          break;
        default:
      }
    });

    this.setState({ fields });
  }

  validate(data) {
    this.setState({
      fieldErrors: {},
    });

    const errors = {};

    if (!data.dateBooked) errors.dateBooked = 'Required field';
    if (!data.timeBooked) errors.timeBooked = 'Required field';
    if (isNaN(data.duration)) errors.duration = 'Number required';
    if (isNaN(data.bookingCost)) errors.bookingCost = 'Number required';
    if (!data.duration) errors.duration = 'Required field';
    if (!data.bookingCost) errors.bookingCost = 'Required field';

    return errors;
  }
  render() {
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
      textField: {
        width: '100%',
      },
      textFieldSmall: {
        width: '50%',
      },
      datePickerContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
    };
    return (
      <div>
        <div style={styles.component}>
          <Card style={styles.card}>
            <Paper>
              <Toolbar>
                <ToolbarTitle text="Book a Spot" />
              </Toolbar>
              <CardText>
                <form>
                  <div style={styles.datePickerContainer}>
                    <DatePicker
                      textFieldStyle={{ width: '100%' }}
                      floatingLabelText="Date Booked"
                      errorText={this.state.fieldErrors.dateBooked}
                      hintText="Available from"
                      container="inline"
                      autoOk
                      value={this.state.fields.dateBooked}
                      onChange={(x, d) => { this.setState({ fields: { ...this.state.fields, dateBooked: d } }); }}
                    />
                    <TimePicker
                      format="ampm"
                      hintText="12hr Format"
                      errorText={this.state.fieldErrors.timeBooked}
                      value={this.state.fields.timeBooked}
                      onChange={(x, d) => { this.setState({ fields: { ...this.state.fields, timeBooked: d } }); }}
                    />
                  </div>
                  <TextField
                    style={styles.textField}
                    name="duration"
                    hintText="Duration"
                    errorText={this.state.fieldErrors.duration}
                    floatingLabelText="Duration"
                    value={this.state.fields.duration}
                    onChange={e => this.handleTextFieldChange(e, ['req', 'num'])}
                  />
                  <TextField
                    style={styles.textField}
                    name="bookingCost"
                    hintText="Booking Cost"
                    errorText={this.state.fieldErrors.bookingCost}
                    floatingLabelText="Booking Cost"
                    value={this.state.fields.bookingCost}
                  // onChange={this.handleTextFieldChange.bind(this)}
                    onChange={e => this.handleTextFieldChange(e, ['req', 'num'])}
                  />
                  <RaisedButton
                    // backgroundColor="rgb(183, 28, 28)"
                    // labelColor="white"
                    label="Submit"
                    onClick={e => this.handleSubmit(e)}
                  />

                  <Link
                    to="/bookspot/list"
                  >
                    <RaisedButton
                      label="Cancel"
                    />
                  </Link>
                </form>
              </CardText>
            </Paper>
          </Card>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addBookingSpot: () => {
    dispatch(addBookingSpot());
  },
});

BookSpotEdit.propTypes = {
  addBookingSpot: PropTypes.func.isRequired,
  bookingSpot: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const BookSpaceEditContainer = createContainer((bookingSpotId) => {
  Meteor.subscribe('getBookings');
  return {
    bookingSpot: Bookings.find({ _id: bookingSpotId.bookingSpotId }).fetch(),
  };
}, BookSpotEdit);

export default connect(
  null,
  mapDispatchToProps,
)(BookSpaceEditContainer);
