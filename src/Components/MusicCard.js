import React, { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import Proptypes from 'prop-types';
import play from '../assets/images/play.svg';
import stop from '../assets/images/stop.svg';
import checkedFavorited from '../assets/CheckedFavorited';
import Loading from '../Pages/LoadingMessage';

function MusicCard({ param }) {
  const [isPlay, setIsPlay] = useState(false);
  const [loading, setLoading] = useState(false);
  const infosSongs = useSelector((state) => state.album.songInfos);
  const [url, setUrl] = useState('');
  const audio = useMemo(() => new Audio(url), [url]);
  const favoritesList = JSON.parse(localStorage.getItem('favorite_songs'));

  useEffect(() => (isPlay ? audio.play() : audio.pause()), [audio, isPlay]);

  useEffect(() => {
    audio.addEventListener('ended', () => {
      setIsPlay(false)
    });
  }, [audio]);

  const handlePlay = (previewUrl) => {
    if (url === previewUrl) {
      // If the clicked song is already playing, pause it
      setIsPlay(!isPlay);
    } else {
      // If the clicked song is not playing, stop the current playing song and play the clicked song
      audio.pause();
      setUrl(previewUrl);
      setIsPlay(true);
    }
  };

  return (!param ? !infosSongs : !favoritesList)
    ? <Loading /> : (param === 'favorites'
      ? favoritesList : infosSongs).map((music, index) => {
      const { trackId, trackName, previewUrl } = music;
      return (!param ? index > 0 : index >= 0) && <hr /> && (
        <section key={ index }>
          {(!param ? index === 1 : index === 0) && <hr />}
          <div key={ index } className="container-songs">
            <span className="self-center border-r-2" />
            <span
              className="absolute self-center text-center ml-1"
            >
              {!param ? index : index + 1}
            </span>
            <p className="cart-title-customized text-center">{trackName}</p>
            <label htmlFor={ `checkbox-music-${trackId}` } className="text-center">
              <input
                onChange={ (action) => {
                  setLoading(true);
                  checkedFavorited({ trackId, trackName, action, previewUrl, loading });
                  setLoading(false);
                } }
                type="checkbox"
                id={ trackId }
                data-testid={ `checkbox-music-${trackId}` }
              />
              Favoritar
            </label>
            <button
              type="button"
              onClick={ () => handlePlay(previewUrl) }
              className="self-center icon-audio m-auto"
            >
              <img
                src={ isPlay && url === previewUrl ? stop : play }
                alt=""
                className="self-center"
              />
            </button>
          </div>
          <hr />
        </section>
      );
    });
}

MusicCard.defaultProps = {
  param: '',
};

MusicCard.propTypes = {
  param: Proptypes.string,
};

export default MusicCard;
