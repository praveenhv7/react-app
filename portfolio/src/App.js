import React, { Component } from 'react';
import logo from './logo.svg';
import { Navbar,NavbarBrand } from 'reactstrap'
import Projects from './components/ProjectComponent'
import FavoriteDishes from './components/FavoriteDishes'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
          <Navbar dark color="primary">
          <div className = "container">
            <NavbarBrand href ="/">Portfolio</NavbarBrand>
          </div>
          </Navbar>
          <Projects />
          <FavoriteDishes/>
      </div>
    );
  }
}

export default App;
