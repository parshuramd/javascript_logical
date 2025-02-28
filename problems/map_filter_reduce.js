let arr = [1, 2, 3, 4, 5, 6, 7];
let arr1 = [{ val: 1 }, { val: 2 }, { val: 3 }]
let arr4 = arr1.map((val) => val.val * 2).filter((val) => val > 5).reduce((acc, curr) => acc + curr, 0);
console.log(arr4);