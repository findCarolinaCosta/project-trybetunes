import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../Components/Header';

class Album extends Component {
  componentDidMount() {
    const { getSongsListByAlbum } = this.props;
    getSongsListByAlbum({ ...this.props });
  }

  render() {
    const { artistName, collectionName, infosSongs } = this.props;
    return (
      <div data-testid="page-album">
        <Header { ...this.props } { ...this } />
        <h1>Album</h1>
        <h2 data-testid="artist-name">{ artistName }</h2>
        <h3 data-testid="album-name">{ collectionName }</h3>
        { infosSongs.map((music, index) => {
          if (index > 0) {
            return (
              <div key={ music.trackId }>
                <p>{music.trackName}</p>
                <audio
                  data-testid="audio-component"
                  key={ music.trackName }
                  src={ music.previewUrl }
                  controls
                >
                  <track kind="captions" />
                  O seu navegador não suporta o elemento
                  <code>audio</code>
                </audio>
              </div>
            );
          }
          return null;
        })}
      </div>
    );
  }
}

Album.propTypes = {
  artistName: PropTypes.string.isRequired,
  collectionName: PropTypes.string.isRequired,
  infosSongs: PropTypes.arrayOf(PropTypes.object).isRequired,
  getSongsListByAlbum: PropTypes.func.isRequired,
};

export default Album;
