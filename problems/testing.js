let arr = [1,2,3,4,5,6,7,8,9,-1,2];

while(arr.length > 0){
    let value = arr.shift();
    if(value < 0){
        console.log(`Negative value found ${value}`);
        break;
    }
}