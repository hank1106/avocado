import React, { Component } from 'react';
import logo from '../logo.svg';
import TopListItem from './TopListItem.js';

class TopListWidget extends Component {
  render() {
    const albums = [
      'cd7d8c81-d519-4149-8cd0-ade722ad19b9',
      '51544aed-52a1-42b9-aff0-9237ac3dd564',
      '2d8484f1-6ed3-4bb0-b8ac-ad2c2b69835e',
      '67678102-7a0a-4bd1-aa78-2ebb1f114aca',
      'd1bcf9e5-a5e4-3f99-908c-610b2d0e33ed',
      'e1d99364-1ad9-4f4d-9505-2242eff10a44',
      'a2324711-2a9b-4316-8629-62b09bfd32de',
      '695b4a0e-985d-49a8-a315-7c7831a60ff2',
      '09beb268-b0b0-4f85-8662-11eab94aa61a',
      '17de02f3-5ee1-41c9-9ba4-42bca40dd848'];
    return (
      <div className="mt2">
				<h6 className="ml2">Avocado Top 10</h6>
				<ul className="border-top ml2 toplist_box">
					{albums.map(album => {
						return <TopListItem id = {album} />;
					})}
				</ul>
			</div>
    );
  }
}

export default TopListWidget;
