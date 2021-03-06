export default (arr, cb) => {
  if (typeof arr !== 'object') {
    throw new Error('Compare first argument should be an object or an array.');
  }

  const keys = Object.keys(arr);

  if (keys.length === 0) {
    return false;
  }

  for (let i = 1; i < keys.length; i++) {
    const result = cb(arr[keys[i - 1]], arr[keys[i]]);
    if (typeof result !== 'boolean') {
      throw new Error('Return type of second argument should be boolean.');
    }
    if (!result) {
      return false;
    }
  }
  return true;
};
