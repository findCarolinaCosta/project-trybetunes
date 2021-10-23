import React from 'react';
import { PropTypes } from 'prop-types';
import Loading from '../Pages/LoadingMessage';
import searchAlbumsAPI from '../services/searchAlbumsAPI';

export default async function getArtistInfos(name) {
  const { loading } = this.state;
  const consultApi = async () => {
    const arrayAlbuns = await searchAlbumsAPI(name);
    this.setState({
      promiseresolve: true,
      loading: false,
      searchedvalue: '',
      albuminfos: arrayAlbuns,
      artistsearched: name,
    });
  };
  return loading ? <Loading /> : consultApi();
}

getArtistInfos.defaultProps = {
  username: '',
  loading: true,
};

getArtistInfos.propTypes = {
  username: PropTypes.string,
  loading: PropTypes.bool,
};
