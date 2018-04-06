import React, { Component } from 'react';
import { connect } from 'react-redux';

class ProjectOverview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
    }
  }

  render() {
    return (
      <ol className='projectContainer'>
        {this.state.projects.map((project, i) => {
          return (
            <li className='projectCard' key={project.id}>
              <p>{project.name}</p>
              <p>{project.description}</p>
              <p>Status: {project.completed.toString()}</p>
            </li>
          )
        })}
      </ol>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    projects: state.projects,
  };
};

export default connect(mapStateToProps)(ProjectOverview);
