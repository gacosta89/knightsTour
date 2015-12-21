export const IMP_REQUEST_SOLUTION = 'imp_request_solution';

export const impRequestSolution = () => {
  return {
    type: IMP_REQUEST_SOLUTION
  };
};

export const IMP_RECEIVE_SOLUTION = 'imp_receive_solution';

export const impReceiveSolution = solution => {
  return {
    type: IMP_RECEIVE_SOLUTION,
    solution
  };
};

export const IMP_SOLUTION = 'imp_solution';

export const impSolution = getJS => url => dispatch => {
  dispatch(impRequestSolution());
  getJS(url)
    .then(solution => dispatch(impReceiveSolution(solution)));
};
