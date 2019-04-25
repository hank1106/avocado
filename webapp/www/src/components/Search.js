import React, { Component } from 'react';
import logo from '../logo.svg';
import _ from "lodash";
import {BrowserRouter} from "react-router-dom";
import '../css/Search.css';
import Rater from 'react-rater'

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
        <BrowserRouter basename="/Album" />
				<ul className="m5">
          <h6 className="p5">search results</h6>
					{albums.map(album => {
            if(album.mbid == "") return;
						return <div className="mt2 flex flex-wrap content-end">
                    <div className="flex justify-start col-6 ml3 border-bottom">
                      <img src={_.get(album, "image[2].#text")}
                        className="search_img"/>
                      <div className="mx2 mt1">
                        <div className="strict_one_line"><a href={"Album/"+album.mbid}>{album.name}</a></div>
                        <div className="subtext">{album.artist}s</div>
                        <div className="flex justify-start mt1 strict_one_line">
                          <Rater
                            total={5}
                            rating={4}
                            interactive={false}
                          />
                          <div className="subtext">(500 ratings)</div>
                        </div>
                      </div>
                    </div>
                    <div class="col-4"></div>
                  </div>;
					})}
				</ul>
			</div>
    );
  }
}

export default Search;
