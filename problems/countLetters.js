function countLetters(str){
  if(typeof str !== 'string') return 'Enter Valid String';
  let count=0;
  for(let value of str){
    if(value !== " ") count++
  }
  return count;
}
console.log(countLetters("Parshuram Dadas"));