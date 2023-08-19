function removeDup(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!newArr.includes(arr[i])) {
      newArr.push(arr[i])
    }
  }
  return newArr
}
console.log(removeDup([1, 1, 1, 1, 2, 3, 4, 4, 3, 2, "Hi", "Hi", "Parshuram"]));