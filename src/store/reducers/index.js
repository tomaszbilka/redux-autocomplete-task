import { combineReducers } from 'redux';
import fetchNamesReducer from './name-reducer';

const reducers = combineReducers({
  names: fetchNamesReducer,
});

export default reducers;
