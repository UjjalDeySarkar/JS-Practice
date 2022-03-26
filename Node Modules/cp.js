const cp = require('child_process')

// console.log('Trying to open Calculator')
// // cp.execSync('calc') // for windows
// cp.execSync('open -a Calculator') // for mac
// console.log('Calculator oppened')

// console.log('opening VS code')
// cp.execSync('code') 
// console.log('VS code oppened')

// // open -a "Google Chrome"
// console.log('Trying to open chrome')
// // cp.execSync('start chrome') // for windows
// cp.execSync('open -a "Google Chrome" https://www.youtube.com/') // for mac
// console.log('chrome oppened')

let output = cp.execSync('node test.js')
// console.log(output) // output will show in a buffer(binary format) form
console.log("output is "+output) 