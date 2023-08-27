function printPyramid(num){
    for(let i=1;i<=num;i++){
        let pyramid = '';
        for(let j=1; j<=num-i;j++){
            pyramid += ' ';
        }
        for(let k=1; k<=2*i-1;k++){
            pyramid += '*'
        }
        console.log(pyramid)
    }
}
// printPyramid(5)
printPyramid(5)