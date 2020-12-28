function BioData(name, age) {
    this.name = name;
    this.age = age;

    this.printName = () => `PrintName Method - BioData - Name is ${this.name}`;
}



// create object for bioData function
let bio = new BioData('mani', 25);
console.log('Print Name function :', bio.printName());

//declare new variable in function biodata using prototype
BioData.prototype.mobileNumber = '9999';
console.log('adding new variable in function using prototype - moile number :', bio.mobileNumber);
