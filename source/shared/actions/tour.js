export const TOUR_MOVE = 'tour_move';
export const tourMove = coord => {
  return {
    type: TOUR_MOVE,
    coord
  };
};

export const TOUR_INIT = 'tour_init';
export const tourInit = coord => {
  return {
    type: TOUR_INIT,
    coord
  };
};

export const TOUR_UNDO = 'tour_undo';
export const tourUndo = () => {
  return {
    type: TOUR_UNDO
  };
};

export const TOUR_REDO = 'tour_redo';
export const tourRedo = () => {
  return {
    type: TOUR_REDO
  };
};

export const TOUR_RESET = 'tour_reset';
export const tourReset = () => {
  return {
    type: TOUR_RESET
  };
};
