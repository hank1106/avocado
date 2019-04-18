import React, { Component } from 'react';
import logo from '../logo.svg';
import AlbumProfileWidget from './AlbumProfileWidget.js';
import AlbumIntro from './AlbumIntro.js';

class Album extends Component {
  render() {
    return (
      <div className="m3">
        <AlbumProfileWidget id={this.props.match.params.id} />
        <AlbumIntro id={this.props.match.params.id} />
      </div>
    );
  }
}

export default Album;
