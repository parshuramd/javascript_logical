let waitFor = async () => {
    try {
        let response = await fetch('https://reqres.in/api/users?page=2');
        let jsonData = await response.json();
        console.log(jsonData);
    } catch (err) {
        console.log('Error',err);
    }
}

waitFor();