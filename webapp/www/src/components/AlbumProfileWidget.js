import React, { Component } from 'react';
import logo from '../logo.svg';
import _ from 'lodash';

class AlbumProfileWidget extends Component {
  constructor(props) {
    super(props);

    this.state = {
      albumObj: {},
    };
  }

  componentDidMount () {
    this.getAlbumData();
  }

  getAlbumData () {
    const url = `http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=89c323534df2d043fed5a8c702d8d91d&mbid=${this.props.id}&format=json`;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        this.setState({
          albumObj: data.album,
        })
      })
      .catch(e => e);
  }

  render() {
    const imgurl = _.get(this.state.albumObj, 'image[3].#text');
    const albumName = _.get(this.state.albumObj, 'name');
    const artist = _.get(this.state.albumObj, 'artist');
    return (
      <div>
        <h5>{albumName}</h5>
        <h6>{artist}</h6>
        <img src={imgurl}
          className="mt1"
          height="30"
          width="30" />
      </div>
    );
  }
}

export default AlbumProfileWidget;
