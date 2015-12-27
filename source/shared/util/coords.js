export const mapX = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
export const mapY = ['1', '2', '3', '4', '5', '6', '7', '8'];
export const getX = x => mapX.findIndex(el => el === x.toLowerCase());
export const getY = y => mapY.findIndex(el => el === y);
