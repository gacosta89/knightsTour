import generateMatrix from 'shared/util/generateMatrix';
import generateInitialPosition from 'shared/util/generateInitialPosition';

export default (maxX, maxY) => f => {
  if (typeof f !== 'function') {
    throw Error('First argument should be a function');
  }
  const initial = generateInitialPosition(maxX, maxY)(10),
    transformed = initial.map(coord => f(coord));

  return transformed.every(tour => {
    const matrix = generateMatrix(maxX, maxY)(0);
    return tour.every(([x, y]) => {
      if (matrix[x][y] === 0) {
        matrix[x][y] = 1;
        return true;
      } else {
        return false;
      }
    });
  });
};
