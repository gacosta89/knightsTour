import test from 'tape';
import { INITIAL_STATE, reducer } from 'shared/reducers/execute';
import {
  execSetInterval,
  execResume,
  execPause,
  execSetTour
} from 'shared/actions/execute';

test('execute reducer', nest => {
  nest.test('... set timeout interval interval', assert => {
    const before = INITIAL_STATE,
      expected = {
        ...INITIAL_STATE,
        interval: 20,
        error: undefined
      },
      actual = reducer(before, execSetInterval(20));

      assert.deepEqual(actual, expected, 'It should set the interval time.');
      assert.end();
  });

  nest.test('... resume with tour already set', assert => {
    const before = {
      ...INITIAL_STATE,
      tour: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      error: undefined
    },
      expected = {
        ...INITIAL_STATE,
        tour: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
              1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        running: true
      },
      actual = reducer(before, execResume());

    assert.deepEqual(actual, expected, 'It should set the running flag to true.');
    assert.end();
  });

  nest.test('... resume without tour', assert => {
    const before = INITIAL_STATE,
      expected = {
        ...INITIAL_STATE,
        running: false,
        error: 'You should set the tour first.'
      },
      actual = reducer(before, execResume());

    assert.deepEqual(actual, expected, 'It should not set the running flag to true.');
    assert.end();
  });

  nest.test('... pause', assert => {
    const before = INITIAL_STATE,
      expected = {
        ...INITIAL_STATE,
        running: false,
        error: undefined
      },
      actual = reducer(before, execPause());

    assert.deepEqual(actual, expected, 'It should set the running flag to false.');
    assert.end();
  });

  nest.test('... set tour exec not running', assert => {
    const before = INITIAL_STATE,
      expected = {
        ...INITIAL_STATE,
        tour: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
              1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        error: undefined
      },
      actual = reducer(before, execSetTour([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]));

    assert.deepEqual(actual, expected, 'It should set the tour solution.');
    assert.end();
  });

  nest.test('... set tour exec running', assert => {
    const before = {
      ...INITIAL_STATE,
      running: true,
      error: undefined
    },
      expected = {
        ...INITIAL_STATE,
        running: true,
        tour: [],
        error: 'Already running.'
      },
      actual = reducer(before, execSetTour([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]));

    assert.deepEqual(actual, expected, 'It should not set the tour solution.');
    assert.end();
  });

  nest.test('... set tour exec not running wrong lenght', assert => {
    const before = INITIAL_STATE,
      expected = {
        ...INITIAL_STATE,
        tour: [],
        error: 'Wrong tour lenght.'
      },
      actual = reducer(before, execSetTour([1, 1, 1, 1]));

    assert.deepEqual(actual, expected, 'It should not set the tour solution.');
    assert.end();
  });
});
