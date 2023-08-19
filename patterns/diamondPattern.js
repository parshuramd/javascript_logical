function diamondPattern(num) {
  for (let i = 1; i <= num; i++) {
    let pyramid = '';
    for (let j = 1; j <= num - i; j++) {
      pyramid += ' '
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
      pyramid += '*'
    }
    console.log(pyramid);
  }
  for (let i = num; i >= 1; i--) {
    let pyramid = '';
    for (let j = 1; j <= num - i; j++) {
      pyramid += ' '
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
      pyramid += '*'
    }
    console.log(pyramid);
  }
  
}
diamondPattern(5)
