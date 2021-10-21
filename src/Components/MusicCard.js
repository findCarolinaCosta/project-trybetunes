import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MusicCard extends Component {
  render() {
    const { trackId, trackName, previewUrl, checkedFavorited } = this.props;
    return (
      <div key={ trackId }>
        <p>{trackName}</p>
        <audio
          data-testid="audio-component"
          key={ trackName }
          src={ previewUrl }
          controls
        >
          <track kind="captions" />
          O seu navegador não suporta o elemento
          <code>audio</code>
        </audio>
        <label htmlFor={ `checkbox-music-${trackId}` }>
          <input
            onChange={ (action) => (
              checkedFavorited({ ...this.props }, action)) }
            type="checkbox"
            id={ `checkbox-music-${trackId}` }
            data-testid={ `checkbox-music-${trackId}` }
          />
          Favorita
        </label>
      </div>
    );
  }
}

MusicCard.propTypes = {
  trackName: PropTypes.string.isRequired,
  trackId: PropTypes.number.isRequired,
  previewUrl: PropTypes.string.isRequired,
  checkedFavorited: PropTypes.func.isRequired,
};

export default MusicCard;
