import React, { Component } from 'react';
import Projects from './ProjectComponent';
import Home from './HomeComponent';
import FavoriteDishes from './FavoriteDishes';
import DishDetail from './DishDetail';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import '../App.css';
import {DISHES} from '../shared/dishes';
import {Switch,Route,Redirect} from 'react-router-dom';

class MainComponent extends Component {

  constructor(props){
    super(props);
    this.state ={
      dishes:DISHES,
      selectedDish : null
    };
  }

  onDishSelect(dishId) {
    this.setState({selectedDish : dishId});
  }

  render(){
    const HomePage = () => {
      return (
        <Home />
      );
    }
    return(
      <div>
          <Header/>
          <Switch>
            <Route path="/home" component = {HomePage} />
            <Route exact path="/projects" component = {Projects} />
            <Route exact path="/favDishes" component = {() => <FavoriteDishes dishes = {this.state.dishes} />} />
            <Redirect to = "/home" />
          </Switch>
          <Footer/>
      </div>
    );
  }

}

export default MainComponent;
