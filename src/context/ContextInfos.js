import PropTypes from 'prop-types';
import React, { createContext, useState } from 'react';

const Context = createContext();
const { Provider, Consumer } = Context;

function ContextInfos(props) {
  const userStore = JSON.parse(localStorage.getItem('user'));
  const [promiseResolve, setPromiseResolve] = useState(false);
  const [albumList, setAlbumList] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [user, setUser] = useState({
    userName: userStore.userName,
    email: userStore.email,
    description: userStore.description,
  });

  const context = {
    promiseResolve,
    setPromiseResolve,
    albumList,
    setAlbumList,
    searchValue,
    setSearchValue,
    user,
    setUser,
  };

  const { children } = props;
  return <Provider value={ context }>{children}</Provider>;
}

ContextInfos.propTypes = {
  children: PropTypes.shape().isRequired,
};

export { ContextInfos as Provider, Consumer, Context };
