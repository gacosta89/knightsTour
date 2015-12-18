import test from 'tape';
import { INITIAL_STATE, reducer } from 'shared/reducers/tour';
import {
  tourMove,
  tourInit,
  tourUndo,
  tourRedo
} from 'shared/actions/tour';

test('tour reducer', nest => {
  nest.test('... correct move', assert => {
    const before = {
      ...INITIAL_STATE,
      moves: [[1, 1], [2, 3]],
      current: 1,
      error: 'incorrect move',
      board: [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0]
      ]
    },
      expected = {
        ...INITIAL_STATE,
        moves: [[1, 1], [2, 3], [4, 2]],
        current: 2,
        error: undefined,
        board: [
          [0, 0, 0, 0, 0, 0, 0, 0],
          [0, 1, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 1, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 1, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0]
        ]
      },
      actual = reducer(before, tourMove([4, 2]));

    assert.deepEqual(actual, expected, 'It should set the next coordinate correctly.');
    assert.end();
  });

  nest.test('... incorrect move of the knight', assert => {
    const before = {
      ...INITIAL_STATE,
      moves: [[1, 1], [2, 3]],
      current: 1,
      error: undefined,
      board: [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0]
      ]
    },
      expected = {
        ...INITIAL_STATE,
        moves: [[1, 1], [2, 3]],
        current: 1,
        error: 'invalid move',
        board: [
          [0, 0, 0, 0, 0, 0, 0, 0],
          [0, 1, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 1, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0]
        ]
      },
      actual = reducer(before, tourMove([4, 5]));

    assert.deepEqual(actual, expected, 'It should not set the incorrect coordinate.');
    assert.end();
  });

  nest.test('... incorrect move of the knight going back', assert => {
    const before = {
      ...INITIAL_STATE,
      moves: [[1, 1], [2, 3]],
      current: 1,
      error: undefined,
      board: [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0]
      ]
    },
      expected = {
        ...INITIAL_STATE,
        moves: [[1, 1], [2, 3]],
        current: 1,
        error: 'already been there',
        board: [
          [0, 0, 0, 0, 0, 0, 0, 0],
          [0, 1, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 1, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0]
        ]
      },
      actual = reducer(before, tourMove([1, 1]));

    assert.deepEqual(actual, expected, 'It should not set the incorrect coordinate.');
    assert.end();
  });

  nest.test('... first move', assert => {
    const before = INITIAL_STATE,
      expected = {
        ...INITIAL_STATE,
        moves: [[2, 3]],
        current: 0,
        error: undefined,
        board: [
          [0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 1, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0]
        ]
      },
      actual = reducer(before, tourInit([2, 3]));

    assert.deepEqual(actual, expected, 'It should set the initial position.');
    assert.end();
  });

  nest.test('... first move incorrect', assert => {
    const before = INITIAL_STATE,
      expected = {
        ...INITIAL_STATE,
        error: 'invalid coordinates'
      },
      actual = reducer(before, tourInit([0, 9]));

    assert.deepEqual(actual, expected, 'It should not set the initial position.');
    assert.end();
  });

  nest.test('... undo', assert => {
    const before = {
      ...INITIAL_STATE,
      moves: [[1, 1], [2, 3]],
      current: 1,
      error: undefined,
      board: [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0]
      ]
    },
      expected = {
        ...INITIAL_STATE,
        moves: [[1, 1], [2, 3]],
        current: 0,
        error: undefined,
        board: [
          [0, 0, 0, 0, 0, 0, 0, 0],
          [0, 1, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0]
        ]
      },
      actual = reducer(before, tourUndo());

    assert.deepEqual(actual, expected, 'It should set current to the prev coord and set last coord to 0.');
    assert.end();
  });

  nest.test('... redo', assert => {
    const before = {
      ...INITIAL_STATE,
      moves: [[1, 1], [2, 3]],
      current: 0,
      error: undefined,
      board: [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0]
      ]
    },
      expected = {
        ...INITIAL_STATE,
        moves: [[1, 1], [2, 3]],
        current: 1,
        error: undefined,
        board: [
          [0, 0, 0, 0, 0, 0, 0, 0],
          [0, 1, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 1, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0]
        ]
      },
      actual = reducer(before, tourRedo());

    assert.deepEqual(actual, expected, 'It should set current to the next coord and set next coord to 1.');
    assert.end();
  });
});
