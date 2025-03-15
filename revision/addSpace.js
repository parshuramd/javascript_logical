function addSpace(str){
    if(!(typeof str) === "string") return "Invalid input";
    let result = str[0];

    for(let i =0; i < str.length; i++){
        if(str[i] === str[i].toUpperCase()){
            result += " ";
        }
        result += str[i];
    }
    return result;
}

console.log(addSpace("HelloWorld"));
