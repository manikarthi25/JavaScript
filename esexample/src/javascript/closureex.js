/*
A closure is the combination of a function bundled together (enclosed)
 with references to its surrounding state (the lexical environment). 
 In other words, a closure gives you access to an outer function's 
  from an inner function.
*/

console.log("Closure Example");
let cloex = () => {
    let name = 'mani';
    let reveal = () => {
        console.log(name);
    }
    reveal();
}

cloex();