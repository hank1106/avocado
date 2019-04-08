import React, { Component } from 'react';
import logo from '../logo.svg';

class Album extends Component {
  constructor(props){
    super(props);

    this.state = {
      albumObj: [],
    };
  }

  render() {
    const {id} = this.props.match.params;
    fetch(`http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=89c323534df2d043fed5a8c702d8d91d&mbid=${id}&format=json`)
      .then(res => res.json())
      .then(json => {
        this.setState({
          albumObj: json
        });
      });
    return (
      <div>
        <h6 className="m4">The album id is {id}</h6>
        <p>The album is dynamically fetched from last fm api and printed in console log</p>
        {console.log(this.state.albumObj)}
        {this.state.albumObj.toString()}
      </div>
    );
  }
}

export default Album;
