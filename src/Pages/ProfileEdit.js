import React, { Component } from 'react';
import Header from '../Components/Header';

class ProfileEdit extends Component {
  render() {
    return (
      <div data-testid="page-profile-edit">
        <Header { ...this.props } { ...this } />
        <h1>ProfileEdit</h1>
      </div>
    );
  }
}

export default ProfileEdit;
