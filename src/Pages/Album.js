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
        <div className="pb-5 pl-7 pr-7">
          <h1 className="font-bold text-1xl m-0 p-1">Album:</h1>
          <h3
            data-testid="album-name"
            className="font-bold text-1xl m-0"
          >
            { collectionName }
          </h3>
          <h2
            data-testid="artist-name"
            className="font-semibold text-xl pb-3 pl-5 text-muted underline"
          >
            { `by ${artistName}` }
          </h2>
          <div>
            { infosSongs.map((music, index) => (
              <section key={ index }>
                {index > 0 && <hr /> && (

                  <MusicCard
                    trackId={ music.trackId }
                    trackName={ music.trackName }
                    previewUrl={ music.previewUrl }
                    { ...this.props }
                    index={ index }
                  />
                )}
                <hr />
              </section>
            ))}
          </div>
        </div>
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
