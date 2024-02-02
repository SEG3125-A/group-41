// Categories to the products pages: vegetables, fruits, dairy, meat, fish, bread
// options: organic, glutenFree, lactoseFree

var products = [
    {name: "Carrot", value: "carrot", price: 0.5, fruits: true, vegetables: true, organic: true, glutenFree: true, lactoseFree: true},
    {name: "Apple", value: "apple", price: 1, fruits: true, organic: true, glutenFree: true, lactoseFree: true},
    {name: "Milk", value: "milk", price: 2, dairy: true, organic: false, glutenFree: true, lactoseFree: false},
    {name: "Beef", value: "beef", price: 5, meat: true, organic: false, glutenFree: true, lactoseFree: true},
    {name: "Salmon", value: "salmon", price: 7, fish: true, organic: false, glutenFree: true, lactoseFree: true},
    {name: "Bread", value: "bread", price: 3, bread: true, organic: true, glutenFree: false, lactoseFree: true}
];
function getProducts(type){
    var filteredProducts = [];
    for(var i = 0; i < products.length; i++){
        if(products[i][type] == true){
            filteredProducts.push(products[i]);
        }
    }
    return filteredProducts;
}

function getTotal(elems) {
    var sum = 0;
    for(var i = 0; i < elems.length; i++){
        for(var j = 0; j < products.length; j++){
            if(elems[i] == products[j].value){
                sum += products[j].price;
            }
        }
    }
    return sum;
}