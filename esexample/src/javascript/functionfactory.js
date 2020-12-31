/*
A factory function is any function which is not a class or constructor 
that returns a (presumably new) object. In JavaScript, 
any function can return an object
*/

console.log("Function Factory");
let firstValue = (x) => {
    let secondValue = (y) => {
        return y + x;
    }
    return secondValue;
}

let callFirstValue = firstValue(10);
let add = callFirstValue(20);
console.log(add);


/*
const addFactory = (x) => {
    return (y) => {
      return x + y;
    };
  };
  const add50 = addFactory(50);
  const add30 = addFactory(30);
  
  Note we can actually implement the addition factory on one line:
  
  const addFactory = x => y => x + y; 
  */