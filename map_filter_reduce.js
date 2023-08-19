let arr = [1, 2, 3, 4, 5, 6, 7];

let arr4 = arr.filter((val) => {
    if(val > 4) return val;
})
console.log(arr4);