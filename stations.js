/**
 * 
 * @param {[][]} stations 
 */
const chooseStations = function (stations) {
  if (!stations.length) {
    return "No stations";
  }
  let goodStations = [];
  for (const station of stations) {
    console.log(station);
    if (station[1] >= 20 && (station[2] === 'school' || station[2] === 'community centre')) {
      goodStations.push(station[0]);
    }
  }
  console.log(goodStations);
  return goodStations;
};


const stations = [
  ['A', 10, 'school'],
  ['B', 9, 'restaurant'],
  ['C', 21, 'community centre'],
  ['D', 15, 'school'],
  ['E', 50, 'restaurant'],
  ['F', 20, 'school'],
  ['G', 40, 'community centre'],
  ['H', 50, 'school'],
];

chooseStations(stations);