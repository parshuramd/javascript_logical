String.prototype.addSpace = async function () {
    // if (this !== 'string') return 'Errorr'
    try {
        let arr = this.split('');
        let newArr = [];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === arr[i].toUpperCase() && i !== 0) {
                newArr.push(' ');
            }
            newArr.push(arr[i]);
        }
        return newArr.join('');
    }
    catch{
        throw 'This is not acceptle'
    }

}

let res = 'ParshuramDadasTakewadi'.addSpace();
console.log(res)