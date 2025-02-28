let arr = [1, 2, 7, 7, 7, 4, 7, 7];
function is7(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 7) {
            count++;
            if (count === 3) return true;
        } else count = 0;
    }
    return false;
}

console.log(is7(arr));