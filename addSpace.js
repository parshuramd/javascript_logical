function addSpace(str){
    if(typeof str !== 'string') return 'Enter Valid String';
    let arr = str.split('');
    let newArr = [];
    for(let i =0; i < arr.length; i++){
        if(arr[i]===arr[i].toUpperCase() && i!==0){
            newArr.push(" ");
        }
        newArr.push(arr[i]);
    }
    return newArr.join('');
}

console.log(addSpace('ParshuramDadasTakewadi'));