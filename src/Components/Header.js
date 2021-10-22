import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Loading from '../Pages/LoadingMessage';

class Header extends Component {
  render() {
    const { username, loading } = this.props;
    const renderName = (<p data-testid="header-user-name">{ username }</p>);
    return (
      <header data-testid="header-component">
        { loading ? <Loading /> : renderName}
        <nav>
          <Link data-testid="link-to-search" to="/search">Pesquisa</Link>
          <Link data-testid="link-to-favorites" to="/favorites">Favoritos</Link>
          <Link data-testid="link-to-profile" to="/profile">Perfil</Link>
        </nav>
      </header>
    );
  }
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
