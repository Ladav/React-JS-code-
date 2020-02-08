import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Courses from './containers/Courses/Courses';
import Users from './containers/Users/Users';
import Navigation from './components/Navigation/Navigation';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Switch>
          <Route path="/courses" component={Courses} />
          <Route path="/users" component={Users} />
          <Redirect from="/all-courses" to="/courses" />
          <Route path="/" render={() => <p>404 :/</p>} />
        </Switch>
      </div>
    );
  }
}

export default App;
