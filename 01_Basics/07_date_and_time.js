// Dates

// let myDate = new Date()
// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toLocaleString())
// console.log(typeof(myDate))

// let myCreatedDate = new Date(2023, 0,23)
// let myCreatedDate = new Date(2023, 0,23, 5, 3)
let myCreatedDate = new Date("2023-01-23")
// console.log(myCreatedDate.toDateString())
// console.log(myCreatedDate.toLocaleString())

let myTimeStamp = Date.now()
// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime())
// console.log(Math.floor(myTimeStamp/1000)) // to get in mili sec

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

console.log(`${newDate.getDay()}` +" and the time" + `${newDate.getTime()}`)

let customDate = newDate.toLocaleString('default',{
    weekday: "long",
   
})

console.log(customDate)