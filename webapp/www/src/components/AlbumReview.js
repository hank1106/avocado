import React, { Component } from 'react';
import logo from '../logo.svg';
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Moment from 'react-moment';
import { Redirect } from 'react-router-dom';
import {withRouter} from 'react-router-dom';
Moment.globalFormat = 'MMM D YYYY';

class AlbumReview extends Component {
  constructor(props) {
		super(props);

		this.state = {
			searchValue: "",
		};

    this.handleWriteReview = this.handleWriteReview.bind(this);
	}

  handleWriteReview() {
    this.props.history.push("/CreateReview");
  }

  render() {
    return (
      <Query query={gql`{review(id:5){text,timestamp,upvotes}}`}>
        {({ loading, error, data }) => {
          if (loading) return <div>Fetching</div>
          if (error) return <div>Error</div>
          console.log(data);
          return (
            <div className="mt3">
              <div className="flex justify-between">
                <h6>Reviews</h6>
                <button
                  className="btn bookmark_button"
                  onClick={this.handleWriteReview}>
                  I want to write a review
                </button>
              </div>
              <div className="p1 m1 mt2 border">
                <div>
                  <div className="col-right col-6 zero_padding">
                    Upvotes: {data.review.upvotes}
                  </div>
                  <div className="col col-6 zero_padding">
                    <Moment unix>{data.review.timestamp}</Moment>
                  </div>
                </div>
                {data.review.text}
              </div>
            </div>
          )
        }}
      </Query>
    );
  }
}

export default withRouter(AlbumReview);
