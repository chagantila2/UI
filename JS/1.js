

var dbEmail ="Lakshmich2702@gmail.com"
var dbPassword ="12345"

var userEmail ="lakshmich2702@gmail.com"
var userPwd ="12345"

console.log(dbEmail.toLowerCase() == userEmail);
console.log(dbPassword == userPwd);

console.log(dbEmail ==
userEmail &&  dbPassword == userPwd);

if(dbEmail.toLowerCase() == userEmail && dbPassword == userPwd){
    console.log("logged in successful")
}else{
    console.log("credentials invalid")
}