import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import * as actions from '../actions';

import Homepage from './homepage/Homepage';
import Account from './homepage/Account';
import Dashboard from './Dashboard';
import SurveyNew from './surveys/SurveyNew';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Route exact path="/" component={Homepage} />
          <Route exact path="/account" component={Account} />
          <Route path="/surveys/new" component={SurveyNew} />
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(
  null,
  actions
)(App);
