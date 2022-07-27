// core module
// file system

const fs = require('fs/promises');

// writeFile sync
// fs.writeFile('data/test.txt', 'Hello word secara sync');

// writefile async
// fs.writeFile('data/test.txt', 'Hello word secara async boss', (e) => {
//     console.log(e);
// })

// membaca isi file sync
const data = fs.readFileSync('data/test.txt');
console.log(data.toString());
