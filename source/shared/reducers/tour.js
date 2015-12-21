import {
  TOUR_MOVE,
  TOUR_INIT,
  TOUR_UNDO,
  TOUR_REDO,
  TOUR_RESET } from 'shared/actions/tour';

export const INITIAL_STATE = {
  moves: [],
  current: 0,
  error: undefined,
  board: [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0]
  ],
  immobulus: false
};

const validateCoords = coord => {
  return coord[0] >= 0 && coord[0] < 8 &&
    coord[1] >= 0 && coord[1] < 8 ?
    coord : undefined;
},
  validateKnightMove = (current, next) => {
    if (typeof next === 'undefined') {
      return undefined;
    }

    const dx = Math.abs(current[0] - next[0]),
      dy = Math.abs(current[1] - next[1]);

    if ((dx === 2) && (dy === 1) ||
      (dx === 1) && (dy === 2)) {
        return next;
      } else {
        return undefined;
      }
  },
  exploreKnightMove = (coord, board) => {
    const delta = [[1, 2], [-1, 2], [-2, 1], [-2, -1], [-1, -2], [1, -2], [2, -1], [2, 1]];
    return delta
      .filter(d => typeof validateCoords([coord[0] + d[0], coord[1] + d[1]]) !== 'undefined')
      .some(d => board[coord[0] + d[0]][coord[1] + d[1]] === 0);
  },
  toggleCoord = (board, coord) => [
    ...board.slice(0, coord[0]),
    [...board[coord[0]].slice(0, coord[1]), board[coord[0]][coord[1]] === 0 ? 1 : 0, ...board[coord[0]].slice(coord[1] + 1)],
    ...board.slice(coord[0] + 1)
  ],
  move = (coord, moves, current, board) => {
    if (typeof coord === 'undefined') {
      return {error: 'invalid move'};
    }
    if (board[coord[0]][coord[1]] === 1) {
      return {error: 'already been there'};
    }
    return {
      moves: current + 1 < moves.length ? [...moves.slice(0, current + 1), coord] : [...moves, coord],
      current: current + 1,
      error: undefined,
      board: toggleCoord(board, coord),
      immobulus: !exploreKnightMove(coord, board)
    };
  },
  init = (coord, board) => {
    if (typeof coord === 'undefined') {
      return {error: 'invalid coordinates'};
    }

    return {
      moves: [coord],
      current: 0,
      error: undefined,
      board: toggleCoord(board, coord)
    };
  },
  undo = (moves, current, board) => {
    if (current === 0) {
      return {};
    }
    return {
      current: current - 1,
      error: undefined,
      board: toggleCoord(board, moves[current])
    };
  },
  redo = (moves, current, board) => {
    if (current + 1 >= moves.length) {
      return {};
    }
    return {
      current: current + 1,
      error: undefined,
      board: toggleCoord(board, moves[current + 1])
    };
  },
  reducers = {};

reducers[TOUR_MOVE] = ({moves, current, board}, {coord}) => move(validateKnightMove(moves[current], validateCoords(coord)), moves, current, board);

reducers[TOUR_INIT] = ({board}, {coord}) => init(validateCoords(coord), board);

reducers[TOUR_UNDO] = ({moves, current, board}) => undo(moves, current, board);

reducers[TOUR_REDO] = ({moves, current, board}) => redo(moves, current, board);

reducers[TOUR_RESET] = () => INITIAL_STATE;

export const reducer = (state = INITIAL_STATE, action = {type: ''}) => {
  if (!reducers.hasOwnProperty(action.type)) {
    return state;
  }

  return {
    ...state,
    ...reducers[action.type](state, action)
  };
};
