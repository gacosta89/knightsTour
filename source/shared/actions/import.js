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

export const impSolutionFactory = codepen => url => dispatch => {
  dispatch(impRequestSolution());
  codepen.getJS(url)
    .then(solution => dispatch(impReceiveSolution(solution)));
};

export const IMP_SHOW_PANEL = 'imp_show_panel';

export const impShowPanel = () => {
  return {
    type: IMP_SHOW_PANEL
  };
};

export const IMP_HIDE_PANEL = 'imp_hide_panel';

export const impHidePanel = () => {
  return {
    type: IMP_HIDE_PANEL
  };
};

export const IMP_VALIDATE_SOLUTION = 'imp_validate_solution';

export const impValidateSolution = () => {
  return {
    type: IMP_VALIDATE_SOLUTION
  };
};
