
/**
 * 1. Create JSON array of ecommerce 
 * products and filter products price
 *  greater than 15000.
 */

var products = [
    {
        productName: " iphone 13",
        price: 13000,
        color: "black",
        rating: 4.5,
        storage: "512GB"
    },
    {
        productName: " iphone se",
        price: 80000,
        color: "gray",
        storage: "128GB",
        rating: 4
    },
    {
        productName: " iphone 16 pro max",
        price: 67000,
        color: "black",
        storage: "512GB",
        rating: 5
    },
    {
        productName: " iphone 17 pro",
        price: 13150,
        color: "orange",
        storage: "128GB",
        rating: 4
    },
    {
        productName: " iphone 16 pro",
        price: 89000,
        color: "blue",
        storage: "512GB",
        rating: 3
    }
]

var productList = products.filter(product => product.price > 15000)
console.log(productList)


console.log("---------------------------")
/**
 * 2. Sort products based
 *  on rating (asc, desc).
 */

var ProductsRating = products.sort((a, b) => {
    if (a.rating > b.rating) {
        return -1;
    }
})

console.log(ProductsRating)


var ProductsRatings = products.sort((a, b) => {
    if (a.rating < b.rating) {
        return -1;
    }
})

console.log(ProductsRatings)

console.log("---------------------------")

/**
 * Create JSOn array of youtube videos 
 * and extract titles into new array
 */

var yt = [
    {
        "title": "Shabari Ki Amar Bhakti ",
        views: 20000

    },
    {
        "title": "TOM VE JERRY #YENİ Çizgi Film | Gökyüzünde Kovalamaca Derlemesi",
        views: 120000

    },
    {
        "title": "Dad says yes for Nastya and Ev",
        views: 200000


    }

]

var ytTitles = yt.map(ch =>{
    return ch.title
})

console.log(ytTitles)