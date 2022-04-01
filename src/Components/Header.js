import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Loading from '../Pages/LoadingMessage';

function Header(props) {
  const { loading, location: { pathname } } = props;
  const selectBackground = 'btn2-active';
  const username = useSelector((state) => state.login.user);
  const user = localStorage.getItem('user');

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
              className="text-white align-middle m-0 self-center"
            >
              { username || JSON.parse(user).userName || 'User Test' }
            </p>)}
      </div>
      <nav className="grid grid-cols-3 pb-3">
        <Link
          data-testid="link-to-search"
          to="/search"
          className={ `btn2
          p-3 text-center ${pathname === '/search' && selectBackground}` }
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
          className={ `btn2
          p-3 text-center ${pathname === '/favorites' && selectBackground}` }
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
          className={ `btn2
          p-3 text-center ${pathname === '/profile' && selectBackground}` }
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
  loading: true,
  location: { pathname: '/search' },
};

Header.propTypes = {
  loading: PropTypes.bool,
  location: PropTypes.objectOf(PropTypes.string),
};

export default Header;
