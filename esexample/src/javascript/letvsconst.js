let a = 10;
function print() {
    let a = 20;
    console.log('let - inside Block :', a);
}
print();
console.log('let - outside Block :', a);

const b = 10;
function display() {
    const b = 20;
    console.log('const - inside Block :', b);
}
display();
console.log('const - outside Block :', b);

var c = 10;
function show() {
    var c = 20;
    console.log('var - inside Block :', c);
}
show();
console.log('var - outside Block :', c);