
/** if user likes video print unlike else like  */
var isUserLiked = "yes";

if(isUserLiked == "Yes".toLowerCase()){
    console.log(" print unlike button");

}else{
    console.log("print like button");
}

console.log("----------------------------")

/** If cart value is greater than or equal 
 * to 500, show coupon code ABCD. 
 * 
  */

var cart = 900;


if(cart >= 500){
    console.log("coupon code : ABCD")
}else{
    console.log("add more items to get coupon code ")
}

console.log("----------------------------")

/**if user is admin or editor display 
 * 'YOU CAN EDIT THE MESSAGE' else not 
 * allowed
 * 
 */

var userRole = "system";

if(userRole == "admin" || userRole == "editor" ){
    console.log("YOU CAN EDIT THE MESSAGE")
}else{
    console.log("NOT allowed")
}

