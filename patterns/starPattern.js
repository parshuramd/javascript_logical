function starPattern(num) {
    for (let i = 1; i <= num; i++) {
        let star = '';
        for (let j = 1; j <= i; j++) {
            star += '* '
        }
        console.log(star);
    }
}
starPattern(5)