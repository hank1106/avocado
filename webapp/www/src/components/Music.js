import React, { Component } from 'react';
import logo from '../logo.svg';
import MusicCarousel from './MusicCarousel.js';
import '../css/Music.css';
import { Redirect } from 'react-router-dom'

class Music extends Component {
  constructor(props) {
		super(props);

		this.state = {
			searchValue: "",
		};

    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
	}

  handleSearch() {
    if(this.state.searchValue.length != 0){
      this.props.history.push("/Search?text="+this.state.searchValue);
    }
  }

  handleChange(event) {
    this.setState({searchValue: event.target.value});
  }

  handleKeyDown(e) {
    if (e.key == 'Enter') {
      if(this.state.searchValue.length != 0){
        this.props.history.push("/Search?text="+this.state.searchValue);
      }
    }
  }

  render() {
    return (
      <div>
        <div className = "row mt2">
          <div className="col-4"></div>
          <form className="col-4">
            <input
              type="text"
              value={this.state.searchValue}
              className="input_box"
              onChange={this.handleChange}
              onKeyDown={this.handleKeyDown}/>
          </form>
          <div class="col-1">
            <button onClick={this.handleSearch}>
              Search
            </button>
          </div>
          <div class="col-3"></div>
        </div>
        <MusicCarousel />
      </div>
    );
  }
}

export default Music;
