import validateKnightMove from 'shared/reducers/tour/validateKnightMove';
import validateCoords from 'shared/reducers/tour/validateCoords';
import compareEvery from 'shared/util/compareEvery';

export default (maxX, maxY) => tour =>
  compareEvery(
    tour.map(coord => {
      return validateCoords(maxX, maxY)(coord);
    })
      .every(coord => coord) ? tour : [],
    (prev, curr) => {
      return validateKnightMove(prev, curr);
    });
