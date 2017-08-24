import React, { Component } from 'react';
import './main.css';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import Profile from './components/Profile';
import EditProfile from './components/EditProfile';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">

          <Nav />

          <div className="content">

            <Route exact path="/" component={Home} />
            <Route path="/profile" component={Profile} />
            <Route path="/edit-profile" component={EditProfile} />

          </div>

          <footer>by Abdurrahman Al Hanif</footer>
        </div>
      </Router>
    );
  }
}

export default App;
