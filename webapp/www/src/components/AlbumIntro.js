import React, { Component } from 'react';
import logo from '../logo.svg';
import _ from 'lodash';
import ReadMoreAndLess from 'react-read-more-less';

class AlbumIntro extends Component {
  constructor(props) {
    super(props);

    this.state = {
      albumObj: {},
      loading: true,
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
    const text = _.get(this.state.albumObj, 'wiki.summary');
    if(text == null) return (null);
    return (
      <div className="mt3">
        <h6>Album Summary</h6>
        <ReadMoreAndLess
               ref={this.ReadMore}
               className="read-more-content"
               charLimit={250}
               readMoreText="Read more"
               readLessText="Read less"
           >
               {text}
           </ReadMoreAndLess>
      </div>
    );
  }
}

export default AlbumIntro;
