import { combineReducers } from 'redux';
import { reducer as tour } from 'shared/reducers/tour';
import { reducer as exec } from 'shared/reducers/execute';
import { reducer as imp } from 'shared/reducers/import';

export default combineReducers({
  tour,
  exec,
  imp
});
