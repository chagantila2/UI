
/**
 * Write a program to find the second 
 * largest number in an array without sorting.
 */

var arr = [20, 10, 80, 40]

var largestNumber = arr[0];
var secondLargeNum = -Infinity;

for (var i = 0; i < arr.length; i++) {

    if (arr[i] > largestNumber) {
        secondLargeNum = largestNumber;
        largestNumber = arr[i]
        console.log(largestNumber)
    }
    else if (arr[i] > secondLargeNum
        && arr[i] != largestNumber) {
        secondLargeNum = arr[i];
    }
}
        console.log(secondLargeNum)

