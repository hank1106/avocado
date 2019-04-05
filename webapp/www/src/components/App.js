import React, { Component } from 'react';
import Header from './Header.js';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './Home'
import Music from './Music'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <main>
          <Route exact path="/" component={Home} />
          <Route path="/Music" component={Music} />
        </main>
      </BrowserRouter>
    );
  }
}

export default App;
