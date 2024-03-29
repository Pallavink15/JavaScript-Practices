const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + "Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String("hiteshhc")
console.log(gameName)
console.log(gameName[0])
console.log(gameName.__proto__) // returns prototype obj
console.log(gameName.length)

const newString = gameName.substring(-8,4)
console.log(newString)

const anotherString = gameName.slice(-8,4)
console.log(anotherString)

const newStringOne = "  hitesh  "
console.log(newStringOne)
console.log(newStringOne.trim())

const url = "https://hitesh%20choudhary.com/"
console.log(url.replace('%20','_'))