import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './Pages/Login';
import Search from './Pages/Search';
import Album from './Pages/Album';
import Favorites from './Pages/Favorites';
import Profile from './Pages/Profile';
import ProfileEdit from './Pages/ProfileEdit';
import NotFound from './Pages/NotFound';
import getUsermame from './assets/GetUserInfos';
import getArtistInfos from './assets/GetArtistInfos';
import getSongsListByAlbum from './assets/GetSongsListByAlbum';
import checkedFavorited from './assets/CheckedFavorited';
import recoverFavorites from './assets/RestoreFavoriteList';
import getFavoriteList from './assets/GetFavoriteList';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from './context/album';

class App extends Component {
  constructor() {
    super();
    this.state = {
      loginuser: '',
      submitlogin: true,
      searchedvalue: '',
      promiseresolve: false,
      artistName: '',
      collectionName: '',
      infosSongs: [],
      loading: false,
      favorites: [],
      redirect: false,
    };

    this.getUsermame = getUsermame.bind(this);
    this.getArtistInfos = getArtistInfos.bind(this);
    this.getSongsListByAlbum = getSongsListByAlbum.bind(this);
    this.checkedFavorited = checkedFavorited.bind(this);
    this.recoverFavorites = recoverFavorites.bind(this);
    this.getFavoriteList = getFavoriteList.bind(this);
  }

  componentDidMount() {
    this.getUsermame();
    this.recoverFavorites({ ...this.props });
  }

  componentDidUpdate(_, previousState) {
    const { favorites } = this.state;
    if (previousState.favorites !== favorites) {
      this.getFavoriteList();
    }
  }

  render() {
    return (
      <Switch>
        <Route
          exact
          path="/"
          component={ Login }
        />

        <Provider>
          <Route
            exact
            path="/search"
            component={ Search }
          />
        </Provider>

        <Route
          exact
          path="/album/:id"
          render={ (props) => (<Album { ...this } { ...this.state } { ...props } />) }
        />

        <Route
          exact
          path="/favorites"
          render={ (props) => (<Favorites
            { ...this }
            { ...this.state }
            { ...props }
          />) }
        />

        <Route
          exact
          path="/profile"
          render={ (props) => (<Profile
            { ...this }
            { ...this.state }
            { ...props }
          />) }
        />

        <Route
          exact
          path="/profile/edit"
          render={ () => (<ProfileEdit { ...this } { ...this.state } />) }
        />

        <Route component={ NotFound } />

      </Switch>
    );
  }
}

export default App;
