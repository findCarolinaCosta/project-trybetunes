import React from 'react';
import Loading from '../Pages/LoadingMessage';
import { addSong, removeSong } from '../services/favoriteSongsAPI';

export async function checkedFavorited(Props, { target }) {
  const { trackId, trackName, previewUrl, loading } = Props;
  const trackInfo = { previewUrl, trackName, trackId };

  this.setState({ loading: true });
  if (loading) return <Loading />;
  if (target.checked) await addSong(trackInfo);
  if (target.checked === false) await removeSong(trackInfo);

  this.setState({ loading: false });
}

export function getFavoriteList() {
  const { favorites } = this.state;
  favorites.forEach((item) => {
    const favoriteId = item.trackId;
    const favoriteMusic = document.getElementById(`checkbox-music-${favoriteId}`);
    if (favoriteMusic) {
      favoriteMusic.checked = 'true';
    }
  });
}
