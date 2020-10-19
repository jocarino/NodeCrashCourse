class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greeting(){
        console.log(`My name is ${this.name} and I am ${this.age}`)
    }
}

//this is requiered in node, normal import is yet to be implemented in es6
//called common node import
module.exports = Person;