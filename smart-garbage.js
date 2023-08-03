/**
 * 
 * @param {string} trash 
 * @param {{waste: number, recycling: number, compost: number}} bins 
 */
function smartGarbage(trash, bins) {
  if (!Object.keys(bins).includes(trash)) {
    return 'This trash is not accepted';
  }
  bins[trash]++;
  return bins;
}

console.log(smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 }));