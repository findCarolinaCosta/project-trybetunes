import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loading from '../Pages/LoadingMessage';

class Header extends Component {
  componentDidMount() {
    const { getUsermame } = this.props;
    getUsermame();
  }

  render() {
    const { username, loading } = this.props;
    const renderizaName = (<p data-testid="header-user-name">{ username }</p>);
    return (
      <header data-testid="header-component">
        { loading ? <Loading /> : renderizaName}
      </header>
    );
  }
}

Header.defaultProps = {
  username: '',
  loading: true,
};

Header.propTypes = {
  username: PropTypes.string,
  loading: PropTypes.bool,
  getUsermame: PropTypes.func.isRequired,
};

export default Header;
