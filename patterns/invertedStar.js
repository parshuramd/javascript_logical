function invertedStar(num){
    for(let i=num; i>=1;i--){
        let star = '';
        for(let j=1;j<=i;j++){
            star += '* '
        }
        console.log(star);
    }
}
invertedStar(5)