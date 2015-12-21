import makeReducer from 'shared/util/makeReducer';
import {
  IMP_REQUEST_SOLUTION,
  IMP_RECEIVE_SOLUTION } from 'shared/actions/import';

export const INITIAL_STATE = {
  isFetching: false,
  error: undefined,
  solution: undefined
};

const reducers = {};

reducers[IMP_REQUEST_SOLUTION] = () => {
  return {
    isFetching: true
  };
};

reducers[IMP_RECEIVE_SOLUTION] = (state, {solution}) => {
  return {
    isFetching: false,
    solution
  };
};

export const reducer = makeReducer({reducers, INITIAL_STATE});
