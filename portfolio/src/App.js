import React, { Component } from 'react';
import logo from './logo.svg';
import { Navbar,NavbarBrand } from 'reactstrap'
import Projects from './components/ProjectComponent'
import FavoriteDishes from './components/FavoriteDishes'
import './App.css';
import {DISHES} from './shared/dishes';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    };
  }


  render() {
    return (
      <div>
          <Navbar dark color="primary">
          <div className = "container">
            <NavbarBrand href ="/">Portfolio</NavbarBrand>
          </div>
          </Navbar>
          <Projects />
          <FavoriteDishes dishes = {this.state.dishes}/>
      </div>
    );
  }
}

export default App;
