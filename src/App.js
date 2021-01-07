import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import login from '../src/components/login/login'
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route path="/" exact component={login} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;