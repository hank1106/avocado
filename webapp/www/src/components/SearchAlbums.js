import React, { Component } from 'react';
import logo from '../logo.svg';
import _ from "lodash";
import {BrowserRouter} from "react-router-dom";
import '../css/Search.css';
import Rater from 'react-rater'

class Home extends Component {
  constructor(props) {
		super(props);
	}
  render() {
    const albums= this.props.albums;
    return (
      <div>
        <BrowserRouter basename="/Album" />
				<ul className="m5">
					{albums.map(album => {
            if(album.mbid == "") return;
						return <div className="mt2 flex flex-wrap content-end">
                    <div className="flex justify-start col-6 ml3 pb1 border-bottom">
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

export default Home;
