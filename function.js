// function add(a,b){
//     // console.log(a+b)
//     return a+b
// }

// let sum = add(5,2)
// console.log(sum)

// you can treat functions as variables in Java script
// let sayHi = function(a){
//     console.log(a)
// }
// Anonymus Function

// sayHi(2)

// IIFE (immediately invoked function expression)
let add = (function (a,b){
    console.log(a+b)
})(10,20)

let add2 = (function (a,b){
    return a+b
})(10,20)

console.log(add2)
