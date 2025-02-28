function reverseNum(num) {
    let strArr = num.toString().split("");
    let rev = "";
    for(let i=strArr.length-1; i>=0; i--){
        rev += strArr[i];
    }
    return parseInt(rev) === num;
}
console.log(reverseNum(121));