import React, { Component } from 'react';
import './main.css';
// import {
//   BrowserRouter as Router,
//   Route,
// } from 'react-router-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
// import Nav from './components/Nav';
// import Home from './components/Home';
// import Profile from './components/Profile';
// import EditProfile from './components/EditProfile';

import Layout from './layout'
import Home from './pages/Home'
import Company from './pages/company'
import Profile from './pages/company/Profile'
import EditProfile from './pages/company/EditProfile'

class App extends Component {
  render() {
    return(
      <Router history={browserHistory}>
        <Route
          path='/'
          component={Layout}
        >
          <IndexRoute component={Home} />
          <Route
            path='company'
            component={Company}
          >
            <IndexRoute component={Profile}/>
            <Route
              path='edit'
              component={EditProfile}
            />
          </Route>
        </Route>
      </Router>
    )
    // return (
    //   <Router>
    //     <div className="app">
    //
    //       <Nav />
    //
    //       <div className="content">
    //
    //         <Route exact path="/" component={Home} />
    //         <Route path="/profile" component={Profile} />
    //         <Route path="/edit-profile" component={EditProfile} />
    //
    //       </div>
    //
    //       <footer>by Abdurrahman Al Hanif</footer>
    //     </div>
    //   </Router>
    // );
  }
}

export default App;
