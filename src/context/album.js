import PropTypes from 'prop-types';
import React, { createContext, useState } from 'react';

const AlbumContext = createContext();
const { Provider, Consumer } = AlbumContext;

function AlbumInfos(props) {
  const [promiseResolve, setPromiseResolve] = useState(false);
  const [albumList, setAlbumList] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const context = {
    promiseResolve,
    setPromiseResolve,
    albumList,
    setAlbumList,
    searchValue,
    setSearchValue,
  };

  const { children } = props;
  return <Provider value={ context }>{children}</Provider>;
}

AlbumInfos.propTypes = {
  children: PropTypes.shape().isRequired,
};

export { AlbumInfos as Provider, Consumer, AlbumContext };
