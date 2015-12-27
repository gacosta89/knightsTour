import test from 'tape';
import solution from 'shared/solution';
import validateCoords from 'shared/reducers/tour/validateCoords';
import generateMatrix from 'shared/util/generateMatrix';
import updateMatrix from 'shared/util/updateMatrix';
import correctInitialPosition from 'shared/reducers/import/testSolution/correctInitialPosition';

test('correctInitialPosition', nest => {
  nest.test('... correct solution', assert => {
      const tour = solution({validateCoords: validateCoords(8, 8), generateMatrix, updateMatrix}),
        expected = true,
        actual = correctInitialPosition(8, 8)(tour);
      assert.equal(actual, expected, 'It should return true.');
      assert.end();
    });
});
