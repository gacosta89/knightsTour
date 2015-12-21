export const EXEC_SET_INTERVAL = 'exec_set_interval';

export const execSetInterval = time => {
  return {
    type: EXEC_SET_INTERVAL,
    time
  };
};

export const EXEC_RESUME = 'exec_resume';

export const execResume = () => {
  return {
    type: EXEC_RESUME,
  };
};

export const EXEC_PAUSE = 'exec_pause';

export const execPause = () => {
  return {
    type: EXEC_PAUSE,
  };
};

export const EXEC_SET_TOUR = 'exec_set_tour';

export const execSetTour = tour => {
  return {
    type: EXEC_SET_TOUR,
    tour
  };
};
