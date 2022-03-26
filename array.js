// Arrays
let arr = [1, 'Hello', 2, true]
console.log(arr)

// Array Methods
let car = ['bmw','Jagwar','msd']
console.log(car)
// Replace an element in an array
car[1]='Bentle'
console.log(car)

// New element in array
car[3] = 'audi'
console.log(car)

let popcar = car.pop()
console.log('Pop Car',popcar)
console.log(car)

car.push('Alto')
console.log(car)

// Shift - its removes an element at the start of an array
let shiftcar = car.shift()
console.log(shiftcar)
console.log(car)

// unshift - It adds the element at the start of an array
let unshiftcar = car.unshift('alto')
console.log("un "+unshiftcar)
console.log(car)



