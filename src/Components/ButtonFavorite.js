import PropTypes from 'prop-types';
import React from 'react';
// import filledHeart from '../assets/images/filled-heart.svg';
import emptyHeart from '../assets/images/empty-heart.svg';

function ButtonFavorite({ props }) {
  const { trackId, checkedFavorited } = props;
  return (
    <button
      type="button"
      data-testid={ `checkbox-music-${trackId}` }
      id={ trackId }
      onClick={ (action) => (
        checkedFavorited({ props }, action)) }
      className="self-center icon-audio m-auto"
    >
      <img
        // src={ isFavorite ? filledHeart : emptyHeart }
        src={ emptyHeart }
        alt="Botão de favoritos"
        className="self-center"
      />
    </button>
  );
}

ButtonFavorite.propTypes = {
  props: PropTypes.shape(PropTypes.object).isRequired,
  checkedFavorited: PropTypes.func.isRequired,
  trackId: PropTypes.number.isRequired,
};

export default ButtonFavorite;
