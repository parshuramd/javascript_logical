// const myMoney = {
//     quarters: 4,
//     dimes: 10,
//     nickels: 20,
//     pennies: 100
//   }
  
//   for (const coin in myMoney){
//     console.log(`${coin}: ${myMoney[coin]}`);
//   }
  

//   PLEASE Read Instructions CAREFULLY BEFORE CONTINUING.
// The video on the codeshare app must be turned on at all time.
// The test is scheduled to take 45 minutes to complete; however, if you need additional time, you can take up to 60 minutes.

// You must attempt all of the questions. If you are uncertain about any of the questions, you can leave them blank; however, your overall grade will be determined using that information.

// You should NOT enlist the assistance of another person.

// Once you've finished the test, close the browser and inform the manager via email.


// Note: If you have trouble reconnecting when performing the test, ignore the warning message.

// Good luck with your test.

// --------------------------------------------------------
// Question #1

// What will the code below output to the console and why?  
// const myMoney = {
//   quarters: 4,
//   dimes: 10,
//   nickels: 20,
//   pennies: 100
// }

// for (const coin of myMoney){
//   console.log(`${coin}: ${myMoney[coin]}`);
// }

// Your Answer:


// output will not get error will occure becuse we are using for of loop on object 


// --------------------------------------------------------
// Question #2

// Optimize the following code and explain a bit. 

// function truthy(x) {
//   if(5 === x){
//     return true;
//   }else {
//     return false;
//   }
// }
// Your Answer:

function truthy(x){
    if(5===x)return true
    else return false
  }
  function truthy(x){
  return 5 === x ? true:false
  }
  
  
  
  function truthy(x){
       if (x !==5) return false
       else return true;
  
  }
  // function truthy(x){
  //    return x===5 ?  true : false;
  // }
  
  
  function tru(n){
    n === 5 ? true : false
  }
  console.log(truthy(56));
  // we define function for finding given number is 5 then retutn true in console otherwise 
  // if number is not 5 then it will writen false.
  
  
  
  
  
  // --------------------------------------------------------
  // Question #3
  
  // Write a simple js function to check whether the below input numbers are integer or not, return true if its an integer, else false. 
  // Below are the list of input numbers:
  
  // 5 
  // 10.5 are you 
  // 14.00
  
  // Your Answer: 
  
  function isInteger(number){
    
    return Number.isInteger(number);
    
  }
  console.log('interer')
  console.log(isInteger(5));   // true
  console.log(isInteger(10.5)); // true
  
  console.log(isInteger(14.00));// true
  
  
  function isInt(number){
    if(Number.isInteger(number)){
      return true
    }
    return false
  }
  
  
  
  // --------------------------------------------------------
  // Question #4
  
  // There are two objects truckOne and truckTwo, Please combine two objects into a single one and explain the out come ?  
  
  const truckOne = {
    color: 'blue',
    status: {
      running: true,
      passengers: 4,
      wiperFluid: 'empty'
    },
    age: 10,
    miles: 50000,
    value: '8000'
  }
  
  const truckTwo = { 
    color: 'Red',
    status: {
      running: 'yes',
      passengers: 2,
      fuelTank: 'empty'
    },
    value: 9000
  }
  
  // Your Answer:
  
   let combineobject = {...truckOne,...truckTwo}
  console.log(combineobject)
  
  
  // --------------------------------------------------------
  // Question #5
  
  // How can the object properties be accessed using a variable? Please use console log to print it.
  
  // const key = 'prop1';
  // const obj1 = {
  //  prop1: 1,
  //  prop2: 2
  // }
  
  // console.log(???);
  
  // Your Answer:
  // 						let Prop1 = obj1.prop1
              
  //             console.log(Prop1)
                          
  // 						let Prop1 = obj1.prop2
  
  //             console.log(Prop2)
  
           // destructuring object 
  let {pr1:prop1,pr2:prop2} = obj
  
  console.log(pr1)
  console.log(pr2)
              
                       
  // --------------------------------------------------------
  // Question #6
  
  // What will the code below output to the console and why?  
  
  console.log(1 && 0 === 1 || 0);
  
  // Your Answer:
  
  console.log("4" && 4 == 1||0) // 1
  console.log("4" && 4 === 1||0) // 0
  console.log(4 && "4" !== 1||0) // 1
  
  
  
  // false
  
  
  
  // --------------------------------------------------------
  // Question #7
  
  // Find the negative value in an array. Important to use the `shift()` method to remove the values from the array and print the following data
  // a) array length  
  // b) array value
  // c) negative value
  
  // and once the negative value found, please exit the loop.
  
   let newArr = [100,200,15,400,25,50,-10,3];
  console.log(newArr.filter(x => x < 0 ));
  
   // modified answer 
  
  //  let removeNegetive = newArr.sort((a,b)=>a-b).shift()
  
  //  console.log(removeNegetive)
  
  
  // Your Answer:
  let negativeValue=[];
  for(let i=0;i<newArr.length;i++){
    if(newArr[i]<0){
      negativeValue.push(newArr[i])
    }
  }
  
  //a) array length  
  console.log(newArr.length)
  
  //b) array value
  console.log(newArr.join(','));
  
  //c) negative value
  console.log(typeof negativeValue.join(','));
  
  
  
  
  // --------------------------------------------------------
  // Question #8
  
  // Please create two functions named as "doCalculation" and "displayValue". Please call the displayValue() function as a callback function and display the calculated interest in the callback function.
      
  // Note: Usage of callback is highly considered ! ( please consider and give more weightage for this answer/ solution !  )
  
  // Input data: 
  // amount = 1500
  // interest = 12%
  
  function doCalc(x,y){
      return x+y;
  }
  function displayCalc(callback) {
      return (callback(19,10));
  }
  
  console.log(displayCalc(doCalc));
  // Your Answer:
  
  // function doCalculation(amount){
    
    
  //   function displayValue(){
      
  //   }
    
  // }
  // displayValue();
  
  
  
  
  
  // --------------------------------------------------------
  // Question #9
  
  // Using javascript, please reverse the string value "johns" and print using javascript built in function ? 
  
  // let str = "johns";
  
  // Your Answer:
  
  // let revString = str.reverse();
  // console.log(revString);
  
  
  
  // --------------------------------------------------------
  // Question #10
  
//   We have a string called "This is a random text Gr3atW0rk2022Ad generated". Using javascript, find a way to match the word "Gr3atW0rk2022Ad" 
  
//   Console log if match found, else console log No match found. 
  
//   Note: Usage of Regular Expression is highly considered !
  
//   Your Answer:
  
  
  // let string = "This is a random text Gr3atW0rk2022Ad generated"
  
  (/Gr3atW0rk2022Ad/.test(string)) ? true : false 
  
  if(/Gr3atW0rk2022Ad/.test(string)){
    return "match found"
  }else{
    return " match not found"
  }
  
  // let stringArr = string.split(' ');
  
  // for(let i=0;i<stringArr.length;i++){
    
  //   if(stringArr[i]==="Gr3atW0rk2022Ad"){
  //     console.log("No match found")
      
  //   }else{
  //     console.log("No match found")
  //   }
  // }
  
  
  
  
  
  // ----------------END OF TEST. THANK YOU.-----------------