import test from 'tape';
import testSolution from 'shared/reducers/import/testSolution';

test('validateSolution', nest => {
  nest.test('... incorrect solution wrong return type', assert => {
    const tour = {},
      expected = {
        valid: false,
        error: 'Tour should be a function.'
      },
      actual = testSolution(8, 8)(tour);
    assert.deepEqual(actual, expected, 'It should not validate the test, and show return type error.');
    assert.end();
  });

  nest.test('... incorrect solution wrong return type', assert => {
    const tour = function () { return {};},
      expected = {
        valid: false,
        error: 'Tour function should return an array.'
      },
      actual = testSolution(8, 8)(tour);
    assert.deepEqual(actual, expected, 'It should not validate the test, and show return type error.');
    assert.end();
  });

  nest.test('... incorrect solution wrong array lenght', assert => {
    const tour = function () { return [2, 1];},
      expected = {
        valid: false,
        error: 'Tour function should return an array of length 64.'
      },
      actual = testSolution(8, 8)(tour);
    assert.deepEqual(actual, expected, 'It should not validate the test, and show array length error.');
    assert.end();
  });

  nest.test('... incorrect solution wrong initial position', assert => {
    const tour = function () { return [[2, 1]];},
      expected = {
        valid: false,
        error: 'Tour function should return the correct initial position.'
      },
      actual = testSolution(1, 1)(tour);
    assert.deepEqual(actual, expected, 'It should not validate the test, and show initial position error.');
    assert.end();
  });

  nest.skip('... incorrect solution wrong tour', assert => {
    const tour = 'implement first the right algorithm.',
      expected = {
        valid: false,
        error: 'Tour function should return a correct tour.'
      },
      actual = testSolution(3, 3)(tour);
    assert.deepEqual(actual, expected, 'It should not validate the test, and show tour error.');
    assert.end();
  });

  nest.skip('... incorrect solution does not fills the board', assert => {
    const tour = 'implement first the right algorithm.',
      expected = {
        valid: false,
        error: 'Tour function should return a correct tour.'
      },
      actual = testSolution(3, 3)(tour);
    assert.deepEqual(actual, expected, 'It should not validate the test, and show tour error.');
    assert.end();
  });
});
