function isArmStrong(num) {
  if (typeof num !== "number") return "Invalid input";
  let str = num.toString();
  let count = str.length;
  let sum = 0;
  for (const value of str) {
    sum += parseInt(value) ** count;
  }
  return sum === num;
}

let t1 = performance.now();
console.log(isArmStrong(153));
let t2 = performance.now();

console.log(`time took - ${(t2 - t1) / 1000} seconds`);
