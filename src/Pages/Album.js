import React, { Component } from 'react';
import Header from '../Components/Header';

class Album extends Component {
  render() {
    return (
      <div data-testid="page-album">
        <Header { ...this.props } { ...this } />
        <h1>Album</h1>
      </div>
    );
  }
}

export default Album;
