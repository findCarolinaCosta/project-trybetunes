import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import play from '../assets/images/play.svg';
import stop from '../assets/images/stop.svg';

function MusicCard(props) {
  const { trackId, trackName, previewUrl, checkedFavorited, index } = props;
  const [isPlay, setIsPlay] = useState(false);

  useEffect(() => (isPlay ? document.getElementById(`player ${index}`).play()
    : document.getElementById(`player ${index}`).pause()), [index, isPlay]);

  const handlePlay = () => {
    setIsPlay(!isPlay);
    return isPlay ? document.getElementById(`player ${index}`).play()
      : document.getElementById(`player ${index}`).pause();
  };

  return (
    <div className="container-songs">
      <span className="self-center border-r-2" />
      <span className="absolute self-center text-center ml-1">{index}</span>
      <p className="cart-title-customized text-center">{trackName}</p>
      <audio
        data-testid="audio-component"
        src={ previewUrl }
        controls
        className="hidden"
        id={ `player ${index}` }
      >
        <source src={ previewUrl } type="audio/ogg" />
        <track kind="captions" />
        O seu navegador não suporta o elemento
        {/* <code>audio</code> */}
      </audio>
      <label htmlFor={ `checkbox-music-${trackId}` } className="text-center">
        <input
          onChange={ (action) => (
            checkedFavorited(props, action)) }
          type="checkbox"
          id={ trackId }
          data-testid={ `checkbox-music-${trackId}` }
        />
        Favoritar
      </label>
      <button
        type="button"
        onClick={ handlePlay }
        className="self-center icon-audio m-auto"
      >
        <img src={ isPlay ? stop : play } alt="" className="self-center" />
      </button>
    </div>
  );
}

MusicCard.propTypes = {
  trackName: PropTypes.string.isRequired,
  trackId: PropTypes.number.isRequired,
  previewUrl: PropTypes.string.isRequired,
  checkedFavorited: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};

export default MusicCard;
