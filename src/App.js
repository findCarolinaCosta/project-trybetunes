import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './Pages/Login';
import Search from './Pages/Search';
import Album from './Pages/Album';
import Favorites from './Pages/Favorites';
import Profile from './Pages/Profile';
import ProfileEdit from './Pages/ProfileEdit';
import NotFound from './Pages/NotFound';
import handleChange from './assets/HandleChange';
// import checkInputName from './assets/CheckInputName';
// import entryCondition from './assets/EntryCondition';
import getUsermame from './assets/GetUserInfos';
import renderAlbuns from './assets/RenderAlbuns';
import getArtistInfos from './assets/GetArtistInfos';
import getSongsListByAlbum from './assets/GetSongsListByAlbum';
import checkedFavorited from './assets/CheckedFavorited';
import recoverFavorites from './assets/RestoreFavoriteList';
import getFavoriteList from './assets/GetFavoriteList';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

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
    this.handleChange = handleChange.bind(this);
    // this.checkInputName = checkInputName.bind(this);
    // this.entryCondition = entryCondition.bind(this);
    this.getUsermame = getUsermame.bind(this);
    this.renderAlbuns = renderAlbuns.bind(this);
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

  componentWillUnmount() {

  }

  render() {
    return (
      <Switch>
        <Route
          exact
          path="/"
          component={ Login }
        />

        <Route
          exact
          path="/search"
          render={ (props) => (<Search
            { ...this }
            { ...this.state }
            { ...props }
          />) }
        />

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
