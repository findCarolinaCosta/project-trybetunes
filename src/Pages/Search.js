import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../Components/Header';

class Search extends Component {
  render() {
    const { handleChange, searchedvalue } = this.props;
    let isDisabled = true;
    if (searchedvalue.length > 1) { isDisabled = false; }

    return (
      <div data-testid="page-search">
        <Header { ...this.props } { ...this } />
        <form>
          <input
            data-testid="search-artist-input"
            type="text"
            name="searchedvalue"
            placeholder="Digite um nome de artista ou banda"
            value={ searchedvalue }
            onChange={ handleChange }
          />
          <button
            data-testid="search-artist-button"
            type="button"
            disabled={ isDisabled }
          >
            Pesquisar

          </button>
        </form>
      </div>
    );
  }
}

Search.propTypes = {
  searchedvalue: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Search;
