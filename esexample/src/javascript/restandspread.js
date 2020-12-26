
//Spread operator: allows iterables( arrays / objects / strings ) to be expanded into single arguments/elements.
let a = [1, 2, 3];
let b = [...a, 4, 5, 6];
console.log("Spread Operator : ");
console.log(b);


//Rest parameter: collects all remaining elements into an array.
function add(...args) {
    let result = 0;
  
    for (let arg of args) result += arg;
  
    return result
  }
  console.log("Rest Parameter : ");
  add(1) // returns 1
  add(1,2) // returns 3
  add(1, 2, 3, 4, 5) // returns 15

  function xyz(x, y, ...z) {
    console.log(x, ' ', y); // hey hello
  
    console.log(z); // ["wassup", "goodmorning", "hi", "howdy"]
    console.log(z[0]); // wassup
    console.log(z.length); // 4
  }
  
  xyz("hey", "hello", "wassup", "goodmorning", "hi", "howdy");

  /*
  Note: Rest parameters have to be at the last argument. 
  This is because it collects all remaining/ excess arguments into an array. 
  So having a function definition like this does not make sense and it errors out. :
  */

  /*The spread operator allows us to expand elements. 
  With rest parameters we were able to get a list of arguments into an array. 
  spread operators however, let us unpack elements in an array to single/individual arguments
  */