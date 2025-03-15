function isArmstrongNumber(num) {
  let sum = 0;
  let n = num;
  let digits = 0;

  // Count the number of digits
  while (n > 0) {
    digits++;
    n = (n - (n % 10)) / 10;
  }

  n = num;
  // Calculate the Armstrong sum
  while (n > 0) {
    let digit = n % 10;
    let power = 1;

    // Calculate digit ^ digits (manually)
    for (let i = 0; i < digits; i++) {
      power *= digit;
    }

    sum += power;
    n = (n - digit) / 10;
  }

  return sum === num;
}

let t1 = performance.now();
console.log(isArmstrongNumber(115132219018763992565095597973971522401));
let t2 = performance.now();

console.log(`time took - ${(t2 - t1) / 1000} seconds`);
