import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../Components/Header';
import MusicCard from '../Components/MusicCard';

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
              <MusicCard
                key={ music.trackId }
                trackId={ music.trackId }
                trackName={ music.trackName }
                previewUrl={ music.previewUrl }
                { ...this.props }
              />
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
  favorites: PropTypes.arrayOf(PropTypes.object).isRequired,
  getFavoriteList: PropTypes.func.isRequired,
};

export default Album;
