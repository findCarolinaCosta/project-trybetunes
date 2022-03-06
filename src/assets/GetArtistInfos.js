import React from 'react';
import Loading from '../Pages/LoadingMessage';
import searchAlbumsAPI from '../services/searchAlbumsAPI';

async function getArtistInfos(name) {
  const { loading } = this.state;
  const consultApi = async () => {
    const arrayAlbuns = await searchAlbumsAPI(name);
    this.setState({
      promiseresolve: true,
      loading: false,
      searchedvalue: '',
      albuminfos: arrayAlbuns,
    });
  };
  return loading ? <Loading /> : consultApi();
}

export default getArtistInfos;
