import makeReducer from 'shared/util/makeReducer';
import {
  EXEC_SET_INTERVAL,
  EXEC_RESUME,
  EXEC_PAUSE,
  EXEC_SET_TOUR } from 'shared/actions/execute';
export const INITIAL_STATE = {
  interval: undefined,
  running: false,
  tour: [],
  error: undefined
};

const reducers = {};

reducers[EXEC_SET_INTERVAL] = (state, {time}) => {
  return {
    interval: time
  };
};

reducers[EXEC_RESUME] = ({tour}) => {
  return tour.length > 0 ? {
    running: true
  } : {
    running: false,
    error: 'You should set the tour first.'
  };
};

reducers[EXEC_PAUSE] = () => {
  return {
    running: false
  };
};

reducers[EXEC_SET_TOUR] = ({running}, {tour}) => {
  return !running ? tour.length === 64 ? {
    tour
  } : { error: 'Wrong tour lenght.' } : { error: 'Already running.' };
};

export const reducer = makeReducer({reducers, INITIAL_STATE});
