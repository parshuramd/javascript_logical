function sameOptimized(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  let freCounter1 = {};
  let freqCounter2 = {};

  for (let val of arr1) {
    freCounter1[val] = (freCounter1[val] || 0) + 1;
  }

  for (let val of arr2) {
    freqCounter2[val] = (freqCounter2[val] || 0) + 1;
  }

  for (let key in freCounter1) {
    if (!(key ** 2 in freqCounter2)) {
      return false;
    }
    if (freqCounter2[key ** 2] !== freCounter1[key]) {
      return false;
    }
  }
  return true;
}

console.log(sameOptimized([2, 2, 2, 5, 8, 9], [81, 64, 25, 4, 4, 4]));
