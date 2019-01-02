import React, {Component} from 'react';
import {Media,Card,CardBody,CardImg,CardImgOverlay,CardText,CardHeader,CardTitle} from 'reactstrap';
import DishDetail from './DishDetail'

class FavoriteDishes extends Component{

  constructor(props) {
    super(props);
    this.state = {
      selectedDish : null
       }
  }

  onDishSelect(dish) {
    this.setState({selectedDish : dish});
  }



  render() {
    const myDishes = this.props.dishes.map((dish) => {
      return (
        <div className="col-12 col-md-5 m-1">
        <Card key={dish.id} onClick={()=> this.onDishSelect(dish)} >
                      <CardImg width="100%" object src={dish.image} alt={dish.name} />
                      <CardImgOverlay className="ml-5">
                    <CardTitle>{dish.name}</CardTitle>
                  </CardImgOverlay>
                </Card>
              </div>
      );

    });
    return (
          <div className="container">
            <div className="row">
            <h3 className="col-12 mt-2"> Favorite Dishes </h3>
                  {myDishes}
            </div>
            <div className = "row">
            <h3 className="col-12 mt-2"> Selected Dish: </h3>
            </div>
              <DishDetail selectedDishDetails = {this.state.selectedDish}>
              </DishDetail>
          </div>
        );
  }

}

export default FavoriteDishes;
