import validateCoords from 'shared/reducers/tour/validateCoords';
export default (matrix, [x, y], value) => validateCoords(matrix.length, matrix[0].length)([x, y]) ? [
  ...matrix.slice(0, x),
  [...matrix[x].slice(0, y), value, ...matrix[x].slice(y + 1)],
  ...matrix.slice(x + 1)
] : matrix;
