// Singleton     -- Object created using constructor
// Object.create() 

//object literals

const mySym = Symbol("Key1")

const JsUser = {
    name: "Pallavi",
    "fullname": "Pallavi Khade",
    [mySym]:"myKey1", // use sqr bracs to use as symbol follow syntax
    age: 18,
    location: "Mumbai",
    email: "pnk@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}

// console.log(JsUser)
// console.log(JsUser.email)
// console.log(JsUser["email"])  // 2nd way to access as string 
// console.log(JsUser["fullname"]) 
// console.log(JsUser[mySym]) 


// JsUser.email = "pnk@chatgpt.com"
// Object.freeze(JsUser)
// JsUser.email = "pnk@microsoft.com"
// console.log(JsUser.email)

JsUser.greetings = function(){
    console.log("hello js user");

}

JsUser.greetingsTwo = function(){
    console.log(`hello js user,${this.name}`);

}

console.log(JsUser.greetings);        // only to refer fun
console.log(JsUser.greetings());
console.log(JsUser.greetingsTwo());