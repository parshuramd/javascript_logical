// Original object
const originalObj = { key1: 'value1', key2: 'value2', nestedObj: { key3: 'value3' } };

// Shallow copy using spread operator
const copiedObjSpread = { ...originalObj };

// Shallow copy using Object.assign()
const copiedObjAssign = Object.assign({}, originalObj);

// Modifying the copied objects
copiedObjSpread.key1 = 'modifiedValue1';
copiedObjAssign.key1 = 'modifiedValue1';

// Modifying nested object in copiedObjSpread (still affects originalObj)
copiedObjSpread.nestedObj.key3 = 'modifiedValue3';

console.log('Original Object:', originalObj);
console.log('Copied Object (Spread):', copiedObjSpread);
console.log('Copied Object (Assign):', copiedObjAssign);
