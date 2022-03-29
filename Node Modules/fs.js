// // File System Module
// //1. We will read, write, updating, delete files from out script
const fs = require('fs')
const path = require('path')

// let content =fs.readFileSync('f1.txt')
// console.log(""+content.BYTES_PER_ELEMENT)

// //write
// fs.writeFileSync('f2.txt','Hello from f2')//it will create a new file f2 and write on it.

// //append
// fs.appendFileSync('f2.txt', ' This is f2 data')

// //delete a file by passing a path
// fs.unlinkSync('f2.txt')
// console.log("File Removed")




/* Directories */

// fs.mkdirSync('myDirectory') //it create directory 

// fs.rmdirSync('myDirectory') // it delete the directory

//path
//To check weather a directory exixt or not
// let doesExist = fs.existsSync('myDirectory')
// console.log(doesExist)

// Stats of a path (what are the contents inside of a folder)
// let statsOfPath = fs.lstatSync('myDirectory')
// console.log(statsOfPath)

// console.log('isFile ', statsOfPath.isFile())// it check whether a passed path is a file or not
// console.log('isDirectory ', statsOfPath.isDirectory()) // it check whether a passed path is a directory or not

// let folderPath= '//Users//ujjaldey//jsPractice//JS-Practice//Node Modules//myDirectory'
// let folderContent = fs.readdirSync(folderPath) // it is used to check the content of a particular directory
// console.log('Directory content '+ folderContent)

//copy files
let sourceFile = '//Users//ujjaldey//jsPractice//JS-Practice//Node Modules//myDirectory//f3.txt'
let destFolder = '//Users//ujjaldey//jsPractice//JS-Practice//Node Modules//myDirectory2'

let toBeCopiedFileName= path.basename(sourceFile)
console.log(toBeCopiedFileName)

let destPath = path.join(destFolder,toBeCopiedFileName)
console.log(destPath)

fs.copyFileSync(sourceFile, destPath)
console.log('File Copyed')
