import { TOUR_INIT } from 'shared/actions/tour';
import { execSetTour } from 'shared/actions/execute';

export default store => next => action => {
  const nextAction = next(action);
  if (action.type === TOUR_INIT) {
    const { imp, tour } = store.getState();

    if (typeof imp.solution === 'function') {
      store.dispatch(execSetTour(imp.solution(tour.moves[0])));
    }
  }
  return nextAction;
};
