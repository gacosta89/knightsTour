export default (current, next) => {
  if (!Array.isArray(current) && !Array.isArray(next)) {
    return false;
  }

  const dx = Math.abs(current[0] - next[0]),
    dy = Math.abs(current[1] - next[1]);

  return ((dx === 2) && (dy === 1) ||
    (dx === 1) && (dy === 2));
};
