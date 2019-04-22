import React, {Component} from "react";
import logo from "../logo.svg";
import _ from "lodash";
import '../css/AlbumTrackList.css';

class AlbumTrackList extends Component {
	constructor(props) {
		super(props);

    this.state = {
			albumObj: {},
			loading: true
		};
	}

  componentDidMount() {
		this.getAlbumData();
	}

	getAlbumData() {
		const url = `http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=89c323534df2d043fed5a8c702d8d91d&mbid=${
			this.props.id
		}&format=json`;
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
    const tracks = _.get(this.state.albumObj, "tracks.track");
		if (tracks == null) return null;
		return (
			<div>
				<h6>Album Track List</h6>
				<ul>
					{tracks.map(track => {
						return <div>{track.name}</div>;
					})}
				</ul>
			</div>
		);
	}
}

export default AlbumTrackList;
