import React, { Component } from 'react';
import Header from '../Components/Header';
import MusicCard from '../Components/MusicCard';

class Favorites extends Component {
  render() {
    const favoritesList = JSON.parse(localStorage.getItem('favorite_songs'));
    return (
      <div data-testid="page-favorites">
        <Header { ...this.props } { ...this } />
        <h1 className="font-bold text-1xl m-0 pb-7 pt-1 text-center">Favorites</h1>
        <div className="pb-5 pl-7 pr-7">
          {Array.from(favoritesList).map((item, index) => (
            <section key={ item.trackId }>
              {index === 0 && <hr />}
              <MusicCard
                trackId={ item.trackId }
                trackName={ item.trackName }
                previewUrl={ item.previewUrl }
                index={ index + 1 }
                { ...this.props }
                { ...this }
              />
              <hr />
            </section>
          ))}
        </div>
      </div>
    );
  }
}

export default Favorites;
