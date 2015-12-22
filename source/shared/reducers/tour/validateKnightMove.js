export default (current, next) => {
  if (typeof next === 'undefined') {
    return undefined;
  }

  const dx = Math.abs(current[0] - next[0]),
    dy = Math.abs(current[1] - next[1]);

  if ((dx === 2) && (dy === 1) ||
    (dx === 1) && (dy === 2)) {
      return next;
    } else {
      return undefined;
    }
};
