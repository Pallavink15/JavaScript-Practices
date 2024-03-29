/* let score = 33 //check case for null, undefined , string, boolean

console.log(typeof score)
console.log(typeof (score))  // two ways to write type of

let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber)
*/

// "33" => 33
// "33abc" => NaN
// true => 1 , false =>0
// null => 0
// undefined => NaN

/*
let isLoggedIn = "Pallavi"

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)
*/

// 1 => true , 0 => false
// "" => false
// "Pallavi" => true

/*
let someNumber = 55
let stringNumber = String(someNumber)
console.log(typeof stringNumber)
*/

//*************************************** Operations ********************************************************

/*
let value = 5
let negValue = -value
console.log(negValue)
console.log(typeof negValue)

console.log(2+2)
console.log(2-2)
console.log(10*2)
console.log(10**2) //power
console.log(2/2)
console.log(2%2)
*/

/*
let str1 = "hello"
let str2 = "pallavi"

let str3 = str1+str2
console.log(str3);

console.log("1"+4);
console.log(1+"4");
console.log("1"+4+4);
console.log(4+4+"1");

console.log((3+4)* 5 % 3); // always write clean code like this

//some wrong practices
console.log(+true);
console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2+2
*/



let gameCounter = 100
++gameCounter;
console.log(gameCounter)
