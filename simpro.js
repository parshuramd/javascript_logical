// que 1
const myMoney = {
    quarters: 4,
    dimes: 10,
    nickels: 20,
    pennies: 100
}

for (const coin in myMoney) {
    console.log(`${coin}: ${myMoney[coin]}`);
}

// above code will give type error as myMoney is object and for of loop is designed for iterrate over iterable data type and Object is not iterable

// instead of forof loop we can use forin loop to get the values of objects .

// Que 2
// Optimize the following code and explain a bit. 

// function truthy(x) {
//   if(5 === x){
//     return true;
//   }else {
//     return false;
//   }
// }
// Your Answer:

function truthy(x) {
    return x === 5;
}

// as we are using return statement after invoking the function it will check directly value x if it is equal to 5 then it will return true else flase

// Que 3

function isInteger(value) {
    if (typeof value !== 'number') return false;
    return Math.floor(value) === value;
}

console.log(isInteger(3.00));

// que 4 combine object

let obj = {
    name: 'ram',

}
let obj1 = {
    age: 20
}
let newObj = Object.assign({}, obj, obj1);
console.log(newObj);
console.log({ ...obj, ...obj1 })

// que 5

//How can the object properties be accessed using a variable? Please use console log to print it.

const key = 'prop1';
const obj3 = {
    prop1: 1,
    prop2: 2
}
console.log(obj3[key]) // output 1

// Que 6

console.log(1 && 0 === 1 || 0); // output 0

//   Question #7

//   Find the negative value in an array. Important to use the `shift()` method to remove the values from the array and print the following data
//   a) array length  
//   b) array value
//   c) negative value

//   and once the negative value found, please exit the loop.

let newArr = [-1, 100, 200, 15, 400, 25, 50, -10, 3];

// while (newArr.length > 0) {
//     let value = newArr.shift();
//     if (value < 0) {
//         console.log(`Negative value found and that is ${value}`);
//         console.log(newArr.length);
//         console.log(newArr);
//         console.log(value);
//         break;
//     }
// }

// Question #8

// Please create two functions named as "doCalculation" and "displayValue". Please call the displayValue() function as a callback function and display the calculated interest in the callback function.

// Note: Usage of callback is highly considered ! ( please consider and give more weightage for this answer/ solution !  )

// Input data: 
// amount = 1500
// interest = 12%
function displayValue(value) {
    console.log(`Calculated Interest ${value}`);
    return value;
}

function doCalculation(callback, amount, interest) {
    let interestCalculated = amount * interest / 100
    return callback(interestCalculated);
}

console.log(doCalculation(displayValue, 1500, 12));


// Que 9

let str = 'johns';
let revStr = str.split('').reverse().join('');
console.log(revStr);

// Que 10;

let str2 = "This is a random text Gr3atW0rk2022Ad generated";
let regExpPattern = /\bGr3atW0rk2022Ad\b/g;

 regExpPattern.test(str2) ? console.log('Match Found') : console.log('Match Not Found');

