import React from 'react';
import Loading from '../Pages/LoadingMessage';
import { addSong, removeSong } from '../services/favoriteSongsAPI';

export default async function checkedFavorited(Props, { target }, previewUrl) {
  const { trackId, trackName, loading } = Props;
  const trackInfo = { previewUrl, trackName, trackId };

  this.setState({ loading: true });
  if (loading) return <Loading />;
  if (target.checked) await addSong(trackInfo);
  if (target.checked === false) await removeSong(trackInfo);

  this.setState({ loading: false });
}
