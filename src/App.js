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

class App extends Component {
  constructor() {
    super();
    this.state = {
      loginuser: '',
      submitlogin: true,
      searchedvalue: '',
      promiseresolve: false,
    };
    this.handleChange = handleChange.bind(this);
    this.checkInputName = checkInputName.bind(this);
    this.entryCondition = entryCondition.bind(this);
    this.getUsermame = getUsermame.bind(this);
    this.renderAlbuns = renderAlbuns.bind(this);
    this.getArtistInfos = getArtistInfos.bind(this);
  }

  componentDidMount() {
    this.getUsermame();
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
                (propsRouter) => (<Login
                  { ...propsRouter } // para acessar o history
                  { ...this.state }
                  { ...this }
                />)
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
              render={ () => (<Album { ...this } { ...this.state } />) }
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
