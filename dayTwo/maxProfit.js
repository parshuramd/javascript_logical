let prices = [7, 1, 5, 3, 6, 4];

function maxProfit(prices) {
  let maxProfit = 0;
  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      let profit = prices[j] - prices[i];
      maxProfit = Math.max(maxProfit, profit);
    }
  }
  return maxProfit;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4])); // Output: 5
console.log(maxProfit([7, 6, 4, 3, 1])); // Output: 0
console.log(maxProfit([2, 4, 1])); // Output: 2
console.log(maxProfit([3, 2, 6, 5, 0, 3])); // Output: 4
