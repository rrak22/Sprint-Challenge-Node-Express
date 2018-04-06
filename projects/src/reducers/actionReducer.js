import { FETCHING_ACTIONS, FETCHED_ACTIONS, ADDING_ACTION, ADDED_ACTION, UPDATING_ACTION, UPDATED_ACTION, REMOVING_ACTION, REMOVED_ACTION } from '../actions/actionActions.js';
import { ERROR } from '../actions/projectActions';

const initialState = {
  actions: [],
  fetching_actions: false,
  adding_action: false,
  updating_action: false,
  removing_action: false,
  error: null,
};

export default (state = initialState, action) => {
  switch(action.type) {
    case FETCHING_ACTIONS:
      return { ...state, fetching_actions: true };
    case FETCHED_ACTIONS:
      return { ...state, fetching_actions: false, error: null, actions: action.actions };
    case ADDING_ACTION:
      return { ...state, adding_action: true };
    case ADDED_ACTION:
      return { ...state, adding_action: false, error: null };
    case UPDATING_ACTION:
      return { ...state, updating_action: true };
    case UPDATED_ACTION:
      return { ...state, updated_action: false, error: null };
    case REMOVING_ACTION:
      return { ...state, removing_action: true };
    case REMOVED_ACTION:
      return { ...state, removed_action: false, error: null };
    case ERROR:
      return { ...state, error: action.errorMessage };
    default:
      return state;
    }
  };
