import React, { Component } from 'react';
import Header from '../Components/Header';

class Favorites extends Component {
  render() {
    return (
      <div data-testid="page-favorites">
        <Header { ...this.props } { ...this } />
        <h1>Favorites</h1>
      </div>
    );
  }
}

export default Favorites;
