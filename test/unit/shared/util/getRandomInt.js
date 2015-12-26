import _ from 'lodash';
import test from 'tape';
import getRandomInt from 'shared/util/getRandomInt';

test('getRandomInt', assert => {
  const expected = true,
    randomCeroEight = getRandomInt(0)(8),
    nums = _.range(20).map(() => randomCeroEight()),
    actual = nums.every(num => num >= 0 && num <= 8);

    assert.equal(actual, expected, 'It should return true.');
    assert.end();
});
