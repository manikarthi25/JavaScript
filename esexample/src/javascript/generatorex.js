/*
   Generator is used for pause the function and resume the function
   pasue - yield method use
   resume - nect method use
   function* - add * symbol in generator function
*/

function* printChar() {
    yield('a');
    yield('b');
    yield('c');
}

const genEx1 = printChar();
console.log(genEx1.next().value);//a
console.log(genEx1.next().value);//b
console.log(genEx1.next().value);//c
console.log(genEx1.next().value);//undefined


function* printCount() {
    let count = 1;
    while(count <=3) {
        yield(count);
        count++;
    }
}

const genEx2 = printCount();
console.log(genEx2.next().value);//1
console.log(genEx2.next().value);//2
console.log(genEx2.next().value);//3
console.log(genEx2.next().value);//undefined


function* evens() {
    let count = 0;
    while(true) {
        count += 2;
        let reset = yield(count);
        if(reset) {
            count = 0;
        }
    }
}

let sequence = evens();
console.log(sequence.next().value);
console.log(sequence.next().value);
console.log(sequence.next().value);
console.log(sequence.next(true).value);
console.log(sequence.next().value);