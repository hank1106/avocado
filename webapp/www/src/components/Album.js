import React, { Component } from 'react';
import logo from '../logo.svg';

class Album extends Component {
  constructor(props){
    super(props);

    this.state = {
      albumObj: {},
      id: "",
    };
  }


  componentDidMount() {
    const {id} = this.props.match.params;
    this.setState({id: this.props.match.params.id});
    fetch(`http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=89c323534df2d043fed5a8c702d8d91d&mbid=${id}&format=json`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          albumObj: data.album,
        });
      });
  }
  render() {
    return (
      <div>
        <h6 className="m4">The album id is {this.state.id}</h6>
        <h1>{this.state.albumObj.name}</h1>
        <br />
        artist name:
        <h1>{this.state.albumObj.artist}</h1>
      </div>
    );
  }
}

export default Album;
