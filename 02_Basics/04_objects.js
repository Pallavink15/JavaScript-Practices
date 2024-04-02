// const tinder = new Object()  //singleton object
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

//console.log(tinderUser)

const regularUser = {
    userFullName:{
    email: "some@gmail.com",
    fullName: {
        firstName: "Pallavi",
        lastName: "nk"
        }
    }
}

//console.log(regularUser.userFullName.fullName.firstName)

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}

//const obj3 = {obj1, obj2}
//const obj3 = Object.assign({},obj1,obj2) // coppies all enum from target to source , so here fist is target n others source

const obj3 = {...obj1, ...obj2}  // sprade operator is ...
// console.log(obj3)

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    }
    ,
    {
        id: 1,
        email: "h@gmail.com"
    }
    ,
    {
        id: 1,
        email: "h@gmail.com"
    }
    ,
    {
        id: 1,
        email: "h@gmail.com"
    }

]

users[1].email // to access 

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


//************ De-structuring  **********************/

const course = {
    coursename: "js",
    price: "999",
    courceInstructor: "hitesh"
}

// const {courceInstructor} = course   //{} is de structuring , while using in code for calling properties
// console.log(courceInstructor)

const {courceInstructor : instrucor} = course 
console.log(instrucor)

// ******************* API ************************

// {
// "name": "pallavi",
// "coursename": "js",
// "price": "free"
// }
