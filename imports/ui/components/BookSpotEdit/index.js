import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { connect } from 'react-redux';
import { createContainer } from 'meteor/react-meteor-data';
import { Link, browserHistory } from 'react-router';
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
    fields.address = bookingSpot[0].address;
    fields.postCode = bookingSpot[0].post_code;
    fields.pricePerHour = bookingSpot[0].price_per_hour;
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

  handleSubmit(e) {
    e.preventDefault();

    const bookingSpot = this.state.fields;
    const fieldErrors = this.validate(bookingSpot);

    this.setState({ fieldErrors });

    if (Object.keys(fieldErrors).length) return;

    // submit data
    this.props.editBookSpot(bookingSpot);

    // navigate to list
    browserHistory.push('/bookspot/list');
  }

  render() {
    const styles = {
      component: {
        height: '85vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'auto',
      },
      card: {
        width: '900px',
        height: '350px',
      },
      formWrap: {
        width: '100%',
        display: 'flex',
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
      <div style={styles.component}>
        <Card style={styles.card}>
          <div style={styles.formWrap}>
            <Paper style={{ width: '100%', height: '350px' }}>
              <Toolbar>
                <ToolbarTitle text="Share spot info" />
              </Toolbar>
              <CardText>
                <TextField
                  style={styles.textField}
                  disabled
                  name="address"
                  floatingLabelText="Address"
                  value={this.state.fields.address}
                />
                <TextField
                  style={styles.textField}
                  disabled
                  name="postCode"
                  floatingLabelText="Post Code"
                  value={this.state.fields.postCode}
                />
                <TextField
                  style={styles.textField}
                  disabled
                  name="pricePerHour"
                  floatingLabelText="Price Per Hour"
                  value={`$${this.state.fields.pricePerHour}`}
                />
              </CardText>
            </Paper>
            <Paper style={{ width: '100%' }}>
              <Toolbar>
                <ToolbarTitle text="Edit your booking" />
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
                      textFieldStyle={{ marginTop: '1.5rem' }}
                      format="ampm"
                      hintText="Time Booked"
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
                    onChange={(e) => {
                      this.handleTextFieldChange(e, ['req', 'num']);
                      this.setState({ fields: { ...this.state.fields, bookingCost: (this.state.fields.duration * this.state.fields.pricePerHour) } });
                    }}
                  />
                  <TextField
                    style={styles.textField}
                    name="bookingCost"
                    hintText="Booking Cost"
                    errorText={this.state.fieldErrors.bookingCost}
                    floatingLabelText="Booking Cost"
                    value={this.state.fields.bookingCost === undefined ? '$0' : `$${this.state.fields.bookingCost}`}
                  />
                  <div>
                    <Link
                      to="/bookspot/list"
                    >
                      <RaisedButton
                        label="Cancel"
                        style={{ width: '45%', marginLeft: '20px' }}
                      />
                    </Link>

                    <RaisedButton
                      primary
                      style={{ width: '45%', marginLeft: '20px' }}
                      label="Submit"
                      onClick={e => this.handleSubmit(e)}
                    />
                  </div>
                </form>
              </CardText>
            </Paper>
          </div>
        </Card>
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
  editBookSpot: PropTypes.func.isRequired,
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
