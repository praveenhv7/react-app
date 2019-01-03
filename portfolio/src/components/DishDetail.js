import React,{Component} from 'react'
import {Card,CardBody,CardHeader,CardImg,CardText,CardTitle} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


class DishDetail extends Component{

  constructor(props){
    super(props);
  }

  renderDish(dish) {
    if(dish != null) {
      return (
        <Card>
        <CardImg width="100%" object src={dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle >{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
        </Card>
      );
    }
    else {
      return (<div> </div>);
    }
  }

  renderComments(selectedDish)
  {
    if(selectedDish != null){
      const commentData = selectedDish.comments.map((vcomment) => {
        return (

          <CardBody key={vcomment.id}>
            <div className = "row">
              <CardTitle className="col-sm-4">{vcomment.author}</CardTitle>
              <CardTitle className="col-sm-4"></CardTitle>
              <CardTitle className="col-sm-4">Rating:{vcomment.rating}</CardTitle>
            </div>
            <CardText>Date--{vcomment.date}</CardText>
            <CardText>{vcomment.comment}</CardText>
          </CardBody>

        );
      }
    );
      return (<div>{commentData} </div>);

    }
    else {
      return (<div>  </div>);
    }
  }

  render(){
    const selectedDish = this.props.selectedDishDetails;
    //const comments = this.renderComments(selectedDish);
    return (
      <div className="container">
          <div className = "row">
              <h3 className="col-12 mt-2"> Selected Dish: </h3>
          <div className ="col-12 col-md-5 m-1">
            {this.renderDish(selectedDish)}
          </div>
          <div className ="col-12 col-md-5 m-1">
            <Card className="card border-warning mb-3">
            <CardHeader>Comments</CardHeader>
            {this.renderComments(selectedDish)}
            </Card>
          </div>
          </div>
        </div>
      );
  }


}

export default DishDetail;
