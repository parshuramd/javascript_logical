function isPalindrome(str){
    // let str = str;
    if(!(typeof str === "string")){
       return "enter string"
    }
    let revStr = "";
    for(let i=0; i< str.length; i++){
        revStr = str[i] + revStr;
    }
    return revStr === str;
}
console.log(isPalindrome(["pa"]));