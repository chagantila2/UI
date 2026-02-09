

var products = [
    {
        productName: " iphone 13",
        price: 1000,
        color: "black",
        storage: "512GB"

    },
    {
        productName: " iphone se",
        price: 600,
        color: "gray",
        storage: "128GB"

    },
    {
        productName: " iphone 16 pro max",
        price: 1100,
        color: "black",
        storage: "512GB"

    },
    {
        productName: " iphone 17 pro",
        price: 1150,
        color: "orange",
        storage: "128GB"

    },
    {
        productName: " iphone 16 pro",
        price: 1000,
        color: "blue",
        storage: "512GB"

    }
]

var getProduct = "Iphone 16 pro "

var productsList = products.filter(product => getProduct.trim().toLowerCase() == product.productName.trim().toLowerCase())

console.log(productsList)

console.log("-------------")

var productsMap = products.map(product => {
    return  {
        name: product.productName.trim(),
           price : product.price,
                storage: product.storage
    };
});
console.log(products)
console.log(productsMap)

var p=products.map(pro =>
{
    return pro.color 
}
)
console.log(p)

console.log("--------")

var c= "black"

var s= products.filter(
    pr => c==pr.color.trim() );
        console.log(s)

    



