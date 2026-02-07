
/**
 * Write a program to print numbers
 *  from 1 to 10 using a for loop.
 * 
 */

var num=10;

for(var i = 1; i<=num; i++){
    console.log(i);
}

console.log("---------------")

/**
 * Write a program to print numbers from 
 * 10 to 1 using a for loop.
 * 
 */

var num=10;

for(var i= num; i > 0 ; i--){
    console.log(i)
}
console.log("---------------")

/**
 * Write a program to print all even 
 * numbers between 1 and 20.
 */



for(var i = 0; i<=20  ; i++ ){
    if(i % 2 ==0){
    console.log(i)

    }
}

console.log("---------------")

/**
 * Write a program to print all odd 
 * numbers between 1 and 20.

 * 
 */

for(var i=0; i<=20; i++){
    if(i%2 >0){
        console.log(i)
    }
}

console.log("---------------")
/**
 * Write a program to print the 
 * multiplication table of a given number.
 */

var num=9;
var sum;
for(var i=1; i<= 9; i++){
console.log(num + "*"  + i +"=" + num*i)
}
console.log("---------------")
/** 
 * Write a program to find the sum
 *  of numbers from 1 to 10 using a for loop.
*/

var num=10
var sum=0;
for(var i=1; i<=num ; i++){
 sum += i
}
console.log(sum)

console.log("---------------")
/*
* Write a program to print each element
 of an array using a for loop.
*/

var arr=[10,20,30,40,29,40];
console.log(arr.length)
for(var i=0; i<arr.length; i++){
    console.log(arr[i])
}


console.log("---------------")
/** 
 * Write a program to count
 * how many elements are in an array 
 * using a for loop.
*/

var arr=[20,34,5,6,34,66]
var count=0;
for(var i=0; i<arr.length; i++){
    count++;
}
    console.log(count)

console.log("---------------")


/**
 * Write a program to print all characters
 *  in a string using a for loop.
 */


var str="lakshmi";
for(var i=0; i<str.length; i++){
    console.log(str.charAt(i))
}
console.log("---------------")
/**
 * Write a program to print
 *  only positive numbers from an array.
 */

var arr=[2,-6,-7,4,89,-0,0,-45,8,9,34,87]

for(var i=0; i<arr.length; i++){
    if(arr[i] >= 0){
        console.log(arr[i])
    }
}


console.log("---------------")
/**
 * Write a program to find the largest 
 * number in an array using a for loop.
 */

var arr=[5,2,6,78,45,67,34,8,5,9,]

var largest =arr[0];

for(var i=0; i< arr.length ; i++){
if(arr[i] > largest){

     largest =arr[i];
}

}
    console.log (largest)



console.log("---------------")
/**
 * Write a program to count how 
 * many even numbers are in an array.

 */

var arr=[1,3,45,66,8,2,4,10,46]

for(var i=0; i<arr.length; i++){
    if(arr[i] % 2 == 0){
        console.log(arr[i])
    }
}
console.log("---------------")
/**
 * Write a program to reverse 
 * a string using a for loop.
 * 
 */

var str="lakshmi"

var reverse = " ";  

console.log(str.length)
console.log(str.length-1)

for(var i=str.length-1; i>=0; i--){
    reverse =reverse + str[i]
}
    console.log(reverse)

console.log("---------------")
/*
*Write a program to calculate the factorial
 of a number using a for loop.
*/

var num=5;

var result =1;

for(var i=1; i<=num; i++){
    result =result * i;
console.log(result)
}

console.log("---------------")
/**
 * Write a program to print a pattern
 *  of stars using a for loop.
 */

var num=5;
for(var i=1; i<=num; i++){
    var pattern="";

    for(var j=1; j<=i; j++){
        pattern =pattern+"*"
    }

    console.log(pattern)
}