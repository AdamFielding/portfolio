import React, { Component } from 'react';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import {
  Navbar,
  Nav,
  NavItem,
  Grid
} from 'react-bootstrap';
import Abou from './components/Abou';
import Work from './components/Work';
import Contact from './components/Contact';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <Grid>
        <BrowserRouter>
          <div>
            <Navbar>
              <Navbar.Header>
                <LinkContainer to="/">
                  <Navbar.Brand>Adam Fielding</Navbar.Brand>
                </LinkContainer>
              </Navbar.Header>
              <Nav pullRight>
                <LinkContainer to="/work">
                  <NavItem>Work</NavItem>
                </LinkContainer>
                <LinkContainer to="/about">
                  <NavItem>About</NavItem>
                </LinkContainer>
                <LinkContainer to="/contact">
                  <NavItem>Contact</NavItem>
                </LinkContainer>
              </Nav>
            </Navbar>

            <Route exact path="/" component={Home}/>
            <Route path="/work" component={Work}/>
            <Route path="/about" component={Abou}/>
            <Route path="/contact" component={Contact}/>
          </div>
        </BrowserRouter>
      </Grid>

    );
  }
}
export default App;
