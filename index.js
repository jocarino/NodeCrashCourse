//Module Wrapper Function
/* (function (exports, require, module, __filename, __dirname) {

})
console.log(__dirname, __filename) => prints the filename and directory where this module is
*/

const Person = require('./person');


const person1 = new Person('John', 30);

person1.greeting();