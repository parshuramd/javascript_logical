function isPure(number) {
  let sum = 0;
  for (let i = 0; i <= number / 2; i++) {
    if (number % i === 0) sum += i
  }
  return sum === number
}
console.log(isPure(0));