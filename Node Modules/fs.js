// File System Module
//1. We will read, write, updating, delete files from out script
const fs = require('fs')
let content =fs.readFileSync('f1.txt')
console.log(""+content.BYTES_PER_ELEMENT)

//write
fs.writeFileSync('f2.txt','Hello from f2')//it will create a new file f2 and write on it.

//append
fs.appendFileSync('f2.txt', ' This is f2 data')

//delete a file by passing a path
fs.unlinkSync('f2.txt')
console.log("File Removed")