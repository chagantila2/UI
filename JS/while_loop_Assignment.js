/**
 * Create an array for 5 emails and print all the emails
 *  using while loop.
 */
var emailArr = ["lakshmi@gmail.com", "lakshmi123@gmail.com"
    , "chaganti123@gmail.com", "contact@gmail.com"
]

var index = 0;
while (index < emailArr.length) {
    console.log(emailArr[index])
    index++;
}

console.log("--------------")

/**
 * Create JSON array of 3 youtube videos and print video
 *  titles using while loop.
 */

var yt = [
    {
        "title": "Shabari Ki Amar Bhakti ",

    },
    {
        "title": "TOM VE JERRY #YENİ Çizgi Film | Gökyüzünde Kovalamaca Derlemesi | ‪@CartoonitoTurkiye",
    },
    {
        "title": "Dad says yes for Nastya and Ev"


    }

]

var index =0;

while(index < yt.length){
    console.log(yt[index].title)
    index++
}
