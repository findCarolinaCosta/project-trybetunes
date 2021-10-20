import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

class Cards extends Component {
  render() {
    const { albumObject: { artistName,
      collectionId, collectionName, artworkUrl100 } } = this.props;
    return (
      <Link
        data-testid={ `link-to-album-${collectionId}` }
        to={ `/album/${collectionId}` }
      >
        <img src={ artworkUrl100 } alt={ artistName } />
        <h1>{ artistName }</h1>
        <h3>
          { collectionName }
        </h3>
      </Link>
    );
  }
}

Cards.propTypes = {
  albumObject: PropTypes.shape({
    artistName: PropTypes.string,
    artworkUrl100: PropTypes.string,
    collectionId: PropTypes.number,
    collectionName: PropTypes.string,
  }).isRequired,
};

export default Cards;
