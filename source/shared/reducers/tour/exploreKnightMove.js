import validateCoords from 'shared/reducers/tour/validateCoords';

export default (coord, board) => {
  const delta = [[1, 2], [-1, 2], [-2, 1], [-2, -1], [-1, -2], [1, -2], [2, -1], [2, 1]];
  return delta
    .filter(d => typeof validateCoords([coord[0] + d[0], coord[1] + d[1]]) !== 'undefined')
    .some(d => board[coord[0] + d[0]][coord[1] + d[1]] === 0);
};
