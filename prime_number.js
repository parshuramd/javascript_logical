function isPrime(number) {
    if (typeof number !== 'number') return "Enter Valid Number";
    if (number <= 1) return false;
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
    }
    return true
}
console.log(isPrime(17));