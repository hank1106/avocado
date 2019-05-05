import React, { Component } from 'react';
import logo from '../logo.svg';
import _ from "lodash";

class TopListItem extends Component {
  constructor(props) {
		super(props);

    this.state = {
			albumObj: {},
		};
	}

  componentDidMount() {
		this.getAlbumData();
    //console.log(this.state.albumObj);
	}

	getAlbumData() {
		const url = `http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=89c323534df2d043fed5a8c702d8d91d&mbid=${
			this.props.id
		}&format=json`;
    console.log(url);
		fetch(url)
			.then(res => res.json())
			.then(data => {
				this.setState({
					albumObj: data.album
				});
			})
			.catch(e => e);
	}

  render() {
    const name = _.get(this.state.albumObj, "name");
    const imgurl = _.get(this.state.albumObj, "image[3].#text");
    const artist = _.get(this.state.albumObj, "artist");
    if(artist == null) return null;
    return (
      <div className="flex justify-start my2">
        <img
          src={imgurl}
          className="top_list_img mr1"/>
        <div className="list_cutoff">
          <a href={"Album/"+this.props.id}>{name}</a>
          <div className="toplist_subtext">{artist}</div>
        </div>
        <div>
        </div>
      </div>
    );
  }
}

export default TopListItem;
