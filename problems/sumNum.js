function sumNum(num) {
  let arr = num.toString().split("");
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += parseInt(arr[i]);
  }
  return sum;
}
console.log(sumNum(152)); // output 8

function sum(num){
    let sum = 0;
    for (const iterator of num.toString()) {
        sum += parseInt(iterator);
    }
    return sum;
}

console.log(sum(152));  // output 8