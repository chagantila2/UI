
/** Check whether the number is positive or negetive */


/**
 * number is > = 0 then its positive
 * 
 * number is < 0 then it is negetive
 * 
 */

var number = 99;

if(number >= 0){
console.log("number is positive")
}else{
    console.log("number is negetive");
}


console.log("----------------------")

/**
 * check whether the number is even or odd
 * 
 * number = 12;
 * 
 * number /2 ==0 then print even else odd
 * 
 */

var number =13;

console.log(number%2 == 0);
if(number%2 ==  0){
    console.log("print number is even")

}else{
     console.log("print number is odd")
}


console.log("----------------------")


/**
 * Check whether a person
 *  is eligible to vote (age ≥ 18).
 * 
 */

var CandidateAge = 10;

if(CandidateAge >= 18){
    console.log("candidate is eligible for vote")
}else{
    console.log("not eligible")
}


console.log("----------------------")
/**
 * Find the largest
 *  of two numbers using if–else.
 * 
 * n =12 , A = 55
 * 
 * n > A
 * print n is largest
 */

var num = 12;
var val = 34

if(num > val){
    console.log("print num is largest")
}else{
    console.log("val is largest")
}

console.log("----------------------")
/**
 * Find the largest of 
 * three numbers using if–else.
 * 
 * n =12 , s = 40, a= 45;
 * 
 */

var num =12, Sval= 34, n= 167;

if(num > Sval && num > n ){
    console.log(+num + "print num is largest")
}else if(Sval > n && Sval > num){
        console.log(+Sval + "print sVal is largest")

}else{
        console.log(+n + "print n is largest")

}


console.log("----------------------")
/** 
 * Check whether a given year is a leap year
*/

var year = 2000;

if(year%4 ==0){
    console.log(+year+": print year as leap")
}else{
    console.log("not a leap year")
}

console.log("----------------------")
/**
 * Check whether a password length is
 *  valid or invalid.
 *  */ 

var pwd = "123ss*00";

if(pwd.length >= 8){
    console.log("password is valid")
}else{
    console.log("password is invalid")
}

console.log("----------------------")
/** 
 * Check whether a student is pass
 *  or fail (pass mark ≥ 40).
*/

var PassMark =40;
var SubjectMarks =30;

if(SubjectMarks >= PassMark){
    console.log("pass")
}else{
    console.log("fail")
}

console.log("----------------------")
/**
 * Check whether a person is eligible 
 * for a senior citizen discount (age ≥ 60).
 */

var personAge = 80;

if(personAge >= 60){
    console.log("senior citizen discount applicable")
}else{
    console.log("not eligible");
}

console.log("----------------------")
/** 
 * Check whether the temperature is
 *  hot or cold (example: > 30 = hot).
*/

var temperature = 20;

if( temperature > 30){
console.log(" temperature is hot")
}else{
    console.log("cold")
}

console.log("----------------------")
/**
 * Check whether a number
 *  is greater than 100.
 */

var number= 150;

if( number > 100){
    console.log("number is greater than 100")
}else{
    console.log("number is less than 100")
}

console.log("----------------------")
/**
 * Check whether a number 
 * is divisible by 5.
 */

var number = 28;
if( number%5 ==0){
    console.log("number divided by 5")
}else{
    console.log("not divided by 5")
}
console.log("----------------------")
/**
 * Check whether a character
 *  is a vowel or consonant.//
 */

var letter = "a";

/**if( letter == "a" || letter == "e" || 
    letter =="i" || letter == "o" || 
    letter =="u" )
    
   */
  
  if('aeiou'.includes(letter))  {

console.log(letter+ ":print letter is vowel")
}else{
    console.log( letter+ ":print letter is consonant")
}

console.log("----------------------")
/** 
 * Check whether a number
 *  is multiple of 3 or not.//
*/
var number = 29
console.log(number % 3==0)
if(number % 3 == 0){
    console.log("number divisible by 3")
}else{
    console.log("not divisible")
}

console.log("----------------------")
/** 
 * Check whether a number is inside 
 * a given range (1–50).//

*/

var number = 90;

if(number <= 50){
    console.log(number + ": number is 1-50 range")
}else{
    console.log("number is not in 1-50 range")
}

console.log("----------------------")

/** 
 * Check whether a number is 
 * zero, positive, or negative.
 * 
*/

var number = 0;

if(number > 0 )
{
    console.log(number + ":print number is positive")
}else if( number < 0){
    console.log("number is negetive")
}else{
    console.log("number is zero")
}

console.log("----------------------")

/**
 * Check whether a given character is an alphabet or not.//
 */

var givenChar = "a";
if((givenChar >="a" && givenChar <= "z") ||
(givenChar >= "A" && givenChar <= "Z"))
{
    console.log("print given letter is  a alphabet ")
}else{
    console.log("print given letter is not alphabet")
}

console.log("----------------------")

/** 
 * Check whether a given number
 *  is a two-digit number.//

*/

var number = 70;
if(number > 9 && number <= 99){
    console.log("given number is two digit number")
}else{
    console.log("given number is not two digit number")
}
console.log("----------------------")

/*Check whether a traffic signal is Red,
 Yellow, or Green (basic conditions)//.

* */

console.log("----------------------")

/**
 * Check whether the time is AM or PM
 */

var time = "15"

if(time >= 12){
console.log("time is considered as PM")
}else{
    console.log("time is considered as AM")
}
