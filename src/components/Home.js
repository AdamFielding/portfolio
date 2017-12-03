import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Jumbotron,
  Button,
} from 'reactstrap';

class Home extends Component {
  render() {
    return (
      <Jumbotron fluid className="text-center">
        <h1 className="display-3">Adam Fielding</h1>
        <p id="jumbo-text">I'm a graduate in computing based in the UK</p>
        <p>with a passion for the entire web stack.</p>
        <Link to="/about"><Button outline color="primary" size="lg">About</Button></Link>
    </Jumbotron>
    );
  }
}
export default Home;
