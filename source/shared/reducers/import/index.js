import makeReducer from 'shared/util/makeReducer';
import {
  IMP_REQUEST_SOLUTION,
  IMP_RECEIVE_SOLUTION,
  IMP_SHOW_PANEL,
  IMP_HIDE_PANEL,
  IMP_VALIDATE_SOLUTION } from 'shared/actions/import';
import testSolution from 'shared/reducers/import/testSolution';

export const INITIAL_STATE = {
  isFetching: false,
  error: undefined,
  solution: undefined,
  valid: false
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

reducers[IMP_SHOW_PANEL] = () => {
  return {
    showPanel: true
  };
};

reducers[IMP_HIDE_PANEL] = () => {
  return {
    showPanel: false
  };
};

reducers[IMP_VALIDATE_SOLUTION] = ({solution}) => {
  return testSolution(solution);
};

export const reducer = makeReducer({reducers, INITIAL_STATE});
