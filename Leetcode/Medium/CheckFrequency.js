
/**
 * Write a program to count the frequency of each
 *  element in an array.
 */


var arr = [10, 4, 7, 8, 3, 7, 4, 3]

var visited = []

for (var i = 0; i < arr.length; i++) {

    if (visited[i]) {
        continue
    }

    var counter = 0;

    for (var j = 0; j < arr.length; j++) {

        if (arr[i] == arr[j]) {
            counter++;
            visited = true
        }
    }
    console.log(arr[i] + " :" + counter)
}



