function capitalizeFirstLetter(str) {
    if (typeof str !== 'string') return 'Enetr Valid String';
    let arr = str.split(" ");
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i][0].toUpperCase() + arr[i].substring(1));
    }
    return newArr.join(" ");
}
console.log(capitalizeFirstLetter("parshuram dadas"));