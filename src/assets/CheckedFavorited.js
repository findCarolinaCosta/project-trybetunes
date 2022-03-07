import React from 'react';
import Loading from '../Pages/LoadingMessage';
import { addSong, removeSong } from '../services/favoriteSongsAPI';

export default async function checkedFavorited({
  trackId, trackName, action, previewUrl, loading }) {
  const trackInfo = { previewUrl, trackName, trackId };
  if (loading) return <Loading />;
  if (action.target.checked) await addSong(trackInfo);
  if (action.target.checked === false) await removeSong(trackInfo);
}
