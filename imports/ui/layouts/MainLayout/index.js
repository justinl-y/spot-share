import React, { Component, PropTypes } from 'react';
import HeaderBar from '../../components/Headerbar';

/* const styles = {
  'main-layout': {
    display: 'flex',
    flexDirection: 'column',
    width: '100vw',
    height: '100vh',
  },
};
style={styles['main-layout']}*/

class MainLayout extends Component {
  render() {
    return (
      <div>
        <HeaderBar />
        { this.props.children }
      </div>
    );
  }
}

MainLayout.propTypes = {
  children: PropTypes.object.isRequired,
};

export default MainLayout;
