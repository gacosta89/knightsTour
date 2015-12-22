export default coord => {
  return coord[0] >= 0 && coord[0] < 8 &&
    coord[1] >= 0 && coord[1] < 8 ?
    coord : undefined;
};
