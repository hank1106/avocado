import React, { Component } from 'react';
import logo from '../logo.svg';
import { Mutation, ApolloConsumer } from 'react-apollo';
import gql from 'graphql-tag';

class CreateReview extends Component {
  render() {
    const POST_MUTATION = gql`
      mutation{
        createReview(review: {userID:1, artID: 3, text: "testing 917", timestamp:4, upvotes:5}){
          reviewID
        }
      }
    `;
    return (
      <Mutation mutation={POST_MUTATION}>
        {postMutation => <button onClick={postMutation}>Submit</button>}
      </Mutation>
    );
  }}

export default CreateReview;
