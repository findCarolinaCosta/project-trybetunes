import React, { Component } from 'react';
import Header from '../Components/Header';

class Profile extends Component {
  render() {
    return (
      <div data-testid="page-profile">
        <Header { ...this.props } { ...this } />
        <h1>Profile</h1>
      </div>
    );
  }
}

export default Profile;
