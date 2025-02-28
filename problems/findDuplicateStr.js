function findDuplicate(str) {
  if (typeof str !== 'string') return 'Enter VAlid String';
  let arr = str.toLowerCase().split(" ");
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === " ") continue;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j] && !newArr.includes(arr[i])) {
        newArr.push(arr[i]);
      }
    }
  }
  return newArr;
}
console.log(findDuplicate("parshuram parshuram"));