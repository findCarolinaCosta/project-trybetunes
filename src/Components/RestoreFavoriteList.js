import React from 'react';
import Loading from '../Pages/LoadingMessage';
import { getFavoriteSongs } from '../services/favoriteSongsAPI';

export default async function recoverFavorites(Props) {
  const { loading } = Props;
  this.setState({ loading: true });
  if (loading) return <Loading />;
  const favorites = await getFavoriteSongs();
  this.setState({
    loading: false,
    favorites,
  });
}
