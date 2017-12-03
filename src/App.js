import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Link
} from 'react-router-dom';
import { Container, Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import Home from './components/Home';
import Work from './components/Work';
import About from './components/About';
import Contact from './components/Contact';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Container>
          <Navbar color="faded" light expand="md">
            <NavbarBrand href="/">Adam Fielding</NavbarBrand>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink><Link to="/work">Work</Link></NavLink>
                </NavItem>
                <NavItem>
                  <NavLink><Link to="/about">About</Link></NavLink>
                </NavItem>
                <NavItem>
                  <NavLink><Link to="/contact">Contact</Link></NavLink>
                </NavItem>
              </Nav>
          </Navbar>
           <Route exact path={`/`} component={Home}/>
           <Route path={`/work`} component={Work}/>
           <Route path={`/about`} component={About}/>
           <Route path={`/contact`} component={Contact}/>
        </Container>
      </BrowserRouter>
    );
  }
}
export default App;
