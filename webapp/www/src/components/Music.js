import React, { Component } from 'react';
import logo from '../logo.svg';
import MusicCarousel from './MusicCarousel.js';

class Music extends Component {
  render() {
    return (
      <div>
        <div className="banner"><MusicCarousel /></div>
      </div>
    );
  }
}

export default Music;
