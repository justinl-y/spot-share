import React, { PropTypes } from 'react';
import { List, ListItem } from 'material-ui/List';
import Schedule from 'material-ui/svg-icons/action/schedule';
import HourGlass from 'material-ui/svg-icons/action/hourglass-empty';
import Event from 'material-ui/svg-icons/action/event';
import Money from 'material-ui/svg-icons/editor/attach-money';
import RaisedButton from 'material-ui/RaisedButton';
import { Card } from 'material-ui/Card';
import { Toolbar, ToolbarTitle } from 'material-ui/Toolbar';

const styles = {
  bookingContainer: {
    display: 'flex',
    justifyContent: 'center',
    width: '400px',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    width: '400px',
    marginBottom: '8px',
  },
};


const Booking = ({ id, bookingCost, duration, dateBooked, timeBooked, editBookings, deleteBookings, parkingSpotId }) => (
  <div style={styles.bookingContainer}>
    <Card>
      <Toolbar>
        <ToolbarTitle text={`Booking Info: ${parkingSpotId}`} />
      </Toolbar>
      <List>
        <ListItem primaryText={`Date Booked: ${dateBooked}`} leftIcon={<Event />} />
        <ListItem primaryText={`Time Booked: ${timeBooked}`} leftIcon={<Schedule />} />
        <ListItem primaryText={`Booking-Duration: ${duration} hours`} leftIcon={<HourGlass />} />
        <ListItem primaryText={`Booking-Cost: $${bookingCost}`} leftIcon={<Money />} />
      </List>
      <div style={styles.buttonContainer}>
        <RaisedButton
          style={{ width: '70%', marginLeft: '5px' }}
          label="Edit"
          primary="true"
          onClick={(e) => { e.preventDefault(); editBookings(id); }}
        />
        <RaisedButton
          style={{ marginLeft: '10px' }}
          label="Delete"
          primary="true"
          onClick={(e) => { e.preventDefault(); deleteBookings(id); }}
          />
      </div>
    </Card>
  </div>
);


Booking.propTypes = {
  id: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
  bookingCost: PropTypes.number.isRequired,
  duration: PropTypes.number.isRequired,
  parkingSpotId: PropTypes.string.isRequired,
  dateBooked: PropTypes.string.isRequired,
  timeBooked: PropTypes.string.isRequired,
  editBookings: PropTypes.func.isRequired,
  deleteBookings: PropTypes.func.isRequired,
};

export default Booking;
