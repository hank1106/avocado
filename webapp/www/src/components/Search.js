import React, { Component } from 'react';
import logo from '../logo.svg';
import _ from "lodash";
import {BrowserRouter, Route, Switch} from "react-router-dom";

class Search extends Component {
  constructor(props) {
		super(props);

		this.state = {
			searchTerm: "",
      searchResults: {},
		};
	}
  componentDidMount() {
    const searchText = new URLSearchParams(this.props.location.search);
    this.state.searchTerm = searchText.get('text');
    this.getSearchResult();
  }

  getSearchResult() {
		const url = `http://ws.audioscrobbler.com/2.0/?method=album.search&album=${
			this.state.searchTerm
		}&api_key=89c323534df2d043fed5a8c702d8d91d&format=json`;
    console.log(url);
		fetch(url)
			.then(res => res.json())
			.then(data => {
				this.setState({
					searchResults: data.results
				});
			})
			.catch(e => e);
	}
  render() {
    const albums = _.get(this.state.searchResults, "albummatches.album");
    if (albums == null) return null;
    return (
      <div>
				<h6>Search Results</h6>
        <BrowserRouter basename="/Album" />
				<ul>
					{albums.map(album => {
            if(album.mbid == "") return;
						return <div>
                    <img src={_.get(album, "image[2].#text")}/>
                    {album.name}
                    <a href={"Album/"+album.mbid}>link text</a>
                  </div>;
					})}
				</ul>
			</div>
    );
  }
}

export default Search;
