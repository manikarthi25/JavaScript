class ParentClass {
    constructor(name, height) {
        this.name = name;
        this.height = height;
    }

    welcome() {
        console.log(`Hi ${this.name} welcome - Parent Class`)
    }
}

export default ParentClass;