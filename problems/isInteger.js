function isInteger(num){
  if(typeof num !== 'number') return false;
  return Math.floor(num) === num;
}
console.log(isInteger(12)) // true
console.log(isInteger(12.00)) // true
console.log(isInteger(12.001)) // false

