import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import albumcover1 from '../assets/album2.jpeg';
import albumcover2 from '../assets/jt.jpeg';
import albumcover3 from '../assets/album3.jpeg';



class MusicCarousel extends Component {
    render() {
        return (
            <Carousel width={550} showThumbs={false} dynamicHeight={true} autoPlay={true} interval={2000} infiniteLoop={true}>
                <div>
                    <img src={albumcover2} />
                    <img src={albumcover3} />
                </div>
                <div>
                    <img src={albumcover1} />
                    <img src={albumcover3} />
                </div>
                <div>
                    <img src={albumcover3} />
                </div>
            </Carousel>
        );
    }
}

export default MusicCarousel;
