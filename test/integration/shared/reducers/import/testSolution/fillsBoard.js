import test from 'tape';
import solution from 'shared/solution';
import validateCoords from 'shared/reducers/tour/validateCoords';
import generateMatrix from 'shared/util/generateMatrix';
import updateMatrix from 'shared/util/updateMatrix';
import fillsBoard from 'shared/reducers/import/testSolution/fillsBoard';

test('fillsBoard', nest => {
  nest.test('... correct solution', assert => {
    const tour = solution({validateCoords: validateCoords(8, 8), generateMatrix, updateMatrix}),
      expected = true,
      actual = fillsBoard(2, 2)(tour);
    assert.equal(actual, expected, 'It should return true.');
    assert.end();
  });
});
