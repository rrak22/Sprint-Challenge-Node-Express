import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProjectDetails } from './actions/projectActions.js';
import { getActionDetails } from './actions/actionActions.js';
import ProjectOverview from './components/ProjectOverview.js';
import './App.css';

class App extends Component {

  componentDidMount() {
    this.props.getProjectDetails();
    this.props.getActionDetails();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <ProjectOverview />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    fetching: state.fetching,
    projects: state.projects,
    actions: state.actions,
    error: state.errorMessage,
  }
}

export default connect(mapStateToProps, { getProjectDetails, getActionDetails })(App);
