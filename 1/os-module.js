// OS modules 
// Provides many useful properties and methods for interacting with 
// The operating system as well as the server.

const Os = require('os');

//info abt current user 
const user = Os.userInfo();

//metho returns the system uptinme in secs
console.log(`The system uptime is ${Os.uptime()} seconds`);


const currentOS = {
    name: Os.type(),
    release: Os.release(),
    totalMem: Os.totalmem(),
    freeMem: Os.freemem(),
};

console.log(currentOS);