import React, { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import play from '../assets/images/play.svg';
import stop from '../assets/images/stop.svg';
import checkedFavorited from '../assets/CheckedFavorited';
import Loading from '../Pages/LoadingMessage';

function MusicCard() {
  const [isPlay, setIsPlay] = useState(false);
  const [loading, setLoading] = useState(false);
  const infosSongs = useSelector((state) => state.album.songInfos);
  const [url, setUrl] = useState('second');
  const audio = useMemo(() => new Audio(url), [url]);

  useEffect(() => (isPlay ? audio.play()
    : audio.pause()),
  [audio, isPlay]);

  const handlePlay = (previewUrl) => {
    setUrl(previewUrl);
    setIsPlay(!isPlay);
    return isPlay ? audio.play()
      : audio.pause();
  };

  return !infosSongs ? <Loading /> : infosSongs.map((music, index) => {
    const { trackId, trackName, previewUrl } = music;
    return index > 0 && <hr /> && (
      <section key={ index }>
        {index === 1 && <hr />}
        <div key={ index } className="container-songs">
          <span className="self-center border-r-2" />
          <span className="absolute self-center text-center ml-1">{index}</span>
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

export default MusicCard;
