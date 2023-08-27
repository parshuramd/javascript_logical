let promise = fetch('https://reqres.in/ap/users?page=2')
    .then(response => response.json())
    .then(jsonData => {
        console.log(jsonData);
        return 'Hello'; // Resolving the outer promise with 'Hello'
    })
    .catch(err => {
        console.error(err);
        throw err; // Rethrowing the error to be caught by the outer catch block
    });

promise.then(data => {
    console.log(data);
}).catch(err => {
    console.error(err);
});
