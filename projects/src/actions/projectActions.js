import axios from 'axios';
export const FETCHING_PROJECTS = 'FETCHING_PROJECTS';
export const FETCHED_PROJECTS = 'FETCHED_PROJECTS';
export const ADDING_PROJECT = 'ADDING_PROJECT';
export const ADDED_PROJECT = 'ADDED_PROJECT';
export const UPDATING_PROJECT = 'UPDATING_PROJECT';
export const UPDATED_PROJECT = 'UPDATED_PROJECT';
export const REMOVING_PROJECT = 'REMOVING_PROJECT';
export const REMOVED_PROJECT = 'REMOVED_PROJECT';
export const ERROR = 'ERROR';

export const getProjectDetails = () => (dispatch) => {
  dispatch({ type: FETCHING_PROJECTS });
  axios.get('http://localhost:5000/api/projects')
    .then((response) => {
      dispatch({ type: FETCHED_PROJECTS, projects: response.data });
    })
    .catch((error) => {
      dispatch({ type: ERROR, errorMessage: error.response.data.Error });
    });
  };

  export const addProject = (name, description) => (dispatch) => {
    dispatch({ type: ADDING_PROJECT });
    axios.post('http://localhost:5000/projects/add', {name, description})
      .then((response) => {
        dispatch({ type: ADDED_PROJECT, addedProject: response.data });
      })
      .catch((error) => {
        dispatch({ type: ERROR, errorMessage: error.response.data.Error });
      })
  };

  export const updateProject = (name, description, id) => (dispatch) => {
    dispatch({ type: UPDATING_PROJECT, });
    axios.put(`http://localhost:5000/projects/${id}/update`, {name, description})
      .then((response) => {
        dispatch({ type: UPDATED_PROJECT, updatedProject: response.data });
      })
      .catch((error) => {
        dispatch({ type: ERROR, errorMessage: error.response.data.Error });
      })
  };

  export const deleteProject = (id) => (dispatch) => {
    dispatch({ type: REMOVING_PROJECT, id: id });
    axios.delete(`http://localhost:5000/projects/${id}/delete`)
      .then((response) => {
        dispatch({ type: REMOVED_PROJECT, removedProject: response.data });
      })
      .catch((error) => {
        dispatch({ type: ERROR, errorMessage: error.response.data.Error });
      })
  };
