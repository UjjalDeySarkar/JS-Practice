//Object 
//Key Value Pairs
// to declare an object 
let obj = {}

let cap = {
    fname : "Ujjal",
    lname : "Dey",
    friends : ['Ankit', 'Abhishek', 'Anmol'], // create array in object
    isInsperians : true,
    age : 25,
    //create object
    address :{
        state : "West Bengal",
        city : "Siliguri"
    },

    //function
    sayHi : function hi(){
        console.log("Hii "+this.fname)
    }
}

//console.log(cap)

// Dot notation
// console.log(cap.fname+" "+cap.lname)
 console.log(cap.friends[0])

// Bracket Notation
console.log(cap['age'])

cap.sayHi()