import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './Pages/Login';
import Search from './Pages/Search';
import Album from './Pages/Album';
import Favorites from './Pages/Favorites';
import Profile from './Pages/Profile';
import ProfileEdit from './Pages/ProfileEdit';
import NotFound from './Pages/NotFound';
import HandleChange from './Components/HandleChange';
import CheckInputName from './Components/CheckInputName';
import EntryCondition from './Components/EntryCondition';

class App extends Component {
  constructor() {
    super();
    this.state = {
      LoginUser: '',
      SubmitLogin: true,
    };
    this.handleChange = HandleChange.bind(this);
    this.checkInputName = CheckInputName.bind(this);
    this.entryCondition = EntryCondition.bind(this);
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
            <Route exact path="/search" component={ Search } />
            <Route exact path="/album/:id" component={ Album } />
            <Route exact path="/favorites" component={ Favorites } />
            <Route exact path="/profile" component={ Profile } />
            <Route exact path="/profile/edit" component={ ProfileEdit } />
            <Route component={ NotFound } />

          </Switch>
        </BrowserRouter>

      </>
    );
  }
}

export default App;
