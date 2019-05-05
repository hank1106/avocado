import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Carousel from 'react-bootstrap/Carousel';
import '../css/MusicCarousel.css';



class MusicCarousel extends Component {
    render() {
        return (
          <div className="flex mt4">
            <Carousel controls={false} className="caro desc ml3 border-top">
              <Carousel.Item>
               <div className="clearfix pt2">
               <div class="p1 rounded col col-3 cutoff">
                 <img src="https://lastfm-img2.akamaized.net/i/u/300x300/b3604006f4e54e73b76246962135dff8.png"/>
                 <a class="m0"><div className="cutoff">My Beautiful Dark Twisted Fantasy</div></a>
                 <p class="m0">Kanye West</p>
               </div>
               <div class="p1 rounded col col-3">
                 <img src="https://lastfm-img2.akamaized.net/i/u/300x300/86b35c4eb3c479da49c915d8771bbd1a.png"/>
                 <p class="m0"><div className="cutoff">To Pimp A Butterfly</div></p>
                 <p class="m0">Kendrick Lamar</p>
               </div>
               <div class="p1 rounded col col-3">
                 <img src="https://lastfm-img2.akamaized.net/i/u/300x300/553678d27570452839aec0fd0cdadd63.png"/>
                 <p class="m0">Channel Orange</p>
                 <p class="m0">Frank Ocean</p>
               </div>
               <div class="p1 rounded col col-3">
                 <img src="https://lastfm-img2.akamaized.net/i/u/300x300/1c892b22c3a14addc25f13a0abb5f1fe.png"/>
                 <p class="m0">Freudian</p>
                 <p class="m0">Daniel Caesar</p>
               </div>
               <div class="p1 rounded col col-3">
                 <img src="https://lastfm-img2.akamaized.net/i/u/300x300/de87486b44ed660d8bc9b5fa9a416336.png"/>
                 <p class="m0">Marshall Mathers LP</p>
                 <p class="m0">Eminem</p>
               </div>
               <div class="p1 rounded col col-3">
                 <img src="https://lastfm-img2.akamaized.net/i/u/300x300/bdc48786e7ca4ccfb9e5624036f738a0.png"/>
                 <p class="m0">Long.Live.ASAP</p>
                 <p class="m0">A$AP Rocky</p>
               </div>
               <div class="p1 rounded col col-3">
                 <img src="https://lastfm-img2.akamaized.net/i/u/300x300/bac1394291d28a3c23f8e9f4083eadd2.png"/>
                 <p class="m0"><div className="cutoff">WHEN WE FALL ASLEEP, WHERE DO WE GO?</div></p>
                 <p class="m0">Billie Eilish</p>
               </div>
               <div class="p1 rounded col col-3">
                 <img src="https://lastfm-img2.akamaized.net/i/u/300x300/be18bb624a3e8a0e415ef45a686f15d0.png"/>
                 <p class="m0">Thank u, next</p>
                 <p class="m0">Ariana Grande</p>
               </div>
               </div>
              </Carousel.Item>
              <Carousel.Item>
               <div className="clearfix pt2">
               <div class="p1 rounded col col-3">
                 <img src="https://lastfm-img2.akamaized.net/i/u/300x300/3d61b59130d858416b7725b6e45eb833.png"/>
                 <p class="m0">Days Before Rodeo</p>
                 <p class="m0">Travis Scott</p>
               </div>
               <div class="p1 rounded col col-3">
                 <img src="https://lastfm-img2.akamaized.net/i/u/300x300/d9f1b555a9cd4034c0aaf1e7fedb1b0d.png"/>
                 <p class="m0">Must Be Nice</p>
                 <p class="m0">G-Eazy</p>
               </div>
               <div class="p1 rounded col col-3">
                 <img src="https://lastfm-img2.akamaized.net/i/u/300x300/52a7f32bdc99238080b0f17e859b3b4d.png"/>
                 <p class="m0">Flower Boy</p>
                 <p class="m0">Tyler, The Creator</p>
               </div>
               <div class="p1 rounded col col-3">
                 <img src="https://lastfm-img2.akamaized.net/i/u/300x300/e9dd5c8d3294ca0a0f58cbf7ad5fd6a6.png"/>
                 <p class="m0">Kids See Ghost</p>
                 <p class="m0">Kids See Ghost</p>
               </div>
               <div class="p1 rounded col col-3">
                 <img src="https://lastfm-img2.akamaized.net/i/u/300x300/6b524dcef88b2d46af9b3b611df7057b.png"/>
                 <p class="m0">Isolation</p>
                 <p class="m0">Kali Uchis</p>
               </div>
               <div class="p1 rounded col col-3">
                 <img src="https://lastfm-img2.akamaized.net/i/u/300x300/bad6b50569d18cdc9c6efb883b2ba213.png"/>
                 <p class="m0">Black Panther</p>
                 <p class="m0">Various Artists</p>
               </div>
               <div class="p1 rounded col col-3">
                 <img src="https://lastfm-img2.akamaized.net/i/u/300x300/fad795bc93cbf4f31c95ecac60905797.png"/>
                 <p class="m0">Life Of Pablo</p>
                 <p class="m0">Kanye West</p>
               </div>
               <div class="p1 rounded col col-3">
                 <img src="https://lastfm-img2.akamaized.net/i/u/300x300/d4f6f6f537a28b6b15f793515b95452b.png"/>
                 <p class="m0">"Awaken, My Love!</p>
                 <p class="m0"></p>
               </div>
               </div>
              </Carousel.Item>
              </Carousel>
          </div>
        );
    }
}

export default MusicCarousel;
