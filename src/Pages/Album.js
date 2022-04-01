import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import Header from '../Components/Header';
import MusicCard from '../Components/MusicCard';
import { getSongInfo } from '../redux/actions';

function Album(props) {
  const { id } = useRouteMatch().params;
  const artistName = useSelector((state) => state.search.artist);
  const collectionName = useSelector((state) => state.album.name);
  const dispatch = useDispatch();
  const getSongInfoAsync = useCallback(async () => dispatch(getSongInfo(id)),
    [dispatch, id]);

  useEffect(() => {
    getSongInfoAsync();
  }, [getSongInfoAsync, id]);

  return (
    <div data-testid="page-album">
      <Header { ...props } { ...this } />
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
          <MusicCard />
        </div>
      </div>
    </div>
  );
}

export default Album;
