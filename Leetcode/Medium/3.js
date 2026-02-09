
var arr = [2, 10, 4, 5, 6, 12]

var largest = arr[0]

var secondLargest = 0

for (var i = 1; i < arr.length; i++) {

    if (arr[i] > largest) {

        secondLargest = largest
        largest = arr[i]
    }

    else if (arr[i] > secondLargest &&
        arr[i] != largest) {

        secondLargest = arr[i]

    }
}
console.log(largest)
console.log(secondLargest)
