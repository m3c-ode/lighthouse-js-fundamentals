/**
 * 
 * @param {string[]} moves 
 * @returns {number[]}
 */

const finalPosition = function (moves) {
  let x = 0, y = 0;
  for (const dir of moves) {
    if (dir === 'north') y++;
    if (dir === 'south') y--;
    if (dir === 'west') x--;
    if (dir === 'east') x++;
  }
  return [x, y];
};
