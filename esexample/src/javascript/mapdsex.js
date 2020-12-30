let mapex = new Map();
let keyex = "key1";
mapex.set(keyex, "this is map example");
let obj = {a:10, b:20};
mapex.set("key2", obj);
for(let [key, value] of mapex.entries()) {
    console.log(`key ${key} - value ${value}`)
}


let arr_of_arr = [[1, "one"], [2, "two"], [3, "three"]];
let map_arr = new Map(arr_of_arr);
for(let [key1, value1] of map_arr.entries()) {
    console.log(`key ${key1} - value ${value1}`);
}

let letters = 'fskhkfskhfkshak';
let lettersMap = new Map();
for(let i = 0; i<letters.length; i++) {
    let letter = letters[i];
    if(!lettersMap.has(letter)) {
        lettersMap.set(letter, 1);
    } else {
        lettersMap.set(letter, lettersMap.get(letter) + 1);
    }
}

for(let [key2, value2] of lettersMap.entries()) {
    console.log(`key ${key2} - value ${value2}`);
}