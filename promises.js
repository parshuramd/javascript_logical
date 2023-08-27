let promise = new Promise((reslove, reject) => {
    let x=5;
    if (x < 5) {
        reslove(() => {
            return x * 2;
        })
    } else {
        reject(() => {
            return 'this is error'
        })
    }
})

promise.then((res) => {
    console.log(res());
}).catch(err => {
    console.error(err());
})