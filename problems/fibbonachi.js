function fib(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    let ser = [0, 1];
    for (let i = 2; i < n; i++) {
        ser.push(ser[i - 2] + ser[i - 1]);
    }
    return ser;
}

console.log(fib(10));