const path = require('path');

const myFilePath = 'subfolder/anotherfolder/test.txt';

// basename
const base1 = path.basename(myFilePath); // will assign test.txt to base1
const base2 = path.basename(myFilePath, '.txt'); // will assign only test to base2 and remove the extention

// extname
const ext = path.extname(myFilePath); // will assign .txt to ext

// dirname
const dir = path.dirname(myFilePath); // will assign subfolder/anotherfolder to dir

// join() // will work on every operating system so it is recommended to use this
const joinedPath = path.join('subfolder', 'anotherfolder', 'test.txt'); // will assign subfolder/anotherfolder/test.txt to joinedPath

// resolve()
const absolutPath = path.resolve('subfolder', 'anotherfolder', 'test.txt'); // will assign /User/username/Desktop/subfolder/anotherfolder/test.txt to absoiutPath

// __dirname // gives you the absolut Path of the current directory where you are at

// __filename // gives you the absolut Path of the current file where you are at
