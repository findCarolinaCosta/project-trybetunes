import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

class Cards extends Component {
  render() {
    const { albumObject: { artistName,
      collectionId, collectionName, artworkUrl100 } } = this.props;
    return (
      <div className="card shadow-lg bg-body w-full">
        <Link
          data-testid={ `link-to-album-${collectionId}` }
          to={ `/album/${collectionId}` }
          className="text-decoration-none"
        >
          <img
            src={ artworkUrl100 }
            alt={ artistName }
            className="card-img-top"
          />
          <div className="card-body">
            <h3 className="card-title cart-title-customized mb-2">
              { collectionName }
            </h3>
            <h1
              className="card-title cart-title-customized mb-3
            font-bold text-xl text-muted"
            >
              { artistName }
            </h1>
          </div>
        </Link>
      </div>
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
