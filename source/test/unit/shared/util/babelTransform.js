import test from 'tape';
import babelTransform from 'shared/util/babelTransform';

test('babelTransform', nest => {
  nest.test('... valid string', assert => {
    const code = '({hola}) => { return hola;}',
      expected = `"use strict";\n\n(function (_ref) {\n  var hola = _ref.hola;\n  return hola;\n});`,

      actual = babelTransform(code).code;
      assert.equal(actual, expected, 'It should babelify string.');
      assert.end();
  });

  nest.test('... invalid string', assert => {
    const code = '({hola}) { return hola;}',
      expected = 'unknown: Unexpected token (1:9)',

      actual = babelTransform(code).error;
      assert.equal(actual, expected, 'It should return the error.');
      assert.end();
  });
});
