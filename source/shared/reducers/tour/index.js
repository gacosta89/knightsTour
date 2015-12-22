import makeReducer from 'shared/util/makeReducer';
import {
  TOUR_MOVE,
  TOUR_INIT,
  TOUR_UNDO,
  TOUR_REDO,
  TOUR_RESET } from 'shared/actions/tour';

import validateKnightMove from 'shared/reducers/tour/validateKnightMove';
import exploreKnightMove from 'shared/reducers/tour/exploreKnightMove';
import validateCoords from 'shared/reducers/tour/validateCoords';

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

const toggleCoord = (board, coord) => [
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

export const reducer = makeReducer({reducers, INITIAL_STATE});
