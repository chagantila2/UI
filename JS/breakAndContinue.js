
var courses = ["reactjs", "java", "python", "nodejs"]

for (var i = 0; i < courses.length; i++) {
    if (courses[i] == "java") {
        continue;
    }
    console.log(courses[i])
}


console.log("--------------")

var products = [
    {
        title: 'iphone 14', price: 30000

    },
    {
        title: 'iphone 16', price: 20000
    },
    {
        title: 'iphone 17', price: 30000
    }
]

for(var i=0; i<products.length;i++){
    if(products[i].title== "iphone 16"){
        break
    }
        console.log(products[i])

}
