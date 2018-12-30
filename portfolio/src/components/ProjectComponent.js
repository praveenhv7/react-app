import React, {Component} from 'react';
import {Media} from 'reactstrap';

class Projects extends Component {

  constructor(props) {
    super(props);

    this.state = {
      academicProjects : [
        {
          id:0,
          name: 'Kademlia',
          label: 'Computer Netwroks',
          description: 'DHT based protocol'
        },
        {
          id:1,
          name: 'Tron Bot',
          label: 'Fundamentals of AI',
          description : 'Using MiniMax and Neural Networks'
        }

      ]
    }
  }

  render() {
    const projects = this.state.academicProjects.map((project) => {
      return (
        <div key = {project.id} className="col-12 mt-3">
          <Media tag = "li">
            <Media left middle>
              <Media object data-src="holder.js/64x64" alt = {project.name} />
            </Media>
              <Media body className="ml-5">
                <Media heading>
                  {project.name}
                </Media>
                  <p> {project.description} </p>
              </Media>
          </Media>
        </div>
      )
    });
    return (
      <div className = "container">
      <div className="row">
      <h3 className="col-12 mt-2"> Projects </h3>
      </div>
        <div className = "row">
          <Media list>
            {projects}
          </Media>
        </div>
      </div>
    );
  }

}

export default Projects;
