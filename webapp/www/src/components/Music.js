import React, { Component } from 'react';
import logo from '../logo.svg';
import MusicCarousel from './MusicCarousel.js';
import '../css/Music.css';


class Music extends Component {
  render() {
    return (
      <div>
        <div className = "row mt2">
          <div className="col-4"></div>
          <form className="col-4">
            <input type="text" className="input_box" />
          </form>
          <div class="col-4"></div>
        </div>
        <MusicCarousel />
      </div>
    );
  }
}

export default Music;
