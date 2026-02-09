
var products = [
    {
        productName: " iphone 13",
        price: 1000,
        color: "black",
        rating: 4.5,
        storage: "512GB"
    },
    {
        productName: " iphone se",
        price: 600,
        color: "gray",
        storage: "128GB",
        rating: 4
    },
    {
        productName: " iphone 16 pro max",
        price: 1100,
        color: "black",
        storage: "512GB",
        rating: 5
    },
    {
        productName: " iphone 17 pro",
        price: 1150,
        color: "orange",
        storage: "128GB",
        rating: 4
    },
    {
        productName: " iphone 16 pro",
        price: 1000,
        color: "blue",
        storage: "512GB",
        rating: 3
    }
]

var sortedData = products.sort((a,b)=>
{
    if(a.price >b.price){
        return -1
    }
})

console.log(sortedData)