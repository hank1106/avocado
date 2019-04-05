import React, { Component } from 'react';
import logo from '../logo.svg';
import '../css/App.css';
import Header from './Header.js';
import MusicCarousel from './MusicCarousel.js';

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <h4>This is the home page</h4>
      </div>
    );
  }
}

export default Home;
