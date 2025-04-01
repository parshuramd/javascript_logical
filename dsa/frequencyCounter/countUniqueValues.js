function countUniqueValues(arr) {
  if (arr.length === 0) return 0;

  let freqCounter = {};

  for (let val of arr) {
    freqCounter[val] = (freqCounter[val] || 0) + 1;
  }

  return Object.keys(freqCounter).length;
}

console.log(countUniqueValues([1, 1, 1, 1, 2]));
