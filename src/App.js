import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import outputPage from './pages/output';
import ReadFilePage from './pages/read-file';
import NotFoundPage from './pages/404';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/read-file" component={ReadFilePage}/>
          <Route exact path="/output" component={outputPage}/>
          <Route exact path="/404" component={NotFoundPage}/>
          <Redirect to="/404" />
        </Switch>
      </Router>
    );
  }
}

export default App;