function charCount(str) {
  let arr = str.split("");
  let freq = {};
  for (let i =0; i<arr.length;i++) {
    let value = arr[i];
    if(arr[i] !== ' ')freq[value] = (freq[value] || 0) + 1;
  }
  return freq
}
console.log(charCount("parshuram dadas parshuram dadas"));