import React, { Component } from 'react';
import {
  Jumbotron,
  Button,
 } from 'react-bootstrap';

class Home extends Component {
  render() {
    return (
      <Jumbotron>
        <h1>Adam Fielding</h1>
        <p>This is a website I am making, isn't it amazing Madi?</p>
        <p><Button bsStyle="primary">About</Button></p>
      </Jumbotron>
    );
  }
}
export default Home;
