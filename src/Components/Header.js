import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Loading from '../Pages/LoadingMessage';

function Header({ username, loading }) {
  return (
    <header
      data-testid="header-component"
      className=""
    >
      <div className="flex justify-between w-full p-3 header">
        <p className="font-bold text-2xl text-white p-2 logo-title">TrybeTunes</p>
        { loading
          ? <Loading />
          : (
            <p
              data-testid="header-user-name"
              className="text-white"
            >
              { username }

            </p>)}
      </div>
      <nav className="grid grid-cols-3 pb-3">
        <Link
          data-testid="link-to-search"
          to="/search"
          className="btn2
          p-3 text-center"
        >
          <button
            type="button"
          >
            Pesquisa
          </button>
        </Link>
        <Link
          data-testid="link-to-favorites"
          to="/favorites"
          className="btn2
          p-3 text-center"
        >

          <button
            type="button"
          >
            Favoritos
          </button>
        </Link>
        <Link
          data-testid="link-to-profile"
          to="/profile"
          className="btn2
          p-3 text-center"
        >
          <button
            type="button"
          >
            Perfil
          </button>
        </Link>
      </nav>
    </header>
  );
}

Header.defaultProps = {
  username: 'User Test',
  loading: true,
};

Header.propTypes = {
  username: PropTypes.string,
  loading: PropTypes.bool,
};

export default Header;
