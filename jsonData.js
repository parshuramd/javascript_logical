const fs = require('fs');

let obj = {
    name: 'ram',
    age: 27
}

let jsonData = JSON.stringify(obj, null, 2); // The third argument adds indentation for readability
let name = "fileName"
fs.writeFile(`${name}.json`, jsonData, 'utf8', (err) => {
    if (err) {
        console.error('Error writing JSON file:', err);
    } else {
        console.log('JSON file has been created.');
    }
});
