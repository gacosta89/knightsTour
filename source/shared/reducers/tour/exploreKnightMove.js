import validateCoords from 'shared/reducers/tour/validateCoords';

export default (maxX, maxY) => {
  const validateCoordsInBoard = validateCoords(maxX, maxY);
  return (coord, board) => {
    const delta = [[1, 2], [-1, 2], [-2, 1], [-2, -1], [-1, -2], [1, -2], [2, -1], [2, 1]];
    return delta
      .filter(d => validateCoordsInBoard([coord[0] + d[0], coord[1] + d[1]]))
      .some(d => board[coord[0] + d[0]][coord[1] + d[1]] === 0);
  };
};
