import React, { Component } from 'react';
import logo from '../logo.svg';
import MusicCarousel from './MusicCarousel.js';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import '../css/Music.css';


class Music extends Component {
  render() {
    return (

       <div className="flex mt3 justify-around">
         <Carousel controls={false} className="caro desc">
           <Carousel.Item>
            <div className="clearfix">
            <div class="p1 rounded col col-3">
              <img src="https://lastfm-img2.akamaized.net/i/u/174s/b3604006f4e54e73b76246962135dff8.png"/>
              <a class="m0">Dark Twisted Fantasy</a>
              <p class="m0">Kanye West</p>
            </div>
            <div class="p1 rounded col col-3">
              <img src="https://lastfm-img2.akamaized.net/i/u/174s/b3604006f4e54e73b76246962135dff8.png"/>
              <p class="m0">Dark Twisted Fantasy</p>
              <p class="m0">Kanye West</p>
            </div>
            <div class="p1 rounded col col-3">
              <img src="https://lastfm-img2.akamaized.net/i/u/174s/b3604006f4e54e73b76246962135dff8.png"/>
              <p class="m0">Dark Twisted Fantasy</p>
              <p class="m0">Kanye West</p>
            </div>
            <div class="p1 rounded col col-3">
              <img src="https://lastfm-img2.akamaized.net/i/u/174s/b3604006f4e54e73b76246962135dff8.png"/>
              <p class="m0">Dark Twisted Fantasy</p>
              <p class="m0">Kanye West</p>
            </div>
            <div class="p1 rounded col col-3">
              <img src="https://lastfm-img2.akamaized.net/i/u/174s/b3604006f4e54e73b76246962135dff8.png"/>
              <p class="m0">Dark Twisted Fantasy</p>
              <p class="m0">Kanye West</p>
            </div>
            <div class="p1 rounded col col-3">
              <img src="https://lastfm-img2.akamaized.net/i/u/174s/b3604006f4e54e73b76246962135dff8.png"/>
              <p class="m0">Dark Twisted Fantasy</p>
              <p class="m0">Kanye West</p>
            </div>
            <div class="p1 rounded col col-3">
              <img src="https://lastfm-img2.akamaized.net/i/u/174s/b3604006f4e54e73b76246962135dff8.png"/>
              <p class="m0">Dark Twisted Fantasy</p>
              <p class="m0">Kanye West</p>
            </div>
            <div class="p1 rounded col col-3">
              <img src="https://lastfm-img2.akamaized.net/i/u/174s/b3604006f4e54e73b76246962135dff8.png"/>
              <p class="m0">Dark Twisted Fantasy</p>
              <p class="m0">Kanye West</p>
            </div>
            </div>
           </Carousel.Item>
           <Carousel.Item>
            <div className="clearfix">
            <div class="p1 rounded col col-3">
              <img src="https://lastfm-img2.akamaized.net/i/u/174s/b3604006f4e54e73b76246962135dff8.png"/>
              <p class="m0">Dark Twisted Fantasy</p>
              <p class="m0">Kanye West</p>
            </div>
            <div class="p1 rounded col col-3">
              <img src="https://lastfm-img2.akamaized.net/i/u/174s/b3604006f4e54e73b76246962135dff8.png"/>
              <p class="m0">Dark Twisted Fantasy</p>
              <p class="m0">Kanye West</p>
            </div>
            <div class="p1 rounded col col-3">
              <img src="https://lastfm-img2.akamaized.net/i/u/174s/b3604006f4e54e73b76246962135dff8.png"/>
              <p class="m0">Dark Twisted Fantasy</p>
              <p class="m0">Kanye West</p>
            </div>
            <div class="p1 rounded col col-3">
              <img src="https://lastfm-img2.akamaized.net/i/u/174s/b3604006f4e54e73b76246962135dff8.png"/>
              <p class="m0">Dark Twisted Fantasy</p>
              <p class="m0">Kanye West</p>
            </div>
            <div class="p1 rounded col col-3">
              <img src="https://lastfm-img2.akamaized.net/i/u/174s/b3604006f4e54e73b76246962135dff8.png"/>
              <p class="m0">Dark Twisted Fantasy</p>
              <p class="m0">Kanye West</p>
            </div>
            <div class="p1 rounded col col-3">
              <img src="https://lastfm-img2.akamaized.net/i/u/174s/b3604006f4e54e73b76246962135dff8.png"/>
              <p class="m0">Dark Twisted Fantasy</p>
              <p class="m0">Kanye West</p>
            </div>
            <div class="p1 rounded col col-3">
              <img src="https://lastfm-img2.akamaized.net/i/u/174s/b3604006f4e54e73b76246962135dff8.png"/>
              <p class="m0">Dark Twisted Fantasy</p>
              <p class="m0">Kanye West</p>
            </div>
            <div class="p1 rounded col col-3">
              <img src="https://lastfm-img2.akamaized.net/i/u/174s/b3604006f4e54e73b76246962135dff8.png"/>
              <p class="m0">Dark Twisted Fantasy</p>
              <p class="m0">Kanye West</p>
            </div>
            </div>
           </Carousel.Item>
           </Carousel>;
       </div>
    );
  }
}

export default Music;
