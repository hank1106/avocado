import React, { Component } from 'react';
import logo from '../logo.svg';
import AlbumProfileWidget from './AlbumProfileWidget.js';
import AlbumIntro from './AlbumIntro.js';
import AlbumRatingWidget from './AlbumRatingWidget.js';
import AlbumTrackList from './AlbumTrackList.js'

class Album extends Component {
  render() {
    return (
      <div className="m3 px4">
        <div className="flex justify-between">
          <AlbumProfileWidget id={this.props.match.params.id} />
          <div className="mt3">
            <AlbumRatingWidget />
          </div>
        </div>
        <AlbumIntro id={this.props.match.params.id} />
        <div className="mt3">
          <AlbumTrackList id={this.props.match.params.id}/>
        </div>
      </div>
    );
  }}

export default Album;
