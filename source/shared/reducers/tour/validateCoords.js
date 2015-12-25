import _ from 'lodash';

export default (maxX, maxY) => coord => {
  return _.inRange(coord[0], maxX) && _.inRange(coord[1], maxY);
};
