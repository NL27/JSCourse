// const fs = require('fs');
const fs = require('fs/promises');

// // Write to a file

// // Async Callback version
// fs.writeFile('text1.txt', 'Hello World', (err) => {
//     if (err) throw err;
//     console.log('File written successfully');
// });

// // Async Promise version
// fs.writeFile('text2.txt', 'Hello World')
//     .then(() => console.log('File written successfully'))
//     .catch((err) => console.log(err));

// // Sync version
// fs.writeFileSync('text3.txt', 'Hello World');
// console.log('File written successfully');

// // async/await version // this is what the course creator would use 
// async function createFile(filename, content) {
//     try {
//         await fs.writeFile(filename, content);
//         console.log('File written successfully');
//     } catch (err) {
//         console.log(err);
//     }
// }

// createFile('text4.txt', 'Hello World');


// // Read from a file
// async function readFile(filename) {
//     try {
//         const data = await fs.readFile(filename, 'utf-8');
//         console.log(data);
//     } catch (err) {
//         console.log(err);
//     }
// }

// readFile('text1.txt');


// // delete fila
// async function deleteFile(filename) {
//     try {
//         await fs.unlink(filename);
//         console.log('File deleted successfully');
//     } catch (err) {
//         console.log(err);
//     }
// }

// deleteFile('text1.txt');


// // rename file
// async function renameFile(oldName, newName) {
//     try {
//         await fs.rename(oldName, newName);
//         console.log(`File ${oldName} renamed to ${newName} successfully`);
//     } catch (err) {
//         console.log(err);
//     }
// }

// renameFile('text1.txt', 'text2.txt');


// create a directory / folder
async function createDirectory(dirname) {
    try {
        await fs.mkdir(dirname);
        console.log(`Directory ${dirname} created successfully`);
    } catch (err) {
        console.log(err);
    }
}

createDirectory('test');