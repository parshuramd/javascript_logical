function isPalindrome(string) {
  let revStr = string.split("").reverse().join("");
  console.log(revStr);

  return string === revStr;
}

// console.log(isPalindrome("121"));

// 2nd

function isPalindromeTwo(str) {
  let revStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    revStr += str[i];
  }

  console.log(revStr);

  return revStr === str;
}

console.log(isPalindromeTwo("cac"));
