/**
 * 
 * @param {number[]} arr1 
 * @param {number[]} arr2 
 */
function merge(arr1, arr2) {
  if (arr1.length === 0) {
    return arr2;
  } else if (arr2.length === 0) return arr1;
  else return arr1.concat(arr2).sort();
}

console.log(merge([1, 2, 3], [4, 5, 6]), "=?", [1, 2, 3, 4, 5, 6]);
console.log(merge([0, 3, 1], [9, 7, 2]), "=?", [0, 3, 1, 9, 7, 2]);
console.log(merge([], [9, 7, 2]), "=?", [9, 7, 2]);
console.log(merge([5, 10], []), "=?", [5, 10]);
console.log(merge([7, 8, 9], [1, 2, 3]));