import { combineReducers } from 'redux';
import { reducer as tour } from 'shared/reducers/tour';
import { reducer as exec } from 'shared/reducers/execute';

export default combineReducers({
  tour,
  exec
});
