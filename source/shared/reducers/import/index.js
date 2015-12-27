import makeReducer from 'shared/util/makeReducer';
import {
  IMP_REQUEST_SOLUTION,
  IMP_RECEIVE_SOLUTION,
  IMP_SHOW_PANEL,
  IMP_HIDE_PANEL,
  IMP_VALIDATE_SOLUTION } from 'shared/actions/import';
import testSolution from './testSolution';
import validateCoords from 'shared/reducers/tour/validateCoords';
import generateMatrix from 'shared/util/generateMatrix';
import updateMatrix from 'shared/util/updateMatrix';

export const INITIAL_STATE = {
  isFetching: false,
  error: '',
  solutionStr: '',
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
    solutionStr: solution
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

reducers[IMP_VALIDATE_SOLUTION] = ({solutionStr}) => {
  const solution = eval(solutionStr)({validateCoords: validateCoords(8, 8), generateMatrix, updateMatrix});
  return {
    ...testSolution(8, 8)(solution),
    solution
  };
};

export const reducer = makeReducer({reducers, INITIAL_STATE});
