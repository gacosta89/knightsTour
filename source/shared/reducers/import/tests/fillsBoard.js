import generateMatrix from 'shared/util/generateMatrix';

export default (xdim, ydim) => tour => {
  if (xdim * ydim !== tour.length) {
    return false;
  }

  const matrix = generateMatrix(xdim, ydim)(0);

  console.log(JSON.stringify(matrix, null, 2));

  return tour.every(coord => {
    if (matrix[coord[0]][coord[1]] === 0) {
      console.log('no paso:', JSON.stringify(coord, null, 2));
      matrix[coord[0]][coord[1]] = 1;

      return true;
    } else {
      console.log('ya paso:', JSON.stringify(coord, null, 2));
      return false;
    }
  });
};
