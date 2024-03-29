const accountId = 14453
let accountEmail = "pallavi@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

//accountId = 2 //not allowed
accountEmail = "abc@gmail.com"
accountPassword = "21212"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var bcuz of iisue in block scoped and functional scope
*/

console.table([accountEmail,accountPassword,accountCity,accountState]);