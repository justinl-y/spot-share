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
    width: '100%',
    flexDirection: 'row',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
    width: '100%',
    marginBottom: '8px',
  },
  listContainer: {
    textAlign: 'left',
  },
};


const Booking = ({ id, bookingCost, duration, dateBooked, timeBooked, editBookings, deleteBookings }) => (
  <div style={styles.bookingContainer}>
    <Card style={{ marginBottom: '20px' }}>
      <Toolbar>
        <ToolbarTitle text="Booking Info" />
      </Toolbar>
      <List style={styles.listContainer}>
        <ListItem primaryText={`Date Booked: ${dateBooked}`} leftIcon={<Event />} />
        <ListItem primaryText={`Time Booked: ${timeBooked}`} leftIcon={<Schedule />} />
        <ListItem primaryText={`Booking-Duration: ${duration} hours`} leftIcon={<HourGlass />} />
        <ListItem primaryText={`Booking-Cost: $${bookingCost}`} leftIcon={<Money />} />
      </List>
      <div style={styles.buttonContainer}>
        <RaisedButton
          style={{ width: '50%', marginLeft: '20px' }}
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
  bookingCost: PropTypes.number.isRequired,
  duration: PropTypes.number.isRequired,
  dateBooked: PropTypes.string.isRequired,
  timeBooked: PropTypes.string.isRequired,
  editBookings: PropTypes.func.isRequired,
  deleteBookings: PropTypes.func.isRequired,
};

export default Booking;
