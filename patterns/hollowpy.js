function hollowPyramid(num){
  for(let i=1;i<=num;i++){
    let hollo ='';
    for(let j=1;j<=num-i;j++){
      hollo += ' ';
    }
    for(let k=1; k<=2*i-1;k++){
      if(k===1 || k === 2*i-1 || i===num){
        hollo += '*'
      }else {
        hollo += ' '
      }
    }
    console.log(hollo);
  }
}

hollowPyramid(5)