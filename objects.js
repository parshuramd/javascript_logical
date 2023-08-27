Object.prototype.addSpace = function () {
    let result = this[0];
    for (let i = 1; i < this.length; i++) {
        if (this[i] === this[i].toUpperCase()) {
            result += ' ';
        }
        result += this[i];
    }
    return result;
}
let str = 'ParshuramDadasTakewadiTalMan'
let res = str.addSpace();
console.log(res)