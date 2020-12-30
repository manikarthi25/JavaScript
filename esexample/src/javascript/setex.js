// don't allow duplicate values
console.log("Set Example");
let a = new Set();
a.add("mani");
a.add(30);
a.add({x : 20, y : 40});
console.log(a);


let arrex = [1, 2, 3, 4, 1];
let b = new Set(arrex);
console.log(b);

for(let element of b.values()) {
    console.log(element);
}

let chars = 'welcometoall';
let chars_arr = chars.split("");
let chars_arr_set = new Set(chars_arr);
for(let element1 of chars_arr_set.values()) {
    console.log(element1);
}
