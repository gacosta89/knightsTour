import validateCoords from 'shared/reducers/tour/validateCoords';

const validateCoordsIn64 = validateCoords(8, 8);

export default (coord, board) => {
  const delta = [[1, 2], [-1, 2], [-2, 1], [-2, -1], [-1, -2], [1, -2], [2, -1], [2, 1]];
  return delta
    .filter(d => validateCoordsIn64([coord[0] + d[0], coord[1] + d[1]]))
    .some(d => board[coord[0] + d[0]][coord[1] + d[1]] === 0);
};
