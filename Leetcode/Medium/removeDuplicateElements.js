

var arr = [10, 4, 6, 4]

var result = [];

var isDuplicate = false;

for (var i = 0; i < arr.length; i++) {

    for (var j = 0; j < result.length; j++) {

        if (arr[i] == result[j]) {
            isDuplicate = true;
            break;
        }
    }
         if (isDuplicate == false) {
        result.push(arr[i])


    } 

}
console.log(result)