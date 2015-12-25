
import generateInitialPosition from 'shared/util/generateInitialPosition';
import correctInitialPosition from './correctInitialPosition';
import correctTour from './correctTour';
import fillsBoard from './fillsBoard';

export default (maxX, maxY) => tour => {

  if (typeof tour !== 'function') {
    return {
      valid: false,
      error: 'Tour should be a function.'
    };
  }

  if (!Array.isArray(tour([2, 1]))) {
    return {
      valid: false,
      error: 'Tour function should return an array.'
    };
  }

  const initial = generateInitialPosition(maxX, maxY)(10),
    transformed = initial.map(coord => tour(coord).length);

  if (!transformed.every(len => len === maxX * maxY)) {
    return {
      valid: false,
      error: `Tour function should return an array of length ${maxX * maxY}.`
    };
  }

  if (!correctInitialPosition(maxX, maxY)(tour)) {
    return {
      valid: false,
      error: 'Tour function should return the correct initial position.'
    };
  }

  if (!correctTour(maxX, maxY)(tour)) {
    return {
      valid: false,
      error: 'Tour function should return a correct tour.'
    };
  }

  if (!fillsBoard(maxX, maxY)(tour)) {
    return {
      valid: false,
      error: 'Tour function should return a tour that fills the board.'
    };
  }

  return {
    valid: true,
    error: ''
  };
};
