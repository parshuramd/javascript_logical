function fact(num){
    if(typeof num !== 'number') return 'Enter Valid Number';
    let fact =1;
    for(let i =1; i <=num; i++){
        fact *= i;
    }
    return fact;
}

console.log(fact(0));