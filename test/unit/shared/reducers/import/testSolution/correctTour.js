import test from 'tape';
import correctTour from 'shared/reducers/import/testSolution/correctTour';

test('correctTour', nest => {
  nest.test('... correct tour', assert => {
    const tour = () => [[0, 0], [2, 1], [3, 3]],
      expected = true,
      actual = correctTour(8, 8)(tour);
    assert.equal(actual, expected, 'It should return true.');
    assert.end();
  });

  nest.test('... incorrect tour', assert => {
    const tour = () => [[0, 0], [2, 1], [3, 3], [3, 2]],
      expected = false,
      actual = correctTour(8, 8)(tour);
    assert.equal(actual, expected, 'It should return false.');
    assert.end();
  });
});
