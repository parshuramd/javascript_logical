function isPrime(number) {
    if (number <= 1) return false;
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false
        }
    }
    return true
}

function printPrime(n){
    let primeCount =0;
    let currentPrime = 2;
    while(primeCount < n){
        if(isPrime(currentPrime)){
            console.log(currentPrime);
            primeCount++
        }
        currentPrime++
    }
}

(printPrime(100))