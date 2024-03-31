// Primitive 

// 7 types : String, Number, Boolean, Null , undefined , Symbol , Bigint , 

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)

const bigNumber = 213248674536548548465566679464566458n  //bigint
console.log(bigNumber)

// Reference (Non Primitive)

// Array, Objects, Function 


const heros = ["shaktiman","doga","dsjhk"] //array

let myObj = {   //object
name: "jhitesh",
age:22
}

const myFunction = function(){
    console.log("Hello World")
}

console.log(typeof scoreValue)
console.log(typeof id)
console.log(typeof anotherId)
console.log(typeof bigNumber)
console.log(typeof heros)
console.log(typeof myObj)
console.log(typeof myFunction)


// https://262.ecma-international.org/5.1/#sec-11.4.3


//+++++++++++++++++++++++++++++++++++++++++++ Memory +++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)

let myYoutubeName = "hiteshchoudharydotcom"

let anotherName = myYoutubeName

anotherName = "chaiaurcode"

console.log(anotherName)
console.log(myYoutubeName)

let userOne = {
email: "user@google.com",
upi: "user@ybl"
}


let userTwo = userOne

userTwo.email = "pnk@gmail.com"

console.log(userOne)
console.log(userTwo)
