function maxSumArray(arr, num) {
  let maxSum = 0;
  let tempSum = 0;

  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }

  tempSum = maxSum;

  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum + arr[i] - arr[i - num];
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
}

console.log(maxSumArray([1, 2, 1, 4, 1, 1, 1, 0], 4));
