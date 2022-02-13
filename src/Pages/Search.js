import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../Components/Header';

class Search extends Component {
  render() {
    const { handleChange, searchedvalue, renderAlbuns, getArtistInfos } = this.props;
    let isDisabled = true;
    if (searchedvalue.length > 1) { isDisabled = false; }

    return (
      <div data-testid="page-search" className="container-fluid p-0">
        <Header { ...this.props } { ...this } />
        <form className="flex gap-4 justify-center">
          <input
            data-testid="search-artist-input"
            type="text"
            name="searchedvalue"
            placeholder="Digite um nome de artista ou banda"
            value={ searchedvalue }
            onChange={ handleChange }
            className="form-control form-control-sm rounded-3xl input-search"
          />
          <button
            data-testid="search-artist-button"
            type="button"
            disabled={ isDisabled }
            onClick={ () => getArtistInfos(searchedvalue) }
            className="btn btn-primary"
          >
            Pesquisar
          </button>
        </form>
        <section>
          { renderAlbuns() }
        </section>
      </div>
    );
  }
}

Search.propTypes = {
  searchedvalue: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  renderAlbuns: PropTypes.func.isRequired,
  getArtistInfos: PropTypes.func.isRequired,
};

export default Search;
