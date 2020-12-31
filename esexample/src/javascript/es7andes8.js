/*
es7 features - Add exponent function and add some feature in array
es8 features - Add some features for accessing or manuplating objects
*/

let a = Math.pow(2, 5);
console.log(a);

let b = 2**5;
console.log(b);

let obj = { a : 5, b : 6, c : 8};
console.log(obj);

console.log("Keys :", Object.keys(obj));
console.log("Values :", Object.values(obj));

let entries = Object.entries(obj);
console.log(entries);

for(let entry of entries) {
    console.log("Key :", entry[0], "Values :", entry[1]);
}
