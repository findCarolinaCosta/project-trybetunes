import React, { useContext, useState } from 'react';
import { useDispatch } from 'react-redux';
import Header from '../Components/Header';
import getArtistInfos from '../assets/GetArtistInfos';
import Loading from './LoadingMessage';
import RenderAlbuns from '../Components/RenderAlbuns';
import { AlbumContext } from '../context/album';
import { getSearchValue } from '../redux/actions';

function Search(props) {
  const { searchValue, setPromiseResolve,
    setAlbumList, setSearchValue } = useContext(AlbumContext);
  const dispatch = useDispatch();

  const [isloading, setIsLoading] = useState(false);
  let isDisabled = true;

  if (searchValue.length > 1) { isDisabled = false; }

  const handleClick = async () => {
    setIsLoading(true);
    const list = await getArtistInfos(searchValue);
    setPromiseResolve(true);
    setIsLoading(false);
    setAlbumList(list);
    dispatch(getSearchValue({ name: searchValue }));
  };

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
          onClick={ handleClick }
          className="d-none d-sm-block btn btn-primary"
        >
          Pesquisar
        </button>
      </form>
      <section className="w-screen">
        { isloading ? <Loading />
          : <RenderAlbuns /> }
      </section>
    </div>
  );
}

export default Search;
