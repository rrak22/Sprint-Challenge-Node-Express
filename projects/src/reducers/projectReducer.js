import { FETCHING_PROJECTS, FETCHED_PROJECTS, ADDING_PROJECT, ADDED_PROJECT, UPDATING_PROJECT, UPDATED_PROJECT, REMOVING_PROJECT, REMOVED_PROJECT } from '../actions/projectActions.js';
import { ERROR } from '../actions/projectActions';

const initialState = {
  projects: [],
  fetching_projects: false,
  adding_project: false,
  updating_project: false,
  removing_project: false,
  error: null,
};

export default (state = initialState, action) => {
  switch(action.type) {
    case FETCHING_PROJECTS:
      return { ...state, fetching_projects: true };
    case FETCHED_PROJECTS:
      return { ...state, fetching_projects: false, error: null, projects: action.projects };
    case ADDING_PROJECT:
      return { ...state, adding_project: true };
    case ADDED_PROJECT:
      return { ...state, adding_project: false, error: null };
    case UPDATING_PROJECT:
      return { ...state, updating_project: true };
    case UPDATED_PROJECT:
      return { ...state, updated_project: false, error: null };
    case REMOVING_PROJECT:
      return { ...state, removing_project: true };
    case REMOVED_PROJECT:
      return { ...state, removed_project: false, error: null };
    case ERROR:
      return { ...state, error: action.errorMessage };
    default:
      return state;
    }
  };
