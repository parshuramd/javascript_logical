let arr = [100, 2, 3, 4, 2, 1, 44, -10, 3, 4];
function findNegativeValue(arr) {
    let hasNegative = false;
    while (arr.length) {
        let value = arr.shift();
        if (value < 0) {
            console.log(`Negative Value Found that is ${value}`);
            hasNegative = true;
            break;
        }
    }
    if (!hasNegative) {
        console.log('Array does not have negative value')
    }
}
findNegativeValue(arr)