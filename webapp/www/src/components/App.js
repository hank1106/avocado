import React, { Component } from 'react';
import logo from '../logo.svg';
import '../css/App.css';
import Header from './Header.js';
import MusicCarousel from './MusicCarousel.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="banner"><MusicCarousel /></div>
      </div>
    );
  }
}

export default App;
