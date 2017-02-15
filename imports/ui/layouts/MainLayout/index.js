import React, { Component, PropTypes } from 'react';
import HeaderBar from '../../containers/Headerbar';

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
