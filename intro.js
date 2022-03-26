// console.log('Hello from Ujjal')
// // variables decleration with let var and const

// var a; // First the variable is ineteliased with undefined
// console.log(a);

// a=20;
// console.log(a);
// // js is a sinchronus language and a single threaded language

// a=null
// a=true
// a='ujjal' // Js is dynamic language
// console.log(a);

// //let & const

// //1st problem with var - Redecleration

// var b = 10;
// console.log(b)
// var b = 'I am String';
// console.log(b)


// let flag = true;
// var num = 13;
// for (let i =2; i*i<= num; i++){
//     if(num%i == 0){
//         flag = false
//         break
//     }
// }
//  if(flag){
//      console.log('num is prime', num)
//  }else{
//      console.log('num is not prime')
//  }


 // 2nd problem with var - scoping -> Function and block Scoping

// var c = 20

// if (10%2 == 0){
//     var c = 30
//     console.log('in finction: ',c)
// }

// console.log('main ',c)

//Strings
let str = 'pepcoder'
console.log(str)

// //String methods-
// // .lengh
// console.log(str.length)

// // extracting from string- slice, substr
//slice(Starting, ending)
let sliceStr = str.slice(3,7)
console.log(sliceStr)

//substr(Starting, Length)
let subString = str.substr(3, 4)
console.log(subString)

// //replace method
// let hello = 'hello Ujjal'
// console.log(hello)

// let replacestr = hello.replace('hello', 'buy')
// console.log(replacestr)


let text="Visit DELHI TO SEE QUTABMINAR!";
let n = text.search(/Qutabminar/i);
console.log(n)

