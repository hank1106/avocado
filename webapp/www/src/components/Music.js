import React, { Component } from 'react';
import logo from '../logo.svg';
import Header from './Header.js';
import MusicCarousel from './MusicCarousel.js';

class Music extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="banner"><MusicCarousel /></div>
      </div>
    );
  }
}

export default Music;
