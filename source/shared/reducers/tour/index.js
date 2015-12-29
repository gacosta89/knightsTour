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
import generateMatrix from 'shared/util/generateMatrix';

const validateCoordsIn64 = validateCoords(8, 8),
  exploreKnightMoveIn64 = exploreKnightMove(8, 8),
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
      error: '',
      board: toggleCoord(board, coord),
      immobulus: !exploreKnightMoveIn64(coord, board)
    };
  },
  init = (coord) => {
    const validCoords = typeof coord === 'undefined' ? [0, 0] : coord,
      error = typeof coord === 'undefined' ? 'invalid coordinates' : '';
    return {
      moves: [validCoords],
      current: 0,
      error,
      board: toggleCoord(generateMatrix(8, 8)(0), validCoords)
    };
  },
  undo = (moves, current, board) => {
    if (current === 0) {
      return {};
    }
    return {
      current: current - 1,
      error: '',
      immobulus: false,
      board: toggleCoord(board, moves[current])
    };
  },
  redo = (moves, current, board) => {
    if (current + 1 >= moves.length) {
      return {};
    }
    return {
      current: current + 1,
      error: '',
      immobulus: !exploreKnightMoveIn64(moves[current + 1], board),
      board: toggleCoord(board, moves[current + 1])
    };
  },
  reducers = {};

export const INITIAL_STATE = {
  moves: [[0, 0]],
  current: 0,
  error: '',
  board: toggleCoord(generateMatrix(8, 8)(0), [0, 0]),
  immobulus: false
};

reducers[TOUR_MOVE] = ({moves, current, board}, {coord}) =>
  move(validateCoordsIn64(coord) && validateKnightMove(moves[current], coord) ? coord : undefined,
    moves, current, board);

reducers[TOUR_INIT] = (_, {coord}) => init(validateCoordsIn64(coord) ? coord : undefined);

reducers[TOUR_UNDO] = ({moves, current, board}) => undo(moves, current, board);

reducers[TOUR_REDO] = ({moves, current, board}) => redo(moves, current, board);

reducers[TOUR_RESET] = () => INITIAL_STATE;

export const reducer = makeReducer({reducers, INITIAL_STATE});
