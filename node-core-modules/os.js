const os = require('os');

// arch
console.log(os.arch()); // will give you the architecture of the operating system

// platform()
console.log(os.platform()); // will give you the platform of the operating system

// cpus()
console.log(os.cpus()); // will give you the information about the CPUs of the operating system

// freemem()
console.log(os.freemem()); // will give you the amount of free memory in the operating system
console.log(`Free Memory: ${os.freemem()} bytes`); 
console.log(`Free Memory: ${os.freemem() / 1024 / 1024 / 1024} GB`); 

// totalmem()
console.log(os.totalmem()); // will give you the total amount of memory in the operating system

// homedir()
console.log(os.homedir()); // will give you the home directory of the operating system

// uptime()
console.log(os.uptime()); // will give you the amount of time the operating system has been running
const uptime = os.uptime();
const days = Math.floor(uptime / 60 / 60 / 24);
const hours = Math.floor(uptime / 60 / 60) % 24;
const minutes = Math.floor(uptime / 60) % 60;
const seconds = Math.floor(uptime) % 60;
console.log(`Uptime: ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`);

// hostname()
console.log(os.hostname()); // will give you the hostname of the operating system

// networkInterfaces()
console.log(os.networkInterfaces()); // will give you the network interfaces of the operating system
console.log(os.networkInterfaces().eth0); // will give you the network interfaces of the operating system
console.log(os.networkInterfaces().eth0.address); // will give you the address of the network interface
console.log(os.networkInterfaces().eth0.netmask); // will give you the netmask of the network interface
console.log(os.networkInterfaces().eth0.family); // will give you the family of the network interface
console.log(os.networkInterfaces().eth0.mac); // will give you the mac address of the network interface
console.log(os.networkInterfaces().eth0.internal); // will give you the internal address of the network interface
