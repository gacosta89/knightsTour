import validateKnightMove from 'shared/reducers/tour/validateKnightMove';
import validateCoords from 'shared/reducers/tour/validateCoords';
import comparePair from 'shared/util/comparePair';
import generateInitialPosition from 'shared/util/generateInitialPosition';


export default (maxX, maxY) => f => {
  if (typeof f !== 'function') {
    throw Error('First argument should be a function');
  }
  const initial = generateInitialPosition(maxX, maxY)(10),
    transformed = initial.map(coord => f(coord));

  return transformed.every(tour =>
    comparePair(
      tour.map(coord => {
        return validateCoords(maxX, maxY)(coord);
      })
        .every(coord => coord) ? tour : [],
      (prev, curr) => {
        return validateKnightMove(prev, curr);
      })
    );
};
