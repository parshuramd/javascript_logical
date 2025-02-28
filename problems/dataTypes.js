// let arr = [1,2];
// console.log(typeof arr , arr);

// let func = function(){};
// console.log(typeof func, func);

let sym = Symbol('113');
console.log(typeof sym, sym);

// let nullValue = null;
// console.log(typeof nullValue, nullValue);

// let arr1 = Array('1',2);
// console.log(typeof arr1 , arr1);

// let newSet = new Set([1,1,2,3]);
// console.log(typeof newSet , newSet);

console.log(typeof '', typeof 0, '' == 0)
console.log(typeof false, typeof 0, false == 0)
console.log(typeof null, typeof 0, null == 0)
console.log(typeof null, typeof 0, null >= 0)
console.log(typeof null, typeof 0, undefined == 0)
console.log(typeof undefined, typeof 0, undefined >= 0)
console.log(typeof NaN, typeof 0, NaN == 0)
console.log(typeof NaN, typeof 0, NaN >= 0)

console.log('1' + 1) // string 11
console.log(1 + +'1'); // number 2
console.log(+'1' + 1) // number 2
console.log(-'1' + 1) // number 0
console.log(2 + '3' * 3 / 3) // number 5 operator precendace concept