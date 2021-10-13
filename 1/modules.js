// Modules
// Common JS every File is a Module (by default)
// Modules - Encapsulated code (only shares minimum)



const names = require("./modules2");
const sayHi = require("./modules3");
const data = require('./alt_modules');

console.log(data);
console.log(names);


sayHi("Beau Iyere");
sayHi(names.John);
sayHi(names.Peter);