import test from 'tape';
import { INITIAL_STATE, reducer } from 'shared/reducers/import';
import {
  impRequestSolution,
  impReceiveSolution,
  impValidateSolution,
  impShowPanel,
  impHidePanel
} from 'shared/actions/import';

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
        solutionStr: 'Hey Im a solution'
      },
      actual = reducer(before, impReceiveSolution('Hey Im a solution'));

      assert.deepEqual(actual, expected, 'It should set isFetching to false and store the solution.');
      assert.end();
  });

  nest.test('... show panel', assert => {
    const before = {
      ...INITIAL_STATE,
      showPanel: false
    },
      expected = {
        ...INITIAL_STATE,
        showPanel: true
      },
      actual = reducer(before, impShowPanel());

      assert.deepEqual(actual, expected, 'It should set showPanel to true.');
      assert.end();
  });

  nest.test('... hide panel', assert => {
    const before = {
      ...INITIAL_STATE,
      showPanel: true
    },
      expected = {
        ...INITIAL_STATE,
        showPanel: false
      },
      actual = reducer(before, impHidePanel());

      assert.deepEqual(actual, expected, 'It should set showPanel to false.');
      assert.end();
  });

  nest.test('... validate incorrect solution', assert => {
    const before = {
      ...INITIAL_STATE,
      isFetching: false,
      valid: true,
      solutionStr: '(function (){\n  return function () { return \'Knights tour test\'; };})();'
    },
      expected = {
        ...INITIAL_STATE,
        isFetching: false,
        valid: false,
        solutionStr: '(function (){\n  return function () { return \'Knights tour test\'; };})();',
        solution: 'Knights tour test',
        error: 'Tour should be a function.'
      },
      preActual = reducer(before, impValidateSolution()),
      actual = {...preActual, solution: preActual.solution.toString()};

      assert.deepEqual(actual, expected, 'It should set valid to false.');
      assert.end();
  });
});
