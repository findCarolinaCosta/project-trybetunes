import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Header from '../Components/Header';

function Search(props) {
  const { renderAlbuns, getArtistInfos } = props;
  const [searchValue, setSearchValue] = useState('');
  let isDisabled = true;
  if (searchValue.length > 1) { isDisabled = false; }

  return (
    <div
      data-testid="page-search"
      className="container-fluid p-0 w-screen"
      onSubmit={ (e) => e.preventDefault() }
    >
      <Header { ...props } { ...this } />
      <form className="flex gap-4 justify-center container_form">
        <input
          data-testid="search-artist-input"
          type="text"
          name="searchValue"
          placeholder="search"
          value={ searchValue }
          onChange={ ({ target }) => setSearchValue(target.value) }
          className="form-control
            form-control-sm rounded-3xl input-search"
        />
        <button
          data-testid="search-artist-button"
          type="submit"
          disabled={ isDisabled }
          onClick={ () => getArtistInfos(searchValue) }
          className="d-none d-sm-block btn btn-primary"
        >
          Pesquisar
        </button>
      </form>
      <section className="w-screen">
        { renderAlbuns() }
      </section>
    </div>
  );
}

Search.propTypes = {
  renderAlbuns: PropTypes.func.isRequired,
  getArtistInfos: PropTypes.func.isRequired,
};

export default Search;
