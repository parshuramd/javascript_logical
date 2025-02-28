function reverseStr(str) {

    if (typeof str !== "string") return "Enter Valid String";

    let revStr = "";
    for (const value of str) {
        revStr = value + revStr;
    }
    return revStr;

}

let result = reverseStr("Good Morning World");
console.log(result);