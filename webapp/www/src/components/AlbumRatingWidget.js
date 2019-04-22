import React, { Component } from 'react';
import logo from '../logo.svg';
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'
import '../css/AlbumRatingWidget.css';

class AlbumRatingWidget extends Component {
  render() {
    return (
      <div>
        <h6>Avocado Rating: </h6>
        <div className="flex justify-start pl1">
          <h2 className="pt1">8</h2>
          <div className="p1">
            <Rater
              total={5}
              rating={3.4}
              interactive={false}
            />
            <p className="misc_text">1 person has rated this album</p>
          </div>
        </div>
        <div className="pl1">
          <div class="flex justify-start">
            <div>five star:</div>
            <div className="bar mt1"></div>
          </div>
          <div class="flex justify-start">
            <div>four star:</div>
            <div className="bar mt1"></div>
          </div>
          <div class="flex justify-start">
            <div>two star:</div>
            <div className="bar mt1"></div>
          </div>
          <div class="flex justify-start">
            <div>one star:</div>
            <div className="bar mt1"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default AlbumRatingWidget;
