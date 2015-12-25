export default ({ validateCoords, generateMatrix, updateMatrix }) => {
  const delta = [[1, 2], [-1, 2], [-2, 1], [-2, -1], [-1, -2], [1, -2], [2, -1], [2, 1]],
    generateMatrix64 = generateMatrix(8, 8),
    spotAccessInitialCount = matrix => {
      return matrix.map((col, i) => col.map((_, j) =>
        delta.map(d => [i + d[0], j + d[1]])
          .filter(coord => validateCoords(coord)).length));
    },
    resolve = (tour, oldMatrix) => {
      const coord = tour[tour.length - 1],
        matrix = updateMatrix(oldMatrix, [coord[0], coord[1]], -1),
        validMoves = delta.map(d => [coord[0] + d[0], coord[1] + d[1]])
          .filter(coords => validateCoords(coords))
            .filter(([x, y]) => matrix[x][y] !== -1);

      if (validMoves.length === 0) {
        return tour;
      }

      const nextMove = validMoves.reduce(([minX, minY], [x, y]) => matrix[x][y] < matrix[minX][minY] ? [x, y] : [minX, minY]),
        updatedMatrix = validMoves.reduce((m, [x, y]) => m[x][y] !== -1 ?
          updateMatrix(m, [x, y], --m[x][y]) :
          m,
          matrix
        );

      return resolve([...tour, nextMove], updatedMatrix);
    };
  return ([x, y]) => {
    const matrix = spotAccessInitialCount(generateMatrix64(0));
    return resolve([[x, y]], matrix);
  };
};
