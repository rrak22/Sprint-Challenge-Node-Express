import axios from 'axios';
import { ERROR } from '../actions/projectActions';

export const FETCHING_ACTIONS = 'FETCHING_ACTIONS';
export const FETCHED_ACTIONS = 'FETCHED_ACTIONS';
export const ADDING_ACTION = 'ADDING_ACTION';
export const ADDED_ACTION = 'ADDED_ACTION';
export const UPDATING_ACTION = 'UPDATING_ACTION';
export const UPDATED_ACTION = 'UPDATED_ACTION';
export const REMOVING_ACTION = 'REMOVING_ACTION';
export const REMOVED_ACTION = 'REMOVED_ACTION';

export const getActionDetails = () => (dispatch) => {
  dispatch({ type: FETCHING_ACTIONS });
  axios.get('http://localhost:5000/api/projects')
    .then((response) => {
      let projectCount = response.data.length;
      while (projectCount > 0) {
        axios.get(`http://localhost:5000/api/projects/${projectCount}/actions`)
          .then((response) => {
            dispatch({ type: FETCHED_ACTIONS, actions: response.data });
          })
          .catch((error) => {
            dispatch({ type: ERROR, errorMessage: error.response.data.Error });
          });
          projectCount--;
      }
    })
    .catch((error) => {
      dispatch({ type: ERROR, errorMessage: error.response.data.Error });
    });
  };

  export const addAction = (name, description, projectID) => (dispatch) => {
    dispatch({ type: ADDING_ACTION });
    axios.post(`http://localhost:5000/projects/${projectID}/actions/add`, {name, description})
      .then((response) => {
        dispatch({ type: ADDED_ACTION, addedAction: response.data });
      })
      .catch((error) => {
        dispatch({ type: ERROR, errorMessage: error.response.data.Error });
      })
  };

  export const updateAction = (name, description, projectID, actionID) => (dispatch) => {
    dispatch({ type: UPDATING_ACTION, });
    axios.put(`http://localhost:5000/projects/${projectID}/actions/${actionID}/update`, {name, description})
      .then((response) => {
        dispatch({ type: UPDATED_ACTION, updatedAction: response.data });
      })
      .catch((error) => {
        dispatch({ type: ERROR, errorMessage: error.response.data.Error });
      })
  };

  export const deleteAction = (projectID, actionID) => (dispatch) => {
    dispatch({ type: REMOVING_ACTION, projectID: projectID, actionID: actionID });
    axios.delete(`http://localhost:5000/projects/${projectID}/actions/${actionID}/delete`)
      .then((response) => {
        dispatch({ type: REMOVED_ACTION, removedAction: response.data });
      })
      .catch((error) => {
        dispatch({ type: ERROR, errorMessage: error.response.data.Error });
      })
  };
