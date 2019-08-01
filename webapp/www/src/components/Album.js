import React, { Component } from 'react';
import logo from '../logo.svg';
import AlbumProfileWidget from './AlbumProfileWidget.js';
import AlbumIntro from './AlbumIntro.js';
import AlbumRatingWidget from './AlbumRatingWidget.js';
import AlbumReview from './AlbumReview.js';
import AlbumTrackList from './AlbumTrackList.js';
import Rater from 'react-rater';
import 'react-rater/lib/react-rater.css';
import '../css/Album.css';

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
        <div className="flex justify-start mt3">
          <button className="btn bookmark_button">Bookmark</button>
          <div className="ml2 mr1">Rating: </div>
          <div className="rater_div">
            <Rater total={5} rating={0}/>
          </div>
        </div>
        <AlbumIntro id={this.props.match.params.id} />
        <div className="mt3">
          <AlbumTrackList id={this.props.match.params.id}/>
        </div>
        <AlbumReview />
      </div>
    );
  }}

export default Album;
