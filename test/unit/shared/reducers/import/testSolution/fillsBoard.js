import test from 'tape';
import fillsBoard from 'shared/reducers/import/testSolution/fillsBoard';

test('fillsBoard', nest => {
  nest.test('... correct solution', assert => {
    const tour = [[0, 0], [0, 1], [1, 0], [1, 1]],
      expected = true,
      actual = fillsBoard(2, 2)(tour);
    assert.equal(actual, expected, 'It should return true.');
    assert.end();
  });

  nest.test('... incorrect solution repeted coord', assert => {
    const tour = [[0, 0], [0, 1], [0, 1], [1, 1]],
      expected = false,
      actual = fillsBoard(2, 2)(tour);
    assert.equal(actual, expected, 'It should return false.');
    assert.end();
  });

  nest.test('... incorrect solution wrong lenght', assert => {
    const tour = [[0, 0], [0, 1], [0, 1]],
      expected = false,
      actual = fillsBoard(2, 2)(tour);
    assert.equal(actual, expected, 'It should return false.');
    assert.end();
  });
});
