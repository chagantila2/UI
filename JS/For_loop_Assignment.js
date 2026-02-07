
/**
 *  1. Create an array for 5 emails and print
 *  all the emails using for loop.
 */
var arrEmails = ["lakshmi@gmail.com", "sowjanya506@gmail.com",
    "contact@gmail.com", "lakshmich2702@gmail.com"
    , "chaganti@gmail.com"

]

console.log(arrEmails);

console.log(arrEmails.length);

for (var i = 0; i < arrEmails.length; i++) {
    console.log(arrEmails[i]);
}

console.log("---------------------")

/**
 * 2. Create JSON array of 3 youtube videos and
 *  print video titles using for loop.
 */

var youtube =

    [
        {
            "title_id": 0,
            "title": "Sakshi Gopal || Animated Short Film "
        },
        {
            "title_id": 1,
            "title": "TOM VE JERRY"
        },
    ]

    console.log(youtube)

//console.log(youtube.length)

for(var i=0; i<youtube.length; i++){
    console.log(youtube[i].title)
    console.log(youtube[i].title_id)
}