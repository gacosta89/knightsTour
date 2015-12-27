export default ({reducers, INITIAL_STATE}) => (state = INITIAL_STATE, action = {type: ''}) => {
  if (!reducers.hasOwnProperty(action.type)) {
    return state;
  }

  return {
    ...state,
    error: '',
    ...reducers[action.type](state, action)
  };
};
