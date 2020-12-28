class Calculator {

    static multifly(a, b) {
        return a * b;
    }

    static add(a, b) {
        return a + b;
    }
}

console.log('Multiply - Static Method :', Calculator.multifly(5, 6));
console.log('Add - Static Method :', Calculator.add(5, 6));
