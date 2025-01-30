const os = require('os');



console.log('OS Type:', os.type());
console.log('OS Release:', os.release());
console.log('OS Hostname:', os.hostname());
console.log('OS Arch:', os.arch());
console.log('OS Version:', os.version());

console.log('Total Memory:', os.totalmem(), 'bytes');
console.log('Free Memory:', os.freemem(), 'bytes');
console.log('CPU Info:', os.cpus());

console.log('User Info:', os.userInfo());


console.log('System Uptime:', os.uptime(), 'seconds');
console.log('Number of CPUs:', os.cpus().length);
console.log('CPU Model:', os.cpus()[0].model);
console.log('CPU Speed:', os.cpus()[0].speed, 'MHz');

console.log('Network Interfaces:', os.networkInterfaces());