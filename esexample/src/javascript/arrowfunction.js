// Not anonymous function - function have function name like print with function keyword
function print() {
    console.log("not anonymous function");
}
print();

//Arrow function is anonymous function 

const display = () => {
    console.log("Arrow function - anonymous function");
}
display();

//there is no function name - anonymous function
setTimeout(function() {
    console.log("anonymous function without arrow function");
}, 200);

//arrow function - anonymous function
setTimeout(() => {
    console.log("anonymous function with arrow function");
}, 200);

