import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './Pages/Login';
import Search from './Pages/Search';
import Album from './Pages/Album';
import Favorites from './Pages/Favorites';
import Profile from './Pages/Profile';
import ProfileEdit from './Pages/ProfileEdit';
import NotFound from './Pages/NotFound';
import handleChange from './Components/HandleChange';
import checkInputName from './Components/CheckInputName';
import entryCondition from './Components/EntryCondition';
import getUsermame from './Components/GetUserInfos';
import renderAlbuns from './Components/RenderAlbuns';
import getArtistInfos from './Components/GetArtistInfos';
import getSongsListByAlbum from './Components/GetSongsListByAlbum';
import checkedFavorited from './Components/CheckedFavorited';
import recoverFavorites from './Components/RestoreFavoriteList';
import getFavoriteList from './Components/GetFavoriteList';

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
    this.checkInputName = checkInputName.bind(this);
    this.entryCondition = entryCondition.bind(this);
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
      <>
        <p>TrybeTunes</p>

        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/"
              render={
                () => (<Login { ...this.state } { ...this } />)
              }
            />

            <Route
              exact
              path="/search"
              render={ () => (<Search { ...this } { ...this.state } />) }
            />

            <Route
              exact
              path="/album/:id"
              render={ (props) => (<Album { ...this } { ...this.state } { ...props } />) }
            />

            <Route
              exact
              path="/favorites"
              render={ () => (<Favorites { ...this } { ...this.state } />) }
            />

            <Route
              exact
              path="/profile"
              render={ () => (<Profile { ...this } { ...this.state } />) }
            />

            <Route
              exact
              path="/profile/edit"
              render={ () => (<ProfileEdit { ...this } { ...this.state } />) }
            />

            <Route component={ NotFound } />

          </Switch>
        </BrowserRouter>

      </>
    );
  }
}

export default App;
