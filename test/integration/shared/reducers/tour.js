import test from 'tape';
import { INITIAL_STATE, reducer } from 'shared/reducers/tour';
import {
  tourMove,
  tourInit,
  tourUndo,
  tourRedo,
  tourReset
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
        error: '',
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
      error: '',
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
      error: '',
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

  nest.test('... move after undo', assert => {
    const before = {
      ...INITIAL_STATE,
      moves: [[1, 1], [2, 3], [0, 4], [1, 6]],
      current: 0,
      error: '',
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
        moves: [[1, 1], [3, 2]],
        current: 1,
        error: '',
        board: [
          [0, 0, 0, 0, 0, 0, 0, 0],
          [0, 1, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 1, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0]
        ]
      },
      actual = reducer(before, tourMove([3, 2]));

    assert.deepEqual(actual, expected, 'It should erase the future.');
    assert.end();
  });

  nest.test('... first move', assert => {
    const before = INITIAL_STATE,
      expected = {
        ...INITIAL_STATE,
        moves: [[2, 3]],
        current: 0,
        error: '',
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
        error: 'invalid coordinates',
        moves: [[0, 0]],
        current: 0,
        board: [
          [1, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0]
        ]
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
      error: '',
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
        error: '',
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

  nest.test('... immobulus state', assert => {
    const before = {
      ...INITIAL_STATE,
      moves: [[1, 1]],
      current: 0,
      error: '',
      board: [
        [0, 0, 1, 0, 1, 0, 0, 0],
        [0, 1, 0, 0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 0, 1, 0, 0],
        [0, 0, 1, 0, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0]
      ]
    },
      expected = {
        ...INITIAL_STATE,
        moves: [[1, 1], [2, 3]],
        current: 1,
        error: '',
        immobulus: true,
        board: [
          [0, 0, 1, 0, 1, 0, 0, 0],
          [0, 1, 0, 0, 0, 1, 0, 0],
          [0, 0, 0, 1, 0, 0, 0, 0],
          [0, 1, 0, 0, 0, 1, 0, 0],
          [0, 0, 1, 0, 1, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0]
        ]
      },
      actual = reducer(before, tourMove([2, 3]));

    assert.deepEqual(actual, expected, 'It should set immobulus to true.');
    assert.end();
  });

  nest.test('... redo', assert => {
    const before = {
      ...INITIAL_STATE,
      moves: [[1, 1], [2, 3]],
      current: 0,
      error: '',
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
        error: '',
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

  nest.test('... reset state.', assert => {
    const expected = INITIAL_STATE,
      before = {
        ...INITIAL_STATE,
        moves: [[1, 1], [2, 3]],
        current: 0,
        error: '',
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
      actual = reducer(before, tourReset());

    assert.deepEqual(actual, expected, 'It should return the initial state.');
    assert.end();
  });

  nest.test('... undefined state and action', assert => {
    const expected = INITIAL_STATE,
      actual = reducer(undefined, undefined);

    assert.deepEqual(actual, expected, 'It should return the initial state.');
    assert.end();
  });
});
