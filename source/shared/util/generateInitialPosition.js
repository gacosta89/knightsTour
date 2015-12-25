import _ from 'lodash';
import getRandomInt from 'shared/util/getRandomInt';

const randomCero = getRandomInt(0);

export default (maxX, maxY) => len =>
  _.zipWith(
    _.range(len).map(() => randomCero(maxX)()),
    _.range(len).map(() => randomCero(maxY)()),
    (left, right) => [left, right]);
