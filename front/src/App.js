import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Formulaire from './Components/Formulaire'
import Dashbord from './Components/Dashbord';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">  
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <Router>
          <Switch>
            <Route exact path="/" component={Formulaire} />
            <Route exact path="/Dashbord" component={Dashbord} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;
