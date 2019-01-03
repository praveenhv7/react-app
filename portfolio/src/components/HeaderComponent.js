import React,{Component} from 'react';
import { Navbar,NavbarBrand,Nav,NavBarToggler,Collapse,NavItem,Jumbotron } from 'reactstrap'
import {NavLink} from 'react-router-dom';


class Header extends Component {

  constructor(props){
    super(props);
    this.state = {
      isNavOpen: false
    }
  }

  render(){
    return(
      /*React.Fragment*/
      <>
        <Navbar dark expand = "md">
          <div className = "container">
            <NavbarBrand className="mr-auto" href ="/">Portfolio</NavbarBrand>
              <Nav navbar>
                <NavItem>
                  <NavLink className="nav-link" to="/home">
                      <span className="fa fa-home fa-lg"></span>Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/aboutme">
                      <span className="fa fa-info fa-lg"></span>About Me
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/projects">
                      <span className="fa fa-info fa-lg"></span>Projects
                  </NavLink>
                </NavItem>
              </Nav>
          </div>
        </Navbar>

        <Jumbotron>
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-6">
              <h1>Praveen H.V.</h1>
                <p>Software Engineer in Boston, MA.<br/>
                Master of Science in Computer Science from
                Northeastern University. </p>
              </div>
            </div>
          </div>
        </Jumbotron>
      </>
    );
  }
}

export default Header;
