export default (coln, rown) => content => {
  let arr = [];

  for (let i = 0; i < coln; i++) {
    let row = [];
    for (let j = 0; j < rown; j++) {
      row.push(content);
    }
    arr.push(row);
  }

  return arr;
};
