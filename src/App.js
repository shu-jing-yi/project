import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import Admin from './pages/admin/admin';
import Login from './pages/login/login';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/" component={Admin} />
        </Switch>
      </>
    );
  }
}

export default App;
