
var courses = [
    {

        title: "React JS",
        price: "10000",
        technology: "javascript",
        rating: "4.5",
        img: ""
    },
    {

        title: "Angular JS",
        price: "15000",
        technology: "css",
        rating: "4",
        img: ""
    },
    {

        title: "java springboot ",
        price: "20000",
        technology: "java",
        rating: "4.7",
        img: ""
    },

    {

        title: "AWS",
        price: "15000",
        technology: "cloud",
        rating: "4",
        img: ""
    },
    {

        title: "datascience",
        price: "20000",
        technology: "python",
        rating: "4.5",
        img: ""
    }
]
/**
 * Map Method
 */
var tech= courses.map(course => {
   return course.price, course.technology

})

console.log(tech)
console.log("------------")

var filterTech ="java"
var technologies = courses.filter(
    course => filterTech == course.technology
)
console.log(technologies)

console.log("-----------")