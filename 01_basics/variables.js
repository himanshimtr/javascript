const accountId=1123
let accountEmail="him@gmail.com"
var accountPassword="121212"
accountCity="Pune"  //never recommended
let accountState;

// accountId=2  //not allowed to change const variables

accountEmail="hello@gmail.com"
accountPassword="23445"
accountCity="noida"

console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

/* 
Prefer not to use var 
because of issue in block scope and functional scope
*/