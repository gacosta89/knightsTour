import test from 'tape';
import generateInitialPosition from 'shared/util/generateInitialPosition';

test('generateInitialPosition', nest => {
  nest.test('... return type.', assert => {
    const expected = true,
      actual = Array.isArray(generateInitialPosition(8, 8)(10));

    assert.deepEqual(actual, expected, 'It should return an array.');
    assert.end();
  });

  nest.test('... array length', assert => {
    const expected = 10,
      actual = generateInitialPosition(8, 8)(10).length;

    assert.deepEqual(actual, expected, 'It should return an array of length 10.');
    assert.end();
  });

  nest.test('... items type', assert => {
    const expected = true,
      actual = generateInitialPosition(8, 8)(10).every(item => Array.isArray(item));

    assert.deepEqual(actual, expected, 'It should return an array of arrays.');
    assert.end();
  });

  nest.test('... items length', assert => {
    const expected = true,
      actual = generateInitialPosition(8, 8)(10).every(item => item.length === 2);

    assert.deepEqual(actual, expected, 'It should return an array of arrays of length 2.');
    assert.end();
  });
});
