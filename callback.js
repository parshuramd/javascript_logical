function displayValue(value) {
    console.log(`Calculated interest ${value}`)
}

function doCalculation(callback, amount, interest) {
    let calculatedInterest = amount * interest / 100;
    callback(calculatedInterest);
}

doCalculation(displayValue, 1500, 12)