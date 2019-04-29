import React, { Component } from 'react';
import logo from '../logo.svg';
import _ from "lodash";
import '../css/Search.css';
import SearchAlbums from './SearchAlbums.js'

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
        <div className="search_result mt2">Search Results for {this.state.searchTerm}</div>
        <SearchAlbums albums={albums} />
			</div>
    );
  }
}

export default Search;
