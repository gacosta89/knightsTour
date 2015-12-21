import test from 'tape';
import { INITIAL_STATE, reducer } from 'shared/reducers/import';
import {
  impRequestSolution,
  impReceiveSolution,
  impSolution
} from 'shared/actions/import';
import codepenFactory from 'shared/util/codepen';

test('import reducer', nest => {
  nest.test('... request solution', assert => {
    const before = INITIAL_STATE,
      expected = {
        ...INITIAL_STATE,
        isFetching: true
      },
      actual = reducer(before, impRequestSolution());

      assert.deepEqual(actual, expected, 'It should set isFetching to true.');
      assert.end();
  });

  nest.test('... receive solution', assert => {
    const before = {
      ...INITIAL_STATE
    },
      expected = {
        ...INITIAL_STATE,
        isFetching: false,
        solution: 'Hey Im a solution'
      },
      actual = reducer(before, impReceiveSolution('Hey Im a solution'));

      assert.deepEqual(actual, expected, 'It should set isFetching to false and store the solution.');
      assert.end();
  });
});
