import ParentClass from './ParentClass';

class ChildClass extends ParentClass {

    constructor(name, height, color) {
        super(name, height);
        this.color = color;
    }

    welcome() {
        console.log(`Hi ${this.name} welome - Child Class`);
    }   
}

let child = new ChildClass('mani', 6, 'red');
child.welcome();

let parent = new ParentClass('mani', 6);
parent.welcome();