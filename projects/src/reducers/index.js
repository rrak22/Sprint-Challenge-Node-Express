import { combineReducers } from 'redux';
import projectReducer from './projectReducer.js';
import actionReducer from './actionReducer.js';

export default combineReducers({
  projectReducer,
  actionReducer
});
