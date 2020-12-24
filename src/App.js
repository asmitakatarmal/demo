import React, { Component } from 'react'
import './App.css';
import Page1 from './View/Page1';
import Page2 from './View/Page2';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";


export default class App extends Component {
  render() {
    return (
      <div className="App">

    <Router>
        <Switch>
          <Route path="/post">
            <Page2  />
          </Route>
          <Route exact path="/">
            <Page1 />
          </Route>
        </Switch>
    </Router>
      
      </div>
    )
  }
}
